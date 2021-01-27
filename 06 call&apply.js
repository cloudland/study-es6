/**
 * call 可以调用函数
 * fn.call(target, arg1, ..)
 * target: 当前调用函数的 this 指向对象
 */
let target = {
    name: '小未'
};

function fn(_a, _b) {
    console.debug(this, _a, _b);
}

// fn 内的 this 指向未 target
fn.call(target, 1, 2);

/**
 * apply 同 call, 区别在于参数是数组 
 */
fn.apply(target, [1, 2]);

/**
 * bind 绑定但不会调用函数, 返回源函数改变 this 的新函数
 */
let newFn = fn.bind(target, 2, 3);
newFn();