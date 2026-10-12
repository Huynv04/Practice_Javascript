// Dữ liệu ban đầu có đối tượng lồng nhau (address)
const originalUser = {
    name: "Binh",
    address: { city: "Hanoi", district: "Cau Giay" }
};

// --- 1. SHALLOW COPY (Dùng Spread Operator) ---
const shallowCopyUser = { ...originalUser };

// Thử thay đổi thuộc tính lớp ngoài -> KHÔNG ảnh hưởng gốc (An toàn)
shallowCopyUser.name = "An";
console.log(originalUser.name); // "Binh" (Gốc giữ nguyên)

// ❌ THỬ THAY ĐỔI OBJECT LỒNG BÊN TRONG (Address) -> BỊ LỖI ĐỘT BIẾN
shallowCopyUser.address.city = "Ho Chi Minh";
console.log(originalUser.address.city); // "Ho Chi Minh" -> ⚠️ Gốc bị đổi theo!


// --- 2. DEEP COPY (Dùng structuredClone chuẩn hiện đại) ---
const deepCopyUser = structuredClone(originalUser);

// Thử thay đổi object lồng bên trong -> AN TOÀN TUYỆT ĐỐI
deepCopyUser.address.city = "Da Nang";
console.log(originalUser.address.city); // "Ho Chi Minh" -> Dữ liệu gốc được bảo vệ hoàn toàn!