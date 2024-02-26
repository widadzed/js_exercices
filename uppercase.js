function capitalizeWords(sentence) {
    let result = '';
    let capitalize = true;

    for (let i = 0; i < sentence.length; i++) {
       
        if (capitalize && /[a-zA-Z]/.test(sentence[i])) {
            result += sentence[i].toUpperCase(); 
            capitalize = false;
        } else {
            result += sentence[i]; 
        }
        if (sentence[i] === ' ') {
            capitalize = true;
        }
    }

    return result;
}