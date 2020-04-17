import React from 'react';
import * as firebase from 'firebase';
import Home from './home';
import Login from './login';


export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    usersignup(e) {
        console.log("state", this.state);
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((resp) => {
                console.log(resp.user.uid)
                localStorage.setItem('uid', resp.user.uid)
                window.location('/home')
            })
            .catch(err => {
                alert(err.message)
            })
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form>
                    <label>Enter email</label>
                    <input type="text" name="email" value={this.state.email} onChange={(e) => { this.setState({ 'email': e.target.value }) }} />
                    <label>Password</label>
                    <input type="password" name="password" value={this.state.password} onChange={(e) => { this.setState({ password: e.target.value }) }} />
                    <input type="submit" name="signup" onClick={(e) => this.usersignup(e)} />signup
                </form>
            </div>
        )
    }

}