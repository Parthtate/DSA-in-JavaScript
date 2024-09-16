/*
We are given an array asteroids of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

Input: asteroids = [5,10,-5]
Output: [5,10]
*/

var asteroidCollision = function(asteroids) {
    let stack = []

    for (let asteroid of asteroids) {
        let explode = false
        while (stack.length > 0 && asteroid < 0 && stack[stack.length - 1] > 0) {
            const rightAsteroid = stack.pop()
            if (Math.abs(asteroid) === rightAsteroid) {
                explode = true
                break
            } else if (Math.abs(asteroid) < rightAsteroid) {
                asteroid = 0;  // 0 indicates exlposion of value
                stack.push(rightAsteroid)
                break
            }
        }
        if (!explode && asteroid !== 0) {
            stack.push(asteroid)
        }
    }
    return stack
    
};