/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    g = g.sort((a, b) => a - b);
    s = s.sort((a, b) => a - b);
    let lg = 0;
    let ls = 0;
    let res = 0;
    while (lg < g.length && ls < s.length) {
        if (s[ls] >= g[lg]) {
            ls++;
            lg++;
            res++;
        } else {
            ls++;
        }
    }
    return res;
};
// @lc code=end
