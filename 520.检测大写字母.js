/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] 检测大写字母
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    return word.toUpperCase() === word || word[0] + word.substring(1).toLowerCase() === word;
};
// @lc code=end
