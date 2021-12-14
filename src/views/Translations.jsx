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
        
        letter = letter.replace(/\s/g, "").toLowerCase();
              
        if (/^[a-z]+$/.test(letter)) {

            const [error, updatedUser] = await translationAdd(user, letter)

            if (error !== null) {
                return
            }
            storageSave(STORAGE_KEY_USER, updatedUser)
            setUser(updatedUser) 
            setTranslations(letter)   
        }
        else {
            alert ('Letters only, please!')
        }
        
     
    }

    const availableTranslations = lastTranslation.split("").map((letter, i) => {
    return <TranslationPics  
            key = { letter + i } 
            letter = { letter } 
          />
})

    return (
        <div >
    
            <section id="translation-letters" >
               <TranslationForm onTranslation = { handleTranslationButtonClick }/> 
            </section>
            <section id = "translation-options" className="box signs">
                { availableTranslations }
            </section>  
        </div>
    )
}
export default withAuth(Translations)