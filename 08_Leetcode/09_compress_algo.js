var compress = function(chars) {
     let index = 0;
     let i = 0

     while (i < chars.length) {
          let j = i
          while (j < chars.length && chars[j] === chars[i]) {
               j++
          }
          let count = j - i
          chars[index] = chars[i] // if any case chars have only 1 character "a" return -> 1
          index++

          // convert count into string using loop
          if (count > 1 ) {
               for (const str of count.toString()) {
                    chars[index++] = str
               }
          }
          i = j // ith update after change the value.
     }
     return index
}
console.log(compress(["a",'a','b','b','c','c','c']));