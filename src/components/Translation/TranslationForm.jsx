import { useForm } from "react-hook-form"

const TranslationForm = ({ onTranslation } ) => {

    const { register, handleSubmit } = useForm()

    const onSubmit = ({ translationNotes  }) => { onTranslation(translationNotes) }

        return (
            <form onSubmit = { handleSubmit(onSubmit) }>
                <fieldset>
                    <label htmlFor="translation-notes">Translation notes:</label>
                    <input type= "text" { ...register('translationNotes')} placeholder="Type in letters" />
                </fieldset>
                <button type = "submit">Translation</button>
            </form>
        )

    }


export default TranslationForm
