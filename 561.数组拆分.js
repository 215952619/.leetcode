/*
 * @lc app=leetcode.cn id=561 lang=javascript
 *
 * [561] 数组拆分
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    return nums
        .sort((a, b) => a - b)
        .reduce((result, cur, index) => {
            if (index % 2 === 0) result += cur;
            return result;
        }, 0);
};
// @lc code=end
