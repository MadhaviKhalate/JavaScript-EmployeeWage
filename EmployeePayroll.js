class EmployeePayroll
{
    constructor(...params)
    {
        this.id = params[0];
        this.name = params[1]
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
        this.email = params[5];
        this.zipCode = params[6];
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
    get id() 
    {
        return this._id;
    }
    set id(id)
    {
        let idCheck = RegExp('^[1-9]{1}([0-9]*)$')
        if(idCheck.test(id))
        {
            this._id = id;
        }
        else
        {
            throw "Employee ID should be non zero positive number";
        }
    }
    get salary() 
    {
        return this._salary;
    }
    set salary(salary)
    {
        let salaryCheck = RegExp('^[1-9]{1}([0-9]*)([.]*)[0-9]*$')
        if(salaryCheck.test(salary))
        {
            this._salary = salary;
        }
        else
        {
            throw "Employee salary should be non zero positive number";
        }
    }
    get gender() 
    {
        return this._gender;
    }
    set gender(gender)
    {
        let genderCheck = RegExp('^[M|F]{1}$')
        if(genderCheck.test(gender))
        {
            this._gender = gender;
        }
        else
        {
            throw "Employee gender should be M or F";
        }
    }
    get startDate() 
    {
        return this._startDate;
    }
    set startDate(startDate)
    {
        let today = new Date();
        let dateCheck = RegExp("^[0-9]{1,2}[/][0-9]{1,2}[/][0-9]{4}$");
        if(startDate <= today.toLocaleDateString())
        {
            if(dateCheck.test(startDate))
            {
                this._startDate = startDate;
            }
            else
            {
                throw "Format Mismatch";
            }
        }
        else
        {
            throw "Employee Start Date should  be less than or equal to current Date";
        }
    }
    get email() 
    {
        return this._email;
    }
    set email(email)
    {
        let emailCheck = RegExp('^[0-9a-z]{1,}([.+-]?)[0-9a-z]{1,}(@)[a-z0-9]{1,}(.)(com|co|net)((.in|.com|.au)*)$')
        if(emailCheck.test(email))
        {
            this._email = email;
        }
        else
        {
            throw "Invalid Email ID";
        }
    }
    get zipCode() 
    {
        return this._zipCode;
    }
    set zipCode(zipCode)
    {
        let zipCodeCheck = RegExp('^[0-9]{6}$')
        if(zipCodeCheck.test(zipCode))
        {
            this._zipCode = zipCode;
        }
        else
        {
            throw "Invalid zipCode";
        }
    }

    Employee()
    {
        return "Id: " + this.id + ",Name: " + this.name + ",Salary: " + this.salary + ",Gender: " + this.gender + ",StartDate: " + this.startDate +
                ",Email: " + this.email + ",Zip Code: " + this.zipCode;
    }
}
{
    try
    {
        let employeePayroll = new EmployeePayroll(1, "Madhavi", 30000, "F", new Date("10/16/2021").toLocaleDateString(), "abc123@gmail.com", 654321);
        console.log(employeePayroll.Employee());
        employeePayroll = new EmployeePayroll(2, "Dipak", 25000, "M", new Date("06/12/2021").toLocaleDateString(), "xyz@gmail.com", 654321);
        console.log(employeePayroll.Employee());
        employeePayroll.id = 3;
        employeePayroll.name = "Amit";
        employeePayroll.salary = 40000.150;
        employeePayroll.gender = "M";
        employeePayroll.startDate = new Date("02-6-2022").toLocaleDateString();
        employeePayroll.email = "abc123@gmail.com";
        employeePayroll.zipCode = 654322;
        console.log(employeePayroll.Employee());
    }
    catch(ex)
    {
        console.error(ex);
    }
}