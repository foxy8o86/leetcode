/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (!root) return false;
    if (root.left === null && root.right === null) {
        return targetSum - root.val === 0;
    }
    return (
        hasPathSum(root.left, targetSum - root.val) ||
        hasPathSum(root.right, targetSum - root.val)
    );

    /* if (!root) return false;
    if (root.left === null && root.right === null) {
        return targetSum - root.val === 0;
    }
    let path = [];
    function calPath(node, currentSum) {
        if (!node) return;  

        currentSum += node.val;
        if (!node.left && !node.right) {
            path.push(currentSum);
            return;
        }

        calPath(node.left, currentSum);
        calPath(node.right, currentSum);
    }
    calPath(root, 0);
    return path.includes(targetSum); */
};
// @lc code=end
