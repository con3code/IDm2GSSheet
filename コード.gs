function doGet(e) {
  SpreadsheetApp.getActiveSpreadsheet();
  let html_output = HtmlService.createTemplateFromFile('main');
  html_output.setting_disp = "↑まずシートIDを設定";
  html_output.name_disp = "…";
  return html_output.evaluate(); 
}

function doSetting(sid, sno){
  let app = SpreadsheetApp.openById(sid);
  let sheet = app.getSheetByName(sno);
  let row = sheet.getDataRange().getLastRow();
  return row;
}

function doName(sid, sno, rcolumn, row) {
  let name ='';
  let app = SpreadsheetApp.openById(sid);
  let sheet = app.getSheetByName(sno);
  let renge = sheet.getRange(row,rcolumn);
  name = renge.getValue();
  return name;
}

function doWrite(sid, sno, wcolumn, row, idm) {
  let app = SpreadsheetApp.openById(sid);
  let sheet = app.getSheetByName(sno);
  let r = sheet.getRange(row,wcolumn,1,1);
  r.setValue("'"+idm);
  return idm; 
}
