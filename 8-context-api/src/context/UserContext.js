import React from 'react'

// Context acts as a global variable
const UserContext = React.createContext()

export default UserContext      // Provider

/* the Provider wraps all components so that they all have access to UserContext
<UserContext>
    <Login />
    <Card />
        <Data/>
<UserContext />
*/
