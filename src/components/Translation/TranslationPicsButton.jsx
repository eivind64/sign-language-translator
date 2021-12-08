

const TranslationPicsButton = ({translations, onSelect })  => {
    return (
        <button onClick={ () => onSelect(translations.id)}>
            <aside>
                <img src={ translations.image } alt={ translations.name } width ="55"/>                
            </aside>
            <section>
                <b> { translations.name } </b>
            </section>
        </button>
    )
}

export default TranslationPicsButton