webpackJsonp([0x8f4a36ddae4c],{422:function(e,a){e.exports="<h2 id=overview>Overview</h2> <p>A stack layout is a layout that positions the children vertically. In a Stack layout there is one primary child, and one or more secondary children. The primary child will expand vertically to fill the container if needed.</p> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>Class</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.pf-l-stack</code></td> <td><code>&lt;div&gt;</code>, <code>&lt;section&gt;</code>, or <code>&lt;article&gt;</code></td> <td>Initiates the stack layout</td> </tr> <tr> <td><code>.pf-l-stack__primary</code></td> <td><code>&lt;div&gt;</code></td> <td>Specifies the primary child of the layout, which expands vertically when needed.</td> </tr> <tr> <td><code>.pf-l-stack__secondary</code></td> <td><code>&lt;div&gt;</code></td> <td>Specifies a secondary child of the layout, which accommodates its content. A stack can have one or more secondary children</td> </tr> <tr> <td><code>.pf-has-gutter</code></td> <td><code>.pf-l-stack</code></td> <td>Adds space between children</td> </tr> </tbody> </table> "},168:function(e,a,t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}a.__esModule=!0,a.Docs=void 0;var o=t(3),n=r(o),i=t(9),s=r(i),l=t(10),d=r(l),c=t(393),p=r(c),u=t(392),f=r(u),m=t(422),h=r(m);t(489);var v=a.Docs=h.default;a.default=function(){var e=(0,p.default)(),a=(0,f.default)();return n.default.createElement(s.default,{docs:v,className:"is-layout-page"},n.default.createElement(d.default,{heading:"Stack Example"},e),n.default.createElement(d.default,{heading:"Stack Example with Gutter"},a))}},392:function(e,a,t){var r=t(2);e.exports=(r.default||r).template({1:function(e,a,r,o,n){var i;return(null!=(i=e.invokePartial(t(36),a,{name:"stack-item",hash:{modifierClass:"pf-is-secondary"},fn:e.program(2,n,0),inverse:e.noop,data:n,helpers:r,partials:o,decorators:e.decorators}))?i:"")+(null!=(i=e.invokePartial(t(36),a,{name:"stack-item",hash:{modifierClass:"pf-is-primary"},fn:e.program(4,n,0),inverse:e.noop,data:n,helpers:r,partials:o,decorators:e.decorators}))?i:"")+(null!=(i=e.invokePartial(t(36),a,{name:"stack-item",hash:{modifierClass:"pf-is-secondary"},fn:e.program(2,n,0),inverse:e.noop,data:n,helpers:r,partials:o,decorators:e.decorators}))?i:"")},2:function(e,a,t,r,o){return"    secondary content\n"},4:function(e,a,t,r,o){return"    primary content\n"},compiler:[7,">= 4.0.0"],main:function(e,a,r,o,n){var i;return null!=(i=e.invokePartial(t(135),a,{name:"stack",hash:{modifierClass:"pf-has-gutter"},fn:e.program(1,n,0),inverse:e.noop,data:n,helpers:r,partials:o,decorators:e.decorators}))?i:""},usePartial:!0,useData:!0})},393:function(e,a,t){var r=t(2);e.exports=(r.default||r).template({1:function(e,a,r,o,n){var i;return(null!=(i=e.invokePartial(t(36),a,{name:"stack-item",hash:{modifierClass:"pf-is-secondary"},fn:e.program(2,n,0),inverse:e.noop,data:n,helpers:r,partials:o,decorators:e.decorators}))?i:"")+(null!=(i=e.invokePartial(t(36),a,{name:"stack-item",hash:{modifierClass:"pf-is-primary"},fn:e.program(4,n,0),inverse:e.noop,data:n,helpers:r,partials:o,decorators:e.decorators}))?i:"")+(null!=(i=e.invokePartial(t(36),a,{name:"stack-item",hash:{modifierClass:"pf-is-secondary"},fn:e.program(2,n,0),inverse:e.noop,data:n,helpers:r,partials:o,decorators:e.decorators}))?i:"")},2:function(e,a,t,r,o){return"    secondary content\n"},4:function(e,a,t,r,o){return"    primary content\n"},compiler:[7,">= 4.0.0"],main:function(e,a,r,o,n){var i;return null!=(i=e.invokePartial(t(135),a,{name:"stack",fn:e.program(1,n,0),inverse:e.noop,data:n,helpers:r,partials:o,decorators:e.decorators}))?i:""},usePartial:!0,useData:!0})},36:function(e,a,t){var r=t(2);e.exports=(r.default||r).template({compiler:[7,">= 4.0.0"],main:function(e,a,t,r,o){var n,i;return'<div class="pf-l-stack__item '+e.escapeExpression((i=null!=(i=t.modifierClass||(null!=a?a.modifierClass:a))?i:t.helperMissing,"function"==typeof i?i.call(null!=a?a:e.nullContext||{},{name:"modifierClass",hash:{},data:o}):i))+'">\n'+(null!=(n=e.invokePartial(r["@partial-block"],a,{name:"@partial-block",data:o,indent:"  ",helpers:t,partials:r,decorators:e.decorators}))?n:"")+"</div>\n"},usePartial:!0,useData:!0})},135:function(e,a,t){var r=t(2);e.exports=(r.default||r).template({compiler:[7,">= 4.0.0"],main:function(e,a,t,r,o){var n,i;return'<div class="pf-l-stack '+e.escapeExpression((i=null!=(i=t.modifierClass||(null!=a?a.modifierClass:a))?i:t.helperMissing,"function"==typeof i?i.call(null!=a?a:e.nullContext||{},{name:"modifierClass",hash:{},data:o}):i))+'">\n'+(null!=(n=e.invokePartial(r["@partial-block"],a,{name:"@partial-block",data:o,indent:"  ",helpers:t,partials:r,decorators:e.decorators}))?n:"")+"</div>\n"},usePartial:!0,useData:!0})},489:function(e,a){}});
//# sourceMappingURL=component---src-patternfly-layouts-stack-examples-index-js-993dd8eea9f9500d1a48.js.map