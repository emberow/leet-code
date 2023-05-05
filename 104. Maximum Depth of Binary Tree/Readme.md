use recursion
```typescript
function maxDepth(root: TreeNode | null): number {
    if (root) {
        return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
    } else {
        return 0;
    }
};
```