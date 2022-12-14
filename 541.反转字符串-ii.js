/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    const words = s.split("");
    for (let i = 0; i < words.length; i += 2 * k) {
        const _temp = words.splice(i, k).reverse();
        words.splice(i, 0, ..._temp);
    }
    return words.join("");
};
// @lc code=end
