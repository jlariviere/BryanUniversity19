employees = []
let status= "Full Time"
function Employee(name,jobTitle,salery,status){
    this.name = name
    this.jobTitle = jobTitle
    this.salery = salery
    this.status = status
    this.printEmployeeForm = function() {
        console.log(Employee)  
    }
}
const Rick = new Employee ("Rick","Scientist","3000 Flerbos","Contract");
const James = new Employee("James","Workerbee",$150000/yr,);
const Carrie = new type("carrie","Boss",$1000/hr);