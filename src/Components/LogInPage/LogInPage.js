import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class LogInPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      userLoggedIn: false,
      errorMessage: '',
      formState: 'create-user',
      name: '',
      email: '',
      password: ''
    };
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  };

  requestForm = (event) => {
    event.preventDefault();
    this.setState({formState: event.target.name});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.formState === 'create-user') {
      this.props.postUser(this.state);
    } else {
      this.props.fetchUser({
        email: this.state.email, 
        password: this.state.password
      });
    }
    this.setState({ userLoggedIn: true });    
  }

  render() {
    const loggedInRedirect = this.state.userLoggedIn === true ? <Redirect to='/' /> : <div></div>;
    return (
      <div>
        <div className='form-request'>
          <button name='create-user' className='create-user' onClick={this.requestForm}>
            Create Account
          </button>
          <button name='log-in' className='log-in' onClick={this.requestForm}>
            Log In
          </button>
        </div>
        <form onSubmit={this.handleSubmit}>
          { this.state.formState === 'create-user'
            && <input type='text' name='name' onChange={this.handleChange} placeholder='Enter your name' value={this.state.name}/> 
          }
          <input type='text' name='email' onChange={this.handleChange} placeholder='Enter your email' value={this.state.email}/>
          <input type='password' name='password' onChange={this.handleChange} placeholder='Enter a password' value={this.state.password} />
          <button type='submit'> Submit </button>
          <p>{this.props.userHasErrored.error}</p>
          {loggedInRedirect}
        </form>
      </div>
    );
  }
}

export default LogInPage;