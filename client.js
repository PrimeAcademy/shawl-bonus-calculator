// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// SOLVING BELOW!

// loop over employees array
for (let employee of employees) {
  // call calculateIndividualEmployeeBonus and pass each employee obj as the argument
  let result = calculateIndividualEmployeeBonus(employee);
  // console.log value returned by function call
  console.log('result in loop:', result);
}

// This function will calculate 1 employee's bonus!
//

function calculateIndividualEmployeeBonus( employee ) {  // employee arg is an object
  // your logic here
  let employeeBonus = {};
  // - Those who have a rating of a 2 or below should not receive a bonus.
  if (employee.reviewRating <= 2) {
    employeeBonus.bonusPercentage = 0;
  }  
  // - Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
  else if (employee.reviewRating === 3) {
    employeeBonus.bonusPercentage = 0.04;
  }
  // - Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
  else if (employee.reviewRating === 4) {
    employeeBonus.bonusPercentage = 0.06;
  }
  // - Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
  else if (employee.reviewRating === 5) {
    employeeBonus.bonusPercentage = 0.1;
  }
  // - If their employee number is 4 digits long, this means they have been with the company for longer than 15 years,
  // and should receive an additional 5%.
  if (employee.employeeNumber.length === 4) {
    employeeBonus.bonusPercentage += 0.05;
  }
  // console.log('employee:', employee, 'employeeBonus:', employeeBonus);
  // - However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
  if (employee.annualSalary > 65000) {
    employeeBonus.bonusPercentage -= 0.01;
  }
  // - No bonus can be above 13% or below 0% total.
  if (employeeBonus.bonusPercentage > 0.13) {
    employeeBonus.bonusPercentage = 0.13;
  } else if (employeeBonus.bonusPercentage < 0) {
    employeeBonus.bonusPercentage = 0;
  }
  
  // return new object with bonus results
  // object will have properties:
    // name - employee's
    // bonusPercentage - for the employee
    // totalCompensation - base annual + bonus
    // totalBonus - total bonus rounded to nearest dollar
  
  // name comes from argument object
  employeeBonus.name = employee.name;

  // totalBonus = annualSalary * bonusPercentage
  employeeBonus.totalBonus = employee.annualSalary * employeeBonus.bonusPercentage;
  employeeBonus.totalBonus = Math.round(employeeBonus.totalBonus);

  // totalCompensation = base annual + bonus
  employeeBonus.totalCompensation = Number(employee.annualSalary) + employeeBonus.totalBonus;

  // return new obj
  return employeeBonus;
}