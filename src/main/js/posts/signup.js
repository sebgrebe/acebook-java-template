import React from 'react';
import axios from 'axios';

class Signup extends React.Component {
  constructor(props) {
    super(props);
  }

  logger(axioslib = axios){
    // console.log(document.getElementById("username", "email", "psw").value);
    let newUserInfo = {"email": document.getElementById("email").value, "username": document.getElementById("username").value, "password": document.getElementById("psw").value}
    console.log(newUserInfo);

  }


  render() {
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
   }

};

export default Signup;
