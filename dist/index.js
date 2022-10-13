function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var t=require("react"),o=e(t),n=e(require("prop-types")),r=e(require("react-dom")),i=e(require("eventemitter3")),s=require("@googlemaps/js-api-loader"),a=e(require("@mapbox/point-geometry"));function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function l(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h={width:"100%",height:"100%",left:0,top:0,margin:0,padding:0,position:"absolute"},c=function(e){function t(){return e.apply(this,arguments)||this}l(t,e);var n=t.prototype;return n.shouldComponentUpdate=function(){return!1},n.render=function(){return o.createElement("div",{ref:this.props.registerChild,style:h})},t}(t.Component),d=function(e){function t(t){var o;return(o=e.call(this)||this).gmapInstance=t,o}l(t,e);var o=t.prototype;return o.getChildren=function(){return this.gmapInstance.props.children},o.getMousePosition=function(){return this.gmapInstance.mouse_},o.getUpdateCounter=function(){return this.gmapInstance.updateCounter_},o.dispose=function(){this.gmapInstance=null,this.removeAllListeners()},t}(i),g=function(e,t){for(var o=p({},e),n=0;n<t.length;n++){var r=t[n];r in o&&delete o[r]}return o},m=Object.prototype.hasOwnProperty;function _(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function f(e,t){if(_(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var o=Object.keys(e),n=Object.keys(t);if(o.length!==n.length)return!1;for(var r=0;r<o.length;r++)if(!m.call(t,o[r])||!_(e[o[r]],t[o[r]]))return!1;return!0}var v={width:"100%",height:"100%",left:0,top:0,margin:0,padding:0,position:"absolute"},M={width:0,height:0,left:0,top:0,backgroundColor:"transparent",position:"absolute"},y=function(e){function t(t){var n;return(n=e.call(this,t)||this)._getState=function(){return{children:n.props.dispatcher.getChildren(),updateCounter:n.props.dispatcher.getUpdateCounter()}},n._onChangeHandler=function(){if(n.dimensionsCache_){var e=(n.state.children||[]).length,t=n._getState();n.setState(t,function(){return(t.children||[]).length!==e&&n._onMouseChangeHandler()})}},n._onChildClick=function(){n.props.onChildClick&&n.hoverChildProps_&&n.props.onChildClick(n.hoverKey_,n.hoverChildProps_)},n._onChildMouseDown=function(){n.props.onChildMouseDown&&n.hoverChildProps_&&n.props.onChildMouseDown(n.hoverKey_,n.hoverChildProps_)},n._onChildMouseEnter=function(e,t){n.dimensionsCache_&&(n.props.onChildMouseEnter&&n.props.onChildMouseEnter(e,t),n.hoverChildProps_=t,n.hoverKey_=e,n.setState({hoverKey:e}))},n._onChildMouseLeave=function(){if(n.dimensionsCache_){var e=n.hoverKey_;null!=e&&(n.props.onChildMouseLeave&&n.props.onChildMouseLeave(e,n.hoverChildProps_),n.hoverKey_=null,n.hoverChildProps_=null,n.setState({hoverKey:null}))}},n._onMouseAllow=function(e){e||n._onChildMouseLeave(),n.allowMouse_=e},n._onMouseChangeHandler=function(){n.allowMouse_&&n._onMouseChangeHandlerRaf()},n._onMouseChangeHandlerRaf=function(){if(n.dimensionsCache_){var e=n.props.dispatcher.getMousePosition();if(e){var t=[],r=n.props.getHoverDistance();if(o.Children.forEach(n.state.children,function(o,i){if(o&&(void 0!==o.props.latLng||void 0!==o.props.lat||void 0!==o.props.lng)){var s=null!=o.key?o.key:i,a=n.props.distanceToMouse(n.dimensionsCache_[s],e,o.props);a<r&&t.push({key:s,dist:a,props:o.props})}}),t.length){t.sort(function(e,t){return e.dist-t.dist});var i=t[0].key,s=t[0].props;n.hoverKey_!==i&&(n._onChildMouseLeave(),n._onChildMouseEnter(i,s))}else n._onChildMouseLeave()}else n._onChildMouseLeave()}},n._getDimensions=function(e){return n.dimensionsCache_[e]},n.dimensionsCache_={},n.hoverKey_=null,n.hoverChildProps_=null,n.allowMouse_=!0,n.state=p({},n._getState(),{hoverKey:null}),n}l(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.dispatcher.on("kON_CHANGE",this._onChangeHandler),this.props.dispatcher.on("kON_MOUSE_POSITION_CHANGE",this._onMouseChangeHandler),this.props.dispatcher.on("kON_CLICK",this._onChildClick),this.props.dispatcher.on("kON_MDOWN",this._onChildMouseDown)},n.shouldComponentUpdate=function(e,t){return!0===this.props.experimental?!f(this.props,e)||!f(g(this.state,["hoverKey"]),g(t,["hoverKey"])):!f(this.props,e)||!f(this.state,t)},n.componentWillUnmount=function(){this.props.dispatcher.removeListener("kON_CHANGE",this._onChangeHandler),this.props.dispatcher.removeListener("kON_MOUSE_POSITION_CHANGE",this._onMouseChangeHandler),this.props.dispatcher.removeListener("kON_CLICK",this._onChildClick),this.props.dispatcher.removeListener("kON_MDOWN",this._onChildMouseDown),this.dimensionsCache_=null},n.render=function(){var e=this,t=this.props.style||v;this.dimensionsCache_={};var n=o.Children.map(this.state.children,function(t,n){if(t){if(void 0===t.props.latLng&&void 0===t.props.lat&&void 0===t.props.lng)return o.cloneElement(t,{$geoService:e.props.geoService,$onMouseAllow:e._onMouseAllow,$prerender:e.props.prerender});var r=void 0!==t.props.latLng?t.props.latLng:{lat:t.props.lat,lng:t.props.lng},i=e.props.insideMapPanes?e.props.geoService.fromLatLngToDivPixel(r):e.props.geoService.fromLatLngToCenterPixel(r),s={left:i.x,top:i.y};if(void 0!==t.props.seLatLng||void 0!==t.props.seLat&&void 0!==t.props.seLng){var a=void 0!==t.props.seLatLng?t.props.seLatLng:{lat:t.props.seLat,lng:t.props.seLng},l=e.props.insideMapPanes?e.props.geoService.fromLatLngToDivPixel(a):e.props.geoService.fromLatLngToCenterPixel(a);s.width=l.x-i.x,s.height=l.y-i.y}var u=e.props.geoService.fromLatLngToContainerPixel(r),h=null!=t.key?t.key:n;return e.dimensionsCache_[h]=p({x:u.x,y:u.y},r),o.createElement("div",{key:h,style:p({},M,s),className:t.props.$markerHolderClassName},o.cloneElement(t,{$hover:h===e.state.hoverKey,$getDimensions:e._getDimensions,$dimensionKey:h,$geoService:e.props.geoService,$onMouseAllow:e._onMouseAllow,$prerender:e.props.prerender}))}});return o.createElement("div",{style:t},n)},t}(t.Component);y.propTypes={geoService:n.any,style:n.any,distanceToMouse:n.func,dispatcher:n.any,onChildClick:n.func,onChildMouseDown:n.func,onChildMouseLeave:n.func,onChildMouseEnter:n.func,getHoverDistance:n.func,insideMapPanes:n.bool,prerender:n.bool},y.defaultProps={insideMapPanes:!1,prerender:!1};var C={width:"50%",height:"50%",left:"50%",top:"50%",margin:0,padding:0,position:"absolute"};function w(e){return o.createElement("div",{style:C},o.createElement(y,p({},e,{prerender:!0})))}var L,b,D,z=new Promise(function(e){D=e}),O=function(e,t){if(!e)return z;if(b)return b;e.libraries||(e.libraries=[]);var o=[].concat(e.libraries);if(t&&(0!==o.length&&o.includes("visualization")||o.push("visualization"),console.warn("heatmapLibrary will be deprecated in the future. Please use { libraries: ['visualization'] } in bootstrapURLKeys property instead")),"production"!==process.env.NODE_ENV&&Object.keys(e).indexOf("callback")>-1){var n='"callback" key in bootstrapURLKeys is not allowed,\n                      use onGoogleApiLoaded property instead';throw console.error(n),new Error(n)}if("undefined"==typeof window)throw new Error("google map cannot be loaded outside browser env");var r=e.key,i=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(o=i[n])>=0||(r[o]=e[o]);return r}(e,["key"]);return L||(L=new s.Loader(p({apiKey:r||""},i,{libraries:o}))),b=L.load().then(function(){return D(window.google.maps),window.google.maps}),D(b),b};function k(e,t,o){var n=o-t;return e===o?e:((e-t)%n+n)%n+t}var S=function(){function e(e,t){if(isNaN(e)||isNaN(t))throw new Error("Invalid LatLng object: ("+e+", "+t+")");this.lat=+e,this.lng=+t}return e.prototype.wrap=function(){return new e(this.lat,k(this.lng,-180,180))},e}();S.convert=function(e){return e instanceof S?e:Array.isArray(e)?new S(e[0],e[1]):"lng"in e&&"lat"in e?new S(e.lat,e.lng):e};var x=function(){function e(e,t,o){this.tileSize=e||512,this._minZoom=t||0,this._maxZoom=o||52,this.latRange=[-85.05113,85.05113],this.width=0,this.height=0,this.zoom=0,this.center=new S(0,0),this.angle=0}var t,o=e.prototype;return o.zoomScale=function(e){return Math.pow(2,e)},o.scaleZoom=function(e){return Math.log(e)/Math.LN2},o.project=function(e,t){return new a(this.lngX(e.lng,t),this.latY(e.lat,t))},o.unproject=function(e,t){return new S(this.yLat(e.y,t),this.xLng(e.x,t))},o.lngX=function(e,t){return(180+e)*(t||this.worldSize)/360},o.latY=function(e,t){return(180-180/Math.PI*Math.log(Math.tan(Math.PI/4+e*Math.PI/360)))*(t||this.worldSize)/360},o.xLng=function(e,t){return 360*e/(t||this.worldSize)-180},o.yLat=function(e,t){return 360/Math.PI*Math.atan(Math.exp((180-360*e/(t||this.worldSize))*Math.PI/180))-90},o.locationPoint=function(e){var t=this.project(e);return this.centerPoint._sub(this.point._sub(t)._rotate(this.angle))},o.pointLocation=function(e){var t=this.centerPoint._sub(e)._rotate(-this.angle);return this.unproject(this.point.sub(t))},(t=[{key:"minZoom",get:function(){return this._minZoom},set:function(e){this._minZoom=e,this.zoom=Math.max(this.zoom,e)}},{key:"maxZoom",get:function(){return this._maxZoom},set:function(e){this._maxZoom=e,this.zoom=Math.min(this.zoom,e)}},{key:"worldSize",get:function(){return this.tileSize*this.scale}},{key:"centerPoint",get:function(){return new a(0,0)}},{key:"size",get:function(){return new a(this.width,this.height)}},{key:"bearing",get:function(){return-this.angle/Math.PI*180},set:function(e){this.angle=-k(e,-180,180)*Math.PI/180}},{key:"zoom",get:function(){return this._zoom},set:function(e){var t=Math.min(Math.max(e,this.minZoom),this.maxZoom);this._zoom=t,this.scale=this.zoomScale(t),this.tileZoom=Math.floor(t),this.zoomFraction=t-this.tileZoom}},{key:"x",get:function(){return this.lngX(this.center.lng)}},{key:"y",get:function(){return this.latY(this.center.lat)}},{key:"point",get:function(){return new a(this.x,this.y)}}])&&function(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(e.prototype,t),e}(),T=function(){function e(e){this.hasSize_=!1,this.hasView_=!1,this.transform_=new x(e||512)}var t=e.prototype;return t.setView=function(e,t,o){this.transform_.center=S.convert(e),this.transform_.zoom=+t,this.transform_.bearing=+o,this.hasView_=!0},t.setViewSize=function(e,t){this.transform_.width=e,this.transform_.height=t,this.hasSize_=!0},t.setMapCanvasProjection=function(e,t){this.maps_=e,this.mapCanvasProjection_=t},t.canProject=function(){return this.hasSize_&&this.hasView_},t.hasSize=function(){return this.hasSize_},t.fromLatLngToCenterPixel=function(e){return this.transform_.locationPoint(S.convert(e))},t.fromLatLngToDivPixel=function(e){if(this.mapCanvasProjection_){var t=new this.maps_.LatLng(e.lat,e.lng);return this.mapCanvasProjection_.fromLatLngToDivPixel(t)}return this.fromLatLngToCenterPixel(e)},t.fromLatLngToContainerPixel=function(e){if(this.mapCanvasProjection_){var t=new this.maps_.LatLng(e.lat,e.lng);return this.mapCanvasProjection_.fromLatLngToContainerPixel(t)}var o=this.fromLatLngToCenterPixel(e);return o.x-=this.transform_.worldSize*Math.round(o.x/this.transform_.worldSize),o.x+=this.transform_.width/2,o.y+=this.transform_.height/2,o},t.fromContainerPixelToLatLng=function(e){if(this.mapCanvasProjection_){var t=this.mapCanvasProjection_.fromContainerPixelToLatLng(e);return{lat:t.lat(),lng:t.lng()}}var o=p({},e);o.x-=this.transform_.width/2,o.y-=this.transform_.height/2;var n=this.transform_.pointLocation(a.convert(o));return n.lng-=360*Math.round(n.lng/360),n},t.getWidth=function(){return this.transform_.width},t.getHeight=function(){return this.transform_.height},t.getZoom=function(){return this.transform_.zoom},t.getCenter=function(){return this.transform_.pointLocation({x:0,y:0})},t.getBounds=function(e,t){var o=e&&e[0]||0,n=e&&e[1]||0,r=e&&e[2]||0,i=e&&e[3]||0;if(this.getWidth()-n-i>0&&this.getHeight()-o-r>0){var s=this.transform_.pointLocation(a.convert({x:i-this.getWidth()/2,y:o-this.getHeight()/2})),p=this.transform_.pointLocation(a.convert({x:this.getWidth()/2-n,y:this.getHeight()/2-r})),l=[s.lat,s.lng,p.lat,p.lng,p.lat,s.lng,s.lat,p.lng];return t&&(l=l.map(function(e){return Math.round(e*t)/t})),l}return[0,0,0,0]},e}();function E(e){if(window.requestAnimationFrame)return window.requestAnimationFrame(e);var t=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame;return t?t(e):window.setTimeout(e,1e3/60)}var P=Math.log2?Math.log2:function(e){return Math.log(e)/Math.LN2};function A(e,t){return Object.keys(e).reduce(function(o,n){return t(e[n])&&(o[n]=e[n]),o},{})}var I=function(e){if(null!==e&&"object"==typeof e){if(0===Object.keys(e).length)return!0}else if(null==e||""===e)return!0;return!1},N=Object.prototype.toString;function Z(e){return"number"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Number]"===N.call(e)}var j=null;function U(){if(j)return j;if("undefined"!=typeof navigator){var e=navigator.userAgent.indexOf("MSIE")>-1,t=navigator.userAgent.indexOf("Firefox")>-1,o=navigator.userAgent.toLowerCase().indexOf("op")>-1,n=navigator.userAgent.indexOf("Chrome")>-1,r=navigator.userAgent.indexOf("Safari")>-1;return n&&r&&(r=!1),n&&o&&(n=!1),j={isExplorer:e,isFirefox:t,isOpera:o,isChrome:n,isSafari:r}}return j={isChrome:!0,isExplorer:!1,isFirefox:!1,isOpera:!1,isSafari:!1}}var H=function(e){return Function.prototype.toString.call(e)};function K(e){if(!e||"object"!=typeof e)return!1;var t="function"==typeof e.constructor?Object.getPrototypeOf(e):Object.prototype;if(null===t)return!0;var o=t.constructor;return"function"==typeof o&&o instanceof o&&H(o)===H(Object)}function R(e,t,o,n){e.addEventListener(t,o,function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){e=!1}return e}()?{capture:n,passive:!0}:n)}var B,G=!("undefined"==typeof window||!window.document||!window.document.createElement);B=G?window:"undefined"!=typeof self?self:void 0;var W,V="undefined"!=typeof document&&document.attachEvent,F=!1;if(G&&!V){var q=function(){var e=B.requestAnimationFrame||B.mozRequestAnimationFrame||B.webkitRequestAnimationFrame||function(e){return B.setTimeout(e,20)};return function(t){return e(t)}}(),$=(W=B.cancelAnimationFrame||B.mozCancelAnimationFrame||B.webkitCancelAnimationFrame||B.clearTimeout,function(e){return W(e)}),Y=function(e){var t=e.__resizeTriggers__,o=t.firstElementChild,n=t.lastElementChild,r=o.firstElementChild;n.scrollLeft=n.scrollWidth,n.scrollTop=n.scrollHeight,r.style.width=o.offsetWidth+1+"px",r.style.height=o.offsetHeight+1+"px",o.scrollLeft=o.scrollWidth,o.scrollTop=o.scrollHeight},X=function(e){var t=this;Y(this),this.__resizeRAF__&&$(this.__resizeRAF__),this.__resizeRAF__=q(function(){(function(e){return e.offsetWidth!=e.__resizeLast__.width||e.offsetHeight!=e.__resizeLast__.height})(t)&&(t.__resizeLast__.width=t.offsetWidth,t.__resizeLast__.height=t.offsetHeight,t.__resizeListeners__.forEach(function(o){o.call(t,e)}))})},J=!1,Q="",ee="animationstart",te="Webkit Moz O ms".split(" "),oe="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" ");if(G){var ne=document.createElement("fakeelement");if(void 0!==ne.style.animationName&&(J=!0),!1===J)for(var re=0;re<te.length;re++)if(void 0!==ne.style[te[re]+"AnimationName"]){Q="-"+te[re].toLowerCase()+"-",ee=oe[re],J=!0;break}}var ie="resizeanim",se="@"+Q+"keyframes "+ie+" { from { opacity: 0; } to { opacity: 0; } } ",ae=Q+"animation: 1ms "+ie+"; "}var pe=void 0!==r.createPortal,le=pe?r.createPortal:r.unstable_renderSubtreeIntoContainer,ue=function(e){return K(e)?e:{lat:e[0],lng:e[1]}},he=function(e,t){return"production"!==process.env.NODE_ENV&&e<t&&console.warn("GoogleMap: minZoom option is less than recommended minZoom option for your map sizes.\noverrided to value "+t),t<e?e:t},ce=function(e){function t(t){var n;if((n=e.call(this,t)||this)._getMinZoom=function(){if(n.geoService_.getWidth()>0||n.geoService_.getHeight()>0){var e=Math.ceil(n.geoService_.getWidth()/256)+2,t=Math.ceil(n.geoService_.getHeight()/256)+2,o=Math.max(e,t);return Math.ceil(P(o))}return 3},n._computeMinZoom=function(e){return I(e)?n._getMinZoom():e},n._mapDomResizeCallback=function(){if(n.resetSizeOnIdle_=!0,n.maps_){var e=n.props.center||n.props.defaultCenter,t=n.map_.getCenter();n.maps_.event.trigger(n.map_,"resize"),n.map_.setCenter(n.props.resetBoundsOnResize?e:t)}},n._setLayers=function(e){e.forEach(function(e){n.layers_[e]=new n.maps_[e],n.layers_[e].setMap(n.map_)})},n._renderPortal=function(){return o.createElement(y,{experimental:n.props.experimental,onChildClick:n._onChildClick,onChildMouseDown:n._onChildMouseDown,onChildMouseEnter:n._onChildMouseEnter,onChildMouseLeave:n._onChildMouseLeave,geoService:n.geoService_,insideMapPanes:!0,distanceToMouse:n.props.distanceToMouse,getHoverDistance:n._getHoverDistance,dispatcher:n.markersDispatcher_})},n._initMap=function(){if(!n.initialized_){n.initialized_=!0;var e=ue(n.props.center||n.props.defaultCenter);n.geoService_.setView(e,n.props.zoom||n.props.defaultZoom,0),n._onBoundsChanged();var t=p({},n.props.apiKey&&{key:n.props.apiKey},n.props.bootstrapURLKeys);n.props.googleMapLoader(t,n.props.heatmapLibrary).then(function(e){if(n.mounted_){var t,o,i=n.geoService_.getCenter(),s={zoom:n.props.zoom||n.props.defaultZoom,center:new e.LatLng(i.lat,i.lng)};n.props.heatmap.positions&&(Object.assign(u(n),{heatmap:(t=e,o=n.props.heatmap,new t.visualization.HeatmapLayer({data:o.positions.reduce(function(e,o){var n=o.weight,r=void 0===n?1:n;return e.push({location:new t.LatLng(o.lat,o.lng),weight:r}),e},[])}))}),function(e,t){var o=t.options,n=void 0===o?{}:o;Object.keys(n).map(function(t){return e.set(t,n[t])})}(n.heatmap,n.props.heatmap));var a=A(e,K),l="function"==typeof n.props.options?n.props.options(a):n.props.options,h=!I(n.props.draggable)&&{draggable:n.props.draggable},c=n._computeMinZoom(l.minZoom);n.minZoom_=c;var d=p({},{overviewMapControl:!1,streetViewControl:!1,rotateControl:!0,mapTypeControl:!1,styles:[{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]}],minZoom:3},{minZoom:c},l,s);n.defaultDraggableOption_=I(d.draggable)?n.defaultDraggableOption_:d.draggable;var g=p({},d,h);g.minZoom=he(g.minZoom,c);var m=new e.Map(r.findDOMNode(n.googleMapDom_),g);n.map_=m,n.maps_=e,n._setLayers(n.props.layerTypes);var _=e.version.match(/^3\.(\d+)\./),f=_&&Number(_[1]),v=u(n),M=Object.assign(new e.OverlayView,{onAdd:function(){var t="undefined"!=typeof screen?screen.width+"px":"2000px",o="undefined"!=typeof screen?screen.height+"px":"2000px",n=document.createElement("div");if(n.style.backgroundColor="transparent",n.style.position="absolute",n.style.left="0px",n.style.top="0px",n.style.width=t,n.style.height=o,v.props.overlayViewDivStyle){var r=v.props.overlayViewDivStyle;"object"==typeof r&&Object.keys(r).forEach(function(e){n.style[e]=r[e]})}this.getPanes().overlayMouseTarget.appendChild(n),v.geoService_.setMapCanvasProjection(e,M.getProjection()),pe?v.setState({overlay:n}):le(v,v._renderPortal(),n,function(){return v.setState({overlay:n})})},onRemove:function(){var e=v.state.overlay;e&&!pe&&r.unmountComponentAtNode(e),v.setState({overlay:null})},draw:function(){if(v.updateCounter_++,v._onBoundsChanged(m,e,!v.props.debounced),v.googleApiLoadedCalled_||(v._onGoogleApiLoaded({map:m,maps:e,ref:v.googleMapDom_}),v.googleApiLoadedCalled_=!0),v.mouse_){var t=v.geoService_.fromContainerPixelToLatLng(v.mouse_);v.mouse_.lat=t.lat,v.mouse_.lng=t.lng}v._onChildMouseMove(),v.markersDispatcher_&&(console.log("change 2!"),v.markersDispatcher_.emit("kON_CHANGE"),v.fireMouseEventOnIdle_&&v.markersDispatcher_.emit("kON_MOUSE_POSITION_CHANGE"))}});n.overlay_=M,M.setMap(m),n.props.heatmap.positions&&n.heatmap.setMap(m),n.props.onTilesLoaded&&e.event.addListener(m,"tilesloaded",function(){v._onTilesLoaded()}),e.event.addListener(m,"zoom_changed",function(){v.geoService_.getZoom()!==m.getZoom()&&(v.zoomAnimationInProgress_||(v.zoomAnimationInProgress_=!0,v._onZoomAnimationStart(m.zoom)),f<32)&&((new Date).getTime()-n.zoomControlClickTime_<300?E(function(){return E(function(){v.updateCounter_++,v._onBoundsChanged(m,e)})}):(v.updateCounter_++,v._onBoundsChanged(m,e)))}),e.event.addListener(m,"idle",function(){if(n.resetSizeOnIdle_){n._setViewSize();var t=n._computeMinZoom(l.minZoom);t!==n.minZoom_&&(n.minZoom_=t,m.setOptions({minZoom:t})),n.resetSizeOnIdle_=!1}v.zoomAnimationInProgress_&&(v.zoomAnimationInProgress_=!1,v._onZoomAnimationEnd(m.zoom)),v.updateCounter_++,v._onBoundsChanged(m,e),v.dragTime_=0,v.markersDispatcher_&&(console.log("change 3!"),r.flushSync(function(){v.markersDispatcher_.emit("kON_CHANGE")}))}),e.event.addListener(m,"mouseover",function(){v.mouseInMap_=!0}),e.event.addListener(m,"click",function(){v.mouseInMap_=!0}),e.event.addListener(m,"mouseout",function(){v.mouseInMap_=!1,v.mouse_=null,v.markersDispatcher_.emit("kON_MOUSE_POSITION_CHANGE")}),e.event.addListener(m,"drag",function(){v.dragTime_=(new Date).getTime(),v._onDrag(m)}),e.event.addListener(m,"dragend",function(){var t=e.event.addListener(m,"idle",function(){e.event.removeListener(t),v._onDragEnd(m)})}),e.event.addListener(m,"maptypeid_changed",function(){v._onMapTypeIdChange(m.getMapTypeId())})}}).catch(function(e){throw n._onGoogleApiLoaded({map:null,maps:null,ref:n.googleMapDom_}),console.error(e),e})}},n._onGoogleApiLoaded=function(){var e;n.props.onGoogleApiLoaded&&("production"!==process.env.NODE_ENV&&!0!==n.props.yesIWantToUseGoogleMapApiInternals&&console.warn("GoogleMap: Usage of internal api objects is dangerous and can cause a lot of issues.\nTo hide this warning add yesIWantToUseGoogleMapApiInternals={true} to <GoogleMap instance"),(e=n.props).onGoogleApiLoaded.apply(e,arguments))},n._getHoverDistance=function(){return n.props.hoverDistance},n._onDrag=function(){var e;return n.props.onDrag&&(e=n.props).onDrag.apply(e,arguments)},n._onDragEnd=function(){var e;return n.props.onDragEnd&&(e=n.props).onDragEnd.apply(e,arguments)},n._onMapTypeIdChange=function(){var e;return n.props.onMapTypeIdChange&&(e=n.props).onMapTypeIdChange.apply(e,arguments)},n._onZoomAnimationStart=function(){var e;return n.props.onZoomAnimationStart&&(e=n.props).onZoomAnimationStart.apply(e,arguments)},n._onZoomAnimationEnd=function(){var e;return n.props.onZoomAnimationEnd&&(e=n.props).onZoomAnimationEnd.apply(e,arguments)},n._onTilesLoaded=function(){return n.props.onTilesLoaded&&n.props.onTilesLoaded()},n._onChildClick=function(){var e;if(n.props.onChildClick)return(e=n.props).onChildClick.apply(e,arguments)},n._onChildMouseDown=function(e,t){n.childMouseDownArgs_=[e,t],n.props.onChildMouseDown&&n.props.onChildMouseDown(e,t,p({},n.mouse_))},n._onChildMouseUp=function(){var e;n.childMouseDownArgs_&&(n.props.onChildMouseUp&&(e=n.props).onChildMouseUp.apply(e,n.childMouseDownArgs_.concat([p({},n.mouse_)])),n.childMouseDownArgs_=null,n.childMouseUpTime_=(new Date).getTime())},n._onChildMouseMove=function(){var e;n.childMouseDownArgs_&&n.props.onChildMouseMove&&(e=n.props).onChildMouseMove.apply(e,n.childMouseDownArgs_.concat([p({},n.mouse_)]))},n._onChildMouseEnter=function(){var e;if(n.props.onChildMouseEnter)return(e=n.props).onChildMouseEnter.apply(e,arguments)},n._onChildMouseLeave=function(){var e;if(n.props.onChildMouseLeave)return(e=n.props).onChildMouseLeave.apply(e,arguments)},n._setViewSize=function(){if(n.mounted_){if(document.fullscreen||document.webkitIsFullScreen||document.mozFullScreen||document.msFullscreenElement)n.geoService_.setViewSize(window.innerWidth,window.innerHeight);else{var e=r.findDOMNode(n.googleMapDom_);n.geoService_.setViewSize(e.clientWidth,e.clientHeight)}n._onBoundsChanged()}},n._onWindowResize=function(){n.resetSizeOnIdle_=!0},n._onMapMouseMove=function(e){if(n.mouseInMap_){var t=(new Date).getTime();t-n.mouseMoveTime_>50&&(n.boundingRect_=e.currentTarget.getBoundingClientRect()),n.mouseMoveTime_=t;var o=e.clientX-n.boundingRect_.left,r=e.clientY-n.boundingRect_.top;n.mouse_||(n.mouse_={x:0,y:0,lat:0,lng:0}),n.mouse_.x=o,n.mouse_.y=r;var i=n.geoService_.fromContainerPixelToLatLng(n.mouse_);n.mouse_.lat=i.lat,n.mouse_.lng=i.lng,n._onChildMouseMove(),t-n.dragTime_<100?n.fireMouseEventOnIdle_=!0:(n.markersDispatcher_.emit("kON_MOUSE_POSITION_CHANGE"),n.fireMouseEventOnIdle_=!1)}},n._onClick=function(){var e;return n.props.onClick&&!n.childMouseDownArgs_&&(new Date).getTime()-n.childMouseUpTime_>300&&0===n.dragTime_&&(e=n.props).onClick.apply(e,arguments)},n._onMapClick=function(e){n.markersDispatcher_&&(n._onMapMouseMove(e),(new Date).getTime()-n.dragTime_>100&&(n.mouse_&&n._onClick(p({},n.mouse_,{event:e})),n.markersDispatcher_.emit("kON_CLICK",e)))},n._onMapMouseDownNative=function(e){n.mouseInMap_&&n._onMapMouseDown(e)},n._onMapMouseDown=function(e){n.markersDispatcher_&&(new Date).getTime()-n.dragTime_>100&&(n._onMapMouseMove(e),n.markersDispatcher_.emit("kON_MDOWN",e))},n._onMapMouseDownCapture=function(){U().isChrome&&(n.zoomControlClickTime_=(new Date).getTime())},n._onKeyDownCapture=function(){U().isChrome&&(n.zoomControlClickTime_=(new Date).getTime())},n._isCenterDefined=function(e){return e&&(K(e)&&Z(e.lat)&&Z(e.lng)||2===e.length&&Z(e[0])&&Z(e[1]))},n._onBoundsChanged=function(e,t,o){if(e){var r=e.getCenter();n.geoService_.setView([r.lat(),r.lng()],e.getZoom(),0)}if((n.props.onChange||n.props.onBoundsChange)&&n.geoService_.canProject()){var i=n.geoService_.getZoom(),s=n.geoService_.getBounds(),a=n.geoService_.getCenter();if(!function(e,t,o){if(e&&t){for(var n=0;n!==e.length;++n)if(Math.abs(e[n]-t[n])>1e-5)return!1;return!0}return!1}(s,n.prevBounds_)&&!1!==o){var l=n.geoService_.getBounds(n.props.margin);n.props.onBoundsChange&&n.props.onBoundsChange(n.centerIsObject_?p({},a):[a.lat,a.lng],i,s,l),n.props.onChange&&n.props.onChange({center:p({},a),zoom:i,bounds:{nw:{lat:s[0],lng:s[1]},se:{lat:s[2],lng:s[3]},sw:{lat:s[4],lng:s[5]},ne:{lat:s[6],lng:s[7]}},marginBounds:{nw:{lat:l[0],lng:l[1]},se:{lat:l[2],lng:l[3]},sw:{lat:l[4],lng:l[5]},ne:{lat:l[6],lng:l[7]}},size:n.geoService_.hasSize()?{width:n.geoService_.getWidth(),height:n.geoService_.getHeight()}:{width:0,height:0}}),n.prevBounds_=s}}},n._registerChild=function(e){n.googleMapDom_=e},n.mounted_=!1,n.initialized_=!1,n.googleApiLoadedCalled_=!1,n.map_=null,n.maps_=null,n.prevBounds_=null,n.heatmap=null,n.layers_={},n.mouse_=null,n.mouseMoveTime_=0,n.boundingRect_=null,n.mouseInMap_=!0,n.dragTime_=0,n.fireMouseEventOnIdle_=!1,n.updateCounter_=0,n.markersDispatcher_=new d(u(n)),n.geoService_=new T(256),n.centerIsObject_=K(n.props.center),n.minZoom_=3,n.defaultDraggableOption_=!0,n.zoomControlClickTime_=0,n.childMouseDownArgs_=null,n.childMouseUpTime_=0,n.googleMapDom_=null,"production"!==process.env.NODE_ENV&&(n.props.apiKey&&console.warn("GoogleMap: apiKey is deprecated, use bootstrapURLKeys={{key: YOUR_API_KEY}} instead."),n.props.onBoundsChange&&console.warn("GoogleMap: onBoundsChange is deprecated, use onChange({center, zoom, bounds, ...other}) instead."),I(n.props.center)&&I(n.props.defaultCenter)&&console.warn("GoogleMap: center or defaultCenter property must be defined"),I(n.props.zoom)&&I(n.props.defaultZoom)&&console.warn("GoogleMap: zoom or defaultZoom property must be defined")),n._isCenterDefined(n.props.center||n.props.defaultCenter)){var i=ue(n.props.center||n.props.defaultCenter);n.geoService_.setView(i,n.props.zoom||n.props.defaultZoom,0)}return n.zoomAnimationInProgress_=!1,n.state={overlay:null},n}l(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.mounted_=!0,R(window,"resize",this._onWindowResize,!1),R(window,"keydown",this._onKeyDownCapture,!0);var t=r.findDOMNode(this.googleMapDom_);t&&R(t,"mousedown",this._onMapMouseDownNative,!0),R(window,"mouseup",this._onChildMouseUp,!1);var o=p({},this.props.apiKey&&{key:this.props.apiKey},this.props.bootstrapURLKeys);this.props.googleMapLoader(o,this.props.heatmapLibrary),setTimeout(function(){e._setViewSize(),e._isCenterDefined(e.props.center||e.props.defaultCenter)&&e._initMap()},0,this),this.props.resetBoundsOnResize&&function(e,t){if(void 0===e.parentNode){var o=document.createElement("div");e.parentNode=o}e=e.parentNode,V?e.attachEvent("onresize",t):(e.__resizeTriggers__||("static"==getComputedStyle(e).position&&(e.style.position="relative"),function(){if(!F){var e=(se||"")+".resize-triggers { "+(ae||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',t=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e)),t.appendChild(o),F=!0}}(),e.__resizeLast__={},e.__resizeListeners__=[],(e.__resizeTriggers__=document.createElement("div")).className="resize-triggers",e.__resizeTriggers__.innerHTML='<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>',e.appendChild(e.__resizeTriggers__),Y(e),R(e,"scroll",X,!0),ee&&e.__resizeTriggers__.addEventListener(ee,function(t){t.animationName==ie&&Y(e)})),e.__resizeListeners__.push(t))}(t,this._mapDomResizeCallback)},n.shouldComponentUpdate=function(e,t){return!f(g(this.props,["draggable"]),g(e,["draggable"]))||!f(this.state,t)},n.componentDidUpdate=function(e){var t=this;if("production"!==process.env.NODE_ENV&&(f(e.defaultCenter,this.props.defaultCenter)||console.warn("GoogleMap: defaultCenter prop changed. You can't change default props."),f(e.defaultZoom,this.props.defaultZoom)||console.warn("GoogleMap: defaultZoom prop changed. You can't change default props.")),!this._isCenterDefined(e.center)&&this._isCenterDefined(this.props.center)&&setTimeout(function(){return t._initMap()},0),this.map_){var o=this.geoService_.getCenter();if(this._isCenterDefined(this.props.center)){var n=ue(this.props.center),r=this._isCenterDefined(e.center)?ue(e.center):null;(!r||Math.abs(n.lat-r.lat)+Math.abs(n.lng-r.lng)>1e-5)&&Math.abs(n.lat-o.lat)+Math.abs(n.lng-o.lng)>1e-5&&this.map_.panTo({lat:n.lat,lng:n.lng})}if(I(this.props.zoom)||Math.abs(this.props.zoom-e.zoom)>0&&this.map_.setZoom(this.props.zoom),!I(e.draggable)&&I(this.props.draggable)?this.map_.setOptions({draggable:this.defaultDraggableOption_}):f(e.draggable,this.props.draggable)||this.map_.setOptions({draggable:this.props.draggable}),!I(this.props.options)&&!f(e.options,this.props.options)){var i=A(this.maps_,K),s="function"==typeof this.props.options?this.props.options(i):this.props.options;if("minZoom"in(s=g(s,["zoom","center","draggable"]))){var a=this._computeMinZoom(s.minZoom);s.minZoom=he(s.minZoom,a)}this.map_.setOptions(s)}f(this.props.layerTypes,e.layerTypes)||(Object.keys(this.layers_).forEach(function(e){t.layers_[e].setMap(null),delete t.layers_[e]}),this._setLayers(this.props.layerTypes)),this.heatmap&&!f(this.props.heatmap.positions,e.heatmap.positions)&&this.heatmap.setData(this.props.heatmap.positions.map(function(e){return{location:new t.maps_.LatLng(e.lat,e.lng),weight:e.weight}})),this.heatmap&&!f(this.props.heatmap.options,e.heatmap.options)&&Object.keys(this.props.heatmap.options).forEach(function(e){t.heatmap.set(e,t.props.heatmap.options[e])})}console.log("change 1!"),this.markersDispatcher_.emit("kON_CHANGE"),f(this.props.hoverDistance,e.hoverDistance)||this.markersDispatcher_.emit("kON_MOUSE_POSITION_CHANGE")},n.componentWillUnmount=function(){this.mounted_=!1;var e,t,o=r.findDOMNode(this.googleMapDom_);o&&o.removeEventListener("mousedown",this._onMapMouseDownNative,!0),window.removeEventListener("resize",this._onWindowResize),window.removeEventListener("keydown",this._onKeyDownCapture),window.removeEventListener("mouseup",this._onChildMouseUp,!1),this.props.resetBoundsOnResize&&(t=this._mapDomResizeCallback,e=(e=o).parentNode,V?e.detachEvent("onresize",t):(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),e.__resizeListeners__.length||(e.removeEventListener("scroll",X),e.__resizeTriggers__=!e.removeChild(e.__resizeTriggers__)))),this.overlay_&&this.overlay_.setMap(null),this.maps_&&this.map_&&this.props.shouldUnregisterMapOnUnmount&&(this.map_.setOptions({scrollwheel:!1}),this.maps_.event.clearInstanceListeners(this.map_)),this.props.shouldUnregisterMapOnUnmount&&(this.map_=null,this.maps_=null),this.markersDispatcher_.dispose(),this.resetSizeOnIdle_=!1,this.props.shouldUnregisterMapOnUnmount&&(delete this.map_,delete this.markersDispatcher_)},n.render=function(){var e=this.state.overlay,t=e?null:o.createElement(w,{experimental:this.props.experimental,onChildClick:this._onChildClick,onChildMouseDown:this._onChildMouseDown,onChildMouseEnter:this._onChildMouseEnter,onChildMouseLeave:this._onChildMouseLeave,geoService:this.geoService_,insideMapPanes:!1,distanceToMouse:this.props.distanceToMouse,getHoverDistance:this._getHoverDistance,dispatcher:this.markersDispatcher_});return o.createElement("div",{style:this.props.style,onMouseMove:this._onMapMouseMove,onMouseDownCapture:this._onMapMouseDownCapture,onClick:this._onMapClick},o.createElement(c,{registerChild:this._registerChild}),pe&&e&&le(this._renderPortal(),e),t)},t}(t.Component);function de(e){var t=e.lng,o=Math.sin(e.lat*Math.PI/180),n=t/360+.5,r=.5-.25*Math.log((1+o)/(1-o))/Math.PI;return{x:n,y:r=r<0?0:r>1?1:r}}function ge(e){var t=e.x,o=Math.PI-2*Math.PI*e.y;return{lat:180/Math.PI*Math.atan(.5*(Math.exp(o)-Math.exp(-o))),lng:360*t-180}}function me(e,t,o,n){var r=de(e),i=de(t),s=r.x<i.x?i.x-r.x:1-r.x+i.x,a=i.y-r.y;if(s<=0&&a<=0)return null;var p=P(o/256/Math.abs(s)),l=P(n/256/Math.abs(a)),u=Math.floor(1e-9+Math.min(p,l)),h={x:r.x<i.x?.5*(r.x+i.x):r.x+i.x-1>0?.5*(r.x+i.x-1):.5*(1+r.x+i.x),y:.5*(r.y+i.y)},c=Math.pow(2,u),d=o/c/256/2,g=n/c/256/2,m=ge({x:h.x-d,y:h.y-g}),_=ge({x:h.x+d,y:h.y+g});return{center:ge(h),zoom:u,newBounds:{nw:m,se:_}}}function _e(e){var t=e.ne,o=e.sw;return{nw:{lat:t.lat,lng:o.lng},se:{lat:o.lat,lng:t.lng}}}function fe(e){var t=e.nw,o=e.se;return{ne:{lat:t.lat,lng:o.lng},sw:{lat:o.lat,lng:t.lng}}}ce.propTypes={apiKey:n.string,bootstrapURLKeys:n.any,defaultCenter:n.oneOfType([n.array,n.shape({lat:n.number,lng:n.number})]),center:n.oneOfType([n.array,n.shape({lat:n.number,lng:n.number})]),defaultZoom:n.number,zoom:n.number,onBoundsChange:n.func,onChange:n.func,onClick:n.func,onChildClick:n.func,onChildMouseDown:n.func,onChildMouseUp:n.func,onChildMouseMove:n.func,onChildMouseEnter:n.func,onChildMouseLeave:n.func,onZoomAnimationStart:n.func,onZoomAnimationEnd:n.func,onDrag:n.func,onDragEnd:n.func,onMapTypeIdChange:n.func,onTilesLoaded:n.func,options:n.any,distanceToMouse:n.func,hoverDistance:n.number,debounced:n.bool,margin:n.array,googleMapLoader:n.any,onGoogleApiLoaded:n.func,yesIWantToUseGoogleMapApiInternals:n.bool,draggable:n.bool,style:n.any,resetBoundsOnResize:n.bool,layerTypes:n.arrayOf(n.string),shouldUnregisterMapOnUnmount:n.bool},ce.defaultProps={distanceToMouse:function(e,t){return Math.sqrt((e.x-t.x)*(e.x-t.x)+(e.y-t.y)*(e.y-t.y))},hoverDistance:30,debounced:!0,options:function(){return{overviewMapControl:!1,streetViewControl:!1,rotateControl:!0,mapTypeControl:!1,styles:[{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]}],minZoom:3}},googleMapLoader:O,yesIWantToUseGoogleMapApiInternals:!1,style:{width:"100%",height:"100%",margin:0,padding:0,position:"relative"},layerTypes:[],heatmap:{},heatmapLibrary:!1,shouldUnregisterMapOnUnmount:!0},ce.googleMapLoader=O,Object.assign(ce,{convertNeSwToNwSe:_e,convertNwSeToNeSw:fe,fitBounds:function(e,t){var o,n=e.nw,r=e.se,i=e.ne,s=e.sw,a=t.width,l=t.height;if(n&&r)o=me(n,r,a,l);else{var u=_e({ne:i,sw:s});o=me(u.nw,u.se,a,l)}return p({},o,{newBounds:p({},o.newBounds,fe(o.newBounds))})},meters2ScreenPixels:function(e,t,o){var n=function(e,t){var o=function(e,t){var o,n=t.lat,r=t.lng,i=(o=n*Math.PI/180,{metersPerLatDegree:111132.92-559.82*Math.cos(2*o)+1.175*Math.cos(4*o)-.0023*Math.cos(6*o),metersPerLngDegree:111412.84*Math.cos(o)-93.5*Math.cos(3*o)+.118*Math.cos(5*o)}),s=.5*e/i.metersPerLatDegree,a=.5*e/i.metersPerLngDegree;return{nw:{lat:n-s,lng:r-a},se:{lat:n+s,lng:r+a}}}(e,{lat:t.lat,lng:t.lng}),n=o.se,r=de(o.nw),i=de(n);return{w:Math.abs(i.x-r.x),h:Math.abs(i.y-r.y)}}(e,{lat:t.lat,lng:t.lng}),r=n.w,i=n.h,s=Math.pow(2,o);return{w:r*s*256,h:i*s*256}},tile2LatLng:function(e,t){var o=e.x,n=Math.PI-2*Math.PI*e.y/Math.pow(2,t);return{lat:180/Math.PI*Math.atan(.5*(Math.exp(n)-Math.exp(-n))),lng:o/Math.pow(2,t)*360-180}},latLng2Tile:function(e,t){var o=de({lat:e.lat,lng:e.lng}),n=Math.pow(2,t);return{x:Math.floor(o.x*n),y:Math.floor(o.y*n)}},getTilesIds:function(e,t){for(var o=e.from,n=e.to,r=Math.pow(2,t),i=[],s=o.x;s!==(n.x+1)%r;s=(s+1)%r)for(var a=o.y;a!==(n.y+1)%r;a=(a+1)%r)i.push([t,s,a]);return i}}),module.exports=ce;
//# sourceMappingURL=index.js.map
