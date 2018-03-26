function doGet() {
  return HtmlService
    .createTemplateFromFile('index')
    .evaluate();
}

function include(file) {
  return HtmlService.createHtmlOutputFromFile(file).getContent();
}

function getDriveUsed() {
   var used = DriveApp.getStorageUsed() / DriveApp.getStorageLimit();
   
   return used;
}

function getEmail() {
  return Session.getActiveUser().getEmail();
}