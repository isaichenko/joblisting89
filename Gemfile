source 'https://rubygems.org'
ruby "2.7.5"

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 5.1.5'
gem 'pg'
#gem 'pg', '>= 0.18', '< 2.0'
gem 'puma', '~> 3.7'
# add for boostrap modal
#gem 'bootstrap-sass', '~> 4.1', '>= 4.1.1'

gem 'sass-rails', '~> 5.0'
#gem 'searchkick', '~> 3.1'
gem 'searchkick', '~> 4.2'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.2'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.5'
gem 'kaminari', '~> 1.1', '>= 1.1.1'
gem 'ancestry'

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'pry', '~> 0.11.3'
end


group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'letter_opener'
  gem 'figaro'
  gem 'derailed'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

gem 'devise', '~> 4.4', '>= 4.4.3'
gem 'bootstrap', '~> 4.1', '>= 4.1.1'
gem 'jquery-rails', '~> 4.3', '>= 4.3.3'
gem 'font-awesome-rails', '~> 4.7', '>= 4.7.0.4'
gem 'gritter', '~> 1.2'
gem 'omniauth', '~> 1.8', '>= 1.8.1'
gem 'omniauth-facebook', '~> 5.0'
gem 'omniauth-oauth2', '~> 1.5'
gem 'omniauth-google-oauth2', '~> 0.5.3'
gem 'carrierwave', '~> 1.2', '>= 1.2.2'
gem 'mini_magick', '~> 4.8'
gem 'carrierwave-aws', '~> 1.3'
gem 'dotenv-rails', '~> 2.4', groups: [:development, :test]
gem 'cocoon', '~> 1.2', '>= 1.2.11'
gem 'petergate', '~> 1.8', '>= 1.8.1'

#ckeditor
gem 'ckeditor', github: 'galetahub/ckeditor'
gem 'ckeditor_rails', github: 'tsechingho/ckeditor-rails'
#select2
gem 'select2-rails'
#social share
gem 'social-share-button'
gem 'acts_as_follower', github: 'tcocca/acts_as_follower', branch: 'master'
gem 'mini_racer'
gem 'activemerchant'

gem 'braintreehttp', '~> 0.5.0'
gem 'paypal-checkout-sdk', '~> 1.0', '>= 1.0.1'
gem 'paypal-sdk-rest'

gem 'stripe', '~> 4.0.3'
gem 'oauth2', '>= 1.4.1'
gem "sentry-raven"

#gem 'bonsai-elasticsearch-rails', '~> 7'
#gem 'elasticsearch-model', github: 'elastic/elasticsearch-rails', branch: 'master'
#gem 'elasticsearch-rails', github: 'elastic/elasticsearch-rails', branch: 'master'
