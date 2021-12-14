import ProfileTranslationHistorySigns from "./ProfileTranslationHistorySigns"

const ProfileTranslationHistory = ({ translations }) => {

let signList = translations.map(
    (sign, index) => < ProfileTranslationHistorySigns key = { index + '-' + sign } sign= { sign } />)
    // const signListLength = signList.length
    signList = signList.slice(Math.max(signList.length - 10, 0))
    

    return (
        <section className="box history">
            <h4>Your 10 latest translations:</h4>        
                <ul>{ signList }</ul>
        </section>
    )
}
export default ProfileTranslationHistory

