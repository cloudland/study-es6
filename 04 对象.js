let obj1 = {
    // 等同于 method: function ()...
    method() {
        console.debug("方法简写, 等同于 method: function\(\)\{\} ");
    }
};
obj1.method();

let birth = '2000/01/01';
const obj2 = {
  name: '张三',
  //等同于birth: birth
  birth,
  // 等同于 method: function ()...
  method() { console.log('我的名字是', this.name); }
};
obj2.method();