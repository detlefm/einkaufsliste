/**
 * Google Apps Script für die Einkaufsliste
 * Veröffentlichung als Web-App: Zugriff für "Jeder" erforderlich.
 */

function doGet() {
  const sheet = getSheet();
  const data = sheet.getDataRange().getValues();
  const headers = data.shift(); // Header entfernen
  
  const json = data.map(row => {
    let obj = {};
    headers.forEach((header, i) => obj[header.toLowerCase()] = row[i]);
    return obj;
  });

  return ContentService.createTextOutput(JSON.stringify(json))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  const sheet = getSheet();
  const payload = JSON.parse(e.postData.contents);
  const action = payload.action;

  if (action === 'add') {
    sheet.appendRow([
      Date.now().toString(), // ID
      payload.name,
      payload.amount || "1",
      "offen"
    ]);
  } else if (action === 'toggle') {
    const data = sheet.getDataRange().getValues();
    for (let i = 1; i < data.length; i++) {
      if (data[i][0].toString() === payload.id.toString()) {
        const newStatus = payload.status || (data[i][3] === 'offen' ? 'erledigt' : 'offen');
        sheet.getRange(i + 1, 4).setValue(newStatus);
        break;
      }
    }
  } else if (action === 'delete') {
    const data = sheet.getDataRange().getValues();
    for (let i = 1; i < data.length; i++) {
      if (data[i][0].toString() === payload.id.toString()) {
        sheet.deleteRow(i + 1);
        break;
      }
    }
  } else if (action === 'clearDone') {
    const data = sheet.getDataRange().getValues();
    // Von unten nach oben löschen, um Index-Verschiebungen zu vermeiden
    for (let i = data.length - 1; i >= 1; i--) {
      if (data[i][3] === 'erledigt') {
        sheet.deleteRow(i + 1);
      }
    }
  }

  return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName("Liste");
  if (!sheet) {
    sheet = ss.insertSheet("Liste");
    sheet.appendRow(["ID", "Name", "Menge", "Status"]);
  }
  return sheet;
}