
```typescript
function addBinary(a: string, b: string): string {
    const max = (a.length > b.length) ? a.length : b.length;
    let result = '';
    let carry = 0;
    for (let i = 0; i < max; i++) {
        let val = 0;
        if (a.length-1-i >= 0) {
            val += Number(a[a.length-1-i]);
        }
        if (b.length-1-i >= 0) {
            val += Number(b[b.length-1-i]);
        }
        val += carry;
        result = String(val % 2) + result;
        carry = 0;
        if (val >= 2) {
            carry = 1;
        }
    }
    // 最後一位進位補1
    return carry ? '1'+ result : result;
};
```