json.extract! plan, :id, :name, :duration, :price, :currency, :created_at, :updated_at
json.url plan_url(plan, format: :json)
