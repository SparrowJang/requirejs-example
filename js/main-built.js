(function(){function a(a){var b=a.currentTarget||a.srcElement,c;if(a.type==="load"||f.test(b.readyState)){a=b.getAttribute("data-requiremodule"),h[a]=!0;for(a=0;c=g[a];a++){if(!h[c.name])break;c.req([c.name],c.onLoad)}a>0&&g.splice(0,a),setTimeout(function(){b.parentNode.removeChild(b)},15)}}function b(a){var b,c;a.setAttribute("data-orderloaded","loaded");for(a=0;c=j[a];a++){if(!(b=i[c])||b.getAttribute("data-orderloaded")!=="loaded")break;delete i[c],require.addScriptToDom(b)}a>0&&j.splice(0,a)}var c=typeof document!="undefined"&&typeof window!="undefined"&&document.createElement("script"),d=c&&(c.async||window.opera&&Object.prototype.toString.call(window.opera)==="[object Opera]"||"MozAppearance"in document.documentElement.style),e=c&&c.readyState==="uninitialized",f=/^(complete|loaded)$/,g=[],h={},i={},j=[],c=null;define("order",{version:"1.0.5",load:function(c,f,h,l){var p;f.nameToUrl?(p=f.nameToUrl(c,null),require.s.skipAsync[p]=!0,d||l.isBuild?f([c],h):e?(l=require.s.contexts._,!l.urlFetched[p]&&!l.loaded[c]&&(l.urlFetched[p]=!0,require.resourcesReady(!1),l.scriptCount+=1,p=require.attach(p,l,c,null,null,b),i[c]=p,j.push(c)),f([c],h)):f.specified(c)?f([c],h):(g.push({name:c,req:f,onLoad:h}),require.attach(p,null,c,a,"script/cache"))):f([c],h)}})})(),define("config",[],function(){return{version:"production"}}),define("module1",[],function(){return{name:"module1"}}),define("module2",["module1"],function(a){return console.log("loaded "+a.name),{name:"module2"}}),function(){require.config({baseUrl:"js",paths:{order:"libs/order"}}),require(["order!config","order!module2"],function(a,b){console.log("version : "+a.version),console.log("loaded "+b.name)})}.call(this),define("main",function(){})