(function(e){function t(t){for(var n,i,o=t[0],l=t[1],c=t[2],m=0,p=[];m<o.length;m++)i=o[m],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,o=1;o<r.length;o++){var l=r[o];0!==a[l]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},s=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/tp-utviklerportalen/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"044b":function(e,t,r){},"077a":function(e,t,r){e.exports=r.p+"img/sms.254857be.png"},"0d03":function(e,t,r){},"0d26":function(e,t,r){"use strict";var n=r("d495"),a=r.n(n);a.a},"212f":function(e,t,r){"use strict";var n=r("8f53"),a=r.n(n);a.a},"30df":function(e,t,r){e.exports=r.p+"img/epost.0e61c967.png"},3521:function(e,t,r){"use strict";var n=r("b7ec"),a=r.n(n);a.a},"45a6":function(e,t,r){"use strict";var n=r("f652"),a=r.n(n);a.a},"561f":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header"),r("router-view",{staticClass:"content"}),r("Footer")],1)},s=[],i=r("f564"),o={components:{Header:i["Header"],Footer:i["Footer"]}},l=o,c=(r("5c0b"),r("2877")),u=Object(c["a"])(l,a,s,!1,null,null,null),m=u.exports,p=r("8c4f"),v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("h1",[e._v("Utviklerportalen")]),r("Profile"),r("br"),r("br"),e._m(0),r("br"),r("br"),r("h2",[e._v("Apier")]),r("Apis",{on:{setActive:function(t){e.active=!0}}}),r("br"),r("br"),r("Interactive",{attrs:{active:e.active}}),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("Martin")],1)},d=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"api-text"},[r("div",{staticClass:"wrapper"},[r("h2",[e._v("API")]),r("p",[e._v(" Et API er en strukturert måte å overføre data fra ett sted til et annet, det vil si en enkel måte å dele og ta i bruk data fra de ulike virksomhetene i kommunen. Om du velger å dele et API i katalogen vil du kunne holde oversikt over både hvor mange det er som bruker det i tillegg til å kunne styre hvem som skal ha tilgang til API-et. For de som vil benytte seg av et eller flere API fra katalogen inneholder de all dokumentasjonen som man trenger for å ta det i bruk. ")])])])}],f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Martin"},[r("h2",[e._v("Jeg trenger hjelp!")]),e._m(0),r("div",{staticClass:"input-container"},[r("div",{staticClass:"wrapper"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{type:"text",placeholder:"Skriv din melding her"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),r("br"),r("BaseButton",{attrs:{primary:""},on:{click:e.post_to_slack}},[e._v("Send melding til Utviklerportalen")])],1)])])},g=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{alignment:"center","margin-bottom":"1em"}},[r("span",[e._v("Her kan du sende en melding til teamets slack kanal.")])])}],h=r("bc3a"),_=r.n(h),k=r("6789"),b=r("36b8"),y={name:"Martin",components:{BaseButton:k["BaseButton"],TextInput:b["TextInput"]},data:function(){return{message:""}},methods:{post_to_slack:function(){var e="https://slacker-hackathon.herokuapp.com/slack";_.a.post(e,JSON.stringify({text:this.message}))}}},w=y,j=(r("d1b3"),Object(c["a"])(w,f,g,!1,null,"0ca2a272",null)),x=j.exports,E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Apis"},[r("ul",[r("li",{staticClass:"list-item"},[r("div",{staticClass:"list-item-div"},[e._m(0),e._m(1),r("div",{staticClass:"list-item-button"},[r("BaseButton",{staticStyle:{margin:"1em 0 1em 0"},attrs:{primary:""},on:{click:function(t){return e.$emit("setActive")}}},[e._v("Prøv")])],1)])]),r("li",[r("div",{staticClass:"list-item-div"},[e._m(2),e._m(3),r("div",{staticClass:"list-item-button"},[r("BaseButton",{staticStyle:{margin:"1em 0 1em 0"},attrs:{primary:""}},[e._v("Prøv")])],1)])]),r("li",[r("div",{staticClass:"list-item-div"},[e._m(4),e._m(5),r("div",{staticClass:"list-item-button"},[r("BaseButton",{staticStyle:{margin:"1em 0 1em 0"},attrs:{primary:""}},[e._v("Prøv")])],1)])])])])},I=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"list-item-image"},[n("img",{staticStyle:{width:"170px",height:"140px"},attrs:{alt:"badetempratur",src:r("7287")}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"list-item-text"},[r("h4",[e._v("Badetempratur API")]),r("p",[e._v("Dette er Oslo kommunes badetempratur API. Med dette API-et kan du sjekke kommunens siste vanntempraturmålinger fra badeplasser i Oslo området. Er du tøff nok til å la være å sjekke tempraturen før du bader?")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"list-item-image"},[n("img",{staticStyle:{width:"170px",height:"140px"},attrs:{alt:"badetempratur",src:r("077a")}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"list-item-text"},[r("h4",[e._v("SMS API")]),r("p",[e._v("Dette API-et gir mulighet til å sende SMS fra Oslo kommune. Har du et behov for å sende sms fra tjenesten din?")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"list-item-image"},[n("img",{staticStyle:{width:"170px",height:"140px"},attrs:{alt:"badetempratur",src:r("30df")}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"list-item-text"},[r("h4",[e._v("Epost API")]),r("p",[e._v("Dette API-et gir mulighet til å sende epost fra Oslo kommune. Har du et behov for å sende epost fra tjenesten din?")])])}],C={name:"Apis",components:{BaseButton:k["BaseButton"]}},P=C,B=(r("45a6"),Object(c["a"])(P,E,I,!1,null,"3ea57cda",null)),$=B.exports,A=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},O=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Profile"},[n("img",{staticStyle:{width:"50%"},attrs:{alt:"Team photo",src:r("bada")}}),n("p",[e._v(" Utviklerportalen er et felles sted der virksomhetene i Oslo kommune kan finne tilgjengelige ressurser for utvikling av tjenester. I portalen kan du se en oversikt over tilgjengelige tjenester, dokumentasjon og retningslinjer. Blant annet kan du finne en API- og datakatalog som gir deg en oversikt over hvilke API-er og data som er tilgjengelig fra de ulike virksomhetene i kommunen. Som utvikler i Oslo kommune har du tilgang til alle API-ene, og kan bruke disse fritt til å lage nye tjenester. ")])])}],S={name:"Profile"},H=S,T=(r("a9a3"),Object(c["a"])(H,A,O,!1,null,"0159251e",null)),D=T.exports,M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Interactive"},[e.active?e._e():r("div",{staticClass:"illustration-container"},[r("div",{staticClass:"person"},[r("h3",[e._v("Uten tilgang til APIer")]),r("img",{attrs:{alt:"sad person",src:e.Trist}})]),r("div",{staticClass:"person"},[r("h3",[e._v("Med tilgang til APIer")]),r("img",{attrs:{alt:"happy person",src:e.Glad}})])]),e.active?r("div",{staticClass:"lockthing-container"},[e.unlocked?e._e():r("img",{staticClass:"key",attrs:{src:e.Key,draggable:"true"},on:{dragstart:e.drag}}),r("div",{staticClass:"lock-and-data"},[r("img",{attrs:{alt:"lock",src:e.Lock},on:{drop:e.drop,dragover:e.allowDrop}}),e.unlocked?r("iframe",{attrs:{src:"https://www.yr.no/sted/Norge/Oslo/Oslo/Oslo/ekstern_boks_liten.html",width:"180",height:"322",frameborder:"0",scrolling:"no"}}):e._e()])]):e._e()])},R=[],U=r("cdc0"),V=r.n(U),F=r("ccef"),K=r.n(F),G=r("b9b1"),J=r.n(G),q=r("8675"),L=r.n(q),N={name:"Interactive",components:{BaseButton:k["BaseButton"]},props:{active:Boolean},data:function(){return{Key:V.a,Lock:K.a,Glad:L.a,Trist:J.a,lockSrc:"https://via.placeholder.com/180x302",unlocked:!1,dragging:!1}},methods:{drag:function(e){this.dragging=!0,e.dataTransfer.setData("key","magic")},allowDrop:function(e){e.preventDefault()},drop:function(e){e.preventDefault();var t=e.dataTransfer.getData("key");"magic"===t?this.unlocked=!0:this.dragging=!1}}},Y=N,z=(r("71f8"),Object(c["a"])(Y,M,R,!1,null,"325dd179",null)),X=z.exports,Q={name:"Home",components:{Interactive:X,Profile:D,Apis:$,Martin:x},data:function(){return{active:!1}}},Z=Q,W=(r("59c4"),Object(c["a"])(Z,v,d,!1,null,"15980cac",null)),ee=W.exports,te=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Help"},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/Help"}},[e._v("Hjelp")]),e._v(" | "),r("router-link",{attrs:{to:"/Inspiration"}},[e._v("Inspirasjon")]),e._v(" | "),r("router-link",{attrs:{to:"/Awards"}},[e._v("Premier")]),e._v(" | "),r("router-link",{attrs:{to:"/Resources"}},[e._v("Ressurser")])],1),r("img",{staticStyle:{position:"fixed",bottom:"2em",right:"2em"},attrs:{alt:"clippy",src:"https://media.giphy.com/media/13V60VgE2ED7oc/giphy.gif"}}),r("h1",[e._v("Hjelp")]),e._m(0),r("h2",[e._v("Komponenter")]),r("p",[e._v(" Vi har laget noen komponenter dere kan bruke for å komme kjapt i gang. For eksempel har dere tilgang til komponenten BaseButton som kan brukes slik: "),r("br"),r("TextInput",{staticStyle:{display:"inline-block","margin-right":"1em"},model:{value:e.exampleText,callback:function(t){e.exampleText=t},expression:"exampleText"}}),r("BaseButton",{staticStyle:{margin:"1em 0 1em 0"},attrs:{primary:""}},[e._v("Submit")]),r("br"),e._v(" Dere står fritt til å modifisere de eksisterende komponentene eller lage egne om dere trenger det. Ta en titt på "),r("a",{attrs:{href:"https://tuuturu.github.io/vue/?path=/story/buttons-button--primary"}},[e._v("oversikten over komponentene")]),e._v(" for å se hva som er tilgjengelig. ")],1),r("h2",[e._v("Farger")]),e._m(1),r("br"),r("div",{staticClass:"exampleColor",attrs:{id:"exampleRed"}},[e._v("$red")]),r("div",{staticClass:"exampleColor",attrs:{id:"examplePurple"}},[e._v("$purple-visited")]),r("div",{staticClass:"exampleColor",attrs:{id:"exampleGreen"}},[e._v("$green")]),r("div",{staticClass:"exampleColor",attrs:{id:"exampleBeige"}},[e._v("$beige")]),r("h2",[e._v("Typografi")]),e._m(2),r("h2",[e._v("Vue + IDE")]),e._m(3)])},re=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" Eksempler på bruk av følgende komponenter, farger og verktøy finnes i kildekoden til denne filen. Denne ligger i "),r("a",{attrs:{href:"https://github.com/oslokommune/tp-utviklerportalen/blob/master/src/views/Help.vue"}},[e._v(" prosjekt-mappe/src/views/Help.vue ")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" Fargene er hentet ut fra "),r("a",{attrs:{href:"https://styleguide.oslo.kommune.no/#/pattern/globals-colors-palette"}},[e._v("Oslo Styleguide")]),e._v(" og dere har tilgang til alle fargene via scss importen "),r("code",[e._v("@import '~@tuuturu/styling/style';")]),r("br"),e._v(" For eksempel kan man bruke: ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" Vi har lagt til stiler på lenker, H1, H2 og H3 samt paragrafer. Hvis dere ønsker å endre disse globale stilene eller legge til egne kan dette gjøres i "),r("a",{attrs:{href:"https://github.com/oslokommune/tp-utviklerportalen/blob/master/src/App.vue"}},[e._v("prosjekt-mappe/src/App.vue")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" Pro tip for utvikling i Vue med et IDE: pek på "),r("span",{staticClass:"bold"},[e._v("/node_modules/@vue/cli-service/webpack.config.js")]),e._v(" for å fortelle IDE'et hvordan Vue gjør webpack config. ")])}],ne={name:"help",components:{BaseButton:k["BaseButton"],TextInput:b["TextInput"]},data:function(){return{exampleText:"Mye rar text"}}},ae=ne,se=(r("0d26"),Object(c["a"])(ae,te,re,!1,null,"c4e06476",null)),ie=se.exports,oe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Inspiration"},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/Help"}},[e._v("Hjelp")]),e._v(" | "),r("router-link",{attrs:{to:"/Inspiration"}},[e._v("Inspirasjon")]),e._v(" | "),r("router-link",{attrs:{to:"/Awards"}},[e._v("Premier")]),e._v(" | "),r("router-link",{attrs:{to:"/Resources"}},[e._v("Ressurser")])],1),r("h1",[e._v("Inspirasjon")]),e._m(0),e._m(1),e._m(2),r("h2",[e._v("Minispill")]),e._m(3),r("h2",[e._v("God storytelling")]),e._m(4),r("h2",[e._v("Kommunikasjonskanal")]),e._m(5),r("h2",[e._v("Videoer")]),e._m(6),r("h2",[e._v("Klassiske produktpresentasjonssider")]),e._m(7)])},le=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("Tenk utenfor boksen!"),r("br"),e._v("Det er mange måter man kan presentere et produkt! Dere kan fokusere på forklarende tekster og bilder eller lage en video, lage et minispill, lage en superenkel chatbot eller fokusere på en liten bit av funksjonaliteten produktet deres tilbyr✨")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h2",[e._v("Rett på sak! "),r("br"),e._v("Demo/miniversjon/getting started guide av produktet")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://www.jetbrains.com/lp/mono/"}},[e._v("https://www.jetbrains.com/lp/mono/")])]),r("li",[r("a",{attrs:{href:"https://safe.page/buildsecurely/"}},[e._v("https://safe.page/buildsecurely/")])]),r("li",[r("a",{attrs:{href:"https://www.duolingo.com/"}},[e._v("https://www.duolingo.com/")])]),r("li",[r("a",{attrs:{href:"https://trello.com/guide"}},[e._v("https://trello.com/guide")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://im-a-good-boye.itch.io/down-scroll"}},[e._v("https://im-a-good-boye.itch.io/down-scroll")])]),r("li",[r("a",{attrs:{href:"https://ohmaigawd.itch.io/afterlife-the-game"}},[e._v("https://ohmaigawd.itch.io/afterlife-the-game")])]),r("li",[r("a",{attrs:{href:"https://leodantas.itch.io/the-cake-is-a-what"}},[e._v("https://leodantas.itch.io/the-cake-is-a-what")])]),r("li",[r("a",{attrs:{href:"https://ncase.me/trust/"}},[e._v("https://ncase.me/trust/")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://joshworth.com/dev/pixelspace/pixelspace_solarsystem.html"}},[e._v("https://joshworth.com/dev/pixelspace/pixelspace_solarsystem.html")])]),r("li",[r("a",{attrs:{href:"https://www.defeatboco.com/worlds.html"}},[e._v("https://www.defeatboco.com/worlds.html")])]),r("li",[r("a",{attrs:{href:"https://thebearandhisscarf.com/"}},[e._v("https://thebearandhisscarf.com/")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"http://insomnobot3000.com/"}},[e._v("http://insomnobot3000.com/")])]),r("li",[r("a",{attrs:{href:"https://growthbot.org/chat"}},[e._v("https://growthbot.org/chat")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"http://insomnobot3000.com/"}},[e._v("http://insomnobot3000.com/")])]),r("li",[r("a",{attrs:{href:"https://growthbot.org/chat"}},[e._v("https://growthbot.org/chat")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://www.bouvet.no/prosjekter/nytt-informasjons-og-velkomstsenter-pa-osl"}},[e._v("https://www.bouvet.no/prosjekter/nytt-informasjons-og-velkomstsenter-pa-osl")])]),r("li",[r("a",{attrs:{href:"https://mailchimp.com/"}},[e._v("https://mailchimp.com/")])])])}],ce={name:"inspiration"},ue=ce,me=(r("212f"),Object(c["a"])(ue,oe,le,!1,null,"8395b308",null)),pe=me.exports,ve=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Awards"},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/Help"}},[e._v("Hjelp")]),e._v(" | "),r("router-link",{attrs:{to:"/Inspiration"}},[e._v("Inspirasjon")]),e._v(" | "),r("router-link",{attrs:{to:"/Awards"}},[e._v("Premier")]),e._v(" | "),r("router-link",{attrs:{to:"/Resources"}},[e._v("Ressurser")])],1),r("h1",[e._v("Premier 🏆️")]),r("p",[e._v("I tillegg til å bli vurdert av en jury vil dere kunne samle inn ekstra poeng og creds om dere gjør noen oppgaver forbundet med løsningen og utviklingen av den. Disse er:")]),r("br"),e._m(0),r("br"),e._m(1)])},de=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("⭐ Brukt/integrert mot ekstern ressurs (API, datasett, Slack, bilde etc.)")]),r("li",[e._v("⭐ Brukertestet")]),r("li",[e._v("⭐ Integrasjon med annet team sitt produkt")]),r("li",[e._v("⭐ Skissert ut flere konsepter")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("Oppdater disse målene underveis ettersom dere klarer dem i vår eminente "),r("a",{attrs:{href:"https://okr.oslo.systems/product/hackathon",target:"_blank"}},[e._v("OKR-tracker")])])}],fe={name:"awards"},ge=fe,he=(r("9aa7"),Object(c["a"])(ge,ve,de,!1,null,"2afce1f6",null)),_e=he.exports,ke=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Awards"},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/Help"}},[e._v("Hjelp")]),e._v(" | "),r("router-link",{attrs:{to:"/Inspiration"}},[e._v("Inspirasjon")]),e._v(" | "),r("router-link",{attrs:{to:"/Awards"}},[e._v("Premier")]),e._v(" | "),r("router-link",{attrs:{to:"/Resources"}},[e._v("Ressurser")])],1),r("h1",[e._v("Ressurser️")]),r("a",{attrs:{href:"https://docs.google.com/presentation/d/1hULJEx092QZYeUhy5K15L67b0vYTlYnDDw7qQIrjuBg/edit#slide=id.g6ea9cd5290_2_122"}},[e._v("Presentasjonen")]),r("h2",[e._v("Beskrivelse av produktområdene")]),e._m(0),r("h2",[e._v("Maler og verktøy")]),e._m(1),r("h2",[e._v("Skrivetips")]),r("h3",[e._v("Hvordan skrive klartekst")]),e._m(2),r("h3",[e._v("Aktiv stemme")]),r("p",[e._v("Passiv stemme gir en tekst en høytidelig og formell stil og skaper avstand mellom tekst og leser. En aktiv stemme gir en mindre formell stil og avstand mellom tekst og leser blir mindre. Derfor vil vi bruke aktiv stemme i dokumentasjonen vår. Aktiv stemme bruker konkrete, aktive verb, korte setninger og direkte tiltale (du-form). Denne teksten bruker aktiv stemme, hvor du som leser dette tiltales direkte.")]),r("h3",[e._v("Eksempel på passiv stemme:")]),r("span",[e._v("Maskinen kan skrus på ved å trykke på knappen")]),r("h3",[e._v("Eksempel på aktiv stemme:")]),r("span",[e._v("Trykk på knappen for å skru av maskinen")])])},be=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://docs.google.com/presentation/d/1hqH6mUmLMdX9TtFVXjfqvUze5kuYzq-ZyN9v1Va5xm0/edit#slide=id.g7e2e960ec4_2_18",target:"_blank"}},[e._v("Dataplattform")])]),r("li",[r("a",{attrs:{href:"https://docs.google.com/presentation/d/1G9a7gGHC7JrWv4levx8we8iVeEfbKyr9z7X6CequxTs/edit#slide=id.g7df26df15c_0_87",target:"_blank"}},[e._v("Informasjonsforvaltning")])]),r("li",[r("a",{attrs:{href:"#",target:"_blank"}},[e._v("Infrastruktur")])]),r("li",[r("a",{attrs:{href:"https://confluence.oslo.kommune.no/pages/viewpage.action?spaceKey=UKENC&title=2020-02-11+Presentasjon+ITAS+-+Marvin+-+Sky+OPaaS",target:"_blank"}},[e._v("Plattform")])]),r("li",[r("a",{attrs:{href:"https://sites.google.com/byr.oslo.kommune.no/okr-og-oppdrag/utviklerportalen",target:"_blank"}},[e._v("Utviklerportalen")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://medium.com/kjernemodellen/slik-bruker-du-kjernemodellen-40de60a46850",target:"_blank"}},[e._v("Kjernemodellen")]),e._v(" - et verktøy for å forenkle, prioritere og få ting til å skje.")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("Plasser viktig informasjon først")]),r("li",[e._v("Skriv korte setninger: En idé per setning")]),r("li",[e._v("Varier rytmen i setninger: Forskjellig lengde")]),r("li",[e._v("Bryt opp teksten i paragrafer: Hver paragraf handler om hver sin ting")]),r("li",[e._v("Unngå sjargong. Hvis du må likevel, forklar hva det betyr første gang du bruker begrepet.")]),r("li",[e._v('Unngå tvetydige svar, som for eksempel "mange ganger", "fort" og "mye"')]),r("li",[e._v("Bruk vanlige ord - unngå lange ord og ukjente forkortelser")]),r("li",[e._v("Bruk aktiv stemme")])])}],ye={name:"awards"},we=ye,je=(r("3521"),Object(c["a"])(we,ke,be,!1,null,"7553d664",null)),xe=je.exports,Ee=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Ie=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Badetemp"},[r("h1",[e._v("Her kommer nøkkel visningen og badetemp vising")])])}],Ce={name:"help",components:{BaseButton:k["BaseButton"],TextInput:b["TextInput"]},data:function(){return{exampleText:"Mye rar text"}}},Pe=Ce,Be=(r("6870"),Object(c["a"])(Pe,Ee,Ie,!1,null,"3d301089",null)),$e=Be.exports;n["a"].use(p["a"]);var Ae=[{path:"/",name:"Home",component:ee},{path:"/help",name:"Help",component:ie},{path:"/inspiration",name:"Inspiration",component:pe},{path:"/awards",name:"Awards",component:_e},{path:"/resources",name:"Resources",component:xe},{path:"/badetemp",name:"Badetemp",component:$e}],Oe=new p["a"]({routes:Ae}),Se=Oe;n["a"].config.productionTip=!1,new n["a"]({router:Se,render:function(e){return e(m)}}).$mount("#app")},"59c4":function(e,t,r){"use strict";var n=r("561f"),a=r.n(n);a.a},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},6870:function(e,t,r){"use strict";var n=r("044b"),a=r.n(n);a.a},"6f4e":function(e,t,r){},"71f8":function(e,t,r){"use strict";var n=r("cf19"),a=r.n(n);a.a},7287:function(e,t,r){e.exports=r.p+"img/badetemperatur.c54293a3.png"},8675:function(e,t,r){e.exports=r.p+"img/glad.c3cd32be.png"},"8f53":function(e,t,r){},"9aa7":function(e,t,r){"use strict";var n=r("0d03"),a=r.n(n);a.a},"9c0c":function(e,t,r){},a9a3:function(e,t,r){"use strict";var n=r("6f4e"),a=r.n(n);a.a},b7ec:function(e,t,r){},b9b1:function(e,t,r){e.exports=r.p+"img/trist.1ba7c636.png"},bada:function(e,t,r){e.exports=r.p+"img/Frame30.314e3c92.png"},ccef:function(e,t,r){e.exports=r.p+"img/Group 35.d7d061d0.png"},cdc0:function(e,t,r){e.exports=r.p+"img/nøkkel.6d0eccbd.png"},cf19:function(e,t,r){},d1b3:function(e,t,r){"use strict";var n=r("fe54"),a=r.n(n);a.a},d495:function(e,t,r){},f652:function(e,t,r){},fe54:function(e,t,r){}});
//# sourceMappingURL=app.efc5f86b.js.map