(this.webpackJsonptelegram_react=this.webpackJsonptelegram_react||[]).push([[0],{587:function(e,t,n){},650:function(e,t,n){"use strict";n.r(t);var i=n(171),o=n(43),a=n(5),s=n(6),r=n(8),u=n(7),p=n(9),l=n(0),c=n.n(l),h=n(586),m=n.n(h);n(587);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(n,!0).forEach(function(t){Object(o.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var y=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.options,n=e.eventListeners,i=t.loop,o=t.autoplay,a=t.animationData,s=t.rendererSettings,r=t.segments;this.options={container:this.el,renderer:"svg",loop:Boolean(i),autoplay:Boolean(o),segments:Boolean(r),animationData:a,rendererSettings:s},this.options=f({},this.options,{},t),this.anim=m.a.loadAnimation(this.options),this.registerEvents(n)}},{key:"componentWillUpdate",value:function(e,t,n){this.options.animationData===e.options.animationData&&this.options.path===e.options.path||(this.unregisterEvents(this.props.eventListeners),this.destroy(),this.options=f({},this.options,{},e.options),this.anim=m.a.loadAnimation(this.options),this.registerEvents(e.eventListeners))}},{key:"componentDidUpdate",value:function(e,t,n){this.setSpeed(),this.setDirection()}},{key:"componentWillUnmount",value:function(){this.unregisterEvents(this.props.eventListeners),this.destroy(),this.options.animationData=null,this.options.path=null,this.anim=null}},{key:"getCurrentRawFrame",value:function(){return this.anim.currentRawFrame}},{key:"getCurrentFrame",value:function(){return this.anim.currentFrame}},{key:"setSpeed",value:function(){this.anim.setSpeed(this.props.speed)}},{key:"setDirection",value:function(){this.anim.setDirection(this.props.direction)}},{key:"play",value:function(){this.anim.play()}},{key:"playSegments",value:function(e,t){this.anim.playSegments(e,t)}},{key:"stop",value:function(){this.anim.stop()}},{key:"pause",value:function(){return!this.anim.isPaused&&(this.anim.pause(),!0)}},{key:"destroy",value:function(){this.anim.destroy()}},{key:"registerEvents",value:function(e){var t=this;this.anim&&e&&e.forEach(function(e){var n=e.eventName,i=e.callback;t.anim.addEventListener(n,i)})}},{key:"unregisterEvents",value:function(e){var t=this;this.anim&&e&&e.forEach(function(e){var n=e.eventName,i=e.callback;t.anim.removeEventListener(n,i)})}},{key:"render",value:function(){var e=this,t=this.props,n=t.width,o=t.height,a=t.ariaRole,s=t.ariaLabel,r=t.title,u=(t.eventListeners,t.onComplete,t.onMouseEnter),p=t.onMouseOut,l=Object(i.a)(t,["width","height","ariaRole","ariaLabel","title","eventListeners","onComplete","onMouseEnter","onMouseOut"]),h=function(e){return"number"===typeof e?"".concat(e,"px"):e||"100%"},m=f({width:h(n),height:h(o),overflow:"hidden",margin:"0 auto",outline:"none"},this.props.style);return c.a.createElement("div",Object.assign({ref:function(t){e.el=t},style:m,title:r,role:a,"aria-label":s,tabIndex:"0"},l,{onMouseEnter:u,onMouseOut:p}))}}]),t}(c.a.Component);y.defaultProps={eventListeners:[],speed:1,ariaRole:"button",ariaLabel:"animation",title:""},t.default=y}}]);
//# sourceMappingURL=0.939c9f28.chunk.js.map