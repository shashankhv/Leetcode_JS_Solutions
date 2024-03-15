/*
Question: 
Given two strings `s` and `t`, write a function to determine if `t` is an anagram of `s`. 
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

Solution 1:
*/
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    arr = Array(26).fill(0);
    arr1 = Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        arr[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        arr1[t.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== arr1[i]){
            return false;
        }
    }
    return true;
};
/*
Time complexity: O(n), where n is the length of the strings.
Space complexity: O(1), as the space used does not grow with the size of the string input, it remains constant.

Solution 2:
*/
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const charCounts = {};

    for (let i = 0; i < s.length; i++) {
        charCounts[s[i]] = (charCounts[s[i]] || 0) + 1;
        charCounts[t[i]] = (charCounts[t[i]] || 0) - 1;
    }

    for (const count of Object.values(charCounts)) {
        if (count !== 0) return false;
    }

    return true;
};
/*
Time complexity: O(n), where n is the length of the strings.
Space complexity: O(1), as the space used does not grow with the size of the string input, it remains constant. 
Although we are using an object to store the character counts, the number of keys in the object is bounded as there are only a finite number of characters.
*/