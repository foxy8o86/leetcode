/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    let st = [];
    for (const i of s) {
        if (st.length && st[st.length - 1] === i) {
            st.pop();
        } else {
            st.push(i);
        }
    }
    return st.join('');
};
// @lc code=end
