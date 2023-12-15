//Q1. Reverse a String
//A1.

console.log("-------ANSWER 1-------------")

function reverseString(input){
    return input.split("").reverse().join("");
}

let reversed = reverseString("Hello World!");
console.log(reversed);

//Q2. Palindrome Check
//A2.

console.log("--------ANSWER 2----------")

function isPlaindrome(input){
    let reversed = input.split("").reverse().join("");

    return input === reversed;
}

let result1 = isPlaindrome("abcddcba");
console.log(result1);

let result2 = isPlaindrome("abcdefdcba");
console.log(result2);

//Q3. Count Vowels and Consonents
//A3.

console.log("------------ANSWER 3-------------")

function countVowelsAndConsonants(input){

    const vowels = ['a','e','i','o','u'];
    const consonents = 'bcefghijklmnpqrstvwxyz'.split('');

    let vowelCount = 0;
    let consonentCount = 0;

    for(let i=0; i<input.length; i++)
    {
        if(vowels.includes(input[i]))
        {
            vowelCount++;
        }
        else{
            consonentCount++;
        }
    }

    return {
        vowels: vowelCount,
        consonents:consonentCount
    };
}

    let counts = countVowelsAndConsonants("Hello");
    console.log(counts);

// Q4. Find longest Word
// A4.

console.log("------------Answer 4--------------")

function lengthOfWord(input)
{
    return input.length;
}

function longestWord(input)
{
    let word_array = input.split(" ");
    let longestWordAnswer = word_array[0];
    for(let i=1;i<word_array.length; i++)
    {
        if((lengthOfWord(word_array[i]))>longestWordAnswer.length)
        {
            longestWordAnswer=word_array[i];
        }
    }

    return longestWordAnswer;
}

console.log(longestWord("My Very Efficient Mother"))

// Q5. Write a function to check if two words are anagrams of each other.
// A5.

console.log("------------Answer 5--------------");
function areAnagrams(word1, word2){
    if(word1.length !== word2.length)
    {
        return false;
    }

    let sortedWord1 = word1.split('').sort().join('');
    let sortedWord2 = word2.split('').sort().join('');

    return sortedWord1 === sortedWord2;
}

let result51 = areAnagrams("listen","silent");
console.log(result51);

let result52 = areAnagrams("crack", "quack");
console.log(result52);

// Q6. Write a function that capitalizes the first letter of each word in a sentence.
// A6. 

console.log("------------Answer 6--------------");

function capitalizeWords(sentence){
    let words = sentence.split(" ");
    let transformedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
    let answer = transformedWords.join(" ");

    return answer;
}

console.log(capitalizeWords("hor vi ki haal chaal"));

//Q7. Write a function to perform basic string compression using the counts of repeated characters. For example, the string "aabcccccaaa" would become "a2b1c5a3."

//A7.