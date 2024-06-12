/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let i = (j = nums[0]);
    while (true) {
        i = nums[i];
        j = nums[nums[j]];
        if (i === j) break;
    }
    i = nums[0];
    while (i != j) {
        i = nums[i];
        j = nums[j];
    }
    return i;
};
// @lc code=end
