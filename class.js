class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    display() {
        console.log(this.name), 
        console.log(this.age);
    }
}

let student = new Student("Anitha", 20);
student.display();