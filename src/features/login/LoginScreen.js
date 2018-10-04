import React, { Component } from 'react';

export default class LogInScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { userName: '', password: '' }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div className="LoginScreen-container">
                <form className="LoginScreen-form">
                    <label >
                        User:
                        <input style={{ margin: '5px' }}
                            type="text"
                            name="userName"
                            value={this.state.userName}
                            onChange={this.handleInputChange} />
                    </label>
                    <label>
                        Password:
                        <input style={{ margin: '5px' }}
                            type="text"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleInputChange} />
                    </label>
                    <button style={{ margin: '5px' }}
                        onClick={() => this.props.login({ ...this.state })}>
                        Login
            </button>
                </form>
            </div>
        )
    }
}

