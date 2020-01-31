"use strict";
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./sidebar");
var i2 = require("@angular/common");
var SidebarModuleNgFactory = i0.ɵcmf(i1.SidebarModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID, [2, i2.ɵangular_packages_common_common_a]]), i0.ɵmpd(1073742336, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(1073742336, i1.SidebarModule, i1.SidebarModule, [])]); });
exports.SidebarModuleNgFactory = SidebarModuleNgFactory;
var styles_Sidebar = [];
var RenderType_Sidebar = i0.ɵcrt({ encapsulation: 2, styles: styles_Sidebar, data: { "animation": [{ type: 7, name: "panelState", definitions: [{ type: 0, name: "hidden", styles: { type: 6, styles: { opacity: 0 }, offset: null }, options: undefined }, { type: 0, name: "visible", styles: { type: 6, styles: { opacity: 1 }, offset: null }, options: undefined }, { type: 1, expr: "visible => hidden", animation: { type: 4, styles: null, timings: "300ms ease-in" }, options: null }, { type: 1, expr: "hidden => visible", animation: { type: 4, styles: null, timings: "300ms ease-out" }, options: null }], options: {} }] } });
exports.RenderType_Sidebar = RenderType_Sidebar;
function View_Sidebar_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "a", [["role", "button"], ["tabindex", "0"]], null, [[null, "click"], [null, "keydown.enter"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.close($event) !== false);
        ad = (pd_0 && ad);
    } if (("keydown.enter" === en)) {
        var pd_1 = (_co.close($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), i0.ɵprd(512, null, i2.ɵNgClassImpl, i2.ɵNgClassR2Impl, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2]), i0.ɵdid(2, 278528, null, 0, i2.NgClass, [i2.ɵNgClassImpl], { ngClass: [0, "ngClass"] }, null), i0.ɵpod(3, { "ui-sidebar-close ui-corner-all": 0 }), (_l()(), i0.ɵeld(4, 0, null, null, 0, "span", [["class", "pi pi-times"]], null, null, null, null, null))], function (_ck, _v) { var currVal_0 = _ck(_v, 3, 0, true); _ck(_v, 2, 0, currVal_0); }, null); }
function View_Sidebar_0(_l) { return i0.ɵvid(0, [i0.ɵqud(671088640, 1, { containerViewChild: 0 }), (_l()(), i0.ɵeld(1, 0, [[1, 0], ["container", 1]], null, 8, "div", [], [[24, "@panelState", 0]], [[null, "@panelState.start"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("@panelState.start" === en)) {
        var pd_0 = (_co.onAnimationStart($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵprd(512, null, i2.ɵNgClassImpl, i2.ɵNgClassR2Impl, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2]), i0.ɵdid(3, 278528, null, 0, i2.NgClass, [i2.ɵNgClassImpl], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(4, { "ui-sidebar ui-widget ui-widget-content ui-shadow": 0, "ui-sidebar-active": 1, "ui-sidebar-left": 2, "ui-sidebar-right": 3, "ui-sidebar-top": 4, "ui-sidebar-bottom": 5, "ui-sidebar-full": 6 }), i0.ɵprd(512, null, i2.ɵNgStyleImpl, i2.ɵNgStyleR2Impl, [i0.ElementRef, i0.KeyValueDiffers, i0.Renderer2]), i0.ɵdid(6, 278528, null, 0, i2.NgStyle, [i2.ɵNgStyleImpl], { ngStyle: [0, "ngStyle"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Sidebar_1)), i0.ɵdid(8, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), i0.ɵncd(null, 0)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.styleClass; var currVal_2 = _ck(_v, 4, 0, true, _co.visible, (_co.position === "left"), (_co.position === "right"), (_co.position === "top"), (_co.position === "bottom"), _co.fullScreen); _ck(_v, 3, 0, currVal_1, currVal_2); var currVal_3 = _co.style; _ck(_v, 6, 0, currVal_3); var currVal_4 = _co.showCloseIcon; _ck(_v, 8, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.visible ? "visible" : "hidden"); _ck(_v, 1, 0, currVal_0); }); }
exports.View_Sidebar_0 = View_Sidebar_0;
function View_Sidebar_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "p-sidebar", [], null, null, null, View_Sidebar_0, RenderType_Sidebar)), i0.ɵdid(1, 12763136, null, 0, i1.Sidebar, [i0.ElementRef, i0.Renderer2], null, null)], null, null); }
exports.View_Sidebar_Host_0 = View_Sidebar_Host_0;
var SidebarNgFactory = i0.ɵccf("p-sidebar", i1.Sidebar, View_Sidebar_Host_0, { position: "position", fullScreen: "fullScreen", appendTo: "appendTo", blockScroll: "blockScroll", style: "style", styleClass: "styleClass", autoZIndex: "autoZIndex", baseZIndex: "baseZIndex", modal: "modal", dismissible: "dismissible", showCloseIcon: "showCloseIcon", closeOnEscape: "closeOnEscape", visible: "visible" }, { onShow: "onShow", onHide: "onHide", visibleChange: "visibleChange" }, ["*"]);
exports.SidebarNgFactory = SidebarNgFactory;
//# sourceMappingURL=sidebar.ngfactory.js.map