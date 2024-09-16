// Reverse two pointer vowels string
// superman


var reverseVowels = function(s) {
    let vowels = 'aeiouAEIOU';
    let character = s.split(''); // convert String into Array

    let left = 0
    let right = s.length - 1

    while (left < right) {
        

        while (left < right && vowels.indexOf(character[left]) === -1) {
            left++
        }

        while (left < right && vowels.indexOf(character[right]) === -1) {
            right--
        }

        // swap
        if (left < right) {
            let temp = character[left]
            character[left] = character[right]
            character[right] = temp

            // for forwording moveing both pointer's.
            left++
            right--
        }
    }
    return character.join('')
};

