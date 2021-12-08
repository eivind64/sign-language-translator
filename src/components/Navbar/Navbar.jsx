import { NavLink } from "react-router-dom"
import { useUser } from "../../context/UserContext"

const Navbar = () => {

const { user } = useUser()

    return (
        <nav>
            <ul>
                <li> Translations overview</li>
            </ul>
        { user !== null  &&     
            <ul>
                <li>
                    <NavLink to="/translations">Translations</NavLink>
                </li>
                <li>
                    <NavLink to="/profile">Profile/history</NavLink>
                </li>
            </ul>  
        }
      </nav>
    )
}

export default Navbar