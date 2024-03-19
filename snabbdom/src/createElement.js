// 创建真正的dom结点
export default function createElement(vnode){
  let dom = document.createElement(vnode.sel);
  console.log('dom',dom)
  if(vnode.text !== '' && (vnode.children === undefined || vnode.children.length === 0)){
    dom.innerText = vnode.text;
  }else if(Array.isArray(vnode.children)){
    console.log(vnode)
    vnode.children.forEach(item=>{
      let childDom = createElement(item)
      dom.appendChild(childDom)
    })
  }
  vnode.elm = dom
  return vnode.elm
}