import{r as n,l as y,j as e,H as _,F as m,m as j}from"./index-DoWxoQev.js";import{M as I}from"./Modal-BvBaUGqV.js";import{S as P,B as l}from"./Button-Daln_0w8.js";const f="_APIMenu_v041p_1",C="_apiMenu_v041p_7",S="_apiMenuContainer_v041p_23",v="_apiStatus_v041p_31",K="_apiActions_v041p_45",N="_error_v041p_51",g="_apiMenuHeader_v041p_56",s={APIMenu:f,apiMenu:C,apiMenuContainer:S,apiStatus:v,apiActions:K,error:N,apiMenuHeader:g};function b(){const{isApiKeySubmitted:t,setIsApiKeySubmitted:c}=n.useContext(y),[p,a]=n.useState(!1),[d,i]=n.useState(!1),[o,u]=n.useState(""),A=async()=>{try{i(!0),await j(),c(!1),i(!1)}catch(r){console.error("Error clearing API key:",r),u("Error clearing API key.")}},M=()=>{a(!0)},h=r=>{r&&alert("API key updated successfully!"),a(!1)},x=()=>{a(!1)};return d?e.jsx(P,{}):e.jsxs("div",{className:s.APIMenu,children:[e.jsx(_,{}),e.jsxs("div",{className:s.apiMenuContainer,children:[e.jsxs("div",{className:s.apiMenu,children:[e.jsx("div",{className:s.apiMenuHeader,children:e.jsx("h2",{children:"API Key Management"})}),o&&e.jsx("p",{className:s.error,children:o}),e.jsxs("div",{className:s.apiStatus,children:[e.jsx("h3",{children:"Current API Key Status"}),e.jsx("p",{children:t?"API Key is present.":"No API Key stored."})]}),e.jsxs("div",{className:s.apiActions,children:[e.jsx(l,{theme:"light",onClick:M,ariaLabel:"Adds or updates API key",children:t?"Update API Key":"Add API Key"}),t&&e.jsx(l,{theme:"light",onClick:A,ariaLabel:"Clears API key",children:"Clear API Key"})]})]}),e.jsx(I,{isOpen:p,onClose:x,onSuccess:h})]}),e.jsx(m,{})]})}export{b as default};
