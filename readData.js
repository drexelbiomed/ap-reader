const XLSX = require('xlsx');
const initialData = XLSX.readFile('./data/STU-AP Advanced Placement Test Scores.xls');

function dataToJSON(excelSheet) {
  return XLSX.utils.sheet_to_json(excelSheet.Sheets.Sheet);
}

const apDataObjects = dataToJSON(initialData);

function mergeObjects() {
  const mergedStudentObjects = {};

  apDataObjects.forEach((recordInstance, index) => {
    const studentId = recordInstance['Univ Id'];
    const studentAdvisor = recordInstance['Advisor Name'];
    const ifIdFound = mergedStudentObjects.hasOwnProperty(studentId);
    const apCode = recordInstance['Test Code'];
    const apTestEntry = {
      testname: recordInstance['Test Desc'],
      testscore: recordInstance['Test Score'],
      loadDate: recordInstance['AP Load Date'],
    }
  
    if (ifIdFound) {
      mergedStudentObjects[studentId][`apTest-${apCode}`] = apTestEntry;
    } else {
      mergedStudentObjects[studentId] = {
        name: recordInstance.Student,
        id: studentId,
        advisor: studentAdvisor,
        [`apTest-${apCode}`]: apTestEntry,
      }
    }
  })

  return mergedStudentObjects;
}

console.log(mergeObjects());