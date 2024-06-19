/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let res = [];
    if (!root) return res;
    let queue = [root];
    while (queue.length) {
        let childSize = queue.length;
        let temp = [];
        for (let i = 0; i < childSize; i++) {
            let head = queue.shift();
            for (const child of head.children) {
                queue.push(child);
            }
            temp.push(head.val);
        }
        res.push(temp);
    }
    return res;
};
// @lc code=end
