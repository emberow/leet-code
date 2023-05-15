
```typescript
function hasCycle(head: ListNode | null): boolean {
    let map = new Map();
    while (head != null) {
        if (map.get(head)) {
            return true
        } else {
            map.set(head, true);
        }
        head = head.next;
    }
    return false;
};```