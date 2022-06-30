function longestPalindrome(s: string): string {
    let center = 0;
    let range = 1;
    let bestCenter = 0;
    let bestRange = 0;
    
    const inBoundary = (item, x) => x < item.length;
    const mirrorEqual = (str, c, x) => str[c+x] == str[c-x];
    const updateBest = (c, r) => (bestRange < r) && (bestRange = r, bestCenter = c);

    // 比對填充後的字串 (這樣可以辨別是奇數還是偶數長度的回文)
    const padding = `*${Array.prototype.join.call(s, '*')}*`;
    while (inBoundary(padding, center) && inBoundary(padding, bestCenter+bestRange)) {
        range = 1;
        
        // 從中間擴展比對
        while (inBoundary(padding, center+range) && mirrorEqual(padding, center, range)) {
            ++range;
        }
        // 更新最好回文
        updateBest(center, range);
        
        ++center;
    }
    
    // 最佳的結果從填充後的 index 還原到原本字串的 index
    let offset = Math.floor((bestCenter-bestRange+1)/2);
    let count = bestRange-1
    return s.substring(offset, offset+count);
};