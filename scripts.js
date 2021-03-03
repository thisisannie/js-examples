// Example 1
// takes an array and returns it with the contents duplicated three times
const repeat = function(input) {
    if (Array.isArray(input)) {
        const repeatedInput = Array(3).fill(input).flat();
        return (repeatedInput);
    } else {
        return "This is not an array";
    }
}

// Example 2
// takes a string and reformats it to have no vowels and be all lowercase exept for capitalizing the first letter
const reformat = function(input) {
    if (typeof input === "string" || input instanceof String) {
        const inputSansVowels =  input.replace(/[aeiou]/gi, '');
        const inputSansVowelsToLower = inputSansVowels.toLowerCase();
        const inputSansVowelsToCase = inputSansVowelsToLower.charAt(0).toUpperCase() + inputSansVowelsToLower.slice(1)
        return (inputSansVowelsToCase);
    } else {
        return "This is not an string";
    }
}

// Example 3
// takes an array of binary digits for a number and returns the set of digits for the next number
// program to convert decimal to binary
const next_binary_number = function(input) {
    if (Array.isArray(input)) {
        const array = input;
        for (var value of array) {
            if (value !== 0 && value !== 1) {
                return "There are unexpected digits in this array";
            }
        }

        // parse intiger as a base two number. Returns as a decimal
        const bNumber = parseInt(array.join(''), 2);
        
        const nextNumber = bNumber + 1;
        const bNextNumber = nextNumber.toString(2);
        const aBNextNumber = Array.from(bNextNumber);
        return aBNextNumber;
    } else {
        return "This is not an array";
    }
}
