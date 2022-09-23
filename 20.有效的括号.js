/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

const symbols = new Map();
symbols.set("(", 1);
symbols.set("[", 2);
symbols.set("{", 3);
symbols.set(")", -1);
symbols.set("]", -2);
symbols.set("}", -3);

var isValid = function (s) {
    if ((1 & s.length) === 1) return false;

    const result = [];
    for (let i = 0; i < s.length; i++) {
        let curValue = symbols.get(s.charAt(i));
        if (curValue > 0) {
            result.push(curValue);
        } else {
            if (curValue + result.pop() !== 0) return false;
        }
    }

    return result.length === 0;
};
// @lc code=end
