function Point(x, y) {
    this.x = x;
    this.y = y;
  }
  
  Point.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ')';
  };
  
  var p = new Point(1, 2);


  class Point {
      constructor(_x, _y) {
        this.x = _x;
        this.y = _y;
      }

      toString() {
        return '(' + this.x + ', ' + this.y + ')';
      }
  }