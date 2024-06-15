/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    res = true;
    function sameTree(p, q) {
        if (p === null && q === null) {
            return;
        }
        if (p === null || q === null) {
            res = false;
            return;
        }
        if (p.val === q.val) {
            sameTree(p.left, q.left);
            sameTree(p.right, q.right);
            return;
        } else {
            res = false;
            return;
        }
    }
    sameTree(p, q);
    return res;
};
// @lc code=end
