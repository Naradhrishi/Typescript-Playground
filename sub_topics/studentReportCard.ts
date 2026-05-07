interface Student{
    name: string;
    age : number;
    grades : number[];
    isEnrolled : boolean
}

function getAvg(student : Student): number{
    let sum: number = 0;
    for(let i: number = 0;i<student.grades.length; i++){
        sum += student.grades[i];
    }
    return sum / student.grades.length;
}

function printReport(student: Student): void{
    console.log(`Name: ${student.name} | Age: ${student.age} | Avg: ${getAvg(student)} | Status: ${student.isEnrolled}`)
}

const student1: Student = {
    name: "Rabi",
    age: 29,
    grades: [67,58,92,81,37],
    isEnrolled : true
}

const student2: Student = {
    name: "Narad",
    age: 26,
    grades: [67,82,97,58,88,100,66],
    isEnrolled: false
}

getAvg(student1);
printReport(student1);

getAvg(student2);
printReport(student2);