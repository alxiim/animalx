"use strict";(self.webpackChunkanimalx=self.webpackChunkanimalx||[]).push([[186],{9186:(y,u,c)=>{c.r(u),c.d(u,{CartModule:()=>_});var i=c(8583),m=c(4466),d=c(1742),t=c(639),s=c(1556),p=c(31),l=c(4242);function C(e,o){if(1&e){const r=t.EpF();t.TgZ(0,"div",1),t.TgZ(1,"div",2),t.TgZ(2,"div",3),t._UZ(3,"img",4),t.qZA(),t.TgZ(4,"div",5),t.TgZ(5,"div",6),t._uU(6),t.qZA(),t.TgZ(7,"div",7),t._uU(8),t.qZA(),t.qZA(),t.TgZ(9,"div",5),t.TgZ(10,"button",8),t.NdJ("click",function(){return t.CHM(r),t.oxw().updateCart(-1)}),t._uU(11,"-"),t.qZA(),t.TgZ(12,"span",9),t._uU(13),t.qZA(),t.TgZ(14,"button",8),t.NdJ("click",function(){return t.CHM(r),t.oxw().updateCart(1)}),t._uU(15,"+"),t.qZA(),t.qZA(),t.TgZ(16,"div",5),t._uU(17),t.ALo(18,"currency"),t.TgZ(19,"button",8),t.NdJ("click",function(){t.CHM(r);const a=t.oxw();return a.updateCart(-a.amount)}),t._uU(20,"\u2715"),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&e){const r=t.oxw();t.xp6(6),t.Oqu(r.category.name),t.xp6(2),t.Oqu(r.product.name),t.xp6(5),t.Oqu(r.amount),t.xp6(4),t.hij(" ",t.xi3(18,4,r.product.price*r.amount,"EUR")," ")}}let g=(()=>{class e{constructor(r,n,a){this._productService=r,this._categoryService=n,this._cartService=a}ngOnInit(){this._productService.get(this.productId).subscribe(r=>{this.product=r,this._categoryService.get(r.categoryId).subscribe(n=>this.category=n)})}updateCart(r){this._cartService.update(this.productId,r)}}return e.\u0275fac=function(r){return new(r||e)(t.Y36(p.M),t.Y36(l.H),t.Y36(s.N))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-cart-item-card"]],inputs:{amount:"amount",productId:"productId"},decls:1,vars:1,consts:[["class","row border-bottom",4,"ngIf"],[1,"row","border-bottom"],[1,"row","main","align-items-center"],[1,"col-2"],["src","https://dummyimage.com/450x300/dee2e6/6c757d.jpg",1,"img-fluid","py-3"],[1,"col"],[1,"row","text-muted"],[1,"row"],[1,"btn",3,"click"],[1,"border"]],template:function(r,n){1&r&&t.YNc(0,C,21,7,"div",0),2&r&&t.Q6J("ngIf",n.product&&n.amount&&n.category)},directives:[i.O5],pipes:[i.H9],styles:[""]}),e})();function v(e,o){if(1&e&&t._UZ(0,"app-cart-item-card",2),2&e){const r=o.$implicit;t.Q6J("productId",r.productId)("amount",r.amount)}}const Z=[{path:"",component:(()=>{class e{constructor(r){this._cartService=r,this.cart$=this._cartService.cart$}ngOnInit(){}}return e.\u0275fac=function(r){return new(r||e)(t.Y36(s.N))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-cart-page"]],decls:3,vars:3,consts:[[1,"container","my-5"],[3,"productId","amount",4,"ngFor","ngForOf"],[3,"productId","amount"]],template:function(r,n){1&r&&(t.TgZ(0,"div",0),t.YNc(1,v,1,2,"app-cart-item-card",1),t.ALo(2,"async"),t.qZA()),2&r&&(t.xp6(1),t.Q6J("ngForOf",t.lcZ(2,1,n.cart$)))},directives:[i.sg,g],pipes:[i.Ov],styles:[""]}),e})()}];let f=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[d.Bz.forChild(Z)],d.Bz]}),e})(),_=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[i.ez,f,m.m]]}),e})()}}]);