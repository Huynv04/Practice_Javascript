/*
Số nguyên tố là số tự nhiên lớn hơn 1, chỉ có đúng hai ước số dương là 1 và chính nó.
Các số nguyên tố đầu tiên: 2, 3, 5, 7, 11, 13, 17, 19,...
- Số 1 và các số <= 0 không phải là số nguyên tố.
- Số 0 và các số âm không phải là số nguyên tố.
*/

const isPrime = (n) => {
    /*
    Kiểm tra n<=1: Nếu nhỏ hơn hoặc bằng 1, kết luận luôn false.
    Kiểm tra số nhỏ (2 và 3): Đây là các số nguyên tố nhỏ nhất, trả về true.
    Loại trừ số chẵn > 2: Mọi số chẵn lớn hơn 2 (như 4, 6, 8, 10...) 
    chắc chắn chia hết cho 2 nên không bao giờ là số nguyên tố=> trả về false.
    */
    // 1. Trường hợp biên
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0) return false; // Loại các số chẵn lớn hơn 2

    // 2. Vòng lặp tối ưu: Chỉ chạy đến căn bậc hai của n (Math.sqrt(n))
    // Bước nhảy i += 2 để chỉ kiểm tra các số lẻ, tiết kiệm 50% thời gian
    const limit = Math.sqrt(n);
    for (let i = 3; i <= limit; i += 2) {
        if (n % i === 0) {
            return false; // Phát hiện chia hết cho số khác -> Không phải số nguyên tố
        }
    }

    return true; // Vượt qua hết vòng lặp mà không chia hết cho số nào -> Là số nguyên tố
};

// --- CHẠY THỬ ---
console.log(isPrime(2));   // true  (Số nguyên tố chẵn duy nhất)
console.log(isPrime(11));  // true  
console.log(isPrime(15));  // false (chia hết cho 3 và 5)
console.log(isPrime(97));  // true  (Số nguyên tố lớn)
console.log(isPrime(100)); // false (Số chẵn)