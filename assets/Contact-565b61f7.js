import{u as rt,j as h}from"./index-881e2685.js";import{b as K,r as Fe}from"./react-e7981c99.js";import{r as de}from"./redirectToExternalLink-1ac192dc.js";import{L as pt,d as bt,m as _t}from"./features-animation-ce1fad93.js";const oe={_origin:"https://api.emailjs.com"},wt=(e,s="https://api.emailjs.com")=>{oe._userID=e,oe._origin=s},st=(e,s,i)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!s)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!i)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class ze{constructor(s){this.status=s?s.status:0,this.text=s?s.responseText:"Network Error"}}const it=(e,s,i={})=>new Promise((r,o)=>{const l=new XMLHttpRequest;l.addEventListener("load",({target:u})=>{const x=new ze(u);x.status===200||x.text==="OK"?r(x):o(x)}),l.addEventListener("error",({target:u})=>{o(new ze(u))}),l.open("POST",oe._origin+e,!0),Object.keys(i).forEach(u=>{l.setRequestHeader(u,i[u])}),l.send(s)}),At=(e,s,i,r)=>{const o=r||oe._userID;return st(o,e,s),it("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:o,service_id:e,template_id:s,template_params:i}),{"Content-type":"application/json"})},Vt=e=>{let s;if(typeof e=="string"?s=document.querySelector(e):s=e,!s||s.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return s},Ft=(e,s,i,r)=>{const o=r||oe._userID,l=Vt(i);st(o,e,s);const u=new FormData(l);return u.append("lib_version","3.11.0"),u.append("service_id",e),u.append("template_id",s),u.append("user_id",o),it("/api/v1.0/email/send-form",u)},jt={init:wt,send:At,sendForm:Ft};var ce=e=>e.type==="checkbox",se=e=>e instanceof Date,O=e=>e==null;const nt=e=>typeof e=="object";var D=e=>!O(e)&&!Array.isArray(e)&&nt(e)&&!se(e),kt=e=>D(e)&&e.target?ce(e.target)?e.target.checked:e.target.value:e,Dt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Nt=(e,s)=>e.has(Dt(s)),St=e=>{const s=e.constructor&&e.constructor.prototype;return D(s)&&s.hasOwnProperty("isPrototypeOf")},Oe=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function $(e){let s;const i=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Oe&&(e instanceof Blob||e instanceof FileList))&&(i||D(e)))if(s=i?[]:{},!i&&!St(e))s=e;else for(const r in e)e.hasOwnProperty(r)&&(s[r]=$(e[r]));else return e;return s}var ue=e=>Array.isArray(e)?e.filter(Boolean):[],j=e=>e===void 0,d=(e,s,i)=>{if(!s||!D(e))return i;const r=ue(s.split(/[,[\].]+?/)).reduce((o,l)=>O(o)?o:o[l],e);return j(r)||r===e?j(e[s])?i:e[s]:r};const Ke={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},U={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},W={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};K.createContext(null);var Et=(e,s,i,r=!0)=>{const o={defaultValues:s._defaultValues};for(const l in e)Object.defineProperty(o,l,{get:()=>{const u=l;return s._proxyFormState[u]!==U.all&&(s._proxyFormState[u]=!r||U.all),i&&(i[u]=!0),e[u]}});return o},M=e=>D(e)&&!Object.keys(e).length,Ot=(e,s,i,r)=>{i(e);const{name:o,...l}=e;return M(l)||Object.keys(l).length>=Object.keys(s).length||Object.keys(l).find(u=>s[u]===(!r||U.all))},je=e=>Array.isArray(e)?e:[e];function Tt(e){const s=K.useRef(e);s.current=e,K.useEffect(()=>{const i=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{i&&i.unsubscribe()}},[e.disabled])}var I=e=>typeof e=="string",Lt=(e,s,i,r,o)=>I(e)?(r&&s.watch.add(e),d(i,e,o)):Array.isArray(e)?e.map(l=>(r&&s.watch.add(l),d(i,l))):(r&&(s.watchAll=!0),i),Te=e=>/^\w*$/.test(e),at=e=>ue(e.replace(/["|']|\]/g,"").split(/\.|\[/));function w(e,s,i){let r=-1;const o=Te(s)?[s]:at(s),l=o.length,u=l-1;for(;++r<l;){const x=o[r];let b=i;if(r!==u){const E=e[x];b=D(E)||Array.isArray(E)?E:isNaN(+o[r+1])?{}:[]}e[x]=b,e=e[x]}return e}var Ct=(e,s,i,r,o)=>s?{...i[e],types:{...i[e]&&i[e].types?i[e].types:{},[r]:o||!0}}:{};const Ee=(e,s,i)=>{for(const r of i||Object.keys(e)){const o=d(e,r);if(o){const{_f:l,...u}=o;if(l&&s(l.name)){if(l.ref.focus){l.ref.focus();break}else if(l.refs&&l.refs[0].focus){l.refs[0].focus();break}}else D(u)&&Ee(u,s)}}};var Je=e=>({isOnSubmit:!e||e===U.onSubmit,isOnBlur:e===U.onBlur,isOnChange:e===U.onChange,isOnAll:e===U.all,isOnTouch:e===U.onTouched}),Xe=(e,s,i)=>!i&&(s.watchAll||s.watch.has(e)||[...s.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length)))),Mt=(e,s,i)=>{const r=ue(d(e,i));return w(r,"root",s[i]),w(e,i,r),e},G=e=>typeof e=="boolean",Le=e=>e.type==="file",J=e=>typeof e=="function",ye=e=>{if(!Oe)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},he=e=>I(e),Ce=e=>e.type==="radio",me=e=>e instanceof RegExp;const Ye={value:!1,isValid:!1},Ge={value:!0,isValid:!0};var lt=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(i=>i&&i.checked&&!i.disabled).map(i=>i.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!j(e[0].attributes.value)?j(e[0].value)||e[0].value===""?Ge:{value:e[0].value,isValid:!0}:Ge:Ye}return Ye};const Qe={isValid:!1,value:null};var ot=e=>Array.isArray(e)?e.reduce((s,i)=>i&&i.checked&&!i.disabled?{isValid:!0,value:i.value}:s,Qe):Qe;function Ze(e,s,i="validate"){if(he(e)||Array.isArray(e)&&e.every(he)||G(e)&&!e)return{type:i,message:he(e)?e:"",ref:s}}var re=e=>D(e)&&!me(e)?e:{value:e,message:""},et=async(e,s,i,r,o)=>{const{ref:l,refs:u,required:x,maxLength:b,minLength:E,min:Z,max:k,pattern:p,validate:z,name:L,valueAsNumber:xe,mount:fe,disabled:pe}=e._f,v=d(s,L);if(!fe||pe)return{};const R=u?u[0]:l,P=_=>{r&&R.reportValidity&&(R.setCustomValidity(G(_)?"":_||""),R.reportValidity())},N={},ie=Ce(l),ee=ce(l),be=ie||ee,q=(xe||Le(l))&&j(l.value)&&j(v)||ye(l)&&l.value===""||v===""||Array.isArray(v)&&!v.length,X=Ct.bind(null,L,i,N),H=(_,g,V,T=W.maxLength,C=W.minLength)=>{const B=_?g:V;N[L]={type:_?T:C,message:B,ref:l,...X(_?T:C,B)}};if(o?!Array.isArray(v)||!v.length:x&&(!be&&(q||O(v))||G(v)&&!v||ee&&!lt(u).isValid||ie&&!ot(u).isValid)){const{value:_,message:g}=he(x)?{value:!!x,message:x}:re(x);if(_&&(N[L]={type:W.required,message:g,ref:R,...X(W.required,g)},!i))return P(g),N}if(!q&&(!O(Z)||!O(k))){let _,g;const V=re(k),T=re(Z);if(!O(v)&&!isNaN(v)){const C=l.valueAsNumber||v&&+v;O(V.value)||(_=C>V.value),O(T.value)||(g=C<T.value)}else{const C=l.valueAsDate||new Date(v),B=ae=>new Date(new Date().toDateString()+" "+ae),Y=l.type=="time",ne=l.type=="week";I(V.value)&&v&&(_=Y?B(v)>B(V.value):ne?v>V.value:C>new Date(V.value)),I(T.value)&&v&&(g=Y?B(v)<B(T.value):ne?v<T.value:C<new Date(T.value))}if((_||g)&&(H(!!_,V.message,T.message,W.max,W.min),!i))return P(N[L].message),N}if((b||E)&&!q&&(I(v)||o&&Array.isArray(v))){const _=re(b),g=re(E),V=!O(_.value)&&v.length>+_.value,T=!O(g.value)&&v.length<+g.value;if((V||T)&&(H(V,_.message,g.message),!i))return P(N[L].message),N}if(p&&!q&&I(v)){const{value:_,message:g}=re(p);if(me(_)&&!v.match(_)&&(N[L]={type:W.pattern,message:g,ref:l,...X(W.pattern,g)},!i))return P(g),N}if(z){if(J(z)){const _=await z(v,s),g=Ze(_,R);if(g&&(N[L]={...g,...X(W.validate,g.message)},!i))return P(g.message),N}else if(D(z)){let _={};for(const g in z){if(!M(_)&&!i)break;const V=Ze(await z[g](v,s),R,g);V&&(_={...V,...X(g,V.message)},P(V.message),i&&(N[L]=_))}if(!M(_)&&(N[L]={ref:R,..._},!i))return N}}return P(!0),N};function Rt(e,s){const i=s.slice(0,-1).length;let r=0;for(;r<i;)e=j(e)?r++:e[s[r++]];return e}function Ut(e){for(const s in e)if(e.hasOwnProperty(s)&&!j(e[s]))return!1;return!0}function S(e,s){const i=Array.isArray(s)?s:Te(s)?[s]:at(s),r=i.length===1?e:Rt(e,i),o=i.length-1,l=i[o];return r&&delete r[l],o!==0&&(D(r)&&M(r)||Array.isArray(r)&&Ut(r))&&S(e,i.slice(0,-1)),e}function ke(){let e=[];return{get observers(){return e},next:o=>{for(const l of e)l.next&&l.next(o)},subscribe:o=>(e.push(o),{unsubscribe:()=>{e=e.filter(l=>l!==o)}}),unsubscribe:()=>{e=[]}}}var ve=e=>O(e)||!nt(e);function Q(e,s){if(ve(e)||ve(s))return e===s;if(se(e)&&se(s))return e.getTime()===s.getTime();const i=Object.keys(e),r=Object.keys(s);if(i.length!==r.length)return!1;for(const o of i){const l=e[o];if(!r.includes(o))return!1;if(o!=="ref"){const u=s[o];if(se(l)&&se(u)||D(l)&&D(u)||Array.isArray(l)&&Array.isArray(u)?!Q(l,u):l!==u)return!1}}return!0}var ct=e=>e.type==="select-multiple",qt=e=>Ce(e)||ce(e),De=e=>ye(e)&&e.isConnected,ut=e=>{for(const s in e)if(J(e[s]))return!0;return!1};function ge(e,s={}){const i=Array.isArray(e);if(D(e)||i)for(const r in e)Array.isArray(e[r])||D(e[r])&&!ut(e[r])?(s[r]=Array.isArray(e[r])?[]:{},ge(e[r],s[r])):O(e[r])||(s[r]=!0);return s}function ft(e,s,i){const r=Array.isArray(e);if(D(e)||r)for(const o in e)Array.isArray(e[o])||D(e[o])&&!ut(e[o])?j(s)||ve(i[o])?i[o]=Array.isArray(e[o])?ge(e[o],[]):{...ge(e[o])}:ft(e[o],O(s)?{}:s[o],i[o]):i[o]=!Q(e[o],s[o]);return i}var Ne=(e,s)=>ft(e,s,ge(s)),dt=(e,{valueAsNumber:s,valueAsDate:i,setValueAs:r})=>j(e)?e:s?e===""?NaN:e&&+e:i&&I(e)?new Date(e):r?r(e):e;function Se(e){const s=e.ref;if(!(e.refs?e.refs.every(i=>i.disabled):s.disabled))return Le(s)?s.files:Ce(s)?ot(e.refs).value:ct(s)?[...s.selectedOptions].map(({value:i})=>i):ce(s)?lt(e.refs).value:dt(j(s.value)?e.ref.value:s.value,e)}var Bt=(e,s,i,r)=>{const o={};for(const l of e){const u=d(s,l);u&&w(o,l,u._f)}return{criteriaMode:i,names:[...e],fields:o,shouldUseNativeValidation:r}},le=e=>j(e)?e:me(e)?e.source:D(e)?me(e.value)?e.value.source:e.value:e,It=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function tt(e,s,i){const r=d(e,i);if(r||Te(i))return{error:r,name:i};const o=i.split(".");for(;o.length;){const l=o.join("."),u=d(s,l),x=d(e,l);if(u&&!Array.isArray(u)&&i!==l)return{name:i};if(x&&x.type)return{name:l,error:x};o.pop()}return{name:i}}var Pt=(e,s,i,r,o)=>o.isOnAll?!1:!i&&o.isOnTouch?!(s||e):(i?r.isOnBlur:o.isOnBlur)?!e:(i?r.isOnChange:o.isOnChange)?e:!0,Ht=(e,s)=>!ue(d(e,s)).length&&S(e,s);const Wt={mode:U.onSubmit,reValidateMode:U.onChange,shouldFocusError:!0};function $t(e={},s){let i={...Wt,...e},r={submitCount:0,isDirty:!1,isLoading:J(i.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},o={},l=D(i.defaultValues)||D(i.values)?$(i.defaultValues||i.values)||{}:{},u=i.shouldUnregister?{}:$(l),x={action:!1,mount:!1,watch:!1},b={mount:new Set,unMount:new Set,array:new Set,watch:new Set},E,Z=0;const k={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},p={values:ke(),array:ke(),state:ke()},z=e.resetOptions&&e.resetOptions.keepDirtyValues,L=Je(i.mode),xe=Je(i.reValidateMode),fe=i.criteriaMode===U.all,pe=t=>n=>{clearTimeout(Z),Z=setTimeout(t,n)},v=async t=>{if(k.isValid||t){const n=i.resolver?M((await q()).errors):await H(o,!0);n!==r.isValid&&p.state.next({isValid:n})}},R=t=>k.isValidating&&p.state.next({isValidating:t}),P=(t,n=[],a,y,f=!0,c=!0)=>{if(y&&a){if(x.action=!0,c&&Array.isArray(d(o,t))){const m=a(d(o,t),y.argA,y.argB);f&&w(o,t,m)}if(c&&Array.isArray(d(r.errors,t))){const m=a(d(r.errors,t),y.argA,y.argB);f&&w(r.errors,t,m),Ht(r.errors,t)}if(k.touchedFields&&c&&Array.isArray(d(r.touchedFields,t))){const m=a(d(r.touchedFields,t),y.argA,y.argB);f&&w(r.touchedFields,t,m)}k.dirtyFields&&(r.dirtyFields=Ne(l,u)),p.state.next({name:t,isDirty:g(t,n),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else w(u,t,n)},N=(t,n)=>{w(r.errors,t,n),p.state.next({errors:r.errors})},ie=(t,n,a,y)=>{const f=d(o,t);if(f){const c=d(u,t,j(a)?d(l,t):a);j(c)||y&&y.defaultChecked||n?w(u,t,n?c:Se(f._f)):C(t,c),x.mount&&v()}},ee=(t,n,a,y,f)=>{let c=!1,m=!1;const A={name:t};if(!a||y){k.isDirty&&(m=r.isDirty,r.isDirty=A.isDirty=g(),c=m!==A.isDirty);const F=Q(d(l,t),n);m=d(r.dirtyFields,t),F?S(r.dirtyFields,t):w(r.dirtyFields,t,!0),A.dirtyFields=r.dirtyFields,c=c||k.dirtyFields&&m!==!F}if(a){const F=d(r.touchedFields,t);F||(w(r.touchedFields,t,a),A.touchedFields=r.touchedFields,c=c||k.touchedFields&&F!==a)}return c&&f&&p.state.next(A),c?A:{}},be=(t,n,a,y)=>{const f=d(r.errors,t),c=k.isValid&&G(n)&&r.isValid!==n;if(e.delayError&&a?(E=pe(()=>N(t,a)),E(e.delayError)):(clearTimeout(Z),E=null,a?w(r.errors,t,a):S(r.errors,t)),(a?!Q(f,a):f)||!M(y)||c){const m={...y,...c&&G(n)?{isValid:n}:{},errors:r.errors,name:t};r={...r,...m},p.state.next(m)}R(!1)},q=async t=>i.resolver(u,i.context,Bt(t||b.mount,o,i.criteriaMode,i.shouldUseNativeValidation)),X=async t=>{const{errors:n}=await q(t);if(t)for(const a of t){const y=d(n,a);y?w(r.errors,a,y):S(r.errors,a)}else r.errors=n;return n},H=async(t,n,a={valid:!0})=>{for(const y in t){const f=t[y];if(f){const{_f:c,...m}=f;if(c){const A=b.array.has(c.name),F=await et(f,u,fe,i.shouldUseNativeValidation&&!n,A);if(F[c.name]&&(a.valid=!1,n))break;!n&&(d(F,c.name)?A?Mt(r.errors,F,c.name):w(r.errors,c.name,F[c.name]):S(r.errors,c.name))}m&&await H(m,n,a)}}return a.valid},_=()=>{for(const t of b.unMount){const n=d(o,t);n&&(n._f.refs?n._f.refs.every(a=>!De(a)):!De(n._f.ref))&&_e(t)}b.unMount=new Set},g=(t,n)=>(t&&n&&w(u,t,n),!Q(Me(),l)),V=(t,n,a)=>Lt(t,b,{...x.mount?u:j(n)?l:I(t)?{[t]:n}:n},a,n),T=t=>ue(d(x.mount?u:l,t,e.shouldUnregister?d(l,t,[]):[])),C=(t,n,a={})=>{const y=d(o,t);let f=n;if(y){const c=y._f;c&&(!c.disabled&&w(u,t,dt(n,c)),f=ye(c.ref)&&O(n)?"":n,ct(c.ref)?[...c.ref.options].forEach(m=>m.selected=f.includes(m.value)):c.refs?ce(c.ref)?c.refs.length>1?c.refs.forEach(m=>(!m.defaultChecked||!m.disabled)&&(m.checked=Array.isArray(f)?!!f.find(A=>A===m.value):f===m.value)):c.refs[0]&&(c.refs[0].checked=!!f):c.refs.forEach(m=>m.checked=m.value===f):Le(c.ref)?c.ref.value="":(c.ref.value=f,c.ref.type||p.values.next({name:t,values:{...u}})))}(a.shouldDirty||a.shouldTouch)&&ee(t,f,a.shouldTouch,a.shouldDirty,!0),a.shouldValidate&&ae(t)},B=(t,n,a)=>{for(const y in n){const f=n[y],c=`${t}.${y}`,m=d(o,c);(b.array.has(t)||!ve(f)||m&&!m._f)&&!se(f)?B(c,f,a):C(c,f,a)}},Y=(t,n,a={})=>{const y=d(o,t),f=b.array.has(t),c=$(n);w(u,t,c),f?(p.array.next({name:t,values:{...u}}),(k.isDirty||k.dirtyFields)&&a.shouldDirty&&p.state.next({name:t,dirtyFields:Ne(l,u),isDirty:g(t,c)})):y&&!y._f&&!O(c)?B(t,c,a):C(t,c,a),Xe(t,b)&&p.state.next({...r}),p.values.next({name:t,values:{...u}}),!x.mount&&s()},ne=async t=>{const n=t.target;let a=n.name,y=!0;const f=d(o,a),c=()=>n.type?Se(f._f):kt(t);if(f){let m,A;const F=c(),te=t.type===Ke.BLUR||t.type===Ke.FOCUS_OUT,vt=!It(f._f)&&!i.resolver&&!d(r.errors,a)&&!f._f.deps||Pt(te,d(r.touchedFields,a),r.isSubmitted,xe,L),Ae=Xe(a,b,te);w(u,a,F),te?(f._f.onBlur&&f._f.onBlur(t),E&&E(0)):f._f.onChange&&f._f.onChange(t);const Ve=ee(a,F,te,!1),gt=!M(Ve)||Ae;if(!te&&p.values.next({name:a,type:t.type,values:{...u}}),vt)return k.isValid&&v(),gt&&p.state.next({name:a,...Ae?{}:Ve});if(!te&&Ae&&p.state.next({...r}),R(!0),i.resolver){const{errors:We}=await q([a]),xt=tt(r.errors,o,a),$e=tt(We,o,xt.name||a);m=$e.error,a=$e.name,A=M(We)}else m=(await et(f,u,fe,i.shouldUseNativeValidation))[a],y=isNaN(F)||F===d(u,a,F),y&&(m?A=!1:k.isValid&&(A=await H(o,!0)));y&&(f._f.deps&&ae(f._f.deps),be(a,A,m,Ve))}},ae=async(t,n={})=>{let a,y;const f=je(t);if(R(!0),i.resolver){const c=await X(j(t)?t:f);a=M(c),y=t?!f.some(m=>d(c,m)):a}else t?(y=(await Promise.all(f.map(async c=>{const m=d(o,c);return await H(m&&m._f?{[c]:m}:m)}))).every(Boolean),!(!y&&!r.isValid)&&v()):y=a=await H(o);return p.state.next({...!I(t)||k.isValid&&a!==r.isValid?{}:{name:t},...i.resolver||!t?{isValid:a}:{},errors:r.errors,isValidating:!1}),n.shouldFocus&&!y&&Ee(o,c=>c&&d(r.errors,c),t?f:b.mount),y},Me=t=>{const n={...l,...x.mount?u:{}};return j(t)?n:I(t)?d(n,t):t.map(a=>d(n,a))},Re=(t,n)=>({invalid:!!d((n||r).errors,t),isDirty:!!d((n||r).dirtyFields,t),isTouched:!!d((n||r).touchedFields,t),error:d((n||r).errors,t)}),ht=t=>{t&&je(t).forEach(n=>S(r.errors,n)),p.state.next({errors:t?r.errors:{}})},Ue=(t,n,a)=>{const y=(d(o,t,{_f:{}})._f||{}).ref;w(r.errors,t,{...n,ref:y}),p.state.next({name:t,errors:r.errors,isValid:!1}),a&&a.shouldFocus&&y&&y.focus&&y.focus()},yt=(t,n)=>J(t)?p.values.subscribe({next:a=>t(V(void 0,n),a)}):V(t,n,!0),_e=(t,n={})=>{for(const a of t?je(t):b.mount)b.mount.delete(a),b.array.delete(a),n.keepValue||(S(o,a),S(u,a)),!n.keepError&&S(r.errors,a),!n.keepDirty&&S(r.dirtyFields,a),!n.keepTouched&&S(r.touchedFields,a),!i.shouldUnregister&&!n.keepDefaultValue&&S(l,a);p.values.next({values:{...u}}),p.state.next({...r,...n.keepDirty?{isDirty:g()}:{}}),!n.keepIsValid&&v()},qe=({disabled:t,name:n,field:a,fields:y})=>{if(G(t)){const f=t?void 0:d(u,n,Se(a?a._f:d(y,n)._f));w(u,n,f),ee(n,f,!1,!1,!0)}},we=(t,n={})=>{let a=d(o,t);const y=G(n.disabled);return w(o,t,{...a||{},_f:{...a&&a._f?a._f:{ref:{name:t}},name:t,mount:!0,...n}}),b.mount.add(t),a?qe({field:a,disabled:n.disabled,name:t}):ie(t,!0,n.value),{...y?{disabled:n.disabled}:{},...i.progressive?{required:!!n.required,min:le(n.min),max:le(n.max),minLength:le(n.minLength),maxLength:le(n.maxLength),pattern:le(n.pattern)}:{},name:t,onChange:ne,onBlur:ne,ref:f=>{if(f){we(t,n),a=d(o,t);const c=j(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,m=qt(c),A=a._f.refs||[];if(m?A.find(F=>F===c):c===a._f.ref)return;w(o,t,{_f:{...a._f,...m?{refs:[...A.filter(De),c,...Array.isArray(d(l,t))?[{}]:[]],ref:{type:c.type,name:t}}:{ref:c}}}),ie(t,!1,void 0,c)}else a=d(o,t,{}),a._f&&(a._f.mount=!1),(i.shouldUnregister||n.shouldUnregister)&&!(Nt(b.array,t)&&x.action)&&b.unMount.add(t)}}},Be=()=>i.shouldFocusError&&Ee(o,t=>t&&d(r.errors,t),b.mount),Ie=(t,n)=>async a=>{a&&(a.preventDefault&&a.preventDefault(),a.persist&&a.persist());let y=$(u);if(p.state.next({isSubmitting:!0}),i.resolver){const{errors:f,values:c}=await q();r.errors=f,y=c}else await H(o);S(r.errors,"root"),M(r.errors)?(p.state.next({errors:{}}),await t(y,a)):(n&&await n({...r.errors},a),Be(),setTimeout(Be)),p.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:M(r.errors),submitCount:r.submitCount+1,errors:r.errors})},mt=(t,n={})=>{d(o,t)&&(j(n.defaultValue)?Y(t,d(l,t)):(Y(t,n.defaultValue),w(l,t,n.defaultValue)),n.keepTouched||S(r.touchedFields,t),n.keepDirty||(S(r.dirtyFields,t),r.isDirty=n.defaultValue?g(t,d(l,t)):g()),n.keepError||(S(r.errors,t),k.isValid&&v()),p.state.next({...r}))},Pe=(t,n={})=>{const a=t?$(t):l,y=$(a),f=t&&!M(t)?y:l;if(n.keepDefaultValues||(l=a),!n.keepValues){if(n.keepDirtyValues||z)for(const c of b.mount)d(r.dirtyFields,c)?w(f,c,d(u,c)):Y(c,d(f,c));else{if(Oe&&j(t))for(const c of b.mount){const m=d(o,c);if(m&&m._f){const A=Array.isArray(m._f.refs)?m._f.refs[0]:m._f.ref;if(ye(A)){const F=A.closest("form");if(F){F.reset();break}}}}o={}}u=e.shouldUnregister?n.keepDefaultValues?$(l):{}:$(f),p.array.next({values:{...f}}),p.values.next({values:{...f}})}b={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!x.mount&&s(),x.mount=!k.isValid||!!n.keepIsValid,x.watch=!!e.shouldUnregister,p.state.next({submitCount:n.keepSubmitCount?r.submitCount:0,isDirty:n.keepDirty?r.isDirty:!!(n.keepDefaultValues&&!Q(t,l)),isSubmitted:n.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:n.keepDirtyValues?r.dirtyFields:n.keepDefaultValues&&t?Ne(l,t):{},touchedFields:n.keepTouched?r.touchedFields:{},errors:n.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},He=(t,n)=>Pe(J(t)?t(u):t,n);return{control:{register:we,unregister:_e,getFieldState:Re,handleSubmit:Ie,setError:Ue,_executeSchema:q,_getWatch:V,_getDirty:g,_updateValid:v,_removeUnmounted:_,_updateFieldArray:P,_updateDisabledField:qe,_getFieldArray:T,_reset:Pe,_resetDefaultValues:()=>J(i.defaultValues)&&i.defaultValues().then(t=>{He(t,i.resetOptions),p.state.next({isLoading:!1})}),_updateFormState:t=>{r={...r,...t}},_subjects:p,_proxyFormState:k,get _fields(){return o},get _formValues(){return u},get _state(){return x},set _state(t){x=t},get _defaultValues(){return l},get _names(){return b},set _names(t){b=t},get _formState(){return r},set _formState(t){r=t},get _options(){return i},set _options(t){i={...i,...t}}},trigger:ae,register:we,handleSubmit:Ie,watch:yt,setValue:Y,getValues:Me,reset:He,resetField:mt,clearErrors:ht,unregister:_e,setError:Ue,setFocus:(t,n={})=>{const a=d(o,t),y=a&&a._f;if(y){const f=y.refs?y.refs[0]:y.ref;f.focus&&(f.focus(),n.shouldSelect&&f.select())}},getFieldState:Re}}function zt(e={}){const s=K.useRef(),i=K.useRef(),[r,o]=K.useState({isDirty:!1,isValidating:!1,isLoading:J(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:J(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...$t(e,()=>o(u=>({...u}))),formState:r});const l=s.current.control;return l._options=e,Tt({subject:l._subjects.state,next:u=>{Ot(u,l._proxyFormState,l._updateFormState,!0)&&o({...l._formState})}}),K.useEffect(()=>{e.values&&!Q(e.values,i.current)?(l._reset(e.values,l._options.resetOptions),i.current=e.values):l._resetDefaultValues()},[e.values,l]),K.useEffect(()=>{l._state.mount||(l._updateValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),s.current.formState=Et(r,l),s.current}function Kt(){const e=Fe.useRef(null),{register:s,handleSubmit:i,formState:{}}=zt(),{t:r}=rt(),[o,l]=Fe.useState(!1),[u,x]=Fe.useState(!1),b=()=>{setTimeout(()=>{jt.sendForm("service_dvyfrv7","template_dijtokg",e.current,"OiAYajDR_DHv1IuAj").then(E=>{console.log(E.text),l(!0)},E=>{console.log(E.text),l(!1)}).finally(()=>x(!0))},500)};return h.jsx("div",{className:"flex-custom-full contact-form",children:h.jsxs("form",{ref:e,onSubmit:i(b),children:[h.jsxs("div",{className:"row gap-x-3",children:[h.jsx("div",{className:"flex-col grow form-item",children:h.jsx("div",{className:"form-group",children:h.jsx("input",{...s("name"),type:"text",className:"form-control",placeholder:r("contact-page.form.name"),required:!0})})}),h.jsx("div",{className:"flex-col grow form-item",children:h.jsx("div",{className:"form-group",children:h.jsx("input",{...s("email"),type:"email",className:"form-control",placeholder:r("contact-page.form.email"),required:!0})})})]}),h.jsx("div",{className:"row",children:h.jsx("div",{className:"flex-custom-full form-item",children:h.jsx("div",{className:"form-group",children:h.jsx("input",{...s("subject"),type:"text",className:"form-control",placeholder:r("contact-page.form.subject"),required:!0})})})}),h.jsx("div",{className:"row",children:h.jsx("div",{className:"flex-custom-full form-item",children:h.jsx("div",{className:"form-group",children:h.jsx("textarea",{...s("message"),className:"form-control",placeholder:r("contact-page.form.message"),required:!0})})})}),h.jsx("div",{className:"row",children:h.jsx("div",{className:"flex-custom-full form-item",children:h.jsxs("button",{type:"submit",className:`btn h-12 ${u&&"!p-4"}`,children:[h.jsx("div",{children:r("contact-page.form-button")}),h.jsx("div",{className:`transition-all ${u?"opacity-100 block":"opacity-0 hidden"}`,children:o?h.jsx(Jt,{}):h.jsx(Xt,{})})]})})})]})})}function Jt(e){return h.jsxs("svg",{fill:"#7fff00",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"35px",height:"35px",...e,children:[h.jsx("path",{d:"M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,20c-4.5,0-8-3.5-8-8s3.5-8,8-8s8,3.5,8,8S16.5,20,12,20z"}),h.jsx("polygon",{points:"9.8,16.8 6.1,13.2 7.5,11.7 9.8,14 15.5,7.9 17,9.3 "})]})}function Xt(e){return h.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"#ff0000",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"35px",height:"35px",...e,children:[h.jsx("line",{x1:"15",y1:"15",x2:"9",y2:"9"}),h.jsx("line",{x1:"9",y1:"15",x2:"15",y2:"9"}),h.jsx("circle",{cx:"12",cy:"12",r:"9",style:{fill:"none",stroke:"#ff0000",strokeWidth:2}})]})}function sr(){const{t:e}=rt();return h.jsx(pt,{features:bt,children:h.jsx(_t.section,{initial:{x:"100vw"},animate:{x:"0"},transition:{duration:1,bounce:!1,type:"spring",damping:15,stiffness:70},className:"contact section",id:"contact",children:h.jsxs("div",{className:"container py-16",children:[h.jsx("div",{className:"row",children:h.jsx("div",{className:"flex-custom-full mb-14 section-title",children:h.jsx("h1",{children:e("contact-page.title")})})}),h.jsx("h3",{className:"contact-title",children:e("contact-page.contact-question-title")}),h.jsx("h4",{className:"contact-sub-title",children:e("contact-page.contact-question-subtitle")}),h.jsxs("div",{className:"row flex-wrap",children:[h.jsxs("div",{className:"md:flex-custom-1/3 max-md:flex-custom-full contact-info-item break-words",children:[h.jsx("div",{className:"icon",children:h.jsx("i",{className:"fa fa-brands fa-telegram"})}),h.jsx("h4",{children:e("contact-page.services.write-me")}),h.jsx("p",{className:"cursor-pointer hover:underline hover:text-[var(--skin-color)]",onClick:()=>de("https://t.me/mr_osmanov"),children:"@Mr_Osmanov"})]}),h.jsxs("div",{className:"md:flex-custom-1/3 max-md:flex-custom-full contact-info-item break-words",children:[h.jsx("div",{className:"icon",children:h.jsx("i",{className:"fa fa-envelope"})}),h.jsx("h4",{children:e("contact-page.services.mail")}),h.jsx("p",{className:"cursor-pointer hover:underline hover:text-[var(--skin-color)]",onClick:()=>de("https://mail.google.com/"),children:"sinaver.osmanov@gmail.com"})]}),h.jsxs("div",{className:"md:flex-custom-1/3 max-md:flex-custom-full contact-info-item break-words",children:[h.jsx("div",{className:"icon",children:h.jsx("i",{className:"fa fa-globe-asia"})}),h.jsx("h4",{children:e("contact-page.services.git")}),h.jsx("p",{className:"cursor-pointer hover:underline hover:text-[var(--skin-color)]",onClick:()=>de("https://github.com/SinaverOsmanov"),children:"SinaverOsmanov"}),h.jsx("p",{className:"cursor-pointer hover:underline hover:text-[var(--skin-color)]",onClick:()=>de("https://github.com/SinaverFrontend"),children:"SinaverFrontent"})]})]}),h.jsx("h3",{className:"contact-title",children:e("contact-page.form-title")}),h.jsx("h4",{className:"contact-sub-title",children:e("contact-page.form-description")}),h.jsx("div",{className:"row",children:h.jsx(Kt,{})})]})})})}export{sr as default};
//# sourceMappingURL=Contact-565b61f7.js.map