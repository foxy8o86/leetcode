/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let res = [];
    let length = nums.length;
    if (length < 3) {
        return res;
    }
    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < length - 2; i++) {
        if (nums[i] > 0) {
            break;
        }
        if (nums[i] == nums[i - 1]) {
            continue;
        }
        let L = i + 1;
        let R = length - 1;
        while (L < R) {
            let sum = nums[i] + nums[L] + nums[R];
            if (sum === 0) {
                res.push([nums[i], nums[L], nums[R]]);

                while (nums[R] === nums[R - 1]) {
                    R--;
                }
                while (nums[L] === nums[L + 1]) {
                    L++;
                }
                L++;
                R--;
            } else if (sum > 0) {
                R--;
            } else {
                L++;
            }
        }
    }
    return res;
};
// @lc code=end
