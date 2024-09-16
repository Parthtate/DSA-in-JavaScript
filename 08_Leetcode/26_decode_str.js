var decodeString = function(s) {
    let stack = []
    let currentNum = 0
    let currentStr = ''

    for (const char of s) {
        if (char >= '0' && char <= '9') {
            currentNum = currentNum * 10 + (char - '0') // convert str into Number e.g '33'-> '30' - '3' ('0'-'3') = 33
        } else if (char === '[') {
            stack.push(currentNum)
            stack.push(currentStr)

            //reset
            currentNum = 0
            currentStr = ''
        } else if (char === ']') {
            let prevStr = stack.pop()
            let repeatTimes = stack.pop()

            //BuildingCurrentCharacter
            currentStr = prevStr + currentStr.repeat(repeatTimes)
    
         } else {
            currentStr += char // 3[a] -> a goes in cuurentStr
         }
    }
    return currentStr
};
console.log(decodeString("3[a]2[bc]"));
