<<<<<<< HEAD
/*
 Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/

CKEDITOR.plugins.setLang("a11yhelp","zh",{title:"輔助工具指南",contents:"說明內容。若要關閉此對話框請按「ESC」。",legend:[{name:"一般",items:[{name:"編輯器工具列",legend:"請按 ${toolbarFocus} 以導覽到工具列。利用 TAB 或 SHIFT+TAB 以便移動到下一個及前一個工具列群組。利用右方向鍵或左方向鍵以便移動到下一個及上一個工具列按鈕。按下空白鍵或 ENTER 鍵啟用工具列按鈕。"},{name:"編輯器對話方塊",legend:"在對話框中，按下 TAB 鍵以導覽到下一個對話框元素，按下 SHIFT+TAB 以移動到上一個對話框元素，按下 ENTER 以遞交對話框，按下 ESC 以取消對話框。當對話框有多個分頁時，可以使用 ALT+F10 或是在對話框分頁順序中的一部份按下 TAB 以使用分頁列表。焦點在分頁列表上時，分別使用右方向鍵及左方向鍵移動到下一個及上一個分頁。"},{name:"編輯器內容功能表",legend:"請按下「${contextMenu}」或是「應用程式鍵」以開啟內容選單。以「TAB」或是「↓」鍵移動到下一個選單選項。以「SHIFT + TAB」或是「↑」鍵移動到上一個選單選項。按下「空白鍵」或是「ENTER」鍵以選取選單選項。以「空白鍵」或「ENTER」或「→」開啟目前選項之子選單。以「ESC」或「←」回到父選單。以「ESC」鍵關閉內容選單」。"},
{name:"編輯器清單方塊",legend:"在清單方塊中，使用 TAB 或下方向鍵移動到下一個列表項目。使用 SHIFT+TAB 或上方向鍵移動到上一個列表項目。按下空白鍵或 ENTER 以選取列表選項。按下 ESC 以關閉清單方塊。"},{name:"編輯器元件路徑工具列",legend:"請按 ${elementsPathFocus} 以瀏覽元素路徑列。利用 TAB 或右方向鍵以便移動到下一個元素按鈕。利用 SHIFT 或左方向鍵以便移動到上一個按鈕。按下空白鍵或 ENTER 鍵來選取在編輯器中的元素。"}]},{name:"命令",items:[{name:"復原命令",legend:"請按下「${undo}」"},{name:"重複命令",legend:"請按下「 ${redo}」"},{name:"粗體命令",legend:"請按下「${bold}」"},{name:"斜體",legend:"請按下「${italic}」"},{name:"底線命令",legend:"請按下「${underline}」"},{name:"連結",legend:"請按下「${link}」"},
{name:"隱藏工具列",legend:"請按下「${toolbarCollapse}」"},{name:"存取前一個焦點空間命令",legend:"請按下 ${accessPreviousSpace} 以存取最近但無法靠近之插字符號前的焦點空間。舉例：二個相鄰的 HR 元素。\r\n重複按鍵以存取較遠的焦點空間。"},{name:"存取下一個焦點空間命令",legend:"請按下 ${accessNextSpace} 以存取最近但無法靠近之插字符號後的焦點空間。舉例：二個相鄰的 HR 元素。\r\n重複按鍵以存取較遠的焦點空間。"},{name:"協助工具說明",legend:"請按下「${a11yHelp}」"},{name:" Paste as plain text",legend:"Press ${pastetext}",legendEdge:"Press ${pastetext}, followed by ${paste}"}]}],tab:"Tab",pause:"Pause",capslock:"Caps Lock",escape:"Esc",pageUp:"Page Up",
pageDown:"Page Down",leftArrow:"向左箭號",upArrow:"向上鍵號",rightArrow:"向右鍵號",downArrow:"向下鍵號",insert:"插入",leftWindowKey:"左方 Windows 鍵",rightWindowKey:"右方 Windows 鍵",selectKey:"選擇鍵",numpad0:"Numpad 0",numpad1:"Numpad 1",numpad2:"Numpad 2",numpad3:"Numpad 3",numpad4:"Numpad 4",numpad5:"Numpad 5",numpad6:"Numpad 6",numpad7:"Numpad 7",numpad8:"Numpad 8",numpad9:"Numpad 9",multiply:"乘號",add:"新增",subtract:"減號",decimalPoint:"小數點",divide:"除號",f1:"F1",f2:"F2",f3:"F3",f4:"F4",f5:"F5",f6:"F6",f7:"F7",f8:"F8",f9:"F9",
f10:"F10",f11:"F11",f12:"F12",numLock:"Num Lock",scrollLock:"Scroll Lock",semiColon:"分號",equalSign:"等號",comma:"逗號",dash:"虛線",period:"句點",forwardSlash:"斜線",graveAccent:"抑音符號",openBracket:"左方括號",backSlash:"反斜線",closeBracket:"右方括號",singleQuote:"單引號"});
=======
CKEDITOR.plugins.setLang("a11yhelp","zh",{title:"\u8f14\u52a9\u5de5\u5177\u6307\u5357",contents:"\u8aaa\u660e\u5167\u5bb9\u3002\u82e5\u8981\u95dc\u9589\u6b64\u5c0d\u8a71\u6846\u8acb\u6309\u300cESC\u300d\u3002",legend:[{name:"\u4e00\u822c",items:[{name:"\u7de8\u8f2f\u5668\u5de5\u5177\u5217",legend:"\u8acb\u6309 ${toolbarFocus} \u4ee5\u5c0e\u89bd\u5230\u5de5\u5177\u5217\u3002\u5229\u7528 TAB \u6216 SHIFT+TAB \u4ee5\u4fbf\u79fb\u52d5\u5230\u4e0b\u4e00\u500b\u53ca\u524d\u4e00\u500b\u5de5\u5177\u5217\u7fa4\u7d44\u3002\u5229\u7528\u53f3\u65b9\u5411\u9375\u6216\u5de6\u65b9\u5411\u9375\u4ee5\u4fbf\u79fb\u52d5\u5230\u4e0b\u4e00\u500b\u53ca\u4e0a\u4e00\u500b\u5de5\u5177\u5217\u6309\u9215\u3002\u6309\u4e0b\u7a7a\u767d\u9375\u6216 ENTER \u9375\u555f\u7528\u5de5\u5177\u5217\u6309\u9215\u3002"},{name:"\u7de8\u8f2f\u5668\u5c0d\u8a71\u65b9\u584a",legend:"\u5728\u5c0d\u8a71\u6846\u4e2d\uff0c\u6309\u4e0b TAB \u9375\u4ee5\u5c0e\u89bd\u5230\u4e0b\u4e00\u500b\u5c0d\u8a71\u6846\u5143\u7d20\uff0c\u6309\u4e0b SHIFT+TAB \u4ee5\u79fb\u52d5\u5230\u4e0a\u4e00\u500b\u5c0d\u8a71\u6846\u5143\u7d20\uff0c\u6309\u4e0b ENTER \u4ee5\u905e\u4ea4\u5c0d\u8a71\u6846\uff0c\u6309\u4e0b ESC \u4ee5\u53d6\u6d88\u5c0d\u8a71\u6846\u3002\u7576\u5c0d\u8a71\u6846\u6709\u591a\u500b\u5206\u9801\u6642\uff0c\u53ef\u4ee5\u4f7f\u7528 ALT+F10 \u6216\u662f\u5728\u5c0d\u8a71\u6846\u5206\u9801\u9806\u5e8f\u4e2d\u7684\u4e00\u90e8\u4efd\u6309\u4e0b TAB \u4ee5\u4f7f\u7528\u5206\u9801\u5217\u8868\u3002\u7126\u9ede\u5728\u5206\u9801\u5217\u8868\u4e0a\u6642\uff0c\u5206\u5225\u4f7f\u7528\u53f3\u65b9\u5411\u9375\u53ca\u5de6\u65b9\u5411\u9375\u79fb\u52d5\u5230\u4e0b\u4e00\u500b\u53ca\u4e0a\u4e00\u500b\u5206\u9801\u3002"},{name:"\u7de8\u8f2f\u5668\u5167\u5bb9\u529f\u80fd\u8868",legend:"\u8acb\u6309\u4e0b\u300c${contextMenu}\u300d\u6216\u662f\u300c\u61c9\u7528\u7a0b\u5f0f\u9375\u300d\u4ee5\u958b\u555f\u5167\u5bb9\u9078\u55ae\u3002\u4ee5\u300cTAB\u300d\u6216\u662f\u300c\u2193\u300d\u9375\u79fb\u52d5\u5230\u4e0b\u4e00\u500b\u9078\u55ae\u9078\u9805\u3002\u4ee5\u300cSHIFT + TAB\u300d\u6216\u662f\u300c\u2191\u300d\u9375\u79fb\u52d5\u5230\u4e0a\u4e00\u500b\u9078\u55ae\u9078\u9805\u3002\u6309\u4e0b\u300c\u7a7a\u767d\u9375\u300d\u6216\u662f\u300cENTER\u300d\u9375\u4ee5\u9078\u53d6\u9078\u55ae\u9078\u9805\u3002\u4ee5\u300c\u7a7a\u767d\u9375\u300d\u6216\u300cENTER\u300d\u6216\u300c\u2192\u300d\u958b\u555f\u76ee\u524d\u9078\u9805\u4e4b\u5b50\u9078\u55ae\u3002\u4ee5\u300cESC\u300d\u6216\u300c\u2190\u300d\u56de\u5230\u7236\u9078\u55ae\u3002\u4ee5\u300cESC\u300d\u9375\u95dc\u9589\u5167\u5bb9\u9078\u55ae\u300d\u3002"},{name:"\u7de8\u8f2f\u5668\u6e05\u55ae\u65b9\u584a",legend:"\u5728\u6e05\u55ae\u65b9\u584a\u4e2d\uff0c\u4f7f\u7528 TAB \u6216\u4e0b\u65b9\u5411\u9375\u79fb\u52d5\u5230\u4e0b\u4e00\u500b\u5217\u8868\u9805\u76ee\u3002\u4f7f\u7528 SHIFT+TAB \u6216\u4e0a\u65b9\u5411\u9375\u79fb\u52d5\u5230\u4e0a\u4e00\u500b\u5217\u8868\u9805\u76ee\u3002\u6309\u4e0b\u7a7a\u767d\u9375\u6216 ENTER \u4ee5\u9078\u53d6\u5217\u8868\u9078\u9805\u3002\u6309\u4e0b ESC \u4ee5\u95dc\u9589\u6e05\u55ae\u65b9\u584a\u3002"},{name:"\u7de8\u8f2f\u5668\u5143\u4ef6\u8def\u5f91\u5de5\u5177\u5217",legend:"\u8acb\u6309 ${elementsPathFocus} \u4ee5\u700f\u89bd\u5143\u7d20\u8def\u5f91\u5217\u3002\u5229\u7528 TAB \u6216\u53f3\u65b9\u5411\u9375\u4ee5\u4fbf\u79fb\u52d5\u5230\u4e0b\u4e00\u500b\u5143\u7d20\u6309\u9215\u3002\u5229\u7528 SHIFT \u6216\u5de6\u65b9\u5411\u9375\u4ee5\u4fbf\u79fb\u52d5\u5230\u4e0a\u4e00\u500b\u6309\u9215\u3002\u6309\u4e0b\u7a7a\u767d\u9375\u6216 ENTER \u9375\u4f86\u9078\u53d6\u5728\u7de8\u8f2f\u5668\u4e2d\u7684\u5143\u7d20\u3002"}]},{name:"\u547d\u4ee4",items:[{name:"\u5fa9\u539f\u547d\u4ee4",legend:"\u8acb\u6309\u4e0b\u300c${undo}\u300d"},{name:"\u91cd\u8907\u547d\u4ee4",legend:"\u8acb\u6309\u4e0b\u300c ${redo}\u300d"},{name:"\u7c97\u9ad4\u547d\u4ee4",legend:"\u8acb\u6309\u4e0b\u300c${bold}\u300d"},{name:"\u659c\u9ad4",legend:"\u8acb\u6309\u4e0b\u300c${italic}\u300d"},{name:"\u5e95\u7dda\u547d\u4ee4",legend:"\u8acb\u6309\u4e0b\u300c${underline}\u300d"},{name:"\u9023\u7d50",legend:"\u8acb\u6309\u4e0b\u300c${link}\u300d"},{name:"\u96b1\u85cf\u5de5\u5177\u5217",legend:"\u8acb\u6309\u4e0b\u300c${toolbarCollapse}\u300d"},{name:"\u5b58\u53d6\u524d\u4e00\u500b\u7126\u9ede\u7a7a\u9593\u547d\u4ee4",legend:"\u8acb\u6309\u4e0b ${accessPreviousSpace} \u4ee5\u5b58\u53d6\u6700\u8fd1\u4f46\u7121\u6cd5\u9760\u8fd1\u4e4b\u63d2\u5b57\u7b26\u865f\u524d\u7684\u7126\u9ede\u7a7a\u9593\u3002\u8209\u4f8b\uff1a\u4e8c\u500b\u76f8\u9130\u7684 HR \u5143\u7d20\u3002\r\n\u91cd\u8907\u6309\u9375\u4ee5\u5b58\u53d6\u8f03\u9060\u7684\u7126\u9ede\u7a7a\u9593\u3002"},{name:"\u5b58\u53d6\u4e0b\u4e00\u500b\u7126\u9ede\u7a7a\u9593\u547d\u4ee4",legend:"\u8acb\u6309\u4e0b ${accessNextSpace} \u4ee5\u5b58\u53d6\u6700\u8fd1\u4f46\u7121\u6cd5\u9760\u8fd1\u4e4b\u63d2\u5b57\u7b26\u865f\u5f8c\u7684\u7126\u9ede\u7a7a\u9593\u3002\u8209\u4f8b\uff1a\u4e8c\u500b\u76f8\u9130\u7684 HR \u5143\u7d20\u3002\r\n\u91cd\u8907\u6309\u9375\u4ee5\u5b58\u53d6\u8f03\u9060\u7684\u7126\u9ede\u7a7a\u9593\u3002"},{name:"\u5354\u52a9\u5de5\u5177\u8aaa\u660e",legend:"\u8acb\u6309\u4e0b\u300c${a11yHelp}\u300d"},{name:" Paste as plain text",legend:"Press ${pastetext}",legendEdge:"Press ${pastetext}, followed by ${paste}"}]}],tab:"Tab",pause:"Pause",capslock:"Caps Lock",escape:"Esc",pageUp:"Page Up",pageDown:"Page Down",leftArrow:"\u5411\u5de6\u7bad\u865f",upArrow:"\u5411\u4e0a\u9375\u865f",rightArrow:"\u5411\u53f3\u9375\u865f",downArrow:"\u5411\u4e0b\u9375\u865f",insert:"\u63d2\u5165",leftWindowKey:"\u5de6\u65b9 Windows \u9375",rightWindowKey:"\u53f3\u65b9 Windows \u9375",selectKey:"\u9078\u64c7\u9375",numpad0:"Numpad 0",numpad1:"Numpad 1",numpad2:"Numpad 2",numpad3:"Numpad 3",numpad4:"Numpad 4",numpad5:"Numpad 5",numpad6:"Numpad 6",numpad7:"Numpad 7",numpad8:"Numpad 8",numpad9:"Numpad 9",multiply:"\u4e58\u865f",add:"\u65b0\u589e",subtract:"\u6e1b\u865f",decimalPoint:"\u5c0f\u6578\u9ede",divide:"\u9664\u865f",f1:"F1",f2:"F2",f3:"F3",f4:"F4",f5:"F5",f6:"F6",f7:"F7",f8:"F8",f9:"F9",f10:"F10",f11:"F11",f12:"F12",numLock:"Num Lock",scrollLock:"Scroll Lock",semiColon:"\u5206\u865f",equalSign:"\u7b49\u865f",comma:"\u9017\u865f",dash:"\u865b\u7dda",period:"\u53e5\u9ede",forwardSlash:"\u659c\u7dda",graveAccent:"\u6291\u97f3\u7b26\u865f",openBracket:"\u5de6\u65b9\u62ec\u865f",backSlash:"\u53cd\u659c\u7dda",closeBracket:"\u53f3\u65b9\u62ec\u865f",singleQuote:"\u55ae\u5f15\u865f"});
>>>>>>> 0ce8b76e35039cbab0dc8afcfff5dbd974e73a3d