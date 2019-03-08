namespace :currency_seed do
  task :create => :environment do
    Currency.create!(iso_code:"USD", name: "United States Dollar", symbol: "$", symbol_first: true)
    Currency.create!(iso_code:"EUR", name: "European Currency Unit", symbol: "€", symbol_first: true)
    Currency.create!(iso_code:"GBP", name: "British Pound", symbol: "£", symbol_first: true)
    Currency.create!(iso_code:"SGD", name: "Singapore Dollar", symbol: "$", symbol_first: true)
    Currency.create!(iso_code:"MYR", name: "Malaysian Ringgit", symbol: "RM", symbol_first: true)
  end
end
