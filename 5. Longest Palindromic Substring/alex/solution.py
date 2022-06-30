class Solution:
    '''
    先放一個正常能想到的好了 XD

    Time complaxity : O(n^2)
        for loop : n
        findPalindrome : n/2 (最慘)

        Total : n*n/2 => *O(n^2)*
    
    從中間擴展, 不能擴展時, 如果比記錄長就儲存.
    每個字都當一次中心 
    '''
    def __init__(self) -> None:
        self.max: int = 0
        self.f: int = 0
        self.r: int = 0

    def longestPalindrome(self, s: str) -> str:
        '''
        f : front
        r : rear
        l : length
        '''

        for i in range(len(s)):
            # odd
            f_odd, r_odd, l_odd = self._findPalindrome(s, i, i)
            # even
            f_even, r_even, l_even = self._findPalindrome(s, i, i + 1)

            # compare with best
            if l_odd > self.max:
                self.max, self.f, self.r =  l_odd, f_odd, r_odd

            if l_even > self.max:
                self.max, self.f, self.r =  l_even, f_even, r_even

        return s[self.f: self.r + 1]

    def _findPalindrome(self, s: str, f: int, r: int) -> list[int, int, int]:
        while(f >= 0 and r <= len(s) - 1):
            if s[f] != s[r]:
                break
            f -= 1
            r += 1
        return f + 1, r - 1, r - f

# test
s = Solution()
print(s.longestPalindrome("babad"))