import { NavLink } from "react-router-dom"
import { useUser } from "../../context/UserContext"

const Navbar = () => {    
const { user } = useUser()

    return (
      <fieldset className = "box">
         <img src={ 'img/hi.png' } alt={ 'hi there' } width ="55" />     
        <nav> 
        { user === null  &&         
        <span className = "box">The best sign translator in the world!</span>
}
        { user !== null  &&     
            <span className = "box">
              <span className = "box">The best sign translator in the world!</span>
                   <NavLink to="/translations" ><button type="button">Translations</button></NavLink>
                   <NavLink to="/profile"><button type="button">Translation history {user.username}</button></NavLink> 
            </span>            
        }
        {

        }
      </nav>
      </fieldset>
    )
}

export default Navbar


