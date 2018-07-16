let hasOwn = {}.hasOwnProperty
let fnToString = hasOwn.toString
let ObjectFunctionString = fnToString.call(Object)

// 判断参数是不是纯粹的对象 通过{}、new Object()、Object.create(null)
function isPlainObject (obj) {
  let proto, constructor

  // 借用toString方法判断obj的类型是不是Object
  if (!obj || Object.prototype.toString.call(obj) !== '[object Object]') {
    return false
  }
  // 获取对象的原型
  proto = Object.getPrototypeOf(obj)

  // 通过Object.create( null )创建的对象返回true
  if (!proto) {
    return true
  }

  // 判断对象是不是通过new Object()方式创建的
  constructor = hasOwn.call(proto, 'constructor') && proto.constructor
  // fnToString：将函数转换成字符串
  return typeof constructor === 'function' && fnToString.call(constructor) === ObjectFunctionString
}

export default isPlainObject
