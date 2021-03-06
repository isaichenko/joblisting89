# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$(document).on "turbolinks:load", ->
    url =

    type = $("select.change-action").data('user-type')
    $("select.change-action").on "change", (event) ->
        url = $(this).val()
        # check url contain 'suspend' or 'delete'
        if /lift_suspend/.test url
            $("#small-dialog .modal-body h5").text('Are you going to lift the suspension for this ' + type + ' ?')
            # disable bootstrap modal outside close
            $("#modal-click").trigger("click");
        else if /suspend/.test url
            $("#small-dialog .modal-body h5").text('Are you going to suspend this ' + type + ' ?')
            $("#modal-click").trigger("click");
        else if /delete/.test url
            $("#small-dialog .modal-body h5").text('Are you going to delete this ' + type + ' ?')
            $("#modal-click").trigger("click");

    $(".action-confirm-yes").on "click", (event) ->
        event.preventDefault()
        $.get(url)

    $(".action-confirm-no").on "click", (event) ->
        $("select.change-action").val("")
        # location.reload()

