<<<<<<< HEAD
/*
 Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/

CKEDITOR.dialog.add("cellProperties",function(g){function d(a){return function(b){for(var c=a(b[0]),d=1;d<b.length;d++)if(a(b[d])!==c){c=null;break}"undefined"!=typeof c&&(this.setValue(c),CKEDITOR.env.gecko&&"select"==this.type&&!c&&(this.getInputElement().$.selectedIndex=-1))}}function l(a){if(a=n.exec(a.getStyle("width")||a.getAttribute("width")))return a[2]}var h=g.lang.table,c=h.cell,e=g.lang.common,k=CKEDITOR.dialog.validate,n=/^(\d+(?:\.\d+)?)(px|%)$/,f={type:"html",html:"\x26nbsp;"},p="rtl"==
g.lang.dir,m=g.plugins.colordialog;return{title:c.title,minWidth:CKEDITOR.env.ie&&CKEDITOR.env.quirks?450:410,minHeight:CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks)?230:220,contents:[{id:"info",label:c.title,accessKey:"I",elements:[{type:"hbox",widths:["40%","5%","40%"],children:[{type:"vbox",padding:0,children:[{type:"hbox",widths:["70%","30%"],children:[{type:"text",id:"width",width:"100px",label:e.width,validate:k.number(c.invalidWidth),onLoad:function(){var a=this.getDialog().getContentElement("info",
"widthType").getElement(),b=this.getInputElement(),c=b.getAttribute("aria-labelledby");b.setAttribute("aria-labelledby",[c,a.$.id].join(" "))},setup:d(function(a){var b=parseInt(a.getAttribute("width"),10);a=parseInt(a.getStyle("width"),10);return isNaN(a)?isNaN(b)?"":b:a}),commit:function(a){var b=parseInt(this.getValue(),10),c=this.getDialog().getValueOf("info","widthType")||l(a);isNaN(b)?a.removeStyle("width"):a.setStyle("width",b+c);a.removeAttribute("width")},"default":""},{type:"select",id:"widthType",
label:g.lang.table.widthUnit,labelStyle:"visibility:hidden","default":"px",items:[[h.widthPx,"px"],[h.widthPc,"%"]],setup:d(l)}]},{type:"hbox",widths:["70%","30%"],children:[{type:"text",id:"height",label:e.height,width:"100px","default":"",validate:k.number(c.invalidHeight),onLoad:function(){var a=this.getDialog().getContentElement("info","htmlHeightType").getElement(),b=this.getInputElement(),c=b.getAttribute("aria-labelledby");b.setAttribute("aria-labelledby",[c,a.$.id].join(" "))},setup:d(function(a){var b=
parseInt(a.getAttribute("height"),10);a=parseInt(a.getStyle("height"),10);return isNaN(a)?isNaN(b)?"":b:a}),commit:function(a){var b=parseInt(this.getValue(),10);isNaN(b)?a.removeStyle("height"):a.setStyle("height",CKEDITOR.tools.cssLength(b));a.removeAttribute("height")}},{id:"htmlHeightType",type:"html",html:"\x3cbr /\x3e"+h.widthPx}]},f,{type:"select",id:"wordWrap",label:c.wordWrap,"default":"yes",items:[[c.yes,"yes"],[c.no,"no"]],setup:d(function(a){var b=a.getAttribute("noWrap");if("nowrap"==
a.getStyle("white-space")||b)return"no"}),commit:function(a){"no"==this.getValue()?a.setStyle("white-space","nowrap"):a.removeStyle("white-space");a.removeAttribute("noWrap")}},f,{type:"select",id:"hAlign",label:c.hAlign,"default":"",items:[[e.notSet,""],[e.alignLeft,"left"],[e.alignCenter,"center"],[e.alignRight,"right"],[e.alignJustify,"justify"]],setup:d(function(a){var b=a.getAttribute("align");return a.getStyle("text-align")||b||""}),commit:function(a){var b=this.getValue();b?a.setStyle("text-align",
b):a.removeStyle("text-align");a.removeAttribute("align")}},{type:"select",id:"vAlign",label:c.vAlign,"default":"",items:[[e.notSet,""],[e.alignTop,"top"],[e.alignMiddle,"middle"],[e.alignBottom,"bottom"],[c.alignBaseline,"baseline"]],setup:d(function(a){var b=a.getAttribute("vAlign");a=a.getStyle("vertical-align");switch(a){case "top":case "middle":case "bottom":case "baseline":break;default:a=""}return a||b||""}),commit:function(a){var b=this.getValue();b?a.setStyle("vertical-align",b):a.removeStyle("vertical-align");
a.removeAttribute("vAlign")}}]},f,{type:"vbox",padding:0,children:[{type:"select",id:"cellType",label:c.cellType,"default":"td",items:[[c.data,"td"],[c.header,"th"]],setup:d(function(a){return a.getName()}),commit:function(a){a.renameNode(this.getValue())}},f,{type:"text",id:"rowSpan",label:c.rowSpan,"default":"",validate:k.integer(c.invalidRowSpan),setup:d(function(a){if((a=parseInt(a.getAttribute("rowSpan"),10))&&1!=a)return a}),commit:function(a){var b=parseInt(this.getValue(),10);b&&1!=b?a.setAttribute("rowSpan",
this.getValue()):a.removeAttribute("rowSpan")}},{type:"text",id:"colSpan",label:c.colSpan,"default":"",validate:k.integer(c.invalidColSpan),setup:d(function(a){if((a=parseInt(a.getAttribute("colSpan"),10))&&1!=a)return a}),commit:function(a){var b=parseInt(this.getValue(),10);b&&1!=b?a.setAttribute("colSpan",this.getValue()):a.removeAttribute("colSpan")}},f,{type:"hbox",padding:0,widths:["60%","40%"],children:[{type:"text",id:"bgColor",label:c.bgColor,"default":"",setup:d(function(a){var b=a.getAttribute("bgColor");
return a.getStyle("background-color")||b}),commit:function(a){this.getValue()?a.setStyle("background-color",this.getValue()):a.removeStyle("background-color");a.removeAttribute("bgColor")}},m?{type:"button",id:"bgColorChoose","class":"colorChooser",label:c.chooseColor,onLoad:function(){this.getElement().getParent().setStyle("vertical-align","bottom")},onClick:function(){g.getColorFromDialog(function(a){a&&this.getDialog().getContentElement("info","bgColor").setValue(a);this.focus()},this)}}:f]},f,
{type:"hbox",padding:0,widths:["60%","40%"],children:[{type:"text",id:"borderColor",label:c.borderColor,"default":"",setup:d(function(a){var b=a.getAttribute("borderColor");return a.getStyle("border-color")||b}),commit:function(a){this.getValue()?a.setStyle("border-color",this.getValue()):a.removeStyle("border-color");a.removeAttribute("borderColor")}},m?{type:"button",id:"borderColorChoose","class":"colorChooser",label:c.chooseColor,style:(p?"margin-right":"margin-left")+": 10px",onLoad:function(){this.getElement().getParent().setStyle("vertical-align",
"bottom")},onClick:function(){g.getColorFromDialog(function(a){a&&this.getDialog().getContentElement("info","borderColor").setValue(a);this.focus()},this)}}:f]}]}]}]}],onShow:function(){this.cells=CKEDITOR.plugins.tabletools.getSelectedCells(this._.editor.getSelection());this.setupContent(this.cells)},onOk:function(){for(var a=this._.editor.getSelection(),b=a.createBookmarks(),c=this.cells,d=0;d<c.length;d++)this.commitContent(c[d]);this._.editor.forceNextSelectionCheck();a.selectBookmarks(b);this._.editor.selectionChange()},
onLoad:function(){var a={};this.foreach(function(b){b.setup&&b.commit&&(b.setup=CKEDITOR.tools.override(b.setup,function(c){return function(){c.apply(this,arguments);a[b.id]=b.getValue()}}),b.commit=CKEDITOR.tools.override(b.commit,function(c){return function(){a[b.id]!==b.getValue()&&c.apply(this,arguments)}}))})}}});
=======
CKEDITOR.dialog.add("cellProperties",function(t){function e(l){return function(t){for(var e=l(t[0]),i=1;i<t.length;i++)if(l(t[i])!==e){e=null;break}void 0!==e&&(this.setValue(e),CKEDITOR.env.gecko&&"select"==this.type&&!e&&(this.getInputElement().$.selectedIndex=-1))}}function l(t){if(t=a.exec(t.getStyle("width")||t.getAttribute("width")))return t[2]}var i=t.lang.table,o=i.cell,n=t.lang.common,r=CKEDITOR.dialog.validate,a=/^(\d+(?:\.\d+)?)(px|%)$/,s={type:"html",html:"&nbsp;"},u="rtl"==t.lang.dir,g=t.plugins.colordialog;return{title:o.title,minWidth:CKEDITOR.env.ie&&CKEDITOR.env.quirks?450:410,minHeight:CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks)?230:220,contents:[{id:"info",label:o.title,accessKey:"I",elements:[{type:"hbox",widths:["40%","5%","40%"],children:[{type:"vbox",padding:0,children:[{type:"hbox",widths:["70%","30%"],children:[{type:"text",id:"width",width:"100px",label:n.width,validate:r.number(o.invalidWidth),onLoad:function(){var t=this.getDialog().getContentElement("info","widthType").getElement(),e=this.getInputElement(),i=e.getAttribute("aria-labelledby");e.setAttribute("aria-labelledby",[i,t.$.id].join(" "))},setup:e(function(t){var e=parseInt(t.getAttribute("width"),10);return t=parseInt(t.getStyle("width"),10),isNaN(t)?isNaN(e)?"":e:t}),commit:function(t){var e=parseInt(this.getValue(),10),i=this.getDialog().getValueOf("info","widthType")||l(t);isNaN(e)?t.removeStyle("width"):t.setStyle("width",e+i),t.removeAttribute("width")},"default":""},{type:"select",id:"widthType",label:t.lang.table.widthUnit,labelStyle:"visibility:hidden","default":"px",items:[[i.widthPx,"px"],[i.widthPc,"%"]],setup:e(l)}]},{type:"hbox",widths:["70%","30%"],children:[{type:"text",id:"height",label:n.height,width:"100px","default":"",validate:r.number(o.invalidHeight),onLoad:function(){var t=this.getDialog().getContentElement("info","htmlHeightType").getElement(),e=this.getInputElement(),i=e.getAttribute("aria-labelledby");e.setAttribute("aria-labelledby",[i,t.$.id].join(" "))},setup:e(function(t){var e=parseInt(t.getAttribute("height"),10);return t=parseInt(t.getStyle("height"),10),isNaN(t)?isNaN(e)?"":e:t}),commit:function(t){var e=parseInt(this.getValue(),10);isNaN(e)?t.removeStyle("height"):t.setStyle("height",CKEDITOR.tools.cssLength(e)),t.removeAttribute("height")}},{id:"htmlHeightType",type:"html",html:"<br />"+i.widthPx}]},s,{type:"select",id:"wordWrap",label:o.wordWrap,"default":"yes",items:[[o.yes,"yes"],[o.no,"no"]],setup:e(function(t){var e=t.getAttribute("noWrap");if("nowrap"==t.getStyle("white-space")||e)return"no"}),commit:function(t){"no"==this.getValue()?t.setStyle("white-space","nowrap"):t.removeStyle("white-space"),t.removeAttribute("noWrap")}},s,{type:"select",id:"hAlign",label:o.hAlign,"default":"",items:[[n.notSet,""],[n.alignLeft,"left"],[n.alignCenter,"center"],[n.alignRight,"right"],[n.alignJustify,"justify"]],setup:e(function(t){var e=t.getAttribute("align");return t.getStyle("text-align")||e||""}),commit:function(t){var e=this.getValue();e?t.setStyle("text-align",e):t.removeStyle("text-align"),t.removeAttribute("align")}},{type:"select",id:"vAlign",label:o.vAlign,"default":"",items:[[n.notSet,""],[n.alignTop,"top"],[n.alignMiddle,"middle"],[n.alignBottom,"bottom"],[o.alignBaseline,"baseline"]],setup:e(function(t){var e=t.getAttribute("vAlign");switch(t=t.getStyle("vertical-align")){case"top":case"middle":case"bottom":case"baseline":break;default:t=""}return t||e||""}),commit:function(t){var e=this.getValue();e?t.setStyle("vertical-align",e):t.removeStyle("vertical-align"),t.removeAttribute("vAlign")}}]},s,{type:"vbox",padding:0,children:[{type:"select",id:"cellType",label:o.cellType,"default":"td",items:[[o.data,"td"],[o.header,"th"]],setup:e(function(t){return t.getName()}),commit:function(t){t.renameNode(this.getValue())}},s,{type:"text",id:"rowSpan",label:o.rowSpan,"default":"",validate:r.integer(o.invalidRowSpan),setup:e(function(t){if((t=parseInt(t.getAttribute("rowSpan"),10))&&1!=t)return t}),commit:function(t){var e=parseInt(this.getValue(),10);e&&1!=e?t.setAttribute("rowSpan",this.getValue()):t.removeAttribute("rowSpan")}},{type:"text",id:"colSpan",label:o.colSpan,"default":"",validate:r.integer(o.invalidColSpan),setup:e(function(t){if((t=parseInt(t.getAttribute("colSpan"),10))&&1!=t)return t}),commit:function(t){var e=parseInt(this.getValue(),10);e&&1!=e?t.setAttribute("colSpan",this.getValue()):t.removeAttribute("colSpan")}},s,{type:"hbox",padding:0,widths:["60%","40%"],children:[{type:"text",id:"bgColor",label:o.bgColor,"default":"",setup:e(function(t){var e=t.getAttribute("bgColor");return t.getStyle("background-color")||e}),commit:function(t){this.getValue()?t.setStyle("background-color",this.getValue()):t.removeStyle("background-color"),t.removeAttribute("bgColor")}},g?{type:"button",id:"bgColorChoose","class":"colorChooser",label:o.chooseColor,onLoad:function(){this.getElement().getParent().setStyle("vertical-align","bottom")},onClick:function(){t.getColorFromDialog(function(t){t&&this.getDialog().getContentElement("info","bgColor").setValue(t),this.focus()},this)}}:s]},s,{type:"hbox",padding:0,widths:["60%","40%"],children:[{type:"text",id:"borderColor",label:o.borderColor,"default":"",setup:e(function(t){var e=t.getAttribute("borderColor");return t.getStyle("border-color")||e}),commit:function(t){this.getValue()?t.setStyle("border-color",this.getValue()):t.removeStyle("border-color"),t.removeAttribute("borderColor")}},g?{type:"button",id:"borderColorChoose","class":"colorChooser",label:o.chooseColor,style:(u?"margin-right":"margin-left")+": 10px",onLoad:function(){this.getElement().getParent().setStyle("vertical-align","bottom")},onClick:function(){t.getColorFromDialog(function(t){t&&this.getDialog().getContentElement("info","borderColor").setValue(t),this.focus()},this)}}:s]}]}]}]}],onShow:function(){this.cells=CKEDITOR.plugins.tabletools.getSelectedCells(this._.editor.getSelection()),this.setupContent(this.cells)},onOk:function(){for(var t=this._.editor.getSelection(),e=t.createBookmarks(),i=this.cells,l=0;l<i.length;l++)this.commitContent(i[l]);this._.editor.forceNextSelectionCheck(),t.selectBookmarks(e),this._.editor.selectionChange()},onLoad:function(){var i={};this.foreach(function(e){e.setup&&e.commit&&(e.setup=CKEDITOR.tools.override(e.setup,function(t){return function(){t.apply(this,arguments),i[e.id]=e.getValue()}}),e.commit=CKEDITOR.tools.override(e.commit,function(t){return function(){i[e.id]!==e.getValue()&&t.apply(this,arguments)}}))})}}});
>>>>>>> 0ce8b76e35039cbab0dc8afcfff5dbd974e73a3d
