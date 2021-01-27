/**
 * 代理对象只能对单个函数代理
 */
let handler = {

    get: function(_target, _propKey) {
        console.log("get -> 对象: ", _target, ", 属性: ", _propKey);
        return _propKey;
    },

    set: function(_target, _propKey, _value, _receiver) {
        console.log("set -> 对象: ", _target, ", 属性: ", _propKey, ", 值: ", _value, ", 接收器: ", _receiver);
    },

    has: function(_target, _propKey) {
        console.log("has -> 对象: ", _target, ", 属性: ", _propKey);
    },

    ownKeys: function(_target) {
        console.log("ownKeys -> 对象: ", _target);
        return [];
    },

    getOwnPropertyDescriptor: function(_target, _propKey) {
        console.log("getOwnPropertyDescriptor -> 对象: ", _target, ", 属性: ", _propKey);
    },

    defineProperty: function(_target, _propKey, _propDesc) {
        console.log("defineProperty -> 对象: ", _target, ", 属性: ", _propKey, ", 描述: ", _propDesc);
    },

    apply: function(_target, _object, _args) {
        console.log("apply -> 对象: ", _target, ", 函数: ", _object, ", 参数: ", _args);
        return Reflect.apply(...arguments);
    }

};


const origin = {
    onLoad() {
        console.log("Origin onLoad");
    }
};

 function sum([x = 0, y = 0] = []) {
    console.log("Origin Function", x + y);
}

let proxy = new Proxy(sum, handler);
// proxy.name = "姓名";
// origin.onLoad();
proxy([1]);

