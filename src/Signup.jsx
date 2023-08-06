import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Signup = () => {

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const username = e.target.username.value
        const email = e.target.email.value
        const password = e.target.password.value
        const confirmPassword = e.target.confirmPassword.value
        let body = {}

        if (username && email && password && confirmPassword) {
            body = {
                username,
                email,
                password
            }
        }
        else {
            console.log('Please make sure all fields are filled out.')
            return
        }

        const url = 'http://127.0.0.1:5000/api/signup'
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }

        if (password !== confirmPassword) {
            console.log('Passwords do not match. Please make sure your password and confirm password inputs are identical')
            return
        }

        const res = await fetch(url, options);
        const data = await res.json();
        console.log(data)
    };

    const handleCancel = () => {
        navigate('/')
    }

    return (
        <div className="columns mt-1">
            <div className="column is-one-quarter ml-3">
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" name="username" type="text" placeholder="Enter Username Here" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-user"></i>
                            </span>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" name="email" type="email" placeholder="Enter Email Here" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" name="password" type="password" placeholder="Enter Password Here" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                            </span>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" name="confirmPassword" type="password" placeholder="Confirm Password Here" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                            </span>
                        </div>
                    </div>

                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-link" type="submit">Submit</button>
                        </div>
                        <div className="control">
                            <button className="button is-link is-light" type="cancel" onClick={handleCancel}>Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup