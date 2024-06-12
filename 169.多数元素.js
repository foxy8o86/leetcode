/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let len = nums.length;
    let res = nums[0];
    let n = 1;
    for (let i = 1; i < len; i++) {
        if (n === 0) {
            res = nums[i];
            n = 1;
            continue;
        }
        if (res === nums[i]) {
            n++;
        } else {
            n--;
        }
    }
    return res;
};
// @lc code=end
