var addComment=(()=>{const e=e=>document.querySelector(e),t=e=>document.getElementById(e),n=e(".submit-form"),o=e(".form");o.doReset=(()=>{n.innerHTML="Submit",this.classList.remove("disabled"),this.disabled=!1}),o.addEventListener("submit",function(e){e.preventDefault();const t=(e,t)=>{const n=t.errorCode||"unknown";d(e,"An error occured.\n\n["+n+"]",!1)};n.innerHTML="Posting...",n.classList.add("disabled"),n.disabled=!0,fetch(this.getAttribute("action"),{method:"POST",body:new URLSearchParams(new FormData(this)),headers:new Headers({"content-type":"application/x-www-form-urlencoded"})}).then(e=>{e.ok?d("Comment submitted!","Thanks for your comment! It will be published after it's been approved by the Genics Blog team :)",!0):e.json().then(e=>{t("Server Error",e)})})["catch"](e=>{t("Unexpected Error",e)})});const d=(d,r,s)=>{t("modal").classList.remove("hidden"),document.getElementById("modal-title").textContent=d,document.getElementById("modal-message").textContent=r,e("#close").addEventListener("click",()=>{t("modal").classList.add("hidden"),n.innerHTML="Submit",n.classList.remove("disabled"),n.disabled=!1,s&&(o.reset(),o.doReset())})};return{moveForm:(e,n,o)=>{const d=this,r=t(e),s=t(n),i=t("cancel-reply-btn"),m=t("replying-to-id");if(r&&s&&i&&m){if(d.respondId=n,!t("sm-temp-form-div")){const e=document.createElement("div");e.id="sm-temp-form-div",e.style.display="none",s.parentNode.insertBefore(e,s)}return r.parentNode.insertBefore(s,r.nextSibling),m.value=o,t("form-parent").classList.add("ml-14"),t("form-title").innerHTML="Add a reply",i.classList.remove("hidden"),i.onclick=(()=>{const e=t("sm-temp-form-div"),n=t(d.respondId);if(e&&n)return t("form-parent").classList.remove("ml-14"),t("form-title").innerHTML="Add a comment",t("replying-to-id").value=null,e.parentNode.insertBefore(n,e),e.parentNode.removeChild(e),this.classList.add("hidden"),this.onclick=null,!1}),t("commentbox-name").focus(),!1}}}})();