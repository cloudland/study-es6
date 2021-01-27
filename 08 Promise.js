/**
 * Promise
 */

// then(成功函数, 失败函数)
// new Promise((_resolve, _reject) => {
//     // 初始化状态: pending
//     console.log('同步执行');

//     // 根据处理状态调用不同的函数
//     // 成功 -> 调用 resolve();
//     _resolve({id: '01010'});
//     // 失败 -> 调用 reject();
//     // _reject({msg: '失败'});
// }).then((_data) => {
//     // 成功调用
//     console.debug('成功');
// }, (_data) => {
//     // 失败调用
//     console.debug('失败');
// });


// then(成功函数).catch(失败函数)
// new Promise((_resolve, _reject) => {

//     setTimeout(() => {
//         console.log('延迟调用');

//         // 成功 _resolve -> then
//         // _resolve({id: '01010'});

//         // 失败 _reject -> catch
//         _reject({msg: '失败'});
//     }, 1000);

// }).then((_data) => {
//     console.log('成功结果处理', _data);
// }).catch((_data) => {
//     console.log('失败结果处理', _data);
// });


// 链式调用
// new Promise((_resolve, _reject) => {
//     // 初始化状态: pending
//     console.log('同步执行');

//     setTimeout(() => {
//         console.log('延迟调用');
//         // 成功 -> 调用 resolve();
//         _resolve({ id: '01010' });
//         // 失败 -> 调用 reject();
//         // _reject({msg: '失败'});
//     }, 1000);

// }).then((_data) => {
//     // 成功调用
//     console.debug('第一次成功处理: ', _data);

//     let data = {id: '02010'};

//     // 返回 Promise 实例成功, 如果只有成功, 可以直接 return 结果
//     // return Promise.resolve(data);
//     return data;
// }, (_data) => {
//     // 失败调用
//     console.debug('第一次失败');

//     // 返回 Promise 实例失败
//     return Promise.reject(_data);
// }).then((_data) => {
//     console.debug('第二次成功处理: ', _data);
// }, (_data) => {
//     console.debug('第二次失败');
// });

// 需要多个异步结果处理
Promise.all([
    // 第一个异步
    new Promise((_resolve, _reject) => {
        setTimeout(() => {
            console.log('第一个异步');
            _resolve('这是第一个');
        }, 1000);
    }),
    // 第二个异步
    new Promise((_resolve, _reject) => {
        setTimeout(() => {
            console.log('第二个异步');
            _resolve('这是第二个');
        }, 2000);
    })
]).then(_result => {
    // 当两个异步全部结束, 传入结果调用此方法
    console.log('结果: ', _result);
});