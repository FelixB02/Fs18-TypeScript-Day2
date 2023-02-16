class Person{
    fname: string;
    lname: string;
    age: number;
    jobtitle: string;
    constructor(fname: string, lname: string, age: number, jobtitle: string) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.jobtitle = jobtitle;
    }
    printInfo() {
        return (`Hello there, My name is ${this.fname} ${this.lname} and I am ${this.age} years old, and I am a ${this.jobtitle}`)
    }
}

class exPerson extends Person {
    salary: number;
    jobLocation: string;
    constructor(fname: string, lname: string, age: number, jobtitle: string, salary: number, jobLocation: string) {
        super(fname, lname, age, jobtitle)
        this.salary = salary;
        this.jobLocation = jobLocation;
    }
    extendedInfo() {
        return (`${super.printInfo()} and I get ${this.salary}$ every month, and I work in ${this.jobLocation}.`)
    }
}

let Person1 = new exPerson("Felix", "Blechl", 22, "Engieneur", 3000, "Vienna");
console.log(Person1.extendedInfo());
