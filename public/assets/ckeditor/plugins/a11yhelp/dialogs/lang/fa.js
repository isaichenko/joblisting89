<<<<<<< HEAD
/*
 Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/

CKEDITOR.plugins.setLang("a11yhelp","fa",{title:"دستورالعمل‌های دسترسی",contents:"راهنمای فهرست مطالب. برای بستن این کادر محاوره‌ای ESC را فشار دهید.",legend:[{name:"عمومی",items:[{name:"نوار ابزار ویرایشگر",legend:"${toolbarFocus} را برای باز کردن نوار ابزار بفشارید. با کلید Tab و Shift+Tab در مجموعه نوار ابزار بعدی و قبلی حرکت کنید. برای حرکت در کلید نوار ابزار قبلی و بعدی با کلید جهت‌نمای راست و چپ جابجا شوید. کلید Space یا Enter را برای فعال کردن کلید نوار ابزار بفشارید."},{name:"پنجره محاورهای ویرایشگر",
legend:"Inside a dialog, press TAB to navigate to the next dialog element, press SHIFT+TAB to move to the previous dialog element, press ENTER to submit the dialog, press ESC to cancel the dialog. When a dialog has multiple tabs, the tab list can be reached either with ALT+F10 or with TAB as part of the dialog tabbing order. With tab list focused, move to the next and previous tab with RIGHT and LEFT ARROW, respectively."},{name:"منوی متنی ویرایشگر",legend:"${contextMenu} یا کلید برنامههای کاربردی را برای باز کردن منوی متن را بفشارید. سپس میتوانید برای حرکت به گزینه بعدی منو با کلید Tab و یا کلید جهتنمای پایین جابجا شوید. حرکت به گزینه قبلی با Shift+Tab یا کلید جهتنمای بالا. فشردن Space یا Enter برای انتخاب یک گزینه از منو. باز کردن زیر شاخه گزینه منو جاری با کلید Space یا Enter و یا کلید جهتنمای راست و چپ. بازگشت به منوی والد با کلید Esc یا کلید جهتنمای چپ. بستن منوی متن با Esc."},
{name:"جعبه فهرست ویرایشگر",legend:"در داخل جعبه لیست، قلم دوم از اقلام لیست بعدی را با TAB و یا Arrow Down حرکت دهید. انتقال به قلم دوم از اقلام لیست قبلی را با SHIFT + TAB یا UP ARROW. کلید Space یا ENTER را برای انتخاب گزینه لیست بفشارید. کلید ESC را برای بستن جعبه لیست بفشارید."},{name:"ویرایشگر عنصر نوار راه",legend:"برای رفتن به مسیر عناصر ${elementsPathFocus} را بفشارید. حرکت به کلید عنصر بعدی با کلید Tab یا کلید جهت‌نمای راست. برگشت به کلید قبلی با Shift+Tab یا کلید جهت‌نمای چپ. فشردن Space یا Enter برای انتخاب یک عنصر در ویرایشگر."}]},
{name:"فرمان‌ها",items:[{name:"بازگشت به آخرین فرمان",legend:"فشردن ${undo}"},{name:"انجام مجدد فرمان",legend:"فشردن ${redo}"},{name:"فرمان درشت کردن متن",legend:"فشردن ${bold}"},{name:"فرمان کج کردن متن",legend:"فشردن ${italic}"},{name:"فرمان زیرخطدار کردن متن",legend:"فشردن ${underline}"},{name:"فرمان پیوند دادن",legend:"فشردن ${link}"},{name:"بستن نوار ابزار فرمان",legend:"فشردن ${toolbarCollapse}"},{name:"دسترسی به فرمان محل تمرکز قبلی",legend:"فشردن ${accessPreviousSpace} برای دسترسی به نزدیک‌ترین فضای قابل دسترسی تمرکز قبل از هشتک، برای مثال: دو عنصر مجاور HR -خط افقی-. تکرار کلید ترکیبی برای رسیدن به فضاهای تمرکز از راه دور."},
{name:"دسترسی به فضای دستور بعدی",legend:"برای دسترسی به نزدیک‌ترین فضای تمرکز غیر قابل دسترس، ${accessNextSpace} را پس از علامت هشتک بفشارید، برای مثال:  دو عنصر مجاور HR -خط افقی-. کلید ترکیبی را برای رسیدن به فضای تمرکز تکرار کنید."},{name:"راهنمای دسترسی",legend:"فشردن ${a11yHelp}"},{name:" Paste as plain text",legend:"Press ${pastetext}",legendEdge:"Press ${pastetext}, followed by ${paste}"}]}],tab:"برگه",pause:"توقف",capslock:"Caps Lock",escape:"گریز",pageUp:"صفحه به بالا",pageDown:"صفحه به پایین",
leftArrow:"پیکان چپ",upArrow:"پیکان بالا",rightArrow:"پیکان راست",downArrow:"پیکان پایین",insert:"ورود",leftWindowKey:"کلید چپ ویندوز",rightWindowKey:"کلید راست ویندوز",selectKey:"انتخاب کلید",numpad0:"کلید شماره 0",numpad1:"کلید شماره 1",numpad2:"کلید شماره 2",numpad3:"کلید شماره 3",numpad4:"کلید شماره 4",numpad5:"کلید شماره 5",numpad6:"کلید شماره 6",numpad7:"کلید شماره 7",numpad8:"کلید شماره 8",numpad9:"کلید شماره 9",multiply:"ضرب",add:"افزودن",subtract:"تفریق",decimalPoint:"نقطه‌ی اعشار",divide:"جدا کردن",
f1:"F1",f2:"F2",f3:"F3",f4:"F4",f5:"F5",f6:"F6",f7:"F7",f8:"F8",f9:"F9",f10:"F10",f11:"F11",f12:"F12",numLock:"Num Lock",scrollLock:"Scroll Lock",semiColon:"Semicolon",equalSign:"علامت تساوی",comma:"کاما",dash:"خط تیره",period:"دوره",forwardSlash:"Forward Slash",graveAccent:"Grave Accent",openBracket:"Open Bracket",backSlash:"Backslash",closeBracket:"Close Bracket",singleQuote:"Single Quote"});
=======
CKEDITOR.plugins.setLang("a11yhelp","fa",{title:"\u062f\u0633\u062a\u0648\u0631\u0627\u0644\u0639\u0645\u0644\u200c\u0647\u0627\u06cc \u062f\u0633\u062a\u0631\u0633\u06cc",contents:"\u0631\u0627\u0647\u0646\u0645\u0627\u06cc \u0641\u0647\u0631\u0633\u062a \u0645\u0637\u0627\u0644\u0628. \u0628\u0631\u0627\u06cc \u0628\u0633\u062a\u0646 \u0627\u06cc\u0646 \u06a9\u0627\u062f\u0631 \u0645\u062d\u0627\u0648\u0631\u0647\u200c\u0627\u06cc ESC \u0631\u0627 \u0641\u0634\u0627\u0631 \u062f\u0647\u06cc\u062f.",legend:[{name:"\u0639\u0645\u0648\u0645\u06cc",items:[{name:"\u0646\u0648\u0627\u0631 \u0627\u0628\u0632\u0627\u0631 \u0648\u06cc\u0631\u0627\u06cc\u0634\u06af\u0631",legend:"${toolbarFocus} \u0631\u0627 \u0628\u0631\u0627\u06cc \u0628\u0627\u0632 \u06a9\u0631\u062f\u0646 \u0646\u0648\u0627\u0631 \u0627\u0628\u0632\u0627\u0631 \u0628\u0641\u0634\u0627\u0631\u06cc\u062f. \u0628\u0627 \u06a9\u0644\u06cc\u062f Tab \u0648 Shift+Tab \u062f\u0631 \u0645\u062c\u0645\u0648\u0639\u0647 \u0646\u0648\u0627\u0631 \u0627\u0628\u0632\u0627\u0631 \u0628\u0639\u062f\u06cc \u0648 \u0642\u0628\u0644\u06cc \u062d\u0631\u06a9\u062a \u06a9\u0646\u06cc\u062f. \u0628\u0631\u0627\u06cc \u062d\u0631\u06a9\u062a \u062f\u0631 \u06a9\u0644\u06cc\u062f \u0646\u0648\u0627\u0631 \u0627\u0628\u0632\u0627\u0631 \u0642\u0628\u0644\u06cc \u0648 \u0628\u0639\u062f\u06cc \u0628\u0627 \u06a9\u0644\u06cc\u062f \u062c\u0647\u062a\u200c\u0646\u0645\u0627\u06cc \u0631\u0627\u0633\u062a \u0648 \u0686\u067e \u062c\u0627\u0628\u062c\u0627 \u0634\u0648\u06cc\u062f. \u06a9\u0644\u06cc\u062f Space \u06cc\u0627 Enter \u0631\u0627 \u0628\u0631\u0627\u06cc \u0641\u0639\u0627\u0644 \u06a9\u0631\u062f\u0646 \u06a9\u0644\u06cc\u062f \u0646\u0648\u0627\u0631 \u0627\u0628\u0632\u0627\u0631 \u0628\u0641\u0634\u0627\u0631\u06cc\u062f."},{name:"\u067e\u0646\u062c\u0631\u0647 \u0645\u062d\u0627\u0648\u0631\u0647\u0627\u06cc \u0648\u06cc\u0631\u0627\u06cc\u0634\u06af\u0631",legend:"Inside a dialog, press TAB to navigate to the next dialog element, press SHIFT+TAB to move to the previous dialog element, press ENTER to submit the dialog, press ESC to cancel the dialog. When a dialog has multiple tabs, the tab list can be reached either with ALT+F10 or with TAB as part of the dialog tabbing order. With tab list focused, move to the next and previous tab with RIGHT and LEFT ARROW, respectively."},{name:"\u0645\u0646\u0648\u06cc \u0645\u062a\u0646\u06cc \u0648\u06cc\u0631\u0627\u06cc\u0634\u06af\u0631",legend:"${contextMenu} \u06cc\u0627 \u06a9\u0644\u06cc\u062f \u0628\u0631\u0646\u0627\u0645\u0647\u0647\u0627\u06cc \u06a9\u0627\u0631\u0628\u0631\u062f\u06cc \u0631\u0627 \u0628\u0631\u0627\u06cc \u0628\u0627\u0632 \u06a9\u0631\u062f\u0646 \u0645\u0646\u0648\u06cc \u0645\u062a\u0646 \u0631\u0627 \u0628\u0641\u0634\u0627\u0631\u06cc\u062f. \u0633\u067e\u0633 \u0645\u06cc\u062a\u0648\u0627\u0646\u06cc\u062f \u0628\u0631\u0627\u06cc \u062d\u0631\u06a9\u062a \u0628\u0647 \u06af\u0632\u06cc\u0646\u0647 \u0628\u0639\u062f\u06cc \u0645\u0646\u0648 \u0628\u0627 \u06a9\u0644\u06cc\u062f Tab \u0648 \u06cc\u0627 \u06a9\u0644\u06cc\u062f \u062c\u0647\u062a\u0646\u0645\u0627\u06cc \u067e\u0627\u06cc\u06cc\u0646 \u062c\u0627\u0628\u062c\u0627 \u0634\u0648\u06cc\u062f. \u062d\u0631\u06a9\u062a \u0628\u0647 \u06af\u0632\u06cc\u0646\u0647 \u0642\u0628\u0644\u06cc \u0628\u0627 Shift+Tab \u06cc\u0627 \u06a9\u0644\u06cc\u062f \u062c\u0647\u062a\u0646\u0645\u0627\u06cc \u0628\u0627\u0644\u0627. \u0641\u0634\u0631\u062f\u0646 Space \u06cc\u0627 Enter \u0628\u0631\u0627\u06cc \u0627\u0646\u062a\u062e\u0627\u0628 \u06cc\u06a9 \u06af\u0632\u06cc\u0646\u0647 \u0627\u0632 \u0645\u0646\u0648. \u0628\u0627\u0632 \u06a9\u0631\u062f\u0646 \u0632\u06cc\u0631 \u0634\u0627\u062e\u0647 \u06af\u0632\u06cc\u0646\u0647 \u0645\u0646\u0648 \u062c\u0627\u0631\u06cc \u0628\u0627 \u06a9\u0644\u06cc\u062f Space \u06cc\u0627 Enter \u0648 \u06cc\u0627 \u06a9\u0644\u06cc\u062f \u062c\u0647\u062a\u0646\u0645\u0627\u06cc \u0631\u0627\u0633\u062a \u0648 \u0686\u067e. \u0628\u0627\u0632\u06af\u0634\u062a \u0628\u0647 \u0645\u0646\u0648\u06cc \u0648\u0627\u0644\u062f \u0628\u0627 \u06a9\u0644\u06cc\u062f Esc \u06cc\u0627 \u06a9\u0644\u06cc\u062f \u062c\u0647\u062a\u0646\u0645\u0627\u06cc \u0686\u067e. \u0628\u0633\u062a\u0646 \u0645\u0646\u0648\u06cc \u0645\u062a\u0646 \u0628\u0627 Esc."},{name:"\u062c\u0639\u0628\u0647 \u0641\u0647\u0631\u0633\u062a \u0648\u06cc\u0631\u0627\u06cc\u0634\u06af\u0631",legend:"\u062f\u0631 \u062f\u0627\u062e\u0644 \u062c\u0639\u0628\u0647 \u0644\u06cc\u0633\u062a\u060c \u0642\u0644\u0645 \u062f\u0648\u0645 \u0627\u0632 \u0627\u0642\u0644\u0627\u0645 \u0644\u06cc\u0633\u062a \u0628\u0639\u062f\u06cc \u0631\u0627 \u0628\u0627 TAB \u0648 \u06cc\u0627 Arrow Down \u062d\u0631\u06a9\u062a \u062f\u0647\u06cc\u062f. \u0627\u0646\u062a\u0642\u0627\u0644 \u0628\u0647 \u0642\u0644\u0645 \u062f\u0648\u0645 \u0627\u0632 \u0627\u0642\u0644\u0627\u0645 \u0644\u06cc\u0633\u062a \u0642\u0628\u0644\u06cc \u0631\u0627 \u0628\u0627 SHIFT + TAB \u06cc\u0627 UP ARROW. \u06a9\u0644\u06cc\u062f Space \u06cc\u0627 ENTER \u0631\u0627 \u0628\u0631\u0627\u06cc \u0627\u0646\u062a\u062e\u0627\u0628 \u06af\u0632\u06cc\u0646\u0647 \u0644\u06cc\u0633\u062a \u0628\u0641\u0634\u0627\u0631\u06cc\u062f. \u06a9\u0644\u06cc\u062f ESC \u0631\u0627 \u0628\u0631\u0627\u06cc \u0628\u0633\u062a\u0646 \u062c\u0639\u0628\u0647 \u0644\u06cc\u0633\u062a \u0628\u0641\u0634\u0627\u0631\u06cc\u062f."},{name:"\u0648\u06cc\u0631\u0627\u06cc\u0634\u06af\u0631 \u0639\u0646\u0635\u0631 \u0646\u0648\u0627\u0631 \u0631\u0627\u0647",legend:"\u0628\u0631\u0627\u06cc \u0631\u0641\u062a\u0646 \u0628\u0647 \u0645\u0633\u06cc\u0631 \u0639\u0646\u0627\u0635\u0631 ${elementsPathFocus} \u0631\u0627 \u0628\u0641\u0634\u0627\u0631\u06cc\u062f. \u062d\u0631\u06a9\u062a \u0628\u0647 \u06a9\u0644\u06cc\u062f \u0639\u0646\u0635\u0631 \u0628\u0639\u062f\u06cc \u0628\u0627 \u06a9\u0644\u06cc\u062f Tab \u06cc\u0627 \u06a9\u0644\u06cc\u062f \u062c\u0647\u062a\u200c\u0646\u0645\u0627\u06cc \u0631\u0627\u0633\u062a. \u0628\u0631\u06af\u0634\u062a \u0628\u0647 \u06a9\u0644\u06cc\u062f \u0642\u0628\u0644\u06cc \u0628\u0627 Shift+Tab \u06cc\u0627 \u06a9\u0644\u06cc\u062f \u062c\u0647\u062a\u200c\u0646\u0645\u0627\u06cc \u0686\u067e. \u0641\u0634\u0631\u062f\u0646 Space \u06cc\u0627 Enter \u0628\u0631\u0627\u06cc \u0627\u0646\u062a\u062e\u0627\u0628 \u06cc\u06a9 \u0639\u0646\u0635\u0631 \u062f\u0631 \u0648\u06cc\u0631\u0627\u06cc\u0634\u06af\u0631."}]},{name:"\u0641\u0631\u0645\u0627\u0646\u200c\u0647\u0627",items:[{name:"\u0628\u0627\u0632\u06af\u0634\u062a \u0628\u0647 \u0622\u062e\u0631\u06cc\u0646 \u0641\u0631\u0645\u0627\u0646",legend:"\u0641\u0634\u0631\u062f\u0646 ${undo}"},{name:"\u0627\u0646\u062c\u0627\u0645 \u0645\u062c\u062f\u062f \u0641\u0631\u0645\u0627\u0646",legend:"\u0641\u0634\u0631\u062f\u0646 ${redo}"},{name:"\u0641\u0631\u0645\u0627\u0646 \u062f\u0631\u0634\u062a \u06a9\u0631\u062f\u0646 \u0645\u062a\u0646",legend:"\u0641\u0634\u0631\u062f\u0646 ${bold}"},{name:"\u0641\u0631\u0645\u0627\u0646 \u06a9\u062c \u06a9\u0631\u062f\u0646 \u0645\u062a\u0646",legend:"\u0641\u0634\u0631\u062f\u0646 ${italic}"},{name:"\u0641\u0631\u0645\u0627\u0646 \u0632\u06cc\u0631\u062e\u0637\u062f\u0627\u0631 \u06a9\u0631\u062f\u0646 \u0645\u062a\u0646",legend:"\u0641\u0634\u0631\u062f\u0646 ${underline}"},{name:"\u0641\u0631\u0645\u0627\u0646 \u067e\u06cc\u0648\u0646\u062f \u062f\u0627\u062f\u0646",legend:"\u0641\u0634\u0631\u062f\u0646 ${link}"},{name:"\u0628\u0633\u062a\u0646 \u0646\u0648\u0627\u0631 \u0627\u0628\u0632\u0627\u0631 \u0641\u0631\u0645\u0627\u0646",legend:"\u0641\u0634\u0631\u062f\u0646 ${toolbarCollapse}"},{name:"\u062f\u0633\u062a\u0631\u0633\u06cc \u0628\u0647 \u0641\u0631\u0645\u0627\u0646 \u0645\u062d\u0644 \u062a\u0645\u0631\u06a9\u0632 \u0642\u0628\u0644\u06cc",legend:"\u0641\u0634\u0631\u062f\u0646 ${accessPreviousSpace} \u0628\u0631\u0627\u06cc \u062f\u0633\u062a\u0631\u0633\u06cc \u0628\u0647 \u0646\u0632\u062f\u06cc\u06a9\u200c\u062a\u0631\u06cc\u0646 \u0641\u0636\u0627\u06cc \u0642\u0627\u0628\u0644 \u062f\u0633\u062a\u0631\u0633\u06cc \u062a\u0645\u0631\u06a9\u0632 \u0642\u0628\u0644 \u0627\u0632 \u0647\u0634\u062a\u06a9\u060c \u0628\u0631\u0627\u06cc \u0645\u062b\u0627\u0644: \u062f\u0648 \u0639\u0646\u0635\u0631 \u0645\u062c\u0627\u0648\u0631 HR -\u062e\u0637 \u0627\u0641\u0642\u06cc-. \u062a\u06a9\u0631\u0627\u0631 \u06a9\u0644\u06cc\u062f \u062a\u0631\u06a9\u06cc\u0628\u06cc \u0628\u0631\u0627\u06cc \u0631\u0633\u06cc\u062f\u0646 \u0628\u0647 \u0641\u0636\u0627\u0647\u0627\u06cc \u062a\u0645\u0631\u06a9\u0632 \u0627\u0632 \u0631\u0627\u0647 \u062f\u0648\u0631."},{name:"\u062f\u0633\u062a\u0631\u0633\u06cc \u0628\u0647 \u0641\u0636\u0627\u06cc \u062f\u0633\u062a\u0648\u0631 \u0628\u0639\u062f\u06cc",legend:"\u0628\u0631\u0627\u06cc \u062f\u0633\u062a\u0631\u0633\u06cc \u0628\u0647 \u0646\u0632\u062f\u06cc\u06a9\u200c\u062a\u0631\u06cc\u0646 \u0641\u0636\u0627\u06cc \u062a\u0645\u0631\u06a9\u0632 \u063a\u06cc\u0631 \u0642\u0627\u0628\u0644 \u062f\u0633\u062a\u0631\u0633\u060c ${accessNextSpace} \u0631\u0627 \u067e\u0633 \u0627\u0632 \u0639\u0644\u0627\u0645\u062a \u0647\u0634\u062a\u06a9 \u0628\u0641\u0634\u0627\u0631\u06cc\u062f\u060c \u0628\u0631\u0627\u06cc \u0645\u062b\u0627\u0644:  \u062f\u0648 \u0639\u0646\u0635\u0631 \u0645\u062c\u0627\u0648\u0631 HR -\u062e\u0637 \u0627\u0641\u0642\u06cc-. \u06a9\u0644\u06cc\u062f \u062a\u0631\u06a9\u06cc\u0628\u06cc \u0631\u0627 \u0628\u0631\u0627\u06cc \u0631\u0633\u06cc\u062f\u0646 \u0628\u0647 \u0641\u0636\u0627\u06cc \u062a\u0645\u0631\u06a9\u0632 \u062a\u06a9\u0631\u0627\u0631 \u06a9\u0646\u06cc\u062f."},{name:"\u0631\u0627\u0647\u0646\u0645\u0627\u06cc \u062f\u0633\u062a\u0631\u0633\u06cc",legend:"\u0641\u0634\u0631\u062f\u0646 ${a11yHelp}"},{name:" Paste as plain text",legend:"Press ${pastetext}",legendEdge:"Press ${pastetext}, followed by ${paste}"}]}],tab:"\u0628\u0631\u06af\u0647",pause:"\u062a\u0648\u0642\u0641",capslock:"Caps Lock",escape:"\u06af\u0631\u06cc\u0632",pageUp:"\u0635\u0641\u062d\u0647 \u0628\u0647 \u0628\u0627\u0644\u0627",pageDown:"\u0635\u0641\u062d\u0647 \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646",leftArrow:"\u067e\u06cc\u06a9\u0627\u0646 \u0686\u067e",upArrow:"\u067e\u06cc\u06a9\u0627\u0646 \u0628\u0627\u0644\u0627",rightArrow:"\u067e\u06cc\u06a9\u0627\u0646 \u0631\u0627\u0633\u062a",downArrow:"\u067e\u06cc\u06a9\u0627\u0646 \u067e\u0627\u06cc\u06cc\u0646",insert:"\u0648\u0631\u0648\u062f",leftWindowKey:"\u06a9\u0644\u06cc\u062f \u0686\u067e \u0648\u06cc\u0646\u062f\u0648\u0632",rightWindowKey:"\u06a9\u0644\u06cc\u062f \u0631\u0627\u0633\u062a \u0648\u06cc\u0646\u062f\u0648\u0632",selectKey:"\u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0644\u06cc\u062f",numpad0:"\u06a9\u0644\u06cc\u062f \u0634\u0645\u0627\u0631\u0647 0",numpad1:"\u06a9\u0644\u06cc\u062f \u0634\u0645\u0627\u0631\u0647 1",numpad2:"\u06a9\u0644\u06cc\u062f \u0634\u0645\u0627\u0631\u0647 2",numpad3:"\u06a9\u0644\u06cc\u062f \u0634\u0645\u0627\u0631\u0647 3",numpad4:"\u06a9\u0644\u06cc\u062f \u0634\u0645\u0627\u0631\u0647 4",numpad5:"\u06a9\u0644\u06cc\u062f \u0634\u0645\u0627\u0631\u0647 5",numpad6:"\u06a9\u0644\u06cc\u062f \u0634\u0645\u0627\u0631\u0647 6",numpad7:"\u06a9\u0644\u06cc\u062f \u0634\u0645\u0627\u0631\u0647 7",numpad8:"\u06a9\u0644\u06cc\u062f \u0634\u0645\u0627\u0631\u0647 8",numpad9:"\u06a9\u0644\u06cc\u062f \u0634\u0645\u0627\u0631\u0647 9",multiply:"\u0636\u0631\u0628",add:"\u0627\u0641\u0632\u0648\u062f\u0646",subtract:"\u062a\u0641\u0631\u06cc\u0642",decimalPoint:"\u0646\u0642\u0637\u0647\u200c\u06cc \u0627\u0639\u0634\u0627\u0631",divide:"\u062c\u062f\u0627 \u06a9\u0631\u062f\u0646",f1:"F1",f2:"F2",f3:"F3",f4:"F4",f5:"F5",f6:"F6",f7:"F7",f8:"F8",f9:"F9",f10:"F10",f11:"F11",f12:"F12",numLock:"Num Lock",scrollLock:"Scroll Lock",semiColon:"Semicolon",equalSign:"\u0639\u0644\u0627\u0645\u062a \u062a\u0633\u0627\u0648\u06cc",comma:"\u06a9\u0627\u0645\u0627",dash:"\u062e\u0637 \u062a\u06cc\u0631\u0647",period:"\u062f\u0648\u0631\u0647",forwardSlash:"Forward Slash",graveAccent:"Grave Accent",openBracket:"Open Bracket",backSlash:"Backslash",closeBracket:"Close Bracket",singleQuote:"Single Quote"});
>>>>>>> 0ce8b76e35039cbab0dc8afcfff5dbd974e73a3d