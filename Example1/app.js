const listEmployes = {
    employID: ['1', '2', '3'],
    employName: ['Ricardo', 'John', 'Sérgio'],
    employSalary: ['10000', '20000', '30000']
};

let currentPositionEmployID = -1;
let currentPositionEmployName = -1;
let currentPositionEmploySalary = -1;

function selectValue(diretionValue) {
    if (diretionValue === 'next') {
        currentPositionEmployID = (currentPositionEmployID +1) % listEmployes.employID.length;
        currentPositionEmployName = (currentPositionEmployName +1) % listEmployes.employName.length;
        currentPositionEmploySalary = (currentPositionEmploySalary +1) % listEmployes.employSalary.length;
        const nextValueID = listEmployes.employID[currentPositionEmployID];
        const nextValueName = listEmployes.employName[currentPositionEmployName];
        const nextValueSalary = listEmployes.employSalary[currentPositionEmploySalary];
        console.log(nextValueID, nextValueName, nextValueSalary);
        console.log(currentPositionEmployID, currentPositionEmployName, currentPositionEmploySalary);    
    } else if (diretionValue === 'previous') {
        currentPositionEmployID = (currentPositionEmployID -1 + listEmployes.employID.length) % listEmployes.employID.length;
        currentPositionEmployName = (currentPositionEmployName -1 + listEmployes.employName.length) % listEmployes.employName.length;
        currentPositionEmploySalary = (currentPositionEmploySalary -1 + listEmployes.employSalary.length) % listEmployes.employSalary.length;
        const nextValueID = listEmployes.employID[currentPositionEmployID];
        const nextValueName = listEmployes.employName[currentPositionEmployName];
        const nextValueSalary = listEmployes.employSalary[currentPositionEmploySalary];
        console.log(nextValueID, nextValueName, nextValueSalary);
        console.log(currentPositionEmployID, currentPositionEmployName, currentPositionEmploySalary);    
    }
    
}

const personID = document.getElementById("personID");
const personName = document.getElementById("personName");
const personSalary = document.getElementById("personSalary");

personID.innerHTML = `ID: ${listEmployes.employID[0]}`;
personName.innerHTML = `Name: ${listEmployes.employName[0]}`;
personSalary.innerHTML = `Salary: ${listEmployes.employSalary[0]}`;

window.onload = console.log(3 % 3);
