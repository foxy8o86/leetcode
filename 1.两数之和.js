/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let seen = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (seen.has(target-nums[i])) {
            return [seen.get(target-nums[i]),i]
        }
        seen.set(nums[i],i)
    }
};
// @lc code=end

