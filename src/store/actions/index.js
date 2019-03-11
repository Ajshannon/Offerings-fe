import * as actionTypes from './actionTypes.js'
import axios from 'axios';


export const authStart = () => {
    console.log('authStart')
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, user) => {
    console.log('authSuccess')
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        user: user
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

//removes items from localstorage
export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('username');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
} 

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, expirationTime * 1000)
    }
} 


export const getUser = (token) => {

    return dispatch => {
        axios.get('http://127.0.0.1:8000/rest-auth/user/', {
            headers: {'Authorization': "Token " + token}
        })
        .then(res => {
            dispatch(authSuccess(token, res.data))
        })
    }
}

// export const getProfile = (token) => {

//     return dispatch => {
//         axios.get('http://127.0.0.1:8000/api/v1/user/', {
//             headers: {'Authorization': "Token " + token}
//         })
//         .then(res => {
//             dispatch(authSuccess(token, res.data))
//         })
//     }
// }

// export const updateProfile = () => {
//     return dispatch => {
//         axios.put('http://127.0.0.1:800/api/v1/profile', {
//             headers: {'Authorization': "Token " + token}
//         })
//     }
// }


export const PostOffering = (title, address, description, image, id) => {
    const url = 'http://127.0.0.1:8000/api/v1/profile/' + id + '/';
    const token = localStorage.getItem('token')
    
    return dispatch => {
        axios.get(url, {
            headers: {'Authorization': "Token " + token}
        })
        .then(res => {
            const profile = res.data.id
            dispatch(PostOfferingPt2(title, address, description, image, profile))
            
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}

export const PostOfferingPt2 = (title, address, description, image, profile) => {
    const url = 'http://127.0.0.1:8000/api/v1/offerings/';
    const token = localStorage.getItem('token');
    
    return dispatch => {
        axios.post(url, {
            title: title,
            address: address,
            description: description,
            image: image,
            profile: profile
        }, {
            headers: {'Authorization': "Token " + token},
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}

export const authLogin = (username, password, csrfToken) => {
    
    return dispatch => {
        dispatch(authStart());
        axios.post('http://127.0.0.1:8000/rest-auth/login/', {
            username: username,
            password: password,
        }, {
            mode: 'cors',
        })
        .then(res => {
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            localStorage.setItem('username', username);
            dispatch(getUser(token))
            dispatch(checkAuthTimeout(3600))
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}



export const authSignup = (username, password1, password2, first_name, last_name, email) => {
    console.log("signing up...")
    return dispatch => {
        dispatch(authStart());
        axios.post('http://127.0.0.1:8000/rest-auth/registration/', {
            username: username,
            password1: password1,
            password2: password2,
            first_name: first_name,
            last_name: last_name,
            email: email
            
        })
        .then(res => {
            
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            localStorage.setItem('username', username);
            dispatch(getUser(token))
            dispatch(checkAuthTimeout(3600))
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}

// Checks State => ? logs out if there is no token : logs in 
export const authCheckState = () => {
    return dispatch => {
        console.log('checking')
        const token = localStorage.getItem('token');
        if (token === undefined) {
            console.log('token undefined')
            dispatch(logout());
            
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if ( expirationDate <= new Date() ) {
                console.log('session expired')
                dispatch(logout());
            } else {
                console.log('session restored')
                dispatch(getUser(token));
                dispatch(checkAuthTimeout( (expirationDate.getTime() - new Date().getTime()) / 1000) );
            }
        }
    }
}
