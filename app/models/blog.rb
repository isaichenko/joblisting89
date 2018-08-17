class Blog < ApplicationRecord
    enum status: { active: 0, non_active: 1}

    has_and_belongs_to_many :categories
    has_and_belongs_to_many :tags
end
