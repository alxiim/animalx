"use strict";(self.webpackChunkanimalx=self.webpackChunkanimalx||[]).push([[35],{6035:($,Z,c)=>{c.r(Z),c.d(Z,{CartModule:()=>Q});var i=c(8583),T=c(4466),p=c(7396),x=c(6310),v=c(3190),h=c(8002),t=c(639),C=c(1556),_=c(8302),A=c(4149);function y(e,r){1&e&&(t.TgZ(0,"div",6),t.TgZ(1,"p"),t._uU(2,"Uw winkelwagen is nog leeg."),t.qZA(),t.TgZ(3,"button",7),t._uU(4,"Verder winkelen"),t.qZA(),t.qZA())}function q(e,r){1&e&&t._UZ(0,"app-cart-item-card",8),2&e&&t.Q6J("item",r.$implicit)}function U(e,r){if(1&e&&(t.TgZ(0,"div",9),t.TgZ(1,"p"),t._uU(2),t.ALo(3,"currency"),t.qZA(),t.TgZ(4,"button",10),t._uU(5,"Afrekenen"),t.qZA(),t.qZA()),2&e){const n=t.oxw(2);t.xp6(2),t.hij("Totaalbedrag ",t.xi3(3,1,n.total,"EUR"),"")}}function b(e,r){if(1&e&&(t.ynx(0),t.YNc(1,y,5,0,"div",3),t.YNc(2,q,1,1,"app-cart-item-card",4),t.ALo(3,"async"),t.YNc(4,U,6,4,"div",5),t.BQk()),2&e){const n=r.ngIf,o=t.oxw();t.xp6(1),t.Q6J("ngIf",!n.length),t.xp6(1),t.Q6J("ngForOf",t.lcZ(3,3,o.cart$)),t.xp6(2),t.Q6J("ngIf",n.length)}}function N(e,r){1&e&&(t.TgZ(0,"div",6),t._UZ(1,"div",11),t.qZA())}let I=(()=>{class e{constructor(n,o){this._cartService=n,this._productService=o,this.cart$=this._cartService.cart$.pipe((0,v.w)(a=>{const m=a.map(s=>s.productId);return this._productService.query({"productIds[]":m}).pipe((0,h.U)(s=>a.map(u=>({product:s.find(g=>g.id==u.productId),amount:u.amount})).filter(u=>void 0!==u.product)))})),this.total=0}ngOnInit(){this.cart$.subscribe(n=>{let o=0;n.forEach(a=>{o+=a.amount*a.product.price}),this.total=o})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(C.N),t.Y36(_.M))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-cart-page"]],decls:7,vars:4,consts:[[1,"container","my-5"],[4,"ngIf","ngIfElse"],["loader",""],["class","text-center",4,"ngIf"],[3,"item",4,"ngFor","ngForOf"],["class","text-end",4,"ngIf"],[1,"text-center"],["routerLink","/products",1,"btn","btn-primary"],[3,"item"],[1,"text-end"],["routerLink","checkout",1,"btn","btn-primary"],["role","status",1,"spinner-border","text-primary"]],template:function(n,o){if(1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"h1"),t._uU(2,"Winkelwagen"),t.qZA(),t.YNc(3,b,5,5,"ng-container",1),t.ALo(4,"async"),t.qZA(),t.YNc(5,N,2,0,"ng-template",null,2,t.W1O)),2&n){const a=t.MAs(6);t.xp6(3),t.Q6J("ngIf",t.lcZ(4,2,o.cart$))("ngIfElse",a)}},directives:[i.O5,i.sg,p.rH,A.R],pipes:[i.Ov,i.H9],styles:[""]}),e})();var P=c(2838),l=c(665);function S(e,r){1&e&&t._UZ(0,"app-cart-item-card",26),2&e&&t.Q6J("item",r.$implicit)("disabled",!0)}function Y(e,r){if(1&e&&(t.TgZ(0,"div",21),t.TgZ(1,"p"),t._uU(2),t.ALo(3,"currency"),t.qZA(),t.qZA()),2&e){const n=t.oxw(2);t.xp6(2),t.hij("Totaalbedrag ",t.xi3(3,1,n.total,"EUR"),"")}}function J(e,r){if(1&e&&(t.ynx(0),t.YNc(1,S,1,2,"app-cart-item-card",24),t.ALo(2,"async"),t.YNc(3,Y,4,4,"div",25),t.BQk()),2&e){const n=r.ngIf,o=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.lcZ(2,2,o.cart$)),t.xp6(2),t.Q6J("ngIf",n.length)}}function k(e,r){1&e&&(t.TgZ(0,"div",27),t._UZ(1,"div",28),t.qZA())}const F=[{path:"",component:I},{path:"checkout",component:(()=>{class e{constructor(n,o,a,m,s){this._cartService=n,this._productService=o,this._orderService=a,this._fb=m,this._router=s,this.cart$=this._cartService.cart$.pipe((0,v.w)(u=>{const g=u.map(f=>f.productId);return this._productService.query({"productIds[]":g}).pipe((0,h.U)(f=>u.map(d=>({product:f.find(M=>M.id==d.productId),amount:d.amount})).filter(d=>void 0!==d.product)))})),this.total=0,this.contactForm=this._fb.group({firstName:null,lastName:null,street:null,postalCode:null,city:null})}ngOnInit(){this.cart$.subscribe(n=>{let o=0;n.forEach(a=>{o+=a.amount*a.product.price}),this.total=o})}placeOrder(){this._orderService.create({products:this._cartService.cart}).subscribe(()=>{this._cartService.cart=[],this._router.navigateByUrl("/account/orders")})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(C.N),t.Y36(_.M),t.Y36(P.N),t.Y36(l.qu),t.Y36(p.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-checkout-page"]],decls:45,vars:5,consts:[[1,"container","my-5"],[1,"row"],[1,"col-7"],[1,"mb-3"],[3,"formGroup","ngSubmit"],[1,"col-6"],[1,"form-floating","mb-3"],["type","text","id","firstName","formControlName","firstName","placeholder","Guccio","autocomplete","given-name","required","",1,"form-control"],["for","firstName"],["type","text","id","lastName","formControlName","lastName","placeholder","Gucci","autocomplete","family-name","required","",1,"form-control"],["for","lastName"],[1,"col-4"],["type","text","id","street","formControlName","street","placeholder","P.C. Hooftstraat 91","required","",1,"form-control"],["for","street"],["type","text","id","postalCode","formControlName","postalCode","placeholder","1071 BR","required","",1,"form-control"],["for","postalCode"],["type","text","id","city","formControlName","city","placeholder","Amsterdam","required","",1,"form-control"],["for","city"],["type","submit",1,"btn","btn-primary"],[1,"col-5"],[4,"ngIf","ngIfElse"],[1,"text-end"],["routerLink","/cart",1,"btn","btn-sm","btn-outline-secondary"],["loader",""],[3,"item","disabled",4,"ngFor","ngForOf"],["class","text-end",4,"ngIf"],[3,"item","disabled"],[1,"text-center"],["role","status",1,"spinner-border","text-primary"]],template:function(n,o){if(1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"h3",3),t._uU(4,"Aflever- en factuurgegevens"),t.qZA(),t.TgZ(5,"form",4),t.NdJ("ngSubmit",function(){return o.placeOrder()}),t.TgZ(6,"div",1),t.TgZ(7,"div",5),t.TgZ(8,"div",6),t._UZ(9,"input",7),t.TgZ(10,"label",8),t._uU(11,"Voornaam"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(12,"div",5),t.TgZ(13,"div",6),t._UZ(14,"input",9),t.TgZ(15,"label",10),t._uU(16,"Achternaam"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(17,"div",1),t.TgZ(18,"div",11),t.TgZ(19,"div",6),t._UZ(20,"input",12),t.TgZ(21,"label",13),t._uU(22,"Straat"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(23,"div",11),t.TgZ(24,"div",6),t._UZ(25,"input",14),t.TgZ(26,"label",15),t._uU(27,"Postcode"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(28,"div",11),t.TgZ(29,"div",6),t._UZ(30,"input",16),t.TgZ(31,"label",17),t._uU(32,"Stad"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(33,"button",18),t._uU(34,"Bestelling plaatsen"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(35,"div",19),t.TgZ(36,"h3",3),t._uU(37,"Controleer bestelling"),t.qZA(),t.YNc(38,J,4,4,"ng-container",20),t.ALo(39,"async"),t.TgZ(40,"div",21),t.TgZ(41,"button",22),t._uU(42,"Terug naar winkelwagen"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(43,k,2,0,"ng-template",null,23,t.W1O)),2&n){const a=t.MAs(44);t.xp6(5),t.Q6J("formGroup",o.contactForm),t.xp6(33),t.Q6J("ngIf",t.lcZ(39,3,o.cart$))("ngIfElse",a)}},directives:[l._Y,l.JL,l.sg,l.Fj,l.JJ,l.u,l.Q7,i.O5,p.rH,i.sg,A.R],pipes:[i.Ov,i.H9],styles:[""]}),e})(),canActivate:[x.a]}];let O=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[p.Bz.forChild(F)],p.Bz]}),e})(),Q=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[i.ez,O,T.m,l.UX]]}),e})()}}]);