let vnode = {
  tag:'div',
  props:{
    class:['a','b'],
    style:{
      backGround:'skyblue',
      height:'50px'
    },
    id:'app'
  },
  children:[
    {
      tag:'p',
      props: {
        class:['aaa'],
        style:{
          margin:'0'
        }
      },
      text:'nihao'
    },
    {
      tag:'section',
      children:[
        {
          tag:'span',
          text:'hello'
        },
        {
          tag:'span',
          text:' world',
          props: {
            style:{
              color:'green'
            }
          }
        }
      ]
    }
  ]
}
/**
 * @returns 
 * */ 
function render(vnode){
  let node = document.createElement(vnode.tag);
  if(vnode.props){
    let props = vnode.props;
    let keys = Object.keys(props);
    console.log(keys)
    keys.forEach(key=>{
      if(key === 'class'){
        let value = props[key];
        console.log(value)
        node.setAttribute(key, value.join(' '))
      }else if(key === 'id'){
        node.setAttribute(key, props[key])
      }else if(key === 'style'){
        let styleKeys = Object.keys(props[key]);
        let style = ''
        styleKeys.forEach(k=>{
          style += `${k.toLowerCase()}:${props[key][k]};`
        })
        node.setAttribute(key, style)
      }
    })
  }
  if(vnode.text){
    node.innerText = vnode.text
  }
  if(Array.isArray(vnode.children)){
    vnode.children.forEach(item=>{
      let child = render(item);
      node.appendChild(child);
    })
  }
  return node;
} 
let dom =  render(vnode)
console.dir(dom)
window.onload = function(){
  document.body.appendChild(dom)
}
