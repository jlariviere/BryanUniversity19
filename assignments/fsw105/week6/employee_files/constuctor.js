employees = []

function Employee(name,jobTitle,salery,status){
    this.name = name
    this.jobTitle = jobTitle
    this.salery = salery
    this.status = status
      
    }
   printEmployeeForm = function() {
       
        return (new Employee) }

let status= "Full Time"
const Rick = new Employee ("Rick","Scientist","3000 Flerbos","Contract");
const James = new Employee("James","Workerbee","$150000/yr",status);
const Carrie = new Employee("carrie","Boss","$1000/hr",status);
employees.push(Rick,James,Carrie)
console.log(employees)
