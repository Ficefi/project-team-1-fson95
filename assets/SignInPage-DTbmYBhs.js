import{u as I,r as i,j as s,s as h,L as f}from"./index-Ddwg2od8.js";import{c as j,a as d,u as F,o as v}from"./index.esm-Di1t04MJ.js";import{A as w}from"./AdvantagesSection-DBMto3nN.js";import{L as y}from"./Logo-UsiRUrwg.js";const N="_mainContainer_vyaft_1",S="_AdvantagesSectionContainer_vyaft_15",C="_container_vyaft_27",b="_signInContainer_vyaft_55",E="_title_vyaft_75",P="_text_vyaft_91",t={mainContainer:N,AdvantagesSectionContainer:S,container:C,signInContainer:b,title:E,text:P},B="_signInFields_7fru1_1",$="_signInFormInput_7fru1_5",A="_fieldText_7fru1_20",L="_inputField_7fru1_34",M="_eyeIcon_7fru1_50",T="_togglePasswordBtn_7fru1_55",q="_signInBtn_7fru1_73",R="_errMessage_7fru1_101",V="_inputFieldError_7fru1_107",e={signInFields:B,signInFormInput:$,fieldText:A,inputField:L,eyeIcon:M,togglePasswordBtn:T,signInBtn:q,errMessage:R,inputFieldError:V},k=j().shape({email:d().email("Invalid email").required("Required"),password:d().required("Required")}),D={email:"",password:""},U=()=>{const m=I(),[a,g]=i.useState(!1),r=i.useId(),o=i.useId(),{register:l,handleSubmit:u,formState:{errors:n},reset:p}=F({resolver:v(k),defaultValues:D,mode:"onChange"}),_=c=>{m(h({email:c.email,password:c.password})),p()},x=()=>{g(!a)};return s.jsxs("form",{onSubmit:u(_),className:e.signInFields,children:[s.jsxs("div",{className:e.signInFormInput,children:[s.jsx("label",{htmlFor:r,className:e.fieldText,children:"Email"}),s.jsx("input",{type:"text",id:r,placeholder:"Enter your email",className:`${e.inputField} ${n.email?e.inputFieldError:""}`,...l("email")}),n.email&&s.jsx("span",{className:e.errMessage,children:n.email.message})]}),s.jsxs("div",{className:e.signInFormInput,children:[s.jsx("label",{htmlFor:o,className:e.fieldText,children:"Password"}),s.jsx("input",{type:a?"text":"password",id:o,placeholder:"Enter your password",className:`${e.inputField} ${n.password?e.inputFieldError:""}`,...l("password")}),s.jsx("button",{type:"button",className:e.togglePasswordBtn,onClick:x,children:s.jsx("svg",{className:e.eyeIcon,width:"20",height:"20",children:s.jsx("use",{href:"/src/assets/svg/sprite.svg#icon-eye-off"})})}),n.password&&s.jsx("span",{className:e.errMessage,children:n.password.message})]}),s.jsx("button",{type:"submit",className:e.signInBtn,children:"Sign In"})]})},K=()=>s.jsxs("div",{className:t.mainContainer,children:[s.jsxs("div",{className:t.container,children:[s.jsx(y,{}),s.jsxs("div",{className:t.signInContainer,children:[s.jsx("h1",{className:t.title,children:"Sign In"}),s.jsx(U,{})]}),s.jsxs("p",{className:t.text,children:["Don’t have an account? ",s.jsx(f,{to:"/register",children:"Sign Up"})]})]}),s.jsx("div",{className:t.AdvantagesSectionContainer,children:s.jsx(w,{})})]});export{K as default};
//# sourceMappingURL=SignInPage-DTbmYBhs.js.map
