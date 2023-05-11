const students = [
    {
        name: "Celina",
        grade1: 6,
        grade2: 9
    },
    {
        name: "João",
        grade1: 4,
        grade2: 5
    },
    {
        name: "Julia",
        grade1: 8,
        grade2: 6
    },
    {
        name: "Lurdes",
        grade1: 3,
        grade2: 8
    }
]

CalcAverage = function(grade1,grade2) {
    return ((grade1+grade2)/2).toFixed(1)
}

PrintStudentAverage = function(student) {
    let average = CalcAverage(student.grade1,student.grade2)
    if (average >= 7) {
        return `A média do(a) aluno(a) ${student.name} é: ${average}\nParabéns, ${student.name}! Você foi aprovado(a) no concurso!`
    }
    else {
        return `A média do(a) aluno(a) ${student.name} é: ${average}\nNão foi dessa vez, ${student.name}! Tente novamente!`
    }
}

for (let student of students) {
    let ApprovalMessage = PrintStudentAverage(student)
    alert(ApprovalMessage)
}