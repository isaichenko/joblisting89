<<<<<<< HEAD
/*
 * jQuery Templates Plugin 1.0.0pre
 * http://github.com/jquery/jquery-tmpl
 * Requires jQuery 1.4.2
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */

(function(a){var r=a.fn.domManip,d="_tmplitem",q=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,b={},f={},e,p={key:0,data:{}},i=0,c=0,l=[];function g(g,d,h,e){var c={data:e||(e===0||e===false)?e:d?d.data:{},_wrap:d?d._wrap:null,tmpl:null,parent:d||null,nodes:[],calls:u,nest:w,wrap:x,html:v,update:t};g&&a.extend(c,g,{nodes:[],parent:d});if(h){c.tmpl=h;c._ctnt=c._ctnt||c.tmpl(a,c);c.key=++i;(l.length?f:b)[i]=c}return c}a.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(f,d){a.fn[f]=function(n){var g=[],i=a(n),k,h,m,l,j=this.length===1&&this[0].parentNode;e=b||{};if(j&&j.nodeType===11&&j.childNodes.length===1&&i.length===1){i[d](this[0]);g=this}else{for(h=0,m=i.length;h<m;h++){c=h;k=(h>0?this.clone(true):this).get();a(i[h])[d](k);g=g.concat(k)}c=0;g=this.pushStack(g,f,i.selector)}l=e;e=null;a.tmpl.complete(l);return g}});a.fn.extend({tmpl:function(d,c,b){return a.tmpl(this[0],d,c,b)},tmplItem:function(){return a.tmplItem(this[0])},template:function(b){return a.template(b,this[0])},domManip:function(d,m,k){if(d[0]&&a.isArray(d[0])){var g=a.makeArray(arguments),h=d[0],j=h.length,i=0,f;while(i<j&&!(f=a.data(h[i++],"tmplItem")));if(f&&c)g[2]=function(b){a.tmpl.afterManip(this,b,k)};r.apply(this,g)}else r.apply(this,arguments);c=0;!e&&a.tmpl.complete(b);return this}});a.extend({tmpl:function(d,h,e,c){var i,k=!c;if(k){c=p;d=a.template[d]||a.template(null,d);f={}}else if(!d){d=c.tmpl;b[c.key]=c;c.nodes=[];c.wrapped&&n(c,c.wrapped);return a(j(c,null,c.tmpl(a,c)))}if(!d)return[];if(typeof h==="function")h=h.call(c||{});e&&e.wrapped&&n(e,e.wrapped);i=a.isArray(h)?a.map(h,function(a){return a?g(e,c,d,a):null}):[g(e,c,d,h)];return k?a(j(c,null,i)):i},tmplItem:function(b){var c;if(b instanceof a)b=b[0];while(b&&b.nodeType===1&&!(c=a.data(b,"tmplItem"))&&(b=b.parentNode));return c||p},template:function(c,b){if(b){if(typeof b==="string")b=o(b);else if(b instanceof a)b=b[0]||{};if(b.nodeType)b=a.data(b,"tmpl")||a.data(b,"tmpl",o(b.innerHTML));return typeof c==="string"?(a.template[c]=b):b}return c?typeof c!=="string"?a.template(null,c):a.template[c]||a.template(null,q.test(c)?c:a(c)):null},encode:function(a){return(""+a).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")}});a.extend(a.tmpl,{tag:{tmpl:{_default:{$2:"null"},open:"if($notnull_1){__=__.concat($item.nest($1,$2));}"},wrap:{_default:{$2:"null"},open:"$item.calls(__,$1,$2);__=[];",close:"call=$item.calls();__=call._.concat($item.wrap(call,__));"},each:{_default:{$2:"$index, $value"},open:"if($notnull_1){$.each($1a,function($2){with(this){",close:"}});}"},"if":{open:"if(($notnull_1) && $1a){",close:"}"},"else":{_default:{$1:"true"},open:"}else if(($notnull_1) && $1a){"},html:{open:"if($notnull_1){__.push($1a);}"},"=":{_default:{$1:"$data"},open:"if($notnull_1){__.push($.encode($1a));}"},"!":{open:""}},complete:function(){b={}},afterManip:function(f,b,d){var e=b.nodeType===11?a.makeArray(b.childNodes):b.nodeType===1?[b]:[];d.call(f,b);m(e);c++}});function j(e,g,f){var b,c=f?a.map(f,function(a){return typeof a==="string"?e.key?a.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,"$1 "+d+'="'+e.key+'" $2'):a:j(a,e,a._ctnt)}):e;if(g)return c;c=c.join("");c.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,function(f,c,e,d){b=a(e).get();m(b);if(c)b=k(c).concat(b);if(d)b=b.concat(k(d))});return b?b:k(c)}function k(c){var b=document.createElement("div");b.innerHTML=c;return a.makeArray(b.childNodes)}function o(b){return new Function("jQuery","$item","var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('"+a.trim(b).replace(/([\\'])/g,"\\$1").replace(/[\r\t\n]/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,function(m,l,k,g,b,c,d){var j=a.tmpl.tag[k],i,e,f;if(!j)throw"Unknown template tag: "+k;i=j._default||[];if(c&&!/\w$/.test(b)){b+=c;c=""}if(b){b=h(b);d=d?","+h(d)+")":c?")":"";e=c?b.indexOf(".")>-1?b+h(c):"("+b+").call($item"+d:b;f=c?e:"(typeof("+b+")==='function'?("+b+").call($item):("+b+"))"}else f=e=i.$1||"null";g=h(g);return"');"+j[l?"close":"open"].split("$notnull_1").join(b?"typeof("+b+")!=='undefined' && ("+b+")!=null":"true").split("$1a").join(f).split("$1").join(e).split("$2").join(g||i.$2||"")+"__.push('"})+"');}return __;")}function n(c,b){c._wrap=j(c,true,a.isArray(b)?b:[q.test(b)?b:a(b).html()]).join("")}function h(a){return a?a.replace(/\\'/g,"'").replace(/\\\\/g,"\\"):null}function s(b){var a=document.createElement("div");a.appendChild(b.cloneNode(true));return a.innerHTML}function m(o){var n="_"+c,k,j,l={},e,p,h;for(e=0,p=o.length;e<p;e++){if((k=o[e]).nodeType!==1)continue;j=k.getElementsByTagName("*");for(h=j.length-1;h>=0;h--)m(j[h]);m(k)}function m(j){var p,h=j,k,e,m;if(m=j.getAttribute(d)){while(h.parentNode&&(h=h.parentNode).nodeType===1&&!(p=h.getAttribute(d)));if(p!==m){h=h.parentNode?h.nodeType===11?0:h.getAttribute(d)||0:0;if(!(e=b[m])){e=f[m];e=g(e,b[h]||f[h]);e.key=++i;b[i]=e}c&&o(m)}j.removeAttribute(d)}else if(c&&(e=a.data(j,"tmplItem"))){o(e.key);b[e.key]=e;h=a.data(j.parentNode,"tmplItem");h=h?h.key:0}if(e){k=e;while(k&&k.key!=h){k.nodes.push(j);k=k.parent}delete e._ctnt;delete e._wrap;a.data(j,"tmplItem",e)}function o(a){a=a+n;e=l[a]=l[a]||g(e,b[e.parent.key+n]||e.parent)}}}function u(a,d,c,b){if(!a)return l.pop();l.push({_:a,tmpl:d,item:this,data:c,options:b})}function w(d,c,b){return a.tmpl(a.template(d),c,b,this)}function x(b,d){var c=b.options||{};c.wrapped=d;return a.tmpl(a.template(b.tmpl),b.data,c,b.item)}function v(d,c){var b=this._wrap;return a.map(a(a.isArray(b)?b.join(""):b).filter(d||"*"),function(a){return c?a.innerText||a.textContent:a.outerHTML||s(a)})}function t(){var b=this.nodes;a.tmpl(null,null,null,this).insertBefore(b[0]);a(b).remove()}})(jQuery);
/**
 * http://github.com/valums/file-uploader
 * 
 * Multiple file upload component with progress-bar, drag-and-drop. 
 * © 2010 Andrew Valums ( andrew(at)valums.com ) 
 * 
 * Licensed under GNU GPL 2 or later, see license.txt.
 */    

//
// Helper functions
//

var qq = qq || {};

/**
 * Adds all missing properties from second obj to first obj
 */ 
qq.extend = function(first, second){
    for (var prop in second){
        first[prop] = second[prop];
    }
};  

/**
 * Searches for a given element in the array, returns -1 if it is not present.
 * @param {Number} [from] The index at which to begin the search
 */
qq.indexOf = function(arr, elt, from){
    if (arr.indexOf) return arr.indexOf(elt, from);
    
    from = from || 0;
    var len = arr.length;    
    
    if (from < 0) from += len;  

    for (; from < len; from++){  
        if (from in arr && arr[from] === elt){  
            return from;
        }
    }  
    return -1;  
}; 
    
qq.getUniqueId = (function(){
    var id = 0;
    return function(){ return id++; };
})();

//
// Events

qq.attach = function(element, type, fn){
    if (element.addEventListener){
        element.addEventListener(type, fn, false);
    } else if (element.attachEvent){
        element.attachEvent('on' + type, fn);
    }
};
qq.detach = function(element, type, fn){
    if (element.removeEventListener){
        element.removeEventListener(type, fn, false);
    } else if (element.attachEvent){
        element.detachEvent('on' + type, fn);
    }
};

qq.preventDefault = function(e){
    if (e.preventDefault){
        e.preventDefault();
    } else{
        e.returnValue = false;
    }
};

//
// Node manipulations

/**
 * Insert node a before node b.
 */
qq.insertBefore = function(a, b){
    b.parentNode.insertBefore(a, b);
};
qq.remove = function(element){
    element.parentNode.removeChild(element);
};

qq.contains = function(parent, descendant){       
    // compareposition returns false in this case
    if (parent == descendant) return true;
    
    if (parent.contains){
        return parent.contains(descendant);
    } else {
        return !!(descendant.compareDocumentPosition(parent) & 8);
    }
};

/**
 * Creates and returns element from html string
 * Uses innerHTML to create an element
 */
qq.toElement = (function(){
    var div = document.createElement('div');
    return function(html){
        div.innerHTML = html;
        var element = div.firstChild;
        div.removeChild(element);
        return element;
    };
})();

//
// Node properties and attributes

/**
 * Sets styles for an element.
 * Fixes opacity in IE6-8.
 */
qq.css = function(element, styles){
    if (styles.opacity != null){
        if (typeof element.style.opacity != 'string' && typeof(element.filters) != 'undefined'){
            styles.filter = 'alpha(opacity=' + Math.round(100 * styles.opacity) + ')';
        }
    }
    qq.extend(element.style, styles);
};
qq.hasClass = function(element, name){
    var re = new RegExp('(^| )' + name + '( |$)');
    return re.test(element.className);
};
qq.addClass = function(element, name){
    if (!qq.hasClass(element, name)){
        element.className += ' ' + name;
    }
};
qq.removeClass = function(element, name){
    var re = new RegExp('(^| )' + name + '( |$)');
    element.className = element.className.replace(re, ' ').replace(/^\s+|\s+$/g, "");
};
qq.setText = function(element, text){
    element.innerText = text;
    element.textContent = text;
};

//
// Selecting elements

qq.children = function(element){
    var children = [],
    child = element.firstChild;

    while (child){
        if (child.nodeType == 1){
            children.push(child);
        }
        child = child.nextSibling;
    }

    return children;
};

qq.getByClass = function(element, className){
    if (element.querySelectorAll){
        return element.querySelectorAll('.' + className);
    }

    var result = [];
    var candidates = element.getElementsByTagName("*");
    var len = candidates.length;

    for (var i = 0; i < len; i++){
        if (qq.hasClass(candidates[i], className)){
            result.push(candidates[i]);
        }
    }
    return result;
};

/**
 * obj2url() takes a json-object as argument and generates
 * a querystring. pretty much like jQuery.param()
 * 
 * how to use:
 *
 *    `qq.obj2url({a:'b',c:'d'},'http://any.url/upload?otherParam=value');`
 *
 * will result in:
 *
 *    `http://any.url/upload?otherParam=value&a=b&c=d`
 *
 * @param  Object JSON-Object
 * @param  String current querystring-part
 * @return String encoded querystring
 */
qq.obj2url = function(obj, temp, prefixDone){
    var uristrings = [],
        prefix = '&',
        add = function(nextObj, i){
            var nextTemp = temp 
                ? (/\[\]$/.test(temp)) // prevent double-encoding
                   ? temp
                   : temp+'['+i+']'
                : i;
            if ((nextTemp != 'undefined') && (i != 'undefined')) {  
                uristrings.push(
                    (typeof nextObj === 'object') 
                        ? qq.obj2url(nextObj, nextTemp, true)
                        : (Object.prototype.toString.call(nextObj) === '[object Function]')
                            ? encodeURIComponent(nextTemp) + '=' + encodeURIComponent(nextObj())
                            : encodeURIComponent(nextTemp) + '=' + encodeURIComponent(nextObj)                                                          
                );
            }
        }; 

    if (!prefixDone && temp) {
      prefix = (/\?/.test(temp)) ? (/\?$/.test(temp)) ? '' : '&' : '?';
      uristrings.push(temp);
      uristrings.push(qq.obj2url(obj));
    } else if ((Object.prototype.toString.call(obj) === '[object Array]') && (typeof obj != 'undefined') ) {
        // we wont use a for-in-loop on an array (performance)
        for (var i = 0, len = obj.length; i < len; ++i){
            add(obj[i], i);
        }
    } else if ((typeof obj != 'undefined') && (obj !== null) && (typeof obj === "object")){
        // for anything else but a scalar, we will use for-in-loop
        for (var i in obj){
            add(obj[i], i);
        }
    } else {
        uristrings.push(encodeURIComponent(temp) + '=' + encodeURIComponent(obj));
    }

    return uristrings.join(prefix)
                     .replace(/^&/, '')
                     .replace(/%20/g, '+'); 
};

//
//
// Uploader Classes
//
//

var qq = qq || {};
    
/**
 * Creates upload button, validates upload, but doesn't create file list or dd. 
 */
qq.FileUploaderBasic = function(o){
    this._options = {
        // set to true to see the server response
        debug: false,
        action: '/server/upload',
        params: {},
        button: null,
        multiple: true,
        maxConnections: 3,
        method: 'POST',
        fieldName: 'qqfile',
        // validation        
        allowedExtensions: [],               
        sizeLimit: 0,   
        minSizeLimit: 0,
        maxFilesCount: 0, // 0 - no limit, works only in multiple mode
        minFilesCount: 0, // 0 - no limit, works only in multiple mode
        // events
        // return false to cancel submit
        onSubmit: function(id, fileName){},
        onProgress: function(id, fileName, loaded, total){},
        onComplete: function(id, fileName, responseJSON){},
        onCancel: function(id, fileName){},
        // messages                
        messages: {
            typeError: "{file} has invalid extension. Only {extensions} are allowed.",
            sizeError: "{file} is too large, maximum file size is {sizeLimit}.",
            minSizeError: "{file} is too small, minimum file size is {minSizeLimit}.",
            emptyError: "{file} is empty, please select files again without it.",
            onLeave: "The files are being uploaded, if you leave now the upload will be cancelled.",
            maxFilesError: "You must select less then {maxFilesCount} files.",
            minFilesError: "You must select more then {minFilesCount} files."
        },
        showMessage: function(message){
            alert(message);
        }               
    };
    qq.extend(this._options, o);
        
    // number of files being uploaded
    this._filesInProgress = 0;
    // number of files was processed
    this._filesUploaded = 0;
    this._handler = this._createUploadHandler(); 
    
    if (this._options.button){ 
        this._button = this._createUploadButton(this._options.button);
    }
                        
    this._preventLeaveInProgress();         
};
   
qq.FileUploaderBasic.prototype = {
    setParams: function(params){
        this._options.params = params;
    },
    getInProgress: function(){
        return this._filesInProgress;         
    },
    _createUploadButton: function(element){
        var self = this;
        
        return new qq.UploadButton({
            element: element,
            multiple: this._options.multiple && qq.UploadHandlerXhr.isSupported(),
            onChange: function(input){
                self._onInputChange(input);
            }        
        });           
    },    
    _createUploadHandler: function(){
        var self = this,
            handlerClass;        
        
        if(qq.UploadHandlerXhr.isSupported()){           
            handlerClass = 'UploadHandlerXhr';                        
        } else {
            handlerClass = 'UploadHandlerForm';
        }

        var handler = new qq[handlerClass]({
            debug: this._options.debug,
            action: this._options.action,         
            maxConnections: this._options.maxConnections,
            fieldName: this._options.fieldName,
            method: this._options.method,   
            onProgress: function(id, fileName, loaded, total){                
                self._onProgress(id, fileName, loaded, total);
                self._options.onProgress(id, fileName, loaded, total);                    
            },            
            onComplete: function(id, fileName, result){
                self._onComplete(id, fileName, result);
                self._options.onComplete(id, fileName, result);
            },
            onCancel: function(id, fileName){
                self._onCancel(id, fileName);
                self._options.onCancel(id, fileName);
            }
        });

        return handler;
    },    
    _preventLeaveInProgress: function(){
        var self = this;
        
        qq.attach(window, 'beforeunload', function(e){
            if (!self._filesInProgress){return;}
            
            var e = e || window.event;
            // for ie, ff
            e.returnValue = self._options.messages.onLeave;
            // for webkit
            return self._options.messages.onLeave;             
        });        
    },    
    _onSubmit: function(id, fileName){
        this._filesInProgress++;  
    },
    _onProgress: function(id, fileName, loaded, total){        
    },
    _onComplete: function(id, fileName, result){
        this._filesInProgress--;                 
        if (result.error){
            this._options.showMessage(result.error);
        } else {
          this._filesUploaded++;
        }             
    },
    _onCancel: function(id, fileName){
        this._filesInProgress--;        
    },
    _onInputChange: function(input){
        if (this._handler instanceof qq.UploadHandlerXhr){                
            this._uploadFileList(input.files);                   
        } else {             
            if (this._validateFile(input)){                
                this._uploadFile(input);                                    
            }                      
        }               
        this._button.reset();   
    },  
    _uploadFileList: function(files){
        if ( this._validateFiles(files) ) {
          for (var i=0; i<files.length; i++){
              this._uploadFile(files[i]);        
          }
        }
    },       
    _uploadFile: function(fileContainer){      
        var id = this._handler.add(fileContainer);
        var fileName = this._handler.getName(id);
        
        if (this._options.onSubmit(id, fileName) !== false){
            this._onSubmit(id, fileName);
            this._handler.upload(id, this._options.params);
        }
    },
    _validateFiles: function(files){
        var uploadedCount = this._filesUploaded + files.length;
        
        if (this._options.maxFilesCount > 0) {
          if ( uploadedCount > this._options.maxFilesCount) { 
            this._error('maxFilesError', 'name');
            return false;
          }
        }
        
        if (this._options.minFilesCount > 0) {
          if ( uploadedCount < this._options.minFilesCount) {
            this._error('minFilesError', 'name');
            return false;
          }
        }
        
        for (var i=0; i<files.length; i++){
            if ( !this._validateFile(files[i])){
                return false;
            }            
        }
        
        return true;
    },      
    _validateFile: function(file){
        var name, size;
        
        if (file.value){
            // it is a file input            
            // get input value and remove path to normalize
            name = file.value.replace(/.*(\/|\\)/, "");
        } else {
            // fix missing properties in Safari
            name = file.fileName != null ? file.fileName : file.name;
            size = file.fileSize != null ? file.fileSize : file.size;
        }
                    
        if (! this._isAllowedExtension(name)){            
            this._error('typeError', name);
            return false;
            
        } else if (size === 0){            
            this._error('emptyError', name);
            return false;
                                                     
        } else if (size && this._options.sizeLimit && size > this._options.sizeLimit){            
            this._error('sizeError', name);
            return false;
                        
        } else if (size && size < this._options.minSizeLimit){
            this._error('minSizeError', name);
            return false;            
        }
        
        return true;                
    },
    _error: function(code, fileName){
        var message = this._options.messages[code];        
        function r(name, replacement){ message = message.replace(name, replacement); }
        
        r('{file}', this._formatFileName(fileName));        
        r('{extensions}', this._options.allowedExtensions.join(', '));
        r('{sizeLimit}', this._formatSize(this._options.sizeLimit));
        r('{minSizeLimit}', this._formatSize(this._options.minSizeLimit));
        r('{maxFilesCount}', this._options.maxFilesCount);
        r('{minFilesCount}', this._options.minFilesCount);
        
        this._options.showMessage(message);                
    },
    _formatFileName: function(name){
        if (name.length > 33){
            name = name.slice(0, 19) + '...' + name.slice(-13);    
        }
        return name;
    },
    _isAllowedExtension: function(fileName){
        var ext = (-1 !== fileName.indexOf('.')) ? fileName.replace(/.*[.]/, '').toLowerCase() : '';
        var allowed = this._options.allowedExtensions;
        
        if (!allowed.length){return true;}        
        
        for (var i=0; i<allowed.length; i++){
            if (allowed[i].toLowerCase() == ext){ return true;}    
        }
        
        return false;
    },    
    _formatSize: function(bytes){
        var i = -1;                                    
        do {
            bytes = bytes / 1024;
            i++;  
        } while (bytes > 99);
        
        return Math.max(bytes, 0.1).toFixed(1) + ['kB', 'MB', 'GB', 'TB', 'PB', 'EB'][i];          
    }
};
    
       
/**
 * Class that creates upload widget with drag-and-drop and file list
 * @inherits qq.FileUploaderBasic
 */
qq.FileUploader = function(o){
    // call parent constructor
    qq.FileUploaderBasic.apply(this, arguments);
    
    // additional options    
    qq.extend(this._options, {
        element: null,
        // if set, will be used instead of qq-upload-list in template
        listElement: null,
                
        template: '<div class="qq-uploader">' + 
                '<div class="qq-upload-drop-area"><span>Drop files here to upload</span></div>' +
                '<div class="qq-upload-button">Upload a file</div>' +
                '<ul class="qq-upload-list"></ul>' + 
             '</div>',

        // template for one item in file list
        fileTemplate: '<li>' +
                '<span class="qq-upload-file"></span>' +
                '<span class="qq-upload-spinner"></span>' +
                '<span class="qq-upload-size"></span>' +
                '<a class="qq-upload-cancel" href="#">Cancel</a>' +
                '<span class="qq-upload-failed-text">Failed</span>' +
            '</li>',        
        
        classes: {
            // used to get elements from templates
            button: 'qq-upload-button',
            drop: 'qq-upload-drop-area',
            dropActive: 'qq-upload-drop-area-active',
            list: 'qq-upload-list',
                        
            file: 'qq-upload-file',
            spinner: 'qq-upload-spinner',
            size: 'qq-upload-size',
            cancel: 'qq-upload-cancel',

            // added to list item when upload completes
            // used in css to hide progress spinner
            success: 'qq-upload-success',
            fail: 'qq-upload-fail'
        }
    });
    // overwrite options with user supplied    
    qq.extend(this._options, o);       

    this._element = this._options.element;
    this._element.innerHTML = this._options.template;        
    this._listElement = this._options.listElement || this._find(this._element, 'list');
    
    this._classes = this._options.classes;
        
    this._button = this._createUploadButton(this._find(this._element, 'button'));        
    
    this._bindCancelEvent();
    this._setupDragDrop();
};

// inherit from Basic Uploader
qq.extend(qq.FileUploader.prototype, qq.FileUploaderBasic.prototype);

qq.extend(qq.FileUploader.prototype, {
    /**
     * Gets one of the elements listed in this._options.classes
     **/
    _find: function(parent, type){                                
        var element = qq.getByClass(parent, this._options.classes[type])[0];        
        if (!element){
            throw new Error('element not found ' + type);
        }
        
        return element;
    },
    _setupDragDrop: function(){
        var self = this,
            dropArea = this._find(this._element, 'drop');                        

        var dz = new qq.UploadDropZone({
            element: dropArea,
            onEnter: function(e){
                qq.addClass(dropArea, self._classes.dropActive);
                e.stopPropagation();
            },
            onLeave: function(e){
                e.stopPropagation();
            },
            onLeaveNotDescendants: function(e){
                qq.removeClass(dropArea, self._classes.dropActive);  
            },
            onDrop: function(e){
                dropArea.style.display = 'none';
                qq.removeClass(dropArea, self._classes.dropActive);
                self._uploadFileList(e.dataTransfer.files);    
            }
        });
                
        dropArea.style.display = 'none';

        qq.attach(document, 'dragenter', function(e){     
            if (!dz._isValidFileDrag(e)) return; 
            
            dropArea.style.display = 'block';            
        });                 
        qq.attach(document, 'dragleave', function(e){
            if (!dz._isValidFileDrag(e)) return;            
            
            var relatedTarget = document.elementFromPoint(e.clientX, e.clientY);
            // only fire when leaving document out
            if ( ! relatedTarget || relatedTarget.nodeName == "HTML"){               
                dropArea.style.display = 'none';                                            
            }
        });                
    },
    _onSubmit: function(id, fileName){
        qq.FileUploaderBasic.prototype._onSubmit.apply(this, arguments);
        this._addToList(id, fileName);  
    },
    _onProgress: function(id, fileName, loaded, total){
        qq.FileUploaderBasic.prototype._onProgress.apply(this, arguments);

        var item = this._getItemByFileId(id);
        var size = this._find(item, 'size');
        size.style.display = 'inline';
        
        var text; 
        if (loaded != total){
            text = Math.round(loaded / total * 100) + '% from ' + this._formatSize(total);
        } else {                                   
            text = this._formatSize(total);
        }          
        
        qq.setText(size, text);         
    },
    _onComplete: function(id, fileName, result){
        qq.FileUploaderBasic.prototype._onComplete.apply(this, arguments);

        // mark completed
        var item = this._getItemByFileId(id);                
        qq.remove(this._find(item, 'cancel'));
        qq.remove(this._find(item, 'spinner'));
        
        if (result.success){
            qq.addClass(item, this._classes.success);    
        } else {
            qq.addClass(item, this._classes.fail);
        }         
    },
    _addToList: function(id, fileName){
        var item = qq.toElement(this._options.fileTemplate);                
        item.qqFileId = id;

        var fileElement = this._find(item, 'file');        
        qq.setText(fileElement, this._formatFileName(fileName));
        this._find(item, 'size').style.display = 'none';        

        this._listElement.appendChild(item);
    },
    _getItemByFileId: function(id){
        var item = this._listElement.firstChild;        
        
        // there can't be txt nodes in dynamically created list
        // and we can  use nextSibling
        while (item){            
            if (item.qqFileId == id) return item;            
            item = item.nextSibling;
        }          
    },
    /**
     * delegate click event for cancel link 
     **/
    _bindCancelEvent: function(){
        var self = this,
            list = this._listElement;            
        
        qq.attach(list, 'click', function(e){            
            e = e || window.event;
            var target = e.target || e.srcElement;
            
            if (qq.hasClass(target, self._classes.cancel)){                
                qq.preventDefault(e);
               
                var item = target.parentNode;
                self._handler.cancel(item.qqFileId);
                qq.remove(item);
            }
        });
    }    
});
    
qq.UploadDropZone = function(o){
    this._options = {
        element: null,  
        onEnter: function(e){},
        onLeave: function(e){},  
        // is not fired when leaving element by hovering descendants   
        onLeaveNotDescendants: function(e){},   
        onDrop: function(e){}                       
    };
    qq.extend(this._options, o); 
    
    this._element = this._options.element;
    
    this._disableDropOutside();
    this._attachEvents();   
};

qq.UploadDropZone.prototype = {
    _disableDropOutside: function(e){
        // run only once for all instances
        if (!qq.UploadDropZone.dropOutsideDisabled ){

            qq.attach(document, 'dragover', function(e){
                if (e.dataTransfer){
                    e.dataTransfer.dropEffect = 'none';
                    e.preventDefault(); 
                }           
            });
            
            qq.UploadDropZone.dropOutsideDisabled = true; 
        }        
    },
    _attachEvents: function(){
        var self = this;              
                  
        qq.attach(self._element, 'dragover', function(e){
            if (!self._isValidFileDrag(e)) return;
            
            var effect = e.dataTransfer.effectAllowed;
            if (effect == 'move' || effect == 'linkMove'){
                e.dataTransfer.dropEffect = 'move'; // for FF (only move allowed)    
            } else {                    
                e.dataTransfer.dropEffect = 'copy'; // for Chrome
            }
                                                     
            e.stopPropagation();
            e.preventDefault();                                                                    
        });
        
        qq.attach(self._element, 'dragenter', function(e){
            if (!self._isValidFileDrag(e)) return;
                        
            self._options.onEnter(e);
        });
        
        qq.attach(self._element, 'dragleave', function(e){
            if (!self._isValidFileDrag(e)) return;
            
            self._options.onLeave(e);
            
            var relatedTarget = document.elementFromPoint(e.clientX, e.clientY);                      
            // do not fire when moving a mouse over a descendant
            if (qq.contains(this, relatedTarget)) return;
                        
            self._options.onLeaveNotDescendants(e); 
        });
                
        qq.attach(self._element, 'drop', function(e){
            if (!self._isValidFileDrag(e)) return;
            
            e.preventDefault();
            self._options.onDrop(e);
        });          
    },
    _isValidFileDrag: function(e){
        var dt = e.dataTransfer,
            // do not check dt.types.contains in webkit, because it crashes safari 4            
            isWebkit = navigator.userAgent.indexOf("AppleWebKit") > -1;                        

        // dt.effectAllowed is none in Safari 5
        // dt.types.contains check is for firefox            
        return dt && dt.effectAllowed != 'none' && 
            (dt.files || (!isWebkit && dt.types.contains && dt.types.contains('Files')));
        
    }        
}; 

qq.UploadButton = function(o){
    this._options = {
        element: null,  
        // if set to true adds multiple attribute to file input      
        multiple: false,
        // name attribute of file input
        name: 'file',
        onChange: function(input){},
        hoverClass: 'qq-upload-button-hover',
        focusClass: 'qq-upload-button-focus'                       
    };
    
    qq.extend(this._options, o);
        
    this._element = this._options.element;
    
    // make button suitable container for input
    qq.css(this._element, {
        position: 'relative',
        overflow: 'hidden',
        // Make sure browse button is in the right side
        // in Internet Explorer
        direction: 'ltr'
    });   
    
    this._input = this._createInput();
};

qq.UploadButton.prototype = {
    /* returns file input element */    
    getInput: function(){
        return this._input;
    },
    /* cleans/recreates the file input */
    reset: function(){
        if (this._input.parentNode){
            qq.remove(this._input);    
        }                
        
        qq.removeClass(this._element, this._options.focusClass);
        this._input = this._createInput();
    },    
    _createInput: function(){                
        var input = document.createElement("input");
        
        if (this._options.multiple){
            input.setAttribute("multiple", "multiple");
        }
                
        input.setAttribute("type", "file");
        input.setAttribute("name", this._options.name);
        
        qq.css(input, {
            position: 'absolute',
            // in Opera only 'browse' button
            // is clickable and it is located at
            // the right side of the input
            right: 0,
            top: 0,
            fontFamily: 'Arial',
            // 4 persons reported this, the max values that worked for them were 243, 236, 236, 118
            fontSize: '118px',
            margin: 0,
            padding: 0,
            cursor: 'pointer',
            opacity: 0
        });
        
        this._element.appendChild(input);

        var self = this;
        qq.attach(input, 'change', function(){
            self._options.onChange(input);
        });
                
        qq.attach(input, 'mouseover', function(){
            qq.addClass(self._element, self._options.hoverClass);
        });
        qq.attach(input, 'mouseout', function(){
            qq.removeClass(self._element, self._options.hoverClass);
        });
        qq.attach(input, 'focus', function(){
            qq.addClass(self._element, self._options.focusClass);
        });
        qq.attach(input, 'blur', function(){
            qq.removeClass(self._element, self._options.focusClass);
        });

        // IE and Opera, unfortunately have 2 tab stops on file input
        // which is unacceptable in our case, disable keyboard access
        if (window.attachEvent){
            // it is IE or Opera
            input.setAttribute('tabIndex', "-1");
        }

        return input;            
    }        
};

/**
 * Class for uploading files, uploading itself is handled by child classes
 */
qq.UploadHandlerAbstract = function(o){
    this._options = {
        debug: false,
        action: '/upload.php',
        method: 'POST',
        fieldName: 'qqfile',
        // maximum number of concurrent uploads        
        maxConnections: 999,
        onProgress: function(id, fileName, loaded, total){},
        onComplete: function(id, fileName, response){},
        onCancel: function(id, fileName){}
    };
    qq.extend(this._options, o);    
    
    this._queue = [];
    // params for files in queue
    this._params = [];
};
qq.UploadHandlerAbstract.prototype = {
    log: function(str){
        if (this._options.debug && window.console) console.log('[uploader] ' + str);        
    },
    /**
     * Adds file or file input to the queue
     * @returns id
     **/    
    add: function(file){},
    /**
     * Sends the file identified by id and additional query params to the server
     */
    upload: function(id, params){
        var len = this._queue.push(id);

        var copy = {};        
        qq.extend(copy, params);
        this._params[id] = copy;        
                
        // if too many active uploads, wait...
        if (len <= this._options.maxConnections){               
            this._upload(id, this._params[id]);
        }
    },
    /**
     * Cancels file upload by id
     */
    cancel: function(id){
        this._cancel(id);
        this._dequeue(id);
    },
    /**
     * Cancells all uploads
     */
    cancelAll: function(){
        for (var i=0; i<this._queue.length; i++){
            this._cancel(this._queue[i]);
        }
        this._queue = [];
    },
    /**
     * Returns name of the file identified by id
     */
    getName: function(id){},
    /**
     * Returns size of the file identified by id
     */          
    getSize: function(id){},
    /**
     * Returns id of files being uploaded or
     * waiting for their turn
     */
    getQueue: function(){
        return this._queue;
    },
    /**
     * Actual upload method
     */
    _upload: function(id){},
    /**
     * Actual cancel method
     */
    _cancel: function(id){},     
    /**
     * Removes element from queue, starts upload of next
     */
    _dequeue: function(id){
        var i = qq.indexOf(this._queue, id);
        this._queue.splice(i, 1);
                
        var max = this._options.maxConnections;
        
        if (this._queue.length >= max && i < max){
            var nextId = this._queue[max-1];
            this._upload(nextId, this._params[nextId]);
        }
    }        
};

/**
 * Class for uploading files using form and iframe
 * @inherits qq.UploadHandlerAbstract
 */
qq.UploadHandlerForm = function(o){
    qq.UploadHandlerAbstract.apply(this, arguments);
       
    this._inputs = {};
};
// @inherits qq.UploadHandlerAbstract
qq.extend(qq.UploadHandlerForm.prototype, qq.UploadHandlerAbstract.prototype);

qq.extend(qq.UploadHandlerForm.prototype, {
    add: function(fileInput){
        fileInput.setAttribute('name', this._options.fieldName);
        var id = 'qq-upload-handler-iframe' + qq.getUniqueId();       
        
        this._inputs[id] = fileInput;
        
        // remove file input from DOM
        if (fileInput.parentNode){
            qq.remove(fileInput);
        }
                
        return id;
    },
    getName: function(id){
        // get input value and remove path to normalize
        return this._inputs[id].value.replace(/.*(\/|\\)/, "");
    },    
    _cancel: function(id){
        this._options.onCancel(id, this.getName(id));
        
        delete this._inputs[id];        

        var iframe = document.getElementById(id);
        if (iframe){
            // to cancel request set src to something else
            // we use src="javascript:false;" because it doesn't
            // trigger ie6 prompt on https
            iframe.setAttribute('src', 'javascript:false;');

            qq.remove(iframe);
        }
    },     
    _upload: function(id, params){                        
        var input = this._inputs[id];
        
        if (!input){
            throw new Error('file with passed id was not added, or already uploaded or cancelled');
        }                

        var fileName = this.getName(id);
                
        var iframe = this._createIframe(id);
        var form = this._createForm(iframe, params);
        form.appendChild(input);

        var self = this;
        this._attachLoadEvent(iframe, function(){                                 
            self.log('iframe loaded');
            
            var response = self._getIframeContentJSON(iframe);

            self._options.onComplete(id, fileName, response);
            self._dequeue(id);
            
            delete self._inputs[id];
            // timeout added to fix busy state in FF3.6
            setTimeout(function(){
                qq.remove(iframe);
            }, 1);
        });

        form.submit();        
        qq.remove(form);        
        
        return id;
    }, 
    _attachLoadEvent: function(iframe, callback){
        qq.attach(iframe, 'load', function(){
            // when we remove iframe from dom
            // the request stops, but in IE load
            // event fires
            if (!iframe.parentNode){
                return;
            }

            // fixing Opera 10.53
            if (iframe.contentDocument &&
                iframe.contentDocument.body &&
                iframe.contentDocument.body.innerHTML == "false"){
                // In Opera event is fired second time
                // when body.innerHTML changed from false
                // to server response approx. after 1 sec
                // when we upload file with iframe
                return;
            }

            callback();
        });
    },
    /**
     * Returns json object received by iframe from server.
     */
    _getIframeContentJSON: function(iframe){
        // iframe.contentWindow.document - for IE<7
        var doc = iframe.contentDocument ? iframe.contentDocument: iframe.contentWindow.document,
            response;
        
        this.log("converting iframe's innerHTML to JSON");
        this.log("innerHTML = " + doc.body.innerHTML);
                        
        try {
            response = eval("(" + doc.body.innerHTML + ")");
        } catch(err){
            response = {};
        }        

        return response;
    },
    /**
     * Creates iframe with unique name
     */
    _createIframe: function(id){
        // We can't use following code as the name attribute
        // won't be properly registered in IE6, and new window
        // on form submit will open
        // var iframe = document.createElement('iframe');
        // iframe.setAttribute('name', id);

        var iframe = qq.toElement('<iframe src="javascript:false;" name="' + id + '" />');
        // src="javascript:false;" removes ie6 prompt on https

        iframe.setAttribute('id', id);

        iframe.style.display = 'none';
        document.body.appendChild(iframe);

        return iframe;
    },
    /**
     * Creates form, that will be submitted to iframe
     */
    _createForm: function(iframe, params){
        // We can't use the following code in IE6
        // var form = document.createElement('form');
        // form.setAttribute('method', 'post');
        // form.setAttribute('enctype', 'multipart/form-data');
        // Because in this case file won't be attached to request
        var form = qq.toElement('<form enctype="multipart/form-data"></form>');

        var queryString = qq.obj2url(params, this._options.action);
        
        form.setAttribute('method', this._options.method);
        form.setAttribute('action', queryString);
        form.setAttribute('target', iframe.name);
        form.style.display = 'none';

        // Rails CSRFProtection
        var token = $('meta[name="csrf-token"]').attr('content');
        var param = $('meta[name="csrf-param"]').attr('content');
        var input = qq.toElement('<input type="hidden" />');
        
        input.setAttribute('name', param);
        input.setAttribute('value', token);
        
        form.appendChild(input);
        document.body.appendChild(form);

        return form;
    }
});

/**
 * Class for uploading files using xhr
 * @inherits qq.UploadHandlerAbstract
 */
qq.UploadHandlerXhr = function(o){
    qq.UploadHandlerAbstract.apply(this, arguments);

    this._files = [];
    this._xhrs = [];
    
    // current loaded size in bytes for each file 
    this._loaded = [];
};

// static method
qq.UploadHandlerXhr.isSupported = function(){
    var input = document.createElement('input');
    input.type = 'file';        
    
    return (
        'multiple' in input &&
        typeof File != "undefined" &&
        typeof (new XMLHttpRequest()).upload != "undefined" );       
};

// @inherits qq.UploadHandlerAbstract
qq.extend(qq.UploadHandlerXhr.prototype, qq.UploadHandlerAbstract.prototype)

qq.extend(qq.UploadHandlerXhr.prototype, {
    /**
     * Adds file to the queue
     * Returns id to use with upload, cancel
     **/    
    add: function(file){
        if (!(file instanceof File)){
            throw new Error('Passed obj in not a File (in qq.UploadHandlerXhr)');
        }
                
        return this._files.push(file) - 1;        
    },
    getName: function(id){        
        var file = this._files[id];
        // fix missing name in Safari 4
        return file.fileName != null ? file.fileName : file.name;       
    },
    getSize: function(id){
        var file = this._files[id];
        return file.fileSize != null ? file.fileSize : file.size;
    },    
    /**
     * Returns uploaded bytes for file identified by id 
     */    
    getLoaded: function(id){
        return this._loaded[id] || 0; 
    },
    /**
     * Sends the file identified by id and additional query params to the server
     * @param {Object} params name-value string pairs
     */    
    _upload: function(id, params){
        var file = this._files[id],
            name = this.getName(id),
            size = this.getSize(id);
                
        this._loaded[id] = 0;
                                
        var xhr = this._xhrs[id] = new XMLHttpRequest();
        var self = this;
                                        
        xhr.upload.onprogress = function(e){
            if (e.lengthComputable){
                self._loaded[id] = e.loaded;
                self._options.onProgress(id, name, e.loaded, e.total);
            }
        };

        xhr.onreadystatechange = function(){            
            if (xhr.readyState == 4){
                self._onComplete(id, xhr);                    
            }
        };

        // build query string
        params = params || {};
        params[this._options.fieldName] = name;
        var queryString = qq.obj2url(params, this._options.action);

        xhr.open(this._options.method, queryString, true);
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xhr.setRequestHeader("X-File-Name", encodeURIComponent(name));
        xhr.setRequestHeader('X-File-Size', size);
        xhr.setRequestHeader('X-File-Type', file.type);
        xhr.setRequestHeader("Content-Type", "application/octet-stream");

        // Rails CSRFProtection
        if ($.rails) $.rails.CSRFProtection(xhr);        

        xhr.send(file);
    },
    _onComplete: function(id, xhr){
        // the request was aborted/cancelled
        if (!this._files[id]) return;
        
        var name = this.getName(id);
        var size = this.getSize(id);
        
        this._options.onProgress(id, name, size, size);
                
        if ([200, 201].indexOf( xhr.status ) > -1){
            this.log("xhr - server response received");
            this.log("responseText = " + xhr.responseText);
                        
            var response;
                    
            try {
                response = eval("(" + xhr.responseText + ")");
            } catch(err){
                response = {};
            }
            
            this._options.onComplete(id, name, response);
                        
        } else {                   
            this._options.onComplete(id, name, {});
        }
                
        this._files[id] = null;
        this._xhrs[id] = null;    
        this._dequeue(id);                    
    },
    _cancel: function(id){
        this._options.onCancel(id, this.getName(id));
        
        this._files[id] = null;
        
        if (this._xhrs[id]){
            this._xhrs[id].abort();
            this._xhrs[id] = null;                                   
        }
    }
});
/**
 * Author: Sergey Kukunin
 * See: https://github.com/Kukunin/jquery-endless-scroll
 */

(function($) {
	'use strict';

	// Is pushState supported by this browser?
	$.support.pushState =
		window.history && window.history.pushState && window.history.replaceState &&
		// pushState isn't reliable on iOS until 5.
		!navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]|WebApps\/.+CFNetwork)/)

	//Declaration of modules
	var scrollModule = {
		init: function(options, obj) {
			obj.options = $.extend({
				scrollContainer: window,
				scrollPadding: 100,
				scrollEventDelay: 300
			}, options);
			this.options = obj.options;
			this.container = obj.container;
			obj.scrollModule = this;

			this._toplock = true;
			this._bottomlock = true;

			this.scrollContainer = $(this.options.scrollContainer);

			this.updateEntities();
			this.sortMarkers();

			this.currentPage = null;

			this.container.on("jes:afterPageLoad", $.proxy(function(event, url, placement) {
				this.updateEntities();
				this.sortMarkers();
				this.checkMarker();

				if ( placement == "top" ) {
					//Get offset between first and second pages
					var offset = this.markers[1].top,
						scrollTop = this.scrollContainer.scrollTop();

					this.scrollContainer.scrollTop(scrollTop + offset);
				}
			}, this));

			this.bind();
		},
		updateEntities: function() {
			this.entities = $(this.options.entity, this.container);
		},
		sortMarkers: function() {
			var markers = [];
			$(".jes-marker", this.container).each(function() {
				markers.push({ top: $(this).position().top, url: $(this).data("jesUrl") });
			});
			this.markers = markers;
		},
		//Check, whether user scrolled to another page
		checkMarker: function() {
			var newPage = this.markers[0],
				scrollTop = this.scrollContainer.scrollTop();

			//Determine, what is current page
			for ( var i = 1; i < this.markers.length; i++ ) {
				if ( scrollTop > this.markers[i].top ) {
					newPage = this.markers[i];
				} else {
					break;
				}
			}
			if ( newPage.url != this.currentPage ) {
				this.currentPage = newPage.url;
				$(this.container).trigger("jes:scrollToPage", newPage.url);
			}
		},
		bind: function() {
			this.scrollContainer.on("scroll.jes", $.proxy(function(event) {
				if ( this._tId ) { return; }

				this.scrollHandler(event);
				//Clean up mark
				this._tId= setTimeout($.proxy(function(){
					this._tId = null;
				},this), this.options.scrollEventDelay);

			}, this));
		},
		unbind: function() {
			$(this.options.scrollContainer).off("scroll.jes");
		},
		scrollHandler: function(ev) {
			var $scrollable = this.scrollContainer,
				$entities = this.entities,
				$firstEntity = $entities.first(),
				$lastEntity = $entities.last();

			var scrollTop = $scrollable.scrollTop(),
				height = $scrollable.height(),
				scrollBottom = scrollTop + height;

			var topEntityPosition = $firstEntity.position().top,
				topTarget = topEntityPosition + this.options.scrollPadding,
				bottomEntityPosition = $lastEntity.outerHeight() + $lastEntity.position().top,
				bottomTarget = bottomEntityPosition - this.options.scrollPadding;

			//Don't trigger event again, if already fired
			//Visitor have to leave the area and get back to fire event again
			//Process top threshold
			if ( scrollTop < topTarget ) {
				if ( !this._toplock ) {
					$(this.container).trigger("jes:topThreshold");
					this._toplock = true;
				}
			} else {
				this._toplock = false;
			}

			//Process bottom threshold
			if ( scrollBottom > bottomTarget ) {
				if ( !this._bottomlock ) {
					$(this.container).trigger("jes:bottomThreshold");
					this._bottomlock = true;
				}
			} else {
				this._bottomlock = false;
			}

			this.checkMarker();
		}
	}

	var ajaxModule = {
		init: function(options, obj) {
			obj.options = $.extend({
			}, options);

			this.options = obj.options;
			this.container = obj.container;

			//markers
			this.setMarker($(this.options.entity, this.container).first(), location.href);

			obj.ajaxModule = this;
		},
		loadPage: function(url, placement, callback) {
			//The hash with methods list
			//depends from placement
			var actions = {
					top: {
						find: 'first',
						inject: 'insertBefore'
					},
					bottom: {
						find: 'last',
						inject: 'insertAfter'
					}
				},
				action = actions[placement];

			this.container.trigger("jes:beforePageLoad", [url, placement]);

			//Make AJAX query
			$.get(url, null, $.proxy(function (_data) {
				var data = $("<div>").html(_data),
				containerSelector = this.options.container,
				container = $(containerSelector, data).first();

				if ( container.length ) {
					//Find entities
					var entities = container.find(this.options.entity);

					if ( placement == "bottom" ) {
						//Remove duplicated (staled) entities from page
						entities.each(function(i) {
							var id = $(this).attr("id");
							if ( id ) {
								$('#' + id, this.container).remove();
							}
						});
					}

					//Find the cursor
					var cursor = $(this.options.entity, containerSelector)[action.find]();

					//Find and insert entities
					entities[action.inject](cursor);
					this.setMarker(entities.first(), url);
				}

				if ( $.isFunction(callback) ) {
					callback(data);
				}
				this.container.trigger("jes:afterPageLoad", [url, placement, data, entities]);
			}, this), 'html');
		},
		setMarker: function(entity, url) {
			entity.addClass("jes-marker").data("jesUrl", url);
		}
	}

	var navigationModule = {
		init: function(options, obj) {
			obj.options = $.extend({
				nextPage: ".pagination a[rel=next]",
				previousPage: ".pagination a[rel=previous]"
			}, options);

			this.options = obj.options;
			this.container = obj.container;

			$.each([{
				selector: this.options.nextPage,
				event: "jes:bottomThreshold.navigation",
				placement: 'bottom'
			}, {
				selector: this.options.previousPage,
				event: "jes:topThreshold.navigation",
				placement: 'top'
			}], $.proxy(function(i, v) {
				v.element = $(v.selector);
				if ( v.element.length ) {
					var url = v.element.prop("href"),
					lock = false;

					var handler = function() {
						//this object is container
						if ( lock || !url ) return;

						lock = true;
						obj.ajaxModule.loadPage(url, v.placement, $.proxy(function( data ) {
							//Search new next link
							var newElement = $(v.selector, $(data));
							if ( newElement.length ) {
								//Update URL and remove lock
								lock = false;
								url = newElement.prop("href");
								v.element.attr("href", url);
							} else {
								//Remove event at all
								$(this).off(v.event);
								v.element.remove();
							}
						}, this));
					};

					$(this.container).on(v.event, handler);
					$(v.element).on("click", $.proxy(function(ev) {
						ev.preventDefault();
						handler.apply(this.container)
					}, this));
				}
			},this));
		}
	}

	var pushStateHistory = {
		init: function(options, obj) {
			if ( !$.support.pushState ) {
				return;
			}

			obj.container.on("jes:scrollToPage", function(event, url) {
				history.replaceState({}, null, url);
			});
		}
	}

	$.endlessScroll = function(options) {

		//Initialize modules
		this.options = $.extend(true, {
			container: "#container",
			entity: ".entity",
			_modules: [ ajaxModule, scrollModule, navigationModule, pushStateHistory ],
			modules: []
		}, options);

		this.container = $(this.options.container);
		if ( !this.container.length ) {
			throw "Container for endless scroll isn't available on the page";
			return;
		}


		//Merge custom options with default
		$.merge(this.options.modules, this.options._modules);
		//Init modules
		this.options.modules.forEach($.proxy(function(module) {
			module.init(this.options, this);
		},this));


		return this;
	}

})(jQuery);
(function($, undefined) {

/**
 * Unobtrusive scripting adapter for jQuery
 *
 * Requires jQuery 1.6.0 or later.
 * https://github.com/rails/jquery-ujs

 * Uploading file using rails.js
 * =============================
 *
 * By default, browsers do not allow files to be uploaded via AJAX. As a result, if there are any non-blank file fields
 * in the remote form, this adapter aborts the AJAX submission and allows the form to submit through standard means.
 *
 * The `ajax:aborted:file` event allows you to bind your own handler to process the form submission however you wish.
 *
 * Ex:
 *     $('form').live('ajax:aborted:file', function(event, elements){
 *       // Implement own remote file-transfer handler here for non-blank file inputs passed in `elements`.
 *       // Returning false in this handler tells rails.js to disallow standard form submission
 *       return false;
 *     });
 *
 * The `ajax:aborted:file` event is fired when a file-type input is detected with a non-blank value.
 *
 * Third-party tools can use this hook to detect when an AJAX file upload is attempted, and then use
 * techniques like the iframe method to upload the file instead.
 *
 * Required fields in rails.js
 * ===========================
 *
 * If any blank required inputs (required="required") are detected in the remote form, the whole form submission
 * is canceled. Note that this is unlike file inputs, which still allow standard (non-AJAX) form submission.
 *
 * The `ajax:aborted:required` event allows you to bind your own handler to inform the user of blank required inputs.
 *
 * !! Note that Opera does not fire the form's submit event if there are blank required inputs, so this event may never
 *    get fired in Opera. This event is what causes other browsers to exhibit the same submit-aborting behavior.
 *
 * Ex:
 *     $('form').live('ajax:aborted:required', function(event, elements){
 *       // Returning false in this handler tells rails.js to submit the form anyway.
 *       // The blank required inputs are passed to this function in `elements`.
 *       return ! confirm("Would you like to submit the form with missing info?");
 *     });
 */

  // Shorthand to make it a little easier to call public rails functions from within rails.js
  var rails;

  $.rails = rails = {
    // Link elements bound by jquery-ujs
    linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]',

    // Select elements bound by jquery-ujs
    inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',

    // Form elements bound by jquery-ujs
    formSubmitSelector: 'form',

    // Form input elements bound by jquery-ujs
    formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not(button[type])',

    // Form input elements disabled during form submission
    disableSelector: 'input[data-disable-with], button[data-disable-with], textarea[data-disable-with]',

    // Form input elements re-enabled after form submission
    enableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled',

    // Form required input elements
    requiredInputSelector: 'input[name][required]:not([disabled]),textarea[name][required]:not([disabled])',

    // Form file input elements
    fileInputSelector: 'input:file',

    // Link onClick disable selector with possible reenable after remote submission
    linkDisableSelector: 'a[data-disable-with]',

    // Make sure that every Ajax request sends the CSRF token
    CSRFProtection: function(xhr) {
      var token = $('meta[name="csrf-token"]').attr('content');
      if (token) xhr.setRequestHeader('X-CSRF-Token', token);
    },

    // Triggers an event on an element and returns false if the event result is false
    fire: function(obj, name, data) {
      var event = $.Event(name);
      obj.trigger(event, data);
      return event.result !== false;
    },

    // Default confirm dialog, may be overridden with custom confirm dialog in $.rails.confirm
    confirm: function(message) {
      return confirm(message);
    },

    // Default ajax function, may be overridden with custom function in $.rails.ajax
    ajax: function(options) {
      return $.ajax(options);
    },

    // Submits "remote" forms and links with ajax
    handleRemote: function(element) {
      var method, url, data,
        crossDomain = element.data('cross-domain') || null,
        dataType = element.data('type') || ($.ajaxSettings && $.ajaxSettings.dataType),
        options;

      if (rails.fire(element, 'ajax:before')) {

        if (element.is('form')) {
          method = element.attr('method');
          url = element.attr('action');
          data = element.serializeArray();
          // memoized value from clicked submit button
          var button = element.data('ujs:submit-button');
          if (button) {
            data.push(button);
            element.data('ujs:submit-button', null);
          }
        } else if (element.is(rails.inputChangeSelector)) {
          method = element.data('method');
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + "&" + element.data('params');
        } else {
          method = element.data('method');
          url = element.attr('href');
          data = element.data('params') || null;
        }

        options = {
          type: method || 'GET', data: data, dataType: dataType, crossDomain: crossDomain,
          // stopping the "ajax:beforeSend" event will cancel the ajax request
          beforeSend: function(xhr, settings) {
            if (settings.dataType === undefined) {
              xhr.setRequestHeader('accept', '*/*;q=0.5, ' + settings.accepts.script);
            }
            return rails.fire(element, 'ajax:beforeSend', [xhr, settings]);
          },
          success: function(data, status, xhr) {
            element.trigger('ajax:success', [data, status, xhr]);
          },
          complete: function(xhr, status) {
            element.trigger('ajax:complete', [xhr, status]);
          },
          error: function(xhr, status, error) {
            element.trigger('ajax:error', [xhr, status, error]);
          }
        };
        // Only pass url to `ajax` options if not blank
        if (url) { options.url = url; }

        return rails.ajax(options);
      } else {
        return false;
      }
    },

    // Handles "data-method" on links such as:
    // <a href="/users/5" data-method="delete" rel="nofollow" data-confirm="Are you sure?">Delete</a>
    handleMethod: function(link) {
      var href = link.attr('href'),
        method = link.data('method'),
        target = link.attr('target'),
        csrf_token = $('meta[name=csrf-token]').attr('content'),
        csrf_param = $('meta[name=csrf-param]').attr('content'),
        form = $('<form method="post" action="' + href + '"></form>'),
        metadata_input = '<input name="_method" value="' + method + '" type="hidden" />';

      if (csrf_param !== undefined && csrf_token !== undefined) {
        metadata_input += '<input name="' + csrf_param + '" value="' + csrf_token + '" type="hidden" />';
      }

      if (target) { form.attr('target', target); }

      form.hide().append(metadata_input).appendTo('body');
      form.submit();
    },

    /* Disables form elements:
      - Caches element value in 'ujs:enable-with' data store
      - Replaces element text with value of 'data-disable-with' attribute
      - Sets disabled property to true
    */
    disableFormElements: function(form) {
      form.find(rails.disableSelector).each(function() {
        var element = $(this), method = element.is('button') ? 'html' : 'val';
        element.data('ujs:enable-with', element[method]());
        element[method](element.data('disable-with'));
        element.prop('disabled', true);
      });
    },

    /* Re-enables disabled form elements:
      - Replaces element text with cached value from 'ujs:enable-with' data store (created in `disableFormElements`)
      - Sets disabled property to false
    */
    enableFormElements: function(form) {
      form.find(rails.enableSelector).each(function() {
        var element = $(this), method = element.is('button') ? 'html' : 'val';
        if (element.data('ujs:enable-with')) element[method](element.data('ujs:enable-with'));
        element.prop('disabled', false);
      });
    },

   /* For 'data-confirm' attribute:
      - Fires `confirm` event
      - Shows the confirmation dialog
      - Fires the `confirm:complete` event

      Returns `true` if no function stops the chain and user chose yes; `false` otherwise.
      Attaching a handler to the element's `confirm` event that returns a `falsy` value cancels the confirmation dialog.
      Attaching a handler to the element's `confirm:complete` event that returns a `falsy` value makes this function
      return false. The `confirm:complete` event is fired whether or not the user answered true or false to the dialog.
   */
    allowAction: function(element) {
      var message = element.data('confirm'),
          answer = false, callback;
      if (!message) { return true; }

      if (rails.fire(element, 'confirm')) {
        answer = rails.confirm(message);
        callback = rails.fire(element, 'confirm:complete', [answer]);
      }
      return answer && callback;
    },

    // Helper function which checks for blank inputs in a form that match the specified CSS selector
    blankInputs: function(form, specifiedSelector, nonBlank) {
      var inputs = $(), input,
        selector = specifiedSelector || 'input,textarea';
      form.find(selector).each(function() {
        input = $(this);
        // Collect non-blank inputs if nonBlank option is true, otherwise, collect blank inputs
        if (nonBlank ? input.val() : !input.val()) {
          inputs = inputs.add(input);
        }
      });
      return inputs.length ? inputs : false;
    },

    // Helper function which checks for non-blank inputs in a form that match the specified CSS selector
    nonBlankInputs: function(form, specifiedSelector) {
      return rails.blankInputs(form, specifiedSelector, true); // true specifies nonBlank
    },

    // Helper function, needed to provide consistent behavior in IE
    stopEverything: function(e) {
      $(e.target).trigger('ujs:everythingStopped');
      e.stopImmediatePropagation();
      return false;
    },

    // find all the submit events directly bound to the form and
    // manually invoke them. If anyone returns false then stop the loop
    callFormSubmitBindings: function(form, event) {
      var events = form.data('events'), continuePropagation = true;
      if (events !== undefined && events['submit'] !== undefined) {
        $.each(events['submit'], function(i, obj){
          if (typeof obj.handler === 'function') return continuePropagation = obj.handler(event);
        });
      }
      return continuePropagation;
    },

    //  replace element's html with the 'data-disable-with' after storing original html
    //  and prevent clicking on it
    disableElement: function(element) {
      element.data('ujs:enable-with', element.html()); // store enabled state
      element.html(element.data('disable-with')); // set to disabled state
      element.bind('click.railsDisable', function(e) { // prevent further clicking
        return rails.stopEverything(e)
      });
    },

    // restore element to its original state which was disabled by 'disableElement' above
    enableElement: function(element) {
      if (element.data('ujs:enable-with') !== undefined) {
        element.html(element.data('ujs:enable-with')); // set to old enabled state
        // this should be element.removeData('ujs:enable-with')
        // but, there is currently a bug in jquery which makes hyphenated data attributes not get removed
        element.data('ujs:enable-with', false); // clean up cache
      }
      element.unbind('click.railsDisable'); // enable element
    }

  };

  $.ajaxPrefilter(function(options, originalOptions, xhr){ if ( !options.crossDomain ) { rails.CSRFProtection(xhr); }});

  $(document).delegate(rails.linkDisableSelector, 'ajax:complete', function() {
      rails.enableElement($(this));
  });

  $(document).delegate(rails.linkClickSelector, 'click.rails', function(e) {
    var link = $(this), method = link.data('method'), data = link.data('params');
    if (!rails.allowAction(link)) return rails.stopEverything(e);

    if (link.is(rails.linkDisableSelector)) rails.disableElement(link);

    if (link.data('remote') !== undefined) {
      if ( (e.metaKey || e.ctrlKey) && (!method || method === 'GET') && !data ) { return true; }

      if (rails.handleRemote(link) === false) { rails.enableElement(link); }
      return false;

    } else if (link.data('method')) {
      rails.handleMethod(link);
      return false;
    }
  });

  $(document).delegate(rails.inputChangeSelector, 'change.rails', function(e) {
    var link = $(this);
    if (!rails.allowAction(link)) return rails.stopEverything(e);

    rails.handleRemote(link);
    return false;
  });

  $(document).delegate(rails.formSubmitSelector, 'submit.rails', function(e) {
    var form = $(this),
      remote = form.data('remote') !== undefined,
      blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector),
      nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector);

    if (!rails.allowAction(form)) return rails.stopEverything(e);

    // skip other logic when required values are missing or file upload is present
    if (blankRequiredInputs && form.attr("novalidate") == undefined && rails.fire(form, 'ajax:aborted:required', [blankRequiredInputs])) {
      return rails.stopEverything(e);
    }

    if (remote) {
      if (nonBlankFileInputs) {
        return rails.fire(form, 'ajax:aborted:file', [nonBlankFileInputs]);
      }

      // If browser does not support submit bubbling, then this live-binding will be called before direct
      // bindings. Therefore, we should directly call any direct bindings before remotely submitting form.
      if (!$.support.submitBubbles && $().jquery < '1.7' && rails.callFormSubmitBindings(form, e) === false) return rails.stopEverything(e);

      rails.handleRemote(form);
      return false;

    } else {
      // slight timeout so that the submit button gets properly serialized
      setTimeout(function(){ rails.disableFormElements(form); }, 13);
    }
  });

  $(document).delegate(rails.formInputClickSelector, 'click.rails', function(event) {
    var button = $(this);

    if (!rails.allowAction(button)) return rails.stopEverything(event);

    // register the pressed submit button
    var name = button.attr('name'),
      data = name ? {name:name, value:button.val()} : null;

    button.closest('form').data('ujs:submit-button', data);
  });

  $(document).delegate(rails.formSubmitSelector, 'ajax:beforeSend.rails', function(event) {
    if (this == event.target) rails.disableFormElements($(this));
  });

  $(document).delegate(rails.formSubmitSelector, 'ajax:complete.rails', function(event) {
    if (this == event.target) rails.enableFormElements($(this));
  });

})( jQuery );
$.QueryString = (function(a) {
  if (a == "") return {};
  var b = {};
  for (var i = 0; i < a.length; ++i)
  {
    var p=a[i].split('=');
    if (p.length != 2) continue;
    b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
  }
  return b;
})(window.location.search.substr(1).split('&'))

