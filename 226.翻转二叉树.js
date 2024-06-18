/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
    /* if (!root) return null;
    let tempLeft = root.left;
    root.left = root.right;
    root.right = tempLeft;
    invertTree(root.left);
    invertTree(root.right);
    return root; */

    if (!root) return null;
    let queue = [root];
    while (queue.length) {
        let curr = queue.shift();
        [curr.left, curr.right] = [curr.right, curr.left];
        if (curr.left) queue.push(curr.left);
        if (curr.right) queue.push(curr.right);
    }
    return root;
};
// @lc code=end
