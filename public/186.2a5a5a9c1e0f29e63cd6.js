"use strict";(self.webpackChunkanimalx=self.webpackChunkanimalx||[]).push([[186],{9186:(U,m,c)=>{c.r(m),c.d(m,{CartModule:()=>A});var i=c(8583),l=c(4466),p=c(7396),C=c(3190),g=c(8002),t=c(639),s=c(1556),v=c(31),Z=c(4242);function f(r,n){if(1&r){const e=t.EpF();t.TgZ(0,"div",1),t.TgZ(1,"div",2),t.TgZ(2,"div",3),t._UZ(3,"img",4),t.qZA(),t.TgZ(4,"div",5),t.TgZ(5,"div",6),t._uU(6),t.qZA(),t.TgZ(7,"div",7),t._uU(8),t.qZA(),t.qZA(),t.TgZ(9,"div",5),t.TgZ(10,"button",8),t.NdJ("click",function(){return t.CHM(e),t.oxw().updateCart(-1)}),t._uU(11,"-"),t.qZA(),t.TgZ(12,"span",9),t._uU(13),t.qZA(),t.TgZ(14,"button",8),t.NdJ("click",function(){return t.CHM(e),t.oxw().updateCart(1)}),t._uU(15,"+"),t.qZA(),t.qZA(),t.TgZ(16,"div",5),t._uU(17),t.ALo(18,"currency"),t.TgZ(19,"button",8),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return a.updateCart(-a.item.amount)}),t._uU(20,"\u2715"),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&r){const e=t.oxw();t.xp6(3),t.Q6J("src",e.item.product.images[0]?"storage/"+e.item.product.images[0]:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",t.LSH),t.xp6(3),t.Oqu(e.category.name),t.xp6(2),t.Oqu(e.item.product.name),t.xp6(5),t.Oqu(e.item.amount),t.xp6(4),t.hij(" ",t.xi3(18,5,e.item.product.price*e.item.amount,"EUR")," ")}}let h=(()=>{class r{constructor(e,o){this._categoryService=e,this._cartService=o}ngOnInit(){this._categoryService.get(this.item.product.categoryId).subscribe(e=>this.category=e)}updateCart(e){this._cartService.update(this.item.product.id,e)}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(Z.H),t.Y36(s.N))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-cart-item-card"]],inputs:{item:"item"},decls:1,vars:1,consts:[["class","row border-bottom",4,"ngIf"],[1,"row","border-bottom"],[1,"row","main","align-items-center"],[1,"col-2"],[1,"img-fluid","py-3",3,"src"],[1,"col"],[1,"row","text-muted"],[1,"row"],[1,"btn",3,"click"],[1,"border"]],template:function(e,o){1&e&&t.YNc(0,f,21,8,"div",0),2&e&&t.Q6J("ngIf",o.item&&o.category)},directives:[i.O5],pipes:[i.H9],styles:[""]}),r})();function y(r,n){1&r&&t._UZ(0,"app-cart-item-card",4),2&r&&t.Q6J("item",n.$implicit)}const T=[{path:"",component:(()=>{class r{constructor(e,o){this._cartService=e,this._productService=o,this.cart$=this._cartService.cart$.pipe((0,C.w)(a=>(a.map(u=>u.productId),this._productService.query().pipe((0,g.U)(u=>a.map(d=>({product:u.find(_=>_.id==d.productId),amount:d.amount})).filter(d=>void 0!==d.product)))))),this.total=0}ngOnInit(){this.cart$.subscribe(e=>{let o=0;e.forEach(a=>{o+=a.amount*a.product.price}),this.total=o})}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(s.N),t.Y36(v.M))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-cart-page"]],decls:9,vars:7,consts:[[1,"container","my-5"],[3,"item",4,"ngFor","ngForOf"],[1,"dropdown-divider"],[1,"text-end"],[3,"item"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"h1"),t._uU(2,"Winkelwagen"),t.qZA(),t.YNc(3,y,1,1,"app-cart-item-card",1),t.ALo(4,"async"),t._UZ(5,"div",2),t.TgZ(6,"p",3),t._uU(7),t.ALo(8,"currency"),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.Q6J("ngForOf",t.lcZ(4,2,o.cart$)),t.xp6(4),t.hij("Totaalbedrag ",t.xi3(8,4,o.total,"EUR"),""))},directives:[i.sg,h],pipes:[i.Ov,i.H9],styles:[""]}),r})()}];let x=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[p.Bz.forChild(T)],p.Bz]}),r})(),A=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[i.ez,x,l.m]]}),r})()}}]);