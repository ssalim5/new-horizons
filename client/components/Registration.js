import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { signup } from '../store/auth';
import { createUser } from "../store/allUsersStore";
import { connect } from "react-redux";
import { Link} from "react-router-dom";


// class Registration extends Component {
//   constructor() {
//     super();
//     this.state = {
//       username: "",
//       password: "",
//       email: "",
//       // dateOfBirth: "",
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(evt) {
//     this.setState({
//       [evt.target.name]: evt.target.value,
//     });
//   }

//   handleSubmit(evt) {
//     evt.preventDefault();
//     this.props.createUser({ ...this.state });
//     this.setState({
//       username: "",
//       password: "",
//       email: "",
//       dateOfBirth: "",
//     })
//   }

//   render() {
//     const { username, password, email} = this.state;
//     const { handleSubmit } = this;
//     return (
//         <div>
//           <div>
//             <div> Register User</div>
//           </div>
//           <form id="addUser-form" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="username">Name:</label>
//               <input  name="username" type="text" value={username} onChange={this.handleChange} />
//             </div>
//             <div >
//               <label htmlFor="password">Password:</label>
//               <input name="password" type="password"value={password} onChange={this.handleChange} />
//             </div>
//             <div >
//               <label htmlFor="email">Email:</label>
//                <input name="email" type="email" value={email} onChange={this.handleChange} />
//              </div>
//           {/* <form onSubmit={this.handleSubmit}>
//           </form> */}
//               <div >
//                 <button type="submit">Submit</button>
//                 <Link to="/">Cancel</Link>
//               </div>
//           </form>
//         <label>
//           Rate Your Interest in Creative Activities :
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="0">Optional</option>
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//             <option value="4">4</option>
//             <option value="5">5</option>
//           </select>
//         </label>
//         <label>
//           Rate Your Interest in Athletic Activities :
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="0">Optional</option>
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//             <option value="4">4</option>
//             <option value="5">5</option>
//           </select>
//         </label>
//         <label>
//           Rate Your Interest in Logical Activities :
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="0">Optional</option>
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//             <option value="4">4</option>
//             <option value="5">5</option>
//           </select>
//         </label>
//         <label>
//           Rate Your Interest in Relaxing Activities :
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="0">Optional</option>
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//             <option value="4">4</option>
//             <option value="5">5</option>
//           </select>
//         </label>
//         <label>
//           Rate Your Interest in Entertaining Activities :
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="0"> Optional</option>
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//             <option value="4">4</option>
//             <option value="5">5</option>
//           </select>
//         </label>
//         </div>
//     );
//   }
// }


// const mapDispatchToProps = (dispatch, { history }) => ({
//   //createUser: (user) => dispatch(createUser(user, history)),
//   createUser: (user) => dispatch(authenticate(user,signup))
// });

// export default connect(null, mapDispatchToProps)(Registration);

function Registration(){
  const dispatch = useDispatch()
  const [user,setUser] = useState({
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
  })
  const [hideRequiredFlag,setHideRequiredFlag] = useState(true)
  const [matchPasswords,setMatchPasswords] = useState(true)

  function handleSubmit(event) {
      event.preventDefault();
      
      if(user.password===user.confirmPassword){
          let trigger = true
          let addUser ={}
          for (let key in user){
              if(user[key]){
                  if(key!=="confirmPassword"){
                      addUser[key] = user[key]
                  }
              }
              else if(!user[key] && key !== "img"){
                  trigger = false
              }
          }
          if (trigger){
              dispatch(signup({ ...user }))
          }else{
              setHideRequiredFlag(false)
              setUser({...user,password:"",confirmPassword:""})
          }
      }else{
          setMatchPasswords(false)
          setUser({...user,password:"",confirmPassword:""})
      }
  }
  
  return(
      <div id='user-create'>
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
            {matchPasswords ? "" : <div className = "alertbox"> passwords do not match</div>}
          <div>
            <label htmlFor='email'>Email</label>
            <input name='email' type="email" value={user.email} onChange={(event)=>setUser({...user, email:event.target.value})}/>
            {hideRequiredFlag ? "" : <span className = "alert">required field</span>}
          </div>

          <div>
            <label htmlFor='username'>Username</label>
            <input name='username' value={user.username} onChange={(event)=>setUser({...user, username:event.target.value})}/>
            {hideRequiredFlag ? "" : <span className = "alert">required field</span>}
          </div>

          <div>
            <label htmlFor='password'>Password</label>
            <input name='password' type="password" value={user.password} onChange={(event)=>setUser({...user, password:event.target.value})}/>
            {hideRequiredFlag ? "" : <span className = "alert">required field</span>}
          </div>

          <div>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <input name='confirmPassword' type="password" value={user.confirmPassword} onChange={(event)=>setUser({...user, confirmPassword:event.target.value})}/>
            {hideRequiredFlag ? "" : <span className = "alert">required field</span>}
          </div>

          <div className="submit-buttons">
            <button type='submit'>submit</button>
            <button type='button'><Link to='/'>cancel</Link></button>
          </div>
        </form>
      </div>
  )

}

export default Registration
