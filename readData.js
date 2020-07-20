const XLSX = require('xlsx');
const initialData = XLSX.readFile('./data/STU-AP Advanced Placement Test Scores.xls');

function dataToJSON(excelSheet) {
  return XLSX.utils.sheet_to_json(excelSheet.Sheets.Sheet);
}

const apDataObjects = dataToJSON(initialData);

const mergedStudentObjects = {};

// sample entry:
// {
//   Student: 'Wertz, Michael Thomas',
//   'Univ Id': '14418087',
//   'Coll Code 1': 'R',
//   'Majr Code 1': 'BME',
//   'Majr Code Conc 1': '5COP',
//   'Degc Code 1': 'BSBE',
//   'Test Code': 'AP37',
//   'Test Desc': 'AP English Literature & Comp',
//   'Test Score': '4',
//   'AP Load Date': 44025.36252314815,
//   'Advisor Id': '10873525',
//   'Advisor Name': 'Bryers, Elise'
// }

apDataObjects.forEach((recordInstance, index) => {
  const studentId = recordInstance['Univ Id'];
  const studentAdvisor = recordInstance['Advisor Name'];
  const ifIdFound = mergedStudentObjects.hasOwnProperty(studentId);
  if (ifIdFound) {
    // TODO courses will be merged here
  } else {
    mergedStudentObjects[studentId] = {
      name: recordInstance.Student,
      id: studentId,
      advisor: studentAdvisor,
      apcredit1: {
        testcode: recordInstance['Test Code'],
        testname: recordInstance['Test Desc'],
        testscore: recordInstance['Test Score'],
        loadDate: recordInstance['AP Load Date'],
      },
    }
  }
})

console.log(mergedStudentObjects);