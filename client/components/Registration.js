import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { signup } from '../store/auth';
import { Link} from "react-router-dom";
import {Button} from 'react-bootstrap'

function Registration(){
  const dispatch = useDispatch()
  const [user,setUser] = useState({
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      creative: 0,
      athletic: 0,
      social: 0,
      relaxing: 0,
      adventurous: 0,
  })

  const [hideRequiredFlag,setHideRequiredFlag] = useState(true)
  const [matchPasswords,setMatchPasswords] = useState(true)

  function handleChange(evt) {
    setUser({...user, [evt.target.name]: evt.target.value});
    console.log(user)
  }

  function handleSubmit(event) {
      event.preventDefault();
      console.log(user)

      if(user.password === user.confirmPassword){
          let trigger = true
          // let addUser ={}
          // for (let key in user){
          //     if(user[key]){
          //         if(key!=="confirmPassword"){
          //             addUser[key] = user[key]
          //         }
          //     }
          //     else if(!user[key] && key !== "img"){
          //         trigger = false
          //     }
          // }
          let {confirmPassword:_, ...newUser} = user
          if (trigger){
              dispatch(signup({ ...newUser }))
          } else{
              setHideRequiredFlag(false)
              setUser({...user,password:"",confirmPassword:""})
          }
      } else{
          setMatchPasswords(false)
          alert("Passwords don't match")
          setUser({...user,password:"",confirmPassword:""})
      }
  }

  return(
      <div className="module login" id="registration">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
            {matchPasswords ? "" : <div className = "alertbox"> passwords do not match</div>}
          <div>
            <label htmlFor='email'>Email</label>
            {/* (event)=>setUser({...user, email:event.target.value}) */}
            <input name='email' type="email" value={user.email} onChange={handleChange}/>
            {hideRequiredFlag ? "" : <div className = "alert">required field</div>}
          </div>

          <div>
            <label htmlFor='username'>Username</label>
            <input name='username' value={user.username} onChange={handleChange}/>
            {hideRequiredFlag ? "" : <div className = "alert">required field</div>}
          </div>

          <div>
            <label htmlFor='password'>Password</label>
            <input name='password' type="password" value={user.password} onChange={handleChange}/>
            {hideRequiredFlag ? "" : <div className = "alert">required field</div>}
          </div>

          <div>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <input name='confirmPassword' type="password" value={user.confirmPassword} onChange={handleChange}/>
            {hideRequiredFlag ? "" : <div className = "alert">required field</div>}
          </div>


          <label>
          Rate Your Interest in Creative Activities :
          <select name="creative" value={user.creative} onChange={handleChange}>
            <option value="0">Optional</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <label>
          Rate Your Interest in Athletic Activities :
          <select name="athletic" value={user.athletic} onChange={handleChange}>
            <option value="0">Optional</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <label>
          Rate Your Interest in Relaxing Activities :
          <select name="relaxing" value={user.relaxing} onChange={handleChange}>
            <option value="0">Optional</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <label>
          Rate Your Interest in Adventurous Activities :
          <select name="adventurous" value={user.adventurous} onChange={handleChange}>
            <option value="0">Optional</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <label>
          Rate Your Interest in Social Activities :
          <select name="social" value={user.social} onChange={handleChange}>
            <option value="0"> Optional</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <div id="registration-submit-buttons">
            <Button className="purple" type='submit'>submit</Button>
            <Button className="purple" type='button'><Link to='/'>cancel</Link></Button>
          </div>
        </form>
      </div>
  )
}

export default Registration
