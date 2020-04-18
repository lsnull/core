import{r as t,c as s,h as e,H as i,g as h}from"./p-17c4ed33.js";const a=(t,s)=>t&&t.length&&s&&"string"==typeof s?t.filter(({data:{inode:t}})=>s.split(",").includes(t)).map(({data:t})=>t):[],n=class{constructor(e){t(this,e),this.items=[],this.selection=[],this.selected=s(this,"selected",7),this.cardClick=s(this,"cardClick",7)}watchItems(t){this.selection=a(t,this.value)}watchValue(t){this.selection=a(this.items,t)}async getValue(){return this.selection}async clearValue(){this.value="",this.getCards().forEach(t=>{t.checked=!1})}componentDidLoad(){this.selection=a(this.items,this.value),this.cards=this.getCards()}clearMenu(){this.cards.forEach(t=>{t.hideMenu()})}render(){const t=(t=>t&&"string"==typeof t?t.split(","):[])(this.value);return e(i,null,this.items.map(s=>e("dot-card-contentlet",{onContextMenu:async t=>{t.preventDefault();const s=t.target;this.clearMenu(),s.showMenu(t.x,t.y)},onContextMenuClick:()=>{this.clearMenu()},onClick:()=>{this.clearMenu(),this.cardClick.emit(s.data)},key:s.data.inode,checked:t.includes(s.data.inode),onCheckboxChange:({detail:{originalTarget:t,shiftKey:e}})=>{let i=!1;e&&t.checked&&this.cards.forEach(s=>{s!==t&&s!==this.lastChecked||(i=!i),i&&(s.checked=!0)}),this.lastChecked=t,this.setValue(t,s.data)},item:s})))}setValue(t,s){t.checked?this.selection.push(s):this.selection=this.selection.filter(({identifier:t})=>t!==s.identifier),this.value=this.selection.map(({inode:t})=>t).join(","),this.selected.emit(this.selection)}getCards(){return this.el.shadowRoot.querySelectorAll("dot-card-contentlet")}get el(){return h(this)}static get watchers(){return{items:["watchItems"],value:["watchValue"]}}static get style(){return":host{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));grid-gap:var(--basic-padding-2)}dot-card-contentlet{height:100%}dot-card-contentlet:before{content:\"\";display:inline-block;-ms-flex:0 0 0px;flex:0 0 0;height:0;padding-bottom:calc(100%)}"}};export{n as dot_card_view};