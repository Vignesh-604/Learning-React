import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)      // user value accessed from ContextProvider

    if (!user) return <h1>Please login</h1>
    
    return (
        <h1>Profile: {user}</h1>
    )
}

export default Profile