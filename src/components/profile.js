import React, { Component } from 'react';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      update: false,
      username: 'placeholder',
      email: 'placeholder',
      tempEmail: '',
      password: 'placeholder',
      tempPassword: ''
    }

    this.handleUpdateMode = this.handleUpdateMode.bind(this);
  }

  handleUpdateMode() {
    const { update } = this.state;
    this.setState({ update: !update });
  }

  render() {
    const { update, username, email, password } = this.state;
    if (update) {
      return <form>
        <h1>Profile</h1>

        <h3>Avatar</h3>
        <img alt='avatar' />
        <input type='file' />

        <h3>Username</h3>
        <input type='text' placeholder={username} />

        <h3>Email</h3>
        <input type='email' placeholder={email} />
        <label>Confirm Email</label>
        <input type='email' />

        <h3>Password</h3>
        <input type='password' placeholder={password} />
        <label>Confirm Password</label>
        <input type='password' />

        <button type='submit'>Update</button>
        <button onClick={this.handleUpdateMode}>Cancel</button>
      </form>;
    }
    return <main>
      <h1>Profile</h1>

      <h3>Avatar</h3>
      <img alt='avatar' />

      <h3>Username</h3>
      <p>{ username }</p>

      <div className='personal-info'>
        <h2>Personal Information</h2>
        <h3>Email</h3>
        <p>{ email }</p>

        <h3>Password</h3>
        <p>{ password }</p>

        <button onClick={this.handleUpdateMode} >Update Profile</button>
      </div>
      { /*recent comments, active threads, most liked comments, created threads*/ }
    </main>;
  }
}

export default Profile;
