/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const dic = new Map([
        [")", "("],
        ["]", "["],
        ["}", "{"],
    ]);
    let stack = [];
    for (let i of s) {
        if (dic.has(i)) {
            if (stack.length === 0 || dic.get(i) !== stack[stack.length - 1]) {
                return false;
            }
            stack.pop();
        } else {
            stack.push(i);
        }
    }
    return stack.length === 0;
};
// @lc code=end
