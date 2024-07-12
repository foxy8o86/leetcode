/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let length = temperatures.length;
    let res = new Array(length).fill(0);
    let st = [];
    /* 从右向左遍历 */
    /* for (let i = length - 1; i >= 0; i--) {
        t = temperatures[i];
        while (st.length > 0 && t >= temperatures[st[st.length - 1]]) {
            st.pop();
        }
        if (st.length > 0) {
            res[i] = st[st.length - 1] - i;
        }
        st.push(i);
    } */
    /* 从左向右遍历 */
    for (let i = 0; i < length; i++) {
        t = temperatures[i];
        while (st.length > 0 && t > temperatures[st[st.length - 1]]) {
            j = st.pop();
            res[j] = i - j;
        }
        st.push(i);
    }
    return res;
};
// @lc code=end
