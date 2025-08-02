let n = Number(prompt("Nhập số học sinh:")); // Dùng prompt để nhập số, dùng Number để ép kiểu dữ liệu
let students = []

for (let i = 0; i < n; i++) {
        let name = prompt(`Nhập tên học sinh thứ ${i + 1}:`);
        let score = Number(prompt(`Nhập điểm của học sinh ${name}:`));
        students.push({name: name, score: score})
}

function ranking(score) {
        if (score >= 90) return "Giỏi"
        else if (score >= 70) return "Khá"
        else if (score >= 50) return "Trung bình"
        else return "Yếu"
}

// Hiển thị danh sách học sinh dùng forEach()
console.log("Danh sách học sinh:");
students.forEach((student, index) => {
        console.log(`${index + 1}. ${student.name} - ${student.score} điểm - ${ranking(student.score)}`);
})

// Tinh điểm trung bình toàn lớp dùng reduce()
let totalScore = students.reduce((sum, student) => sum + student.score, 0)
let averageScore = (totalScore / students.length).toFixed(2) // Làm tròn đến 2 chữ số thập phân
console.log(`Điểm trung bình toàn lớp: ${averageScore} điểm`);

// Lọc số học sinh có điểm >= 70 dùng filter()
let passingStudents = students.filter(student => student.score >= 70)
console.log("Danh sách học sinh đạt điểm >= 70:");
passingStudents.forEach((student, index) => {
        console.log(`${index + 1}. ${student.name} - ${student.score} điểm`);
})

// Tìm học sinh điểm cao nhất dùng reduce()
let topStudent = students.reduce((max, student) => student.score > max.score ? student : max, students[0])
console.log(`Học sinh có điểm cao nhất: ${topStudent.name} - ${topStudent.score} điểm`);

// Tạo mảng tên học sinh dùng map()
let studentNames = students.map(student => student.name)
console.log("Danh sách tên học sinh:", studentNames);

