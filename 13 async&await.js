async function asyncPrint() {

    console.log('asyncPrint 执行开始');

    await new Promise((_reslove, _reject) => {
        setTimeout(() => {
            console.log('5秒后执行, asyncPrint 内 setTimeout');
            _reslove('成功');
        }, 5000)
    }).then(_vaule => {
        console.log(_vaule);
    });

    console.log('asyncPrint 执行结束');

}

function print() {
    console.log('print 执行完成');
}


asyncPrint();
print();