/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let res = [];
    function pushRoot(root) {
        if (root !== null) {
            if (root.left !== null) {
                pushRoot(root.left);
            }
            res.push(root.val);
            if (root.right !== null) {
                pushRoot(root.right);
            }
        }
    }
    pushRoot(root);
    return res;
};
// @lc code=end
