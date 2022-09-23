/*
 * @lc app=leetcode.cn id=563 lang=javascript
 *
 * [563] 二叉树的坡度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function (root) {
    const cache = [];

    const checkNode = (node, sum = []) => {
        if (!node) return 0;
        const left = checkNode(node.left, sum);
        const right = checkNode(node.right, sum);
        sum.push(Math.abs(left - right));
        return left + right + node.val;
    };

    checkNode(root, cache);
    return cache.reduce((result, cur) => (result += cur), 0);
};
// @lc code=end
