var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function a(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let i,l;function r(t,e){t.appendChild(e)}function d(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function c(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function m(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function h(){return p(" ")}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function w(t){l=t}const f=[],v=[],k=[],b=[],y=Promise.resolve();let x=!1;function N(t){k.push(t)}const $=new Set;let R=0;function j(){const t=l;do{for(;R<f.length;){const t=f[R];R++,w(t),_(t.$$)}for(w(null),f.length=0,R=0;v.length;)v.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];$.has(e)||($.add(e),e())}k.length=0}while(f.length);for(;b.length;)b.pop()();x=!1,$.clear(),w(t)}function _(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}const D=new Set;function P(t,e){-1===t.$$.dirty[0]&&(f.push(t),x||(x=!0,y.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function O(s,i,r,d,c,m,p,h=[-1]){const g=l;w(s);const f=s.$$={fragment:null,ctx:null,props:m,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(g?g.$$.context:[])),callbacks:n(),dirty:h,skip_bound:!1,root:i.target||g.$$.root};p&&p(f.root);let v=!1;if(f.ctx=r?r(s,i.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return f.ctx&&c(f.ctx[t],f.ctx[t]=o)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](o),v&&P(s,t)),e})):[],f.update(),v=!0,o(f.before_update),f.fragment=!!d&&d(f.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);f.fragment&&f.fragment.l(t),t.forEach(u)}else f.fragment&&f.fragment.c();i.intro&&((k=s.$$.fragment)&&k.i&&(D.delete(k),k.i(b))),function(t,n,s,i){const{fragment:l,on_mount:r,on_destroy:d,after_update:u}=t.$$;l&&l.m(n,s),i||N((()=>{const n=r.map(e).filter(a);d?d.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(N)}(s,i.target,i.anchor,i.customElement),j()}var k,b;w(g)}var A=[{date:"20.03.2022",title:"Нет войне! Диктаторов под трибунал! No to war! Tribunal for dictators! (Den Haag)",link:"https://www.facebook.com/events/488868512866007/"},{date:"05.03.2022",title:"Stop the war! Russia against Putin (Den Haag)",link:"https://www.facebook.com/events/289794243259194/"},{date:"27.02.2022",link:"https://www.facebook.com/events/679915576620268/",title:"Protest against war in Ukraine. Putin is not Russia! (Amsterdam)"},{date:"20.05.2021",link:"https://www.facebook.com/events/133718905452045/",title:"Solidarity protest by people of Russia & Belarus (Den Haag)"},{date:"21.04.2021",link:"https://www.facebook.com/events/177790280863463/",title:"Save Navalny - Demand Dutch government to call Putin now (Amsterdam)"},{date:"21.04.2021",link:"https://www.facebook.com/events/598584374408911/",title:"Save Navalny - Demand Dutch government to call Putin now (Den Haag)"},{date:"27.02.2021",link:"https://www.facebook.com/events/417280949339953/",title:"День памяти Немцова - Амстердам 27.02"},{date:"27.02.2021",link:"https://www.facebook.com/events/2832246390368150/",title:"День памяти Немцова - Гаага 27.02"},{date:"14.02.2021",link:"https://www.facebook.com/events/430514734926328",title:"#StopSupportingTyranny in Russia - Amsterdam 14-02"},{date:"07.02.2021",link:"https://www.facebook.com/events/173917477826273/",title:"#StopSupportingTyranny in Russia - Den Haag 07-02",comment:"Cancelled because of the severe weather conditions."},{date:"31.01.2021",link:"https://www.facebook.com/events/232258351886915",title:"#FreeNavalny in Amsterdam 31-01 (Vondelpark у памятника Vondel)"},{date:"23.01.2021",link:"https://www.facebook.com/events/188856476260014",title:"Free Navalny / Свободу Алексею Навальному! (Амстердам, максимум 200 человек)"},{date:"23.01.2021",link:"https://www.facebook.com/events/1597452923788850",title:"Free Navalny / Свободу Алексею Навальному! (Гаага, максимум 100 человек)"}],E=[{title:"Facebook group",link:"https://www.facebook.com/FreeRussiaNL",text:"https://www.facebook.com/FreeRussiaNL"},{title:"VK group",link:"https://vk.com/freerussianl",text:"https://vk.com/freerussianl"},{title:"Telegram channel",link:"https://t.me/RUprotestNLimportant",text:"@RUprotestNLimportant"},{title:"Telegram chat",link:"https://t.me/RUprotestNL",text:"@RUprotestNL"},{title:"Twitter",link:"https://twitter.com/russia_nl",text:"@russia_nl"},{link:"mailto:ruprotestnl@gmail.com",text:"RUprotestNL@gmail.com"}],H=[{link:"https://www.trouw.nl/binnenland/in-den-haag-demonstreren-russen-tegen-de-oorlog-dit-is-de-enige-mogelijkheid-voor-ons-om-wat-te-doen~b579e6bb/",text:"In Den Haag demonstreren Russen tegen de oorlog: ‘Dit is de enige mogelijkheid voor ons om wat te doen’ – Trouw",date:"05.03.2022"},{link:"https://www.npostart.nl/nos-journaal/05-03-2022/POW_05159124",text:"NOS Journaal",date:"05.03.2022",comment:"🎥"},{link:"https://www.rtlnieuws.nl/nieuws/video/video/5292755/rusland-poetin-demonstratie-den-haag-ambassade-oorlog-oekraine",text:"Russische Vanya (18) demonstreerde bij ambassade tegen oorlog in Oekraïne: 'Ik ben bang' - RTL Nieuws",date:"05.03.2022",comment:"🎥"},{link:"https://www.vpro.nl/programmas/bureau-buitenland/speel~PREPR_RA1_16833563~russisch-tegengeluid-in-nederland~.html",text:"Russisch tegengeluid in Nederland - VPRO",date:"03.03.2022",comment:"🎵"},{link:"https://kro-ncrv.nl/we-staan-altijd-naast-de-oekrainers",text:"'Wij Russen zijn tegen de oorlog, we staan altijd naast de Oekraïners', aldus de Russische Vera - KRO-NCRV",date:"28.02.2022",comment:"🎥"},{link:"https://www.parool.nl/amsterdam/zeker-15-000-demonstranten-op-de-dam-uit-solidariteit-met-oekraine~bf39f906/",text:"Zeker 15.000 demonstranten op de Dam uit solidariteit met Oekraïne – Het Parool",date:"27.02.2022"},{link:"https://www.dutchnews.nl/news/2022/02/protest-against-russian-invasion-draws-thousands/",text:"Dutch protests against Russian invasion of Ukraine draws thousands - DutchNews.nl",date:"27.02.2022"},{link:"https://www.nrc.nl/nieuws/2022/02/27/demonstratie-is-succes-van-nieuwe-vredesactivisten-a4095005",text:"Oekraïneprotest is vooral het succes van nieuwe vredesactivisten - NRC",date:"27.02.2022"},{link:"https://www.nhnieuws.nl/nieuws/300265/oekraine-protest-in-amsterdam-mijn-broers-maken-molotovcocktails-tegen-tanks",text:'Oekraïne-protest in Amsterdam: "Mijn broers maken molotovcocktails tegen tanks" - NH Nieuws',date:"27.02.2022"},{link:"https://www.ad.nl/video/kanalen/haagsche-courant~c433/series/korte-reportage~s1040/demonstraties-voor-opgesloten-oppositieleider-navalny~p221675",text:"Demonstraties voor opgesloten oppositieleider Navalny – AD.nl",date:"21.04.2021",comment:"🎥"},{link:"https://www.parool.nl/wereld/massale-demonstraties-voor-navalny-ook-in-amsterdam-gaan-mensen-de-straat-op~b6bca6f1/",text:"Massale demonstraties voor Navalny, ook in Amsterdam gaan mensen de straat op – Het Parool",date:"21.04.2021"},{link:"https://drive.google.com/drive/u/0/folders/1d5Hl_HC_PZy2nj3dWQZXpBkbdqxHVpOo",text:"Photos",date:"27.02.2021",comment:"📷"},{date:"24.02.2021",link:"https://www.raamoprusland.nl/actueel/1810-russen-in-nederland-roepen-op-tot-verdergaande-sancties",text:"Russen in Nederland roepen op tot verdergaande sancties – raamoprusland.nl"},{date:"15.02.2021",link:"https://www.vice.com/nl/article/g5bnmq/fotos-demonstratie-opsluiting-navalny-rusland",text:"Foto’s van een ijskoude demonstratie tegen de vervolging van Navalny – Vice.nl"},{date:"14.02.2021",link:"https://drive.google.com/drive/folders/1R7UD_jwiuyIgpO6NUBS9Oq3jdy1Zfdpq",text:"Photos",comment:"📷"},{date:"31.01.2021",link:"https://drive.google.com/drive/folders/1zeQBD0efLAOYkUqyaMhmwwDy1F4bGM2s",text:"Photos",comment:"📷"},{date:"31.01.2021",link:"https://www.rtlnieuws.nl/nieuws/nederland/artikel/5211897/protesten-rusland-navalny-poetin-arrestaties-oppositie-vondelpark",text:"Zij willen Navalny vrij: 'Zolang Poetin blijft, kan ik niet terug naar Rusland' – RTL Nieuws"},{date:"31.01.2021",link:"https://www.youtube.com/watch?v=dSYJTWXUt4g",text:"#26 Митинг поддержки Алексея Навального в Амстердаме, 31 января. – Alex Sokolov",comment:"🎥"},{date:"31.01.2021",link:"https://www.youtube.com/watch?v=vmBGvdGH5XA",text:"Амстердам вышел в поддержку всех политзаключённых России! /#митинг​#31января – Алексей Навальный новости",comment:"🎥"},{date:"24.01.2021",link:"https://www.dutchnews.nl/news/2021/01/russians-in-nl-protest-against-navalny-arrest-in-the-hague-and-amsterdam/",text:"Russians in NL protest against Navalny arrest in The Hague and Amsterdam – DutchNews.nl"},{date:"23.01.2021",link:"https://drive.google.com/drive/folders/1qNXEaxMdVakjUzZluqvYtjI51eKqgoxe",text:"Photos",comment:"📷"},{date:"23.01.2021",link:"https://www.nu.nl/den-haag/6107611/protest-voor-russische-ambassade-in-den-haag-free-navalny.html",text:"Protest voor Russische ambassade in Den Haag: 'Free Navalny' – NU.nl"},{date:"23.01.2021",link:"https://www.ad.nl/den-haag/protest-voor-russische-ambassade-free-navalny~a04d8e08/",text:"Protest voor Russische ambassade: ‘Free Navalny’ – AD.nl"},{date:"23.01.2021",link:"https://nos.nl/video/2365607-ook-op-museumplein-demonstranten-bijeen-voor-navalny.html",text:"Ook op Museumplein demonstranten bijeen voor Navalny – NOS",comment:"🎥"},{date:"23.01.2021",link:"https://www.blikopnieuws.nl/nieuws/286288/demonstratie-voor-vrijlating-navalny-op-museumplein.html",text:"Demonstratie voor vrijlating Navalny op Museumplein – Blikopnieuws"},{date:"23.01.2021",link:"https://www.parool.nl/amsterdam/tientallen-steunbetuigers-voor-navalny-op-museumplein~bd63607a/",text:"Tientallen steunbetuigers voor Navalny op Museumplein – Het Parool"},{date:"23.01.2021",link:"https://www.youtube.com/watch?v=m29lCfIi7AY",text:"#25 Митинг поддержки Алексея Навального в Гааге. – Alex Sokolov",comment:"🎥"},{date:"23.01.2021",link:"https://www.ukrinform.ru/rubric-world/3176806-v-gaage-u-posolstva-rf-prohodit-akcia-v-podderzku-navalnogo.html",text:"В Гааге у посольства РФ проходит акция в поддержку Навального – Укринформ"}];function S(t,e,n){const o=t.slice();return o[2]=e[n].date,o[3]=e[n].text,o[4]=e[n].link,o[5]=e[n].comment,o}function L(t,e,n){const o=t.slice();return o[2]=e[n].date,o[8]=e[n].title,o[4]=e[n].link,o[5]=e[n].comment,o}function T(t,e,n){const o=t.slice();return o[8]=e[n].title,o[4]=e[n].link,o[3]=e[n].text,o}function F(t,e,n){const o=t.slice();return o[2]=e[n].date,o[8]=e[n].title,o[4]=e[n].link,o[5]=e[n].comment,o}function M(e){let n,o,a,s,i,l,c,w,f=e[2]+"",v=e[8]+"",k=e[5]&&function(e){let n,o=e[5]+"";return{c(){n=p(o)},m(t,e){d(t,n,e)},p:t,d(t){t&&u(n)}}}(e);return{c(){n=m("li"),o=p(f),a=h(),s=m("a"),i=p(v),c=h(),k&&k.c(),w=h(),g(s,"href",l=e[4])},m(t,e){d(t,n,e),r(n,o),r(n,a),r(n,s),r(s,i),r(n,c),k&&k.m(n,null),r(n,w)},p(t,e){t[5]&&k.p(t,e)},d(t){t&&u(n),k&&k.d()}}}function U(e){let n,o,a,s,i,l,c=e[3]+"",w=e[8]&&function(e){let n,o,a=e[8]+"";return{c(){n=p(a),o=p(":")},m(t,e){d(t,n,e),d(t,o,e)},p:t,d(t){t&&u(n),t&&u(o)}}}(e);return{c(){n=m("li"),w&&w.c(),o=h(),a=m("a"),s=p(c),l=h(),g(a,"href",i=e[4])},m(t,e){d(t,n,e),w&&w.m(n,null),r(n,o),r(n,a),r(a,s),r(n,l)},p(t,e){t[8]&&w.p(t,e)},d(t){t&&u(n),w&&w.d()}}}function C(e){let n,o,a,s,i,l,c,w,f=e[2]+"",v=e[8]+"",k=e[5]&&function(e){let n,o=e[5]+"";return{c(){n=p(o)},m(t,e){d(t,n,e)},p:t,d(t){t&&u(n)}}}(e);return{c(){n=m("li"),o=p(f),a=h(),s=m("a"),i=p(v),c=h(),k&&k.c(),w=h(),g(s,"href",l=e[4])},m(t,e){d(t,n,e),r(n,o),r(n,a),r(n,s),r(s,i),r(n,c),k&&k.m(n,null),r(n,w)},p(t,e){t[5]&&k.p(t,e)},d(t){t&&u(n),k&&k.d()}}}function V(e){let n,o,a,s,i,l,c,w,f=e[2]+"",v=e[3]+"",k=e[5]&&function(e){let n,o=e[5]+"";return{c(){n=p(o)},m(t,e){d(t,n,e)},p:t,d(t){t&&u(n)}}}(e);return{c(){n=m("li"),o=p(f),a=h(),s=m("a"),i=p(v),c=h(),k&&k.c(),w=h(),g(s,"href",l=e[4])},m(t,e){d(t,n,e),r(n,o),r(n,a),r(n,s),r(s,i),r(n,c),k&&k.m(n,null),r(n,w)},p(t,e){t[5]&&k.p(t,e)},d(t){t&&u(n),k&&k.d()}}}function q(e){let n,o,a,s,l,p,w,f,v,k,b,y,x,N,$,R,j,_,D,P,O,A,q,B,Z,Y,z,I=e[0],W=[];for(let t=0;t<I.length;t+=1)W[t]=M(F(e,I,t));let X=E,G=[];for(let t=0;t<X.length;t+=1)G[t]=U(T(e,X,t));let K=e[1],J=[];for(let t=0;t<K.length;t+=1)J[t]=C(L(e,K,t));let Q=H,tt=[];for(let t=0;t<Q.length;t+=1)tt[t]=V(S(e,Q,t));return{c(){n=m("main"),o=m("img"),s=h(),l=m("h1"),l.textContent="Free Russia NL",p=h(),w=m("h2"),w.innerHTML='<a href="https://solidarity.support">Support independent russian media and human rights defenders –\n      https://solidarity.support</a>',f=h(),v=m("h2"),v.textContent="Upcoming events",k=h(),b=m("ul");for(let t=0;t<W.length;t+=1)W[t].c();y=h(),x=m("h2"),x.textContent="Petitions",N=h(),$=m("ul"),$.innerHTML='<li>Petition to the MPs of the Netherlands\n      <ul style="margin-top: 0.5em"><li><strong><a href="https://www.petitie24.nl/petitie/3532/maak-europa-vrij-van-corruptiegeld-uit-rusland">Dutch – sign here!</a></strong></li> \n        <li><a href="/docs/petition_en.pdf">English</a></li> \n        <li><a href="/docs/petition_ru.pdf">Russian</a></li></ul></li> \n    <li><a href="https://www.amnesty.nl/forms/petitie-navalny">Rusland, laat oppositieleider Navalny onmiddellijk vrij! – amnesty.nl</a></li>',R=h(),j=m("h2"),j.textContent="Links",_=h(),D=m("ul");for(let t=0;t<G.length;t+=1)G[t].c();P=h(),O=m("h2"),O.textContent="Past events",A=h(),q=m("ul");for(let t=0;t<J.length;t+=1)J[t].c();B=h(),Z=m("h2"),Z.textContent="Press and media",Y=h(),z=m("ul");for(let t=0;t<tt.length;t+=1)tt[t].c();var t,e;t=o.src,e=a="/images/logo.png",i||(i=document.createElement("a")),i.href=e,t!==i.href&&g(o,"src","/images/logo.png"),g(o,"width","128"),g(o,"height","128"),g(o,"alt","Free Russia NL logo")},m(t,e){d(t,n,e),r(n,o),r(n,s),r(n,l),r(n,p),r(n,w),r(n,f),r(n,v),r(n,k),r(n,b);for(let t=0;t<W.length;t+=1)W[t].m(b,null);r(n,y),r(n,x),r(n,N),r(n,$),r(n,R),r(n,j),r(n,_),r(n,D);for(let t=0;t<G.length;t+=1)G[t].m(D,null);r(n,P),r(n,O),r(n,A),r(n,q);for(let t=0;t<J.length;t+=1)J[t].m(q,null);r(n,B),r(n,Z),r(n,Y),r(n,z);for(let t=0;t<tt.length;t+=1)tt[t].m(z,null)},p(t,[e]){if(1&e){let n;for(I=t[0],n=0;n<I.length;n+=1){const o=F(t,I,n);W[n]?W[n].p(o,e):(W[n]=M(o),W[n].c(),W[n].m(b,null))}for(;n<W.length;n+=1)W[n].d(1);W.length=I.length}if(0&e){let n;for(X=E,n=0;n<X.length;n+=1){const o=T(t,X,n);G[n]?G[n].p(o,e):(G[n]=U(o),G[n].c(),G[n].m(D,null))}for(;n<G.length;n+=1)G[n].d(1);G.length=X.length}if(2&e){let n;for(K=t[1],n=0;n<K.length;n+=1){const o=L(t,K,n);J[n]?J[n].p(o,e):(J[n]=C(o),J[n].c(),J[n].m(q,null))}for(;n<J.length;n+=1)J[n].d(1);J.length=K.length}if(0&e){let n;for(Q=H,n=0;n<Q.length;n+=1){const o=S(t,Q,n);tt[n]?tt[n].p(o,e):(tt[n]=V(o),tt[n].c(),tt[n].m(z,null))}for(;n<tt.length;n+=1)tt[n].d(1);tt.length=Q.length}},i:t,o:t,d(t){t&&u(n),c(W,t),c(G,t),c(J,t),c(tt,t)}}}function B(t){const{upcomingEvents:e,pastEvents:n}=A.reduce(((t,e)=>{const n=new Date,o=new Date(e.date);return n.getFullYear()<=o.getFullYear()&&n.getMonth()<=o.getMonth()&&n.getDate()<=o.getDate()?Object.assign(Object.assign({},t),{upcomingEvents:[...t.upcomingEvents,e]}):Object.assign(Object.assign({},t),{pastEvents:[...t.pastEvents,e]})}),{upcomingEvents:[],pastEvents:[]});return[e,n]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),O(this,t,B,q,s,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
