import{u as rt,j as d}from"./index-70a48ff0.js";import{b as Y,r as Fe}from"./react-e7981c99.js";import{r as de}from"./redirectToExternalLink-1ac192dc.js";import{L as pt,d as _t,R as bt,m as wt}from"./ReactHelmet-d39b706a.js";var ce=e=>e.type==="checkbox",se=e=>e instanceof Date,E=e=>e==null;const st=e=>typeof e=="object";var S=e=>!E(e)&&!Array.isArray(e)&&st(e)&&!se(e),At=e=>S(e)&&e.target?ce(e.target)?e.target.checked:e.target.value:e,Vt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Ft=(e,s)=>e.has(Vt(s)),jt=e=>{const s=e.constructor&&e.constructor.prototype;return S(s)&&s.hasOwnProperty("isPrototypeOf")},Oe=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function K(e){let s;const i=Array.isArray(e);if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Oe&&(e instanceof Blob||e instanceof FileList))&&(i||S(e)))if(s=i?[]:{},!i&&!jt(e))s=e;else for(const r in e)e.hasOwnProperty(r)&&(s[r]=K(e[r]));else return e;return s}var ue=e=>Array.isArray(e)?e.filter(Boolean):[],j=e=>e===void 0,h=(e,s,i)=>{if(!s||!S(e))return i;const r=ue(s.split(/[,[\].]+?/)).reduce((o,l)=>E(o)?o:o[l],e);return j(r)||r===e?j(e[s])?i:e[s]:r};const $e={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},U={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},W={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};Y.createContext(null);var kt=(e,s,i,r=!0)=>{const o={defaultValues:s._defaultValues};for(const l in e)Object.defineProperty(o,l,{get:()=>{const u=l;return s._proxyFormState[u]!==U.all&&(s._proxyFormState[u]=!r||U.all),i&&(i[u]=!0),e[u]}});return o},R=e=>S(e)&&!Object.keys(e).length,St=(e,s,i,r)=>{i(e);const{name:o,...l}=e;return R(l)||Object.keys(l).length>=Object.keys(s).length||Object.keys(l).find(u=>s[u]===(!r||U.all))},je=e=>Array.isArray(e)?e:[e];function Dt(e){const s=Y.useRef(e);s.current=e,Y.useEffect(()=>{const i=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{i&&i.unsubscribe()}},[e.disabled])}var I=e=>typeof e=="string",Nt=(e,s,i,r,o)=>I(e)?(r&&s.watch.add(e),h(i,e,o)):Array.isArray(e)?e.map(l=>(r&&s.watch.add(l),h(i,l))):(r&&(s.watchAll=!0),i),Te=e=>/^\w*$/.test(e),it=e=>ue(e.replace(/["|']|\]/g,"").split(/\.|\[/));function w(e,s,i){let r=-1;const o=Te(s)?[s]:it(s),l=o.length,u=l-1;for(;++r<l;){const x=o[r];let _=i;if(r!==u){const T=e[x];_=S(T)||Array.isArray(T)?T:isNaN(+o[r+1])?{}:[]}e[x]=_,e=e[x]}return e}var Et=(e,s,i,r,o)=>s?{...i[e],types:{...i[e]&&i[e].types?i[e].types:{},[r]:o||!0}}:{};const Ee=(e,s,i)=>{for(const r of i||Object.keys(e)){const o=h(e,r);if(o){const{_f:l,...u}=o;if(l&&s(l.name)){if(l.ref.focus){l.ref.focus();break}else if(l.refs&&l.refs[0].focus){l.refs[0].focus();break}}else S(u)&&Ee(u,s)}}};var Ye=e=>({isOnSubmit:!e||e===U.onSubmit,isOnBlur:e===U.onBlur,isOnChange:e===U.onChange,isOnAll:e===U.all,isOnTouch:e===U.onTouched}),ze=(e,s,i)=>!i&&(s.watchAll||s.watch.has(e)||[...s.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length)))),Ot=(e,s,i)=>{const r=ue(h(e,i));return w(r,"root",s[i]),w(e,i,r),e},G=e=>typeof e=="boolean",Le=e=>e.type==="file",z=e=>typeof e=="function",ye=e=>{if(!Oe)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},he=e=>I(e),Ce=e=>e.type==="radio",me=e=>e instanceof RegExp;const Je={value:!1,isValid:!1},Xe={value:!0,isValid:!0};var nt=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(i=>i&&i.checked&&!i.disabled).map(i=>i.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!j(e[0].attributes.value)?j(e[0].value)||e[0].value===""?Xe:{value:e[0].value,isValid:!0}:Xe:Je}return Je};const Ge={isValid:!1,value:null};var at=e=>Array.isArray(e)?e.reduce((s,i)=>i&&i.checked&&!i.disabled?{isValid:!0,value:i.value}:s,Ge):Ge;function Qe(e,s,i="validate"){if(he(e)||Array.isArray(e)&&e.every(he)||G(e)&&!e)return{type:i,message:he(e)?e:"",ref:s}}var re=e=>S(e)&&!me(e)?e:{value:e,message:""},Ze=async(e,s,i,r,o)=>{const{ref:l,refs:u,required:x,maxLength:_,minLength:T,min:Z,max:k,pattern:p,validate:$,name:L,valueAsNumber:xe,mount:fe,disabled:pe}=e._f,v=h(s,L);if(!fe||pe)return{};const M=u?u[0]:l,P=b=>{r&&M.reportValidity&&(M.setCustomValidity(G(b)?"":b||""),M.reportValidity())},D={},ie=Ce(l),ee=ce(l),_e=ie||ee,q=(xe||Le(l))&&j(l.value)&&j(v)||ye(l)&&l.value===""||v===""||Array.isArray(v)&&!v.length,J=Et.bind(null,L,i,D),H=(b,g,V,O=W.maxLength,C=W.minLength)=>{const B=b?g:V;D[L]={type:b?O:C,message:B,ref:l,...J(b?O:C,B)}};if(o?!Array.isArray(v)||!v.length:x&&(!_e&&(q||E(v))||G(v)&&!v||ee&&!nt(u).isValid||ie&&!at(u).isValid)){const{value:b,message:g}=he(x)?{value:!!x,message:x}:re(x);if(b&&(D[L]={type:W.required,message:g,ref:M,...J(W.required,g)},!i))return P(g),D}if(!q&&(!E(Z)||!E(k))){let b,g;const V=re(k),O=re(Z);if(!E(v)&&!isNaN(v)){const C=l.valueAsNumber||v&&+v;E(V.value)||(b=C>V.value),E(O.value)||(g=C<O.value)}else{const C=l.valueAsDate||new Date(v),B=ae=>new Date(new Date().toDateString()+" "+ae),X=l.type=="time",ne=l.type=="week";I(V.value)&&v&&(b=X?B(v)>B(V.value):ne?v>V.value:C>new Date(V.value)),I(O.value)&&v&&(g=X?B(v)<B(O.value):ne?v<O.value:C<new Date(O.value))}if((b||g)&&(H(!!b,V.message,O.message,W.max,W.min),!i))return P(D[L].message),D}if((_||T)&&!q&&(I(v)||o&&Array.isArray(v))){const b=re(_),g=re(T),V=!E(b.value)&&v.length>+b.value,O=!E(g.value)&&v.length<+g.value;if((V||O)&&(H(V,b.message,g.message),!i))return P(D[L].message),D}if(p&&!q&&I(v)){const{value:b,message:g}=re(p);if(me(b)&&!v.match(b)&&(D[L]={type:W.pattern,message:g,ref:l,...J(W.pattern,g)},!i))return P(g),D}if($){if(z($)){const b=await $(v,s),g=Qe(b,M);if(g&&(D[L]={...g,...J(W.validate,g.message)},!i))return P(g.message),D}else if(S($)){let b={};for(const g in $){if(!R(b)&&!i)break;const V=Qe(await $[g](v,s),M,g);V&&(b={...V,...J(g,V.message)},P(V.message),i&&(D[L]=b))}if(!R(b)&&(D[L]={ref:M,...b},!i))return D}}return P(!0),D};function Tt(e,s){const i=s.slice(0,-1).length;let r=0;for(;r<i;)e=j(e)?r++:e[s[r++]];return e}function Lt(e){for(const s in e)if(e.hasOwnProperty(s)&&!j(e[s]))return!1;return!0}function N(e,s){const i=Array.isArray(s)?s:Te(s)?[s]:it(s),r=i.length===1?e:Tt(e,i),o=i.length-1,l=i[o];return r&&delete r[l],o!==0&&(S(r)&&R(r)||Array.isArray(r)&&Lt(r))&&N(e,i.slice(0,-1)),e}function ke(){let e=[];return{get observers(){return e},next:o=>{for(const l of e)l.next&&l.next(o)},subscribe:o=>(e.push(o),{unsubscribe:()=>{e=e.filter(l=>l!==o)}}),unsubscribe:()=>{e=[]}}}var ve=e=>E(e)||!st(e);function Q(e,s){if(ve(e)||ve(s))return e===s;if(se(e)&&se(s))return e.getTime()===s.getTime();const i=Object.keys(e),r=Object.keys(s);if(i.length!==r.length)return!1;for(const o of i){const l=e[o];if(!r.includes(o))return!1;if(o!=="ref"){const u=s[o];if(se(l)&&se(u)||S(l)&&S(u)||Array.isArray(l)&&Array.isArray(u)?!Q(l,u):l!==u)return!1}}return!0}var lt=e=>e.type==="select-multiple",Ct=e=>Ce(e)||ce(e),Se=e=>ye(e)&&e.isConnected,ot=e=>{for(const s in e)if(z(e[s]))return!0;return!1};function ge(e,s={}){const i=Array.isArray(e);if(S(e)||i)for(const r in e)Array.isArray(e[r])||S(e[r])&&!ot(e[r])?(s[r]=Array.isArray(e[r])?[]:{},ge(e[r],s[r])):E(e[r])||(s[r]=!0);return s}function ct(e,s,i){const r=Array.isArray(e);if(S(e)||r)for(const o in e)Array.isArray(e[o])||S(e[o])&&!ot(e[o])?j(s)||ve(i[o])?i[o]=Array.isArray(e[o])?ge(e[o],[]):{...ge(e[o])}:ct(e[o],E(s)?{}:s[o],i[o]):i[o]=!Q(e[o],s[o]);return i}var De=(e,s)=>ct(e,s,ge(s)),ut=(e,{valueAsNumber:s,valueAsDate:i,setValueAs:r})=>j(e)?e:s?e===""?NaN:e&&+e:i&&I(e)?new Date(e):r?r(e):e;function Ne(e){const s=e.ref;if(!(e.refs?e.refs.every(i=>i.disabled):s.disabled))return Le(s)?s.files:Ce(s)?at(e.refs).value:lt(s)?[...s.selectedOptions].map(({value:i})=>i):ce(s)?nt(e.refs).value:ut(j(s.value)?e.ref.value:s.value,e)}var Rt=(e,s,i,r)=>{const o={};for(const l of e){const u=h(s,l);u&&w(o,l,u._f)}return{criteriaMode:i,names:[...e],fields:o,shouldUseNativeValidation:r}},le=e=>j(e)?e:me(e)?e.source:S(e)?me(e.value)?e.value.source:e.value:e,Mt=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function et(e,s,i){const r=h(e,i);if(r||Te(i))return{error:r,name:i};const o=i.split(".");for(;o.length;){const l=o.join("."),u=h(s,l),x=h(e,l);if(u&&!Array.isArray(u)&&i!==l)return{name:i};if(x&&x.type)return{name:l,error:x};o.pop()}return{name:i}}var Ut=(e,s,i,r,o)=>o.isOnAll?!1:!i&&o.isOnTouch?!(s||e):(i?r.isOnBlur:o.isOnBlur)?!e:(i?r.isOnChange:o.isOnChange)?e:!0,qt=(e,s)=>!ue(h(e,s)).length&&N(e,s);const Bt={mode:U.onSubmit,reValidateMode:U.onChange,shouldFocusError:!0};function It(e={},s){let i={...Bt,...e},r={submitCount:0,isDirty:!1,isLoading:z(i.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},o={},l=S(i.defaultValues)||S(i.values)?K(i.defaultValues||i.values)||{}:{},u=i.shouldUnregister?{}:K(l),x={action:!1,mount:!1,watch:!1},_={mount:new Set,unMount:new Set,array:new Set,watch:new Set},T,Z=0;const k={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},p={values:ke(),array:ke(),state:ke()},$=e.resetOptions&&e.resetOptions.keepDirtyValues,L=Ye(i.mode),xe=Ye(i.reValidateMode),fe=i.criteriaMode===U.all,pe=t=>n=>{clearTimeout(Z),Z=setTimeout(t,n)},v=async t=>{if(k.isValid||t){const n=i.resolver?R((await q()).errors):await H(o,!0);n!==r.isValid&&p.state.next({isValid:n})}},M=t=>k.isValidating&&p.state.next({isValidating:t}),P=(t,n=[],a,y,f=!0,c=!0)=>{if(y&&a){if(x.action=!0,c&&Array.isArray(h(o,t))){const m=a(h(o,t),y.argA,y.argB);f&&w(o,t,m)}if(c&&Array.isArray(h(r.errors,t))){const m=a(h(r.errors,t),y.argA,y.argB);f&&w(r.errors,t,m),qt(r.errors,t)}if(k.touchedFields&&c&&Array.isArray(h(r.touchedFields,t))){const m=a(h(r.touchedFields,t),y.argA,y.argB);f&&w(r.touchedFields,t,m)}k.dirtyFields&&(r.dirtyFields=De(l,u)),p.state.next({name:t,isDirty:g(t,n),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else w(u,t,n)},D=(t,n)=>{w(r.errors,t,n),p.state.next({errors:r.errors})},ie=(t,n,a,y)=>{const f=h(o,t);if(f){const c=h(u,t,j(a)?h(l,t):a);j(c)||y&&y.defaultChecked||n?w(u,t,n?c:Ne(f._f)):C(t,c),x.mount&&v()}},ee=(t,n,a,y,f)=>{let c=!1,m=!1;const A={name:t};if(!a||y){k.isDirty&&(m=r.isDirty,r.isDirty=A.isDirty=g(),c=m!==A.isDirty);const F=Q(h(l,t),n);m=h(r.dirtyFields,t),F?N(r.dirtyFields,t):w(r.dirtyFields,t,!0),A.dirtyFields=r.dirtyFields,c=c||k.dirtyFields&&m!==!F}if(a){const F=h(r.touchedFields,t);F||(w(r.touchedFields,t,a),A.touchedFields=r.touchedFields,c=c||k.touchedFields&&F!==a)}return c&&f&&p.state.next(A),c?A:{}},_e=(t,n,a,y)=>{const f=h(r.errors,t),c=k.isValid&&G(n)&&r.isValid!==n;if(e.delayError&&a?(T=pe(()=>D(t,a)),T(e.delayError)):(clearTimeout(Z),T=null,a?w(r.errors,t,a):N(r.errors,t)),(a?!Q(f,a):f)||!R(y)||c){const m={...y,...c&&G(n)?{isValid:n}:{},errors:r.errors,name:t};r={...r,...m},p.state.next(m)}M(!1)},q=async t=>i.resolver(u,i.context,Rt(t||_.mount,o,i.criteriaMode,i.shouldUseNativeValidation)),J=async t=>{const{errors:n}=await q(t);if(t)for(const a of t){const y=h(n,a);y?w(r.errors,a,y):N(r.errors,a)}else r.errors=n;return n},H=async(t,n,a={valid:!0})=>{for(const y in t){const f=t[y];if(f){const{_f:c,...m}=f;if(c){const A=_.array.has(c.name),F=await Ze(f,u,fe,i.shouldUseNativeValidation&&!n,A);if(F[c.name]&&(a.valid=!1,n))break;!n&&(h(F,c.name)?A?Ot(r.errors,F,c.name):w(r.errors,c.name,F[c.name]):N(r.errors,c.name))}m&&await H(m,n,a)}}return a.valid},b=()=>{for(const t of _.unMount){const n=h(o,t);n&&(n._f.refs?n._f.refs.every(a=>!Se(a)):!Se(n._f.ref))&&be(t)}_.unMount=new Set},g=(t,n)=>(t&&n&&w(u,t,n),!Q(Re(),l)),V=(t,n,a)=>Nt(t,_,{...x.mount?u:j(n)?l:I(t)?{[t]:n}:n},a,n),O=t=>ue(h(x.mount?u:l,t,e.shouldUnregister?h(l,t,[]):[])),C=(t,n,a={})=>{const y=h(o,t);let f=n;if(y){const c=y._f;c&&(!c.disabled&&w(u,t,ut(n,c)),f=ye(c.ref)&&E(n)?"":n,lt(c.ref)?[...c.ref.options].forEach(m=>m.selected=f.includes(m.value)):c.refs?ce(c.ref)?c.refs.length>1?c.refs.forEach(m=>(!m.defaultChecked||!m.disabled)&&(m.checked=Array.isArray(f)?!!f.find(A=>A===m.value):f===m.value)):c.refs[0]&&(c.refs[0].checked=!!f):c.refs.forEach(m=>m.checked=m.value===f):Le(c.ref)?c.ref.value="":(c.ref.value=f,c.ref.type||p.values.next({name:t,values:{...u}})))}(a.shouldDirty||a.shouldTouch)&&ee(t,f,a.shouldTouch,a.shouldDirty,!0),a.shouldValidate&&ae(t)},B=(t,n,a)=>{for(const y in n){const f=n[y],c=`${t}.${y}`,m=h(o,c);(_.array.has(t)||!ve(f)||m&&!m._f)&&!se(f)?B(c,f,a):C(c,f,a)}},X=(t,n,a={})=>{const y=h(o,t),f=_.array.has(t),c=K(n);w(u,t,c),f?(p.array.next({name:t,values:{...u}}),(k.isDirty||k.dirtyFields)&&a.shouldDirty&&p.state.next({name:t,dirtyFields:De(l,u),isDirty:g(t,c)})):y&&!y._f&&!E(c)?B(t,c,a):C(t,c,a),ze(t,_)&&p.state.next({...r}),p.values.next({name:t,values:{...u}}),!x.mount&&s()},ne=async t=>{const n=t.target;let a=n.name,y=!0;const f=h(o,a),c=()=>n.type?Ne(f._f):At(t);if(f){let m,A;const F=c(),te=t.type===$e.BLUR||t.type===$e.FOCUS_OUT,vt=!Mt(f._f)&&!i.resolver&&!h(r.errors,a)&&!f._f.deps||Ut(te,h(r.touchedFields,a),r.isSubmitted,xe,L),Ae=ze(a,_,te);w(u,a,F),te?(f._f.onBlur&&f._f.onBlur(t),T&&T(0)):f._f.onChange&&f._f.onChange(t);const Ve=ee(a,F,te,!1),gt=!R(Ve)||Ae;if(!te&&p.values.next({name:a,type:t.type,values:{...u}}),vt)return k.isValid&&v(),gt&&p.state.next({name:a,...Ae?{}:Ve});if(!te&&Ae&&p.state.next({...r}),M(!0),i.resolver){const{errors:We}=await q([a]),xt=et(r.errors,o,a),Ke=et(We,o,xt.name||a);m=Ke.error,a=Ke.name,A=R(We)}else m=(await Ze(f,u,fe,i.shouldUseNativeValidation))[a],y=isNaN(F)||F===h(u,a,F),y&&(m?A=!1:k.isValid&&(A=await H(o,!0)));y&&(f._f.deps&&ae(f._f.deps),_e(a,A,m,Ve))}},ae=async(t,n={})=>{let a,y;const f=je(t);if(M(!0),i.resolver){const c=await J(j(t)?t:f);a=R(c),y=t?!f.some(m=>h(c,m)):a}else t?(y=(await Promise.all(f.map(async c=>{const m=h(o,c);return await H(m&&m._f?{[c]:m}:m)}))).every(Boolean),!(!y&&!r.isValid)&&v()):y=a=await H(o);return p.state.next({...!I(t)||k.isValid&&a!==r.isValid?{}:{name:t},...i.resolver||!t?{isValid:a}:{},errors:r.errors,isValidating:!1}),n.shouldFocus&&!y&&Ee(o,c=>c&&h(r.errors,c),t?f:_.mount),y},Re=t=>{const n={...l,...x.mount?u:{}};return j(t)?n:I(t)?h(n,t):t.map(a=>h(n,a))},Me=(t,n)=>({invalid:!!h((n||r).errors,t),isDirty:!!h((n||r).dirtyFields,t),isTouched:!!h((n||r).touchedFields,t),error:h((n||r).errors,t)}),ht=t=>{t&&je(t).forEach(n=>N(r.errors,n)),p.state.next({errors:t?r.errors:{}})},Ue=(t,n,a)=>{const y=(h(o,t,{_f:{}})._f||{}).ref;w(r.errors,t,{...n,ref:y}),p.state.next({name:t,errors:r.errors,isValid:!1}),a&&a.shouldFocus&&y&&y.focus&&y.focus()},yt=(t,n)=>z(t)?p.values.subscribe({next:a=>t(V(void 0,n),a)}):V(t,n,!0),be=(t,n={})=>{for(const a of t?je(t):_.mount)_.mount.delete(a),_.array.delete(a),n.keepValue||(N(o,a),N(u,a)),!n.keepError&&N(r.errors,a),!n.keepDirty&&N(r.dirtyFields,a),!n.keepTouched&&N(r.touchedFields,a),!i.shouldUnregister&&!n.keepDefaultValue&&N(l,a);p.values.next({values:{...u}}),p.state.next({...r,...n.keepDirty?{isDirty:g()}:{}}),!n.keepIsValid&&v()},qe=({disabled:t,name:n,field:a,fields:y})=>{if(G(t)){const f=t?void 0:h(u,n,Ne(a?a._f:h(y,n)._f));w(u,n,f),ee(n,f,!1,!1,!0)}},we=(t,n={})=>{let a=h(o,t);const y=G(n.disabled);return w(o,t,{...a||{},_f:{...a&&a._f?a._f:{ref:{name:t}},name:t,mount:!0,...n}}),_.mount.add(t),a?qe({field:a,disabled:n.disabled,name:t}):ie(t,!0,n.value),{...y?{disabled:n.disabled}:{},...i.progressive?{required:!!n.required,min:le(n.min),max:le(n.max),minLength:le(n.minLength),maxLength:le(n.maxLength),pattern:le(n.pattern)}:{},name:t,onChange:ne,onBlur:ne,ref:f=>{if(f){we(t,n),a=h(o,t);const c=j(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,m=Ct(c),A=a._f.refs||[];if(m?A.find(F=>F===c):c===a._f.ref)return;w(o,t,{_f:{...a._f,...m?{refs:[...A.filter(Se),c,...Array.isArray(h(l,t))?[{}]:[]],ref:{type:c.type,name:t}}:{ref:c}}}),ie(t,!1,void 0,c)}else a=h(o,t,{}),a._f&&(a._f.mount=!1),(i.shouldUnregister||n.shouldUnregister)&&!(Ft(_.array,t)&&x.action)&&_.unMount.add(t)}}},Be=()=>i.shouldFocusError&&Ee(o,t=>t&&h(r.errors,t),_.mount),Ie=(t,n)=>async a=>{a&&(a.preventDefault&&a.preventDefault(),a.persist&&a.persist());let y=K(u);if(p.state.next({isSubmitting:!0}),i.resolver){const{errors:f,values:c}=await q();r.errors=f,y=c}else await H(o);N(r.errors,"root"),R(r.errors)?(p.state.next({errors:{}}),await t(y,a)):(n&&await n({...r.errors},a),Be(),setTimeout(Be)),p.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:R(r.errors),submitCount:r.submitCount+1,errors:r.errors})},mt=(t,n={})=>{h(o,t)&&(j(n.defaultValue)?X(t,h(l,t)):(X(t,n.defaultValue),w(l,t,n.defaultValue)),n.keepTouched||N(r.touchedFields,t),n.keepDirty||(N(r.dirtyFields,t),r.isDirty=n.defaultValue?g(t,h(l,t)):g()),n.keepError||(N(r.errors,t),k.isValid&&v()),p.state.next({...r}))},Pe=(t,n={})=>{const a=t?K(t):l,y=K(a),f=t&&!R(t)?y:l;if(n.keepDefaultValues||(l=a),!n.keepValues){if(n.keepDirtyValues||$)for(const c of _.mount)h(r.dirtyFields,c)?w(f,c,h(u,c)):X(c,h(f,c));else{if(Oe&&j(t))for(const c of _.mount){const m=h(o,c);if(m&&m._f){const A=Array.isArray(m._f.refs)?m._f.refs[0]:m._f.ref;if(ye(A)){const F=A.closest("form");if(F){F.reset();break}}}}o={}}u=e.shouldUnregister?n.keepDefaultValues?K(l):{}:K(f),p.array.next({values:{...f}}),p.values.next({values:{...f}})}_={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!x.mount&&s(),x.mount=!k.isValid||!!n.keepIsValid,x.watch=!!e.shouldUnregister,p.state.next({submitCount:n.keepSubmitCount?r.submitCount:0,isDirty:n.keepDirty?r.isDirty:!!(n.keepDefaultValues&&!Q(t,l)),isSubmitted:n.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:n.keepDirtyValues?r.dirtyFields:n.keepDefaultValues&&t?De(l,t):{},touchedFields:n.keepTouched?r.touchedFields:{},errors:n.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},He=(t,n)=>Pe(z(t)?t(u):t,n);return{control:{register:we,unregister:be,getFieldState:Me,handleSubmit:Ie,setError:Ue,_executeSchema:q,_getWatch:V,_getDirty:g,_updateValid:v,_removeUnmounted:b,_updateFieldArray:P,_updateDisabledField:qe,_getFieldArray:O,_reset:Pe,_resetDefaultValues:()=>z(i.defaultValues)&&i.defaultValues().then(t=>{He(t,i.resetOptions),p.state.next({isLoading:!1})}),_updateFormState:t=>{r={...r,...t}},_subjects:p,_proxyFormState:k,get _fields(){return o},get _formValues(){return u},get _state(){return x},set _state(t){x=t},get _defaultValues(){return l},get _names(){return _},set _names(t){_=t},get _formState(){return r},set _formState(t){r=t},get _options(){return i},set _options(t){i={...i,...t}}},trigger:ae,register:we,handleSubmit:Ie,watch:yt,setValue:X,getValues:Re,reset:He,resetField:mt,clearErrors:ht,unregister:be,setError:Ue,setFocus:(t,n={})=>{const a=h(o,t),y=a&&a._f;if(y){const f=y.refs?y.refs[0]:y.ref;f.focus&&(f.focus(),n.shouldSelect&&f.select())}},getFieldState:Me}}function Pt(e={}){const s=Y.useRef(),i=Y.useRef(),[r,o]=Y.useState({isDirty:!1,isValidating:!1,isLoading:z(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:z(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...It(e,()=>o(u=>({...u}))),formState:r});const l=s.current.control;return l._options=e,Dt({subject:l._subjects.state,next:u=>{St(u,l._proxyFormState,l._updateFormState,!0)&&o({...l._formState})}}),Y.useEffect(()=>{e.values&&!Q(e.values,i.current)?(l._reset(e.values,l._options.resetOptions),i.current=e.values):l._resetDefaultValues()},[e.values,l]),Y.useEffect(()=>{l._state.mount||(l._updateValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),s.current.formState=kt(r,l),s.current}const oe={_origin:"https://api.emailjs.com"},Ht=(e,s="https://api.emailjs.com")=>{oe._userID=e,oe._origin=s},ft=(e,s,i)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!s)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!i)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class tt{constructor(s){this.status=s?s.status:0,this.text=s?s.responseText:"Network Error"}}const dt=(e,s,i={})=>new Promise((r,o)=>{const l=new XMLHttpRequest;l.addEventListener("load",({target:u})=>{const x=new tt(u);x.status===200||x.text==="OK"?r(x):o(x)}),l.addEventListener("error",({target:u})=>{o(new tt(u))}),l.open("POST",oe._origin+e,!0),Object.keys(i).forEach(u=>{l.setRequestHeader(u,i[u])}),l.send(s)}),Wt=(e,s,i,r)=>{const o=r||oe._userID;return ft(o,e,s),dt("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:o,service_id:e,template_id:s,template_params:i}),{"Content-type":"application/json"})},Kt=e=>{let s;if(typeof e=="string"?s=document.querySelector(e):s=e,!s||s.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return s},$t=(e,s,i,r)=>{const o=r||oe._userID,l=Kt(i);ft(o,e,s);const u=new FormData(l);return u.append("lib_version","3.11.0"),u.append("service_id",e),u.append("template_id",s),u.append("user_id",o),dt("/api/v1.0/email/send-form",u)},Yt={init:Ht,send:Wt,sendForm:$t},zt="service_dvyfrv7",Jt="template_dijtokg",Xt="OiAYajDR_DHv1IuAj",Gt={post:async e=>{try{return await Yt.sendForm(zt,Jt,e,Xt)}catch(s){return new Error(s)}}};function Qt(){const e=Fe.useRef(null),{register:s,handleSubmit:i,formState:{}}=Pt(),{t:r}=rt(),[o,l]=Fe.useState(!1),[u,x]=Fe.useState(!1),_=async()=>{if(!o)try{e.current?(await Gt.post(e.current),l(!0)):l(!1)}catch{l(!1)}finally{x(!0)}};return d.jsx("div",{className:"flex-custom-full contact-form",children:d.jsxs("form",{ref:e,onSubmit:i(_),children:[d.jsxs("div",{className:"row gap-x-3",children:[d.jsx("div",{className:"flex-col grow form-item",children:d.jsx("div",{className:"form-group",children:d.jsx("input",{...s("name"),type:"text",className:"form-control",placeholder:r("contact-page.form.name"),required:!0})})}),d.jsx("div",{className:"flex-col grow form-item",children:d.jsx("div",{className:"form-group",children:d.jsx("input",{...s("email"),type:"email",className:"form-control",placeholder:r("contact-page.form.email"),required:!0})})})]}),d.jsx("div",{className:"row",children:d.jsx("div",{className:"flex-custom-full form-item",children:d.jsx("div",{className:"form-group",children:d.jsx("input",{...s("subject"),type:"text",className:"form-control",placeholder:r("contact-page.form.subject"),required:!0})})})}),d.jsx("div",{className:"row",children:d.jsx("div",{className:"flex-custom-full form-item",children:d.jsx("div",{className:"form-group",children:d.jsx("textarea",{...s("message"),className:"form-control",placeholder:r("contact-page.form.message"),required:!0})})})}),d.jsx("div",{className:"row",children:d.jsx("div",{className:"flex-custom-full form-item",children:d.jsxs("button",{type:"submit",className:`btn h-12 ${u&&"!p-4"}`,children:[d.jsx("div",{children:r("contact-page.form-button")}),d.jsx("div",{className:`transition-all ${u?"opacity-100 block":"opacity-0 hidden"}`,children:o?d.jsx(Zt,{}):d.jsx(er,{})})]})})})]})})}function Zt(e){return d.jsxs("svg",{fill:"#7fff00",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"35px",height:"35px",...e,children:[d.jsx("path",{d:"M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,20c-4.5,0-8-3.5-8-8s3.5-8,8-8s8,3.5,8,8S16.5,20,12,20z"}),d.jsx("polygon",{points:"9.8,16.8 6.1,13.2 7.5,11.7 9.8,14 15.5,7.9 17,9.3 "})]})}function er(e){return d.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"#ff0000",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"35px",height:"35px",...e,children:[d.jsx("line",{x1:"15",y1:"15",x2:"9",y2:"9"}),d.jsx("line",{x1:"9",y1:"15",x2:"15",y2:"9"}),d.jsx("circle",{cx:"12",cy:"12",r:"9",style:{fill:"none",stroke:"#ff0000",strokeWidth:2}})]})}function or(){const{t:e}=rt();return d.jsxs(pt,{features:_t,children:[d.jsx(bt,{title:"Contact",description:"You can contact me here"}),d.jsx(wt.section,{initial:{x:"100vw"},animate:{x:"0"},transition:{duration:1,bounce:!1,type:"spring",damping:15,stiffness:70},className:"contact section",id:"contact",children:d.jsxs("div",{className:"container py-16",children:[d.jsx("div",{className:"row",children:d.jsx("div",{className:"flex-custom-full mb-14 section-title",children:d.jsx("h1",{children:e("contact-page.title")})})}),d.jsx("h3",{className:"contact-title",children:e("contact-page.contact-question-title")}),d.jsx("h4",{className:"contact-sub-title",children:e("contact-page.contact-question-subtitle")}),d.jsxs("div",{className:"row flex-wrap",children:[d.jsxs("div",{className:"md:flex-custom-1/3 max-md:flex-custom-full contact-info-item break-words",children:[d.jsx("div",{className:"icon",children:d.jsx("i",{className:"fa fa-brands fa-telegram"})}),d.jsx("h4",{children:e("contact-page.services.write-me")}),d.jsx("p",{className:"cursor-pointer hover:underline hover:text-[var(--skin-color)]",onClick:()=>de("https://t.me/mr_osmanov"),children:"@Mr_Osmanov"})]}),d.jsxs("div",{className:"md:flex-custom-1/3 max-md:flex-custom-full contact-info-item break-words",children:[d.jsx("div",{className:"icon",children:d.jsx("i",{className:"fa fa-envelope"})}),d.jsx("h4",{children:e("contact-page.services.mail")}),d.jsx("p",{className:"cursor-pointer hover:underline hover:text-[var(--skin-color)]",onClick:()=>de("https://mail.google.com/"),children:"sinaver.osmanov@gmail.com"})]}),d.jsxs("div",{className:"md:flex-custom-1/3 max-md:flex-custom-full contact-info-item break-words",children:[d.jsx("div",{className:"icon",children:d.jsx("i",{className:"fa fa-globe-asia"})}),d.jsx("h4",{children:e("contact-page.services.git")}),d.jsx("p",{className:"cursor-pointer hover:underline hover:text-[var(--skin-color)]",onClick:()=>de("https://github.com/SinaverOsmanov"),children:"SinaverOsmanov"}),d.jsx("p",{className:"cursor-pointer hover:underline hover:text-[var(--skin-color)]",onClick:()=>de("https://github.com/SinaverFrontend"),children:"SinaverFrontent"})]})]}),d.jsx("h3",{className:"contact-title",children:e("contact-page.form-title")}),d.jsx("h4",{className:"contact-sub-title",children:e("contact-page.form-description")}),d.jsx("div",{className:"row",children:d.jsx(Qt,{})})]})})]})}export{or as default};
//# sourceMappingURL=Contact-b4f80dc7.js.map