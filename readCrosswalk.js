const XLSX = require('xlsx');
const excelCrosswalk = XLSX.readFile('./data/ap_crosswalk_201945.xls');

function dataToJSON(excelSheet) {
  console.log(XLSX.utils.sheet_to_json(excelSheet.Sheets.Sheet1));
  return XLSX.utils.sheet_to_json(excelSheet.Sheets.Sheet1);
}

const crossWalkObjects = dataToJSON(excelCrosswalk);
console.log(crossWalkObjects);