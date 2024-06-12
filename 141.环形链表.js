/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (!head || !head.next) {
        return false;
    }
    let slow = head;
    let fast = head;
    do {
        if (!fast.next || !fast.next.next) {
            return false;
        }
        fast = fast.next.next;
        slow = slow.next;
    } while (fast !== slow);
    return true;
};
// @lc code=end
