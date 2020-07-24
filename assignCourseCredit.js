const studentApData = require('./extractApData.js');
const apCrosswalkData = require('./extractCrosswalkData.js');
// TODO Clean up code.
function apCreditAssignment(students, apTests) {
  for (let student of Object.values(students)) {
    student.creditAwarded = [];
    for (let testResult of student.tests) {
      // console.log(testResult);
      for (let apTest of apTests) {
        
        if (testResult.testcode === apTest.number) {
          // TODO Before returning values, make sure credit has not already been awarded for AP test.
          const earnedScore = Number(testResult.testscore);
          const validScore = earnedScore === 5 || earnedScore === 4;
          const courseEarned = {
            [apTest.name]: {
              testCode: apTest.number,
              testName: apTest.name,
              testScoreRequired: apTest.score,
              scoreEarned: testResult.testscore,
              courseAwarded: apTest.courseAwarded,
              creditsAwarded: apTest.creditAwarded
            }
          }
          if (validScore && earnedScore == apTest.score) {
            student.creditAwarded.push(courseEarned);
          } else if (validScore && apTest.score === '4 or 5') {
            student.creditAwarded.push(courseEarned);
          }
        }
      }
    }
  }
  return students.creditAwarded;
}

console.log(apCreditAssignment(studentApData, apCrosswalkData));