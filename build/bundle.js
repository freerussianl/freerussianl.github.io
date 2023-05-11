var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function a(e){e.forEach(t)}function i(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function s(e,t){e.appendChild(t)}function r(e,t,n){e.insertBefore(t,n||null)}function l(e){e.parentNode.removeChild(e)}function d(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function c(e){return document.createElement(e)}function u(e){return document.createTextNode(e)}function m(){return u(" ")}function p(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}let h;function g(e){h=e}const w=[],f=[],v=[],k=[],b=Promise.resolve();let y=!1;function _(e){v.push(e)}const x=new Set;let N=0;function R(){const e=h;do{for(;N<w.length;){const e=w[N];N++,g(e),j(e.$$)}for(g(null),w.length=0,N=0;f.length;)f.pop()();for(let e=0;e<v.length;e+=1){const t=v[e];x.has(t)||(x.add(t),t())}v.length=0}while(w.length);for(;k.length;)k.pop()();y=!1,x.clear(),g(e)}function j(e){if(null!==e.fragment){e.update(),a(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(_)}}const P=new Set;function A(e,t){-1===e.$$.dirty[0]&&(w.push(e),y||(y=!0,b.then(R)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function H(o,s,r,d,c,u,m,p=[-1]){const w=h;g(o);const f=o.$$={fragment:null,ctx:null,props:u,update:e,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(w?w.$$.context:[])),callbacks:n(),dirty:p,skip_bound:!1,root:s.target||w.$$.root};m&&m(f.root);let v=!1;if(f.ctx=r?r(o,s.props||{},((e,t,...n)=>{const a=n.length?n[0]:t;return f.ctx&&c(f.ctx[e],f.ctx[e]=a)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](a),v&&A(o,e)),t})):[],f.update(),v=!0,a(f.before_update),f.fragment=!!d&&d(f.ctx),s.target){if(s.hydrate){const e=function(e){return Array.from(e.childNodes)}(s.target);f.fragment&&f.fragment.l(e),e.forEach(l)}else f.fragment&&f.fragment.c();s.intro&&((k=o.$$.fragment)&&k.i&&(P.delete(k),k.i(b))),function(e,n,o,s){const{fragment:r,on_mount:l,on_destroy:d,after_update:c}=e.$$;r&&r.m(n,o),s||_((()=>{const n=l.map(t).filter(i);d?d.push(...n):a(n),e.$$.on_mount=[]})),c.forEach(_)}(o,s.target,s.anchor,s.customElement),R()}var k,b;g(w)}var L=[{date:"13.05.2023",title:"Letters to political prisoners",link:"https://www.instagram.com/p/CsEDGkotoR_"},{date:"30.04.2023",title:"Неудобное прошлое: депортация калмыков",link:"https://fb.me/e/3Bn311FYr"},{date:"25.02.2023",title:"Concert ’WHO AM I?’ in collaboration with ’Music for Peace’",link:"https://www.tickettailor.com/events/stichtingmusicforpeace/840820?fbclid=PAAaZhFAgsnw-_9OsgPQC7CK_RFNyRQ44yAieH6AKdgP_vQyLD_l0ukYE0rf0"},{date:"25.02.2023",title:"Cultural event 'Who am I?'",link:"https://www.facebook.com/100069317585368/posts/493706829616566/"},{date:"25.02.2023",title:"Worldwide anti-war rally: Victory to Ukraine! Freedom to Russia!",link:"https://www.facebook.com/events/1253490478573644"},{date:"21.01.2023",title:"#FreePoliticalPrisoners",link:"https://freerussians.net"},{date:"26.11.2022",title:"Discussion with Angelina Davydova",link:"https://www.facebook.com/100069317585368/posts/432774775709772/"},{date:"07.11.2022",title:"The role of Russian investigation journalism in today’s society",link:"https://facebook.com/events/3254110124826534"},{date:"29.10.2022",title:"Returning the names (with Memorial)",link:"https://www.facebook.com/100069317585368/posts/424014086585841/"},{date:"14.10.2022",title:"Benefietconcert voor Oekraïne Maya Fridman & Stichting Free Russia NL",link:"https://dewaalsekerk.nl/agenda/22-10/maya-fridman-stichting-free-russia-nl/14okt/"},{date:"24.09.2022",title:"Demonstration against referendums on occupied territories of Ukraine and against new “war and mobilization” laws in Russian Federation",link:"https://facebook.com/events/s/against-referendums-on-occupie/402079432100166/"},{date:"25.06.2022",title:"Lecture by Anna Fenko Is there a treatment for propaganda?",link:"https://youtu.be/amQQ5D1Ysz4"},{date:"12.06.2022",title:"Anti-war demo in Amsterdam Russians against war",link:"https://youtu.be/n4QuLHWzlKI"},{date:"05.06.2022",title:"Вечер писем для политических заключённых России (Utrecht)",link:"https://www.facebook.com/photo?fbid=319962906990960&set=a.103430181977568"},{date:"08.05.2022",title:"Последний парад Путина, Putin’s last parade (Den Haag)",link:"https://www.facebook.com/events/322351716706706/"},{date:"09.04.2022",title:"Bucha (Amsterdam)",link:"https://www.facebook.com/events/722296768774205/"},{date:"20.03.2022",title:"Нет войне! Диктаторов под трибунал! No to war! Tribunal for dictators! (Den Haag)",link:"https://www.facebook.com/events/488868512866007/"},{date:"05.03.2022",title:"Stop the war! Russia against Putin (Den Haag)",link:"https://www.facebook.com/events/289794243259194/"},{date:"27.02.2022",link:"https://www.facebook.com/events/679915576620268/",title:"Protest against war in Ukraine. Putin is not Russia! (Amsterdam)"},{date:"20.05.2021",link:"https://www.facebook.com/events/133718905452045/",title:"Solidarity protest by people of Russia & Belarus (Den Haag)"},{date:"21.04.2021",link:"https://www.facebook.com/events/177790280863463/",title:"Save Navalny - Demand Dutch government to call Putin now (Amsterdam)"},{date:"21.04.2021",link:"https://www.facebook.com/events/598584374408911/",title:"Save Navalny - Demand Dutch government to call Putin now (Den Haag)"},{date:"27.02.2021",link:"https://www.facebook.com/events/417280949339953/",title:"День памяти Немцова - Амстердам 27.02"},{date:"27.02.2021",link:"https://www.facebook.com/events/2832246390368150/",title:"День памяти Немцова - Гаага 27.02"},{date:"14.02.2021",link:"https://www.facebook.com/events/430514734926328",title:"#StopSupportingTyranny in Russia - Amsterdam 14-02"},{date:"07.02.2021",link:"https://www.facebook.com/events/173917477826273/",title:"#StopSupportingTyranny in Russia - Den Haag 07-02",comment:"Cancelled because of the severe weather conditions."},{date:"31.01.2021",link:"https://www.facebook.com/events/232258351886915",title:"#FreeNavalny in Amsterdam 31-01 (Vondelpark у памятника Vondel)"},{date:"23.01.2021",link:"https://www.facebook.com/events/188856476260014",title:"Free Navalny / Свободу Алексею Навальному! (Амстердам, максимум 200 человек)"},{date:"23.01.2021",link:"https://www.facebook.com/events/1597452923788850",title:"Free Navalny / Свободу Алексею Навальному! (Гаага, максимум 100 человек)"}],$=[{title:"Concert ’WHO AM I?’",link:"https://www.tickettailor.com/events/stichtingmusicforpeace/840820?fbclid=PAAaZhFAgsnw-_9OsgPQC7CK_RFNyRQ44yAieH6AKdgP_vQyLD_l0ukYE0rf0",text:"Tickets and info"},{title:"Instagram",link:"https://instagram.com/freerussia.nl",text:"https://instagram.com/freerussia.nl"},{title:"Facebook",link:"https://facebook.com/FreeRussiaNL",text:"https://facebook.com/FreeRussiaNL"},{title:"Telegram channel",link:"https://t.me/FreeRussiaNL",text:"@FreeRussiaNL"},{title:"Telegram chat",link:"https://t.me/freerussia_nl_chat",text:"@https://t.me/freerussia_nl_chat"},{title:"Twitter",link:"https://twitter.com/russia_nl",text:"@russia_nl"},{link:"mailto:info@freerussia.nl",text:"info@freerussia.nl"},{title:"New YouTube channel with featured videos by our Video/audio Executive Editor Nikolai Martynenko",link:"https://www.youtube.com/channel/UCU9wy4JM-OagJfIhWI4U9MA",text:"YouTube"}],D=[{link:"https://op1npo.nl/2022/09/21/pieter-waterdrinker-mart-de-kruif-en-kristina-petrasova-over-de-militaire-mobilisatie-in-rusland/",text:"Toespraak Poetin is escalatie van president in het nauw",date:"22.09.2022",comment:"🎥"},{link:"https://www.vice.com/amp/nl/article/epxema/poetin-symbolisch-berecht-demonstratie",text:"Vladimir Poetin werd symbolisch berecht door activisten in Den Haag - Vice",date:"09.05.2022"},{link:"https://nos.nl/video/2428013-russen-protesteren-in-nederland-tegen-poetin-tijd-om-een-kant-te-kiezen",text:"Russen protesteren in Nederland tegen Poetin: 'Tijd om een kant te kiezen' - NOS",date:"08.05.2022"},{link:"https://www.trouw.nl/binnenland/in-den-haag-demonstreren-russen-tegen-de-oorlog-dit-is-de-enige-mogelijkheid-voor-ons-om-wat-te-doen~b579e6bb/",text:"In Den Haag demonstreren Russen tegen de oorlog: ‘Dit is de enige mogelijkheid voor ons om wat te doen’ - Trouw",date:"05.03.2022"},{link:"https://www.npostart.nl/nos-journaal/05-03-2022/POW_05159124",text:"NOS Journaal",date:"05.03.2022",comment:"🎥"},{link:"https://www.rtlnieuws.nl/nieuws/video/video/5292755/rusland-poetin-demonstratie-den-haag-ambassade-oorlog-oekraine",text:"Russische Vanya (18) demonstreerde bij ambassade tegen oorlog in Oekraïne: 'Ik ben bang' - RTL Nieuws",date:"05.03.2022",comment:"🎥"},{link:"https://www.vpro.nl/programmas/bureau-buitenland/speel~PREPR_RA1_16833563~russisch-tegengeluid-in-nederland~.html",text:"Russisch tegengeluid in Nederland - VPRO",date:"03.03.2022",comment:"🎵"},{link:"https://kro-ncrv.nl/we-staan-altijd-naast-de-oekrainers",text:"'Wij Russen zijn tegen de oorlog, we staan altijd naast de Oekraïners', aldus de Russische Vera - KRO-NCRV",date:"28.02.2022",comment:"🎥"},{link:"https://www.parool.nl/amsterdam/zeker-15-000-demonstranten-op-de-dam-uit-solidariteit-met-oekraine~bf39f906/",text:"Zeker 15.000 demonstranten op de Dam uit solidariteit met Oekraïne - Het Parool",date:"27.02.2022"},{link:"https://www.dutchnews.nl/news/2022/02/protest-against-russian-invasion-draws-thousands/",text:"Dutch protests against Russian invasion of Ukraine draws thousands - DutchNews.nl",date:"27.02.2022"},{link:"https://www.nrc.nl/nieuws/2022/02/27/demonstratie-is-succes-van-nieuwe-vredesactivisten-a4095005",text:"Oekraïneprotest is vooral het succes van nieuwe vredesactivisten - NRC",date:"27.02.2022"},{link:"https://www.nhnieuws.nl/nieuws/300265/oekraine-protest-in-amsterdam-mijn-broers-maken-molotovcocktails-tegen-tanks",text:'Oekraïne-protest in Amsterdam: "Mijn broers maken molotovcocktails tegen tanks" - NH Nieuws',date:"27.02.2022"},{link:"https://www.ad.nl/video/kanalen/haagsche-courant~c433/series/korte-reportage~s1040/demonstraties-voor-opgesloten-oppositieleider-navalny~p221675",text:"Demonstraties voor opgesloten oppositieleider Navalny - AD.nl",date:"21.04.2021",comment:"🎥"},{link:"https://www.parool.nl/wereld/massale-demonstraties-voor-navalny-ook-in-amsterdam-gaan-mensen-de-straat-op~b6bca6f1/",text:"Massale demonstraties voor Navalny, ook in Amsterdam gaan mensen de straat op - Het Parool",date:"21.04.2021"},{link:"https://drive.google.com/drive/u/0/folders/1d5Hl_HC_PZy2nj3dWQZXpBkbdqxHVpOo",text:"Photos",date:"27.02.2021",comment:"📷"},{date:"24.02.2021",link:"https://www.raamoprusland.nl/actueel/1810-russen-in-nederland-roepen-op-tot-verdergaande-sancties",text:"Russen in Nederland roepen op tot verdergaande sancties - raamoprusland.nl"},{date:"15.02.2021",link:"https://www.vice.com/nl/article/g5bnmq/fotos-demonstratie-opsluiting-navalny-rusland",text:"Foto’s van een ijskoude demonstratie tegen de vervolging van Navalny - Vice"},{date:"31.01.2021",link:"https://drive.google.com/drive/folders/1zeQBD0efLAOYkUqyaMhmwwDy1F4bGM2s",text:"Photos",comment:"📷"},{date:"31.01.2021",link:"https://www.rtlnieuws.nl/nieuws/nederland/artikel/5211897/protesten-rusland-navalny-poetin-arrestaties-oppositie-vondelpark",text:"Zij willen Navalny vrij: 'Zolang Poetin blijft, kan ik niet terug naar Rusland' - RTL Nieuws"},{date:"31.01.2021",link:"https://www.youtube.com/watch?v=dSYJTWXUt4g",text:"#26 Митинг поддержки Алексея Навального в Амстердаме, 31 января. - Alex Sokolov",comment:"🎥"},{date:"31.01.2021",link:"https://www.youtube.com/watch?v=vmBGvdGH5XA",text:"Амстердам вышел в поддержку всех политзаключённых России! /#митинг​#31января - Алексей Навальный новости",comment:"🎥"},{date:"24.01.2021",link:"https://www.dutchnews.nl/news/2021/01/russians-in-nl-protest-against-navalny-arrest-in-the-hague-and-amsterdam/",text:"Russians in NL protest against Navalny arrest in The Hague and Amsterdam - DutchNews.nl"},{date:"23.01.2021",link:"https://drive.google.com/drive/folders/1qNXEaxMdVakjUzZluqvYtjI51eKqgoxe",text:"Photos",comment:"📷"},{date:"23.01.2021",link:"https://www.nu.nl/den-haag/6107611/protest-voor-russische-ambassade-in-den-haag-free-navalny.html",text:"Protest voor Russische ambassade in Den Haag: 'Free Navalny' - NU.nl"},{date:"23.01.2021",link:"https://www.ad.nl/den-haag/protest-voor-russische-ambassade-free-navalny~a04d8e08/",text:"Protest voor Russische ambassade: ‘Free Navalny’ - AD.nl"},{date:"23.01.2021",link:"https://nos.nl/video/2365607-ook-op-museumplein-demonstranten-bijeen-voor-navalny.html",text:"Ook op Museumplein demonstranten bijeen voor Navalny - NOS",comment:"🎥"},{date:"23.01.2021",link:"https://www.blikopnieuws.nl/nieuws/286288/demonstratie-voor-vrijlating-navalny-op-museumplein.html",text:"Demonstratie voor vrijlating Navalny op Museumplein - Blikopnieuws"},{date:"23.01.2021",link:"https://www.parool.nl/amsterdam/tientallen-steunbetuigers-voor-navalny-op-museumplein~bd63607a/",text:"Tientallen steunbetuigers voor Navalny op Museumplein - Het Parool"},{date:"23.01.2021",link:"https://www.youtube.com/watch?v=m29lCfIi7AY",text:"#25 Митинг поддержки Алексея Навального в Гааге. - Alex Sokolov",comment:"🎥"},{date:"23.01.2021",link:"https://www.ukrinform.ru/rubric-world/3176806-v-gaage-u-posolstva-rf-prohodit-akcia-v-podderzku-navalnogo.html",text:"В Гааге у посольства РФ проходит акция в поддержку Навального - Укринформ"}];function O(e,t,n){const a=e.slice();return a[2]=t[n].date,a[3]=t[n].text,a[4]=t[n].link,a[5]=t[n].comment,a}function T(e,t,n){const a=e.slice();return a[2]=t[n].date,a[8]=t[n].title,a[4]=t[n].link,a[5]=t[n].comment,a}function M(e,t,n){const a=e.slice();return a[8]=t[n].title,a[4]=t[n].link,a[3]=t[n].text,a}function F(e,t,n){const a=e.slice();return a[2]=t[n].date,a[8]=t[n].title,a[4]=t[n].link,a[5]=t[n].comment,a}function C(t){let n,a,i,o,d,h,g,w,f=t[2]+"",v=t[8]+"",k=t[5]&&function(t){let n,a=t[5]+"";return{c(){n=u(a)},m(e,t){r(e,n,t)},p:e,d(e){e&&l(n)}}}(t);return{c(){n=c("li"),a=u(f),i=m(),o=c("a"),d=u(v),g=m(),k&&k.c(),w=m(),p(o,"href",h=t[4])},m(e,t){r(e,n,t),s(n,a),s(n,i),s(n,o),s(o,d),s(n,g),k&&k.m(n,null),s(n,w)},p(e,t){e[5]&&k.p(e,t)},d(e){e&&l(n),k&&k.d()}}}function S(t){let n,a,i,o,d,h,g=t[3]+"",w=t[8]&&function(t){let n,a,i=t[8]+"";return{c(){n=u(i),a=u(":")},m(e,t){r(e,n,t),r(e,a,t)},p:e,d(e){e&&l(n),e&&l(a)}}}(t);return{c(){n=c("li"),w&&w.c(),a=m(),i=c("a"),o=u(g),h=m(),p(i,"href",d=t[4])},m(e,t){r(e,n,t),w&&w.m(n,null),s(n,a),s(n,i),s(i,o),s(n,h)},p(e,t){e[8]&&w.p(e,t)},d(e){e&&l(n),w&&w.d()}}}function z(t){let n,a,i,o,d,h,g,w,f=t[2]+"",v=t[8]+"",k=t[5]&&function(t){let n,a=t[5]+"";return{c(){n=u(a)},m(e,t){r(e,n,t)},p:e,d(e){e&&l(n)}}}(t);return{c(){n=c("li"),a=u(f),i=m(),o=c("a"),d=u(v),g=m(),k&&k.c(),w=m(),p(o,"href",h=t[4])},m(e,t){r(e,n,t),s(n,a),s(n,i),s(n,o),s(o,d),s(n,g),k&&k.m(n,null),s(n,w)},p(e,t){e[5]&&k.p(e,t)},d(e){e&&l(n),k&&k.d()}}}function E(t){let n,a,i,o,d,h,g,w,f=t[2]+"",v=t[3]+"",k=t[5]&&function(t){let n,a=t[5]+"";return{c(){n=u(a)},m(e,t){r(e,n,t)},p:e,d(e){e&&l(n)}}}(t);return{c(){n=c("li"),a=u(f),i=m(),o=c("a"),d=u(v),g=m(),k&&k.c(),w=m(),p(o,"href",h=t[4])},m(e,t){r(e,n,t),s(n,a),s(n,i),s(n,o),s(o,d),s(n,g),k&&k.m(n,null),s(n,w)},p(e,t){e[5]&&k.p(e,t)},d(e){e&&l(n),k&&k.d()}}}function B(t){let n,a,i,o,u,h,g,w,f,v,k,b,y,_,x,N,R,j,P,A,H,L,B,I,U,V,Y,Q,W,K,Z,q,G,J,X,ee,te,ne,ae,ie,oe,se,re,le,de,ce,ue,me,pe,he,ge,we,fe,ve,ke,be,ye,_e,xe,Ne,Re,je,Pe=t[0],Ae=[];for(let e=0;e<Pe.length;e+=1)Ae[e]=C(F(t,Pe,e));let He=$,Le=[];for(let e=0;e<He.length;e+=1)Le[e]=S(M(t,He,e));let $e=t[1],De=[];for(let e=0;e<$e.length;e+=1)De[e]=z(T(t,$e,e));let Oe=D,Te=[];for(let e=0;e<Oe.length;e+=1)Te[e]=E(O(t,Oe,e));return{c(){n=c("main"),a=c("header"),a.innerHTML='<img src="/images/logo_rainbow.png" width="128" height="128" alt="Free Russia NL logo"/> \n    <h1>Free Russia NL</h1>',i=m(),o=c("p"),o.innerHTML='<a href="/docs/open_brief_aan_de_Nederlandse_regering,_aan_de_Staatssecretaris_nl.pdf">Oproep tot een genuanceerd immigratiebeleid voor de Russische burgers die\n      onder de voortdurende mobilisatie in Rusland vallen.</a>',u=m(),h=c("p"),h.innerHTML='<a href="/docs/beleidsplan_2022-2024.pdf">Beleidsplan 2022-2024</a>',g=m(),w=c("p"),w.innerHTML='<a href="/statement">Statement van FreeRussiaNL n.a.v. de Schengen visa-vraagstuk voor burgers\n      van Russische Federatie</a>',f=m(),v=c("p"),v.innerHTML='Free Russia NL is een grassroots community van Russisch-sprekende inwoners\n    en burgers van Nederland. Onze gemeenschap ontstond in januari 2021, tijdens\n    de protestgolf in Rusland en daarbuiten tegen de aanhouding van Alexey\n    Navalny. Tot 24 februari 2022 telde ons telegramkanaal\n    <a href="https://t.me/FreeRussiaNL">https://t.me/FreeRussiaNL</a> rond de 300\n    leden. Voor ieder van ons, binnen en buiten Rusland, veranderde het leven die\n    dag drastisch. &#39;Overnight&#39; steeg ons ledenbestand tot 1200 leden - voor ons een\n    teken van grote behoefte in de Russisch-sprekende gemeenschap in Nederland om\n    zich tegen de oorlog en tegen het regime uit te spreken, steun te betuigen aan\n    Oekraïne en elkaar. Ook zien we grote belangstelling voor ons standpunt vanuit\n    de Nederlandse samenleving.',k=m(),b=c("p"),b.textContent="Gedurende de oorlogsmaanden voeren we actie, zamelen geld in voor\n    humanitaire hulp aan Oekraïne en aan de Oekraïense vluchtelingen in\n    Nederland, helpen journalisten en activisten uit Rusland die genoodzaakt\n    zijn het land te verlaten en spreken met Nederlandse media. In juni 2022\n    hebben we onze organisatie als stichting in Nederland geregistreerd:",y=m(),_=c("p"),_.innerHTML="<b>Beneficiary name:</b>  <code>Free Russia Nederland</code>",x=m(),N=c("p"),N.innerHTML="<b>IBAN:</b>  <code>NL20ABNA0113016549</code>",R=m(),j=c("p"),j.textContent="Wij zijn een ANBI Stichting (KvK nummer: 86836935)",P=m(),A=c("p"),A.innerHTML='<a href="https://freerussia.nl/tikkie">Doneer via tikkie</a>',H=m(),L=c("form"),L.innerHTML='<input type="hidden" name="hosted_button_id" value="CQ4S4K5TN8RY8"/> \n    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button"/> \n    <img alt="" src="https://www.paypal.com/en_NL/i/scr/pixel.gif" width="1" height="1"/>',B=m(),I=c("p"),I.textContent="Bestuursleden:",U=m(),V=c("ul"),V.innerHTML="<li>Svetlana Pylaeva (voorzitter)</li> \n    <li>Kristina Petrasova (secretaris)</li> \n    <li>Ira Heuvelman (penningmeester)</li>",Y=m(),Q=c("p"),Q.textContent="Press enquiries: press@freerussia.nl",W=m(),K=c("p"),K.textContent="De doelstellingen van FreeRussiaNL Stichting zijn:",Z=m(),q=c("p"),q.textContent="Het bevorderen van democratie, mensenrechten en de rechtsstaat, in het\n    algemeen, meer in het bijzonder:",G=m(),J=c("ul"),J.innerHTML="<li>democratische waarden, -normen en -aanpak, met inbegrip van vrije\n      verkiezingen;</li> \n    <li>mensenrechten, waaronder vrijheid van meningsuiting, vrijheid van\n      vergadering en vereniging, vrijheid van gedachten en van geweten;</li> \n    <li>tolerantie en non-discriminatie;</li> \n    <li>rechtsstaat en onafhankelijkheid van de rechterlijke macht.</li>",X=m(),ee=c("p"),ee.textContent="Het bijeenbrengen en ondersteunen van de in Nederland en Europa gevestigde\n    Russischtalige gemeenschap die de bovengenoemde waarden deelt.",te=m(),ne=c("h2"),ne.innerHTML='<a href="https://solidarity.support">Support independent russian media and human rights defenders –\n      https://solidarity.support</a>',ae=m(),ie=c("h2"),ie.textContent="Upcoming events",oe=m(),se=c("ul");for(let e=0;e<Ae.length;e+=1)Ae[e].c();re=m(),le=c("h2"),le.textContent="Petitions",de=m(),ce=c("ul"),ce.innerHTML='<li><a href="/docs/open_brief_aan_de_Nederlandse_regering,_aan_de_Staatssecretaris_nl.pdf">Oproep tot een genuanceerd immigratiebeleid voor de Russische burgers\n        die onder de voortdurende mobilisatie in Rusland vallen.</a></li> \n    <li><a href="/docs/Call_to_introduce_a_nuanced_immigration_policy_for_the_Russian_citizens.pdf">Call to introduce a nuanced immigration policy for the Russian citizens\n        falling under conscription policies</a></li> \n    <li><a href="/docs/Oproep_voor_tijdelijk_migratiebeleid_voor_Russische_ballingen_in.pdf">Open letter to Ministers Hoekstra, Yeşilgöz-Zegerius and Bruins Slot.\n        Call for Temporary Migration Policy for Russian Exiles in Wartime</a></li> \n    <li>Petition to the MPs of the Netherlands\n      <ul style="margin-top: 0.5em"><li><strong><a href="https://www.petitie24.nl/petitie/3532/maak-europa-vrij-van-corruptiegeld-uit-rusland">Dutch – sign here!</a></strong></li> \n        <li><a href="/docs/petition_en.pdf">English</a></li> \n        <li><a href="/docs/petition_ru.pdf">Russian</a></li></ul></li>',ue=m(),me=c("h2"),me.textContent="Links",pe=m(),he=c("ul");for(let e=0;e<Le.length;e+=1)Le[e].c();ge=m(),we=c("h2"),we.textContent="Past events",fe=m(),ve=c("ul");for(let e=0;e<De.length;e+=1)De[e].c();ke=m(),be=c("h2"),be.textContent="Press and media",ye=m(),_e=c("ul");for(let e=0;e<Te.length;e+=1)Te[e].c();xe=m(),Ne=c("hr"),Re=m(),je=c("a"),je.innerHTML='<img src="./images/logo-anbi.svg" width="53" alt="anbi logo"/>',p(a,"class","svelte-12bndcm"),p(L,"action","https://www.paypal.com/donate"),p(L,"method","post"),p(L,"target","_top"),p(je,"href","https://www.belastingdienst.nl/wps/wcm/connect/nl/aftrek-en-kortingen/content/anbi-status-controleren")},m(e,t){r(e,n,t),s(n,a),s(n,i),s(n,o),s(n,u),s(n,h),s(n,g),s(n,w),s(n,f),s(n,v),s(n,k),s(n,b),s(n,y),s(n,_),s(n,x),s(n,N),s(n,R),s(n,j),s(n,P),s(n,A),s(n,H),s(n,L),s(n,B),s(n,I),s(n,U),s(n,V),s(n,Y),s(n,Q),s(n,W),s(n,K),s(n,Z),s(n,q),s(n,G),s(n,J),s(n,X),s(n,ee),s(n,te),s(n,ne),s(n,ae),s(n,ie),s(n,oe),s(n,se);for(let e=0;e<Ae.length;e+=1)Ae[e].m(se,null);s(n,re),s(n,le),s(n,de),s(n,ce),s(n,ue),s(n,me),s(n,pe),s(n,he);for(let e=0;e<Le.length;e+=1)Le[e].m(he,null);s(n,ge),s(n,we),s(n,fe),s(n,ve);for(let e=0;e<De.length;e+=1)De[e].m(ve,null);s(n,ke),s(n,be),s(n,ye),s(n,_e);for(let e=0;e<Te.length;e+=1)Te[e].m(_e,null);s(n,xe),s(n,Ne),s(n,Re),s(n,je)},p(e,[t]){if(1&t){let n;for(Pe=e[0],n=0;n<Pe.length;n+=1){const a=F(e,Pe,n);Ae[n]?Ae[n].p(a,t):(Ae[n]=C(a),Ae[n].c(),Ae[n].m(se,null))}for(;n<Ae.length;n+=1)Ae[n].d(1);Ae.length=Pe.length}if(0&t){let n;for(He=$,n=0;n<He.length;n+=1){const a=M(e,He,n);Le[n]?Le[n].p(a,t):(Le[n]=S(a),Le[n].c(),Le[n].m(he,null))}for(;n<Le.length;n+=1)Le[n].d(1);Le.length=He.length}if(2&t){let n;for($e=e[1],n=0;n<$e.length;n+=1){const a=T(e,$e,n);De[n]?De[n].p(a,t):(De[n]=z(a),De[n].c(),De[n].m(ve,null))}for(;n<De.length;n+=1)De[n].d(1);De.length=$e.length}if(0&t){let n;for(Oe=D,n=0;n<Oe.length;n+=1){const a=O(e,Oe,n);Te[n]?Te[n].p(a,t):(Te[n]=E(a),Te[n].c(),Te[n].m(_e,null))}for(;n<Te.length;n+=1)Te[n].d(1);Te.length=Oe.length}},i:e,o:e,d(e){e&&l(n),d(Ae,e),d(Le,e),d(De,e),d(Te,e)}}}function I(e){const{upcomingEvents:t,pastEvents:n}=L.reduce(((e,t)=>{const n=new Date,[a,i,o,s]=t.date.match(/(\d\d)\.(\d\d)\.(\d\d\d\d)/);return n.getFullYear()<=Number(s)&&n.getMonth()+1<=Number(o)&&n.getDate()<=Number(i)?Object.assign(Object.assign({},e),{upcomingEvents:[...e.upcomingEvents,t]}):Object.assign(Object.assign({},e),{pastEvents:[...e.pastEvents,t]})}),{upcomingEvents:[],pastEvents:[]});return[t,n]}return new class extends class{$destroy(){!function(e,t){const n=e.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}{constructor(e){super(),H(this,e,I,B,o,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
