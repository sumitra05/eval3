import React from 'react'

export const AuthContext = React.createContext();

const AuthContextProvider = ({children}) =>{
    const isAuth = true;
    return <AuthContext.Provider value={isAuth}>{children}</AuthContext.Provider>
}
export default AuthContextProvider;