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
    let empHrsMap = new Map();
    while(totalEmpHours < EMP_MAX_WORKINGHOURS && totalWorkingDays < EMP_MAX_WORKINGDAYS)
    {
        empCheck = Math.floor(Math.random() * 10) % 3;
        empHours = getEmpWorkingHours(empCheck);  
        employeeWageForADay = calculateWage(empHours);
        dailyWageArray.push(employeeWageForADay);
        empWageMap.set(totalWorkingDays,employeeWageForADay);
        empHrsMap.set(totalWorkingDays, empHours);
        totalEmpHours = totalEmpHours + empHours;
        totalWorkingDays++;
    }
    
    //UC7A-ForEach Method
    dailyWageArray.forEach(element => {
        empSalaryForAMonth = empSalaryForAMonth + element;
    });
    console.log("Total Working Hours: " + totalEmpHours + "\nTotal Working Days: " + totalWorkingDays + "\nEmployee Salary for a Month: " + empSalaryForAMonth);
    
    //UC7A-Reduce Method
    function totalWages(employeeWageForADay,totalSalary)
    {
        return totalSalary = totalSalary + employeeWageForADay;
    }
    let monthlyWageReduceMethod = dailyWageArray.reduce(totalWages, 0);
    console.log("Total Working Hours : " + totalEmpHours + "\nTotal Working Days : " + totalWorkingDays + "\nEmployee Salary for a Month : " + monthlyWageReduceMethod);
    
    //UC7B-Mapping Day and its Wage
    let dayCounter = 0;
    function mapForDayAndWage(employeeWageForADay)
    {
        dayCounter++;
        return dayCounter + " = " + employeeWageForADay;
    }
    let mapDaywithWageArray = dailyWageArray.map(mapForDayAndWage);
    console.log(mapDaywithWageArray);
    
    //UC7C-Getting number of times full time wage is Earned
    function fullTimeWage(employeeWageForADay)
    {
        return employeeWageForADay.includes("160");
    }
    let fullTimeWageArray = mapDaywithWageArray.filter(fullTimeWage);
    console.log(fullTimeWageArray);
    
    //UC7D-Getting first occurence of full time wage is Earned
    let firstFullTimeArray = mapDaywithWageArray.find(fullTimeWage);
    console.log(firstFullTimeArray);
    
    //UC7E-Checking is Full time wage Array has only containing 160
    let fullTimeWageCheck = fullTimeWageArray.every(fullTimeWage);
    console.log("Is Full Time Wage array only contains 160: " + fullTimeWageCheck);
    
    //UC7F-Checking is there any Part Time Wage in Employee Wage Array
    function partTimeWage (employeeWageForADay)
    {
        return employeeWageForADay.includes("80");
    };
    let partTimeWageCheck = mapDaywithWageArray.some(partTimeWage);
    console.log("Is Employee wage contains Part time wage of 80: " + partTimeWageCheck);
    
    //UC7G-Finding number of Days Employee is Worked
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

    //UC8-Storing Day and DailyWage along with TotalWage
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

    //UC9-Arrow Function
    const findTotal = (totalVal, dailyVal) =>{
        return totalVal + dailyVal;
    }
    let totalHoursArrow = Array.from(empHrsMap.values()).reduce(findTotal, 0);
    console.log("Total Hours Worked by an Employee: " + totalHoursArrow);
    let totalWageArrow = dailyWageArray.filter(employeeWageForADay => employeeWageForADay > 0).reduce(findTotal, 0);
    console.log("Total Salary earned by an Employee: " + totalWageArrow);

    let fullWorkingDays = new Array();
    let PartWorkingDays = new Array();
    let noWorkingDays = new Array();

    empHrsMap.forEach((value, key, map) =>{
        if(value == 8)
        {
            fullWorkingDays.push(key);
        }
        else if(value == 4)
        {
            PartWorkingDays.push(key);
        }
        else
        {
            noWorkingDays.push(key);
        }
    });
    console.log("Days Employee worked Full Time:");
    console.log(fullWorkingDays);
    console.log("Days Employee worked Part Time: ");
    console.log(PartWorkingDays);
    console.log("Days Employee is Absent: ");
    console.log(noWorkingDays);
}
