import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

//{ username: 'Lambda School', password: 'i<3Lambd4' }

const initialState = {
    isLogginIn:false,
    credentials:{
        username:'Lambda School',
        password:'i<3Lambd4'
    }
}

function LoginForm(props) {
    const { setIsLoggedIn } = props
    const [loginForm, setLoginForm] = useState(initialState)
    const history = useHistory()

    const onChange = (event) => {
        const {name, value} = event.target
        setLoginForm({...loginForm, credentials: {...loginForm.credentials, [name]:value }})
    }

    const submitCredentials = (event) => {
        setLoginForm({...loginForm, isLogginIn:true})
        event.preventDefault()
        axios.post('http://localhost:5000/api/login', loginForm.credentials)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.payload)
            setIsLoggedIn(true)
            setLoginForm(initialState)
            history.push('/friends')
        })
        .catch(err => {
            debugger
            console.log(err.message)
            err.response && console.log(err.response.data.error)
            setLoginForm(initialState)
        })
    }

    return (
    <form onSubmit={submitCredentials}>
        <label>
            <input 
            name='username'
            type='text'
            placeholder='name'
            value={loginForm.credentials.username}
            onChange={onChange}
            />
        </label>
        <label>
            <input 
            name='password'
            type='password'
            placeholder='password'
            value={loginForm.credentials.password}
            onChange={onChange}
            />
        </label>
        <button>Login</button>
    </form>
    )
}

export default LoginForm