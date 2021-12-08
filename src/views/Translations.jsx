import withAuth from "../hoc/withAuth"
import TranslationPicsButton from "../components/Translation/TranslationPicsButton"
import TranslationForm from "../components/Translation/TranslationForm"
import { useState } from "react"
import { useUser } from "../context/UserContext"
import { translationAdd } from "../api/translation"
import { storageSave } from "../utils/storage"
import { STORAGE_KEY_USER } from "../const/storageKeys"

const TranslationLetters = [
    {
        id: 1,
        name: "letter-a",
        image: "img/letter-a.png"
    },
    {
        id: 2,
        name: "letter-o",
        image: "img/letter-o.png"
    },
    {
        id: 3,
        name: "letter-y",
        image: "img/letter-y.png"
    }
]


const Translations = () => { 

    const [translations, setTranslations] = useState(null)
    const { user, setUser } = useUser()

    const handleTranslationsPicsClicked = (translationsId) => {
        setTranslations(TranslationLetters.find(translations => translations.id === translationsId))
    }   
    
    const handleTranslationButtonClick = async (notes) => {
        console.log(notes);
        if (!translations) {
            alert('Please select a translation button')
            return
        }
        const chooseTranslationPic = (translations.name + ' ' + notes).trim()
        console.log(chooseTranslationPic);

        const [error, updatedUser] = await translationAdd(user, chooseTranslationPic)
        if (error !== null) {
            return
        }
        storageSave(STORAGE_KEY_USER, updatedUser)
        setUser(updatedUser)

        console.log("error " + error);


    }

    const availableTranslations = TranslationLetters.map(translations => {
    return <TranslationPicsButton  
            key = { translations.id } 
            translations = { translations } 
            onSelect = { handleTranslationsPicsClicked } 
            />
})

    return (
        <>
            <h1>Translations</h1>
            <section id = "translation-options">
                { availableTranslations }
            </section>
            <section id="translation-notes">
               <TranslationForm onTranslation = { handleTranslationButtonClick }/> 
            </section>
            <h4>Summary:</h4>
            { translations && <p>Selcted translation: {translations.name }</p> }

        </>
    )
}
export default withAuth(Translations)