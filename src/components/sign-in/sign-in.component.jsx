import React from 'react'
import Button from '../button/button.component.jsx'
import './sign-in.styles.scss'

class SignIn extends React.Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target
        this.setState({ [name] : value })
    }

    render() {
        return (
            <form className="sign-in form" onSubmit={this.handleSubmit}>
                <label>
                    email
                    <input 
                        name="email"
                        onChange={this.handleChange}
                        placeholder="your email" 
                        required
                        type="email" 
                        value={this.state.email}
                    />
                </label>
                
                <label>
                    password
                    <input 
                        name="password"
                        onChange={this.handleChange}
                        placeholder="your password" 
                        required
                        type="password" 
                        value={this.state.password}
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

}

export default SignIn