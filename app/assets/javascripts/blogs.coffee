# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$(document).on "turbolinks:load", ->
    
    $("input[name=publish-type]").on "change", (event) ->
        type = parseInt($(this).val())
        if type
            $(".publish-date").addClass 'd-none'
        else
            $(".publish-date").removeClass 'd-none'
    
    $(".tags_added").select2
        multiple: true,
        tags: true,
        data: ["most","popular"]
        # tokenSeparators: [',', ' '],

        # createTag: (params) ->
        #     term = $.trim(params.term)

        #     if term == ''
        #         return null

        #     return {
        #         id: term,
        #         text: term,
        #         newTag: true 
        #     }

        # insertTag: (data, tag) -> 
        #     data.push(tag)
    data = {
        id: 1,
        text: 'A'
    }

    newOption = new Option(data.text, data.id, false, false);
    $('.tags_added').append(newOption).trigger('change');

    $('.tags_added').val(['most', 'popular']);
    $('.tags_added').trigger('change'); 

    #null
    $(".tags_added").val(null).trigger('change');

        