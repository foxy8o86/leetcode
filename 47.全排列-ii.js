/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    const len = nums.length,
        res = [],
        used = [];

    nums.sort((a, b) => a - b);
    const backtrack = (st) => {
        if (st.length == len) {
            res.push(st.slice());
            return;
        }
        for (let i = 0; i < len; i++) {
            if (used[i]) continue;
            if (i > 0 && nums[i - 1] === nums[i] && !used[i - 1]) continue;
            st.push(nums[i]);
            used[i] = true;
            backtrack(st);
            st.pop();
            used[i] = false;
        }
    };
    backtrack([]);
    return res;
};
// @lc code=end
