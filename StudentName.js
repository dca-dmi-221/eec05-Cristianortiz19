'use strict'

/*Dada una cadena de texto (string) separe y muestre en consola los caracteres de forma desordenada uno por línea, 1 caracter a la vez.*/

let testWord = "esternocleidomastoideo";
function wordCutter(word) {
   for (let index = 0; index < word.length; index++) {
       console.log(word.charAt(index));
   }
}
wordCutter(testWord);

/*Dado un string buscar en un listado e indicar si se encuentra o no
ahí contenido, debe soportar mayúsculas y minúsculas sin importar
la variación, es lo mismo Carro, CARRO o carro.*/

let testTargetWordA = "Sabrosura";
let testTargetWordB = "Sazón";
let testTargetWordC = "Tempurado";
let testWordsList = [
    "Sabr0sura",
    "Gozadera",
    "ritmo",
    "TEMPURADO",
    "SAZON",
    "Chevere",
    "Meneo",
];

// pruebe para cada palabra A, B y C
function wordSearcherIgnoreCase(targetWord, wordsList) {
    targetWord = targetWord.toLowerCase();
    targetWord = normalizeWord(targetWord);
    let estado = false;
   for (let index = 0; index < wordsList.length; index++) {
       const word = wordsList[index];
       if(targetWord == word.toLowerCase()){
           estado = true;
       }
   }
   if(estado === true){
    console.log(targetWord + " si se encuentra en la lista.");
    }else{
    console.log(targetWord + " no se encuentra en la lista.");
    }
}
function normalizeWord(word){
    return word = word.normalize('NFD').replace(/[\u00C0-\u00FF]/g, '');
}
wordSearcherIgnoreCase(testTargetWordA, testWordsList);
wordSearcherIgnoreCase(testTargetWordB, testWordsList);
wordSearcherIgnoreCase(testTargetWordC, testWordsList);



/*Dado un arreglo de strings, retornar la palabra más larga,
la más corta y el tamaño promedio, el arreglo debe ser
entregado por parámetro y puede variar en cantidad de palabras
del arreglo de entrada libremente, debe retornar un objeto
con los valores mencionados*/

let testSampleList = [
    "Capitan",
    "Comandante",
    "Teniente",
    "Cabo",
    "Brigadier",
    "Coronel",
    "Zar",
];

function wordLengthClassifier(wordsList) {
    let masLarga = wordsList[0];
    let masCorta = wordsList[0];
    let promedio = 0;
    for (let index = 0; index < wordsList.length; index++) {
        if(wordsList[index].length > masLarga.length){
            masLarga = wordsList[index];
        }
        if(wordsList[index].length < masCorta.length){
            masCorta = wordsList[index];
        }
        promedio += wordsList[index].length;
    }
    console.log(masLarga + " es la palabra mas larga");
    console.log(masCorta + " es la palabra mas corta");
    console.log("El promedio de letras es de: " + promedio);
}
wordLengthClassifier(testSampleList)


/*Dado un string retorna si este es o no un palíndromo. 
No debe diferenciar entre mayúsculas y minúsculas*/

let onVerificationWordA = "reconocer";
let onVerificationWordB = "querer";
let onVerificationWordC = "Gomosos";
let onVerificationWordD = "Somos";

function palindromeVerifier(word) {
    word = word.toLowerCase()
    if(word.charAt(0) === word.charAt(word.length-1)){
        console.log(word + " si es un palíndromo")
    }else{
        console.log(word + " no es un palíndromo")
    }
}
palindromeVerifier(onVerificationWordA);
palindromeVerifier(onVerificationWordB);
palindromeVerifier(onVerificationWordC);
palindromeVerifier(onVerificationWordD);

/*Dado un objeto que contiene una lista de palabras contar el
número de letras vocales y consonantes y retornarlo en un arreglo de 2 posiciones.*/
let containerTestObject = {
    list:["Cumbamba", "Oreja", "Nariz", "Ojo", "Lengua", "Diente"]
}
function lettersCounter(objectContainer) {
    let vocales = [];
    let consonantes = [];
   for (let index = 0; index < containerTestObject.list.length; index++) {
       for (let a = 0; a < containerTestObject.list[index].length; a++) {
           const element2 = containerTestObject.list[index][a].toLowerCase();
           if(element2 == 'a' || element2 == 'e' || element2 == 'i' || element2 == 'o' || element2 == 'u'){
               vocales.push(element2);
           }else{
               consonantes.push(element2);
           }
       }
   }
   console.log(...vocales);
   console.log(...consonantes);
}
lettersCounter(containerTestObject);


/*Dado 2 arreglos de strings retornar un arreglo con todos los strings.*/
let wordArrayA = ["hola", "¿" ,"cómo", "estás", "?"];
let wordArrayB = ["te", "ves" ,"igual", "te", "ves", "igual"];

function arrayJoiner(listA, listB) {
 const lista = listA.concat(listB)
 console.log(...lista);
}
arrayJoiner(wordArrayA, wordArrayB)


/*Dado un arreglo de strings indicar qué posiciones del arreglo
son anagramas de una palabra base (recibida como parámetro), retorne las posiciones en un arreglo.*/

let testWordToExplore = "amar";
let wordsToVerify = ["amar", "arma", "rana" , "mara", "rama", "roma", "amor", "ramon", "omar"];

function anagramVerifier(wordToExplore, listOfWords) {
   for (let index = 0; index < listOfWords.length; index++) {
       const words = listOfWords[index];
       
   }
}

/*Dado un objeto que contiene 2 arreglos, retornar un objeto con 1
arreglo que contiene las palabras sin vocales.*/

let testObjMultiContainer = {
    listA : ["piraña", "cachama", "tilapia", "trucha", "carpa", "salmón"],
    listB : ["rinoceronte", "elefante", "jirafa", "tigre", "gacela", "ñú"]
};

function vocalsRemoverFromObject(objectMultiContainer) {
    let consonantes = [];
    for (let index = 0; index < objectMultiContainer.listA.length; index++) {
        for (let a = 0; a < objectMultiContainer.listA[index].length; a++) {
            const element2 = objectMultiContainer.listA[index][a];
            if(element2 ==! 'a' || element2 ==! 'e' || element2 ==! 'i' || element2 ==! 'o' || element2 ==! 'u'){
                consonantes.push(element2);
            }
        }
    }
    objectMultiContainer = {consonantes};
    return console.log(consonantes)
}

console.log(vocalsRemoverFromObject(testObjMultiContainer));

/*Dado un arreglo de palabras reemplazar la última vocal por una x y retornar dicho arreglo.*/

let someWordsToTest = ["compañeros", "estudiantes", "señores", "amigos", "graduandos", "artistas", "universitarios"];

function lastVocalReplacer(words) {
    // :)
}


/*Dada una lista de palabras verificar si alguna de las palabras es la
versión al revés de alguna de las palabras de una segunda lista,
debe contar las identificadas y retornar un objeto con ese conteo.*/


let testListA = ["amor", "sabor", "calor","firma", "mara"];
let testListB = ["roma", "robar", "portar", "arma", "mora"];

function doubleListVerifier(listA, listB) {
    // :)
}