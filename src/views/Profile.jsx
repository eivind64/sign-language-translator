
import ProfileActions from "../components/Profile/ProfileActions"
import ProfileTranslationHistoryWords from "../components/Profile/ProfileTranslationHistoryWords"
import withAuth from "../hoc/withAuth"
import { useUser } from "../context/UserContext"
import { useEffect } from "react"
import { userById } from "../api/user"
import { STORAGE_KEY_USER } from "../const/storageKeys"
import { storageSave } from "../utils/storage"

const Profile = () => {

    const { user, setUser } = useUser()

    useEffect (() => {

        const findUser = async () => {
            const [ error, latestUser ] = await userById(user.id)
            if (error === null ) {
                storageSave(STORAGE_KEY_USER, latestUser)
                setUser(latestUser)
            }
        }
        findUser()
    }, [ setUser, user.id ])
    
    return (
        <>
      
        <ProfileActions />
        <ProfileTranslationHistoryWords translations = { user.translations } />
        </>
    )
}
export default withAuth(Profile)
