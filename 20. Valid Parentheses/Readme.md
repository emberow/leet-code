use stack to store the other side of the brackets, and force next value must be equal to stack pop, and ensure the stack is empty at the end.

``` typescript
function isValid(s: string): boolean {
    let array = new Array();
    if (s.length == 1) return false;
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (c == '{') {
            array.push('}');
        } else if (c == '(') {
            array.push(')');
        } else if (c == '[') {
            array.push(']');
        } else if (array.pop() != c) {
           return false;
        } 
    }
    return array.length == 0;
};
```