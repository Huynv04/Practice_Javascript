// Hàm thông thường (Function Expression)
//Arrow function (Hàm mũi tên) - Cú pháp rút gọn, không có từ khóa function, không có this riêng
// const addNormal = function (a, b) {
//     return a + b;
// };

// // Arrow Function (Rút gọn, nếu chỉ có 1 dòng thì tự động return không cần từ khóa return)
// const addArrow = (a, b) => a + b;
// console.log(addArrow(5, 10)); // 15

// //Destructuring (Bóc tách dữ liệu)
// // 1. Object Destructuring
// const user = { username: "Nam", age: 22, role: "Developer" };
// const { username, role } = user;
// console.log(username); // "Nam"
// console.log(role);     // "Developer"

// // 2. Array Destructuring (Nền tảng của React useState)
// const colors = ["red", "green", "blue"];
// const [firstColor, secondColor] = colors;
// console.log(firstColor);  // "red"
// console.log(secondColor); // "green"

// //3. Spread & Rest Operator (...)
// // --- SPREAD (Sao chép / Gộp) ---
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// const obj1 = { name: "An", score: 8 };
// const obj2 = { ...obj1, score: 9 }; // Copy obj1 và ghi đè score thành 9

// // --- REST (Thu gom tham số) ---
// const sumAll = (...numbers) => {
//     // numbers lúc này là một mảng chứa tất cả tham số truyền vào
//     return numbers.reduce((total, num) => total + num, 0);
// };

// console.log(sumAll(1, 2, 3, 4)); // 10

// //4. Template Literals
// const firstName = "Nguyen";
// const lastName = "An";

// // Cách cũ: Dùng dấu cộng
// const fullNameOld = "Xin chào, " + firstName + " " + lastName + "!";

// // Cách hiện đại (Template Literals):
// const fullNameNew = `Xin chào, ${firstName} ${lastName}!`;
// console.log(fullNameNew); // "Xin chào, Nguyen An!"

//5. Optional Chaining (?.) & Nullish Coalescing (??)
const user = {
    name: "Bình",
    // address bị thiếu, giả sử từ API trả về là undefined
};

// 1. Optional Chaining (?.)
// Nếu không có ?. code sẽ báo lỗi Cannot read properties of undefined
console.log(user.address?.city); // Trả về undefined thay vì crash app!

// 2. Nullish Coalescing (??)
const inputScore = null;
const finalScore = inputScore ?? 0; // Nếu inputScore là null/undefined thì lấy giá trị 0
console.log(finalScore); // 0