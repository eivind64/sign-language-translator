import { translationClearHistory } from "../../api/translation"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { useUser } from "../../context/UserContext"
import { storageDelete, storageSave } from "../../utils/storage"

const ProfileActions = () => {

    const { user, setUser } = useUser()

    const handleLogoutClick = () =>  {  // invoking function i parent
        if (window.confirm('Are you sure?'))  {
            // Send event to parent
            storageDelete(STORAGE_KEY_USER)
            setUser(null)  // Clearing the login
        }
    }

    const handleClearHistoryClick = async () => {
        if (!window.confirm('Are you sure?\nThis can not be undone!')) {
            return
        }
        const [ clearError ] = await translationClearHistory(user.id)

        if (clearError !== null) {
            return
        }
        const updatedUser = {
            ...user,
            translations: []
        }
        storageSave(STORAGE_KEY_USER, updatedUser)
        setUser(updatedUser)
    }

    return (
        <fieldset className="box">
            <button onClick={ handleClearHistoryClick } >Clear history</button>     
            <button onClick={ handleLogoutClick  }>Logout</button>            
        </fieldset>
    )
  
}
export default ProfileActions