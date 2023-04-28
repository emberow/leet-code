use binary search
```typescript
function mySqrt(x: number): number {
    let rear = Math.floor(x / 2) + 1;
    let front = 1;
    while (front <= rear) {
        let middle = Math.floor((rear+front) / 2);
        if (middle * middle > x) {
            rear = middle-1;
        } else if (middle * middle < x) {
            front = middle+1;
        } else {
            return middle;
        }
    }
    return rear;
};```