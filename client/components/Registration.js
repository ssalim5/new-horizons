import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { signup } from '../store/auth';
import { Link} from "react-router-dom";

function Registration(){
  const dispatch = useDispatch()
  const [user,setUser] = useState({
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
  })
  const [category,setCategory] = useState({
    creative: 0,
    athletic: 0,
    social: 0,
    relaxing: 0,
    adventurous: 0,
  })

  const [hideRequiredFlag,setHideRequiredFlag] = useState(true)
  const [matchPasswords,setMatchPasswords] = useState(true)

  function handleChange(evt) {
    setCategory({...category,[evt.target.name]: evt.target.value});
  }

  function handleSubmit(event) {
      event.preventDefault();
      console.log(user)

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
      <div className="module login">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
            {matchPasswords ? "" : <div className = "alertbox"> passwords do not match</div>}
          <div>
            <label htmlFor='email'>Email</label>
            <input name='email' type="email" value={user.email} onChange={(event)=>setUser({...user, email:event.target.value})}/>
            {hideRequiredFlag ? "" : <div className = "alert">required field</div>}
          </div>

          <div>
            <label htmlFor='username'>Username</label>
            <input name='username' value={user.username} onChange={(event)=>setUser({...user, username:event.target.value})}/>
            {hideRequiredFlag ? "" : <div className = "alert">required field</div>}
          </div>

          <div>
            <label htmlFor='password'>Password</label>
            <input name='password' type="password" value={user.password} onChange={(event)=>setUser({...user, password:event.target.value})}/>
            {hideRequiredFlag ? "" : <div className = "alert">required field</div>}
          </div>

          <div>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <input name='confirmPassword' type="password" value={user.confirmPassword} onChange={(event)=>setUser({...user, confirmPassword:event.target.value})}/>
            {hideRequiredFlag ? "" : <div className = "alert">required field</div>}
          </div>


          <label>
          Rate Your Interest in Creative Activities :
          <select name="creative" value={category.creative} onChange={handleChange}>
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
          <select name="athletic" value={category.athletic} onChange={handleChange}>
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
          <select name="relaxing" value={category.relaxing} onChange={handleChange}>
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
          <select name="adventurous" value={category.adventurous} onChange={handleChange}>
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
          <select name="social" value={category.social} onChange={handleChange}>
            <option value="0"> Optional</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <div id="registration-submit-buttons">
            <button type='submit'>submit</button>
            <button type='button'><Link to='/'>cancel</Link></button>
          </div>

        </form>
      </div>
  )

}

export default Registration
