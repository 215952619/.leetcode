/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let result = strs[0];
    for (let i = 1; i < strs.length; i++) {
        for (let j = 0; j < result.length; j++) {
            if (result.charAt(j) !== strs[i].charAt(j)) {
                result = result.slice(0, j);
                if (result.length === 0) {
                    return "";
                }
            }
        }
    }
    return result;
};
// @lc code=end
