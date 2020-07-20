const XLSX = require('xlsx');
const initialData = XLSX.readFile('./data/STU-AP Advanced Placement Test Scores.xls');

function dataToJSON(excelSheet) {
  return XLSX.utils.sheet_to_json(excelSheet.Sheets.Sheet);
}

const apDataObjects = dataToJSON(initialData);