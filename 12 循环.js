// map 遍历一个数组, 返回一个加工后的数组
let r1 = [[1, 2], [3, 4]].map(([_item, _index]) => _item + _index);
console.debug(r1);

// 设置参数默认值, 只有变量为 undefined
let r2 = [1, undefined, 3].map((x = 'yes') => x);
console.debug(r2);

// 注意：这里需要注意的是使用箭头函数返回一个对象时不能直接去写 {}, 要在对象后面加上括号 ({})，防止和函数后面的大括号冲突而报错
// ...data 表示把对象解构出来, value 针对单独的值进行替换
let r3 = [{"name": "", "date": "2022-11-09", "value": "9"}].map(data => ({...data, value: +data.value}))
console.debug(r3);

let es6 = {
    edition: 6,
    committee: "TC39",
    standard: "ECMA-262"
};
for (let _key of Object.keys(es6)) {
    console.debug(_key);
}
for (let _key of Reflect.ownKeys(es6)) {
    console.debug(_key);
}

let array1 = ['red', 'green', 'blue'];
/**
 * forEach
 * return 无法终止循环
 */
array1.forEach((_value, _index) => {
    if ('green' == _value) {
        console.debug('找到了');
    }
});
/**
 * some
 * return 可以终止循环
 */
array1.some((_value, _index) => {
    if ('green' == _value) {
        console.debug('找到了');
        return true; // 遇到 return true 就会终止循环
    }
});

/**
 * filter
 * 过滤函数, 返回条件为 ture 的结果集合
 */
let filterArray = [10, 20, 30, 40];
console.log(filterArray.filter(_filter => _filter >= 30))

/**
 * reduce
 * 累加每次处理结果
 */
let reduceArray = [1, 2, 3, 4, 5, 6];
console.log(reduceArray.reduce((_pre, _cur, _index, _array) => {
    return _pre + _cur;
}, 0));