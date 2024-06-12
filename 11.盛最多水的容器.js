/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maxArea = 0;
    let i = 0;
    let j = height.length - 1;
    while (i != j) {
        tmpArea = (j - i) * Math.min(height[i], height[j]);
        maxArea = tmpArea > maxArea ? tmpArea : maxArea;
        if (height[i] > height[j]) {
            j--;
        } else {
            i++;
        }
    }
    return maxArea;
};
// @lc code=end