$(document).ready(function(){
  var selector = "div.gal-item div.gal-inner-holder";

  $(document)
    .on('mouseover', selector, function(e){
      $(this).addClass('hover');
    })
    .on('mouseout', selector, function(e){
      $(this).removeClass('hover');
    })
    .on('click', selector, function(e){
      var url = $(this).parents('div.gal-item').data('url');
      CKEDITOR.tools.callFunction(CKEditorFuncNum, url);
      window.close();
    });

  $(document).on('ajax:complete', "div.gal-item a.gal-del", function(xhr, status){
    $(this).parents('div.gal-item').remove();
  });

  var endlessScroll = $.endlessScroll({
    container: ".fileupload-list",
    entity: ".gal-item",
    scrollPadding: 100
  });

  // Don't listen events first second
  endlessScroll.scrollModule.unbind();
  window.setTimeout(function() { endlessScroll.scrollModule.bind();}, 1000);
});

// Collection of all instances on page
qq.FileUploader.instances = new Object();

/**
 * Class that creates upload widget with drag-and-drop and file list
 * @inherits qq.FileUploaderBasic
 */
qq.FileUploaderInput = function(o){
    // call parent constructor
    qq.FileUploaderBasic.apply(this, arguments);

    // additional options
    qq.extend(this._options, {
        element: null,
        // if set, will be used instead of qq-upload-list in template
        listElement: null,

        template_id: '#fileupload_tmpl',

        classes: {
            // used to get elements from templates
            button: 'fileupload-button',
            drop: 'fileupload-drop-area',
            dropActive: 'fileupload-drop-area-active',
            list: 'fileupload-list',
            preview: 'fileupload-preview',

            file: 'fileupload-file',
            spinner: 'fileupload-spinner',
            size: 'fileupload-size',
            cancel: 'fileupload-cancel',

            // added to list item when upload completes
            // used in css to hide progress spinner
            success: 'fileupload-success',
            fail: 'fileupload-fail'
        }
    });
    // overwrite options with user supplied
    qq.extend(this._options, o);

    this._element = document.getElementById(this._options.element);
    this._listElement = this._options.listElement || this._find(this._element, 'list');

    this._classes = this._options.classes;

    this._button = this._createUploadButton(this._find(this._element, 'button'));

    //this._setupDragDrop();

    qq.FileUploader.instances[this._element.id] = this;
};

