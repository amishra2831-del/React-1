import React , {useContext, useState}from 'react'
import UserContext from '../context/UserContext'


function Login() {

    const [username, setusername] = useState(' ')
    const [password, setpassword] = useState(' ')

    const {setuser} = useContext(UserContext)

    const handlesubmit = (e) =>{
            e.preventdefault()
            setuser({username,password})
    }
  return (
    <div>
      <h2>Login</h2>
            
      <input type="text"
                  value = {username}
            onchange = {(e) => setusername(e.target.value)}
      placeholder='username' />
      <input type="text"
                  value = {password}
            onchange = {(e) => setpassword(e.target.value)}
      placeholder='password' />
      <button onClick={handlesubmit}>Submit</button>
    </div>
  )
}

export default Login
