/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
     if (s.length === 0) {
         return 0
     } else if (s.length === 1) {
         return 1
     }
     else {
        return dfs(s,0)
    }
};
const dfs = (s,n) => {
    let i = n
    let tem =  []
    let lengthArray = []
    while (i < s.length) {
        if (tem.includes(s[i])) {
            let index = tem.indexOf(s[i])
            lengthArray.push(tem.length)
            tem.push(s[i])
            tem.splice(0,index+1)
        } else {
            tem.push(s[i])
        }
        i++
    }
    lengthArray.push(tem.length)
    return Math.max(...lengthArray)
}
const s3 = 'au'
console.log('tag',lengthOfLongestSubstring(s3))