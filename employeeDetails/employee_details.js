const employees = [
	{ id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
	{ id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
	{ id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 }
];

function displayAllEmployees() {
	const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
document.getElementById('employeesDetails').innerHTML = totalEmployees;
}




function calculateTotalSalaries() {
	const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
	alert(`Total Salaries: $${totalSalaries}`);
}

  function displayEmployees() {
	let dep = document.getElementById("dep").value
	if (dep){
		const hrEmployees = employees.filter(employee => employee.department === dep);
		const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
		document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
	}
	else alert("Choose a department");
}

function findEmployeeById() {
	let employeeId = parseInt(document.getElementById("e_id").value);
	if (!employeeId) return(alert("Enter an ID")); 
	const foundEmployee = employees.find(employee => employee.id === employeeId);
	if (foundEmployee) {
	document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
	}
	else{
	  document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';

	}
}