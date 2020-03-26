"use strict";
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./colorpicker");
var i2 = require("@angular/common");
var i3 = require("@angular/forms");
var ColorPickerModuleNgFactory = i0.ɵcmf(i1.ColorPickerModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID, [2, i2.ɵangular_packages_common_common_a]]), i0.ɵmpd(1073742336, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(1073742336, i1.ColorPickerModule, i1.ColorPickerModule, [])]); });
exports.ColorPickerModuleNgFactory = ColorPickerModuleNgFactory;
var styles_ColorPicker = [];
var RenderType_ColorPicker = i0.ɵcrt({ encapsulation: 2, styles: styles_ColorPicker, data: { "animation": [{ type: 7, name: "overlayAnimation", definitions: [{ type: 0, name: "void", styles: { type: 6, styles: { transform: "translateY(5%)", opacity: 0 }, offset: null }, options: undefined }, { type: 0, name: "visible", styles: { type: 6, styles: { transform: "translateY(0)", opacity: 1 }, offset: null }, options: undefined }, { type: 1, expr: "void => visible", animation: { type: 4, styles: null, timings: "{{showTransitionParams}}" }, options: null }, { type: 1, expr: "visible => void", animation: { type: 4, styles: null, timings: "{{hideTransitionParams}}" }, options: null }], options: {} }] } });
exports.RenderType_ColorPicker = RenderType_ColorPicker;
function View_ColorPicker_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, [[1, 0], ["input", 1]], null, 3, "input", [["class", "ui-colorpicker-preview ui-inputtext ui-state-default ui-corner-all"], ["readonly", "readonly"], ["type", "text"]], [[1, "id", 0], [1, "tabindex", 0], [8, "disabled", 0], [4, "backgroundColor", null]], [[null, "focus"], [null, "click"], [null, "keydown"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("focus" === en)) {
        var pd_0 = (_co.onInputFocus() !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.onInputClick() !== false);
        ad = (pd_1 && ad);
    } if (("keydown" === en)) {
        var pd_2 = (_co.onInputKeydown($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i0.ɵprd(512, null, i2.ɵNgClassImpl, i2.ɵNgClassR2Impl, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2]), i0.ɵdid(2, 278528, null, 0, i2.NgClass, [i2.ɵNgClassImpl], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(3, { "ui-state-disabled": 0 })], function (_ck, _v) { var _co = _v.component; var currVal_4 = "ui-colorpicker-preview ui-inputtext ui-state-default ui-corner-all"; var currVal_5 = _ck(_v, 3, 0, _co.disabled); _ck(_v, 2, 0, currVal_4, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.inputId; var currVal_1 = _co.tabindex; var currVal_2 = _co.disabled; var currVal_3 = _co.inputBgColor; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3); }); }
function View_ColorPicker_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 11, "div", [], [[24, "@overlayAnimation", 0], [24, "@.disabled", 0]], [[null, "click"], [null, "@overlayAnimation.start"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onPanelClick() !== false);
        ad = (pd_0 && ad);
    } if (("@overlayAnimation.start" === en)) {
        var pd_1 = (_co.onOverlayAnimationStart($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), i0.ɵprd(512, null, i2.ɵNgClassImpl, i2.ɵNgClassR2Impl, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2]), i0.ɵdid(2, 278528, null, 0, i2.NgClass, [i2.ɵNgClassImpl], { ngClass: [0, "ngClass"] }, null), i0.ɵpod(3, { "ui-colorpicker-panel ui-corner-all": 0, "ui-colorpicker-overlay-panel ui-shadow": 1, "ui-state-disabled": 2 }), i0.ɵpod(4, { showTransitionParams: 0, hideTransitionParams: 1 }), i0.ɵpod(5, { value: 0, params: 1 }), (_l()(), i0.ɵeld(6, 0, null, null, 5, "div", [["class", "ui-colorpicker-content"]], null, null, null, null, null)), (_l()(), i0.ɵeld(7, 0, [[2, 0], ["colorSelector", 1]], null, 2, "div", [["class", "ui-colorpicker-color-selector"]], null, [[null, "mousedown"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mousedown" === en)) {
        var pd_0 = (_co.onColorMousedown($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵeld(8, 0, null, null, 1, "div", [["class", "ui-colorpicker-color"]], null, null, null, null, null)), (_l()(), i0.ɵeld(9, 0, [[3, 0], ["colorHandle", 1]], null, 0, "div", [["class", "ui-colorpicker-color-handle"]], null, null, null, null, null)), (_l()(), i0.ɵeld(10, 0, [[4, 0], ["hue", 1]], null, 1, "div", [["class", "ui-colorpicker-hue"]], null, [[null, "mousedown"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mousedown" === en)) {
        var pd_0 = (_co.onHueMousedown($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵeld(11, 0, [[5, 0], ["hueHandle", 1]], null, 0, "div", [["class", "ui-colorpicker-hue-handle"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _ck(_v, 3, 0, true, !_co.inline, _co.disabled); _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 5, 0, "visible", _ck(_v, 4, 0, _co.showTransitionOptions, _co.hideTransitionOptions)); var currVal_1 = (_co.inline === true); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_ColorPicker_0(_l) { return i0.ɵvid(0, [i0.ɵqud(671088640, 1, { inputViewChild: 0 }), i0.ɵqud(671088640, 2, { colorSelector: 0 }), i0.ɵqud(671088640, 3, { colorHandle: 0 }), i0.ɵqud(671088640, 4, { hue: 0 }), i0.ɵqud(671088640, 5, { hueHandle: 0 }), (_l()(), i0.ɵeld(5, 0, null, null, 9, "div", [], null, null, null, null, null)), i0.ɵprd(512, null, i2.ɵNgClassImpl, i2.ɵNgClassR2Impl, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2]), i0.ɵdid(7, 278528, null, 0, i2.NgClass, [i2.ɵNgClassImpl], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(8, { "ui-colorpicker ui-widget": 0, "ui-colorpicker-overlay": 1, "ui-colorpicker-dragging": 2 }), i0.ɵprd(512, null, i2.ɵNgStyleImpl, i2.ɵNgStyleR2Impl, [i0.ElementRef, i0.KeyValueDiffers, i0.Renderer2]), i0.ɵdid(10, 278528, null, 0, i2.NgStyle, [i2.ɵNgStyleImpl], { ngStyle: [0, "ngStyle"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_ColorPicker_1)), i0.ɵdid(12, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_ColorPicker_2)), i0.ɵdid(14, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.styleClass; var currVal_1 = _ck(_v, 8, 0, true, !_co.inline, (_co.colorDragging || _co.hueDragging)); _ck(_v, 7, 0, currVal_0, currVal_1); var currVal_2 = _co.style; _ck(_v, 10, 0, currVal_2); var currVal_3 = !_co.inline; _ck(_v, 12, 0, currVal_3); var currVal_4 = (_co.inline || _co.overlayVisible); _ck(_v, 14, 0, currVal_4); }, null); }
exports.View_ColorPicker_0 = View_ColorPicker_0;
function View_ColorPicker_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "p-colorPicker", [], null, null, null, View_ColorPicker_0, RenderType_ColorPicker)), i0.ɵprd(5120, null, i3.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i1.ColorPicker]), i0.ɵdid(2, 180224, null, 0, i1.ColorPicker, [i0.ElementRef, i0.Renderer2, i0.ChangeDetectorRef], null, null)], null, null); }
exports.View_ColorPicker_Host_0 = View_ColorPicker_Host_0;
var ColorPickerNgFactory = i0.ɵccf("p-colorPicker", i1.ColorPicker, View_ColorPicker_Host_0, { style: "style", styleClass: "styleClass", inline: "inline", format: "format", appendTo: "appendTo", disabled: "disabled", tabindex: "tabindex", inputId: "inputId", autoZIndex: "autoZIndex", baseZIndex: "baseZIndex", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions" }, { onChange: "onChange" }, []);
exports.ColorPickerNgFactory = ColorPickerNgFactory;
//# sourceMappingURL=colorpicker.ngfactory.js.map