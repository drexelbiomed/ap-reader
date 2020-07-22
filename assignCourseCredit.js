const studentApData = require('./extractApData.js');
const ApCrosswalkData = require('./extractCrosswalkData.js');

Object.values(studentApData).forEach(studentEntry => {
  console.log(studentEntry);
})

console.log(ApCrosswalkData);