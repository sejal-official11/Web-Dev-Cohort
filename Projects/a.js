// function isAnagram(str1, str2){
//     if(str1.length != str2.length) return false;
//     const arr1 = str1.split("");
//     const arr2 = str2.split("");
//     arr1.sort(); // original array mutate
//     arr2.sort();
//     const first = arr1.join("");
//     const second = arr2.join("");
//     return first === second;
// }

// console.log(isAnagram("abad", "aacb"));

// let ctr = 1;
// function callback(){
//     console.clear();
//     console.log(ctr);
//     ctr = ctr+1;
//     setTimeout(callback, 1000);
// }

// // setInterval(callback, 1000);
// setTimeout(callback, 1000);
function checkVowel(str){
    if(str === 'a' || str === 'e' || str === 'i' || str === 'o' || str === 'u'){
        return true;
    }
    else {
        return false;
    }
}

function countVowels(str){
    let cnt = 0;
    const s1 = str.toLowerCase();
    for(let i = 0; i < s1.length; i++){
        if(checkVowel(s1[i])){
            cnt++;
        }
    }
    return cnt;

}

let count = countVowels("Appleeee");
console.log(count);