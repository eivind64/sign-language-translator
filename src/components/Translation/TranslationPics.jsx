

const TranslationPics = ({ letter })  => {
    if (!/^[a-z]$/.test(letter)) {
        return null;
    }

    return (                
        <img src={ 'img/' +  letter + '.png' } alt={ letter } width ="55"/>                
    )
}

export default TranslationPics