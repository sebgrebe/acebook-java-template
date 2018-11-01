import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
  }

  logger(){
    console.log(document.getElementById("username", "email", "psw").value);
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
