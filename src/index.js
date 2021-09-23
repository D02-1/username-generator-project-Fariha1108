const { log } = require('console');
const fs = require('fs'); // FileSystem, zum lesen des dateisystems
const { maxHeaderSize } = require('http');
const path = require('path'); // Path, zum arbeiten mit dateipfaden

// Beutzernamen Generator
// Beispiel für Benutzer: ShinySunfloer55555 oder FlyingAutomobile34567 oder BeautifulCheesecake44567

// Was benötigen wir?
// - Eine Funktion um die werte aus der JSON datei zu lesen
/**
 * @function getWords
 * @description Reads words from json file.
 * @returns { object }
 */
function getWords()
{
    // Wir lesen die json datei, die worte enthält, die wir nutzen wollen
    const json = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'words.json'), 'utf-8'));

    // Wir geben die worte zurück
    return json;
}

// - Eine Funktion um die zufällige Nummer hinter dem Namen zu generieren
/**
 * @function creatRandomNumber
 * @description Creates a random number according to a minimal and maximal value
 * @param { number } minNumber 
 * @param { number } maxNumber 
 * @returns { number }
 */
function createRandomNumber(minNumber, maxNumber)
{
    // Wir erschaffen eine zufallszahl aus einer minimalen und einer maximalen zahl
    const num = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);

    // randomBeispiel = 0.5 * 50000 - 10000 = 15000 + 10000 = 25000

    // Wir geben die zufällige nummer zurück
    return num;
}

// - Eine Funktion mit der wir den ersten Buchstaben des jeweiligen Wortes groß schreiben (Pascalcase)
/**
 * @function capitalizeString
 * @description Takes the first letter of a string and changes it to Uppercase, then returns string
 * @param { string } word 
 * @returns {string }
 */
function capitalizeString(word)
{
    // Prüfe ob kein Word vorhanden ist
    if(word === undefined || word.length === 0 || !isNaN(word))
    {
        return 'Default';
    }

    // Wir nehmen den ersten buchstaben von unserem String, und ändern ihn auf UpperCase
    const wordStart = word.charAt(0).toUpperCase();

    // Wir nehmen den Rest des Strings und ändern ihn auf LowerCase
    const wordRest = word.substring(1).toLowerCase();

    // Wir geben den fertigen String zurück
    return wordStart + wordRest;
}

// - Eine Funktion mit der wir den benutzernamen generieren und auf die ergebnisse der anderen funktionen zugreifen
/**
 * @function createRandomUserName
 * @description Creates a random username
 * @param { number } maxNumber 
 * @returns { string }
 */
function createRandomUserName(maxNumber)
{
    // Wir holen uns die Wörter
    const words = getWords();

   // Wir holen uns aus der wortliste die adjektive
   const adj = words.adjs[ Math.floor(Math.random() * (words.adjs.length - 1)) ]; 

   // Wir holen uns aus der wortliste die nomen
   const noun = words.nouns[ Math.floor(Math.random() * (words.nouns.length - 1)) ]

   // Wir holen uns unsere zufallszahl
   const randomNumber = createRandomNumber(10000, maxNumber);

   const finalUserName = `${ capitalizeString(adj) }${ capitalizeString(noun) }${ maxNumber !== 0 ? randomNumber : '' }`; 

   return finalUserName;
}

// - Einen export, um die Applikation in einer anderen datei zu nutzen



