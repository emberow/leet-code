# Two Sum

## 1. 暴力解法

把每一種組合都找出來就可以了

```Typescript
for (let i=0;i<nums.length;++i) { // 遍歷每個數字當第一個數字
    for (let j=i+1;j<nums.length;++j) { // 將 i 跟 i+1 以後的數字做組合
        if (nums[i] + nums[j] == target) { // 找到匹配的就回傳 (因為題目說可以假設只有 「一個」 答案)
            return [i, j];
        }
    }
}
return [];
```

## 2. HashMap 解

一開始先把所有的索引都存起來
存在同樣的數字就用告高的索引蓋掉

因為題目說答案只有「一個」
所以只要再掃一遍陣列
找到那「一個」等於 target - map[j]，且 j 大於 i 的數字
就可以完成了

時間複雜度 O(n)