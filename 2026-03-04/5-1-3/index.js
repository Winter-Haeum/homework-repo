var studentName = "장미진";
var studentage = 39;
var isGraduated = false;
var subjects = ["html", "css"];
var myPoint = [10, 20, 30];
var myRole = "admin";
var scores = {
    국어: 100,
    수학: 75,
};
var employee = {
    name: "장미진",
    age: 39,
    email: "jang@test.com",
    phone: "010-1234-5678",
};
var evaluateEmployee = function (emp) {
    if (emp.age > 30)
        return "승진함";
    return "해고됨";
};
console.log("studentName:", studentName);
console.log("myPoint:", myPoint);
console.log("myRole:", myRole);
console.log("scores:", scores);
console.log("employee:", employee);
console.log("평가:", evaluateEmployee(employee));
