import { useForm } from "react-hook-form"

const TranslationForm = ({ onTranslation } ) => {

    const { register, handleSubmit } = useForm()

    const onSubmit = ({ translationNotes  }) => { onTranslation(translationNotes) }

        return (
            <form onSubmit = { handleSubmit(onSubmit) }>
                <fieldset className="box">
                    <label htmlFor="translation-letters" className="h4">Input the word you want to translate!</label>
             
                    <input type= "text" { ...register('translationNotes')} placeholder="Type in letters" />
                <button type = "submit">Translate</button>
                </fieldset>                   
            </form>
        )
    }


export default TranslationForm
