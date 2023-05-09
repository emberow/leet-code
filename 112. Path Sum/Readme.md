use recursion
```typescript
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) {
        return false;
    }
    if (targetSum == root.val && !root.left && !root.right) {
        return true;
    }
    return (hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val));
};```