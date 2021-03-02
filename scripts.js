// Example 1
// takes an array and returns it with the contents duplicated three times
const repeat = function(input) {
    if (Array.isArray(input)) {
        repeatedInput = Array(3).fill(input).flat();
        return (repeatedInput);
    } else {
        return "This is not an array";
    }
}

// Example 2
// takes a string and reformats it to have no vowels and be all lowercase exept for capitalizing the first letter

// Example 3
// takes an array of binary digits for a number and returns the set of digits for the next number
