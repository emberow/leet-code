use recursion
```typescript
function isSymmetric(root: TreeNode | null): boolean {
    return isSubTreeSymmetric(root.left, root.right); 
};

function isSubTreeSymmetric(root1, root2): boolean {
    if (!root1 && !root2) return true;
    if (root1?.val != root2?.val) return false;
    return isSubTreeSymmetric(root1.left, root2.right) && isSubTreeSymmetric(root1.right, root2.left);
}
```