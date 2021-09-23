const { log } = require('console');
const fs = require('fs'); // FileSystem, zum lesen des dateisystems
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
function creatRandomNumber(minNumber, maxNumber)
{
    // Wir erschaffen eine zufallszahl aus einer minimalen und einer maximalen zahl
    const num = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);

    console.log(num);
}

creatRandomNumber(10000, 50000);

// - Eine Funktion mit der wir den ersten Buchstaben des jeweiligen Wortes groß schreiben (Pascalcase)
// - Eine Funktion mit der wir den benutzernamen generieren und auf die ergebnisse der anderen funktionen zugreifen
// - Einen export, um die Applikation in einer anderen datei zu nutzen



