var emp = new Object();
emp.id = 1;
emp.name = "Ricardo";
emp.salary = "100000";



const personID = document.getElementById("personID");
const personName = document.getElementById("personName");
const personSalary = document.getElementById("personSalary");

personID.innerHTML = `ID: ${emp.id}`;
personName.innerHTML = `Name: ${emp.name}`;
personSalary.innerHTML = `Salary: ${emp.salary}`;




currentPositionEmployID = (currentPositionEmployID +1) % listEmployes.employID.length;
    currentPositionEmployName = (currentPositionEmployName +1) % listEmployes.employName.length;
    currentPositionEmploySalary = (currentPositionEmploySalary +1) % listEmployes.employSalary.length;
    const nextValueID = listEmployes.employID[currentPositionEmployID];
    const nextValueName = listEmployes.employName[currentPositionEmployName];
    const nextValueSalary = listEmployes.employSalary[currentPositionEmploySalary];
    console.log(nextValueID, nextValueName, nextValueSalary);
    console.log(currentPositionEmployID, currentPositionEmployName, currentPositionEmploySalary);