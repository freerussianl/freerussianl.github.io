var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function a(e){e.forEach(t)}function o(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let i,r;function l(e,t){e.appendChild(t)}function d(e,t,n){e.insertBefore(t,n||null)}function u(e){e.parentNode.removeChild(e)}function c(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function m(e){return document.createElement(e)}function p(e){return document.createTextNode(e)}function h(){return p(" ")}function g(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function w(e){r=e}const v=[],f=[],k=[],b=[],x=Promise.resolve();let y=!1;function N(e){k.push(e)}const R=new Set;let j=0;function $(){const e=r;do{for(;j<v.length;){const e=v[j];j++,w(e),_(e.$$)}for(w(null),v.length=0,j=0;f.length;)f.pop()();for(let e=0;e<k.length;e+=1){const t=k[e];R.has(t)||(R.add(t),t())}k.length=0}while(v.length);for(;b.length;)b.pop()();y=!1,R.clear(),w(e)}function _(e){if(null!==e.fragment){e.update(),a(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(N)}}const O=new Set;function D(e,t){-1===e.$$.dirty[0]&&(v.push(e),y||(y=!0,x.then($)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function P(s,i,l,d,c,m,p,h=[-1]){const g=r;w(s);const v=s.$$={fragment:null,ctx:null,props:m,update:e,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(g?g.$$.context:[])),callbacks:n(),dirty:h,skip_bound:!1,root:i.target||g.$$.root};p&&p(v.root);let f=!1;if(v.ctx=l?l(s,i.props||{},((e,t,...n)=>{const a=n.length?n[0]:t;return v.ctx&&c(v.ctx[e],v.ctx[e]=a)&&(!v.skip_bound&&v.bound[e]&&v.bound[e](a),f&&D(s,e)),t})):[],v.update(),f=!0,a(v.before_update),v.fragment=!!d&&d(v.ctx),i.target){if(i.hydrate){const e=function(e){return Array.from(e.childNodes)}(i.target);v.fragment&&v.fragment.l(e),e.forEach(u)}else v.fragment&&v.fragment.c();i.intro&&((k=s.$$.fragment)&&k.i&&(O.delete(k),k.i(b))),function(e,n,s,i){const{fragment:r,on_mount:l,on_destroy:d,after_update:u}=e.$$;r&&r.m(n,s),i||N((()=>{const n=l.map(t).filter(o);d?d.push(...n):a(n),e.$$.on_mount=[]})),u.forEach(N)}(s,i.target,i.anchor,i.customElement),$()}var k,b;w(g)}var H=[{date:"20.03.2022",title:"Нет войне! Диктаторов под трибунал! No to war! Tribunal for dictators! (Den Haag)",link:"https://www.facebook.com/events/488868512866007/"},{date:"05.03.2022",title:"Stop the war! Russia against Putin (Den Haag)",link:"https://www.facebook.com/events/289794243259194/"},{date:"27.02.2022",link:"https://www.facebook.com/events/679915576620268/",title:"Protest against war in Ukraine. Putin is not Russia! (Amsterdam)"},{date:"20.05.2021",link:"https://www.facebook.com/events/133718905452045/",title:"Solidarity protest by people of Russia & Belarus (Den Haag)"},{date:"21.04.2021",link:"https://www.facebook.com/events/177790280863463/",title:"Save Navalny - Demand Dutch government to call Putin now (Amsterdam)"},{date:"21.04.2021",link:"https://www.facebook.com/events/598584374408911/",title:"Save Navalny - Demand Dutch government to call Putin now (Den Haag)"},{date:"27.02.2021",link:"https://www.facebook.com/events/417280949339953/",title:"День памяти Немцова - Амстердам 27.02"},{date:"27.02.2021",link:"https://www.facebook.com/events/2832246390368150/",title:"День памяти Немцова - Гаага 27.02"},{date:"14.02.2021",link:"https://www.facebook.com/events/430514734926328",title:"#StopSupportingTyranny in Russia - Amsterdam 14-02"},{date:"07.02.2021",link:"https://www.facebook.com/events/173917477826273/",title:"#StopSupportingTyranny in Russia - Den Haag 07-02",comment:"Cancelled because of the severe weather conditions."},{date:"31.01.2021",link:"https://www.facebook.com/events/232258351886915",title:"#FreeNavalny in Amsterdam 31-01 (Vondelpark у памятника Vondel)"},{date:"23.01.2021",link:"https://www.facebook.com/events/188856476260014",title:"Free Navalny / Свободу Алексею Навальному! (Амстердам, максимум 200 человек)"},{date:"23.01.2021",link:"https://www.facebook.com/events/1597452923788850",title:"Free Navalny / Свободу Алексею Навальному! (Гаага, максимум 100 человек)"}],L=[{title:"Facebook group",link:"https://www.facebook.com/FreeRussiaNL",text:"https://www.facebook.com/FreeRussiaNL"},{title:"VK group",link:"https://vk.com/freerussianl",text:"https://vk.com/freerussianl"},{title:"Telegram channel",link:"https://t.me/RUprotestNLimportant",text:"@RUprotestNLimportant"},{title:"Telegram chat",link:"https://t.me/RUprotestNL",text:"@RUprotestNL"},{title:"Twitter",link:"https://twitter.com/russia_nl",text:"@russia_nl"},{link:"mailto:ruprotestnl@gmail.com",text:"RUprotestNL@gmail.com"}],A=[{link:"https://www.trouw.nl/binnenland/in-den-haag-demonstreren-russen-tegen-de-oorlog-dit-is-de-enige-mogelijkheid-voor-ons-om-wat-te-doen~b579e6bb/",text:"In Den Haag demonstreren Russen tegen de oorlog: ‘Dit is de enige mogelijkheid voor ons om wat te doen’ – Trouw",date:"05.03.2022"},{link:"https://www.npostart.nl/nos-journaal/05-03-2022/POW_05159124",text:"NOS Journaal",date:"05.03.2022",comment:"🎥"},{link:"https://www.rtlnieuws.nl/nieuws/video/video/5292755/rusland-poetin-demonstratie-den-haag-ambassade-oorlog-oekraine",text:"Russische Vanya (18) demonstreerde bij ambassade tegen oorlog in Oekraïne: 'Ik ben bang' - RTL Nieuws",date:"05.03.2022",comment:"🎥"},{link:"https://www.vpro.nl/programmas/bureau-buitenland/speel~PREPR_RA1_16833563~russisch-tegengeluid-in-nederland~.html",text:"Russisch tegengeluid in Nederland - VPRO",date:"03.03.2022",comment:"🎵"},{link:"https://kro-ncrv.nl/we-staan-altijd-naast-de-oekrainers",text:"'Wij Russen zijn tegen de oorlog, we staan altijd naast de Oekraïners', aldus de Russische Vera - KRO-NCRV",date:"28.02.2022",comment:"🎥"},{link:"https://www.parool.nl/amsterdam/zeker-15-000-demonstranten-op-de-dam-uit-solidariteit-met-oekraine~bf39f906/",text:"Zeker 15.000 demonstranten op de Dam uit solidariteit met Oekraïne – Het Parool",date:"27.02.2022"},{link:"https://www.dutchnews.nl/news/2022/02/protest-against-russian-invasion-draws-thousands/",text:"Dutch protests against Russian invasion of Ukraine draws thousands - DutchNews.nl",date:"27.02.2022"},{link:"https://www.nrc.nl/nieuws/2022/02/27/demonstratie-is-succes-van-nieuwe-vredesactivisten-a4095005",text:"Oekraïneprotest is vooral het succes van nieuwe vredesactivisten - NRC",date:"27.02.2022"},{link:"https://www.nhnieuws.nl/nieuws/300265/oekraine-protest-in-amsterdam-mijn-broers-maken-molotovcocktails-tegen-tanks",text:'Oekraïne-protest in Amsterdam: "Mijn broers maken molotovcocktails tegen tanks" - NH Nieuws',date:"27.02.2022"},{link:"https://www.ad.nl/video/kanalen/haagsche-courant~c433/series/korte-reportage~s1040/demonstraties-voor-opgesloten-oppositieleider-navalny~p221675",text:"Demonstraties voor opgesloten oppositieleider Navalny – AD.nl",date:"21.04.2021",comment:"🎥"},{link:"https://www.parool.nl/wereld/massale-demonstraties-voor-navalny-ook-in-amsterdam-gaan-mensen-de-straat-op~b6bca6f1/",text:"Massale demonstraties voor Navalny, ook in Amsterdam gaan mensen de straat op – Het Parool",date:"21.04.2021"},{link:"https://drive.google.com/drive/u/0/folders/1d5Hl_HC_PZy2nj3dWQZXpBkbdqxHVpOo",text:"Photos",date:"27.02.2021",comment:"📷"},{date:"24.02.2021",link:"https://www.raamoprusland.nl/actueel/1810-russen-in-nederland-roepen-op-tot-verdergaande-sancties",text:"Russen in Nederland roepen op tot verdergaande sancties – raamoprusland.nl"},{date:"15.02.2021",link:"https://www.vice.com/nl/article/g5bnmq/fotos-demonstratie-opsluiting-navalny-rusland",text:"Foto’s van een ijskoude demonstratie tegen de vervolging van Navalny – Vice.nl"},{date:"14.02.2021",link:"https://drive.google.com/drive/folders/1R7UD_jwiuyIgpO6NUBS9Oq3jdy1Zfdpq",text:"Photos",comment:"📷"},{date:"31.01.2021",link:"https://drive.google.com/drive/folders/1zeQBD0efLAOYkUqyaMhmwwDy1F4bGM2s",text:"Photos",comment:"📷"},{date:"31.01.2021",link:"https://www.rtlnieuws.nl/nieuws/nederland/artikel/5211897/protesten-rusland-navalny-poetin-arrestaties-oppositie-vondelpark",text:"Zij willen Navalny vrij: 'Zolang Poetin blijft, kan ik niet terug naar Rusland' – RTL Nieuws"},{date:"31.01.2021",link:"https://www.youtube.com/watch?v=dSYJTWXUt4g",text:"#26 Митинг поддержки Алексея Навального в Амстердаме, 31 января. – Alex Sokolov",comment:"🎥"},{date:"31.01.2021",link:"https://www.youtube.com/watch?v=vmBGvdGH5XA",text:"Амстердам вышел в поддержку всех политзаключённых России! /#митинг​#31января – Алексей Навальный новости",comment:"🎥"},{date:"24.01.2021",link:"https://www.dutchnews.nl/news/2021/01/russians-in-nl-protest-against-navalny-arrest-in-the-hague-and-amsterdam/",text:"Russians in NL protest against Navalny arrest in The Hague and Amsterdam – DutchNews.nl"},{date:"23.01.2021",link:"https://drive.google.com/drive/folders/1qNXEaxMdVakjUzZluqvYtjI51eKqgoxe",text:"Photos",comment:"📷"},{date:"23.01.2021",link:"https://www.nu.nl/den-haag/6107611/protest-voor-russische-ambassade-in-den-haag-free-navalny.html",text:"Protest voor Russische ambassade in Den Haag: 'Free Navalny' – NU.nl"},{date:"23.01.2021",link:"https://www.ad.nl/den-haag/protest-voor-russische-ambassade-free-navalny~a04d8e08/",text:"Protest voor Russische ambassade: ‘Free Navalny’ – AD.nl"},{date:"23.01.2021",link:"https://nos.nl/video/2365607-ook-op-museumplein-demonstranten-bijeen-voor-navalny.html",text:"Ook op Museumplein demonstranten bijeen voor Navalny – NOS",comment:"🎥"},{date:"23.01.2021",link:"https://www.blikopnieuws.nl/nieuws/286288/demonstratie-voor-vrijlating-navalny-op-museumplein.html",text:"Demonstratie voor vrijlating Navalny op Museumplein – Blikopnieuws"},{date:"23.01.2021",link:"https://www.parool.nl/amsterdam/tientallen-steunbetuigers-voor-navalny-op-museumplein~bd63607a/",text:"Tientallen steunbetuigers voor Navalny op Museumplein – Het Parool"},{date:"23.01.2021",link:"https://www.youtube.com/watch?v=m29lCfIi7AY",text:"#25 Митинг поддержки Алексея Навального в Гааге. – Alex Sokolov",comment:"🎥"},{date:"23.01.2021",link:"https://www.ukrinform.ru/rubric-world/3176806-v-gaage-u-posolstva-rf-prohodit-akcia-v-podderzku-navalnogo.html",text:"В Гааге у посольства РФ проходит акция в поддержку Навального – Укринформ"}];function E(e,t,n){const a=e.slice();return a[2]=t[n].date,a[3]=t[n].text,a[4]=t[n].link,a[5]=t[n].comment,a}function S(e,t,n){const a=e.slice();return a[2]=t[n].date,a[8]=t[n].title,a[4]=t[n].link,a[5]=t[n].comment,a}function T(e,t,n){const a=e.slice();return a[8]=t[n].title,a[4]=t[n].link,a[3]=t[n].text,a}function C(e,t,n){const a=e.slice();return a[2]=t[n].date,a[8]=t[n].title,a[4]=t[n].link,a[5]=t[n].comment,a}function F(t){let n,a,o,s,i,r,c,w,v=t[2]+"",f=t[8]+"",k=t[5]&&function(t){let n,a=t[5]+"";return{c(){n=p(a)},m(e,t){d(e,n,t)},p:e,d(e){e&&u(n)}}}(t);return{c(){n=m("li"),a=p(v),o=h(),s=m("a"),i=p(f),c=h(),k&&k.c(),w=h(),g(s,"href",r=t[4])},m(e,t){d(e,n,t),l(n,a),l(n,o),l(n,s),l(s,i),l(n,c),k&&k.m(n,null),l(n,w)},p(e,t){e[5]&&k.p(e,t)},d(e){e&&u(n),k&&k.d()}}}function z(t){let n,a,o,s,i,r,c=t[3]+"",w=t[8]&&function(t){let n,a,o=t[8]+"";return{c(){n=p(o),a=p(":")},m(e,t){d(e,n,t),d(e,a,t)},p:e,d(e){e&&u(n),e&&u(a)}}}(t);return{c(){n=m("li"),w&&w.c(),a=h(),o=m("a"),s=p(c),r=h(),g(o,"href",i=t[4])},m(e,t){d(e,n,t),w&&w.m(n,null),l(n,a),l(n,o),l(o,s),l(n,r)},p(e,t){e[8]&&w.p(e,t)},d(e){e&&u(n),w&&w.d()}}}function M(t){let n,a,o,s,i,r,c,w,v=t[2]+"",f=t[8]+"",k=t[5]&&function(t){let n,a=t[5]+"";return{c(){n=p(a)},m(e,t){d(e,n,t)},p:e,d(e){e&&u(n)}}}(t);return{c(){n=m("li"),a=p(v),o=h(),s=m("a"),i=p(f),c=h(),k&&k.c(),w=h(),g(s,"href",r=t[4])},m(e,t){d(e,n,t),l(n,a),l(n,o),l(n,s),l(s,i),l(n,c),k&&k.m(n,null),l(n,w)},p(e,t){e[5]&&k.p(e,t)},d(e){e&&u(n),k&&k.d()}}}function U(t){let n,a,o,s,i,r,c,w,v=t[2]+"",f=t[3]+"",k=t[5]&&function(t){let n,a=t[5]+"";return{c(){n=p(a)},m(e,t){d(e,n,t)},p:e,d(e){e&&u(n)}}}(t);return{c(){n=m("li"),a=p(v),o=h(),s=m("a"),i=p(f),c=h(),k&&k.c(),w=h(),g(s,"href",r=t[4])},m(e,t){d(e,n,t),l(n,a),l(n,o),l(n,s),l(s,i),l(n,c),k&&k.m(n,null),l(n,w)},p(e,t){e[5]&&k.p(e,t)},d(e){e&&u(n),k&&k.d()}}}function V(t){let n,a,o,s,r,p,w,v,f,k,b,x,y,N,R,j,$,_,O,D,P,H,V,q,B,Z,I,W,Y,G,X,K,J,Q,ee,te,ne,ae,oe,se=t[0],ie=[];for(let e=0;e<se.length;e+=1)ie[e]=F(C(t,se,e));let re=L,le=[];for(let e=0;e<re.length;e+=1)le[e]=z(T(t,re,e));let de=t[1],ue=[];for(let e=0;e<de.length;e+=1)ue[e]=M(S(t,de,e));let ce=A,me=[];for(let e=0;e<ce.length;e+=1)me[e]=U(E(t,ce,e));return{c(){n=m("main"),a=m("img"),s=h(),r=m("h1"),r.textContent="Free Russia NL",p=h(),w=m("p"),w.innerHTML='Free Russia NL is een grassroots community van Russisch-sprekende inwoners\n    en burgers van Nederland. Onze gemeenschap ontstond in januari 2021, tijdens\n    de protestgolf in Rusland en daarbuiten tegen de aanhouding van Alexey\n    Navalny. Tot 24 februari 2022 telde ons telegramkanaal\n    <a href="https://t.me/FreeRussiaNL_important">https://t.me/FreeRussiaNL_important</a> rond de 300 leden. Voor ieder van ons, binnen en buiten Rusland, veranderde\n    het leven die dag drastisch. &#39;Overnight&#39; steeg ons ledenbestand tot 1200 leden\n    - voor ons een teken van grote behoefte in de Russisch-sprekende gemeenschap\n    in Nederland om zich tegen de oorlog en tegen het regime uit te spreken, steun\n    te betuigen aan Oekraïne en elkaar. Ook zien we grote belangstelling voor ons\n    standpunt vanuit de Nederlandse samenleving.',v=h(),f=m("p"),f.textContent="Gedurende de oorlogsmaanden voeren we actie, zamelen geld in voor\n    humanitaire hulp aan Oekraïne en aan de Oekraïense vluchtelingen in\n    Nederland, helpen journalisten en activisten uit Rusland die genoodzaakt\n    zijn het land te verlaten en spreken met Nederlandse media. We bereiden op\n    dit moment statuten voor om onze organisatie als stichting in Nederland te\n    registreren.",k=h(),b=m("p"),b.textContent="De doelstellingen van FreeRussiaNL Stichting zijn:",x=h(),y=m("p"),y.textContent="Het bevorderen van democratie, mensenrechten en de rechtsstaat, in het\n    algemeen, meer in het bijzonder:",N=h(),R=m("ul"),R.innerHTML="<li>democratische waarden, -normen en -aanpak, met inbegrip van vrije\n      verkiezingen;</li> \n    <li>mensenrechten, waaronder vrijheid van meningsuiting, vrijheid van\n      vergadering en vereniging, vrijheid van gedachten en van geweten;</li> \n    <li>tolerantie en non-discriminatie;</li> \n    <li>rechtsstaat en onafhankelijkheid van de rechterlijke macht.</li>",j=h(),$=m("p"),$.textContent="Het bijeenbrengen en ondersteunen van de in Nederland en Europa gevestigde\n    Russischtalige gemeenschap die de bovengenoemde waarden deelt.",_=h(),O=m("h2"),O.innerHTML='<a href="https://solidarity.support">Support independent russian media and human rights defenders –\n      https://solidarity.support</a>',D=h(),P=m("h2"),P.textContent="Upcoming events",H=h(),V=m("ul");for(let e=0;e<ie.length;e+=1)ie[e].c();q=h(),B=m("h2"),B.textContent="Petitions",Z=h(),I=m("ul"),I.innerHTML='<li>Petition to the MPs of the Netherlands\n      <ul style="margin-top: 0.5em"><li><strong><a href="https://www.petitie24.nl/petitie/3532/maak-europa-vrij-van-corruptiegeld-uit-rusland">Dutch – sign here!</a></strong></li> \n        <li><a href="/docs/petition_en.pdf">English</a></li> \n        <li><a href="/docs/petition_ru.pdf">Russian</a></li></ul></li>',W=h(),Y=m("h2"),Y.textContent="Links",G=h(),X=m("ul");for(let e=0;e<le.length;e+=1)le[e].c();K=h(),J=m("h2"),J.textContent="Past events",Q=h(),ee=m("ul");for(let e=0;e<ue.length;e+=1)ue[e].c();te=h(),ne=m("h2"),ne.textContent="Press and media",ae=h(),oe=m("ul");for(let e=0;e<me.length;e+=1)me[e].c();var e,t;e=a.src,t=o="/images/logo.png",i||(i=document.createElement("a")),i.href=t,e!==i.href&&g(a,"src","/images/logo.png"),g(a,"width","128"),g(a,"height","128"),g(a,"alt","Free Russia NL logo")},m(e,t){d(e,n,t),l(n,a),l(n,s),l(n,r),l(n,p),l(n,w),l(n,v),l(n,f),l(n,k),l(n,b),l(n,x),l(n,y),l(n,N),l(n,R),l(n,j),l(n,$),l(n,_),l(n,O),l(n,D),l(n,P),l(n,H),l(n,V);for(let e=0;e<ie.length;e+=1)ie[e].m(V,null);l(n,q),l(n,B),l(n,Z),l(n,I),l(n,W),l(n,Y),l(n,G),l(n,X);for(let e=0;e<le.length;e+=1)le[e].m(X,null);l(n,K),l(n,J),l(n,Q),l(n,ee);for(let e=0;e<ue.length;e+=1)ue[e].m(ee,null);l(n,te),l(n,ne),l(n,ae),l(n,oe);for(let e=0;e<me.length;e+=1)me[e].m(oe,null)},p(e,[t]){if(1&t){let n;for(se=e[0],n=0;n<se.length;n+=1){const a=C(e,se,n);ie[n]?ie[n].p(a,t):(ie[n]=F(a),ie[n].c(),ie[n].m(V,null))}for(;n<ie.length;n+=1)ie[n].d(1);ie.length=se.length}if(0&t){let n;for(re=L,n=0;n<re.length;n+=1){const a=T(e,re,n);le[n]?le[n].p(a,t):(le[n]=z(a),le[n].c(),le[n].m(X,null))}for(;n<le.length;n+=1)le[n].d(1);le.length=re.length}if(2&t){let n;for(de=e[1],n=0;n<de.length;n+=1){const a=S(e,de,n);ue[n]?ue[n].p(a,t):(ue[n]=M(a),ue[n].c(),ue[n].m(ee,null))}for(;n<ue.length;n+=1)ue[n].d(1);ue.length=de.length}if(0&t){let n;for(ce=A,n=0;n<ce.length;n+=1){const a=E(e,ce,n);me[n]?me[n].p(a,t):(me[n]=U(a),me[n].c(),me[n].m(oe,null))}for(;n<me.length;n+=1)me[n].d(1);me.length=ce.length}},i:e,o:e,d(e){e&&u(n),c(ie,e),c(le,e),c(ue,e),c(me,e)}}}function q(e){const{upcomingEvents:t,pastEvents:n}=H.reduce(((e,t)=>{const n=new Date,[a,o,s,i]=t.date.match(/(\d\d)\.(\d\d)\.(\d\d\d\d)/);return n.getFullYear()<=Number(i)&&n.getMonth()+1<=Number(s)&&n.getDate()<=Number(o)?Object.assign(Object.assign({},e),{upcomingEvents:[...e.upcomingEvents,t]}):Object.assign(Object.assign({},e),{pastEvents:[...e.pastEvents,t]})}),{upcomingEvents:[],pastEvents:[]});return[t,n]}return new class extends class{$destroy(){!function(e,t){const n=e.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}{constructor(e){super(),P(this,e,q,V,s,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
