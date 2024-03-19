import createElement from "./createElement.js";
export default function patchVnode(oldvNode, newVnode){
  if(oldvNode === newVnode) return;//同一个虚拟node结点，就什么都不干
  if(newVnode.text !== undefined && (newVnode.children === undefined || newVnode.children.length ===0)){
    // 新的vnode有text,但没有children
    if(newVnode.text !== oldvNode.text) {
      oldvNode.elm.innerText = newVnode.text
    }
  }else{
    // 新的vnode没有text，但有children
    if(Array.isArray(oldvNode.children)){
      // 旧的vnode有children
    }else{
      // 旧的vnode没有children,直接替换
      oldvNode.elm.innerText = '';
      newVnode.children.forEach(chlidVnode=>{
        oldvNode.elm.appendChild(createElement(chlidVnode));
      })
    }
  }
}