// inherit from Basic Uploader
qq.extend(qq.FileUploaderInput.prototype, qq.FileUploaderBasic.prototype);

qq.extend(qq.FileUploaderInput.prototype, {
    /**
     * Gets one of the elements listed in this._options.classes
     **/
    _find: function(parent, type){
        var element = qq.getByClass(parent, this._options.classes[type])[0];
        if (!element){
          alert(type);
            throw new Error('element not found ' + type);
        }

        return element;
    },
    _setupDragDrop: function(){
        var self = this,
            dropArea = this._find(this._element, 'drop');

        var dz = new qq.UploadDropZone({
            element: dropArea,
            onEnter: function(e){
                qq.addClass(dropArea, self._classes.dropActive);
                e.stopPropagation();
            },
            onLeave: function(e){
                e.stopPropagation();
            },
            onLeaveNotDescendants: function(e){
                qq.removeClass(dropArea, self._classes.dropActive);
            },
            onDrop: function(e){
                dropArea.style.display = 'none';
                qq.removeClass(dropArea, self._classes.dropActive);
                self._uploadFileList(e.dataTransfer.files);
            }
        });

        dropArea.style.display = 'none';

        qq.attach(document, 'dragenter', function(e){
            if (!dz._isValidFileDrag(e)) return;

            dropArea.style.display = 'block';
        });
        qq.attach(document, 'dragleave', function(e){
            if (!dz._isValidFileDrag(e)) return;

            var relatedTarget = document.elementFromPoint(e.clientX, e.clientY);
            // only fire when leaving document out
            if ( ! relatedTarget || relatedTarget.nodeName == "HTML"){
                dropArea.style.display = 'none';
            }
        });
    },
    _onSubmit: function(id, fileName){
        qq.FileUploaderBasic.prototype._onSubmit.apply(this, arguments);
        this._addToList(id, fileName);
    },
    _onProgress: function(id, fileName, loaded, total){
        qq.FileUploaderBasic.prototype._onProgress.apply(this, arguments);

        var item = this._getItemByFileId(id);
        var size = this._find(item, 'size');

        var text;
        if (loaded != total){
            text = Math.round(loaded / total * 100) + '% from ' + this._formatSize(total);
        } else {
            text = this._formatSize(total);
        }

        qq.setText(size, text);
    },
    _onComplete: function(id, fileName, result){
        qq.FileUploaderBasic.prototype._onComplete.apply(this, arguments);

        var item = this._getItemByFileId(id);
        var asset = result.asset ? result.asset : result;

        if (asset && asset.id){
            qq.addClass(item, this._classes.success);

            asset.size = this._formatSize(asset.size);
            asset.controller = (asset.type !== undefined && asset.type.toLowerCase() == "ckeditor::picture" ? "pictures" : "attachment_files");

            $(item).replaceWith($(this._options.template_id).tmpl(asset));
        } else {
            qq.addClass(item, this._classes.fail);
        }
    },
    _addToList: function(id, fileName){
        if (this._listElement) {
          if (this._options.multiple === false) {
            $(this._listElement).empty();
          }

          var asset = {
            id: 0,
            filename: this._formatFileName(fileName),
            size: 0,
            format_created_at: '',
            url_content: "#",
            controller: "assets",
            url_thumb: ""
          };

          var item = $(this._options.template_id).tmpl(asset).attr('qqfileid', id)

          item.find('div.img').html('').addClass('preloader');
          item.prependTo( this._listElement );

          this._bindCancelEvent(item);
        }
    },
    _getItemByFileId: function(id){
        return $(this._listElement).find('div[qqfileid=' + id  +']').get(0);
    },
    /**
     * delegate click event for cancel link
     **/
    _bindCancelEvent: function(element){
        var self = this,
            item = $(element);

        item.find('a.' + this._classes.cancel).bind('click', function(e){
          self._handler.cancel( item.attr('qqfileid') );
          item.remove();
          qq.preventDefault(e);
          return false;
        });
    }
});





