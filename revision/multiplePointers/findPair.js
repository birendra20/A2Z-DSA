/*
given an unsorted array and a number n,

find there exists a pair of element in the array whose difference is n,
return true if such a pair exits , otherwise return false


[6,1,4,10,2,4],2  => true , 4 & 6
[8,6,2,4,1,0,2,5,13], 1 => true , (2 & 1) & (6 & 5)
[4,-2,3,10], -6 ==> true (-2 -4  = -6)
[6,1,4,10,2,4], 22   ==> false
[], 0  ==> false
[5,5],0 ==> true. (5-5 = 0)
[-4,4],8 ==> true. (-4 -4 = 8)

// two pointer 

strategy

1) sort the array => sorting help us to apply two pointer to search pair efficiently.


*/

function findPair(arr, k) {
  arr.sort((a, b) => a - b);

  let i = 0;
  let j = 1;

  while (i < arr.length && j < arr.length) {
    if (i !== j && Maths.abs(arr[j] - arr[i]) === Math.abs(k)) {
      return true;
    }
  }
}
