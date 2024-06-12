/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let n = nums.length;
    if (n === 0) {
        return 0;
    }
    let i = 0;
    for (let j = 1; j < n; j++) {
        if (nums[j] !== nums[j - 1]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};
// @lc code=end
