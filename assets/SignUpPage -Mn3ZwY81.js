import{u as w,r as a,j as s,a as F,L as j}from"./index-Ddwg2od8.js";import{c as N,a as c,b as U,u as f,o as P}from"./index.esm-Di1t04MJ.js";import{A as v}from"./AdvantagesSection-DBMto3nN.js";import{L as I}from"./Logo-UsiRUrwg.js";const y="_mainContainer_dwne1_1",S="_AdvantagesSectionContainer_dwne1_15",C="_container_dwne1_27",b="_signUpContainer_dwne1_55",E="_title_dwne1_75",R="_text_dwne1_91",n={mainContainer:y,AdvantagesSectionContainer:S,container:C,signUpContainer:b,title:E,text:R},$="_signUpFields_mpcc1_1",B="_signUpFormInput_mpcc1_5",A="_fieldText_mpcc1_20",T="_inputField_mpcc1_34",q="_eyeIcon_mpcc1_51",M="_togglePasswordBtn_mpcc1_56",L="_signUpBtn_mpcc1_74",k="_errMessage_mpcc1_102",V="_inputFieldError_mpcc1_108",D="_inputFieldRepeatPasswordError_mpcc1_112",e={signUpFields:$,signUpFormInput:B,fieldText:A,inputField:T,eyeIcon:q,togglePasswordBtn:M,signUpBtn:L,errMessage:k,inputFieldError:V,inputFieldRepeatPasswordError:D},O=N().shape({email:c().email("Invalid email").required("Required"),password:c().min(6,"Too short!").required("Required"),repeatPassword:c().oneOf([U("password"),null],"Passwords must match").required("Required")}),z={email:"",password:"",repeatPassword:""},G=()=>{const g=w(),[r,u]=a.useState(!1),d=a.useId(),l=a.useId(),p=a.useId(),{register:i,handleSubmit:h,formState:{errors:t},reset:_}=f({resolver:P(O),defaultValues:z,mode:"onChange"}),x=o=>{g(F({email:o.email,password:o.password})),_(),console.log(o)},m=()=>{u(!r)};return s.jsxs("form",{onSubmit:h(x),className:e.signUpFields,children:[s.jsxs("div",{className:e.signUpFormInput,children:[s.jsx("label",{htmlFor:d,className:e.fieldText,children:"Email"}),s.jsx("input",{type:"text",id:d,placeholder:"Enter your email",className:`${e.inputField} ${t.email?e.inputFieldError:""}`,...i("email")}),t.email&&s.jsx("span",{className:e.errMessage,children:t.email.message})]}),s.jsxs("div",{className:e.signUpFormInput,children:[s.jsx("label",{htmlFor:l,className:e.fieldText,children:"Password"}),s.jsx("input",{type:r?"text":"password",id:l,placeholder:"Enter your password",className:`${e.inputField} ${t.password?e.inputFieldError:""}`,...i("password")}),s.jsx("button",{type:"button",className:e.togglePasswordBtn,onClick:m,children:s.jsx("svg",{className:e.eyeIcon,width:"20",height:"20",children:s.jsx("use",{href:"/src/assets/svg/sprite.svg#icon-eye-off"})})}),t.password&&s.jsx("span",{className:e.errMessage,children:t.password.message})]}),s.jsxs("div",{className:e.signUpFormInput,children:[s.jsx("label",{htmlFor:p,className:e.fieldText,children:"Repeat password"}),s.jsx("input",{type:r?"text":"password",id:p,placeholder:"Repeat password",className:`${e.inputField} ${t.repeatPassword?e.inputFieldRepeatPasswordError:""}`,...i("repeatPassword")}),s.jsx("button",{type:"button",className:e.togglePasswordBtn,onClick:m,children:s.jsx("svg",{className:e.eyeIcon,width:"20",height:"20",children:s.jsx("use",{href:"/src/assets/svg/sprite.svg#icon-eye-off"})})}),t.repeatPassword&&s.jsx("span",{className:e.errMessage,children:t.repeatPassword.message})]}),s.jsx("button",{type:"submit",className:e.signUpBtn,children:"Sign Up"})]})},W=()=>s.jsxs("div",{className:n.mainContainer,children:[s.jsxs("div",{className:n.container,children:[s.jsx(I,{}),s.jsxs("div",{className:n.signUpContainer,children:[s.jsx("h1",{className:n.title,children:"Sign Up"}),s.jsx(G,{})]}),s.jsxs("p",{className:n.text,children:["Already have account? ",s.jsx(j,{to:"/login",children:"Sign In"})]})]}),s.jsx("div",{className:n.AdvantagesSectionContainer,children:s.jsx(v,{})})]});export{W as default};
//# sourceMappingURL=SignUpPage -Mn3ZwY81.js.map
