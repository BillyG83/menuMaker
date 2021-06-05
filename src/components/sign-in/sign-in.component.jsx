import React, { useState } from 'react'
import Button from '../button/button.component.jsx'
import './sign-in.styles.scss'

const SignIn = () => {
    const [userData, setUserData] = useState({ email: '', password: ''})
    const { email, password } = userData

    const handleSubmit = event => {
        event.preventDefault()
        console.log(email);
        console.log(password);
        setUserData({ email: '', password: '' })
    }

    const handleChange = event => {
        const { value, name } = event.target
        setUserData({ [name] : value })
    }

    return (
        <form className="sign-in form" onSubmit={handleSubmit}>
            <label>
                email
                <input 
                    name="email"
                    onChange={handleChange}
                    placeholder="your email" 
                    required
                    type="email" 
                    value={email}
                />
            </label>
            
            <label>
                password
                <input 
                    name="password"
                    onChange={handleChange}
                    placeholder="your password" 
                    required
                    type="password" 
                    value={password}
                />
            </label>

            <Button 
                id="submit-sign-in" 
                text="Submit"
                type="submit"
            />
        </form>
    )
}

export default SignIn