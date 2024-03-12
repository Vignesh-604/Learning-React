import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)   // setUser accessed from ContextPrvider

    const handleSubmit = (e) => {
        e.preventDefault
        setUser(username)
    }

  return (
    <div>
        <h1>Login</h1>
        <input type='text' placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
        <br />
        <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <br />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login