const students = [
    { id: 1, name: "Nguyen Van An", score: 8.5 },
    { id: 2, name: "Tran Thi Binh", score: 6.5 },
    { id: 3, name: "Le Hoang Cuong", score: 9.2 },
    { id: 4, name: "Pham Thi Dung", score: 4.8 },
    { id: 5, name: "Hoang Van Em", score: 7.0 },
    { id: 6, name: "Nguyen Van Fa", score: 8.5 },
    { id: 7, name: "Tran Thi Giang", score: 6.5 },
    { id: 8, name: "Le Hoang Huyen", score: 9.2 },
    { id: 9, name: "Pham Thi Quyen", score: 4.8 },
    { id: 10, name: "Hoang Van Hoang", score: 7.0 }
];
//Phần 1: Viết hàm lọc sinh viên giỏi (Điểm >= 8.0)
const getExcellentStudents = (students) => {
    return students.filter(student => student.score >= 8.0);
}
console.log("Sinh viên giỏi:", getExcellentStudents(students));

//Phần 2: Viết hàm tính điểm trung bình của cả lớp
const calculateAverageScore = (listStudent) => {
    const totalScore = listStudent.reduce((total, student) => total + student.score, 0);
    const averageScore = totalScore / listStudent.length();
    // return averageScore;
    return Number(averageScore.toFixed(2)); // Làm tròn đến 2 chữ số thập phân  
}
console.log("Điểm trung bình lớp:", calculateAverageScore(students));

//Phần 3: Viết hàm tìm sinh viên có điểm cao nhất
const getTopStudent = (listStudent) => {
    const maxScore = Math.max(...listStudent.map(student => student.score));
    return listStudent.find(student => student.score === maxScore);

}
console.log("Sinh viên điểm cao nhat:", getTopStudent(students));

//Phần 4: Viết hàm tìm sinh viên có điểm thấp nhất
const getLowestStudent = (listStudent) => {
    const minScore = Math.min(...listStudent.map(student => student.score));
    return listStudent.find(student => student.score === minScore);
}
console.log("Sinh viên điểm thấp nhất:", getLowestStudent(students));

