<<<<<<< HEAD
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
$.QueryString=function(e){if(""==e)return{};for(var t={},i=0;i<e.length;++i){var l=e[i].split("=");2==l.length&&(t[l[0]]=decodeURIComponent(l[1].replace(/\+/g," ")))}return t}(window.location.search.substr(1).split("&")),$(document).ready(function(){var e="div.gal-item div.gal-inner-holder";$(document).on("mouseover",e,function(){$(this).addClass("hover")}).on("mouseout",e,function(){$(this).removeClass("hover")}).on("click",e,function(){var e=$(this).parents("div.gal-item").data("url");CKEDITOR.tools.callFunction(CKEditorFuncNum,e),window.close()}),$(document).on("ajax:complete","div.gal-item a.gal-del",function(){$(this).parents("div.gal-item").remove()});var t=$.endlessScroll({container:".fileupload-list",entity:".gal-item",scrollPadding:100});t.scrollModule.unbind(),window.setTimeout(function(){t.scrollModule.bind()},1e3)}),qq.FileUploader.instances=new Object,qq.FileUploaderInput=function(e){qq.FileUploaderBasic.apply(this,arguments),qq.extend(this._options,{element:null,listElement:null,template_id:"#fileupload_tmpl",classes:{button:"fileupload-button",drop:"fileupload-drop-area",dropActive:"fileupload-drop-area-active",list:"fileupload-list",preview:"fileupload-preview",file:"fileupload-file",spinner:"fileupload-spinner",size:"fileupload-size",cancel:"fileupload-cancel",success:"fileupload-success",fail:"fileupload-fail"}}),qq.extend(this._options,e),this._element=document.getElementById(this._options.element),this._listElement=this._options.listElement||this._find(this._element,"list"),this._classes=this._options.classes,this._button=this._createUploadButton(this._find(this._element,"button")),qq.FileUploader.instances[this._element.id]=this},qq.extend(qq.FileUploaderInput.prototype,qq.FileUploaderBasic.prototype),qq.extend(qq.FileUploaderInput.prototype,{_find:function(e,t){var i=qq.getByClass(e,this._options.classes[t])[0];if(!i)throw alert(t),new Error("element not found "+t);return i},_setupDragDrop:function(){var t=this,i=this._find(this._element,"drop"),l=new qq.UploadDropZone({element:i,onEnter:function(e){qq.addClass(i,t._classes.dropActive),e.stopPropagation()},onLeave:function(e){e.stopPropagation()},onLeaveNotDescendants:function(){qq.removeClass(i,t._classes.dropActive)},onDrop:function(e){i.style.display="none",qq.removeClass(i,t._classes.dropActive),t._uploadFileList(e.dataTransfer.files)}});i.style.display="none",qq.attach(document,"dragenter",function(e){l._isValidFileDrag(e)&&(i.style.display="block")}),qq.attach(document,"dragleave",function(e){if(l._isValidFileDrag(e)){var t=document.elementFromPoint(e.clientX,e.clientY);t&&"HTML"!=t.nodeName||(i.style.display="none")}})},_onSubmit:function(e,t){qq.FileUploaderBasic.prototype._onSubmit.apply(this,arguments),this._addToList(e,t)},_onProgress:function(e,t,i,l){qq.FileUploaderBasic.prototype._onProgress.apply(this,arguments);var n,s=this._getItemByFileId(e),o=this._find(s,"size");n=i!=l?Math.round(i/l*100)+"% from "+this._formatSize(l):this._formatSize(l),qq.setText(o,n)},_onComplete:function(e,t,i){qq.FileUploaderBasic.prototype._onComplete.apply(this,arguments);var l=this._getItemByFileId(e),n=i.asset?i.asset:i;n&&n.id?(qq.addClass(l,this._classes.success),n.size=this._formatSize(n.size),n.controller=n.type!==undefined&&"ckeditor::picture"==n.type.toLowerCase()?"pictures":"attachment_files",$(l).replaceWith($(this._options.template_id).tmpl(n))):qq.addClass(l,this._classes.fail)},_addToList:function(e,t){if(this._listElement){!1===this._options.multiple&&$(this._listElement).empty();var i={id:0,filename:this._formatFileName(t),size:0,format_created_at:"",url_content:"#",controller:"assets",url_thumb:""},l=$(this._options.template_id).tmpl(i).attr("qqfileid",e);l.find("div.img").html("").addClass("preloader"),l.prependTo(this._listElement),this._bindCancelEvent(l)}},_getItemByFileId:function(e){return $(this._listElement).find("div[qqfileid="+e+"]").get(0)},_bindCancelEvent:function(e){var t=this,i=$(e);i.find("a."+this._classes.cancel).bind("click",function(e){return t._handler.cancel(i.attr("qqfileid")),i.remove(),qq.preventDefault(e),!1})}});
>>>>>>> 0ce8b76e35039cbab0dc8afcfff5dbd974e73a3d
