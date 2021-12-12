import ProfileHeader from "../components/Profile/ProfileHeader"
import ProfileActions from "../components/Profile/ProfileActions"
import ProfileTranslationHistory from "../components/Profile/ProfileTranslationHistory"
import withAuth from "../hoc/withAuth"
import { useUser } from "../context/UserContext"
import { useEffect } from "react/cjs/react.development"
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
        <ProfileHeader username={ user.username } />
        <ProfileActions />
        <ProfileTranslationHistory translations = { user.translations } />
        </>
    )
}
export default withAuth(Profile)
