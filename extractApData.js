const XLSX = require('xlsx');
const initialData = XLSX.readFile('./data/STU-AP Advanced Placement Test Scores.xls');

function dataToJSON(excelSheet) {
  return XLSX.utils.sheet_to_json(excelSheet.Sheets.Sheet);
}

const apDataObjects = dataToJSON(initialData);

function mergeObjects() {
  const mergedStudentObjects = {};

  apDataObjects.forEach(recordInstance => {
    const studentId = recordInstance['Univ Id'];
    const studentAdvisor = recordInstance['Advisor Name'];
    const ifIdFound = mergedStudentObjects.hasOwnProperty(studentId);
    const apCode = recordInstance['Test Code'];
    const apTestEntry = {
      testcode: apCode,
      testname: recordInstance['Test Desc'],
      testscore: recordInstance['Test Score'],
      loadDate: recordInstance['AP Load Date'],
    }
  
    if (ifIdFound) {
      // mergedStudentObjects[studentId][`apTest-${apCode}`] = apTestEntry;
      mergedStudentObjects[studentId].tests.push(apTestEntry)
    } else {
      mergedStudentObjects[studentId] = {
        name: recordInstance.Student,
        id: studentId,
        advisor: studentAdvisor,
        tests: [apTestEntry]
      }
    }
  })

  return mergedStudentObjects;
}

const mergedObjects = mergeObjects();

Object.values(mergedObjects).forEach(value => {
  console.log(value);
})