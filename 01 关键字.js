/**
 * let(取代var趋势)
 * 特点:
 * 块作用域
 * 不能重复声明
 * 不会预处理，不存在变量提升
 */
let simple = 'Hello!';
console.log(simple);

/**
 * const(常量)
 * 特点:
 * 不能修改
 * 其它特点同let
 */
const constant = '我是常量, 不能修改';
console.log(constant);