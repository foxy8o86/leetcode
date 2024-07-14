/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let canJumpMax = 0;
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        if (i > canJumpMax) {
            return false;
        }
        canJumpMax = Math.max(canJumpMax, i + nums[i]);
    }
    return true;
};
// @lc code=end
