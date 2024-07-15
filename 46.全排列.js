/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const len = nums.length,
        res = [];
    const backtrack = (st) => {
        if (st.length == len) {
            res.push(st);
            return;
        }
        for (let i = 0; i < len; i++) {
            if (!st.includes(nums[i])) {
                st.push(nums[i]);
                backtrack(st.slice());
                st.pop();
            }
        }
    };
    backtrack([]);
    return res;
};
// @lc code=end
