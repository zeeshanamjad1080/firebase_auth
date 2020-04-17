import React from 'react';
import Login from './login';
import Signup from './signup';
import * as firebase from 'firebase';
import { firebaseConfig } from '../config';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sname: "",
            roll: "",
            class: ""
        }
    }
    componentWillMount() {
        firebase.auth().onAuthStateChanged(function (user) {
            if (!user) {
                //return <Redirect to='/logoin' />
                console.log('user', user);
            }

        })

    }
    addStudent(e) {
        firebase.firestore().collection("student").add({
            name: this.state.name,
            class: this.state.class,
            roll: this.state.roll
        })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(err => {
                alert(err.message)
            })
    }
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li ><Link to="/login">Login</Link></li>
                        <li ><Link to="/signup">Signup</Link></li>
                    </ul>
                    <table>
                        <tr>
                            <td>Enter Student name</td>
                            <td><input type="input" name="sname" placeholder="Enter student name" value={this.state.sname} onchange={(e) => { this.setState({ 'name': e.target.value }) }} /></td>
                        </tr>
                        <tr>
                            <td>Enter Student roll</td>
                            <td><input type="input" name="roll" placeholder="Enter student roll" value={this.state.roll} onchange={(e) => { this.setState({ 'roll': e.target.value }) }} /></td>
                        </tr>
                        <tr>
                            <td>Enter Student classs</td>
                            <td><input type="input" name="class" placeholder="Enter student class" value={this.state.class} onchange={(e) => { this.setState({ 'class': e.target.value }) }} /></td>
                        </tr>
                        <tr>
                            <td><button onClick={(e) => this.addStudent(e)}>Add Student</button></td>
                        </tr>
                    </table>
                </div>
                <Switch>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route path="/signin">
                        <Signup />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        )
    }
}