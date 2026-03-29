Anleitung für die Familie:
Hosting: Du kannst diese Dateien einfach in ein GitHub-Repository werfen und GitHub Pages aktivieren.

Verbindung: Schicke den Link zur Website und die Web-App-URL aus deinem Google Apps Script an die Familie.

Installation:

iPhone: Link in Safari öffnen -> Teilen-Icon -> "Zum Home-Bildschirm".

Android: Link in Chrome öffnen -> "App installieren" (oder über das Menü oben rechts).

Warum no-cors im JavaScript?
Google Apps Script Web-Apps leiten Anfragen intern um. Bei einem POST aus dem Browser führt das oft zu CORS-Fehlern. Mit mode: 'no-cors' schickt der Browser die Daten einfach ab, ohne auf eine Antwort zu warten. Da wir die Liste nach dem Hinzufügen ohnehin neu laden (refresh), ist das die stabilste Lösung für dieses "serverlose" Setup.

Ich habe ein Platzhalter-Icon im Manifest verwendet. Du kannst dieses natürlich durch ein eigenes .png ersetzen, das du im selben Verzeichnis wie die index.html speicherst.