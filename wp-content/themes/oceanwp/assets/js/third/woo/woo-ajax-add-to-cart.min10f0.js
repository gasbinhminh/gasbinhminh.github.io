jQuery(function(n){if("undefined"==typeof oceanwpLocalize||n(".woocommerce div.product").hasClass("product-type-grouped"))return!1;n.fn.serializeArrayAll=function(){var r=/\r?\n/g;return this.map(function(){return this.elements?jQuery.makeArray(this.elements):this}).map(function(e,a){var t=jQuery(this).val();return null==t?null==t:"checkbox"==this.type&&0==this.checked?{name:this.name,value:this.checked?this.value:""}:"radio"==this.type&&0==this.checked?{name:this.name,value:this.checked?this.value:""}:jQuery.isArray(t)?jQuery.map(t,function(e,t){return{name:a.name,value:e.replace(r,"\r\n")}}):{name:a.name,value:t.replace(r,"\r\n")}}).get()};function e(){n(document.body).on("click",".product:not(.product-type-external) .single_add_to_cart_button:not(.disabled)",this.onAddToCart).on("added_to_cart",this.updateButton)}e.prototype.onAddToCart=function(e){e.preventDefault();var t=n(this),a=n(this).closest("form.cart").serializeArrayAll(),r=!1;n.each(a,function(e,t){if("add-to-cart"===t.name)return!(r=!0)}),r&&(e.preventDefault(),n(document.body).trigger("adding_to_cart",[t,a]),t.removeClass("added"),t.addClass("loading"),n.ajax({url:oceanwpLocalize.wc_ajax_url,type:"POST",data:a,success:function(e){n(document.body).trigger("wc_fragment_refresh"),n(document.body).trigger("added_to_cart",[e.fragments,e.cart_hash,t]),"yes"!==oceanwpLocalize.cart_redirect_after_add||(window.location=oceanwpLocalize.cart_url)}}))},e.prototype.updateButton=function(e,t,a,r){(r=void 0!==r&&r)&&(r.removeClass("loading"),r.addClass("added"),oceanwpLocalize.is_cart||0!==r.parent().find(".added_to_cart").length||r.after(' <a href="'+oceanwpLocalize.cart_url+'" class="added_to_cart wc-forward" title="'+oceanwpLocalize.view_cart+'">'+oceanwpLocalize.view_cart+"</a>"))},new e});