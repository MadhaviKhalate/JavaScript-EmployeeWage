class EmployeePayroll
{
    id; 
    salary;
    gender;
    startDate;

    constructor(...params)
    {
        this.id = params[0];
        this.name = params[1]
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    get name() 
    {
        return this._name;
    }
    set name(name)
    {
        let nameCheck = RegExp('^[A-Z]{1,}[a-zA-Z]{2,}$')
        if(nameCheck.test(name))
        {
            this._name = name;
        }
        else
        {
            throw "Name should start with capital letter and have atleast 3 letters";
        }
        
    }

    Employee()
    {
        
        return "Id: " + this.id + ",Name: " + this.name + ",Salary: " + this.salary + ",Gender: " + this.gender + ",StartDate: " + this.startDate;
    }
}
{
    const date = new Date();
    let employeePayroll = new EmployeePayroll(1, "Madhavi", 30000, "F", date.toLocaleDateString());
    console.log(employeePayroll.Employee());
    try
    {
        employeePayroll.id = 2;
        employeePayroll.name = "Sudhir";
        employeePayroll.salary = 25000;
        console.log(employeePayroll.Employee());
    }
    catch(ex)
    {
        console.error(ex);
    }
    let EmployeeData = new EmployeePayroll(3, "Aparna", 40000, "F", date.toLocaleDateString());
    console.log(EmployeeData.Employee());
}