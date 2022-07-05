const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8; 
const EMP_WAGE_PERHOUR = 20;

function getEmpWorkingHours(empCheck)
{ 
    switch(empCheck)
    {
        case IS_ABSENT:
        {
            console.log("Employee is Absent");
            return IS_ABSENT;
        }
        case IS_PART_TIME:
        {
            console.log("Employee is Working Part Time");
            return PART_TIME_HOURS;
        }
        case IS_FULL_TIME:
        {
            console.log("Employee is Working Full Time");
            return FULL_TIME_HOURS;
        }
    }
}
{
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHours = getEmpWorkingHours(empCheck);
    let employeeWageForADay = empHours * EMP_WAGE_PERHOUR;
    console.log("Employee Wage for a Day: " + employeeWageForADay);
}
