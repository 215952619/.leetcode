/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
const binarySearchTreeToArray = (root, result = []) => {
    if (root.left) binarySearchTreeToArray(root.left, result);
    result.push(root.val);
    if (root.right) binarySearchTreeToArray(root.right, result);
};

var getMinimumDifference = function (root) {
    const arr = [];
    binarySearchTreeToArray(root, arr);

    let result = Infinity;
    for (let i = 1; i < arr.length; i++) {
        let _temp = arr[i] - arr[i - 1];
        if (result > _temp) result = _temp;
    }
    return result;
};
// @lc code=end
