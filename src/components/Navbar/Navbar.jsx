import { NavLink } from "react-router-dom"
import { useUser } from "../../context/UserContext"

const Navbar = () => {    
const { user } = useUser()

    return (
      <fieldset className = "box">
         <img src={ 'img/hi.png' } alt={ 'hi there' } width ="55" />     
        <nav> 
        { user === null  &&         
        <div >The best sign translator in the world!</div>
}
        { user !== null  &&     
            <>
              <div >The best sign translator in the world!</div>
                   <NavLink to="/translations" ><button type="button">Translations</button></NavLink>
                   <NavLink to="/profile"><button type="button">Translation history {user.username}</button></NavLink> 
            </>       
        }
      </nav>
      </fieldset>
    )
}

export default Navbar


