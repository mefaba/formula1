(this.webpackJsonpformula1=this.webpackJsonpformula1||[]).push([[0],[,,,,function(e,a,t){e.exports=t(13)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(2),o=t.n(r),l=(t(9),t(10),t(11),function(){return n.a.createElement("div",{className:"header-unit"},"FORMULA 1")}),i=t(3),s=(t(12),function(){var e=Object(c.useState)({season:"",raceRound:"",raceName:"",raceDate:"",raceTime:"",circuit:"",city:"",country:"",raceWiki:""}),a=Object(i.a)(e,2),t=a[0],r=a[1];return Object(c.useEffect)((function(){fetch("https://ergast.com/api/f1/2020/next.json").then((function(e){return e.json()})).then((function(e){console.log(e.MRData.RaceTable.Races[0].raceName),console.log(e.MRData.RaceTable),r({season:e.MRData.RaceTable.season,raceRound:e.MRData.RaceTable.round,raceName:e.MRData.RaceTable.Races[0].raceName,raceDate:e.MRData.RaceTable.Races[0].date,raceTime:e.MRData.RaceTable.Races[0].time,circuit:e.MRData.RaceTable.Races[0].Circuit.circuitName,city:e.MRData.RaceTable.Races[0].Circuit.Location.locality,country:e.MRData.RaceTable.Races[0].Circuit.Location.country,raceWiki:e.MRData.RaceTable.Races[0].url})}))}),[]),n.a.createElement("div",{className:"nextrace-unit"},n.a.createElement("div",{className:"nextrace-box"},n.a.createElement("div",{className:"race-date"},n.a.createElement("p",null,t.season),n.a.createElement("p",null,"RACE: ".concat(t.raceRound," ")))),n.a.createElement("div",{className:"nextrace-box"},n.a.createElement("div",{className:"race-date"},n.a.createElement("p",null,t.raceName),n.a.createElement("p",null,t.raceDate))),n.a.createElement("div",{className:"nextrace-box"},n.a.createElement("div",{className:"race-date"},n.a.createElement("p",null,t.country),n.a.createElement("p",null,t.city))))});var u=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(l,null),n.a.createElement(s,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.49fbef20.chunk.js.map