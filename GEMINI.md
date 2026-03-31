Projektbeschreibung: Serverless Shopping List PWA
Ziel: Erstellung einer leichtgewichtigen Progressive Web App (PWA) für eine gemeinsame Einkaufsliste, die Daten in einem Google Sheet speichert. Die App soll auf Android und iOS (Safari) ohne App Store installierbar sein.

1. Architektur & Datenfluss
Backend: Google Sheets als Datenbank.

API-Schicht: Google Apps Script (GAS), das als Web-App veröffentlicht wird und GET (Lesen) sowie POST (Schreiben/Löschen) Anfragen verarbeitet.

Frontend: Single-Page-Application (HTML/JS/CSS), gehostet als statische Seite (z.B. GitHub Pages).

Verbindung: Beim ersten Start fragt die App nach der GAS-URL und speichert diese im localStorage.

2. Komponenten-Spezifikationen
A. Google Apps Script (Backend)
Erstelle ein Script, das:

In doGet() alle Zeilen des aktiven Sheets als JSON-Array zurückgibt (Spalten: ID, Name, Menge, Status).

In doPost() neue Einträge hinzufügt, bestehende Einträge (Status) aktualisiert oder Zeilen löscht.

CORS-Header unterstützt, damit das Frontend darauf zugreifen kann.

B. index.html & JavaScript (Frontend)
UI/UX: Modernes, mobiles Design (optimiert für Touch). Große Checkboxen, ein Eingabefeld für neue Artikel und eine Liste, die nach Status ("offen" oben, "erledigt" unten) sortiert ist.

Logik:

Prüfung auf localStorage.getItem('gas_url'). Wenn leer -> Overlay zur Eingabe der URL anzeigen.

fetchData(): Lädt die Liste vom Script.

addItem() / toggleItem(): Sendet Änderungen per POST an das Script.

Fehlerhandling: Zeige eine Nachricht ("Offline / Fehler"), wenn der Fetch fehlschlägt.

Offline-Support: Speichere die letzte geladene Liste im localStorage, um sie auch ohne Netz anzuzeigen (Read-only).

C. manifest.json (PWA)
Standard-Konfiguration für eine Standalone-App.

Name: "Shopping List", Theme-Color: #ffffff.

Referenz auf Icons (192x192 und 512x512).

3. Besondere Anforderungen (Mobile Integration)
iOS Support: Inkludiere die notwendigen <meta> Tags für apple-mobile-web-app-capable.

No Server: Der gesamte Code muss rein clientseitig (HTML/JS) funktionieren, ohne Node.js oder PHP.

Gleichzeitiger Zugriff: Da mehrere Familienmitglieder zugreifen, implementiere ein einfaches "Pull-to-Refresh" oder einen Refresh-Button, um die Liste manuell zu aktualisieren.