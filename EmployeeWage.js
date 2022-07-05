const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const EMP_WAGE_PERHOUR = 20;
const EMP_MAX_WORKINGDAYS = 20;
const EMP_MAX_WORKINGHOURS = 160;

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
    let empSalaryForAMonth = 0,employeeWageForADay = 0,empHours = 0,totalEmpHours = 0,totalWorkingDays = 0;
    while(totalEmpHours < EMP_MAX_WORKINGHOURS && totalWorkingDays < EMP_MAX_WORKINGDAYS)
    {
        empCheck = Math.floor(Math.random() * 10) % 3;
        empHours = getEmpWorkingHours(empCheck);
        totalEmpHours = totalEmpHours + empHours;
        employeeWageForADay = empHours * EMP_WAGE_PERHOUR;
        console.log("Employee Wage for a Day: " + employeeWageForADay);
        empSalaryForAMonth = empSalaryForAMonth + employeeWageForADay;
        totalWorkingDays++;
    }
    console.log("\nTotal Working Hours: " + totalEmpHours + "\nTotal Working Days: " + totalWorkingDays + "\nEmployee Salary for a Month: " + empSalaryForAMonth);
}