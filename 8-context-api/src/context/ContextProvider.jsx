import React from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {   // children refers to other components
    const [user, setUser] = React.useState([])  // global context/variable that can be accesses by all children elements

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider