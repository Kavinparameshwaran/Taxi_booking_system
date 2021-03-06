import React, { Component } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import "./UserSignIn.css";
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import SignInImage from './Images/41.jpg';
import { Form, Input, Button } from "antd";
import Image1 from './Images/512.jpeg';
import { locales } from "moment";
import Img from './Images/98.jpg';

const stylePaper = {
    height: '400px',
    width: '400px',
    //background: '#fdddbf',
    background: '#fda488',
    //backgroundImage: `url(${Img})`,
    position: 'relative',
    marginLeft:'65%',
    marginTop: '50px'
};


const styleText = {
    marginLeft: '100px',
    marginTop: '-50px',
    fontSize: '1.71429rem',
    fontFamily: 'ff-clan-web-pro,"Helvetica Neue",Helvetica,sans-serif!important',
    fontWeight: '700',
    color: 'black',
    textTransform: 'capitalize'
};

const FormItem = Form.Item;

class Signup extends Component {
  state = {
    res: {},
    res_received: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, fieldsValue) => {
      if (!err) {
        const values = {
          ...fieldsValue,        
        };
        console.log("Received values of form: ", values);
        axios
          .post("https://api.crossfire37.hasura-app.io/login", 
              {
                "provider" : "username",
                "data": {
                  "username": values.firstname,
                  "password": values.password
                }
              }
          )
          .then(response => {
            console.log(response);
            localStorage.setItem('AuthToken' ,response.data.auth_token)
            this.setState({ res: response.data });
            this.setState({ res_received: true });
          })
          .catch(error => {
            alert("ERROR: User name does not exists!");
            console.log(error);
          });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    let result = null;
    if (this.state.res_received) {
      alert('Login Succesful! Please go to "Ride" to book your ride.');
      console.log(this.state.res_recieved);
    }

    return (
      <Paper style={stylePaper}>
        
        <Form onSubmit={this.handleSubmit} className="signup-form">
          <div style={{marginLeft:'0px',marginTop:'50px', marginBottom: '50px'}}>
              <Avatar src={SignInImage} size='80px' />  
              <div style={styleText}>
                LOGIN
              </div>
          </div>
          <FormItem>
            {getFieldDecorator("email", {
              rules: [
                {
                  type: "email",
                  message: "The input is not valid E-mail!"
                },
                {
                  required: true,
                  message: "Enter your E-mail!"
                }
              ]
            })(<Input placeholder="Email" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Enter your Password!" },
                { min: 8, message: "Minimum password length is 8 characters" }
              ]
            })(<Input type="password" placeholder="Password" />)}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="signup-form-button"
              href="/Logout"
            >
              LOGIN
            </Button>
            Or <a href="/UserSignIn">SIGN UP</a>
          </FormItem>
          {result}
        </Form>
      </Paper>
    );
  }
}

const Sign_up = Form.create()(Signup);

export default Sign_up;
