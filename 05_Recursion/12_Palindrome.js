// Check string is palindrome
// madam
// ada
// d -> true

function palindrome(string){

    // Base case
    if (string.length <= 1) {
        return 'String is palindrome'
    }

    if (string[0] === string[string.length - 1]) {
        return palindrome(string.substring(1, string.substring - 1))
    } else {
        return `String is not palindrome` // string is not palindrome.
    }
}
console.log(palindrome("madam"));