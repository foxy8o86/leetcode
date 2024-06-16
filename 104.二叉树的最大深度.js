/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function (root) {
    /* 递归 */
    if (!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;

    /* 深度优先 */
    /* if (!root) return 0;
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);

    return Math.max(left, right) + 1; */

    /* 广度优先 */
    /* let depth = 0;
    if (!root) {
        return depth;
    }
    let queue = [root];
    while (queue.length) {
        let len = queue.length;
        while (len--) {
            let curr = queue.shift();
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
        depth++;
    }
    return depth; */
};
// @lc code=end
