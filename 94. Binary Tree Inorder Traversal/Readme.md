recursion
```typescript
function inorderTraversal(root: TreeNode | null): number[] {
    if(!root) return [];
    return inorderTraversal(root.left).concat(root.val, inorderTraversal(root.right));
};
```