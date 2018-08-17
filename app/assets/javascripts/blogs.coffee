# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$(document).on "turbolinks:load", ->
    
    $("input[name=publish-type]").on "change", (event) ->
        type = parseInt($(this).val())
        if type
            $(".publish-date").addClass('d-none')
        else
            $(".publish-date").removeClass('d-none')
        
        

        