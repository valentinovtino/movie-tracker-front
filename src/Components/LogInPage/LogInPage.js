import React, { Component } from 'react'

class LogInPage extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form>
        <input type='text' name='email' onChange={this.handleChange} placeholder='Enter your email' value={this.state.email}/>
        <input type='password' name='password' onChange={this.handleChange} placeholder='Enter a password' value={this.state.password} />
      </form>
    )
  }
}

export default LogInPage;