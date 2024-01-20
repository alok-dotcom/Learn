//Polyfills of Map

Array.prototype.myMap = function (cb) {
  let res = [];

  for (let i = 0; i < this.length; i++) {
    res.push(cb(this[i], i, this));
  }

  return res;
};

let number = [1, 2, 3, 4, 5];
// console.log(number.myMap((n) => n * 2));

//polyfills for filter

Array.prototype.myFilter = function (cb) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i],i,this)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};

let num = [1,2,3,4,5,6,7,8,9];
// console.log(num.myFilter(x=> x%2 === 0));

//polyfills for reduce

Array.prototype.myReduce = function(cb,ac){
    let acc = ac??this[0];
    for(let i=0; i<this.length; i++){
        acc = cb(acc, this[i], i,this);
        }
        return acc;
}


let arr=[1,2,3,4,5];
console.log(arr.myReduce((a,b)=> a+b ,5));