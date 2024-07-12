/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let res = 0;
    let st = [];
    heights.push(0);
    heights.unshift(0);
    for (let i = 0; i < heights.length; i++) {
        while (st.length > 0 && heights[st[st.length - 1]] > heights[i]) {
            res = Math.max(
                res,
                heights[st.pop()] * (i - st[st.length - 1] - 1)
            );
        }
        st.push(i);
    }
    return res;
};
// @lc code=end
