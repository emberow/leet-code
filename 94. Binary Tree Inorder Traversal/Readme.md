recursion
```typescript
function inorderTraversal(root: TreeNode | null): number[] {
    if(!root) return [];
    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
};
```