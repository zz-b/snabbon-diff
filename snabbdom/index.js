import h from "./src/h.js";
import patch from "./src/patch.js";
// let vnode = h('div',{class:['a','b'],style:{color:'red'}},'我脑子')
// let vnode = h(
//   'div',
//   {style:{color:'pink'}},
//   [
//     h('p',{},'p-text'),
//     h('span',{},'span-text'),
//     h('section',{class:['s','wrap']},'section-text'),
//     h('p',{},[
//       h('span',{},'hello world')
//     ])
//   ]
//   )

// let vnode = h(
//   'div',
//   {},
//   h('p',{},'abc')
// )
// let vnode = h('h1', {}, '你好')

let vnode = h(
  'ul',
  {},
  [
    h('li',{},'ul-li-1'),
    h('li',{},h(
      'ol',
      {},
      [
        h('li',{},'ol-li-1'),
        h('li',{},'ol-li-2'),
      ]
    )),
    h('li',{},'ul-li-3'),
  ]  
)
let vnode2 = h('section',{},[
  h('h1',{},'hello'),
  h('h1',{},'world')
])

let vnode3 = h('section',{},'nihao')
let vnode4 = h('section',{}, [
  h('p',{},'p1'),
  h('p',{},'p2'),
  h('p',{},[h('span',{},'p-span')])
])
const container = document.getElementById('container')
const button = document.getElementById('button')
button?.addEventListener('click',function(){
  // patch(vnode, vnode2)
  // patch(vnode2, vnode3)
  patch(vnode3, vnode4)
})
// patch(container, vnode2)
patch(container, vnode3)
// console.log(vnode)