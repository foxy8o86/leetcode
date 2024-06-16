/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    /* 深度优先算法 */

    /* if (!root) return [];
    const res = [];

    function dfs(root, depth, res) {
        if (!root) return;
        if (!res[depth]) res[depth] = [];
        res[depth].push(root.val);
        dfs(root.left, depth + 1, res);
        dfs(root.right, depth + 1, res);
    }
    dfs(root, 0, res);
    return res; */

    /* 广度优先算法 */

    if (!root) return [];
    let queue = [root];
    let res = [];
    while (queue.length > 0) {
        const arr = [];
        let len = queue.length;
        while (len) {
            let node = queue.shift();
            arr.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            len--;
        }
        res.push(arr);
    }
    return res;
};
// @lc code=end
