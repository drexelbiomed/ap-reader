const XLSX = require('xlsx');
const excelCrosswalk = XLSX.readFile('./data/ap_crosswalk_201945.xls');

function dataToJSON(excelSheet) {
  return XLSX.utils.sheet_to_json(excelSheet);
}

const crossWalkObjects = dataToJSON(excelCrosswalk.Sheets.ap_crosswalk_201945);
console.log(crossWalkObjects);