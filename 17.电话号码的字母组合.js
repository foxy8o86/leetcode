/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let res = [];
    if (!digits) {
        return res;
    }
    let len = digits.length;

    let map = new Map();
    map.set("1", "");
    map.set("2", "abc");
    map.set("3", "def");
    map.set("4", "ghi");
    map.set("5", "jkl");
    map.set("6", "mno");
    map.set("7", "pqrs");
    map.set("8", "tuv");
    map.set("9", "wxyz");
    function generate(i, str) {
        if (i === len) {
            res.push(str);
            return;
        }
        let tmp = map.get(digits[i]);
        for (let n = 0; n < tmp.length; n++) {
            generate(i + 1, str + tmp[n]);
        }
    }

    generate(0, "");
    return res;
};
// @lc code=end
