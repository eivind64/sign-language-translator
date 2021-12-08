import ProfileTranslationHistorySigns from "./ProfileTranslationHistorySigns"

const ProfileTranslationHistory = ({ translations }) => {

const signList = translations.map(
    (sign, index) => < ProfileTranslationHistorySigns key = { index + '-' + sign } sign= { sign } />)

    return (
        <section>
            <h4>Translation history</h4>
            <ul>
                { signList }
            </ul>
        </section>
    )
}
export default ProfileTranslationHistory