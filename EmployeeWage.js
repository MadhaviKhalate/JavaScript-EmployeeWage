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
    //UC11A - Calculating Total Hours and Total Wage
    let totalWage = empDailyHrsAndWageArray.filter(x => x.dailyWage > 0).reduce((wage, x) => wage += x.dailyWage, 0);
    let totalHours  = empDailyHrsAndWageArray.filter(x => x.dailyHours > 0).reduce((hour, x) => hour += x.dailyHours, 0);
    console.log("Employee Worked: " + totalHours + " Hours and Earned: " + totalWage);

    //UC11B- Checking Number of Full Working Hours
    let fullTimeArray = new Array();
    //empDailyHrsAndWageArray.filter(x => x.dailyHours == 8).forEach(x => console.log(x.toString()));
    empDailyHrsAndWageArray.filter(x => x.dailyHours == 8).forEach(x => fullTimeArray.push(x));
    console.log("\nEmployee's all Full Time Woking Days: " + fullTimeArray.length);
    console.log(fullTimeArray.toString());

    //UC11C-Checking Number of Part Time Working Hours
    console.log("\nEmployee's all Part Time Woking Days");
    let partTimeHours = empDailyHrsAndWageArray.filter(x => x.dailyHours == 4).map(x => x.toString());
    console.log(partTimeHours);

    //UC11D-Checking Number of Non Working Hours
    console.log("\nEmployee's all Non Woking Days");
    let noWorkingHours =  empDailyHrsAndWageArray.filter(x => x.dailyHours == 0).map(x => x.toString());
    console.log(noWorkingHours);

    //UC11E-Getting First occurence of Full Time Wage
    let firstFullTimeWage = empDailyHrsAndWageArray.find(x => x.dailyWage == 160)
    console.log("\nEmployee's First Full time Wage Occured at: " + firstFullTimeWage.toString());

    //UC11F-Checking no.of Days Employee is Worked
    let workingDays = empDailyHrsAndWageArray.filter(x => x.dailyHours > 0);
    console.log("\nNumber of Days Employee Worked in a Month: " + workingDays.length);
}