import{v,aG as J,r as B,bK as O,as as y,bB as E,bC as K,C as a,z as W,x as X,bf as q,av as N,aX as H,bj as M,bg as Q,aJ as Y,bL as Z,g as oo,aC as eo,bc as P,b3 as to,h as so,n as F,bM as no,d as _,o as f,A as k,w as C,c as w,I as ao,T as S,G,B as V,N as $,F as D,a1 as lo,W as U,ay as ro,az as io,$ as co,aN as uo}from"./index-471bd290.js";const j=o=>{const s=J();return v(()=>{var t,n;return(n=(t=s==null?void 0:s.proxy)==null?void 0:t.$props)==null?void 0:n[o]})},vo=(o,s={})=>{const t=B(void 0),n=s.prop?t:j("size"),l=s.global?t:O(),e=s.form?{size:void 0}:y(E,void 0),i=s.formItem?{size:void 0}:y(K,void 0);return v(()=>n.value||a(o)||(i==null?void 0:i.size)||(e==null?void 0:e.size)||l.value||"")},A=o=>{const s=j("disabled"),t=y(E,void 0);return v(()=>s.value||a(o)||(t==null?void 0:t.disabled)||!1)},bo=()=>{const o=y(E,void 0),s=y(K,void 0);return{form:o,formItem:s}},Co=(o,{formItemContext:s,disableIdGeneration:t,disableIdManagement:n})=>{t||(t=B(!1)),n||(n=B(!1));const l=B();let e;const i=v(()=>{var c;return!!(!o.label&&s&&s.inputIds&&((c=s.inputIds)==null?void 0:c.length)<=1)});return W(()=>{e=X([N(o,"id"),t],([c,d])=>{const u=c??(d?void 0:q().value);u!==l.value&&(s!=null&&s.removeInputId&&(l.value&&s.removeInputId(l.value),!(n!=null&&n.value)&&!d&&u&&s.addInputId(u)),l.value=u)},{immediate:!0})}),H(()=>{e&&e(),s!=null&&s.removeInputId&&l.value&&s.removeInputId(l.value)}),{isLabeledByFormItem:i,inputId:l}},x=Symbol("buttonGroupContextKey"),po=(o,s)=>{M({from:"type.text",replacement:"link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},v(()=>o.type==="text"));const t=y(x,void 0),n=Q("button"),{form:l}=bo(),e=vo(v(()=>t==null?void 0:t.size)),i=A(),c=B(),d=Y(),u=v(()=>o.type||(t==null?void 0:t.type)||""),z=v(()=>{var b,m,g;return(g=(m=o.autoInsertSpace)!=null?m:(b=n.value)==null?void 0:b.autoInsertSpace)!=null?g:!1}),h=v(()=>o.tag==="button"?{ariaDisabled:i.value||o.loading,disabled:i.value||o.loading,autofocus:o.autofocus,type:o.nativeType}:{}),I=v(()=>{var b;const m=(b=d.default)==null?void 0:b.call(d);if(z.value&&(m==null?void 0:m.length)===1){const g=m[0];if((g==null?void 0:g.type)===Z){const R=g.children;return/^\p{Unified_Ideograph}{2}$/u.test(R.trim())}}return!1});return{_disabled:i,_size:e,_type:u,_ref:c,_props:h,shouldAddSpace:I,handleClick:b=>{o.nativeType==="reset"&&(l==null||l.resetFields()),s("click",b)}}},fo=["default","primary","success","warning","info","danger","text",""],mo=["button","submit","reset"],T=oo({size:eo,disabled:Boolean,type:{type:String,values:fo,default:""},icon:{type:P},nativeType:{type:String,values:mo,default:"button"},loading:Boolean,loadingIcon:{type:P,default:()=>to},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0},tag:{type:so([String,Object]),default:"button"}}),go={click:o=>o instanceof MouseEvent};function p(o,s=20){return o.mix("#141414",s).toString()}function yo(o){const s=A(),t=F("button");return v(()=>{let n={};const l=o.color;if(l){const e=new no(l),i=o.dark?e.tint(20).toString():p(e,20);if(o.plain)n=t.cssVarBlock({"bg-color":o.dark?p(e,90):e.tint(90).toString(),"text-color":l,"border-color":o.dark?p(e,50):e.tint(50).toString(),"hover-text-color":`var(${t.cssVarName("color-white")})`,"hover-bg-color":l,"hover-border-color":l,"active-bg-color":i,"active-text-color":`var(${t.cssVarName("color-white")})`,"active-border-color":i}),s.value&&(n[t.cssVarBlockName("disabled-bg-color")]=o.dark?p(e,90):e.tint(90).toString(),n[t.cssVarBlockName("disabled-text-color")]=o.dark?p(e,50):e.tint(50).toString(),n[t.cssVarBlockName("disabled-border-color")]=o.dark?p(e,80):e.tint(80).toString());else{const c=o.dark?p(e,30):e.tint(30).toString(),d=e.isDark()?`var(${t.cssVarName("color-white")})`:`var(${t.cssVarName("color-black")})`;if(n=t.cssVarBlock({"bg-color":l,"text-color":d,"border-color":l,"hover-bg-color":c,"hover-text-color":d,"hover-border-color":c,"active-bg-color":i,"active-border-color":i}),s.value){const u=o.dark?p(e,50):e.tint(50).toString();n[t.cssVarBlockName("disabled-bg-color")]=u,n[t.cssVarBlockName("disabled-text-color")]=o.dark?"rgba(255, 255, 255, 0.5)":`var(${t.cssVarName("color-white")})`,n[t.cssVarBlockName("disabled-border-color")]=u}}}return n})}const ko=_({name:"ElButton"}),Bo=_({...ko,props:T,emits:go,setup(o,{expose:s,emit:t}){const n=o,l=yo(n),e=F("button"),{_ref:i,_size:c,_type:d,_disabled:u,_props:z,shouldAddSpace:h,handleClick:I}=po(n,t);return s({ref:i,size:c,type:d,disabled:u,shouldAddSpace:h}),(r,b)=>(f(),k($(r.tag),lo({ref_key:"_ref",ref:i},a(z),{class:[a(e).b(),a(e).m(a(d)),a(e).m(a(c)),a(e).is("disabled",a(u)),a(e).is("loading",r.loading),a(e).is("plain",r.plain),a(e).is("round",r.round),a(e).is("circle",r.circle),a(e).is("text",r.text),a(e).is("link",r.link),a(e).is("has-bg",r.bg)],style:a(l),onClick:a(I)}),{default:C(()=>[r.loading?(f(),w(ao,{key:0},[r.$slots.loading?S(r.$slots,"loading",{key:0}):(f(),k(a(G),{key:1,class:V(a(e).is("loading"))},{default:C(()=>[(f(),k($(r.loadingIcon)))]),_:1},8,["class"]))],64)):r.icon||r.$slots.icon?(f(),k(a(G),{key:1},{default:C(()=>[r.icon?(f(),k($(r.icon),{key:0})):S(r.$slots,"icon",{key:1})]),_:3})):D("v-if",!0),r.$slots.default?(f(),w("span",{key:2,class:V({[a(e).em("text","expand")]:a(h)})},[S(r.$slots,"default")],2)):D("v-if",!0)]),_:3},16,["class","style","onClick"]))}});var ho=U(Bo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);const So={size:T.size,type:T.type},_o=_({name:"ElButtonGroup"}),zo=_({..._o,props:So,setup(o){const s=o;ro(x,io({size:N(s,"size"),type:N(s,"type")}));const t=F("button");return(n,l)=>(f(),w("div",{class:V(`${a(t).b("group")}`)},[S(n.$slots,"default")],2))}});var L=U(zo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);const $o=co(ho,{ButtonGroup:L});uo(L);export{$o as E,bo as a,vo as b,Co as c,A as u};
