
```typescript
function postorderTraversal(root: TreeNode | null): number[] {
    if (!root) return [];
    return [].concat(postorderTraversal(root.left), postorderTraversal(root.right), root.val);
};
```