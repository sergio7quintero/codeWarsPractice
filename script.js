// <!-- Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello" -->

function repeatStr (number, str) {

    let result = "";
    
    for(let i = 0; i < number; i++) {
        result = result + str;
    }
    return result;
}

console.log(repeatStr(5, 'Angel'))

function repeatWords(int, str){
    return str.repeat(int);
}

console.log(repeatWords(2, "Tony"))

//solved this problem 2 different ways once I learned what the repeat method did




// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F


function abbrevName(name){
    const nameArray = name.split(" ")
    let result = []
    nameArray.forEach(function(nameStr) { result.push(nameStr.at(0).toUpperCase())
    })
    return result.join(".")
      // code away

}
console.log(abbrevName("Sergio Quintero"))

// this was a little difficult becuase I had to geta better understanding of the forEach method and how to use it correctly




    // It's pretty straightforward. Your goal is to create a function that removes the first
    // and last characters of a string. You're given one parameter, the original string.
    // You don't have to worry about strings with less than two characters.

    function removeChar(str){
        //You got this!
        str = str.replace(str.at(0), "");
        str = str.replace(str.at(-1), "");
        return str.substring(1, str.length -1);
    };

    // I know there are simpler ways to solve this but based on my knowledge, this was the best route to take at the time




    // Write a function to split a string and convert it into an array of words.

    function stringToArray(string) {
        return string.split(' ');
    }

    // This problem was fairly simple as long as you know how to use the split method




    // Write a function which calculates the average of the numbers in a given array.
    //Note: Empty arrays should return 0.

    function findAverage(array) {
        if (array.length !== 0) {
            let sum = 0;
            for (let i = 0; i < array.length; i++) {
            sum += array[i];
            } return sum / array.length;
        } else {
            return 0;
        }
    }

    // Tech math really came in handy when it came to solving this problem



    // Finish the uefaEuro2016() function so it return string just like in the examples below:

    // uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
    // uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
    // uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

    function uefaEuro2016(teams, scores) {
        if (scores[0] < scores[1]) {
            return "At match " + teams[0] + " - " + teams[1] + ", " + teams[1] + " won!"
        } else if (scores[0] > scores[1]) {
            return "At match " + teams[0] + " - " + teams[1] + ", " + teams[0] + " won!"
        } else if (scores[0] === scores[1]) {
            return "At match " + teams[0] + " - " + teams[1] + ", " + "teams played draw."
        }
    }

    //This problem was a little tricky with the spacing in the return statements





    // Write a function that checks if a given string (case insensitive) is a palindrome.
    // A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

    function isPalindrome(x) {
        return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
        }

    // a lot of methods in this one and knowing what parameters go in each method was really convinent.



    // Given an array of integers, return a new array with each value doubled.
    // For example:
    // [1, 2, 3] --> [2, 4, 6]

    function maps(x){
        const newArr = [];
        for(let i = 0; i < x.length; i++) {
            newArr.push(x[i] * 2)
        }
        return newArr;
        }

    // Again more math but this problem wasnt too bad once I realized i had to create a new array and using the push method made it simple