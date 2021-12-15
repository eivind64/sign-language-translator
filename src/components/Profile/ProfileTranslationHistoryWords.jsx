import ProfileTranslationHistorySigns from "./ProfileTranslationHistorySigns"

const ProfileTranslationHistoryWords = ({ translations }) => {

let wordsList = translations.map(
    (sign, index) => < ProfileTranslationHistorySigns key = { index + '-' + sign } sign= { sign } />)

    wordsList = wordsList.slice(Math.max(wordsList.length - 10, 0))
    

    return (
        <section className="box history">
            <h4>Your 10 latest translations:</h4>        
                <ul>{ wordsList }</ul>
        </section>
    )
}
export default ProfileTranslationHistoryWords