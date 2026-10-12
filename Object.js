const user = {
    id: 1,
    name: "Nguyen Van A",
    role: "Admin"
};

// 1. Lấy tất cả các khóa (keys)
console.log(Object.keys(user));
// Kết quả: ["id", "name", "role"]

// 2. Lấy tất cả các giá trị (values)
console.log(Object.values(user));
// Kết quả: [1, "Nguyen Van A", "Admin"]

// 3. Lấy cả cặp key-value (entries) - Thường kết hợp với .map() trong React
console.log(Object.entries(user));
// Kết quả: [ ["id", 1], ["name", "Nguyen Van A"], ["role", "Admin"] ]

// Ứng dụng duyệt qua Object:
Object.entries(user).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});