<<<<<<< HEAD
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
=======
!function(c){"use strict";c.support.pushState=window.history&&window.history.pushState&&window.history.replaceState&&!navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]|WebApps\/.+CFNetwork)/);var i={init:function(t,i){i.options=c.extend({scrollContainer:window,scrollPadding:100,scrollEventDelay:300},t),this.options=i.options,this.container=i.container,(i.scrollModule=this)._toplock=!0,this._bottomlock=!0,this.scrollContainer=c(this.options.scrollContainer),this.updateEntities(),this.sortMarkers(),this.currentPage=null,this.container.on("jes:afterPageLoad",c.proxy(function(t,i,o){if(this.updateEntities(),this.sortMarkers(),this.checkMarker(),"top"==o){var n=this.markers[1].top,e=this.scrollContainer.scrollTop();this.scrollContainer.scrollTop(e+n)}},this)),this.bind()},updateEntities:function(){this.entities=c(this.options.entity,this.container)},sortMarkers:function(){var t=[];c(".jes-marker",this.container).each(function(){t.push({top:c(this).position().top,url:c(this).data("jesUrl")})}),this.markers=t},checkMarker:function(){for(var t=this.markers[0],i=this.scrollContainer.scrollTop(),o=1;o<this.markers.length&&i>this.markers[o].top;o++)t=this.markers[o];t.url!=this.currentPage&&(this.currentPage=t.url,c(this.container).trigger("jes:scrollToPage",t.url))},bind:function(){this.scrollContainer.on("scroll.jes",c.proxy(function(t){this._tId||(this.scrollHandler(t),this._tId=setTimeout(c.proxy(function(){this._tId=null},this),this.options.scrollEventDelay))},this))},unbind:function(){c(this.options.scrollContainer).off("scroll.jes")},scrollHandler:function(){var t=this.scrollContainer,i=this.entities,o=i.first(),n=i.last(),e=t.scrollTop(),s=e+t.height(),r=o.position().top+this.options.scrollPadding,a=n.outerHeight()+n.position().top-this.options.scrollPadding;e<r?this._toplock||(c(this.container).trigger("jes:topThreshold"),this._toplock=!0):this._toplock=!1,a<s?this._bottomlock||(c(this.container).trigger("jes:bottomThreshold"),this._bottomlock=!0):this._bottomlock=!1,this.checkMarker()}},o={init:function(t,i){i.options=c.extend({},t),this.options=i.options,this.container=i.container,this.setMarker(c(this.options.entity,this.container).first(),location.href),i.ajaxModule=this},loadPage:function(r,a,h){var l={top:{find:"first",inject:"insertBefore"},bottom:{find:"last",inject:"insertAfter"}}[a];this.container.trigger("jes:beforePageLoad",[r,a]),c.get(r,null,c.proxy(function(t){var i=c("<div>").html(t),o=this.options.container,n=c(o,i).first();if(n.length){var e=n.find(this.options.entity);"bottom"==a&&e.each(function(){var t=c(this).attr("id");t&&c("#"+t,this.container).remove()});var s=c(this.options.entity,o)[l.find]();e[l.inject](s),this.setMarker(e.first(),r)}c.isFunction(h)&&h(i),this.container.trigger("jes:afterPageLoad",[r,a,i,e])},this),"html")},setMarker:function(t,i){t.addClass("jes-marker").data("jesUrl",i)}},n={init:function(t,s){s.options=c.extend({nextPage:".pagination a[rel=next]",previousPage:".pagination a[rel=previous]"},t),this.options=s.options,this.container=s.container,c.each([{selector:this.options.nextPage,event:"jes:bottomThreshold.navigation",placement:"bottom"},{selector:this.options.previousPage,event:"jes:topThreshold.navigation",placement:"top"}],c.proxy(function(t,o){if(o.element=c(o.selector),o.element.length){var n=o.element.prop("href"),e=!1,i=function(){!e&&n&&(e=!0,s.ajaxModule.loadPage(n,o.placement,c.proxy(function(t){var i=c(o.selector,c(t));i.length?(e=!1,n=i.prop("href"),o.element.attr("href",n)):(c(this).off(o.event),o.element.remove())},this)))};c(this.container).on(o.event,i),c(o.element).on("click",c.proxy(function(t){t.preventDefault(),i.apply(this.container)},this))}},this))}},e={init:function(t,i){c.support.pushState&&i.container.on("jes:scrollToPage",function(t,i){history.replaceState({},null,i)})}};c.endlessScroll=function(t){if(this.options=c.extend(!0,{container:"#container",entity:".entity",_modules:[o,i,n,e],modules:[]},t),this.container=c(this.options.container),!this.container.length)throw"Container for endless scroll isn't available on the page";return c.merge(this.options.modules,this.options._modules),this.options.modules.forEach(c.proxy(function(t){t.init(this.options,this)},this)),this}}(jQuery);
>>>>>>> 0ce8b76e35039cbab0dc8afcfff5dbd974e73a3d
