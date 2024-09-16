var kidsWithCandies = function(candies, extraCandies) {
    const maxCandies = Math.max(...candies)

    // Apply loop on candies
    const result = candies.map(candy => candy + extraCandies >= maxCandies);

    return result
};
const candies = [2,3,5,1,3];
const extraCandies = 3;
console.log(kidsWithCandies(candies, extraCandies))