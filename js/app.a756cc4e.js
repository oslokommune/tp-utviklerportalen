(function(e){function t(t){for(var n,i,o=t[0],l=t[1],c=t[2],m=0,p=[];m<o.length;m++)i=o[m],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,o=1;o<r.length;o++){var l=r[o];0!==s[l]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},s={app:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/tp-utviklerportalen/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"044b":function(e,t,r){},"0d03":function(e,t,r){},"0d26":function(e,t,r){"use strict";var n=r("d495"),s=r.n(n);s.a},"1afe":function(e,t,r){},"1ce7":function(e,t,r){},"210f":function(e,t,r){},"212f":function(e,t,r){"use strict";var n=r("8f53"),s=r.n(n);s.a},"30df":function(e,t,r){e.exports=r.p+"img/epost.0e61c967.png"},3521:function(e,t,r){"use strict";var n=r("b7ec"),s=r.n(n);s.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header"),r("router-view",{staticClass:"content"}),r("Footer")],1)},a=[],i=r("f564"),o={components:{Header:i["Header"],Footer:i["Footer"]}},l=o,c=(r("5c0b"),r("2877")),u=Object(c["a"])(l,s,a,!1,null,null,null),m=u.exports,p=r("8c4f"),v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("h1",[e._v("Utviklerportalen")]),r("Profile"),r("h2",[e._v("Jeg trenger hjelp!")]),r("Martin"),r("h2",[e._v("Apier")]),r("Apis"),r("Interactive")],1)},d=[],f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Martin"},[r("TextInput",{model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),r("br"),r("BaseButton",{on:{click:e.post_to_slack}},[e._v("Send melding til Utviklerportalen")])],1)},h=[],_=r("bc3a"),g=r.n(_),k=r("6789"),b=r("36b8"),j={name:"Martin",components:{BaseButton:k["BaseButton"],TextInput:b["TextInput"]},data:function(){return{message:""}},methods:{post_to_slack:function(e){var t="https://hooks.slack.com/services/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";g.a.post(t,JSON.stringify({text:this.message}),{withCredentials:!1,transformRequest:[function(e,t){return delete t.post["Content-Type"],e}]})}}},y=j,w=Object(c["a"])(y,f,h,!1,null,"811d4578",null),x=w.exports,E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Apis"},[r("ul",[r("li",{staticClass:"list-item"},[r("div",{staticClass:"list-item-div"},[e._m(0),e._m(1),r("div",{staticClass:"list-item-button"},[r("BaseButton",{staticStyle:{margin:"1em 0 1em 0"},attrs:{primary:""},on:{click:function(t){return e.$router.push("Badetemp")}}},[e._v("Prøv")])],1)])]),r("li",[r("div",{staticClass:"list-item-div"},[e._m(2),e._m(3),r("div",{staticClass:"list-item-button"},[r("BaseButton",{staticStyle:{margin:"1em 0 1em 0"},attrs:{primary:""}},[e._v("Prøv")])],1)])]),r("li",[r("div",{staticClass:"list-item-div"},[e._m(4),e._m(5),r("div",{staticClass:"list-item-button"},[r("BaseButton",{staticStyle:{margin:"1em 0 1em 0"},attrs:{primary:""}},[e._v("Prøv")])],1)])])])])},B=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"list-item-image"},[n("img",{staticStyle:{width:"170px",height:"140px"},attrs:{alt:"badetempratur",src:r("7287")}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"list-item-text"},[r("h2",[e._v("Badetempratur API")]),r("p",[e._v("Dette er Oslo kommunes badetempratur API. Med dette API-et kan du sjekke kommunens siste vanntempraturmålinger fra badeplasser i Oslo området. Er du tøff nok til å la være å sjekke tempraturen før du bader?")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"list-item-image"},[n("img",{staticStyle:{width:"170px",height:"140px"},attrs:{alt:"badetempratur",src:r("30df")}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"list-item-text"},[r("h2",[e._v("SMS API")]),r("p",[e._v("Dette API-et gir mulighet til å sende SMS fra Oslo kommune. Har du et behov for å sende sms fra tjenesten din?")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"list-item-image"},[n("img",{staticStyle:{width:"170px",height:"140px"},attrs:{alt:"badetempratur",src:r("30df")}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"list-item-text"},[r("h2",[e._v("Epost API")]),r("p",[e._v("Dette API-et gir mulighet til å sende epost fra Oslo kommune. Har du et behov for å sende epost fra tjenesten din?")])])}],I={name:"Apis",components:{BaseButton:k["BaseButton"]}},$=I,P=(r("aa7c"),Object(c["a"])($,E,B,!1,null,"6178da38",null)),C=P.exports,O=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},H=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Profile"},[n("img",{staticStyle:{height:"480px",width:"480px"},attrs:{alt:"Team photo",src:r("30df")}}),n("p",[e._v(" Utviklerportalen er et felles sted der virksomhetene i Oslo kommune kan finne tilgjengelige ressurser for utvikling av tjenester. I portalen kan du se en oversikt over tilgjengelige tjenester, dokumentasjon og retningslinjer. Blant annet kan du finne en API- og datakatalog som gir deg en oversikt over hvilke API-er og data som er tilgjengelig fra de ulike virksomhetene i kommunen. Som utvikler i Oslo kommune har du tilgang til alle API-ene, og kan bruke disse fritt til å lage nye tjenester. ")])])}],S={name:"Profile"},A=S,T=(r("a238"),Object(c["a"])(A,O,H,!1,null,"cc43b424",null)),M=T.exports,D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Interactive"},[e.active?e._e():r("div",{staticClass:"illustration-container"},[e._m(0),e._m(1)])])},R=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h3",[e._v("Uten tilgang")]),r("img",{attrs:{alt:"sad person",src:"https://via.placeholder.com/480x720"}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h3",[e._v("Med tilgang")]),r("img",{attrs:{alt:"sad person",src:"https://via.placeholder.com/480x720"}})])}],U={name:"Interactive",components:{BaseButton:k["BaseButton"]},data:function(){return{active:!1}}},V=U,F=(r("6b1e"),Object(c["a"])(V,D,R,!1,null,"10e1e493",null)),K=F.exports,J={name:"Home",components:{Interactive:K,Profile:M,Apis:C,Martin:x}},q=J,G=(r("e25e"),Object(c["a"])(q,v,d,!1,null,"71dc2986",null)),Y=G.exports,z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Help"},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/Help"}},[e._v("Hjelp")]),e._v(" | "),r("router-link",{attrs:{to:"/Inspiration"}},[e._v("Inspirasjon")]),e._v(" | "),r("router-link",{attrs:{to:"/Awards"}},[e._v("Premier")]),e._v(" | "),r("router-link",{attrs:{to:"/Resources"}},[e._v("Ressurser")])],1),r("img",{staticStyle:{position:"fixed",bottom:"2em",right:"2em"},attrs:{alt:"clippy",src:"https://media.giphy.com/media/13V60VgE2ED7oc/giphy.gif"}}),r("h1",[e._v("Hjelp")]),e._m(0),r("h2",[e._v("Komponenter")]),r("p",[e._v(" Vi har laget noen komponenter dere kan bruke for å komme kjapt i gang. For eksempel har dere tilgang til komponenten BaseButton som kan brukes slik: "),r("br"),r("TextInput",{staticStyle:{display:"inline-block","margin-right":"1em"},model:{value:e.exampleText,callback:function(t){e.exampleText=t},expression:"exampleText"}}),r("BaseButton",{staticStyle:{margin:"1em 0 1em 0"},attrs:{primary:""}},[e._v("Submit")]),r("br"),e._v(" Dere står fritt til å modifisere de eksisterende komponentene eller lage egne om dere trenger det. Ta en titt på "),r("a",{attrs:{href:"https://tuuturu.github.io/vue/?path=/story/buttons-button--primary"}},[e._v("oversikten over komponentene")]),e._v(" for å se hva som er tilgjengelig. ")],1),r("h2",[e._v("Farger")]),e._m(1),r("br"),r("div",{staticClass:"exampleColor",attrs:{id:"exampleRed"}},[e._v("$red")]),r("div",{staticClass:"exampleColor",attrs:{id:"examplePurple"}},[e._v("$purple-visited")]),r("div",{staticClass:"exampleColor",attrs:{id:"exampleGreen"}},[e._v("$green")]),r("div",{staticClass:"exampleColor",attrs:{id:"exampleBeige"}},[e._v("$beige")]),r("h2",[e._v("Typografi")]),e._m(2),r("h2",[e._v("Vue + IDE")]),e._m(3)])},L=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" Eksempler på bruk av følgende komponenter, farger og verktøy finnes i kildekoden til denne filen. Denne ligger i "),r("a",{attrs:{href:"https://github.com/oslokommune/tp-utviklerportalen/blob/master/src/views/Help.vue"}},[e._v(" prosjekt-mappe/src/views/Help.vue ")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" Fargene er hentet ut fra "),r("a",{attrs:{href:"https://styleguide.oslo.kommune.no/#/pattern/globals-colors-palette"}},[e._v("Oslo Styleguide")]),e._v(" og dere har tilgang til alle fargene via scss importen "),r("code",[e._v("@import '~@tuuturu/styling/style';")]),r("br"),e._v(" For eksempel kan man bruke: ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" Vi har lagt til stiler på lenker, H1, H2 og H3 samt paragrafer. Hvis dere ønsker å endre disse globale stilene eller legge til egne kan dette gjøres i "),r("a",{attrs:{href:"https://github.com/oslokommune/tp-utviklerportalen/blob/master/src/App.vue"}},[e._v("prosjekt-mappe/src/App.vue")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" Pro tip for utvikling i Vue med et IDE: pek på "),r("span",{staticClass:"bold"},[e._v("/node_modules/@vue/cli-service/webpack.config.js")]),e._v(" for å fortelle IDE'et hvordan Vue gjør webpack config. ")])}],N={name:"help",components:{BaseButton:k["BaseButton"],TextInput:b["TextInput"]},data:function(){return{exampleText:"Mye rar text"}}},X=N,Q=(r("0d26"),Object(c["a"])(X,z,L,!1,null,"c4e06476",null)),W=Q.exports,Z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Inspiration"},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/Help"}},[e._v("Hjelp")]),e._v(" | "),r("router-link",{attrs:{to:"/Inspiration"}},[e._v("Inspirasjon")]),e._v(" | "),r("router-link",{attrs:{to:"/Awards"}},[e._v("Premier")]),e._v(" | "),r("router-link",{attrs:{to:"/Resources"}},[e._v("Ressurser")])],1),r("h1",[e._v("Inspirasjon")]),e._m(0),e._m(1),e._m(2),r("h2",[e._v("Minispill")]),e._m(3),r("h2",[e._v("God storytelling")]),e._m(4),r("h2",[e._v("Kommunikasjonskanal")]),e._m(5),r("h2",[e._v("Videoer")]),e._m(6),r("h2",[e._v("Klassiske produktpresentasjonssider")]),e._m(7)])},ee=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("Tenk utenfor boksen!"),r("br"),e._v("Det er mange måter man kan presentere et produkt! Dere kan fokusere på forklarende tekster og bilder eller lage en video, lage et minispill, lage en superenkel chatbot eller fokusere på en liten bit av funksjonaliteten produktet deres tilbyr✨")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h2",[e._v("Rett på sak! "),r("br"),e._v("Demo/miniversjon/getting started guide av produktet")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://www.jetbrains.com/lp/mono/"}},[e._v("https://www.jetbrains.com/lp/mono/")])]),r("li",[r("a",{attrs:{href:"https://safe.page/buildsecurely/"}},[e._v("https://safe.page/buildsecurely/")])]),r("li",[r("a",{attrs:{href:"https://www.duolingo.com/"}},[e._v("https://www.duolingo.com/")])]),r("li",[r("a",{attrs:{href:"https://trello.com/guide"}},[e._v("https://trello.com/guide")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://im-a-good-boye.itch.io/down-scroll"}},[e._v("https://im-a-good-boye.itch.io/down-scroll")])]),r("li",[r("a",{attrs:{href:"https://ohmaigawd.itch.io/afterlife-the-game"}},[e._v("https://ohmaigawd.itch.io/afterlife-the-game")])]),r("li",[r("a",{attrs:{href:"https://leodantas.itch.io/the-cake-is-a-what"}},[e._v("https://leodantas.itch.io/the-cake-is-a-what")])]),r("li",[r("a",{attrs:{href:"https://ncase.me/trust/"}},[e._v("https://ncase.me/trust/")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://joshworth.com/dev/pixelspace/pixelspace_solarsystem.html"}},[e._v("https://joshworth.com/dev/pixelspace/pixelspace_solarsystem.html")])]),r("li",[r("a",{attrs:{href:"https://www.defeatboco.com/worlds.html"}},[e._v("https://www.defeatboco.com/worlds.html")])]),r("li",[r("a",{attrs:{href:"https://thebearandhisscarf.com/"}},[e._v("https://thebearandhisscarf.com/")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"http://insomnobot3000.com/"}},[e._v("http://insomnobot3000.com/")])]),r("li",[r("a",{attrs:{href:"https://growthbot.org/chat"}},[e._v("https://growthbot.org/chat")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"http://insomnobot3000.com/"}},[e._v("http://insomnobot3000.com/")])]),r("li",[r("a",{attrs:{href:"https://growthbot.org/chat"}},[e._v("https://growthbot.org/chat")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://www.bouvet.no/prosjekter/nytt-informasjons-og-velkomstsenter-pa-osl"}},[e._v("https://www.bouvet.no/prosjekter/nytt-informasjons-og-velkomstsenter-pa-osl")])]),r("li",[r("a",{attrs:{href:"https://mailchimp.com/"}},[e._v("https://mailchimp.com/")])])])}],te={name:"inspiration"},re=te,ne=(r("212f"),Object(c["a"])(re,Z,ee,!1,null,"8395b308",null)),se=ne.exports,ae=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Awards"},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/Help"}},[e._v("Hjelp")]),e._v(" | "),r("router-link",{attrs:{to:"/Inspiration"}},[e._v("Inspirasjon")]),e._v(" | "),r("router-link",{attrs:{to:"/Awards"}},[e._v("Premier")]),e._v(" | "),r("router-link",{attrs:{to:"/Resources"}},[e._v("Ressurser")])],1),r("h1",[e._v("Premier 🏆️")]),r("p",[e._v("I tillegg til å bli vurdert av en jury vil dere kunne samle inn ekstra poeng og creds om dere gjør noen oppgaver forbundet med løsningen og utviklingen av den. Disse er:")]),r("br"),e._m(0),r("br"),e._m(1)])},ie=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("⭐ Brukt/integrert mot ekstern ressurs (API, datasett, Slack, bilde etc.)")]),r("li",[e._v("⭐ Brukertestet")]),r("li",[e._v("⭐ Integrasjon med annet team sitt produkt")]),r("li",[e._v("⭐ Skissert ut flere konsepter")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("Oppdater disse målene underveis ettersom dere klarer dem i vår eminente "),r("a",{attrs:{href:"https://okr.oslo.systems/product/hackathon",target:"_blank"}},[e._v("OKR-tracker")])])}],oe={name:"awards"},le=oe,ce=(r("9aa7"),Object(c["a"])(le,ae,ie,!1,null,"2afce1f6",null)),ue=ce.exports,me=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Awards"},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/Help"}},[e._v("Hjelp")]),e._v(" | "),r("router-link",{attrs:{to:"/Inspiration"}},[e._v("Inspirasjon")]),e._v(" | "),r("router-link",{attrs:{to:"/Awards"}},[e._v("Premier")]),e._v(" | "),r("router-link",{attrs:{to:"/Resources"}},[e._v("Ressurser")])],1),r("h1",[e._v("Ressurser️")]),r("a",{attrs:{href:"https://docs.google.com/presentation/d/1hULJEx092QZYeUhy5K15L67b0vYTlYnDDw7qQIrjuBg/edit#slide=id.g6ea9cd5290_2_122"}},[e._v("Presentasjonen")]),r("h2",[e._v("Beskrivelse av produktområdene")]),e._m(0),r("h2",[e._v("Maler og verktøy")]),e._m(1),r("h2",[e._v("Skrivetips")]),r("h3",[e._v("Hvordan skrive klartekst")]),e._m(2),r("h3",[e._v("Aktiv stemme")]),r("p",[e._v("Passiv stemme gir en tekst en høytidelig og formell stil og skaper avstand mellom tekst og leser. En aktiv stemme gir en mindre formell stil og avstand mellom tekst og leser blir mindre. Derfor vil vi bruke aktiv stemme i dokumentasjonen vår. Aktiv stemme bruker konkrete, aktive verb, korte setninger og direkte tiltale (du-form). Denne teksten bruker aktiv stemme, hvor du som leser dette tiltales direkte.")]),r("h3",[e._v("Eksempel på passiv stemme:")]),r("span",[e._v("Maskinen kan skrus på ved å trykke på knappen")]),r("h3",[e._v("Eksempel på aktiv stemme:")]),r("span",[e._v("Trykk på knappen for å skru av maskinen")])])},pe=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://docs.google.com/presentation/d/1hqH6mUmLMdX9TtFVXjfqvUze5kuYzq-ZyN9v1Va5xm0/edit#slide=id.g7e2e960ec4_2_18",target:"_blank"}},[e._v("Dataplattform")])]),r("li",[r("a",{attrs:{href:"https://docs.google.com/presentation/d/1G9a7gGHC7JrWv4levx8we8iVeEfbKyr9z7X6CequxTs/edit#slide=id.g7df26df15c_0_87",target:"_blank"}},[e._v("Informasjonsforvaltning")])]),r("li",[r("a",{attrs:{href:"#",target:"_blank"}},[e._v("Infrastruktur")])]),r("li",[r("a",{attrs:{href:"https://confluence.oslo.kommune.no/pages/viewpage.action?spaceKey=UKENC&title=2020-02-11+Presentasjon+ITAS+-+Marvin+-+Sky+OPaaS",target:"_blank"}},[e._v("Plattform")])]),r("li",[r("a",{attrs:{href:"https://sites.google.com/byr.oslo.kommune.no/okr-og-oppdrag/utviklerportalen",target:"_blank"}},[e._v("Utviklerportalen")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://medium.com/kjernemodellen/slik-bruker-du-kjernemodellen-40de60a46850",target:"_blank"}},[e._v("Kjernemodellen")]),e._v(" - et verktøy for å forenkle, prioritere og få ting til å skje.")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("Plasser viktig informasjon først")]),r("li",[e._v("Skriv korte setninger: En idé per setning")]),r("li",[e._v("Varier rytmen i setninger: Forskjellig lengde")]),r("li",[e._v("Bryt opp teksten i paragrafer: Hver paragraf handler om hver sin ting")]),r("li",[e._v("Unngå sjargong. Hvis du må likevel, forklar hva det betyr første gang du bruker begrepet.")]),r("li",[e._v('Unngå tvetydige svar, som for eksempel "mange ganger", "fort" og "mye"')]),r("li",[e._v("Bruk vanlige ord - unngå lange ord og ukjente forkortelser")]),r("li",[e._v("Bruk aktiv stemme")])])}],ve={name:"awards"},de=ve,fe=(r("3521"),Object(c["a"])(de,me,pe,!1,null,"7553d664",null)),he=fe.exports,_e=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ge=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Badetemp"},[r("h1",[e._v("Her kommer nøkkel visningen og badetemp vising")])])}],ke={name:"help",components:{BaseButton:k["BaseButton"],TextInput:b["TextInput"]},data:function(){return{exampleText:"Mye rar text"}}},be=ke,je=(r("6870"),Object(c["a"])(be,_e,ge,!1,null,"3d301089",null)),ye=je.exports;n["a"].use(p["a"]);var we=[{path:"/",name:"Home",component:Y},{path:"/help",name:"Help",component:W},{path:"/inspiration",name:"Inspiration",component:se},{path:"/awards",name:"Awards",component:ue},{path:"/resources",name:"Resources",component:he},{path:"/badetemp",name:"Badetemp",component:ye}],xe=new p["a"]({routes:we}),Ee=xe;n["a"].config.productionTip=!1,new n["a"]({router:Ee,render:function(e){return e(m)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),s=r.n(n);s.a},6870:function(e,t,r){"use strict";var n=r("044b"),s=r.n(n);s.a},"6b1e":function(e,t,r){"use strict";var n=r("210f"),s=r.n(n);s.a},7287:function(e,t,r){e.exports=r.p+"img/badetemperatur.c54293a3.png"},"8ac1":function(e,t,r){},"8f53":function(e,t,r){},"9aa7":function(e,t,r){"use strict";var n=r("0d03"),s=r.n(n);s.a},"9c0c":function(e,t,r){},a238:function(e,t,r){"use strict";var n=r("8ac1"),s=r.n(n);s.a},aa7c:function(e,t,r){"use strict";var n=r("1afe"),s=r.n(n);s.a},b7ec:function(e,t,r){},d495:function(e,t,r){},e25e:function(e,t,r){"use strict";var n=r("1ce7"),s=r.n(n);s.a}});
//# sourceMappingURL=app.a756cc4e.js.map