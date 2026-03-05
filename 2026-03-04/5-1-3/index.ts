export {};

let studentName: string = "장미진";
let studentage: number = 39;
let isGraduated: boolean = false;
let subjects: string[] = ["html", "css"];

type Point3D = [number, number, number];
const myPoint: Point3D = [10, 20, 30];

type Role = "admin" | "manager" | "user";
const myRole: Role = "admin";

type SubjectScores = Record<string, number>;

const scores: SubjectScores = {
  국어: 100,
  수학: 75,
};

type BasicUser = {
  name: string;
  age: number;
};

type Contact = {
  email: string;
  phone: string;
};

type EmployeeProfile = BasicUser & Contact;

const employee: EmployeeProfile = {
  name: "장미진",
  age: 39,
  email: "jang@test.com",
  phone: "010-1234-5678",
};

const evaluateEmployee = (
  emp: EmployeeProfile,
): "해고됨" | "승진함" => {
  if (emp.age > 30) return "승진함";
  return "해고됨";
};

console.log("studentName:", studentName);
console.log("myPoint:", myPoint);
console.log("myRole:", myRole);
console.log("scores:", scores);
console.log("employee:", employee);
console.log("평가:", evaluateEmployee(employee));
