"use strict";
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./checkbox");
var i2 = require("@angular/common");
var i3 = require("@angular/forms");
var CheckboxModuleNgFactory = i0.ɵcmf(i1.CheckboxModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID, [2, i2.ɵangular_packages_common_common_a]]), i0.ɵmpd(1073742336, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(1073742336, i1.CheckboxModule, i1.CheckboxModule, [])]); });
exports.CheckboxModuleNgFactory = CheckboxModuleNgFactory;
var styles_Checkbox = [];
var RenderType_Checkbox = i0.ɵcrt({ encapsulation: 2, styles: styles_Checkbox, data: {} });
exports.RenderType_Checkbox = RenderType_Checkbox;
function View_Checkbox_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "label", [], [[1, "for", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onClick($event, i0.ɵnov(_v.parent, 7), true) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵprd(512, null, i2.ɵNgClassImpl, i2.ɵNgClassR2Impl, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2]), i0.ɵdid(2, 278528, null, 0, i2.NgClass, [i2.ɵNgClassImpl], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(3, { "ui-chkbox-label": 0, "ui-label-active": 1, "ui-label-disabled": 2, "ui-label-focus": 3 }), (_l()(), i0.ɵted(4, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.labelStyleClass; var currVal_2 = _ck(_v, 3, 0, true, _co.checked, _co.disabled, _co.focused); _ck(_v, 2, 0, currVal_1, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.inputId; _ck(_v, 0, 0, currVal_0); var currVal_3 = _co.label; _ck(_v, 4, 0, currVal_3); }); }
function View_Checkbox_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 17, "div", [], null, null, null, null, null)), i0.ɵprd(512, null, i2.ɵNgClassImpl, i2.ɵNgClassR2Impl, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2]), i0.ɵdid(2, 278528, null, 0, i2.NgClass, [i2.ɵNgClassImpl], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(3, { "ui-chkbox ui-widget": 0, "ui-chkbox-readonly": 1 }), i0.ɵprd(512, null, i2.ɵNgStyleImpl, i2.ɵNgStyleR2Impl, [i0.ElementRef, i0.KeyValueDiffers, i0.Renderer2]), i0.ɵdid(5, 278528, null, 0, i2.NgStyle, [i2.ɵNgStyleImpl], { ngStyle: [0, "ngStyle"] }, null), (_l()(), i0.ɵeld(6, 0, null, null, 4, "div", [["class", "ui-helper-hidden-accessible"]], null, null, null, null, null)), (_l()(), i0.ɵeld(7, 0, [["cb", 1]], null, 3, "input", [["type", "checkbox"]], [[1, "id", 0], [8, "name", 0], [8, "readOnly", 0], [8, "value", 0], [8, "checked", 0], [8, "disabled", 0], [1, "tabindex", 0]], [[null, "focus"], [null, "blur"], [null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("focus" === en)) {
        var pd_0 = (_co.onFocus($event) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_co.onBlur($event) !== false);
        ad = (pd_1 && ad);
    } if (("change" === en)) {
        var pd_2 = (_co.handleChange($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i0.ɵprd(512, null, i2.ɵNgClassImpl, i2.ɵNgClassR2Impl, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2]), i0.ɵdid(9, 278528, null, 0, i2.NgClass, [i2.ɵNgClassImpl], { ngClass: [0, "ngClass"] }, null), i0.ɵpod(10, { "ui-state-focus": 0 }), (_l()(), i0.ɵeld(11, 0, null, null, 6, "div", [["class", "ui-chkbox-box ui-widget ui-corner-all ui-state-default"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onClick($event, i0.ɵnov(_v, 7), true) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵprd(512, null, i2.ɵNgClassImpl, i2.ɵNgClassR2Impl, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2]), i0.ɵdid(13, 278528, null, 0, i2.NgClass, [i2.ɵNgClassImpl], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(14, { "ui-state-active": 0, "ui-state-disabled": 1, "ui-state-focus": 2 }), (_l()(), i0.ɵeld(15, 0, null, null, 2, "span", [["class", "ui-chkbox-icon ui-clickable"]], null, null, null, null, null)), i0.ɵprd(512, null, i2.ɵNgClassImpl, i2.ɵNgClassR2Impl, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2]), i0.ɵdid(17, 278528, null, 0, i2.NgClass, [i2.ɵNgClassImpl], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Checkbox_1)), i0.ɵdid(19, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.styleClass; var currVal_1 = _ck(_v, 3, 0, true, _co.readonly); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = _co.style; _ck(_v, 5, 0, currVal_2); var currVal_10 = _ck(_v, 10, 0, _co.focused); _ck(_v, 9, 0, currVal_10); var currVal_11 = "ui-chkbox-box ui-widget ui-corner-all ui-state-default"; var currVal_12 = _ck(_v, 14, 0, _co.checked, _co.disabled, _co.focused); _ck(_v, 13, 0, currVal_11, currVal_12); var currVal_13 = "ui-chkbox-icon ui-clickable"; var currVal_14 = (_co.checked ? _co.checkboxIcon : null); _ck(_v, 17, 0, currVal_13, currVal_14); var currVal_15 = _co.label; _ck(_v, 19, 0, currVal_15); }, function (_ck, _v) { var _co = _v.component; var currVal_3 = _co.inputId; var currVal_4 = _co.name; var currVal_5 = _co.readonly; var currVal_6 = _co.value; var currVal_7 = _co.checked; var currVal_8 = _co.disabled; var currVal_9 = _co.tabindex; _ck(_v, 7, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); }); }
exports.View_Checkbox_0 = View_Checkbox_0;
function View_Checkbox_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "p-checkbox", [], null, null, null, View_Checkbox_0, RenderType_Checkbox)), i0.ɵprd(5120, null, i3.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i1.Checkbox]), i0.ɵdid(2, 49152, null, 0, i1.Checkbox, [i0.ChangeDetectorRef], null, null)], null, null); }
exports.View_Checkbox_Host_0 = View_Checkbox_Host_0;
var CheckboxNgFactory = i0.ɵccf("p-checkbox", i1.Checkbox, View_Checkbox_Host_0, { value: "value", name: "name", disabled: "disabled", binary: "binary", label: "label", tabindex: "tabindex", inputId: "inputId", style: "style", styleClass: "styleClass", labelStyleClass: "labelStyleClass", formControl: "formControl", checkboxIcon: "checkboxIcon", readonly: "readonly" }, { onChange: "onChange" }, []);
exports.CheckboxNgFactory = CheckboxNgFactory;
//# sourceMappingURL=checkbox.ngfactory.js.map