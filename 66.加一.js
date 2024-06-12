/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    for (let len = digits.length; len > 0; len--) {
        if (digits[len - 1] === 9) {
            digits[len - 1] = 0;
            continue;
        } else {
            digits[len - 1] += 1;
            return digits;
        }
    }
    digits.unshift(1)
    return digits;
};
// @lc code=end
