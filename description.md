Familien Einkaufsliste PWA

Diese Anwendung besteht aus drei Hauptkomponenten:

Google Apps Script (Code.gs): Das "Gehirn", das auf deinem Google Drive läuft und die Excel-Tabelle steuert.

Web App (index.html): Die Benutzeroberfläche für die Smartphones deiner Familie.

PWA Manifest (manifest.json): Die Konfigurationsdatei, die die Webseite in eine installierbare App verwandelt.

Installationsanleitung

Google Sheet vorbereiten: Erstelle ein neues Google Sheet und benenne das Tabellenblatt unten in "Liste" um. Die erste Zeile sollte die Header haben: ID, Name, Menge, Status.

Apps Script einrichten: Gehe im Sheet auf Erweiterungen > Apps Script. Kopiere den Code aus Code.gs hinein. Klicke auf "Bereitstellen > Neue Bereitstellung". Wähle "Web-App", Ausführen als "Ich", Zugriff "Jeder". Kopiere die Web-App-URL.

Hosting: Lade index.html und manifest.json auf GitHub Pages oder Netlify hoch.

Einrichtung: Öffne die Website auf dem Handy, gib die kopierte Web-App-URL ein – fertig!