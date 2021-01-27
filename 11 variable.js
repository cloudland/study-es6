let [a, b] = [1, 2];
// console.log('a:', a, 'b:', b);

const node = {
    loc: {
      start: {
        line: 1,
        column: 5
      }
    }
  };
let { loc: varLoc, loc: { start: start }, loc: { start: { line: varLine }} } = node;
// console.log('loc:', varLoc, 'start:', start, 'line: ', varLine);


// let [(a1)] = [1];
let a1;
[(a1)] = [1];
// console.log(a1);


let obj = {};
obj[Symbol.iterator] = () => ({next() {return {done: true}}});
// obj[Symbol.iterator] = () => 1;
console.log([...obj]);

