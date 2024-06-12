/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
/* var removeElement = function (nums, val) {
    let len = nums.length;
    let left = 0;
    for (let right = 0; right < len; right++) {
        if (nums[right] !== val) {
            nums[left] = nums[right];
            left++;
        }
    }
    return left;
}; */

var removeElement = function (nums, val) {
    let len = nums.length;
    let left = 0,
        right = len;
    while (left < right) {
        if (nums[left] === val) {
            nums[left] = nums[right-1];
            right--;
        }else{
            left++;
        }
    }
    return left;
};

// @lc code=end
