class Category < ApplicationRecord
    has_and_belongs_to_many :blogs

    default_scope { order(name: :ASC) }
    
end
