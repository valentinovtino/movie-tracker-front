import React, { Component } from 'react'

class LogInPage extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      formState: 'create-user',
      name: '',
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

  requestForm = (event) => {
    event.preventDefault()
    this.setState({formState: event.target.name})
  }

  render() {
    
      
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
        <form >
          { this.state.formState === 'create-user'
            && <input type='text' name='name' onChange={this.handleChange} placeholder='Enter your name' value={this.state.name}/> 
          }
          <input type='text' name='email' onChange={this.handleChange} placeholder='Enter your email' value={this.state.email}/>
          <input type='password' name='password' onChange={this.handleChange} placeholder='Enter a password' value={this.state.password} />
        </form>
      </div>
    )
  }
}

LogInPage.propTypes = {
  handleChange: PropTypes.func.isRequired,
  requestForm: PropTypes.func.isRequired
};

export default LogInPage;