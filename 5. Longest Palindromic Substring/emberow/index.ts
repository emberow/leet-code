function LongestPalindromicSubstring(s: string){
    // 時間複雜度O(N)
    //解題思路:先找出回文中最中間的那一塊，有可能是1個或2個，然後再慢慢擴展出去並判斷，如果最前面的字串與最後面的字串相等就會符合回文條件
    //直到無法擴展後，再進行結算，有比先前儲存的回文還大時，在進行儲存。

    let front:number;
    let rear:number;
    let max = 0; //儲存歷史紀錄
    let result:number[] = []; //儲存最大的回文index
    //把目前for迴圈的值當成回文中最中間的那邊
    for(let i = 0; i < s.length; i++){
        rear = i;
        front = i;

        // 判斷回文最中間的核心是一顆還是兩顆
        if(front - 1 >= 0 && rear + 1 < s.length){
            if(s[i-1] != s[i+1] && s[i+1] == s[i]){
                rear += 1;
            }
        }
        
        while(front - 1 >= 0 && rear + 1 < s.length){
            // 如果前面的字元跟後面的相等,那就擴展字串
            if(s[rear + 1] == s[front - 1]){
                rear += 1;
                front -= 1;
            }
            //如果都不相等，則結算看看是否有比歷史的字串還要大
            else{
                break;
            }
        }
        
        if(max < rear - front + 1){
            result = [front, rear];
            max = rear - front + 1;
        }
    }

    let returnStr = s.substring(result[0], result[1]+1);
    return returnStr;
}

console.log(LongestPalindromicSubstring("aavdaawaadwva"));
console.log(LongestPalindromicSubstring("vaav"));