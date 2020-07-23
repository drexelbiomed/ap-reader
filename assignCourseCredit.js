const studentApData = require('./extractApData.js');
const apCrosswalkData = require('./extractCrosswalkData.js');

function apCreditAssignment(students, apTests) {
  for (let student of Object.values(students)) {
    if (student.id === 14347618) {
      for (let testResult of student.tests) {
        for (let apTest of apTests) {
          if (apTest.number === testResult.testcode) {
            console.log(`${student.name} took the ${apTest.number}: ${apTest.name}`);
          }
        }
      }
    }
  }
}

apCreditAssignment(studentApData, apCrosswalkData)