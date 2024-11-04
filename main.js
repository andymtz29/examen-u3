const esPalindromo = (texto) => {
    texto = texto.toLowerCase();
    let izquierda = 0, derecha = texto.length - 1;

    while (izquierda < derecha) {
        if (!esAlfanumerico(texto[izquierda])) izquierda++;
        else if (!esAlfanumerico(texto[derecha])) derecha--;
        else if (texto[izquierda++] !== texto[derecha--]) return false;
    }
    return true; 
}

const esAlfanumerico = (caracter) => /[a-z0-9]/.test(caracter);

console.log(esPalindromo("Anita lava la tinaa") ? "Es un palindromo" : "No es un palindromo");



