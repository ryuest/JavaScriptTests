'use strict';

/*

John works at a clothing store. He has a large pile of socks that he must pair by color for sale. 
Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

For example, there are  socks with colors . There is one pair of color  and one of color . 
There are three odd socks left, one of each color. The number of pairs is .


Function Description

Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

sockMerchant has the following parameter(s):

n: the number of socks in the pile
ar: the colors of each sock

*/


// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    ar.sort();
    let t=0;
    let c=1;
    let prev = ar[0];
    for(let i = 1;i<n;i++){
        console.log(i + ". c=" + c + "  ar[" + i + "]" + " ar[i]=" +ar[i])
        
        if(prev == ar[i])
            c++;
        else{
            t+=Math.floor(c/2);
            c=1;
            prev=ar[i];
            console.log("")
        }
        console.log("<<<----  t=" + t + "------>>>")
    }
    t+=Math.floor(c/2);
    return t;

}


const n = 9;
var num = [10,20,20,10,10,30,50,10,20]
console.log(sockMerchant(n, num))