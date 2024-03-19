import vnode from './vnode.js'
import createElement from './createElement.js';
import patchVnode from './patchVnode.js';
export default function(oldvNode, newVnode){
  if(oldvNode.sel === '' || oldvNode.sel === undefined) {
    oldvNode = vnode(oldvNode.tagName.toLowerCase(), {}, [], undefined, oldvNode)
  }
  if(oldvNode.key === newVnode.key && oldvNode.sel === newVnode.sel){
    console.log('是相同的vnode结点');
    patchVnode(oldvNode, newVnode)
  }else{
    console.log('不是相同的vnode结点')
    let newDomEle = createElement(newVnode);
    oldvNode.elm.parentNode.insertBefore(newDomEle, oldvNode.elm)
    oldvNode.elm.parentNode.removeChild(oldvNode.elm)
    console.log('aaaaaaa',newDomEle)
  }
}