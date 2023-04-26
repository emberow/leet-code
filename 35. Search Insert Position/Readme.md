use binary search to get result

```
function searchInsert(nums: number[], target: number): number {
    let front = 0;
    let rear = nums.length-1;
    while(front <= rear) {
        const middle = Math.floor((front + rear) / 2);
        if (target > nums[middle]) {
            front = middle + 1;
        } else {
            rear = middle - 1;
        }
    }
    return front;
};
```