const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const EMP_WAGE_PERHOUR = 20;
const EMP_MAX_WORKINGDAYS = 20;

function getEmpWorkingHours(empCheck)
{  
    switch(empCheck)
    {
        case IS_ABSENT:
        {
            return IS_ABSENT;
        }
        case IS_PART_TIME:
        {
            return PART_TIME_HOURS;
        }
        case IS_FULL_TIME:
        {
            return FULL_TIME_HOURS;
        }
    }
}

{
    let empSalaryForAMonth = 0,employeeWageForADay,empHours;

    for(let i = 0; i < EMP_MAX_WORKINGDAYS; i++)
    {
        empCheck = Math.floor(Math.random() * 10) % 3;
        empHours = getEmpWorkingHours(empCheck);
        employeeWageForADay = empHours * EMP_WAGE_PERHOUR;
        console.log("Employee Wage for a Day: " + employeeWageForADay);
        empSalaryForAMonth = empSalaryForAMonth + employeeWageForADay;
    }
    console.log("\nEmployee Salary for a Month: " + empSalaryForAMonth);
}