/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    if (head == null) {
        return null;
    }
    let start = head;
    let end = head;
    for (let i = 0; i < k; ++i) {
        if (end === null) {
            return start;
        }
        end = end.next;
    }
    let prev = null;
    let curr = head;
    for (let i = 0; i < k; ++i) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    start.next = reverseKGroup(end, k);
    return prev;
};
// @lc code=end
