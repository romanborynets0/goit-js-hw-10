import{i as t}from"./vendor-77e16229.js";import{i as c}from"./bi_x-octagon-2c5a1e05.js";const n="/vanilla-app-template/assets/bi_check2-circle-449d10c7.svg",m=document.querySelector(".form");document.querySelector('[type="submit"]');m.addEventListener("submit",function(s){s.preventDefault();const o=Number(document.querySelector('[name="delay"]').value),i=document.querySelector('[name="state"]:checked');new Promise((e,r)=>{setTimeout(()=>{i.value==="fulfilled"?e(o):r(o)},o)}).then(e=>{t.success({message:`Fulfilled promise in ${e}ms`,messageColor:"#FFF",backgroundColor:"#59A10D",position:"topRight",iconUrl:n})}).catch(e=>{t.error({message:`Rejected promise in ${e}ms`,messageColor:"#FFF",backgroundColor:"#EF4040",position:"topRight",iconUrl:c})})});
//# sourceMappingURL=2-snackbar-ce1cc434.js.map
