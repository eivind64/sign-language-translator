import withAuth from "../hoc/withAuth"
import TranslationPics from "../components/Translation/TranslationPics"
import TranslationForm from "../components/Translation/TranslationForm"
import { useState } from "react"
import { useUser } from "../context/UserContext"
import { translationAdd } from "../api/translation"
import { storageSave } from "../utils/storage"
import { STORAGE_KEY_USER } from "../const/storageKeys"

const Translations = () => { 

    const [lastTranslation, setTranslations] = useState("") // lastTranslations
    const { user, setUser } = useUser()

    const handleTranslationButtonClick = async (letter) => {

        if (!letter) {
            alert('Please insert your text you want to translate')
            return
        }

        const [error, updatedUser] = await translationAdd(user, letter)
        if (error !== null) {
            return
        }
        
        letter = letter.replace(/\s/g, " ").toLowerCase();
        console.log("letter: " + letter)

        storageSave(STORAGE_KEY_USER, updatedUser)
        setUser(updatedUser) 
        setTranslations(letter)    
     
    }

    const availableTranslations = lastTranslation.split("").map((letter, i) => {
    return <TranslationPics  
            key = { letter + i } 
            letter = { letter } 
          />
})

    return (
        <>
    
            <section id="translation-letters" >
               <TranslationForm onTranslation = { handleTranslationButtonClick }/> 
            </section>
                  <section id = "translation-options" className="h3">
                { availableTranslations }
            </section>
  
        </>
    )
}
export default withAuth(Translations)