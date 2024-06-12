/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function (head) {
    // let prev = null;
    // let curr = head;
    // while (curr != null) {
    //     let next = curr.next;
    //     curr.next = prev;
    //     prev = curr;
    //     curr = next;
    // }
    // return prev;
    if (!head || !head.next) {
        return head;
    }

    let next = head.next;
    let reverseHead = reverseList(next);
    head.next = null;
    next.next = head;
    return reverseHead;
};
// @lc code=end
