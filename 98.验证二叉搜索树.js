/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function (root) {
    /* 以下为递归方法 */
    let prev = -Infinity;
    let res = true;
    function inorder(root) {
        if (root === null) {
            return;
        }
        inorder(root.left);
        if (root.val <= prev) {
            res = false;
            return;
        }
        prev = root.val;
        inorder(root.right);
    }

    inorder(root);
    return res;

    /* ******* */
    /* let stack = [];
    let prev = -Infinity;
    while (root || stack.length) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if (root.val <= prev) {
            return false;
        }
        prev = root.val;
        root = root.right;
    }
    return true; */
};
// @lc code=end
