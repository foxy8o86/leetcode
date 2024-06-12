/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let head = (tail = null);
    let flag = 0;
    while (l1 || l2) {
        let n1 = l1 ? l1.val : 0;
        let n2 = l2 ? l2.val : 0;
        let res = n1 + n2 + flag;
        if (!head) {
            head = tail = new ListNode(res % 10);
        } else {
            tail.next = new ListNode(res % 10);
            tail = tail.next;
        }
        flag = res > 9 ? 1 : 0;
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    if (flag > 0) {
        tail.next = new ListNode(1);
    }

    return head;
};
// @lc code=end
