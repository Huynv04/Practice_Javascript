const calculate = (a, operator, b) => {
    const num1 = Number(a);
    const num2 = Number(b);
    if (Number.isNaN(num1) || Number.isNaN(num2)) {
        return "Gia tri dau vao phai la so hop le";
    }
    switch (operator) {
        case "+": return num1 + num2;
        case "-": return num1 - num2;
        case "*": return num1 * num2;
        case "/":
            if (num2 === 0) {
                return "Khong the chia cho 0";
            }
            return num1 / num2;

        case "%":
            if (num2 === 0) {
                return "Lỗi: Không thể chia lấy dư cho 0.";
            }
            return num1 % num2;
        case "^":
            return num1 ** num2; // Bổ sung toán tử lũy thừa
        default:
            return "Lỗi toán tử không hợp lệ.";
    }
};
console.log("10 + 5  = " + calculate(10, "+", 5));   // 15
console.log("10 - 20 = " + calculate(10, "-", 20));  // -10
console.log("6 * 7   = " + calculate(6, "*", 7));    // 42
console.log("10 / 0  = " + calculate(10, "/", 0));    // Lỗi: Không thể chia cho 0!
console.log("2 ^ 8   = " + calculate(2, "^", 8));    // 256
console.log("10 / 'abc' = " + calculate(10, "/", "abc")); // Lỗi: Giá trị đầu vào phải là số hợp lệ!
