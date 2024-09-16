/*
Operation 1: Swap any two existing characters.
For example, abcde -> aecdb
Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
 */

/*
steps:
1. length
2. FM1 and FM2 -> frquencyMap
3. FM -> keys compare size(length)
4. haveSameCharacters
5. values -> sort -> array
6. array -> string
 */

var closeStrings = function(word1, word2) {
    // step1
    if (word1.length !== word2.length) {
        return false
    }
    // step2
    const frquencyMap1 = new Map()
    const frquencyMap2 = new Map()

    // To fill Map() use loop
    for (const character of word1) {
        frquencyMap1.set(character, (frquencyMap1.get(character) || 0) + 1)
    }

    for (const character of word2) {
        frquencyMap2.set(character, (frquencyMap2.get(character) || 0) + 1)
    }

    // step3: get keys(values) from FM using Set()
    const characters1 = new Set(frquencyMap1.keys())
    const characters2 = new Set(frquencyMap2.keys())

    if (characters1.size !== characters2.size) {
        return false
    }

    // step4
    const haveSameCharacters = [...characters1].every(char => characters2.has(char))

    if (!haveSameCharacters) {
        return false
    }

    // step5
    const sortedFrequency1 = Array.from(frquencyMap1.values()).sort((a, b) => a-b)
    const sortedFrequency2 = Array.from(frquencyMap2.values()).sort((a, b) => a-b) // it is sorted array from frquency values

    const areFrequencyIdentical = sortedFrequency1.join(',') === sortedFrequency2.join(',')

    if (!areFrequencyIdentical) {
        return false
    }
    return true
};