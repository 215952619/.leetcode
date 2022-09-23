/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function (root) {
    const treeMap = (node) => {
        if (!node) return 0;

        const left = treeMap(node.left);
        const right = treeMap(node.right);

        result = Math.max(result, left + right);
        return Math.max(left, right) + 1;
    };
    let result = 0;
    treeMap(root);
    return result;
};
// @lc code=end
