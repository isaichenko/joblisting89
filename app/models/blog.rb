class Blog < ApplicationRecord
    enum status: { active: 1, non_active: 0}

    has_and_belongs_to_many :categories
    has_and_belongs_to_many :tags
end
