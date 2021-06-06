import React from 'react'

class ErrorBoundary extends React.Component {
    constructor() {
        super()

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    render() {
        return this.state.hasError ?
        <h2>Oh no, we are having some technical issues, please try again</h2>
        :
        this.props.children
    }
}

export default ErrorBoundary