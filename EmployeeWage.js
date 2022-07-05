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
    let empSalaryForAMonth = 0,employeeWageForADay = 0,empHours = 0,totalEmpHours = 0,totalWorkingDays = 0;
    let dailyWageArray = new Array();
    let empWageMap = new Map();
    while(totalEmpHours < EMP_MAX_WORKINGHOURS && totalWorkingDays < EMP_MAX_WORKINGDAYS)
    {
        empCheck = Math.floor(Math.random() * 10) % 3;
        empHours = getEmpWorkingHours(empCheck);  
        employeeWageForADay = calculateWage(empHours);
        dailyWageArray.push(employeeWageForADay);
        empWageMap.set(totalWorkingDays,employeeWageForADay);
        totalEmpHours = totalEmpHours + empHours;
        totalWorkingDays++;
    }
    
    //ForEach Method
    dailyWageArray.forEach(element => {
        empSalaryForAMonth = empSalaryForAMonth + element;
    });
    console.log("Total Working Hours: " + totalEmpHours + "\nTotal Working Days: " + totalWorkingDays + "\nEmployee Salary for a Month: " + empSalaryForAMonth);
    
    //Reduce Method
    function totalWages(employeeWageForADay,totalSalary)
    {
        return totalSalary = totalSalary + employeeWageForADay;
    }
    let monthlyWageReduceMethod = dailyWageArray.reduce(totalWages, 0);
    console.log("Total Working Hours : " + totalEmpHours + "\nTotal Working Days : " + totalWorkingDays + "\nEmployee Salary for a Month : " + monthlyWageReduceMethod);
    
    //Mapping Day and its Wage
    let dayCounter = 0;
    function mapForDayAndWage(employeeWageForADay)
    {
        dayCounter++;
        return dayCounter + " = " + employeeWageForADay;
    }
    let mapDaywithWageArray = dailyWageArray.map(mapForDayAndWage);
    console.log(mapDaywithWageArray);
    
    //Getting number of times full time wage is Earned
    function fullTimeWage(employeeWageForADay)
    {
        return employeeWageForADay.includes("160");
    }
    let fullTimeWageArray = mapDaywithWageArray.filter(fullTimeWage);
    console.log(fullTimeWageArray);
    
    //Getting first occurence of full time wage is Earned
    let firstFullTimeArray = mapDaywithWageArray.find(fullTimeWage);
    console.log(firstFullTimeArray);
    
    //Checking is Full time wage Array has only containing 160
    let fullTimeWageCheck = fullTimeWageArray.every(fullTimeWage);
    console.log("Is Full Time Wage array only contains 160: " + fullTimeWageCheck);
    
    //Checking is there any Part Time Wage in Employee Wage Array
    function partTimeWage (employeeWageForADay)
    {
        return employeeWageForADay.includes("80");
    };
    let partTimeWageCheck = mapDaywithWageArray.some(partTimeWage);
    console.log("Is Employee wage contains Part time wage of 80: " + partTimeWageCheck);
    
    //Finding number of Days Employee is Worked
    function employeePresentDays(presentDays, employeeWageForADay)
    {
        if(employeeWageForADay > 0)
        {
            return presentDays+1;
        }
        return presentDays;
    }
    let employeePresentDaysArray = dailyWageArray.reduce(employeePresentDays, 0);
    console.log("Number of Days Employee present in a Month: " + employeePresentDaysArray);

    //Storing Day and DailyWage along with TotalWage
    dayCounter = 0;
    empSalaryForAMonth = 0;
    function dailyAndTotalWage(employeeWageForADay)
    {
        dayCounter++;
        empSalaryForAMonth = empSalaryForAMonth + employeeWageForADay;
        return dayCounter + " = " + employeeWageForADay + " = " + empSalaryForAMonth;
    } 
    let dailyAndTotalWageArray = dailyWageArray.map(dailyAndTotalWage);
    console.log(dailyAndTotalWageArray);
    console.log("Total Wage using Map Function: " + Array.from(empWageMap.values()).reduce(totalWages, 0));
}