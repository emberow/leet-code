
```typescript
function preorderTraversal(root: TreeNode | null): number[] {
    if (!root) return [];
    return [root.val].concat(preorderTraversal(root.left), preorderTraversal(root.right));
};
```