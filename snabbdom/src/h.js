import vnode from "./vnode.js";
// h('div', {}, '文字')
// h('div', {}, [])
// h('div', {}, h('span',{},'hello'))
export default function h(sel, data, c) {
  console.log(arguments)
  if (arguments.length !== 3)
    throw new Error('h函数的参数必须为三个')
  if (typeof c === 'string' || typeof c === 'number') {
    // 第一种情况
    return vnode(sel, data, undefined, c, undefined)
  }
  else if (Array.isArray(c)) {
    // 第二种情况
    const children = []
    c.forEach(o => {
      if (!(typeof o === 'object' && o.hasOwnProperty('sel'))) {
        throw new Error('数组中每一项必须是h函数的返回值');
      }
      children.push(o);
    })
    return vnode(sel, data, children, undefined, undefined)
  }
  else if (typeof c === 'object' && c.hasOwnProperty('sel')) {
    // 第三种情况
    const children = [c]
    return vnode(sel, data, children, undefined, undefined)
  }
  else
    throw new Error('传入的第三个参数类型不对')
}