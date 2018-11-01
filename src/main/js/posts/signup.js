import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='sign-up'>
        Sign-up
        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email"></input>
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw"></input>
      </div>
      <div class="butt">
        <button type="submit" class="signupbtn">Sign Up</button>
      </div>
    );
  }

};

export default Signup;
