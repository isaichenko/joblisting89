<<<<<<< HEAD
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
=======
var qq=qq||{};qq.extend=function(e,t){for(var n in t)e[n]=t[n]},qq.indexOf=function(e,t,n){if(e.indexOf)return e.indexOf(t,n);n=n||0;var i=e.length;for(n<0&&(n+=i);n<i;n++)if(n in e&&e[n]===t)return n;return-1},qq.getUniqueId=function(){var e=0;return function(){return e++}}(),qq.attach=function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on"+t,n)},qq.detach=function(e,t,n){e.removeEventListener?e.removeEventListener(t,n,!1):e.attachEvent&&e.detachEvent("on"+t,n)},qq.preventDefault=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1},qq.insertBefore=function(e,t){t.parentNode.insertBefore(e,t)},qq.remove=function(e){e.parentNode.removeChild(e)},qq.contains=function(e,t){return e==t||(e.contains?e.contains(t):!!(8&t.compareDocumentPosition(e)))},qq.toElement=function(){var n=document.createElement("div");return function(e){n.innerHTML=e;var t=n.firstChild;return n.removeChild(t),t}}(),qq.css=function(e,t){null!=t.opacity&&"string"!=typeof e.style.opacity&&"undefined"!=typeof e.filters&&(t.filter="alpha(opacity="+Math.round(100*t.opacity)+")"),qq.extend(e.style,t)},qq.hasClass=function(e,t){return new RegExp("(^| )"+t+"( |$)").test(e.className)},qq.addClass=function(e,t){qq.hasClass(e,t)||(e.className+=" "+t)},qq.removeClass=function(e,t){var n=new RegExp("(^| )"+t+"( |$)");e.className=e.className.replace(n," ").replace(/^\s+|\s+$/g,"")},qq.setText=function(e,t){e.innerText=t,e.textContent=t},qq.children=function(e){for(var t=[],n=e.firstChild;n;)1==n.nodeType&&t.push(n),n=n.nextSibling;return t},qq.getByClass=function(e,t){if(e.querySelectorAll)return e.querySelectorAll("."+t);for(var n=[],i=e.getElementsByTagName("*"),o=i.length,s=0;s<o;s++)qq.hasClass(i[s],t)&&n.push(i[s]);return n},qq.obj2url=function(e,i,t){var o=[],n="&",s=function(e,t){var n=i?/\[\]$/.test(i)?i:i+"["+t+"]":t;"undefined"!=n&&"undefined"!=t&&o.push("object"==typeof e?qq.obj2url(e,n,!0):"[object Function]"===Object.prototype.toString.call(e)?encodeURIComponent(n)+"="+encodeURIComponent(e()):encodeURIComponent(n)+"="+encodeURIComponent(e))};if(!t&&i)n=/\?/.test(i)?/\?$/.test(i)?"":"&":"?",o.push(i),o.push(qq.obj2url(e));else if("[object Array]"===Object.prototype.toString.call(e)&&void 0!==e)for(var a=0,r=e.length;a<r;++a)s(e[a],a);else if(null!=e&&"object"==typeof e)for(var a in e)s(e[a],a);else o.push(encodeURIComponent(i)+"="+encodeURIComponent(e));return o.join(n).replace(/^&/,"").replace(/%20/g,"+")};var qq=qq||{};qq.FileUploaderBasic=function(e){this._options={debug:!1,action:"/server/upload",params:{},button:null,multiple:!0,maxConnections:3,method:"POST",fieldName:"qqfile",allowedExtensions:[],sizeLimit:0,minSizeLimit:0,maxFilesCount:0,minFilesCount:0,onSubmit:function(){},onProgress:function(){},onComplete:function(){},onCancel:function(){},messages:{typeError:"{file} has invalid extension. Only {extensions} are allowed.",sizeError:"{file} is too large, maximum file size is {sizeLimit}.",minSizeError:"{file} is too small, minimum file size is {minSizeLimit}.",emptyError:"{file} is empty, please select files again without it.",onLeave:"The files are being uploaded, if you leave now the upload will be cancelled.",maxFilesError:"You must select less then {maxFilesCount} files.",minFilesError:"You must select more then {minFilesCount} files."},showMessage:function(e){alert(e)}},qq.extend(this._options,e),this._filesInProgress=0,this._filesUploaded=0,this._handler=this._createUploadHandler(),this._options.button&&(this._button=this._createUploadButton(this._options.button)),this._preventLeaveInProgress()},qq.FileUploaderBasic.prototype={setParams:function(e){this._options.params=e},getInProgress:function(){return this._filesInProgress},_createUploadButton:function(e){var t=this;return new qq.UploadButton({element:e,multiple:this._options.multiple&&qq.UploadHandlerXhr.isSupported(),onChange:function(e){t._onInputChange(e)}})},_createUploadHandler:function(){var e,o=this;return e=qq.UploadHandlerXhr.isSupported()?"UploadHandlerXhr":"UploadHandlerForm",new qq[e]({debug:this._options.debug,action:this._options.action,maxConnections:this._options.maxConnections,fieldName:this._options.fieldName,method:this._options.method,onProgress:function(e,t,n,i){o._onProgress(e,t,n,i),o._options.onProgress(e,t,n,i)},onComplete:function(e,t,n){o._onComplete(e,t,n),o._options.onComplete(e,t,n)},onCancel:function(e,t){o._onCancel(e,t),o._options.onCancel(e,t)}})},_preventLeaveInProgress:function(){var t=this;qq.attach(window,"beforeunload",function(e){if(t._filesInProgress)return(e=e||window.event).returnValue=t._options.messages.onLeave,t._options.messages.onLeave})},_onSubmit:function(){this._filesInProgress++},_onProgress:function(){},_onComplete:function(e,t,n){this._filesInProgress--,n.error?this._options.showMessage(n.error):this._filesUploaded++},_onCancel:function(){this._filesInProgress--},_onInputChange:function(e){this._handler instanceof qq.UploadHandlerXhr?this._uploadFileList(e.files):this._validateFile(e)&&this._uploadFile(e),this._button.reset()},_uploadFileList:function(e){if(this._validateFiles(e))for(var t=0;t<e.length;t++)this._uploadFile(e[t])},_uploadFile:function(e){var t=this._handler.add(e),n=this._handler.getName(t);!1!==this._options.onSubmit(t,n)&&(this._onSubmit(t,n),this._handler.upload(t,this._options.params))},_validateFiles:function(e){var t=this._filesUploaded+e.length;if(0<this._options.maxFilesCount&&t>this._options.maxFilesCount)return this._error("maxFilesError","name"),!1;if(0<this._options.minFilesCount&&t<this._options.minFilesCount)return this._error("minFilesError","name"),!1;for(var n=0;n<e.length;n++)if(!this._validateFile(e[n]))return!1;return!0},_validateFile:function(e){var t,n;return e.value?t=e.value.replace(/.*(\/|\\)/,""):(t=null!=e.fileName?e.fileName:e.name,n=null!=e.fileSize?e.fileSize:e.size),this._isAllowedExtension(t)?0===n?(this._error("emptyError",t),!1):n&&this._options.sizeLimit&&n>this._options.sizeLimit?(this._error("sizeError",t),!1):!(n&&n<this._options.minSizeLimit)||(this._error("minSizeError",t),!1):(this._error("typeError",t),!1)},_error:function(e,t){function n(e,t){i=i.replace(e,t)}var i=this._options.messages[e];n("{file}",this._formatFileName(t)),n("{extensions}",this._options.allowedExtensions.join(", ")),n("{sizeLimit}",this._formatSize(this._options.sizeLimit)),n("{minSizeLimit}",this._formatSize(this._options.minSizeLimit)),n("{maxFilesCount}",this._options.maxFilesCount),n("{minFilesCount}",this._options.minFilesCount),this._options.showMessage(i)},_formatFileName:function(e){return 33<e.length&&(e=e.slice(0,19)+"..."+e.slice(-13)),e},_isAllowedExtension:function(e){var t=-1!==e.indexOf(".")?e.replace(/.*[.]/,"").toLowerCase():"",n=this._options.allowedExtensions;if(!n.length)return!0;for(var i=0;i<n.length;i++)if(n[i].toLowerCase()==t)return!0;return!1},_formatSize:function(e){for(var t=-1;t++,99<(e/=1024););return Math.max(e,.1).toFixed(1)+["kB","MB","GB","TB","PB","EB"][t]}},qq.FileUploader=function(e){qq.FileUploaderBasic.apply(this,arguments),qq.extend(this._options,{element:null,listElement:null,template:'<div class="qq-uploader"><div class="qq-upload-drop-area"><span>Drop files here to upload</span></div><div class="qq-upload-button">Upload a file</div><ul class="qq-upload-list"></ul></div>',fileTemplate:'<li><span class="qq-upload-file"></span><span class="qq-upload-spinner"></span><span class="qq-upload-size"></span><a class="qq-upload-cancel" href="#">Cancel</a><span class="qq-upload-failed-text">Failed</span></li>',classes:{button:"qq-upload-button",drop:"qq-upload-drop-area",dropActive:"qq-upload-drop-area-active",list:"qq-upload-list",file:"qq-upload-file",spinner:"qq-upload-spinner",size:"qq-upload-size",cancel:"qq-upload-cancel",success:"qq-upload-success",fail:"qq-upload-fail"}}),qq.extend(this._options,e),this._element=this._options.element,this._element.innerHTML=this._options.template,this._listElement=this._options.listElement||this._find(this._element,"list"),this._classes=this._options.classes,this._button=this._createUploadButton(this._find(this._element,"button")),this._bindCancelEvent(),this._setupDragDrop()},qq.extend(qq.FileUploader.prototype,qq.FileUploaderBasic.prototype),qq.extend(qq.FileUploader.prototype,{_find:function(e,t){var n=qq.getByClass(e,this._options.classes[t])[0];if(!n)throw new Error("element not found "+t);return n},_setupDragDrop:function(){var t=this,n=this._find(this._element,"drop"),i=new qq.UploadDropZone({element:n,onEnter:function(e){qq.addClass(n,t._classes.dropActive),e.stopPropagation()},onLeave:function(e){e.stopPropagation()},onLeaveNotDescendants:function(){qq.removeClass(n,t._classes.dropActive)},onDrop:function(e){n.style.display="none",qq.removeClass(n,t._classes.dropActive),t._uploadFileList(e.dataTransfer.files)}});n.style.display="none",qq.attach(document,"dragenter",function(e){i._isValidFileDrag(e)&&(n.style.display="block")}),qq.attach(document,"dragleave",function(e){if(i._isValidFileDrag(e)){var t=document.elementFromPoint(e.clientX,e.clientY);t&&"HTML"!=t.nodeName||(n.style.display="none")}})},_onSubmit:function(e,t){qq.FileUploaderBasic.prototype._onSubmit.apply(this,arguments),this._addToList(e,t)},_onProgress:function(e,t,n,i){qq.FileUploaderBasic.prototype._onProgress.apply(this,arguments);var o,s=this._getItemByFileId(e),a=this._find(s,"size");a.style.display="inline",o=n!=i?Math.round(n/i*100)+"% from "+this._formatSize(i):this._formatSize(i),qq.setText(a,o)},_onComplete:function(e,t,n){qq.FileUploaderBasic.prototype._onComplete.apply(this,arguments);var i=this._getItemByFileId(e);qq.remove(this._find(i,"cancel")),qq.remove(this._find(i,"spinner")),n.success?qq.addClass(i,this._classes.success):qq.addClass(i,this._classes.fail)},_addToList:function(e,t){var n=qq.toElement(this._options.fileTemplate);n.qqFileId=e;var i=this._find(n,"file");qq.setText(i,this._formatFileName(t)),this._find(n,"size").style.display="none",this._listElement.appendChild(n)},_getItemByFileId:function(e){for(var t=this._listElement.firstChild;t;){if(t.qqFileId==e)return t;t=t.nextSibling}},_bindCancelEvent:function(){var i=this,e=this._listElement;qq.attach(e,"click",function(e){var t=(e=e||window.event).target||e.srcElement;if(qq.hasClass(t,i._classes.cancel)){qq.preventDefault(e);var n=t.parentNode;i._handler.cancel(n.qqFileId),qq.remove(n)}})}}),qq.UploadDropZone=function(e){this._options={element:null,onEnter:function(){},onLeave:function(){},onLeaveNotDescendants:function(){},onDrop:function(){}},qq.extend(this._options,e),this._element=this._options.element,this._disableDropOutside(),this._attachEvents()},qq.UploadDropZone.prototype={_disableDropOutside:function(){qq.UploadDropZone.dropOutsideDisabled||(qq.attach(document,"dragover",function(e){e.dataTransfer&&(e.dataTransfer.dropEffect="none",e.preventDefault())}),qq.UploadDropZone.dropOutsideDisabled=!0)},_attachEvents:function(){var n=this;qq.attach(n._element,"dragover",function(e){if(n._isValidFileDrag(e)){var t=e.dataTransfer.effectAllowed;e.dataTransfer.dropEffect="move"==t||"linkMove"==t?"move":"copy",e.stopPropagation(),e.preventDefault()}}),qq.attach(n._element,"dragenter",function(e){n._isValidFileDrag(e)&&n._options.onEnter(e)}),qq.attach(n._element,"dragleave",function(e){if(n._isValidFileDrag(e)){n._options.onLeave(e);var t=document.elementFromPoint(e.clientX,e.clientY);qq.contains(this,t)||n._options.onLeaveNotDescendants(e)}}),qq.attach(n._element,"drop",function(e){n._isValidFileDrag(e)&&(e.preventDefault(),n._options.onDrop(e))})},_isValidFileDrag:function(e){var t=e.dataTransfer,n=-1<navigator.userAgent.indexOf("AppleWebKit");return t&&"none"!=t.effectAllowed&&(t.files||!n&&t.types.contains&&t.types.contains("Files"))}},qq.UploadButton=function(e){this._options={element:null,multiple:!1,name:"file",onChange:function(){},hoverClass:"qq-upload-button-hover",focusClass:"qq-upload-button-focus"},qq.extend(this._options,e),this._element=this._options.element,qq.css(this._element,{position:"relative",overflow:"hidden",direction:"ltr"}),this._input=this._createInput()},qq.UploadButton.prototype={getInput:function(){return this._input},reset:function(){this._input.parentNode&&qq.remove(this._input),qq.removeClass(this._element,this._options.focusClass),this._input=this._createInput()},_createInput:function(){var e=document.createElement("input");this._options.multiple&&e.setAttribute("multiple","multiple"),e.setAttribute("type","file"),e.setAttribute("name",this._options.name),qq.css(e,{position:"absolute",right:0,top:0,fontFamily:"Arial",fontSize:"118px",margin:0,padding:0,cursor:"pointer",opacity:0}),this._element.appendChild(e);var t=this;return qq.attach(e,"change",function(){t._options.onChange(e)}),qq.attach(e,"mouseover",function(){qq.addClass(t._element,t._options.hoverClass)}),qq.attach(e,"mouseout",function(){qq.removeClass(t._element,t._options.hoverClass)}),qq.attach(e,"focus",function(){qq.addClass(t._element,t._options.focusClass)}),qq.attach(e,"blur",function(){qq.removeClass(t._element,t._options.focusClass)}),window.attachEvent&&e.setAttribute("tabIndex","-1"),e}},qq.UploadHandlerAbstract=function(e){this._options={debug:!1,action:"/upload.php",method:"POST",fieldName:"qqfile",maxConnections:999,onProgress:function(){},onComplete:function(){},onCancel:function(){}},qq.extend(this._options,e),this._queue=[],this._params=[]},qq.UploadHandlerAbstract.prototype={log:function(e){this._options.debug&&window.console&&console.log("[uploader] "+e)},add:function(){},upload:function(e,t){var n=this._queue.push(e),i={};qq.extend(i,t),this._params[e]=i,n<=this._options.maxConnections&&this._upload(e,this._params[e])},cancel:function(e){this._cancel(e),this._dequeue(e)},cancelAll:function(){for(var e=0;e<this._queue.length;e++)this._cancel(this._queue[e]);this._queue=[]},getName:function(){},getSize:function(){},getQueue:function(){return this._queue},_upload:function(){},_cancel:function(){},_dequeue:function(e){var t=qq.indexOf(this._queue,e);this._queue.splice(t,1);var n=this._options.maxConnections;if(this._queue.length>=n&&t<n){var i=this._queue[n-1];this._upload(i,this._params[i])}}},qq.UploadHandlerForm=function(e){qq.UploadHandlerAbstract.apply(this,arguments),this._inputs={}},qq.extend(qq.UploadHandlerForm.prototype,qq.UploadHandlerAbstract.prototype),qq.extend(qq.UploadHandlerForm.prototype,{add:function(e){e.setAttribute("name",this._options.fieldName);var t="qq-upload-handler-iframe"+qq.getUniqueId();return(this._inputs[t]=e).parentNode&&qq.remove(e),t},getName:function(e){return this._inputs[e].value.replace(/.*(\/|\\)/,"")},_cancel:function(e){this._options.onCancel(e,this.getName(e)),delete this._inputs[e];var t=document.getElementById(e);t&&(t.setAttribute("src","javascript:false;"),qq.remove(t))},_upload:function(t,e){var n=this._inputs[t];if(!n)throw new Error("file with passed id was not added, or already uploaded or cancelled");var i=this.getName(t),o=this._createIframe(t),s=this._createForm(o,e);s.appendChild(n);var a=this;return this._attachLoadEvent(o,function(){a.log("iframe loaded");var e=a._getIframeContentJSON(o);a._options.onComplete(t,i,e),a._dequeue(t),delete a._inputs[t],setTimeout(function(){qq.remove(o)},1)}),s.submit(),qq.remove(s),t},_attachLoadEvent:function(e,t){qq.attach(e,"load",function(){e.parentNode&&(e.contentDocument&&e.contentDocument.body&&"false"==e.contentDocument.body.innerHTML||t())})},_getIframeContentJSON:function(iframe){var doc=iframe.contentDocument?iframe.contentDocument:iframe.contentWindow.document,response;this.log("converting iframe's innerHTML to JSON"),this.log("innerHTML = "+doc.body.innerHTML);try{response=eval("("+doc.body.innerHTML+")")}catch(err){response={}}return response},_createIframe:function(e){var t=qq.toElement('<iframe src="javascript:false;" name="'+e+'" />');return t.setAttribute("id",e),t.style.display="none",document.body.appendChild(t),t},_createForm:function(e,t){var n=qq.toElement('<form enctype="multipart/form-data"></form>'),i=qq.obj2url(t,this._options.action);n.setAttribute("method",this._options.method),n.setAttribute("action",i),n.setAttribute("target",e.name),n.style.display="none";var o=$('meta[name="csrf-token"]').attr("content"),s=$('meta[name="csrf-param"]').attr("content"),a=qq.toElement('<input type="hidden" />');return a.setAttribute("name",s),a.setAttribute("value",o),n.appendChild(a),document.body.appendChild(n),n}}),qq.UploadHandlerXhr=function(e){qq.UploadHandlerAbstract.apply(this,arguments),this._files=[],this._xhrs=[],this._loaded=[]},qq.UploadHandlerXhr.isSupported=function(){var e=document.createElement("input");return e.type="file","multiple"in e&&"undefined"!=typeof File&&"undefined"!=typeof(new XMLHttpRequest).upload},qq.extend(qq.UploadHandlerXhr.prototype,qq.UploadHandlerAbstract.prototype),qq.extend(qq.UploadHandlerXhr.prototype,{add:function(e){if(!(e instanceof File))throw new Error("Passed obj in not a File (in qq.UploadHandlerXhr)");return this._files.push(e)-1},getName:function(e){var t=this._files[e];return null!=t.fileName?t.fileName:t.name},getSize:function(e){var t=this._files[e];return null!=t.fileSize?t.fileSize:t.size},getLoaded:function(e){return this._loaded[e]||0},_upload:function(t,e){var n=this._files[t],i=this.getName(t),o=this.getSize(t);this._loaded[t]=0;var s=this._xhrs[t]=new XMLHttpRequest,a=this;s.upload.onprogress=function(e){e.lengthComputable&&(a._loaded[t]=e.loaded,a._options.onProgress(t,i,e.loaded,e.total))},s.onreadystatechange=function(){4==s.readyState&&a._onComplete(t,s)},(e=e||{})[this._options.fieldName]=i;var r=qq.obj2url(e,this._options.action);s.open(this._options.method,r,!0),s.setRequestHeader("X-Requested-With","XMLHttpRequest"),s.setRequestHeader("X-File-Name",encodeURIComponent(i)),s.setRequestHeader("X-File-Size",o),s.setRequestHeader("X-File-Type",n.type),s.setRequestHeader("Content-Type","application/octet-stream"),$.rails&&$.rails.CSRFProtection(s),s.send(n)},_onComplete:function(id,xhr){if(this._files[id]){var name=this.getName(id),size=this.getSize(id);if(this._options.onProgress(id,name,size,size),-1<[200,201].indexOf(xhr.status)){var response;this.log("xhr - server response received"),this.log("responseText = "+xhr.responseText);try{response=eval("("+xhr.responseText+")")}catch(err){response={}}this._options.onComplete(id,name,response)}else this._options.onComplete(id,name,{});this._files[id]=null,this._xhrs[id]=null,this._dequeue(id)}},_cancel:function(e){this._options.onCancel(e,this.getName(e)),this._files[e]=null,this._xhrs[e]&&(this._xhrs[e].abort(),this._xhrs[e]=null)}});
>>>>>>> 0ce8b76e35039cbab0dc8afcfff5dbd974e73a3d
