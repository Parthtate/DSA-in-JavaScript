// (i.e., "ace" is a subsequence of "abcde" while "aec" is not).


var isSubsequence = function(s, t) {
    let sIndex = 0  // ptr 1

    for (const chars of t) {  // t is 2nd ptr
        if (sIndex === s.length) break
        if (s[sIndex] === chars) sIndex++
    }

    return sIndex === s.length
};
console.log(isSubsequence("abc", "ahbgdc"));