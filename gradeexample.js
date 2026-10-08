function getGrade(marks) {
    if (marks >= 90) return "A";
    if (marks >= 75) return "B";
     if (marks >= 60) return "C";
        return "Fail"; 
    }
console.log(getGrade(82));