/* Publish by EComposer at 2024-06-10 23:03:38*/

                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-uv287bhdu8b"]=  window.__ectimmers["ecom-uv287bhdu8b"] || {};
if(!this.$el)return;const e=this.$el,i=e.querySelector(".ecom-text_view-more-btn"),t=e.querySelector(".ecom-text_view-less-btn"),n=e.querySelector(".text-content.ecom-html");!n||(i&&i.addEventListener("click",()=>{n.classList.remove("ecom-text--is-mark"),n.style.maxHeight="",i.style.display="none",t.style.display=""}),t&&t.addEventListener("click",()=>{n.classList.add("ecom-text--is-mark"),n.style.maxHeight="var(--ecom-text-height)",t.style.display="none",i.style.display=""}))

                    });
                    
                        document.querySelectorAll('.ecom-uv287bhdu8b').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-uv287bhdu8b', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-jjmkp900qqd').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-jjmkp900qqd', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-jf9zxbpg1hs').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-jf9zxbpg1hs', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-q72igh4zxqs').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-q72igh4zxqs', settings: {},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-5zprt8m77di"]=  window.__ectimmers["ecom-5zprt8m77di"] || {};
const t=this.$el;if(!t)return;let r=this.settings.link_redirect,i=t.querySelector('.ecom-contact-form-file[type="file"]');const _=this.id;function g(){if(!r)return!1;let l=r.href;if(l=="")return!1;let m=r.target;window.location.href.includes("contact_posted=true")&&(m==="_blank"?window.open(l):window.location.href=l)}g();const o=t.querySelector("#ecom-contact-form-"+_);if(!o)return;const n=o.querySelector(".ecom__form-button");if(!n)return;i&&(o.setAttribute("enctype","multipart/form-data"),o.addEventListener("submit",function(l){if(!i.value||i.value==="")return;l.preventDefault(),l.stopImmediatePropagation(),n.classList.add("ecom-ajax-loading","ecom-loading");const m=o.querySelector('input[type="file"]');let e=new FormData,c=window.location.origin,u=window.EComposer&&window.EComposer.proxy_path;const w=`${c}${u}/contact-form`;e.append("file",m.files[0]),m.value&&u&&fetch(w,{method:"POST",body:e}).then(d=>d.json()).then(d=>{if(d.status==="success"){let q=m.name;m.remove();let x=document.createElement("input");x.value=d.src_file,x.type="hidden",x.name=q,o.appendChild(x),o.submit()}else alert(`Notice: ${d.message}`)}).catch(d=>console.error(d)).finally(function(){n.classList.remove("ecom-ajax-loading","ecom-loading")})}),i.addEventListener("change",function(){this.files[0].size>10485760&&(this.value="",alert("File size exceeds the maximum allowed limit (10MB)."))}));let f=t.querySelectorAll(".ecom-required--checkbox");n.addEventListener("click",function(l){f.length>0&&f.forEach(function(m){let e=m.querySelectorAll("input[type=checkbox]");if(e.length==0)return;let c=!1;e.forEach(function(u){u.checked&&(c=!0)}),c?e.forEach(function(u){u.required=!1}):e.forEach(function(u){u.required=!0})})}),o.dataset.ecTrackingId&&o.addEventListener("submit",function(){window.Shopify&&window.Shopify.analytics&&Shopify.analytics.publish("ec_custom_events",{button_id:o.id,tracking_id:o.dataset.ecTrackingId})},{once:!0})

                    });
                    
                        document.querySelectorAll('.ecom-5zprt8m77di').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-5zprt8m77di', settings: {"link_redirect":{"href":"","target":""}},isLive: true});
                        });
                    

                })();
            
                if(window.location.search.indexOf("ecom-token=") < 0)
                {
                    document.querySelector(".ecom-builder").innerHTML = '<h3 style="width:100%;display:block;text-align:center">This template for preview purposes only</h3>';
                    document.querySelector("body").style.opacity= "0.7";
                }
            ;window.addEventListener("load",()=>{
                let isAdmin = false;
                if(document.querySelector("#admin-bar-iframe")){
                    isAdmin = true;
                }
                if(!isAdmin) {
                    if(window.EComposerBrand) {
                        return;
                    } else {
                        window.EComposerBrand = true;
                    }
                }
                let a=document.querySelector("body"),b=document.createElement(Math.random().toString(36).replace(/\d*/g,"").substr(2,4));b.setAttribute("style",["position:relative","top: 0px","left: 0px","display: inline-block","height: 30px","line-height: 30px","font-size: 11px","width: 100%","text-align: center","opacity: 1","text-indent: 0","color: rgba(18, 18, 18, 0.75)","background: transparent","opacity: 0.8",""].join(" !important;")),b.innerHTML="Built with <a style='color: currentColor;text-decoration: none;' href=\"https://ecomposer.io/?utm_source=client-site&utm_medium=footer&utm_campaign=footer_branding&utm_term=links&utm_content="+window.location.origin+"\" target=\"_blank\">EComposer</a>" + (isAdmin ? ". Contact us or upgrade to remove branding" :""),a.appendChild(b)
            });