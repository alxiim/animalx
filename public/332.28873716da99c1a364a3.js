"use strict";(self.webpackChunkanimalx=self.webpackChunkanimalx||[]).push([[332],{332:(C,a,n)=>{n.r(a),n.d(a,{ProductModule:()=>A});var u=n(8583),i=n(4466),s=n(7396),t=n(639),l=n(1556);let m=(()=>{class o{constructor(r,e){this._route=r,this._cartService=e,this.product=this._route.snapshot.data.product}ngOnInit(){}addToCart(){this._cartService.update(this.product.id,1)}}return o.\u0275fac=function(r){return new(r||o)(t.Y36(s.gz),t.Y36(l.N))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-product-page"]],decls:14,vars:7,consts:[[1,"container","my-5"],[1,"row"],[1,"col-6","border-end"],["alt","...",1,"w-100",3,"src"],[1,"col-6"],[1,"btn","btn-primary",3,"click"]],template:function(r,e){1&r&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t._UZ(3,"img",3),t.qZA(),t.TgZ(4,"div",4),t.TgZ(5,"h2"),t._uU(6),t.qZA(),t.TgZ(7,"p"),t._uU(8),t.qZA(),t.TgZ(9,"h4"),t._uU(10),t.ALo(11,"currency"),t.qZA(),t.TgZ(12,"button",5),t.NdJ("click",function(){return e.addToCart()}),t._uU(13,"In winkelwagen"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&r&&(t.xp6(3),t.Q6J("src",e.product.images[0]?"storage/"+e.product.images[0]:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",t.LSH),t.xp6(3),t.Oqu(e.product.name),t.xp6(2),t.Oqu(e.product.description),t.xp6(2),t.Oqu(t.xi3(11,4,e.product.price,"EUR")))},pipes:[u.H9],styles:[""]}),o})();var g=n(7574),p=n(31),v=n(3284);function P(o,c){if(1&o&&(t.TgZ(0,"div",3),t._UZ(1,"app-product-card",4),t.qZA()),2&o){const r=c.$implicit;t.xp6(1),t.Q6J("product",r)}}let h=(()=>{class o{constructor(r,e){this._productService=r,this._route=e,this.products$=new g.y}ngOnInit(){this._route.queryParamMap.subscribe(r=>{const e=r.getAll("categoryIds").map(d=>parseInt(d));this.products$=this._productService.query({"categoryIds[]":e})})}}return o.\u0275fac=function(r){return new(r||o)(t.Y36(p.M),t.Y36(s.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-products-page"]],decls:4,vars:3,consts:[[1,"container","my-5"],[1,"row","gx-4","gx-lg-5","row-cols-2","row-cols-md-3","row-cols-xl-4","justify-content-center"],["class","col mb-5",4,"ngFor","ngForOf"],[1,"col","mb-5"],[3,"product"]],template:function(r,e){1&r&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.YNc(2,P,2,1,"div",2),t.ALo(3,"async"),t.qZA(),t.qZA()),2&r&&(t.xp6(2),t.Q6J("ngForOf",t.lcZ(3,1,e.products$)))},directives:[u.sg,v.Y],pipes:[u.Ov],styles:[""]}),o})();var y=n(9193),f=n(5304);const Z=[{path:"",component:h},{path:":id",component:m,resolve:{product:(()=>{class o{constructor(r,e){this._productService=r,this._router=e}resolve(r,e){const d=parseInt(r.paramMap.get("id"));return this._productService.get(d).pipe((0,f.K)(M=>(this._router.navigateByUrl("/"),y.E)))}}return o.\u0275fac=function(r){return new(r||o)(t.LFG(p.M),t.LFG(s.F0))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()}}];let T=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[s.Bz.forChild(Z)],s.Bz]}),o})(),A=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[u.ez,T,i.m]]}),o})()}}]);