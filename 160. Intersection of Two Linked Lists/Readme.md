
```typescript

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let setA = new Set();
    let setB = new Set();
    while (headA != null || headB != null) {
        if (headA) {
            if (setB.has(headA)) {
                return headA;
            }
            setA.add(headA);
            headA = headA.next;
        }
        if (headB) {
            if (setA.has(headB)) {
                return headB;
            }
            setB.add(headB);
            headB = headB.next;
        }
    }
    return null;
};
```