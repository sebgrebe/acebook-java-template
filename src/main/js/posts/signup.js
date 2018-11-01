import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article>
      <div className='sign-up'>
        <label for="username"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="username"></input>
        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email"></input>
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw"></input>
      </div>
      <div className="butt">
        <button type="submit" class="signupbtn">Sign Up</button>
      </div>
      </article>
    );
  }

};

export default Signup;
