<<<<<<< HEAD
/*
 Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/

CKEDITOR.dialog.add("about",function(a){a=a.lang.about;var b=CKEDITOR.getUrl(CKEDITOR.plugins.get("about").path+"dialogs/"+(CKEDITOR.env.hidpi?"hidpi/":"")+"logo_ckeditor.png");return{title:CKEDITOR.env.ie?a.dlgTitle:a.title,minWidth:390,minHeight:230,contents:[{id:"tab1",label:"",title:"",expand:!0,padding:0,elements:[{type:"html",html:'\x3cstyle type\x3d"text/css"\x3e.cke_about_container{color:#000 !important;padding:10px 10px 0;margin-top:5px}.cke_about_container p{margin: 0 0 10px;}.cke_about_container .cke_about_logo{height:81px;background-color:#fff;background-image:url('+
b+");"+(CKEDITOR.env.hidpi?"background-size:163px 58px;":"")+'background-position:center; background-repeat:no-repeat;margin-bottom:10px;}.cke_about_container a{cursor:pointer !important;color:#00B2CE !important;text-decoration:underline !important;}\x3c/style\x3e\x3cdiv class\x3d"cke_about_container"\x3e\x3cdiv class\x3d"cke_about_logo"\x3e\x3c/div\x3e\x3cp\x3eCKEditor '+CKEDITOR.version+" (revision "+CKEDITOR.revision+')\x3cbr\x3e\x3ca target\x3d"_blank" rel\x3d"noopener noreferrer" href\x3d"http://ckeditor.com/"\x3ehttp://ckeditor.com\x3c/a\x3e\x3c/p\x3e\x3cp\x3e'+
a.help.replace("$1",'\x3ca target\x3d"_blank" rel\x3d"noopener noreferrer" href\x3d"http://docs.ckeditor.com/user"\x3e'+a.userGuide+"\x3c/a\x3e")+"\x3c/p\x3e\x3cp\x3e"+a.moreInfo+'\x3cbr\x3e\x3ca target\x3d"_blank" rel\x3d"noopener noreferrer" href\x3d"http://ckeditor.com/about/license"\x3ehttp://ckeditor.com/about/license\x3c/a\x3e\x3c/p\x3e\x3cp\x3e'+a.copy.replace("$1",'\x3ca target\x3d"_blank" rel\x3d"noopener noreferrer" href\x3d"http://cksource.com/"\x3eCKSource\x3c/a\x3e - Frederico Knabben')+
"\x3c/p\x3e\x3c/div\x3e"}]}],buttons:[CKEDITOR.dialog.cancelButton]}});
=======
CKEDITOR.dialog.add("about",function(e){e=e.lang.about;var t=CKEDITOR.getUrl(CKEDITOR.plugins.get("about").path+"dialogs/"+(CKEDITOR.env.hidpi?"hidpi/":"")+"logo_ckeditor.png");return{title:CKEDITOR.env.ie?e.dlgTitle:e.title,minWidth:390,minHeight:230,contents:[{id:"tab1",label:"",title:"",expand:!0,padding:0,elements:[{type:"html",html:'<style type="text/css">.cke_about_container{color:#000 !important;padding:10px 10px 0;margin-top:5px}.cke_about_container p{margin: 0 0 10px;}.cke_about_container .cke_about_logo{height:81px;background-color:#fff;background-image:url('+t+");"+(CKEDITOR.env.hidpi?"background-size:163px 58px;":"")+'background-position:center; background-repeat:no-repeat;margin-bottom:10px;}.cke_about_container a{cursor:pointer !important;color:#00B2CE !important;text-decoration:underline !important;}</style><div class="cke_about_container"><div class="cke_about_logo"></div><p>CKEditor '+CKEDITOR.version+" (revision "+CKEDITOR.revision+')<br><a target="_blank" rel="noopener noreferrer" href="http://ckeditor.com/">http://ckeditor.com</a></p><p>'+e.help.replace("$1",'<a target="_blank" rel="noopener noreferrer" href="http://docs.ckeditor.com/user">'+e.userGuide+"</a>")+"</p><p>"+e.moreInfo+'<br><a target="_blank" rel="noopener noreferrer" href="http://ckeditor.com/about/license">http://ckeditor.com/about/license</a></p><p>'+e.copy.replace("$1",'<a target="_blank" rel="noopener noreferrer" href="http://cksource.com/">CKSource</a> - Frederico Knabben')+"</p></div>"}]}],buttons:[CKEDITOR.dialog.cancelButton]}});
>>>>>>> 0ce8b76e35039cbab0dc8afcfff5dbd974e73a3d