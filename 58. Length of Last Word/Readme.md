iterate over from the end, and if the word != ' ', count increase 1, when encounter the first ' ', return `count` as result
```typescript
function lengthOfLastWord(s: string): number {
    let count = 0;
    for (let i = s.length-1; i >= 0; i--) {
        if (s[i] != ' ') {
            count += 1;
        } else if (count){
            return count;
        }
    }
    return count;
};
```