# in config/initializers/ckeditor.rb
require "ckeditor/orm/active_record"

Ckeditor.setup do |config|
    #config.assets_languages = ['en', 'fr']
    #config.assets_plugins = ['image', 'smiley']
    config.cdn_url = "//cdn.ckeditor.com/4.6.1/basic/ckeditor.js"
end
