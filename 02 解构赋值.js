/**
 * 解构赋值: 解析结构, 在赋值
 */

 // 定义对象
let person = {name: '小末', age: 21};
/**
 * 老的赋值方式, 依次赋值
 */
// let name = person.name;
// let age = person.age;
// console.debug(name, age);

/**
 * 新的方式, 解构对象
 */
let {name, age} = person;
// console.debug(person);

/**
 * 解构数组
 */
// 按下标, 依次赋值给 a, b, c
let [a, b, c] = [1, 2, 3];
// console.debug(a, b, c);

// ...m1 解构后, 在赋值到 mergeA 
let m1 = [2, 3, 4];
let mergeA = [1, ...m1, 5];
console.debug(mergeA);

let [a1, [[b1], c1]] = [1, [[2], 3]]
// console.debug(a1, b1, c1);

// 0, 1 位置为空占位, 直接将下标 2 赋值给 c2
let [, , c2] = ["contant_a", "content_b", "content_c"];
console.debug(c2);

// ...b3 表示可变参数
let [a3, ...b3] = [1, 2, 3, 4];
console.debug(a3, b3);

let [a4, b4, ...c4] = [1];
console.debug(a4, b4, c4);

/**
 * 默认值
 */
let [a5 = 'default_content'] = [];
console.debug(a5);

let [a6, b6 = 'default_content'] = [1];
console.debug(a6, b6);

let [a7 = () => {console.debug('a7')}] = [];
console.debug(a7);

let [a8 = 1, b8 = a8] = [2];
console.debug(a8, b8);

/**
 * 对象解析
 */
let {a9, b9} = {a9: 'content_a9', b9: 'content_b9'};
console.debug(a9, b9);

/**
 * 名称不一样时, 将对象 name 赋值给 a10, 将 address 赋值给 b10
 */
let object = {name: 'content_a10', address: 'content_b10'}
let {name: a10, address: b10} = object;
console.debug(a10, b10);

/**
 * 
 */
let obj = {
    p: [
      'Hello',
      { y: 'World' }
    ]
  };
let {p, p:[h, {y}]} = obj;
console.debug('对象结构A: ',p, h, y);
let {p: a11, p: [b11, {y: c11}]} = obj;
console.debug('对象结构B: ', a11, b11, c11)
let {p: [h1]} = obj;
console.debug('对象结构C: ', h1);

let obj1 = {};
({name: obj1.name, address: obj1.address} = { name: '姓名', address: '地址'});
console.debug(obj1);


const parent = { a12: 'content_a12'};
const child = {};
Object.setPrototypeOf(child, parent);
let {a12} = child;
console.debug(a12);

var {a13: b13 = 3} = {a13: 5};
console.debug(b13);

/**
 * 函数参数的解构赋值
 * let args = {name, age};
 * 老式调用
 * function simple(args) {
 *  let name = args.name;
 *  let age = args.age;
 * }
 * 解构调用
 * function simple({name, age}) {
 *  // 可以直接使用
 * }
 */
function sum([x, y]) {
    return x + y;
}
console.debug(sum([1, 2]));
let a14 = 2, b12 = 3;
console.debug(sum([a14, b12]));

function simple({x = 0, y = 0} = {}) {
    console.debug(x, y);
}
simple({x: 1});


function simple1({x, y} = {x: 0, y: 0}) {
    console.debug(x, y);
}
simple1({x: 2});


// 用途可以交换变量
let [a15, b15] = [1, 2];
[a15, b15] = [b15, a15];
console.debug(a15, b15);

// 返回一个数组
function simple2() {
    return [1, 2, 3];
}
let [a16, b16, c16] = simple2();
console.debug(a16, b16, c16);
  
  // 返回一个对象
function simple3() {
    return {
      a17: 1,
      b17: 2
    };
  }
let { a17, b17 } = simple3(); 
console.debug(a17, b17);