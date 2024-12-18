System.register([],(function(e,t){"use strict";return{execute:function(){var t,n={exports:{}},r=n.exports;
/** @license
       * eventsource.js
       * Available under MIT License (MIT)
       * https://github.com/Yaffle/EventSource/
       */e("e",(t||(t=1,function(e,t){!function(n){var r=n.setTimeout,o=n.clearTimeout,i=n.XMLHttpRequest,a=n.XDomainRequest,s=n.ActiveXObject,c=n.EventSource,u=n.document,l=n.Promise,d=n.fetch,h=n.Response,p=n.TextDecoder,f=n.TextEncoder,y=n.AbortController;if("undefined"==typeof window||void 0===u||"readyState"in u||null!=u.body||(u.readyState="loading",window.addEventListener("load",(function(e){u.readyState="complete"}),!1)),null==i&&null!=s&&(i=function(){return new s("Microsoft.XMLHTTP")}),null==Object.create&&(Object.create=function(e){function t(){}return t.prototype=e,new t}),Date.now||(Date.now=function(){return(new Date).getTime()}),null==y){var v=d;d=function(e,t){var n=t.signal;return v(e,{headers:t.headers,credentials:t.credentials,cache:t.cache}).then((function(e){var t=e.body.getReader();return n._reader=t,n._aborted&&n._reader.cancel(),{status:e.status,statusText:e.statusText,headers:e.headers,body:{getReader:function(){return t}}}}))},y=function(){this.signal={_reader:null,_aborted:!1},this.abort=function(){null!=this.signal._reader&&this.signal._reader.cancel(),this.signal._aborted=!0}}}function g(){this.bitsNeeded=0,this.codePoint=0}g.prototype.decode=function(e){function t(e,t,n){if(1===n)return e>=128>>t&&e<<t<=2047;if(2===n)return e>=2048>>t&&e<<t<=55295||e>=57344>>t&&e<<t<=65535;if(3===n)return e>=65536>>t&&e<<t<=1114111;throw new Error}function n(e,t){if(6===e)return t>>6>15?3:t>31?2:1;if(12===e)return t>15?3:2;if(18===e)return 3;throw new Error}for(var r=65533,o="",i=this.bitsNeeded,a=this.codePoint,s=0;s<e.length;s+=1){var c=e[s];0!==i&&(c<128||c>191||!t(a<<6|63&c,i-6,n(i,a)))&&(i=0,a=r,o+=String.fromCharCode(a)),0===i?(c>=0&&c<=127?(i=0,a=c):c>=192&&c<=223?(i=6,a=31&c):c>=224&&c<=239?(i=12,a=15&c):c>=240&&c<=247?(i=18,a=7&c):(i=0,a=r),0===i||t(a,i,n(i,a))||(i=0,a=r)):(i-=6,a=a<<6|63&c),0===i&&(a<=65535?o+=String.fromCharCode(a):(o+=String.fromCharCode(55296+(a-65535-1>>10)),o+=String.fromCharCode(56320+(a-65535-1&1023))))}return this.bitsNeeded=i,this.codePoint=a,o},null!=p&&null!=f&&function(){try{return"test"===(new p).decode((new f).encode("test"),{stream:!0})}catch(e){console.debug("TextDecoder does not support streaming option. Using polyfill instead: "+e)}return!1}()||(p=g);var w=function(){};function b(e){this.withCredentials=!1,this.readyState=0,this.status=0,this.statusText="",this.responseText="",this.onprogress=w,this.onload=w,this.onerror=w,this.onreadystatechange=w,this._contentType="",this._xhr=e,this._sendTimeout=0,this._abort=w}function E(e){return e.replace(/[A-Z]/g,(function(e){return String.fromCharCode(e.charCodeAt(0)+32)}))}function C(e){for(var t=Object.create(null),n=e.split("\r\n"),r=0;r<n.length;r+=1){var o=n[r].split(": "),i=o.shift(),a=o.join(": ");t[E(i)]=a}this._map=t}function T(){}function m(e){this._headers=e}function S(){}function _(){this._listeners=Object.create(null)}function x(e){r((function(){throw e}),0)}function A(e){this.type=e,this.target=void 0}function R(e,t){A.call(this,e),this.data=t.data,this.lastEventId=t.lastEventId}function O(e,t){A.call(this,e),this.status=t.status,this.statusText=t.statusText,this.headers=t.headers}function D(e,t){A.call(this,e),this.error=t.error}b.prototype.open=function(e,t){this._abort(!0);var n=this,a=this._xhr,s=1,c=0;this._abort=function(e){0!==n._sendTimeout&&(o(n._sendTimeout),n._sendTimeout=0),1!==s&&2!==s&&3!==s||(s=4,a.onload=w,a.onerror=w,a.onabort=w,a.onprogress=w,a.onreadystatechange=w,a.abort(),0!==c&&(o(c),c=0),e||(n.readyState=4,n.onabort(null),n.onreadystatechange())),s=0};var u=function(){if(1===s){var e=0,t="",r=void 0;if("contentType"in a)e=200,t="OK",r=a.contentType;else try{e=a.status,t=a.statusText,r=a.getResponseHeader("Content-Type")}catch(o){e=0,t="",r=void 0}0!==e&&(s=2,n.readyState=2,n.status=e,n.statusText=t,n._contentType=r,n.onreadystatechange())}},l=function(){if(u(),2===s||3===s){s=3;var e="";try{e=a.responseText}catch(t){}n.readyState=3,n.responseText=e,n.onprogress()}},d=function(e,t){if(null!=t&&null!=t.preventDefault||(t={preventDefault:w}),l(),1===s||2===s||3===s){if(s=4,0!==c&&(o(c),c=0),n.readyState=4,"load"===e)n.onload(t);else if("error"===e)n.onerror(t);else{if("abort"!==e)throw new TypeError;n.onabort(t)}n.onreadystatechange()}},h=function(){c=r((function(){h()}),500),3===a.readyState&&l()};"onload"in a&&(a.onload=function(e){d("load",e)}),"onerror"in a&&(a.onerror=function(e){d("error",e)}),"onabort"in a&&(a.onabort=function(e){d("abort",e)}),"onprogress"in a&&(a.onprogress=l),"onreadystatechange"in a&&(a.onreadystatechange=function(e){!function(e){null!=a&&(4===a.readyState?"onload"in a&&"onerror"in a&&"onabort"in a||d(""===a.responseText?"error":"load",e):3===a.readyState?"onprogress"in a||l():2===a.readyState&&u())}(e)}),!("contentType"in a)&&"ontimeout"in i.prototype||(t+=(-1===t.indexOf("?")?"?":"&")+"padding=true"),a.open(e,t,!0),"readyState"in a&&(c=r((function(){h()}),0))},b.prototype.abort=function(){this._abort(!1)},b.prototype.getResponseHeader=function(e){return this._contentType},b.prototype.setRequestHeader=function(e,t){var n=this._xhr;"setRequestHeader"in n&&n.setRequestHeader(e,t)},b.prototype.getAllResponseHeaders=function(){return null!=this._xhr.getAllResponseHeaders&&this._xhr.getAllResponseHeaders()||""},b.prototype.send=function(){if("ontimeout"in i.prototype&&("sendAsBinary"in i.prototype||"mozAnon"in i.prototype)||null==u||null==u.readyState||"complete"===u.readyState){var e=this._xhr;"withCredentials"in e&&(e.withCredentials=this.withCredentials);try{e.send(void 0)}catch(n){throw n}}else{var t=this;t._sendTimeout=r((function(){t._sendTimeout=0,t.send()}),4)}},C.prototype.get=function(e){return this._map[E(e)]},null!=i&&null==i.HEADERS_RECEIVED&&(i.HEADERS_RECEIVED=2),T.prototype.open=function(e,t,n,r,o,a,s){e.open("GET",o);var c=0;for(var u in e.onprogress=function(){var t=e.responseText.slice(c);c+=t.length,n(t)},e.onerror=function(e){e.preventDefault(),r(new Error("NetworkError"))},e.onload=function(){r(null)},e.onabort=function(){r(null)},e.onreadystatechange=function(){if(e.readyState===i.HEADERS_RECEIVED){var n=e.status,r=e.statusText,o=e.getResponseHeader("Content-Type"),a=e.getAllResponseHeaders();t(n,r,o,new C(a))}},e.withCredentials=a,s)Object.prototype.hasOwnProperty.call(s,u)&&e.setRequestHeader(u,s[u]);return e.send(),e},m.prototype.get=function(e){return this._headers.get(e)},S.prototype.open=function(e,t,n,r,o,i,a){var s=null,c=new y,u=c.signal,h=new p;return d(o,{headers:a,credentials:i?"include":"same-origin",signal:u,cache:"no-store"}).then((function(e){return s=e.body.getReader(),t(e.status,e.statusText,e.headers.get("Content-Type"),new m(e.headers)),new l((function(e,t){var r=function(){s.read().then((function(t){if(t.done)e(void 0);else{var o=h.decode(t.value,{stream:!0});n(o),r()}})).catch((function(e){t(e)}))};r()}))})).catch((function(e){return"AbortError"===e.name?void 0:e})).then((function(e){r(e)})),{abort:function(){null!=s&&s.cancel(),c.abort()}}},_.prototype.dispatchEvent=function(e){e.target=this;var t=this._listeners[e.type];if(null!=t)for(var n=t.length,r=0;r<n;r+=1){var o=t[r];try{"function"==typeof o.handleEvent?o.handleEvent(e):o.call(this,e)}catch(i){x(i)}}},_.prototype.addEventListener=function(e,t){e=String(e);var n=this._listeners,r=n[e];null==r&&(r=[],n[e]=r);for(var o=!1,i=0;i<r.length;i+=1)r[i]===t&&(o=!0);o||r.push(t)},_.prototype.removeEventListener=function(e,t){e=String(e);var n=this._listeners,r=n[e];if(null!=r){for(var o=[],i=0;i<r.length;i+=1)r[i]!==t&&o.push(r[i]);0===o.length?delete n[e]:n[e]=o}},R.prototype=Object.create(A.prototype),O.prototype=Object.create(A.prototype),D.prototype=Object.create(A.prototype);var H=-1,N=-1,j=/^text\/event\-stream(;.*)?$/i,I=function(e,t){var n=null==e?t:parseInt(e,10);return n!=n&&(n=t),P(n)},P=function(e){return Math.min(Math.max(e,1e3),18e6)},L=function(e,t,n){try{"function"==typeof t&&t.call(e,n)}catch(r){x(r)}};function M(e,t){_.call(this),t=t||{},this.onopen=void 0,this.onmessage=void 0,this.onerror=void 0,this.url=void 0,this.readyState=void 0,this.withCredentials=void 0,this.headers=void 0,this._close=void 0,function(e,t,n){t=String(t);var s=Boolean(n.withCredentials),c=n.lastEventIdQueryParameterName||"lastEventId",u=P(1e3),l=I(n.heartbeatTimeout,45e3),d="",h=u,p=!1,f=0,y=n.headers||{},v=n.Transport,g=q&&null==v?void 0:new b(null!=v?new v:null!=i&&"withCredentials"in i.prototype||null==a?new i:new a),w=null!=v&&"string"!=typeof v?new v:null==g?new S:new T,E=void 0,C=0,m=H,_="",x="",A="",M="",X=0,G=0,V=0,B=function(t,n,r,o){if(0===m)if(200===t&&null!=r&&j.test(r)){m=1,p=Date.now(),h=u,e.readyState=1;var i=new O("open",{status:t,statusText:n,headers:o});e.dispatchEvent(i),L(e,e.onopen,i)}else{var a="";200!==t?(n&&(n=n.replace(/\s+/g," ")),a="EventSource's response has a status "+t+" "+n+" that is not 200. Aborting the connection."):a="EventSource's response has a Content-Type specifying an unsupported type: "+(null==r?"-":r.replace(/\s+/g," "))+". Aborting the connection.",z(),i=new O("error",{status:t,statusText:n,headers:o}),e.dispatchEvent(i),L(e,e.onerror,i),console.error(a)}},U=function(t){if(1===m){for(var n=-1,i=0;i<t.length;i+=1)(c=t.charCodeAt(i))!=="\n".charCodeAt(0)&&c!=="\r".charCodeAt(0)||(n=i);var a=(-1!==n?M:"")+t.slice(0,n+1);M=(-1===n?M:"")+t.slice(n+1),""!==t&&(p=Date.now(),f+=t.length);for(var s=0;s<a.length;s+=1){var c=a.charCodeAt(s);if(X===N&&c==="\n".charCodeAt(0))X=0;else if(X===N&&(X=0),c==="\r".charCodeAt(0)||c==="\n".charCodeAt(0)){if(0!==X){1===X&&(V=s+1);var y=a.slice(G,V-1),v=a.slice(V+(V<s&&a.charCodeAt(V)===" ".charCodeAt(0)?1:0),s);"data"===y?(_+="\n",_+=v):"id"===y?x=v:"event"===y?A=v:"retry"===y?(u=I(v,u),h=u):"heartbeatTimeout"===y&&(l=I(v,l),0!==C&&(o(C),C=r((function(){K()}),l)))}if(0===X){if(""!==_){d=x,""===A&&(A="message");var g=new R(A,{data:_.slice(1),lastEventId:x});if(e.dispatchEvent(g),"open"===A?L(e,e.onopen,g):"message"===A?L(e,e.onmessage,g):"error"===A&&L(e,e.onerror,g),2===m)return}_="",A=""}X=c==="\r".charCodeAt(0)?N:0}else 0===X&&(G=s,X=1),1===X?c===":".charCodeAt(0)&&(V=s+1,X=2):2===X&&(X=3)}}},k=function(t){if(1===m||0===m){m=H,0!==C&&(o(C),C=0),C=r((function(){K()}),h),h=P(Math.min(16*u,2*h)),e.readyState=0;var n=new D("error",{error:t});e.dispatchEvent(n),L(e,e.onerror,n),null!=t&&console.error(t)}},z=function(){m=2,null!=E&&(E.abort(),E=void 0),0!==C&&(o(C),C=0),e.readyState=2},K=function(){if(C=0,m===H){p=!1,f=0,C=r((function(){K()}),l),m=0,_="",A="",x=d,M="",G=0,V=0,X=0;var n=t;if("data:"!==t.slice(0,5)&&"blob:"!==t.slice(0,5)&&""!==d){var o=t.indexOf("?");n=-1===o?t:t.slice(0,o+1)+t.slice(o+1).replace(/(?:^|&)([^=&]*)(?:=[^&]*)?/g,(function(e,t){return t===c?"":e})),n+=(-1===t.indexOf("?")?"?":"&")+c+"="+encodeURIComponent(d)}var i=e.withCredentials,a={Accept:"text/event-stream"},s=e.headers;if(null!=s)for(var u in s)Object.prototype.hasOwnProperty.call(s,u)&&(a[u]=s[u]);try{E=w.open(g,B,U,k,n,i,a)}catch(y){throw z(),y}}else if(p||null==E){var h=Math.max((p||Date.now())+l-Date.now(),1);p=!1,C=r((function(){K()}),h)}else k(new Error("No activity within "+l+" milliseconds. "+(0===m?"No response received.":f+" chars received.")+" Reconnecting.")),null!=E&&(E.abort(),E=void 0)};e.url=t,e.readyState=0,e.withCredentials=s,e.headers=y,e._close=z,K()}(this,e,t)}var q=null!=d&&null!=h&&"body"in h.prototype;M.prototype=Object.create(_.prototype),M.prototype.CONNECTING=0,M.prototype.OPEN=1,M.prototype.CLOSED=2,M.prototype.close=function(){this._close()},M.CONNECTING=0,M.OPEN=1,M.CLOSED=2,M.prototype.withCredentials=void 0;var X,G=c;null==i||null!=c&&"withCredentials"in c.prototype||(G=M),X=function(e){e.EventSourcePolyfill=M,e.NativeEventSource=c,e.EventSource=G}(t),void 0!==X&&(e.exports=X)}("undefined"==typeof globalThis?"undefined"!=typeof window?window:"undefined"!=typeof self?self:r:globalThis)}(n,n.exports)),n.exports))}}}));
