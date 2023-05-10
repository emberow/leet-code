```typescript
function isPalindrome(s: string): boolean {
    const charString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let left = 0;
    let right = charString.length-1;

    while(left < right){
        if(charString[left++] !== charString[right--]) return false;
    }

    return true;
};
```