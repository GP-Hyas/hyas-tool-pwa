import{j as t,P as n}from"./index-DoWxoQev.js";const u="_spinnerOverlay_tojzi_1",_="_spinner_tojzi_1",d="_spin_tojzi_1",i={spinnerOverlay:u,spinner:_,spin:d};function g(){return t.jsx("div",{className:i.spinnerOverlay,children:t.jsx("div",{className:i.spinner})})}const h="_continueBtnLight_1h50m_1",m="_continueBtnDark_1h50m_18",s={continueBtnLight:h,continueBtnDark:m},B=({theme:e="light",onClick:r,ariaLabel:o,children:a,additionalClassName:c,...l})=>{const p=e==="dark"?s.continueBtnDark:s.continueBtnLight;return t.jsx("button",{className:`${p} ${c}`,onClick:r,"aria-label":o,...l,children:a})};B.propTypes={theme:n.oneOf(["light","dark"]),onClick:n.func.isRequired,ariaLabel:n.string.isRequired,children:n.node,additionalClassName:n.string};export{B,g as S};
