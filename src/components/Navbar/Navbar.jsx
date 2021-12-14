import { NavLink } from "react-router-dom"
import { useUser } from "../../context/UserContext"

const Navbar = () => {    
const { user } = useUser()

    return (
      <fieldset className = "box header-container">
         <img src={ 'img/hi.png' } alt={ 'hi there' } className="logo" />     
        <h1 className="payoff">The best sign translator in the world!</h1>
        <nav>

        { user !== null  &&     
            <div className="navigation-container">
                   <NavLink to="/translations" ><button type="button">Translations</button></NavLink>
                   <NavLink to="/profile"><button type="button">Translation history {user.username}</button></NavLink> 
            </div>       
        }
      </nav>
      </fieldset>
    )
}

export default Navbar


