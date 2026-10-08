/*
Cách 1: Đảo ngược chuỗi rồi so sánh (Tư duy tận dụng hàm có sẵn của JS)
Chuỗi ban đầu là str.Đảo ngược chuỗi để tạo ra reversedStr.
So sánh: Nếu str === reversedStr thì là chuỗi đối xứng.
Trong JavaScript, chuỗi là kiểu dữ liệu bất biến (immutable) nên không có hàm .reverse() trực tiếp. 
Ta phải chuyển chuỗi thành mảng -> đảo mảng -> ghép lại thành chuỗi:
 */
const isPalindrome1 = (str) => {
    const lowerStr = str.toLowerCase();
    const reversedStr = lowerStr.split("").reverse().join("");
    return lowerStr === reversedStr;
}

/*
Cách 2: Kỹ thuật Hai con trỏ (Two Pointers – Tối ưu hiệu năng $O(N)$ thời gian, $O(1)$ bộ nhớ)
Đặt con trỏ left ở đầu chuỗi (vị trí 0) và con trỏ right ở cuối chuỗi (vị trí str.length - 1).
So sánh cặp ký tự str[left] và str[right]:
Nếu khác nhau=> kết luận ngay là không đối xứng (return false),dừng vòng lặp lập tức mà không cần duyệt tiếp.
 Nếu bằng nhau => dịch left sang phải một bước (left++), dịch right sang trái một bước (right--).Lặp lại cho đến khi left >= right. 
 Nếu qua hết vòng lặp mà không bị ngắt, chuỗi là đối xứng (return true).
*/
const isPalindrome2 = (str) => {
    const lowerStr = str.toLowerCase();
    // Sử dụng hai con trỏ để kiểm tra từ hai đầu chuỗi
    //con trỏ trái bắt đầu ở đầu chuỗi
    let left = 0;
    //con trỏ phải bắt đầu ở cuối chuỗi
    let right = lowerStr.length - 1;
    while (left < right) {
        if (lowerStr[left] !== lowerStr[right]) {
            return false; // Nếu ký tự không khớp, không phải palindrome
        }
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome1("radar")); // true
console.log(isPalindrome1("Madam")); // true (nhờ toLowerCase)
console.log(isPalindrome1("hello")); // false

console.log(isPalindrome2("radar")); // true
console.log(isPalindrome2("Madam")); // true (nhờ toLowerCase)
console.log(isPalindrome2("hello")); // false