const studentApData = require('./extractApData.js');
const apCrosswalkData = require('./extractCrosswalkData.js');

function apCreditAssignment(students, apTests) {
  // TODO capture final information in array of credits awarded.
  const creditsAwarded = [];
  for (let student of Object.values(students)) {
    // if (student.id === 14347618) {
      console.log(`******* ${student.name} advised by ${student.advisor}`);
      for (let testResult of student.tests) {
        for (let apTest of apTests) {
          
          if (testResult.testcode === apTest.number) {
            // TODO Before returning values, make sure credit has not already been awarded for AP test.
            if (Number(testResult.testscore) === 5 || Number(testResult.testscore) === 4) {
              console.log("***");
              console.log(`*** Score Required for ${apTest.name}: ${apTest.score}, Score Earned: ${testResult.testscore}`);
              console.log(`*** Earned credit for ${apTest.courseAwarded}: ${apTest.creditAwarded} credits`);
              console.log("***");
            }
          }
        }
      }
    // }
  }

  return creditsAwarded;
}

apCreditAssignment(studentApData, apCrosswalkData)