require_relative 'boot'

require "rails"
# Pick the frameworks you want:
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_view/railtie"
require "action_cable/engine"
require "sprockets/railtie"
# require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module ListingApp
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    

    # Don't generate system test files.
    config.generators.system_tests = nil

    # Add fonts in pipline
    config.assets.paths << Rails.root.join("app", "assets", "fonts")

    Raven.configure do |config|
      config.dsn = 'https://651f9e14b93f4b4ea5e45fa20bb78d22:36b25a378c2f4f5f831919098c3008ca@sentry.io/1406897'
    end

  end
end
