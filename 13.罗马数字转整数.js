/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const base = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let result = 0,
        prevNum = 0,
        curNum = 0;
    for (let i = 0; i < s.length; i++) {
        curNum = base[s.charAt(i)];
        if (i !== 0) {
            if (curNum <= prevNum) {
                result += prevNum;
            } else {
                result -= prevNum;
            }
        }
        prevNum = curNum;
    }

    result += prevNum;

    return result;
};
// @lc code=end
