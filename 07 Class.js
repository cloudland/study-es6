// ES5 方式定义class
// function Point(x, y) {
//     this.x = x;
//     this.y = y;
//   }
  
//   Point.prototype.toString = function () {
//     return '(' + this.x + ', ' + this.y + ')';
//   };
  
//   var p = new Point(1, 2);

// ES6 方式定义 class
class Point {
    constructor(_x, _y) {
      this.x = _x;
      this.y = _y;
    }

    // 定义函数必须下面的写法, 不支持 ES5 写法 toString: function() {}
    toString() {
      return '(' + this.x + ', ' + this.y + ')';
    }
}

// 集成
class Animal {

  // 姓名
  name;

  // 私有年龄
  #age;

  constructor(_name, _age) {
      this.name = _name;
      this.#age = _age
  }

  say() {
    console.log("动物在说话");
  }

}

class Dog extends Animal {

  say() {
    console.log(`${this.name} 再说话`);

    super.say();
  }

}

let dog = new Dog('lucky', 1);
dog.say();
console.log(dog.name);