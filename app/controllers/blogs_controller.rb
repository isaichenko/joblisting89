class BlogsController < ApplicationController
  #access all: { except: [:new, :edit] }, user: { except: [:new, :edit] }, superadmin: :all
  before_action :set_blog, only: [:edit, :show, :update, :destroy]

  def new
    @blog = Blog.new
    @category = Category.new
    @categories = Category.all
    @tag = Tag.new
    @tags = Tag.all
  end

  def create
    @blog = Blog.new(blog_params)

    respond_to do |format|
      if @blog.save
        @blog.update(published_at: Time.zone.now, status: 'active') if publishing?
        @blog.update(status: 'non_active') if saving_as_draft?
        format.html { redirect_to allblogs_path, notice: 'Your Blog was created.' }
      else
        format.html { render :new}
      end
    end
  end

  def edit
    @categories = Category.all
    @tags = Tag.all
  end

  def update
    respond_to do |format|
      if @blog.update(blog_params)
        format.html { redirect_to allblogs_path, notice: 'Your Blog was successfully updated.' }
      else
        format.html { render :edit}
      end
    end
  end
  
  def show
  end
  
  def destroy
    @blog.destroy
    respond_to do |format|
      format.html { redirect_to allblogs_path, notice: 'Your Blog was removed.' }
    end
  end

  private
    def set_blog
      @blog = Blog.find(params[:id])
    end

    def blog_params
      params.require(:blog).permit(:title, :content)
    end

    def publishing?
        params[:commit] == "Publish"
    end

    def saving_as_draft?
        params[:commit] == "Save as Draft"
    end
end
