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
function calculateWage(empHours)
{
    return empHours * EMP_WAGE_PERHOUR;
}

{
    let empSalaryForAMonth = 0,employeeWageForADay = 0,empHours = 0,totalEmpHours = 0,totalWorkingDays = 1;
    let empDailyHrsAndWageArray = new Array();
    while(totalEmpHours < EMP_MAX_WORKINGHOURS && totalWorkingDays <= EMP_MAX_WORKINGDAYS)
    {
        empCheck = Math.floor(Math.random() * 10) % 3;
        empHours = getEmpWorkingHours(empCheck);  
        employeeWageForADay = calculateWage(empHours);
        empDailyHrsAndWageArray.push(
            {
                dayNum: totalWorkingDays,
                dailyHours: empHours,
                dailyWage: employeeWageForADay,
                toString()
                {
                    return "\nDay: " + this.dayNum + "\t\tDaily Hours: " + this.dailyHours + "\t\tDailyWage: " + this.dailyWage;
                }
            });
        empSalaryForAMonth += employeeWageForADay;
        totalEmpHours = totalEmpHours + empHours;
        totalWorkingDays++;
    }
    console.log("Employee Hours Worked and Wages Earned: " + empDailyHrsAndWageArray);
    console.log("Employee Wage for a Month: " + empSalaryForAMonth);
}