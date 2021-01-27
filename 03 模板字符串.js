/**
 * 模板字符串
 * 简化字符串拼接, 必须用``包含, 变量部分使用${xxx}定义
 */ 
let [name, age] = ['小张', 22];
let template = `这是模板字符串, 姓名: ${name}, 年龄: ${age}`;
console.debug(template);

let template01 = `这是模板字符串, 姓名: ${name}, 年龄: ${22 + 2}`;
console.debug(template01);

function fn() {
    console.debug('模板调用函数');
    return 24 + 2;
}
let template02 = `这是模板字符串, 姓名: ${name}, 年龄: ${fn()}`;
console.debug(template02);

let template03 = (info) => `这是函数返回模板, 标题: ${info.title}, 子标题: ${info.subtitle}`;
console.debug(template03({title: '对象标题', subtitle: 20}));