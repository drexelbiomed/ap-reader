const studentApData = require('./extractApData.js');
const apCrosswalkData = require('./extractCrosswalkData.js');
// TODO Scores of 4 are awarding AP Calc credit for both MATH 121 and MATH 122. Fix this.
function apCreditAssignment(students, apTests) {
  for (let student of Object.values(students)) {
    student.creditAwarded = [];
    for (let testResult of student.tests) {
      for (let apTest of apTests) {
        
        if (testResult.testcode === apTest.number) {
          // TODO Before returning values, make sure credit has not already been awarded for AP test.
          if (Number(testResult.testscore) === 5 || Number(testResult.testscore) === 4) {
            const courseEarned = {
              testName: apTest.name,
              testScoreRequired: apTest.score,
              scoreEarned: testResult.testscore,
              courseAwarded: apTest.courseAwarded,
              creditsAwarded: apTest.creditAwarded
            }
            student.creditAwarded.push(courseEarned);
          }
        }
      }
    }
  }
  console.log(students['14347618']);
  return students
}

apCreditAssignment(studentApData, apCrosswalkData)