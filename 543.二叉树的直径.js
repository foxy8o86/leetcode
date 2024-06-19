/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    let res = 1;
    function calPath(root) {
        if (!root) return 0;
        let L = calPath(root.left);
        let R = calPath(root.right);
        res = Math.max(res, L + R + 1);
        return Math.max(L, R) + 1;
    }
    calPath(root);
    return res - 1;
};
// @lc code=end