=======
!function(c){function u(e,t,n,i){var o={data:i||0===i||!1===i?i:t?t.data:{},_wrap:t?t._wrap:null,tmpl:null,parent:t||null,nodes:[],calls:p,nest:h,wrap:f,html:m,update:_};return e&&c.extend(o,e,{nodes:[],parent:t}),n&&(o.tmpl=n,o._ctnt=o._ctnt||o.tmpl(c,o),o.key=++x,(F.length?b:y)[x]=o),o}function s(t,e,n){var o,i=n?c.map(n,function(e){return"string"==typeof e?t.key?e.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,"$1 "+g+'="'+t.key+'" $2'):e:s(e,t,e._ctnt)}):t;return e?i:((i=i.join("")).replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,function(e,t,n,i){l(o=c(n).get()),t&&(o=a(t).concat(o)),i&&(o=o.concat(a(i)))}),o||a(i))}function a(e){var t=document.createElement("div");return t.innerHTML=e,c.makeArray(t.childNodes)}function n(e){return new Function("jQuery","$item","var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('"+c.trim(e).replace(/([\\'])/g,"\\$1").replace(/[\r\t\n]/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,function(e,t,n,i,o,a,s){var r,l,u,p=c.tmpl.tag[n];if(!p)throw"Unknown template tag: "+n;return r=p._default||[],a&&!/\w$/.test(o)&&(o+=a,a=""),o?(o=d(o),s=s?","+d(s)+")":a?")":"",l=a?-1<o.indexOf(".")?o+d(a):"("+o+").call($item"+s:o,u=a?l:"(typeof("+o+")==='function'?("+o+").call($item):("+o+"))"):u=l=r.$1||"null",i=d(i),"');"+p[t?"close":"open"].split("$notnull_1").join(o?"typeof("+o+")!=='undefined' && ("+o+")!=null":"true").split("$1a").join(u).split("$1").join(l).split("$2").join(i||r.$2||"")+"__.push('"})+"');}return __;")}function r(e,t){e._wrap=s(e,!0,c.isArray(t)?t:[o.test(t)?t:c(t).html()]).join("")}function d(e){return e?e.replace(/\\'/g,"'").replace(/\\\\/g,"\\"):null}function i(e){var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}function l(e){function t(e){function t(e){o=l[e+=r]=l[e]||u(o,y[o.parent.key+r]||o.parent)}var n,i,o,a,s=e;if(a=e.getAttribute(g)){for(;s.parentNode&&1===(s=s.parentNode).nodeType&&!(n=s.getAttribute(g)););n!==a&&(s=s.parentNode?11===s.nodeType?0:s.getAttribute(g)||0:0,(o=y[a])||((o=u(o=b[a],y[s]||b[s])).key=++x,y[x]=o),w&&t(a)),e.removeAttribute(g)}else w&&(o=c.data(e,"tmplItem"))&&(t(o.key),y[o.key]=o,s=(s=c.data(e.parentNode,"tmplItem"))?s.key:0);if(o){for(i=o;i&&i.key!=s;)i.nodes.push(e),i=i.parent;delete o._ctnt,delete o._wrap,c.data(e,"tmplItem",o)}}var n,i,o,a,s,r="_"+w,l={};for(o=0,a=e.length;o<a;o++)if(1===(n=e[o]).nodeType){for(s=(i=n.getElementsByTagName("*")).length-1;0<=s;s--)t(i[s]);t(n)}}function p(e,t,n,i){if(!e)return F.pop();F.push({_:e,tmpl:t,item:this,data:n,options:i})}function h(e,t,n){return c.tmpl(c.template(e),t,n,this)}function f(e,t){var n=e.options||{};return n.wrapped=t,c.tmpl(c.template(e.tmpl),e.data,n,e.item)}function m(e,t){var n=this._wrap;return c.map(c(c.isArray(n)?n.join(""):n).filter(e||"*"),function(e){return t?e.innerText||e.textContent:e.outerHTML||i(e)})}function _(){var e=this.nodes;c.tmpl(null,null,null,this).insertBefore(e[0]),c(e).remove()}var q,v=c.fn.domManip,g="_tmplitem",o=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,y={},b={},C={key:0,data:{}},x=0,w=0,F=[];c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(l,u){c.fn[l]=function(e){var t,n,i,o,a=[],s=c(e),r=1===this.length&&this[0].parentNode;if(q=y||{},r&&11===r.nodeType&&1===r.childNodes.length&&1===s.length)s[u](this[0]),a=this;else{for(n=0,i=s.length;n<i;n++)t=(0<(w=n)?this.clone(!0):this).get(),c(s[n])[u](t),a=a.concat(t);w=0,a=this.pushStack(a,l,s.selector)}return o=q,q=null,c.tmpl.complete(o),a}}),c.fn.extend({tmpl:function(e,t,n){return c.tmpl(this[0],e,t,n)},tmplItem:function(){return c.tmplItem(this[0])},template:function(e){return c.template(e,this[0])},domManip:function(e,t,n){if(e[0]&&c.isArray(e[0])){for(var i,o=c.makeArray(arguments),a=e[0],s=a.length,r=0;r<s&&!(i=c.data(a[r++],"tmplItem")););i&&w&&(o[2]=function(e){c.tmpl.afterManip(this,e,n)}),v.apply(this,o)}else v.apply(this,arguments);return w=0,!q&&c.tmpl.complete(y),this}}),c.extend({tmpl:function(t,e,n,i){var o,a=!i;if(a)i=C,t=c.template[t]||c.template(null,t),b={};else if(!t)return t=i.tmpl,(y[i.key]=i).nodes=[],i.wrapped&&r(i,i.wrapped),c(s(i,null,i.tmpl(c,i)));return t?("function"==typeof e&&(e=e.call(i||{})),n&&n.wrapped&&r(n,n.wrapped),o=c.isArray(e)?c.map(e,function(e){return e?u(n,i,t,e):null}):[u(n,i,t,e)],a?c(s(i,null,o)):o):[]},tmplItem:function(e){var t;for(e instanceof c&&(e=e[0]);e&&1===e.nodeType&&!(t=c.data(e,"tmplItem"))&&(e=e.parentNode););return t||C},template:function(e,t){return t?("string"==typeof t?t=n(t):t instanceof c&&(t=t[0]||{}),t.nodeType&&(t=c.data(t,"tmpl")||c.data(t,"tmpl",n(t.innerHTML))),"string"==typeof e?c.template[e]=t:t):e?"string"!=typeof e?c.template(null,e):c.template[e]||c.template(null,o.test(e)?e:c(e)):null},encode:function(e){return(""+e).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")}}),c.extend(c.tmpl,{tag:{tmpl:{_default:{$2:"null"},open:"if($notnull_1){__=__.concat($item.nest($1,$2));}"},wrap:{_default:{$2:"null"},open:"$item.calls(__,$1,$2);__=[];",close:"call=$item.calls();__=call._.concat($item.wrap(call,__));"},each:{_default:{$2:"$index, $value"},open:"if($notnull_1){$.each($1a,function($2){with(this){",close:"}});}"},"if":{open:"if(($notnull_1) && $1a){",close:"}"},"else":{_default:{$1:"true"},open:"}else if(($notnull_1) && $1a){"},html:{open:"if($notnull_1){__.push($1a);}"},"=":{_default:{$1:"$data"},open:"if($notnull_1){__.push($.encode($1a));}"},"!":{open:""}},complete:function(){y={}},afterManip:function(e,t,n){var i=11===t.nodeType?c.makeArray(t.childNodes):1===t.nodeType?[t]:[];n.call(e,t),l(i),w++}})}(jQuery);var qq=qq||{};qq.extend=function(e,t){for(var n in t)e[n]=t[n]},qq.indexOf=function(e,t,n){if(e.indexOf)return e.indexOf(t,n);n=n||0;var i=e.length;for(n<0&&(n+=i);n<i;n++)if(n in e&&e[n]===t)return n;return-1},qq.getUniqueId=function(){var e=0;return function(){return e++}}(),qq.attach=function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on"+t,n)},qq.detach=function(e,t,n){e.removeEventListener?e.removeEventListener(t,n,!1):e.attachEvent&&e.detachEvent("on"+t,n)},qq.preventDefault=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1},qq.insertBefore=function(e,t){t.parentNode.insertBefore(e,t)},qq.remove=function(e){e.parentNode.removeChild(e)},qq.contains=function(e,t){return e==t||(e.contains?e.contains(t):!!(8&t.compareDocumentPosition(e)))},qq.toElement=function(){var n=document.createElement("div");return function(e){n.innerHTML=e;var t=n.firstChild;return n.removeChild(t),t}}(),qq.css=function(e,t){null!=t.opacity&&"string"!=typeof e.style.opacity&&"undefined"!=typeof e.filters&&(t.filter="alpha(opacity="+Math.round(100*t.opacity)+")"),qq.extend(e.style,t)},qq.hasClass=function(e,t){return new RegExp("(^| )"+t+"( |$)").test(e.className)},qq.addClass=function(e,t){qq.hasClass(e,t)||(e.className+=" "+t)},qq.removeClass=function(e,t){var n=new RegExp("(^| )"+t+"( |$)");e.className=e.className.replace(n," ").replace(/^\s+|\s+$/g,"")},qq.setText=function(e,t){e.innerText=t,e.textContent=t},qq.children=function(e){for(var t=[],n=e.firstChild;n;)1==n.nodeType&&t.push(n),n=n.nextSibling;return t},qq.getByClass=function(e,t){if(e.querySelectorAll)return e.querySelectorAll("."+t);for(var n=[],i=e.getElementsByTagName("*"),o=i.length,a=0;a<o;a++)qq.hasClass(i[a],t)&&n.push(i[a]);return n},qq.obj2url=function(e,i,t){var o=[],n="&",a=function(e,t){var n=i?/\[\]$/.test(i)?i:i+"["+t+"]":t;"undefined"!=n&&"undefined"!=t&&o.push("object"==typeof e?qq.obj2url(e,n,!0):"[object Function]"===Object.prototype.toString.call(e)?encodeURIComponent(n)+"="+encodeURIComponent(e()):encodeURIComponent(n)+"="+encodeURIComponent(e))};if(!t&&i)n=/\?/.test(i)?/\?$/.test(i)?"":"&":"?",o.push(i),o.push(qq.obj2url(e));else if("[object Array]"===Object.prototype.toString.call(e)&&void 0!==e)for(var s=0,r=e.length;s<r;++s)a(e[s],s);else if(null!=e&&"object"==typeof e)for(var s in e)a(e[s],s);else o.push(encodeURIComponent(i)+"="+encodeURIComponent(e));return o.join(n).replace(/^&/,"").replace(/%20/g,"+")};var qq=qq||{};qq.FileUploaderBasic=function(e){this._options={debug:!1,action:"/server/upload",params:{},button:null,multiple:!0,maxConnections:3,method:"POST",fieldName:"qqfile",allowedExtensions:[],sizeLimit:0,minSizeLimit:0,maxFilesCount:0,minFilesCount:0,onSubmit:function(){},onProgress:function(){},onComplete:function(){},onCancel:function(){},messages:{typeError:"{file} has invalid extension. Only {extensions} are allowed.",sizeError:"{file} is too large, maximum file size is {sizeLimit}.",minSizeError:"{file} is too small, minimum file size is {minSizeLimit}.",emptyError:"{file} is empty, please select files again without it.",onLeave:"The files are being uploaded, if you leave now the upload will be cancelled.",maxFilesError:"You must select less then {maxFilesCount} files.",minFilesError:"You must select more then {minFilesCount} files."},showMessage:function(e){alert(e)}},qq.extend(this._options,e),this._filesInProgress=0,this._filesUploaded=0,this._handler=this._createUploadHandler(),this._options.button&&(this._button=this._createUploadButton(this._options.button)),this._preventLeaveInProgress()},qq.FileUploaderBasic.prototype={setParams:function(e){this._options.params=e},getInProgress:function(){return this._filesInProgress},_createUploadButton:function(e){var t=this;return new qq.UploadButton({element:e,multiple:this._options.multiple&&qq.UploadHandlerXhr.isSupported(),onChange:function(e){t._onInputChange(e)}})},_createUploadHandler:function(){var e,o=this;return e=qq.UploadHandlerXhr.isSupported()?"UploadHandlerXhr":"UploadHandlerForm",new qq[e]({debug:this._options.debug,action:this._options.action,maxConnections:this._options.maxConnections,fieldName:this._options.fieldName,method:this._options.method,onProgress:function(e,t,n,i){o._onProgress(e,t,n,i),o._options.onProgress(e,t,n,i)},onComplete:function(e,t,n){o._onComplete(e,t,n),o._options.onComplete(e,t,n)},onCancel:function(e,t){o._onCancel(e,t),o._options.onCancel(e,t)}})},_preventLeaveInProgress:function(){var t=this;qq.attach(window,"beforeunload",function(e){if(t._filesInProgress)return(e=e||window.event).returnValue=t._options.messages.onLeave,t._options.messages.onLeave})},_onSubmit:function(){this._filesInProgress++},_onProgress:function(){},_onComplete:function(e,t,n){this._filesInProgress--,n.error?this._options.showMessage(n.error):this._filesUploaded++},_onCancel:function(){this._filesInProgress--},_onInputChange:function(e){this._handler instanceof qq.UploadHandlerXhr?this._uploadFileList(e.files):this._validateFile(e)&&this._uploadFile(e),this._button.reset()},_uploadFileList:function(e){if(this._validateFiles(e))for(var t=0;t<e.length;t++)this._uploadFile(e[t])},_uploadFile:function(e){var t=this._handler.add(e),n=this._handler.getName(t);!1!==this._options.onSubmit(t,n)&&(this._onSubmit(t,n),this._handler.upload(t,this._options.params))},_validateFiles:function(e){var t=this._filesUploaded+e.length;if(0<this._options.maxFilesCount&&t>this._options.maxFilesCount)return this._error("maxFilesError","name"),!1;if(0<this._options.minFilesCount&&t<this._options.minFilesCount)return this._error("minFilesError","name"),!1;for(var n=0;n<e.length;n++)if(!this._validateFile(e[n]))return!1;return!0},_validateFile:function(e){var t,n;return e.value?t=e.value.replace(/.*(\/|\\)/,""):(t=null!=e.fileName?e.fileName:e.name,n=null!=e.fileSize?e.fileSize:e.size),this._isAllowedExtension(t)?0===n?(this._error("emptyError",t),!1):n&&this._options.sizeLimit&&n>this._options.sizeLimit?(this._error("sizeError",t),!1):!(n&&n<this._options.minSizeLimit)||(this._error("minSizeError",t),!1):(this._error("typeError",t),!1)},_error:function(e,t){function n(e,t){i=i.replace(e,t)}var i=this._options.messages[e];n("{file}",this._formatFileName(t)),n("{extensions}",this._options.allowedExtensions.join(", ")),n("{sizeLimit}",this._formatSize(this._options.sizeLimit)),n("{minSizeLimit}",this._formatSize(this._options.minSizeLimit)),n("{maxFilesCount}",this._options.maxFilesCount),n("{minFilesCount}",this._options.minFilesCount),this._options.showMessage(i)},_formatFileName:function(e){return 33<e.length&&(e=e.slice(0,19)+"..."+e.slice(-13)),e},_isAllowedExtension:function(e){var t=-1!==e.indexOf(".")?e.replace(/.*[.]/,"").toLowerCase():"",n=this._options.allowedExtensions;if(!n.length)return!0;for(var i=0;i<n.length;i++)if(n[i].toLowerCase()==t)return!0;return!1},_formatSize:function(e){for(var t=-1;t++,99<(e/=1024););return Math.max(e,.1).toFixed(1)+["kB","MB","GB","TB","PB","EB"][t]}},qq.FileUploader=function(e){qq.FileUploaderBasic.apply(this,arguments),qq.extend(this._options,{element:null,listElement:null,template:'<div class="qq-uploader"><div class="qq-upload-drop-area"><span>Drop files here to upload</span></div><div class="qq-upload-button">Upload a file</div><ul class="qq-upload-list"></ul></div>',fileTemplate:'<li><span class="qq-upload-file"></span><span class="qq-upload-spinner"></span><span class="qq-upload-size"></span><a class="qq-upload-cancel" href="#">Cancel</a><span class="qq-upload-failed-text">Failed</span></li>',classes:{button:"qq-upload-button",drop:"qq-upload-drop-area",dropActive:"qq-upload-drop-area-active",list:"qq-upload-list",file:"qq-upload-file",spinner:"qq-upload-spinner",size:"qq-upload-size",cancel:"qq-upload-cancel",success:"qq-upload-success",fail:"qq-upload-fail"}}),qq.extend(this._options,e),this._element=this._options.element,this._element.innerHTML=this._options.template,this._listElement=this._options.listElement||this._find(this._element,"list"),this._classes=this._options.classes,this._button=this._createUploadButton(this._find(this._element,"button")),this._bindCancelEvent(),this._setupDragDrop()},qq.extend(qq.FileUploader.prototype,qq.FileUploaderBasic.prototype),qq.extend(qq.FileUploader.prototype,{_find:function(e,t){var n=qq.getByClass(e,this._options.classes[t])[0];if(!n)throw new Error("element not found "+t);return n},_setupDragDrop:function(){var t=this,n=this._find(this._element,"drop"),i=new qq.UploadDropZone({element:n,onEnter:function(e){qq.addClass(n,t._classes.dropActive),e.stopPropagation()},onLeave:function(e){e.stopPropagation()},onLeaveNotDescendants:function(){qq.removeClass(n,t._classes.dropActive)},onDrop:function(e){n.style.display="none",qq.removeClass(n,t._classes.dropActive),t._uploadFileList(e.dataTransfer.files)}});n.style.display="none",qq.attach(document,"dragenter",function(e){i._isValidFileDrag(e)&&(n.style.display="block")}),qq.attach(document,"dragleave",function(e){if(i._isValidFileDrag(e)){var t=document.elementFromPoint(e.clientX,e.clientY);t&&"HTML"!=t.nodeName||(n.style.display="none")}})},_onSubmit:function(e,t){qq.FileUploaderBasic.prototype._onSubmit.apply(this,arguments),this._addToList(e,t)},_onProgress:function(e,t,n,i){qq.FileUploaderBasic.prototype._onProgress.apply(this,arguments);var o,a=this._getItemByFileId(e),s=this._find(a,"size");s.style.display="inline",o=n!=i?Math.round(n/i*100)+"% from "+this._formatSize(i):this._formatSize(i),qq.setText(s,o)},_onComplete:function(e,t,n){qq.FileUploaderBasic.prototype._onComplete.apply(this,arguments);var i=this._getItemByFileId(e);qq.remove(this._find(i,"cancel")),qq.remove(this._find(i,"spinner")),n.success?qq.addClass(i,this._classes.success):qq.addClass(i,this._classes.fail)},_addToList:function(e,t){var n=qq.toElement(this._options.fileTemplate);n.qqFileId=e;var i=this._find(n,"file");qq.setText(i,this._formatFileName(t)),this._find(n,"size").style.display="none",this._listElement.appendChild(n)},_getItemByFileId:function(e){for(var t=this._listElement.firstChild;t;){if(t.qqFileId==e)return t;t=t.nextSibling}},_bindCancelEvent:function(){var i=this,e=this._listElement;qq.attach(e,"click",function(e){var t=(e=e||window.event).target||e.srcElement;if(qq.hasClass(t,i._classes.cancel)){qq.preventDefault(e);var n=t.parentNode;i._handler.cancel(n.qqFileId),qq.remove(n)}})}}),qq.UploadDropZone=function(e){this._options={element:null,onEnter:function(){},onLeave:function(){},onLeaveNotDescendants:function(){},onDrop:function(){}},qq.extend(this._options,e),this._element=this._options.element,this._disableDropOutside(),this._attachEvents()},qq.UploadDropZone.prototype={_disableDropOutside:function(){qq.UploadDropZone.dropOutsideDisabled||(qq.attach(document,"dragover",function(e){e.dataTransfer&&(e.dataTransfer.dropEffect="none",e.preventDefault())}),qq.UploadDropZone.dropOutsideDisabled=!0)},_attachEvents:function(){var n=this;qq.attach(n._element,"dragover",function(e){if(n._isValidFileDrag(e)){var t=e.dataTransfer.effectAllowed;e.dataTransfer.dropEffect="move"==t||"linkMove"==t?"move":"copy",e.stopPropagation(),e.preventDefault()}}),qq.attach(n._element,"dragenter",function(e){n._isValidFileDrag(e)&&n._options.onEnter(e)}),qq.attach(n._element,"dragleave",function(e){if(n._isValidFileDrag(e)){n._options.onLeave(e);var t=document.elementFromPoint(e.clientX,e.clientY);qq.contains(this,t)||n._options.onLeaveNotDescendants(e)}}),qq.attach(n._element,"drop",function(e){n._isValidFileDrag(e)&&(e.preventDefault(),n._options.onDrop(e))})},_isValidFileDrag:function(e){var t=e.dataTransfer,n=-1<navigator.userAgent.indexOf("AppleWebKit");return t&&"none"!=t.effectAllowed&&(t.files||!n&&t.types.contains&&t.types.contains("Files"))}},qq.UploadButton=function(e){this._options={element:null,multiple:!1,name:"file",onChange:function(){},hoverClass:"qq-upload-button-hover",focusClass:"qq-upload-button-focus"},qq.extend(this._options,e),this._element=this._options.element,qq.css(this._element,{position:"relative",overflow:"hidden",direction:"ltr"}),this._input=this._createInput()},qq.UploadButton.prototype={getInput:function(){return this._input},reset:function(){this._input.parentNode&&qq.remove(this._input),qq.removeClass(this._element,this._options.focusClass),this._input=this._createInput()},_createInput:function(){var e=document.createElement("input");this._options.multiple&&e.setAttribute("multiple","multiple"),e.setAttribute("type","file"),e.setAttribute("name",this._options.name),qq.css(e,{position:"absolute",right:0,top:0,fontFamily:"Arial",fontSize:"118px",margin:0,padding:0,cursor:"pointer",opacity:0}),this._element.appendChild(e);var t=this;return qq.attach(e,"change",function(){t._options.onChange(e)}),qq.attach(e,"mouseover",function(){qq.addClass(t._element,t._options.hoverClass)}),qq.attach(e,"mouseout",function(){qq.removeClass(t._element,t._options.hoverClass)}),qq.attach(e,"focus",function(){qq.addClass(t._element,t._options.focusClass)}),qq.attach(e,"blur",function(){qq.removeClass(t._element,t._options.focusClass)}),window.attachEvent&&e.setAttribute("tabIndex","-1"),e}},qq.UploadHandlerAbstract=function(e){this._options={debug:!1,action:"/upload.php",method:"POST",fieldName:"qqfile",maxConnections:999,onProgress:function(){},onComplete:function(){},onCancel:function(){}},qq.extend(this._options,e),this._queue=[],this._params=[]},qq.UploadHandlerAbstract.prototype={log:function(e){this._options.debug&&window.console&&console.log("[uploader] "+e)},add:function(){},upload:function(e,t){var n=this._queue.push(e),i={};qq.extend(i,t),this._params[e]=i,n<=this._options.maxConnections&&this._upload(e,this._params[e])},cancel:function(e){this._cancel(e),this._dequeue(e)},cancelAll:function(){for(var e=0;e<this._queue.length;e++)this._cancel(this._queue[e]);this._queue=[]},getName:function(){},getSize:function(){},getQueue:function(){return this._queue},_upload:function(){},_cancel:function(){},_dequeue:function(e){var t=qq.indexOf(this._queue,e);this._queue.splice(t,1);var n=this._options.maxConnections;if(this._queue.length>=n&&t<n){var i=this._queue[n-1];this._upload(i,this._params[i])}}},qq.UploadHandlerForm=function(e){qq.UploadHandlerAbstract.apply(this,arguments),this._inputs={}},qq.extend(qq.UploadHandlerForm.prototype,qq.UploadHandlerAbstract.prototype),qq.extend(qq.UploadHandlerForm.prototype,{add:function(e){e.setAttribute("name",this._options.fieldName);var t="qq-upload-handler-iframe"+qq.getUniqueId();return(this._inputs[t]=e).parentNode&&qq.remove(e),t},getName:function(e){return this._inputs[e].value.replace(/.*(\/|\\)/,"")},_cancel:function(e){this._options.onCancel(e,this.getName(e)),delete this._inputs[e];var t=document.getElementById(e);t&&(t.setAttribute("src","javascript:false;"),qq.remove(t))},_upload:function(t,e){var n=this._inputs[t];if(!n)throw new Error("file with passed id was not added, or already uploaded or cancelled");var i=this.getName(t),o=this._createIframe(t),a=this._createForm(o,e);a.appendChild(n);var s=this;return this._attachLoadEvent(o,function(){s.log("iframe loaded");var e=s._getIframeContentJSON(o);s._options.onComplete(t,i,e),s._dequeue(t),delete s._inputs[t],setTimeout(function(){qq.remove(o)},1)}),a.submit(),qq.remove(a),t},_attachLoadEvent:function(e,t){qq.attach(e,"load",function(){e.parentNode&&(e.contentDocument&&e.contentDocument.body&&"false"==e.contentDocument.body.innerHTML||t())})},_getIframeContentJSON:function(iframe){var doc=iframe.contentDocument?iframe.contentDocument:iframe.contentWindow.document,response;this.log("converting iframe's innerHTML to JSON"),this.log("innerHTML = "+doc.body.innerHTML);try{response=eval("("+doc.body.innerHTML+")")}catch(err){response={}}return response},_createIframe:function(e){var t=qq.toElement('<iframe src="javascript:false;" name="'+e+'" />');return t.setAttribute("id",e),t.style.display="none",document.body.appendChild(t),t},_createForm:function(e,t){var n=qq.toElement('<form enctype="multipart/form-data"></form>'),i=qq.obj2url(t,this._options.action);n.setAttribute("method",this._options.method),n.setAttribute("action",i),n.setAttribute("target",e.name),n.style.display="none";var o=$('meta[name="csrf-token"]').attr("content"),a=$('meta[name="csrf-param"]').attr("content"),s=qq.toElement('<input type="hidden" />');return s.setAttribute("name",a),s.setAttribute("value",o),n.appendChild(s),document.body.appendChild(n),n}}),qq.UploadHandlerXhr=function(e){qq.UploadHandlerAbstract.apply(this,arguments),this._files=[],this._xhrs=[],this._loaded=[]},qq.UploadHandlerXhr.isSupported=function(){var e=document.createElement("input");return e.type="file","multiple"in e&&"undefined"!=typeof File&&"undefined"!=typeof(new XMLHttpRequest).upload},qq.extend(qq.UploadHandlerXhr.prototype,qq.UploadHandlerAbstract.prototype),qq.extend(qq.UploadHandlerXhr.prototype,{add:function(e){if(!(e instanceof File))throw new Error("Passed obj in not a File (in qq.UploadHandlerXhr)");return this._files.push(e)-1},getName:function(e){var t=this._files[e];return null!=t.fileName?t.fileName:t.name},getSize:function(e){var t=this._files[e];return null!=t.fileSize?t.fileSize:t.size},getLoaded:function(e){return this._loaded[e]||0},_upload:function(t,e){var n=this._files[t],i=this.getName(t),o=this.getSize(t);this._loaded[t]=0;var a=this._xhrs[t]=new XMLHttpRequest,s=this;a.upload.onprogress=function(e){e.lengthComputable&&(s._loaded[t]=e.loaded,s._options.onProgress(t,i,e.loaded,e.total))},a.onreadystatechange=function(){4==a.readyState&&s._onComplete(t,a)},(e=e||{})[this._options.fieldName]=i;var r=qq.obj2url(e,this._options.action);a.open(this._options.method,r,!0),a.setRequestHeader("X-Requested-With","XMLHttpRequest"),a.setRequestHeader("X-File-Name",encodeURIComponent(i)),a.setRequestHeader("X-File-Size",o),a.setRequestHeader("X-File-Type",n.type),a.setRequestHeader("Content-Type","application/octet-stream"),$.rails&&$.rails.CSRFProtection(a),a.send(n)},_onComplete:function(id,xhr){if(this._files[id]){var name=this.getName(id),size=this.getSize(id);if(this._options.onProgress(id,name,size,size),-1<[200,201].indexOf(xhr.status)){var response;this.log("xhr - server response received"),this.log("responseText = "+xhr.responseText);try{response=eval("("+xhr.responseText+")")}catch(err){response={}}this._options.onComplete(id,name,response)}else this._options.onComplete(id,name,{});this._files[id]=null,this._xhrs[id]=null,this._dequeue(id)}},_cancel:function(e){this._options.onCancel(e,this.getName(e)),this._files[e]=null,this._xhrs[e]&&(this._xhrs[e].abort(),this._xhrs[e]=null)}}),function(p){"use strict";p.support.pushState=window.history&&window.history.pushState&&window.history.replaceState&&!navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]|WebApps\/.+CFNetwork)/);var t={init:function(e,t){t.options=p.extend({scrollContainer:window,scrollPadding:100,scrollEventDelay:300},e),this.options=t.options,this.container=t.container,(t.scrollModule=this)._toplock=!0,this._bottomlock=!0,this.scrollContainer=p(this.options.scrollContainer),this.updateEntities(),this.sortMarkers(),this.currentPage=null,this.container.on("jes:afterPageLoad",p.proxy(function(e,t,n){if(this.updateEntities(),this.sortMarkers(),this.checkMarker(),"top"==n){var i=this.markers[1].top,o=this.scrollContainer.scrollTop();this.scrollContainer.scrollTop(o+i)}},this)),this.bind()},updateEntities:function(){this.entities=p(this.options.entity,this.container)},sortMarkers:function(){var e=[];p(".jes-marker",this.container).each(function(){e.push({top:p(this).position().top,url:p(this).data("jesUrl")})}),this.markers=e},checkMarker:function(){for(var e=this.markers[0],t=this.scrollContainer.scrollTop(),n=1;n<this.markers.length&&t>this.markers[n].top;n++)e=this.markers[n];e.url!=this.currentPage&&(this.currentPage=e.url,p(this.container).trigger("jes:scrollToPage",e.url))},bind:function(){this.scrollContainer.on("scroll.jes",p.proxy(function(e){this._tId||(this.scrollHandler(e),this._tId=setTimeout(p.proxy(function(){this._tId=null},this),this.options.scrollEventDelay))},this))},unbind:function(){p(this.options.scrollContainer).off("scroll.jes")},scrollHandler:function(){var e=this.scrollContainer,t=this.entities,n=t.first(),i=t.last(),o=e.scrollTop(),a=o+e.height(),s=n.position().top+this.options.scrollPadding,r=i.outerHeight()+i.position().top-this.options.scrollPadding;o<s?this._toplock||(p(this.container).trigger("jes:topThreshold"),this._toplock=!0):this._toplock=!1,r<a?this._bottomlock||(p(this.container).trigger("jes:bottomThreshold"),this._bottomlock=!0):this._bottomlock=!1,this.checkMarker()}},n={init:function(e,t){t.options=p.extend({},e),this.options=t.options,this.container=t.container,this.setMarker(p(this.options.entity,this.container).first(),location.href),t.ajaxModule=this},loadPage:function(s,r,l){var u={top:{find:"first",inject:"insertBefore"},bottom:{find:"last",inject:"insertAfter"}}[r];this.container.trigger("jes:beforePageLoad",[s,r]),p.get(s,null,p.proxy(function(e){var t=p("<div>").html(e),n=this.options.container,i=p(n,t).first();if(i.length){var o=i.find(this.options.entity);"bottom"==r&&o.each(function(){var e=p(this).attr("id");e&&p("#"+e,this.container).remove()});var a=p(this.options.entity,n)[u.find]();o[u.inject](a),this.setMarker(o.first(),s)}p.isFunction(l)&&l(t),this.container.trigger("jes:afterPageLoad",[s,r,t,o])},this),"html")},setMarker:function(e,t){e.addClass("jes-marker").data("jesUrl",t)}},i={init:function(e,a){a.options=p.extend({nextPage:".pagination a[rel=next]",previousPage:".pagination a[rel=previous]"},e),this.options=a.options,this.container=a.container,p.each([{selector:this.options.nextPage,event:"jes:bottomThreshold.navigation",placement:"bottom"},{selector:this.options.previousPage,event:"jes:topThreshold.navigation",placement:"top"}],p.proxy(function(e,n){if(n.element=p(n.selector),n.element.length){var i=n.element.prop("href"),o=!1,t=function(){!o&&i&&(o=!0,a.ajaxModule.loadPage(i,n.placement,p.proxy(function(e){var t=p(n.selector,p(e));t.length?(o=!1,i=t.prop("href"),n.element.attr("href",i)):(p(this).off(n.event),n.element.remove())},this)))};p(this.container).on(n.event,t),p(n.element).on("click",p.proxy(function(e){e.preventDefault(),t.apply(this.container)},this))}},this))}},o={init:function(e,t){p.support.pushState&&t.container.on("jes:scrollToPage",function(e,t){history.replaceState({},null,t)})}};p.endlessScroll=function(e){if(this.options=p.extend(!0,{container:"#container",entity:".entity",_modules:[n,t,i,o],modules:[]},e),this.container=p(this.options.container),!this.container.length)throw"Container for endless scroll isn't available on the page";return p.merge(this.options.modules,this.options._modules),this.options.modules.forEach(p.proxy(function(e){e.init(this.options,this)},this)),this}}(jQuery),function(l,u){var p;l.rails=p={linkClickSelector:"a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",inputChangeSelector:"select[data-remote], input[data-remote], textarea[data-remote]",formSubmitSelector:"form",formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not(button[type])",disableSelector:"input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",enableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",requiredInputSelector:"input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",fileInputSelector:"input:file",linkDisableSelector:"a[data-disable-with]",CSRFProtection:function(e){var t=l('meta[name="csrf-token"]').attr("content");t&&e.setRequestHeader("X-CSRF-Token",t)},fire:function(e,t,n){var i=l.Event(t);return e.trigger(i,n),!1!==i.result},confirm:function(e){return confirm(e)},ajax:function(e){return l.ajax(e)},handleRemote:function(i){var e,t,n,o,a=i.data("cross-domain")||null,s=i.data("type")||l.ajaxSettings&&l.ajaxSettings.dataType;if(p.fire(i,"ajax:before")){if(i.is("form")){e=i.attr("method"),t=i.attr("action"),n=i.serializeArray();var r=i.data("ujs:submit-button");r&&(n.push(r),i.data("ujs:submit-button",null))}else i.is(p.inputChangeSelector)?(e=i.data("method"),t=i.data("url"),n=i.serialize(),i.data("params")&&(n=n+"&"+i.data("params"))):(e=i.data("method"),t=i.attr("href"),n=i.data("params")||null);return o={type:e||"GET",data:n,dataType:s,crossDomain:a,beforeSend:function(e,t){return t.dataType===u&&e.setRequestHeader("accept","*/*;q=0.5, "+t.accepts.script),p.fire(i,"ajax:beforeSend",[e,t])},success:function(e,t,n){i.trigger("ajax:success",[e,t,n])},complete:function(e,t){i.trigger("ajax:complete",[e,t])},error:function(e,t,n){i.trigger("ajax:error",[e,t,n])}},t&&(o.url=t),p.ajax(o)}return!1},handleMethod:function(e){var t=e.attr("href"),n=e.data("method"),i=e.attr("target"),o=l("meta[name=csrf-token]").attr("content"),a=l("meta[name=csrf-param]").attr("content"),s=l('<form method="post" action="'+t+'"></form>'),r='<input name="_method" value="'+n+'" type="hidden" />';a!==u&&o!==u&&(r+='<input name="'+a+'" value="'+o+'" type="hidden" />'),i&&s.attr("target",i),s.hide().append(r).appendTo("body"),s.submit()},disableFormElements:function(e){e.find(p.disableSelector).each(function(){var e=l(this),t=e.is("button")?"html":"val";e.data("ujs:enable-with",e[t]()),e[t](e.data("disable-with")),e.prop("disabled",!0)})},enableFormElements:function(e){e.find(p.enableSelector).each(function(){var e=l(this),t=e.is("button")?"html":"val";e.data("ujs:enable-with")&&e[t](e.data("ujs:enable-with")),e.prop("disabled",!1)})},allowAction:function(e){var t,n=e.data("confirm"),i=!1;return!n||(p.fire(e,"confirm")&&(i=p.confirm(n),t=p.fire(e,"confirm:complete",[i])),i&&t)},blankInputs:function(e,t,n){var i,o=l(),a=t||"input,textarea";return e.find(a).each(function(){i=l(this),(n?i.val():!i.val())&&(o=o.add(i))}),!!o.length&&o},nonBlankInputs:function(e,t){return p.blankInputs(e,t,!0)},stopEverything:function(e){return l(e.target).trigger("ujs:everythingStopped"),e.stopImmediatePropagation(),!1},callFormSubmitBindings:function(e,n){var t=e.data("events"),i=!0;return t!==u&&t.submit!==u&&l.each(t.submit,function(e,t){if("function"==typeof t.handler)return i=t.handler(n)}),i},disableElement:function(e){e.data("ujs:enable-with",e.html()),e.html(e.data("disable-with")),e.bind("click.railsDisable",function(e){return p.stopEverything(e)})},enableElement:function(e){e.data("ujs:enable-with")!==u&&(e.html(e.data("ujs:enable-with")),e.data("ujs:enable-with",!1)),e.unbind("click.railsDisable")}},l.ajaxPrefilter(function(e,t,n){e.crossDomain||p.CSRFProtection(n)}),l(document).delegate(p.linkDisableSelector,"ajax:complete",function(){p.enableElement(l(this))}),l(document).delegate(p.linkClickSelector,"click.rails",function(e){var t=l(this),n=t.data("method"),i=t.data("params");return p.allowAction(t)?(t.is(p.linkDisableSelector)&&p.disableElement(t),t.data("remote")!==u?!(
!e.metaKey&&!e.ctrlKey||n&&"GET"!==n||i)||(!1===p.handleRemote(t)&&p.enableElement(t),!1):t.data("method")?(p.handleMethod(t),!1):void 0):p.stopEverything(e)}),l(document).delegate(p.inputChangeSelector,"change.rails",function(e){var t=l(this);return p.allowAction(t)?(p.handleRemote(t),!1):p.stopEverything(e)}),l(document).delegate(p.formSubmitSelector,"submit.rails",function(e){var t=l(this),n=t.data("remote")!==u,i=p.blankInputs(t,p.requiredInputSelector),o=p.nonBlankInputs(t,p.fileInputSelector);return p.allowAction(t)?i&&t.attr("novalidate")==u&&p.fire(t,"ajax:aborted:required",[i])?p.stopEverything(e):n?o?p.fire(t,"ajax:aborted:file",[o]):!l.support.submitBubbles&&l().jquery<"1.7"&&!1===p.callFormSubmitBindings(t,e)?p.stopEverything(e):(p.handleRemote(t),!1):void setTimeout(function(){p.disableFormElements(t)},13):p.stopEverything(e)}),l(document).delegate(p.formInputClickSelector,"click.rails",function(e){var t=l(this);if(!p.allowAction(t))return p.stopEverything(e);var n=t.attr("name"),i=n?{name:n,value:t.val()}:null;t.closest("form").data("ujs:submit-button",i)}),l(document).delegate(p.formSubmitSelector,"ajax:beforeSend.rails",function(e){this==e.target&&p.disableFormElements(l(this))}),l(document).delegate(p.formSubmitSelector,"ajax:complete.rails",function(e){this==e.target&&p.enableFormElements(l(this))})}(jQuery),$.QueryString=function(e){if(""==e)return{};for(var t={},n=0;n<e.length;++n){var i=e[n].split("=");2==i.length&&(t[i[0]]=decodeURIComponent(i[1].replace(/\+/g," ")))}return t}(window.location.search.substr(1).split("&")),$(document).ready(function(){var e="div.gal-item div.gal-inner-holder";$(document).on("mouseover",e,function(){$(this).addClass("hover")}).on("mouseout",e,function(){$(this).removeClass("hover")}).on("click",e,function(){var e=$(this).parents("div.gal-item").data("url");CKEDITOR.tools.callFunction(CKEditorFuncNum,e),window.close()}),$(document).on("ajax:complete","div.gal-item a.gal-del",function(){$(this).parents("div.gal-item").remove()});var t=$.endlessScroll({container:".fileupload-list",entity:".gal-item",scrollPadding:100});t.scrollModule.unbind(),window.setTimeout(function(){t.scrollModule.bind()},1e3)}),qq.FileUploader.instances=new Object,qq.FileUploaderInput=function(e){qq.FileUploaderBasic.apply(this,arguments),qq.extend(this._options,{element:null,listElement:null,template_id:"#fileupload_tmpl",classes:{button:"fileupload-button",drop:"fileupload-drop-area",dropActive:"fileupload-drop-area-active",list:"fileupload-list",preview:"fileupload-preview",file:"fileupload-file",spinner:"fileupload-spinner",size:"fileupload-size",cancel:"fileupload-cancel",success:"fileupload-success",fail:"fileupload-fail"}}),qq.extend(this._options,e),this._element=document.getElementById(this._options.element),this._listElement=this._options.listElement||this._find(this._element,"list"),this._classes=this._options.classes,this._button=this._createUploadButton(this._find(this._element,"button")),qq.FileUploader.instances[this._element.id]=this},qq.extend(qq.FileUploaderInput.prototype,qq.FileUploaderBasic.prototype),qq.extend(qq.FileUploaderInput.prototype,{_find:function(e,t){var n=qq.getByClass(e,this._options.classes[t])[0];if(!n)throw alert(t),new Error("element not found "+t);return n},_setupDragDrop:function(){var t=this,n=this._find(this._element,"drop"),i=new qq.UploadDropZone({element:n,onEnter:function(e){qq.addClass(n,t._classes.dropActive),e.stopPropagation()},onLeave:function(e){e.stopPropagation()},onLeaveNotDescendants:function(){qq.removeClass(n,t._classes.dropActive)},onDrop:function(e){n.style.display="none",qq.removeClass(n,t._classes.dropActive),t._uploadFileList(e.dataTransfer.files)}});n.style.display="none",qq.attach(document,"dragenter",function(e){i._isValidFileDrag(e)&&(n.style.display="block")}),qq.attach(document,"dragleave",function(e){if(i._isValidFileDrag(e)){var t=document.elementFromPoint(e.clientX,e.clientY);t&&"HTML"!=t.nodeName||(n.style.display="none")}})},_onSubmit:function(e,t){qq.FileUploaderBasic.prototype._onSubmit.apply(this,arguments),this._addToList(e,t)},_onProgress:function(e,t,n,i){qq.FileUploaderBasic.prototype._onProgress.apply(this,arguments);var o,a=this._getItemByFileId(e),s=this._find(a,"size");o=n!=i?Math.round(n/i*100)+"% from "+this._formatSize(i):this._formatSize(i),qq.setText(s,o)},_onComplete:function(e,t,n){qq.FileUploaderBasic.prototype._onComplete.apply(this,arguments);var i=this._getItemByFileId(e),o=n.asset?n.asset:n;o&&o.id?(qq.addClass(i,this._classes.success),o.size=this._formatSize(o.size),o.controller=o.type!==undefined&&"ckeditor::picture"==o.type.toLowerCase()?"pictures":"attachment_files",$(i).replaceWith($(this._options.template_id).tmpl(o))):qq.addClass(i,this._classes.fail)},_addToList:function(e,t){if(this._listElement){!1===this._options.multiple&&$(this._listElement).empty();var n={id:0,filename:this._formatFileName(t),size:0,format_created_at:"",url_content:"#",controller:"assets",url_thumb:""},i=$(this._options.template_id).tmpl(n).attr("qqfileid",e);i.find("div.img").html("").addClass("preloader"),i.prependTo(this._listElement),this._bindCancelEvent(i)}},_getItemByFileId:function(e){return $(this._listElement).find("div[qqfileid="+e+"]").get(0)},_bindCancelEvent:function(e){var t=this,n=$(e);n.find("a."+this._classes.cancel).bind("click",function(e){return t._handler.cancel(n.attr("qqfileid")),n.remove(),qq.preventDefault(e),!1})}});
>>>>>>> 0ce8b76e35039cbab0dc8afcfff5dbd974e73a3d
