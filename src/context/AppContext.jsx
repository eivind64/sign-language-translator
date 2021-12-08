import UserProvider from "./UserContext"

const AppContext = ( { children }) => {
    // const AppContext = ( props ) => {
    // {props.children}

    
    return (
        <UserProvider>      
            {children}
        </UserProvider>              
    )
}
export default AppContext