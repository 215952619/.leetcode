/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    const cache = [0, 1, 2];

    let i = 3;
    while (i <= n) {
        cache[i] = cache[i - 1] + cache[i - 2];
        i++;
    }
    return cache[n];
};
// @lc code=end
