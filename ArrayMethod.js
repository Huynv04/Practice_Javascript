const products = [
    { id: 1, name: "Laptop", price: 1500, inStock: true },
    { id: 2, name: "Mouse", price: 50, inStock: true },
    { id: 3, name: "Keyboard", price: 100, inStock: false },
    { id: 4, name: "Monitor", price: 300, inStock: true },
    { id: 5, name: "CPU", price: 500, inStock: false }
];
//1 .map()
// Lấy ra danh sách tên của tất cả sản phẩm
const productNames = products.map(item => item.name);

console.log(productNames);
// Kết quả: ["Laptop", "Mouse", "Keyboard", "Monitor", "CPU"]

//2 .filter() – Lọc mảng theo điều kiện
// Lọc ra các sản phẩm còn hàng (inStock = true)
const availableProducts = products.filter(item => item.inStock === true);

console.log(availableProducts);
// Kết quả: Mảng chứa 3 sản phẩm (Laptop, Mouse, Monitor)

//3 .find() – Tìm phần tử đầu tiên thỏa mãn
// Tìm sản phẩm có id bằng 3
const targetProduct = products.find(item => item.id === 3);

console.log(targetProduct);
// Kết quả: { id: 3, name: "Keyboard", price: 100, inStock: false }

//4 .some() – Kiểm tra có ít nhất một phần tử thỏa mãn
// Kiểm tra xem có sản phẩm nào giá trên 1000 hay không?
const hasExpensiveProduct = products.some(item => item.price > 1000);

console.log(hasExpensiveProduct);
// Kết quả: true (vì Laptop giá 1500)

//5  .every() – Kiểm tra tất cả phần tử phải thỏa mãn
// Kiểm tra xem TẤT CẢ sản phẩm có đều còn hàng hay không?
const allInStock = products.every(item => item.inStock === true);

console.log(allInStock);
// Kết quả: false (vì Keyboard có inStock = false)

//6 .reduce() – Gom mảng thành một giá trị duy nhất
// Tính tổng giá tiền của tất cả sản phẩm trong mảng
const totalPrice = products.reduce((total, item) => {
    return total + item.price;
}, 0); // 0 là giá trị khởi điểm của biến total

console.log(totalPrice);
// Kết quả: 1950 (1500 + 50 + 100 + 300+ 500)