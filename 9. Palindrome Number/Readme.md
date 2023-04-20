compare character of `c` and corresponding character from the end of string, if these characters are not equal, the number is not a palindrome.
``` typescript
function isPalindrome(x: number): boolean {
    let c = x.toString();
    for (let i = 0; i < c.length/2; i++) {
        if (c[i] != c[c.length-i-1]) return false;
    }
    return true;
};
```