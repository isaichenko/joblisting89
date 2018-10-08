# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

adjustWidth = ->
  parentWidth = $('#job_info').closest('.col').width()
  $('#job_info').width parentWidth
  return

#$(document).on "turbolinks:before-cache", ->
  #$("[data-chosen]").chosen("destroy")


$(document).on "turbolinks:load", ->
  $("form#filter-auto select, form#filter-auto input").on "change", (event) ->
    $("form#filter-auto").submit();


  $(".filter-block__bottom a.show-more").on "click", (event) ->
    #find all hidden filters
    filters = $(this).closest('.filter-block').find('.hidden-filter')
    return if(!filters.length)
    #find block where we will store opened filters
    showed_bl = $(this).closest('.filter-block').find('.showed-block');

    #if we don't have more filters, hide "show more"
    if(filters.length <= 5)
      $(this).closest('.filter-block__bottom').hide();

    #show only 5 filters
    count = if filters.length < 5 then filters.length else 5
    console.log(count)
    for i in [0...count]
      showed_bl.append($(filters[i]).removeClass('hidden-filter'))

  $("a[data-remote]").on "ajax:error", (event) ->
    #alert('Couldn\'t load, redirecting...' + $(this).attr('href'));
    window.location = $(this).attr('href');

  $(document).on "scroll", ->
    if $('#job_info:visible').length > 0
      offset = $('.info-cards .info-cards__card:first').offset()
      return if typeof offset == 'undefined'
      if $(document).scrollTop() > offset.top
        $("#job_info").addClass("fix-block");
        adjustWidth()
      else
        $("#job_info").removeClass("fix-block");
        adjustWidth()

  $('.closeInfo').on "click", ->
    $('#job_info').hide()

#Spotlight part
$(document).on "turbolinks:load", ->
    url =

    type = $("select.change-action").data('user-type')
    $("select.change-action").on "change", (event) ->
        url = $(this).val()
        # check url contain 'suspend' or 'delete'
        if /add/.test url
            $("#small-dialog .modal-body h5").text('Are you going to ADD this ' + type + ' to Spotlight?')
            # disable bootstrap modal outside close
            $("#modal-click").trigger("click");
        else if /remove/.test url
            $("#small-dialog .modal-body h5").text('Are you going to REMOVE this ' + type + ' from Spotlight?')
            $("#modal-click").trigger("click");
        else if /delete/.test url
            $("#small-dialog .modal-body h5").text('Danger! Are you going to delete this ' + type + ' ?')
            $("#modal-click").trigger("click");

    $(".action-confirm-yes").on "click", (event) ->
        event.preventDefault()
        $.get(url)

    $(".action-confirm-no").on "click", (event) ->
        $("select.change-action").val("")
        # location.reload()

