/*
 * @lc app=leetcode.cn id=551 lang=javascript
 *
 * [551] 学生出勤记录 I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
    const record = s.split("");
    let a = 0;
    let l = 0;
    for (let k of record) {
        switch (k) {
            case "A":
                a++;
                if (l !== 0) l = 0;
                if (a >= 2) return false;
                break;
            case "L":
                l++;
                if (l >= 3) return false;
                break;
            default:
                if (l !== 0) l = 0;
        }
    }
    return true;
};
// @lc code=end
