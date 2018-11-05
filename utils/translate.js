module.exports = {
  translate(obj) {
    var newObj = {}
    var that = this
    this.deepextend(obj, newObj)
    return newObj
  },
  deepextend(a, b) {
    for (var key in a) {
      var item = a[key];
      //如果是数组,先创建数组
      if (item instanceof Array) {
        b[key] = [];
        //递归把数组一个一个复制进去
        this.deepextend(item, b[key]);
        //如果是对象,先创建对象
      } else if (item instanceof Object) {
        b[key] = {};
        //递归把对象的属性一个一个复制进去
        this.deepextend(item, b[key]);
      } else if (key == 'img_url') {
        b[key] = this.replace(item)
      } else {
        b[key] = item;
      }
    }
  },
  replace(string) {
    var tran = string.replace(/\\/g, '/')
    return tran
  }
}