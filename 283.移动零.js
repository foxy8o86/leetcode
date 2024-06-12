/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let slow = (fast = 0);
    let len = nums.length;
    // 慢指针指向第一个0，快指针寻找下一个非0
    for (let i = 0; i < len; i++) {
        if (nums[slow] !== 0) {
            slow++;
            fast++;
        } else if (nums[fast] === 0) {
            fast++;
        } else {
            [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
            slow++;
            fast++;
        }
    }
};
// @lc code=end
