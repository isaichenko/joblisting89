class CategoriesController < ApplicationController
    before_action :set_category, only: [:edit, :show, :update, :destroy]

    def new
    end
    
    def create
    end

    def edit
    end

    def update
        respond_to do |format|
            if @category.update(category_params)
              format.html { redirect_to allblogs_path, notice: 'Your Category was successfully updated.' }
            else
              format.html { render :edit}
            end
        end
    end

    def show
    end

    def destroy
        @category.destroy
        respond_to do |format|
            format.html { redirect_to allblogs_path, notice: 'Your Category was removed.' }
        end
    end

    private
        def set_category
            @category = Category.find(params[:id])
        end

        def category_params
            params.require(:category).permit(:name)
        end
end
