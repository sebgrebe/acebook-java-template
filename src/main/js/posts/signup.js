import React from 'react';
import axios from 'axios';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showSuccess: false };

  }

  toggleSignUp() {
    var showSuccess = this.state.showSuccess;
    this.setState({
      showSuccess: showSuccess == false ? true : false
    })

  }

  logger(axiosLib = axios){
    var that = this;
    let newUserInfo = {"email": document.getElementById("email").value, "username": document.getElementById("username").value, "password": document.getElementById("psw").value}
    // console.log(newUserInfo);
    axiosLib.post('api/signup', newUserInfo)
    .then(function(response) {
      console.log(`here is SS: ${that.state.showSuccess}`);
      that.toggleSignUp();
      console.log(`here is SS: ${that.state.showSuccess}`)
    })
      .catch(function (error) {
          console.log(error);
      });
  }


  render() {
    if (this.state.showSuccess == false) {
     return (
       <article>
       <div className='sign-up'>
         <input type="text" placeholder="Enter Username" id="username"></input>
         <input type="text" placeholder="Enter Email" id="email"></input>
         <input type="password" placeholder="Enter Password" id="psw"></input>
       </div>
       <div className="butt">
         <button onClick={() => this.logger()}>Sign Up</button>
       </div>
       </article>
     );
   } else {
     return (
       <div>
         <p>YOU ARE SUCCESSFULLY SIGNED IN</p>
       </div>
     )
   }
 }
};

export default Signup;
