// 参数设置默认值
function simple01(x, y = 'World') {
    console.log('simple01: ', x, y);
}
simple01('Hello');

// 计算参数, 参数未提供数值时, 使用 i + 1 作为参数
let i = 0;
function simple02(x = i + 1) {
    console.log('simple02: ', x);
}
simple02(100);


function simple03({x, y = 6}) {
    console.log('simple03: ', x, y);
}
simple03({});


function simple04({x = 0, y = 1} = {}) {
    console.log('simple04: ', x, y);
}
simple04({});

function simple05({x, y} = {x: 0, y: 0}) {
    console.log('simple05: ', x, y);
}
simple05({})


let fn1 = function simple06() {}
console.debug('simple06: ', fn1.name);


let simple07 = () => console.debug('simple07: 匿名函数');
simple07();


// 如果返回对象, 必须用括号包起来
let simple08 = (name, age) => ({name: name, age: age});
let rs = simple08('姓名', 22);
console.debug('simple08: ', rs.name, rs.age);

// 定义函数
// ['simple09']() {
//     console.log('simple09');
// }