<<<<<<< HEAD
CKEDITOR.dialog.add("scaytDialog",function(c){var d=c.scayt,k='\x3cp\x3e\x3cimg src\x3d"'+d.getLogo()+'" /\x3e\x3c/p\x3e\x3cp\x3e'+d.getLocal("version")+d.getVersion()+"\x3c/p\x3e\x3cp\x3e"+d.getLocal("text_copyrights")+"\x3c/p\x3e",n=CKEDITOR.document,l={isChanged:function(){return null===this.newLang||this.currentLang===this.newLang?!1:!0},currentLang:d.getLang(),newLang:null,reset:function(){this.currentLang=d.getLang();this.newLang=null},id:"lang"},k=[{id:"options",label:d.getLocal("tab_options"),
onShow:function(){},elements:[{type:"vbox",id:"scaytOptions",children:function(){var b=d.getApplicationConfig(),a=[],c={"ignore-all-caps-words":"label_allCaps","ignore-domain-names":"label_ignoreDomainNames","ignore-words-with-mixed-cases":"label_mixedCase","ignore-words-with-numbers":"label_mixedWithDigits"},f;for(f in b)b={type:"checkbox"},b.id=f,b.label=d.getLocal(c[f]),a.push(b);return a}(),onShow:function(){this.getChild();for(var b=c.scayt,a=0;a<this.getChild().length;a++)this.getChild()[a].setValue(b.getApplicationConfig()[this.getChild()[a].id])}}]},
{id:"langs",label:d.getLocal("tab_languages"),elements:[{id:"leftLangColumn",type:"vbox",align:"left",widths:["100"],children:[{type:"html",id:"langBox",style:"overflow: hidden; white-space: normal;margin-bottom:15px;",html:'\x3cdiv\x3e\x3cdiv style\x3d"float:left;width:45%;margin-left:5px;" id\x3d"left-col-'+c.name+'" class\x3d"scayt-lang-list"\x3e\x3c/div\x3e\x3cdiv style\x3d"float:left;width:45%;margin-left:15px;" id\x3d"right-col-'+c.name+'" class\x3d"scayt-lang-list"\x3e\x3c/div\x3e\x3c/div\x3e',
onShow:function(){var b=c.scayt.getLang();n.getById("scaytLang_"+c.name+"_"+b).$.checked=!0}},{type:"html",id:"graytLanguagesHint",html:'\x3cdiv style\x3d"margin:5px auto; width:95%;white-space:normal;" id\x3d"'+c.name+'graytLanguagesHint"\x3e\x3cspan style\x3d"width:10px;height:10px;display: inline-block; background:#02b620;vertical-align:top;margin-top:2px;"\x3e\x3c/span\x3e - This languages are supported by Grammar As You Type(GRAYT).\x3c/div\x3e',onShow:function(){var b=n.getById(c.name+"graytLanguagesHint");
c.config.grayt_autoStartup||(b.$.style.display="none")}}]}]},{id:"dictionaries",label:d.getLocal("tab_dictionaries"),elements:[{type:"vbox",id:"rightCol_col__left",children:[{type:"html",id:"dictionaryNote",html:""},{type:"text",id:"dictionaryName",label:d.getLocal("label_fieldNameDic")||"Dictionary name",onShow:function(b){var a=b.sender,h=c.scayt;b=SCAYT.prototype.UILib;var f=a.getContentElement("dictionaries","dictionaryName").getInputElement().$;h.isLicensed()||(f.disabled=!0,b.css(f,{cursor:"not-allowed"}));
setTimeout(function(){a.getContentElement("dictionaries","dictionaryNote").getElement().setText("");null!=h.getUserDictionaryName()&&""!=h.getUserDictionaryName()&&a.getContentElement("dictionaries","dictionaryName").setValue(h.getUserDictionaryName())},0)}},{type:"hbox",id:"udButtonsHolder",align:"left",widths:["auto"],style:"width:auto;",children:[{type:"button",id:"createDic",label:d.getLocal("btn_createDic"),title:d.getLocal("btn_createDic"),onLoad:function(){this.getDialog();var b=c.scayt,a=
SCAYT.prototype.UILib,h=this.getElement().$,f=this.getElement().getChild(0).$;b.isLicensed()||(a.css(h,{cursor:"not-allowed"}),a.css(f,{cursor:"not-allowed"}))},onClick:function(){var b=this.getDialog(),a=g,h=c.scayt,f=b.getContentElement("dictionaries","dictionaryName").getValue();h.isLicensed()&&h.createUserDictionary(f,function(e){e.error||a.toggleDictionaryState.call(b,"dictionaryState");e.dialog=b;e.command="create";e.name=f;c.fire("scaytUserDictionaryAction",e)},function(a){a.dialog=b;a.command=
"create";a.name=f;c.fire("scaytUserDictionaryActionError",a)})}},{type:"button",id:"restoreDic",label:d.getLocal("btn_connectDic"),title:d.getLocal("btn_connectDic"),onLoad:function(){this.getDialog();var b=c.scayt,a=SCAYT.prototype.UILib,h=this.getElement().$,f=this.getElement().getChild(0).$;b.isLicensed()||(a.css(h,{cursor:"not-allowed"}),a.css(f,{cursor:"not-allowed"}))},onClick:function(){var b=this.getDialog(),a=c.scayt,h=g,f=b.getContentElement("dictionaries","dictionaryName").getValue();a.isLicensed()&&
a.restoreUserDictionary(f,function(a){a.dialog=b;a.error||h.toggleDictionaryState.call(b,"dictionaryState");a.command="restore";a.name=f;c.fire("scaytUserDictionaryAction",a)},function(a){a.dialog=b;a.command="restore";a.name=f;c.fire("scaytUserDictionaryActionError",a)})}},{type:"button",id:"disconnectDic",label:d.getLocal("btn_disconnectDic"),title:d.getLocal("btn_disconnectDic"),onClick:function(){var b=this.getDialog(),a=c.scayt,h=g,f=b.getContentElement("dictionaries","dictionaryName"),e=f.getValue();
a.isLicensed()&&(a.disconnectFromUserDictionary({}),f.setValue(""),h.toggleDictionaryState.call(b,"initialState"),c.fire("scaytUserDictionaryAction",{dialog:b,command:"disconnect",name:e}))}},{type:"button",id:"removeDic",label:d.getLocal("btn_deleteDic"),title:d.getLocal("btn_deleteDic"),onClick:function(){var b=this.getDialog(),a=c.scayt,h=g,f=b.getContentElement("dictionaries","dictionaryName"),e=f.getValue();a.isLicensed()&&a.removeUserDictionary(e,function(a){f.setValue("");a.error||h.toggleDictionaryState.call(b,
"initialState");a.dialog=b;a.command="remove";a.name=e;c.fire("scaytUserDictionaryAction",a)},function(a){a.dialog=b;a.command="remove";a.name=e;c.fire("scaytUserDictionaryActionError",a)})}},{type:"button",id:"renameDic",label:d.getLocal("btn_renameDic"),title:d.getLocal("btn_renameDic"),onClick:function(){var b=this.getDialog(),a=c.scayt,h=b.getContentElement("dictionaries","dictionaryName").getValue();a.isLicensed()&&a.renameUserDictionary(h,function(a){a.dialog=b;a.command="rename";a.name=h;c.fire("scaytUserDictionaryAction",
a)},function(a){a.dialog=b;a.command="rename";a.name=h;c.fire("scaytUserDictionaryActionError",a)})}},{type:"button",id:"editDic",label:d.getLocal("btn_goToDic"),title:d.getLocal("btn_goToDic"),onLoad:function(){this.getDialog()},onClick:function(){var b=this.getDialog(),a=b.getContentElement("dictionaries","addWordField");g.clearWordList.call(b);a.setValue("");g.getUserDictionary.call(b);g.toggleDictionaryState.call(b,"wordsState")}}]},{type:"hbox",id:"dicInfo",align:"left",children:[{type:"html",
id:"dicInfoHtml",html:'\x3cdiv id\x3d"dic_info_editor1" style\x3d"margin:5px auto; width:95%;white-space:normal;"\x3e'+(c.scayt.isLicensed&&c.scayt.isLicensed()?d.getLocal("text_descriptionDicForPaid"):d.getLocal("text_descriptionDicForFree"))+"\x3c/div\x3e"}]},{id:"addWordAction",type:"hbox",style:"width: 100%; margin-bottom: 0;",widths:["40%","60%"],children:[{id:"addWord",type:"vbox",style:"min-width: 150px;",children:[{type:"text",id:"addWordField",label:"Add word",maxLength:"64"}]},{id:"addWordButtons",
type:"vbox",style:"margin-top: 20px;",children:[{type:"hbox",id:"addWordButton",align:"left",children:[{type:"button",id:"addWord",label:d.getLocal("btn_addWord"),title:d.getLocal("btn_addWord"),onClick:function(){var b=this.getDialog(),a=c.scayt,h=b.getContentElement("dictionaries","itemList"),f=b.getContentElement("dictionaries","addWordField"),e=f.getValue(),d=a.getOption("wordBoundaryRegex"),g=this;e&&(-1!==e.search(d)?c.fire("scaytUserDictionaryAction",{dialog:b,command:"wordWithBannedSymbols",
name:e,error:!0}):h.inChildren(e)?(f.setValue(""),c.fire("scaytUserDictionaryAction",{dialog:b,command:"wordAlreadyAdded",name:e})):(this.disable(),a.addWordToUserDictionary(e,function(a){a.error||(f.setValue(""),h.addChild(e,!0));a.dialog=b;a.command="addWord";a.name=e;g.enable();c.fire("scaytUserDictionaryAction",a)},function(a){a.dialog=b;a.command="addWord";a.name=e;g.enable();c.fire("scaytUserDictionaryActionError",a)})))}},{type:"button",id:"backToDic",label:d.getLocal("btn_dictionaryPreferences"),
title:d.getLocal("btn_dictionaryPreferences"),align:"right",onClick:function(){var b=this.getDialog(),a=c.scayt;null!=a.getUserDictionaryName()&&""!=a.getUserDictionaryName()?g.toggleDictionaryState.call(b,"dictionaryState"):g.toggleDictionaryState.call(b,"initialState")}}]}]}]},{id:"wordsHolder",type:"hbox",style:"width: 100%; height: 170px; margin-bottom: 0;",children:[{type:"scaytItemList",id:"itemList",align:"left",style:"width: 100%; height: 170px; overflow: auto",onClick:function(b){b=b.data.$;
var a=c.scayt,h=SCAYT.prototype.UILib,f=h.parent(b.target)[0],e=h.attr(f,"data-cke-scayt-ud-word"),d=this.getDialog(),g=d.getContentElement("dictionaries","itemList");h.hasClass(b.target,"cke_scaytItemList_remove")&&a.deleteWordFromUserDictionary(e,function(a){a.error||g.removeChild(f,e);a.dialog=d;a.command="deleteWord";a.name=e;c.fire("scaytUserDictionaryAction",a)},function(a){a.dialog=d;a.command="deleteWord";a.name=e;c.fire("scaytUserDictionaryActionError",a)})}}]}]}]},{id:"about",label:d.getLocal("tab_about"),
elements:[{type:"html",id:"about",style:"margin: 5px 5px;",html:'\x3cdiv\x3e\x3cdiv id\x3d"scayt_about_"\x3e'+k+"\x3c/div\x3e\x3c/div\x3e"}]}];c.on("scaytUserDictionaryAction",function(b){var a=SCAYT.prototype.UILib,c=b.data.dialog,f=c.getContentElement("dictionaries","dictionaryNote").getElement(),e=b.editor.scayt,d;void 0===b.data.error?(d=e.getLocal("message_success_"+b.data.command+"Dic"),d=d.replace("%s",b.data.name),f.setText(d),a.css(f.$,{color:"blue"})):(""===b.data.name?f.setText(e.getLocal("message_info_emptyDic")):
(d=e.getLocal("message_error_"+b.data.command+"Dic"),d=d.replace("%s",b.data.name),f.setText(d)),a.css(f.$,{color:"red"}),null!=e.getUserDictionaryName()&&""!=e.getUserDictionaryName()?c.getContentElement("dictionaries","dictionaryName").setValue(e.getUserDictionaryName()):c.getContentElement("dictionaries","dictionaryName").setValue(""))});c.on("scaytUserDictionaryActionError",function(b){var a=SCAYT.prototype.UILib,c=b.data.dialog,d=c.getContentElement("dictionaries","dictionaryNote").getElement(),
e=b.editor.scayt,g;""===b.data.name?d.setText(e.getLocal("message_info_emptyDic")):(g=e.getLocal("message_error_"+b.data.command+"Dic"),g=g.replace("%s",b.data.name),d.setText(g));a.css(d.$,{color:"red"});null!=e.getUserDictionaryName()&&""!=e.getUserDictionaryName()?c.getContentElement("dictionaries","dictionaryName").setValue(e.getUserDictionaryName()):c.getContentElement("dictionaries","dictionaryName").setValue("")});var g={title:d.getLocal("text_title"),resizable:CKEDITOR.DIALOG_RESIZE_BOTH,
minWidth:"moono-lisa"==(CKEDITOR.skinName||c.config.skin)?450:340,minHeight:300,onLoad:function(){if(0!=c.config.scayt_uiTabs[1]){var b=g,a=b.getLangBoxes.call(this);this.getContentElement("dictionaries","addWordField");a.getParent().setStyle("white-space","normal");b.renderLangList(a);this.definition.minWidth=this.getSize().width;this.resize(this.definition.minWidth,this.definition.minHeight)}},onCancel:function(){l.reset()},onHide:function(){c.unlockSelection()},onShow:function(){c.fire("scaytDialogShown",
this);if(0!=c.config.scayt_uiTabs[2]){var b=this.getContentElement("dictionaries","addWordField");g.clearWordList.call(this);b.setValue("");g.getUserDictionary.call(this);g.toggleDictionaryState.call(this,"wordsState")}},onOk:function(){var b=g,a=c.scayt;this.getContentElement("options","scaytOptions");b=b.getChangedOption.call(this);a.commitOption({changedOptions:b})},toggleDictionaryButtons:function(b){var a=this.getContentElement("dictionaries","existDic").getElement().getParent(),c=this.getContentElement("dictionaries",
"notExistDic").getElement().getParent();b?(a.show(),c.hide()):(a.hide(),c.show())},getChangedOption:function(){var b={};if(1==c.config.scayt_uiTabs[0])for(var a=this.getContentElement("options","scaytOptions").getChild(),d=0;d<a.length;d++)a[d].isChanged()&&(b[a[d].id]=a[d].getValue());l.isChanged()&&(b[l.id]=c.config.scayt_sLang=l.currentLang=l.newLang);return b},buildRadioInputs:function(b,a,d){var f=new CKEDITOR.dom.element("div"),e="scaytLang_"+c.name+"_"+a,g=CKEDITOR.dom.element.createFromHtml('\x3cinput id\x3d"'+
e+'" type\x3d"radio"  value\x3d"'+a+'" name\x3d"scayt_lang" /\x3e'),k=new CKEDITOR.dom.element("label"),q=c.scayt;f.setStyles({"white-space":"normal",position:"relative","padding-bottom":"2px"});g.on("click",function(a){l.newLang=a.sender.getValue()});k.appendText(b);k.setAttribute("for",e);d&&c.config.grayt_autoStartup&&k.setStyles({color:"#02b620"});f.append(g);f.append(k);a===q.getLang()&&(g.setAttribute("checked",!0),g.setAttribute("defaultChecked","defaultChecked"));return f},renderLangList:function(b){var a=
b.find("#left-col-"+c.name).getItem(0);b=b.find("#right-col-"+c.name).getItem(0);var h=d.getScaytLangList(),f=d.getGraytLangList(),e={},g=[],k=0,l=!1,m;for(m in h.ltr)e[m]=h.ltr[m];for(m in h.rtl)e[m]=h.rtl[m];for(m in e)g.push([m,e[m]]);g.sort(function(a,b){var c=0;a[1]>b[1]?c=1:a[1]<b[1]&&(c=-1);return c});e={};for(l=0;l<g.length;l++)e[g[l][0]]=g[l][1];g=Math.round(g.length/2);for(m in e)k++,l=m in f.ltr||m in f.rtl,this.buildRadioInputs(e[m],m,l).appendTo(k<=g?a:b)},getLangBoxes:function(){return this.getContentElement("langs",
"langBox").getElement()},toggleDictionaryState:function(b){var a=this.getContentElement("dictionaries","dictionaryName").getElement().getParent(),c=this.getContentElement("dictionaries","udButtonsHolder").getElement().getParent(),d=this.getContentElement("dictionaries","createDic").getElement().getParent(),e=this.getContentElement("dictionaries","restoreDic").getElement().getParent(),g=this.getContentElement("dictionaries","disconnectDic").getElement().getParent(),l=this.getContentElement("dictionaries",
"removeDic").getElement().getParent(),k=this.getContentElement("dictionaries","renameDic").getElement().getParent(),m=this.getContentElement("dictionaries","dicInfo").getElement().getParent(),n=this.getContentElement("dictionaries","addWordAction").getElement().getParent(),p=this.getContentElement("dictionaries","wordsHolder").getElement().getParent();switch(b){case "initialState":a.show();c.show();d.show();e.show();g.hide();l.hide();k.hide();m.show();n.hide();p.hide();break;case "wordsState":a.hide();
c.hide();m.hide();n.show();p.show();break;case "dictionaryState":a.show(),c.show(),d.hide(),e.hide(),g.show(),l.show(),k.show(),m.show(),n.hide(),p.hide()}},clearWordList:function(){this.getContentElement("dictionaries","itemList").removeAllChild()},getUserDictionary:function(){var b=this;c.scayt.getUserDictionary("",function(a){a.error||g.renderItemList.call(b,a.wordlist)})},renderItemList:function(b){for(var a=this.getContentElement("dictionaries","itemList"),c=0;c<b.length;c++)a.addChild(b[c])},
contents:function(b,a){var c=[],d=a.config.scayt_uiTabs;if(d){for(var e in d)1==d[e]&&c.push(b[e]);c.push(b[b.length-1])}else return b;return c}(k,c)};return g});
CKEDITOR.tools.extend(CKEDITOR.ui.dialog,{scaytItemList:function(c,d,k){if(arguments.length){var n=this;c.on("load",function(){n.getElement().on("click",function(c){})});CKEDITOR.ui.dialog.uiElement.call(this,c,d,k,"",null,null,function(){var c=['\x3cp class\x3d"cke_dialog_ui_',d.type,'"'];d.style&&c.push('style\x3d"'+d.style+'" ');c.push("\x3e");c.push("\x3c/p\x3e");return c.join("")})}}});
CKEDITOR.ui.dialog.scaytItemList.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement,{children:[],addChild:function(c,d){var k=new CKEDITOR.dom.element("p"),n=new CKEDITOR.dom.element("a"),l=this.getElement().getChildren().getItem(0);this.children.push(c);k.addClass("cke_scaytItemList-child");k.setAttribute("data-cke-scayt-ud-word",c);k.appendText(c);n.addClass("cke_scaytItemList_remove");n.addClass("cke_dialog_close_button");n.setAttribute("href","javascript:void(0)");k.append(n);l.append(k,
d?!0:!1)},inChildren:function(c){return SCAYT.prototype.Utils.inArray(this.children,c)},removeChild:function(c,d){this.children.splice(SCAYT.prototype.Utils.indexOf(this.children,d),1);this.getElement().getChildren().getItem(0).$.removeChild(c)},removeAllChild:function(){this.children=[];this.getElement().getChildren().getItem(0).setHtml("")}});(function(){commonBuilder={build:function(c,d,k){return new CKEDITOR.ui.dialog[d.type](c,d,k)}};CKEDITOR.dialog.addUIElement("scaytItemList",commonBuilder)})();
=======
CKEDITOR.dialog.add("scaytDialog",function(s){var d=s.scayt,t='<p><img src="'+d.getLogo()+'" /></p><p>'+d.getLocal("version")+d.getVersion()+"</p><p>"+d.getLocal("text_copyrights")+"</p>",e=CKEDITOR.document,l={isChanged:function(){return null!==this.newLang&&this.currentLang!==this.newLang},currentLang:d.getLang(),newLang:null,reset:function(){this.currentLang=d.getLang(),this.newLang=null},id:"lang"};t=[{id:"options",label:d.getLocal("tab_options"),onShow:function(){},elements:[{type:"vbox",id:"scaytOptions",children:function(){var t,e=d.getApplicationConfig(),i=[],n={"ignore-all-caps-words":"label_allCaps","ignore-domain-names":"label_ignoreDomainNames","ignore-words-with-mixed-cases":"label_mixedCase","ignore-words-with-numbers":"label_mixedWithDigits"};for(t in e)(e={type:"checkbox"}).id=t,e.label=d.getLocal(n[t]),i.push(e);return i}(),onShow:function(){this.getChild();for(var t=s.scayt,e=0;e<this.getChild().length;e++)this.getChild()[e].setValue(t.getApplicationConfig()[this.getChild()[e].id])}}]},{id:"langs",label:d.getLocal("tab_languages"),elements:[{id:"leftLangColumn",type:"vbox",align:"left",widths:["100"],children:[{type:"html",id:"langBox",style:"overflow: hidden; white-space: normal;margin-bottom:15px;",html:'<div><div style="float:left;width:45%;margin-left:5px;" id="left-col-'+s.name+'" class="scayt-lang-list"></div><div style="float:left;width:45%;margin-left:15px;" id="right-col-'+s.name+'" class="scayt-lang-list"></div></div>',onShow:function(){var t=s.scayt.getLang();e.getById("scaytLang_"+s.name+"_"+t).$.checked=!0}},{type:"html",id:"graytLanguagesHint",html:'<div style="margin:5px auto; width:95%;white-space:normal;" id="'+s.name+'graytLanguagesHint"><span style="width:10px;height:10px;display: inline-block; background:#02b620;vertical-align:top;margin-top:2px;"></span> - This languages are supported by Grammar As You Type(GRAYT).</div>',onShow:function(){var t=e.getById(s.name+"graytLanguagesHint");s.config.grayt_autoStartup||(t.$.style.display="none")}}]}]},{id:"dictionaries",label:d.getLocal("tab_dictionaries"),elements:[{type:"vbox",id:"rightCol_col__left",children:[{type:"html",id:"dictionaryNote",html:""},{type:"text",id:"dictionaryName",label:d.getLocal("label_fieldNameDic")||"Dictionary name",onShow:function(t){var e=t.sender,i=s.scayt;t=SCAYT.prototype.UILib;var n=e.getContentElement("dictionaries","dictionaryName").getInputElement().$;i.isLicensed()||(n.disabled=!0,t.css(n,{cursor:"not-allowed"})),setTimeout(function(){e.getContentElement("dictionaries","dictionaryNote").getElement().setText(""),null!=i.getUserDictionaryName()&&""!=i.getUserDictionaryName()&&e.getContentElement("dictionaries","dictionaryName").setValue(i.getUserDictionaryName())},0)}},{type:"hbox",id:"udButtonsHolder",align:"left",widths:["auto"],style:"width:auto;",children:[{type:"button",id:"createDic",label:d.getLocal("btn_createDic"),title:d.getLocal("btn_createDic"),onLoad:function(){this.getDialog();var t=s.scayt,e=SCAYT.prototype.UILib,i=this.getElement().$,n=this.getElement().getChild(0).$;t.isLicensed()||(e.css(i,{cursor:"not-allowed"}),e.css(n,{cursor:"not-allowed"}))},onClick:function(){var e=this.getDialog(),i=o,t=s.scayt,n=e.getContentElement("dictionaries","dictionaryName").getValue();t.isLicensed()&&t.createUserDictionary(n,function(t){t.error||i.toggleDictionaryState.call(e,"dictionaryState"),t.dialog=e,t.command="create",t.name=n,s.fire("scaytUserDictionaryAction",t)},function(t){t.dialog=e,t.command="create",t.name=n,s.fire("scaytUserDictionaryActionError",t)})}},{type:"button",id:"restoreDic",label:d.getLocal("btn_connectDic"),title:d.getLocal("btn_connectDic"),onLoad:function(){this.getDialog();var t=s.scayt,e=SCAYT.prototype.UILib,i=this.getElement().$,n=this.getElement().getChild(0).$;t.isLicensed()||(e.css(i,{cursor:"not-allowed"}),e.css(n,{cursor:"not-allowed"}))},onClick:function(){var e=this.getDialog(),t=s.scayt,i=o,n=e.getContentElement("dictionaries","dictionaryName").getValue();t.isLicensed()&&t.restoreUserDictionary(n,function(t){t.dialog=e,t.error||i.toggleDictionaryState.call(e,"dictionaryState"),t.command="restore",t.name=n,s.fire("scaytUserDictionaryAction",t)},function(t){t.dialog=e,t.command="restore",t.name=n,s.fire("scaytUserDictionaryActionError",t)})}},{type:"button",id:"disconnectDic",label:d.getLocal("btn_disconnectDic"),title:d.getLocal("btn_disconnectDic"),onClick:function(){var t=this.getDialog(),e=s.scayt,i=o,n=t.getContentElement("dictionaries","dictionaryName"),a=n.getValue();e.isLicensed()&&(e.disconnectFromUserDictionary({}),n.setValue(""),i.toggleDictionaryState.call(t,"initialState"),s.fire("scaytUserDictionaryAction",{dialog:t,command:"disconnect",name:a}))}},{type:"button",id:"removeDic",label:d.getLocal("btn_deleteDic"),title:d.getLocal("btn_deleteDic"),onClick:function(){var e=this.getDialog(),t=s.scayt,i=o,n=e.getContentElement("dictionaries","dictionaryName"),a=n.getValue();t.isLicensed()&&t.removeUserDictionary(a,function(t){n.setValue(""),t.error||i.toggleDictionaryState.call(e,"initialState"),t.dialog=e,t.command="remove",t.name=a,s.fire("scaytUserDictionaryAction",t)},function(t){t.dialog=e,t.command="remove",t.name=a,s.fire("scaytUserDictionaryActionError",t)})}},{type:"button",id:"renameDic",label:d.getLocal("btn_renameDic"),title:d.getLocal("btn_renameDic"),onClick:function(){var e=this.getDialog(),t=s.scayt,i=e.getContentElement("dictionaries","dictionaryName").getValue();t.isLicensed()&&t.renameUserDictionary(i,function(t){t.dialog=e,t.command="rename",t.name=i,s.fire("scaytUserDictionaryAction",t)},function(t){t.dialog=e,t.command="rename",t.name=i,s.fire("scaytUserDictionaryActionError",t)})}},{type:"button",id:"editDic",label:d.getLocal("btn_goToDic"),title:d.getLocal("btn_goToDic"),onLoad:function(){this.getDialog()},onClick:function(){var t=this.getDialog(),e=t.getContentElement("dictionaries","addWordField");o.clearWordList.call(t),e.setValue(""),o.getUserDictionary.call(t),o.toggleDictionaryState.call(t,"wordsState")}}]},{type:"hbox",id:"dicInfo",align:"left",children:[{type:"html",id:"dicInfoHtml",html:'<div id="dic_info_editor1" style="margin:5px auto; width:95%;white-space:normal;">'+(s.scayt.isLicensed&&s.scayt.isLicensed()?d.getLocal("text_descriptionDicForPaid"):d.getLocal("text_descriptionDicForFree"))+"</div>"}]},{id:"addWordAction",type:"hbox",style:"width: 100%; margin-bottom: 0;",widths:["40%","60%"],children:[{id:"addWord",type:"vbox",style:"min-width: 150px;",children:[{type:"text",id:"addWordField",label:"Add word",maxLength:"64"}]},{id:"addWordButtons",type:"vbox",style:"margin-top: 20px;",children:[{type:"hbox",id:"addWordButton",align:"left",children:[{type:"button",id:"addWord",label:d.getLocal("btn_addWord"),title:d.getLocal("btn_addWord"),onClick:function(){var e=this.getDialog(),t=s.scayt,i=e.getContentElement("dictionaries","itemList"),n=e.getContentElement("dictionaries","addWordField"),a=n.getValue(),o=t.getOption("wordBoundaryRegex"),r=this;a&&(-1!==a.search(o)?s.fire("scaytUserDictionaryAction",{dialog:e,command:"wordWithBannedSymbols",name:a,error:!0}):i.inChildren(a)?(n.setValue(""),s.fire("scaytUserDictionaryAction",{dialog:e,command:"wordAlreadyAdded",name:a})):(this.disable(),t.addWordToUserDictionary(a,function(t){t.error||(n.setValue(""),i.addChild(a,!0)),t.dialog=e,t.command="addWord",t.name=a,r.enable(),s.fire("scaytUserDictionaryAction",t)},function(t){t.dialog=e,t.command="addWord",t.name=a,r.enable(),s.fire("scaytUserDictionaryActionError",t)})))}},{type:"button",id:"backToDic",label:d.getLocal("btn_dictionaryPreferences"),title:d.getLocal("btn_dictionaryPreferences"),align:"right",onClick:function(){var t=this.getDialog(),e=s.scayt;null!=e.getUserDictionaryName()&&""!=e.getUserDictionaryName()?o.toggleDictionaryState.call(t,"dictionaryState"):o.toggleDictionaryState.call(t,"initialState")}}]}]}]},{id:"wordsHolder",type:"hbox",style:"width: 100%; height: 170px; margin-bottom: 0;",children:[{type:"scaytItemList",id:"itemList",align:"left",style:"width: 100%; height: 170px; overflow: auto",onClick:function(t){t=t.data.$;var e=s.scayt,i=SCAYT.prototype.UILib,n=i.parent(t.target)[0],a=i.attr(n,"data-cke-scayt-ud-word"),o=this.getDialog(),r=o.getContentElement("dictionaries","itemList");i.hasClass(t.target,"cke_scaytItemList_remove")&&e.deleteWordFromUserDictionary(a,function(t){t.error||r.removeChild(n,a),t.dialog=o,t.command="deleteWord",t.name=a,s.fire("scaytUserDictionaryAction",t)},function(t){t.dialog=o,t.command="deleteWord",t.name=a,s.fire("scaytUserDictionaryActionError",t)})}}]}]}]},{id:"about",label:d.getLocal("tab_about"),elements:[{type:"html",id:"about",style:"margin: 5px 5px;",html:'<div><div id="scayt_about_">'+t+"</div></div>"}]}];s.on("scaytUserDictionaryAction",function(t){var e,i=SCAYT.prototype.UILib,n=t.data.dialog,a=n.getContentElement("dictionaries","dictionaryNote").getElement(),o=t.editor.scayt;void 0===t.data.error?(e=(e=o.getLocal("message_success_"+t.data.command+"Dic")).replace("%s",t.data.name),a.setText(e),i.css(a.$,{color:"blue"})):(""===t.data.name?a.setText(o.getLocal("message_info_emptyDic")):(e=(e=o.getLocal("message_error_"+t.data.command+"Dic")).replace("%s",t.data.name),a.setText(e)),i.css(a.$,{color:"red"}),null!=o.getUserDictionaryName()&&""!=o.getUserDictionaryName()?n.getContentElement("dictionaries","dictionaryName").setValue(o.getUserDictionaryName()):n.getContentElement("dictionaries","dictionaryName").setValue(""))}),s.on("scaytUserDictionaryActionError",function(t){var e,i=SCAYT.prototype.UILib,n=t.data.dialog,a=n.getContentElement("dictionaries","dictionaryNote").getElement(),o=t.editor.scayt;""===t.data.name?a.setText(o.getLocal("message_info_emptyDic")):(e=(e=o.getLocal("message_error_"+t.data.command+"Dic")).replace("%s",t.data.name),a.setText(e)),i.css(a.$,{color:"red"}),null!=o.getUserDictionaryName()&&""!=o.getUserDictionaryName()?n.getContentElement("dictionaries","dictionaryName").setValue(o.getUserDictionaryName()):n.getContentElement("dictionaries","dictionaryName").setValue("")});var o={title:d.getLocal("text_title"),resizable:CKEDITOR.DIALOG_RESIZE_BOTH,minWidth:"moono-lisa"==(CKEDITOR.skinName||s.config.skin)?450:340,minHeight:300,onLoad:function(){if(0!=s.config.scayt_uiTabs[1]){var t=o,e=t.getLangBoxes.call(this);this.getContentElement("dictionaries","addWordField"),e.getParent().setStyle("white-space","normal"),t.renderLangList(e),this.definition.minWidth=this.getSize().width,this.resize(this.definition.minWidth,this.definition.minHeight)}},onCancel:function(){l.reset()},onHide:function(){s.unlockSelection()},onShow:function(){if(s.fire("scaytDialogShown",this),0!=s.config.scayt_uiTabs[2]){var t=this.getContentElement("dictionaries","addWordField");o.clearWordList.call(this),t.setValue(""),o.getUserDictionary.call(this),o.toggleDictionaryState.call(this,"wordsState")}},onOk:function(){var t=o,e=s.scayt;this.getContentElement("options","scaytOptions"),t=t.getChangedOption.call(this),e.commitOption({changedOptions:t})},toggleDictionaryButtons:function(t){var e=this.getContentElement("dictionaries","existDic").getElement().getParent(),i=this.getContentElement("dictionaries","notExistDic").getElement().getParent();t?(e.show(),i.hide()):(e.hide(),i.show())},getChangedOption:function(){var t={};if(1==s.config.scayt_uiTabs[0])for(var e=this.getContentElement("options","scaytOptions").getChild(),i=0;i<e.length;i++)e[i].isChanged()&&(t[e[i].id]=e[i].getValue());return l.isChanged()&&(t[l.id]=s.config.scayt_sLang=l.currentLang=l.newLang),t},buildRadioInputs:function(t,e,i){var n=new CKEDITOR.dom.element("div"),a="scaytLang_"+s.name+"_"+e,o=CKEDITOR.dom.element.createFromHtml('<input id="'+a+'" type="radio"  value="'+e+'" name="scayt_lang" />'),r=new CKEDITOR.dom.element("label"),c=s.scayt;return n.setStyles({"white-space":"normal",position:"relative","padding-bottom":"2px"}),o.on("click",function(t){l.newLang=t.sender.getValue()}),r.appendText(t),r.setAttribute("for",a),i&&s.config.grayt_autoStartup&&r.setStyles({color:"#02b620"}),n.append(o),n.append(r),e===c.getLang()&&(o.setAttribute("checked",!0),o.setAttribute("defaultChecked","defaultChecked")),n},renderLangList:function(t){var e=t.find("#left-col-"+s.name).getItem(0);t=t.find("#right-col-"+s.name).getItem(0);var i,n=d.getScaytLangList(),a=d.getGraytLangList(),o={},r=[],c=0,l=!1;for(i in n.ltr)o[i]=n.ltr[i];for(i in n.rtl)o[i]=n.rtl[i];for(i in o)r.push([i,o[i]]);for(r.sort(function(t,e){var i=0;return t[1]>e[1]?i=1:t[1]<e[1]&&(i=-1),i}),o={},l=0;l<r.length;l++)o[r[l][0]]=r[l][1];for(i in r=Math.round(r.length/2),o)c++,l=i in a.ltr||i in a.rtl,this.buildRadioInputs(o[i],i,l).appendTo(c<=r?e:t)},getLangBoxes:function(){return this.getContentElement("langs","langBox").getElement()},toggleDictionaryState:function(t){var e=this.getContentElement("dictionaries","dictionaryName").getElement().getParent(),i=this.getContentElement("dictionaries","udButtonsHolder").getElement().getParent(),n=this.getContentElement("dictionaries","createDic").getElement().getParent(),a=this.getContentElement("dictionaries","restoreDic").getElement().getParent(),o=this.getContentElement("dictionaries","disconnectDic").getElement().getParent(),r=this.getContentElement("dictionaries","removeDic").getElement().getParent(),c=this.getContentElement("dictionaries","renameDic").getElement().getParent(),l=this.getContentElement("dictionaries","dicInfo").getElement().getParent(),s=this.getContentElement("dictionaries","addWordAction").getElement().getParent(),d=this.getContentElement("dictionaries","wordsHolder").getElement().getParent();switch(t){case"initialState":e.show(),i.show(),n.show(),a.show(),o.hide(),r.hide(),c.hide(),l.show(),s.hide(),d.hide();break;case"wordsState":e.hide(),i.hide(),l.hide(),s.show(),d.show();break;case"dictionaryState":e.show(),i.show(),n.hide(),a.hide(),o.show(),r.show(),c.show(),l.show(),s.hide(),d.hide()}},clearWordList:function(){this.getContentElement("dictionaries","itemList").removeAllChild()},getUserDictionary:function(){var e=this;s.scayt.getUserDictionary("",function(t){t.error||o.renderItemList.call(e,t.wordlist)})},renderItemList:function(t){for(var e=this.getContentElement("dictionaries","itemList"),i=0;i<t.length;i++)e.addChild(t[i])},contents:function(t){var e=[],i=s.config.scayt_uiTabs;if(!i)return t;for(var n in i)1==i[n]&&e.push(t[n]);return e.push(t[t.length-1]),e}(t)};return o}),CKEDITOR.tools.extend(CKEDITOR.ui.dialog,{scaytItemList:function(t,e,i){if(arguments.length){var n=this;t.on("load",function(){n.getElement().on("click",function(){})}),CKEDITOR.ui.dialog.uiElement.call(this,t,e,i,"",null,null,function(){var t=['<p class="cke_dialog_ui_',e.type,'"'];return e.style&&t.push('style="'+e.style+'" '),t.push(">"),t.push("</p>"),t.join("")})}}}),CKEDITOR.ui.dialog.scaytItemList.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement,{children:[],addChild:function(t,e){var i=new CKEDITOR.dom.element("p"),n=new CKEDITOR.dom.element("a"),a=this.getElement().getChildren().getItem(0);this.children.push(t),i.addClass("cke_scaytItemList-child"),i.setAttribute("data-cke-scayt-ud-word",t),i.appendText(t),n.addClass("cke_scaytItemList_remove"),n.addClass("cke_dialog_close_button"),n.setAttribute("href","javascript:void(0)"),i.append(n),a.append(i,!!e)},inChildren:function(t){return SCAYT.prototype.Utils.inArray(this.children,t)},removeChild:function(t,e){this.children.splice(SCAYT.prototype.Utils.indexOf(this.children,e),1),this.getElement().getChildren().getItem(0).$.removeChild(t)},removeAllChild:function(){this.children=[],this.getElement().getChildren().getItem(0).setHtml("")}}),commonBuilder={build:function(t,e,i){return new CKEDITOR.ui.dialog[e.type](t,e,i)}},CKEDITOR.dialog.addUIElement("scaytItemList",commonBuilder);
>>>>>>> 0ce8b76e35039cbab0dc8afcfff5dbd974e73a3d