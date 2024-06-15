/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (root === null) {
        return true;
    }
    res = true;
    function isEqual(left, right) {
        if (left === null && right === null) return;
        if (left === null || right === null) {
            res = false;
            return;
        }
        if (left.val === right.val) {
            isEqual(left.left, right.right);
            isEqual(left.right, right.left);
        } else {
            res = false;
            return;
        }
    }
    isEqual(root.left, root.right);
    return res;
};
// @lc code=end
