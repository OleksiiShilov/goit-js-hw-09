import"./assets/styles-4d9578c2.js";/* empty css                     */let e={email:"",message:""};const a=document.querySelector(".feedback-form");a.addEventListener("input",t=>{const l=t.target;e[l.name]=l.value,localStorage.setItem("feedback-form-state",JSON.stringify(e))});a.addEventListener("submit",t=>{if(t.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}else console.log(e),e.email="",e.message="";localStorage.removeItem("feedback-form-state"),a.reset()});const s=localStorage.getItem("feedback-form-state");s&&(e.email=JSON.parse(s).email,e.message=JSON.parse(s).message,a.email.value=e.email,a.message.value=e.message);
//# sourceMappingURL=commonHelpers2.js.map
