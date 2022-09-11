class QuizzesController < ApplicationController
  before_action :find_quiz, only: [:show]
  
  # GET '/quizzes'
  def index
    render json: Quiz.all, status: :ok
  end

  # GET '/quizzes/:id'
  def show
    render json: @quiz, status: :ok
  end

  private
  
  def find_quiz
    @quiz = Quiz.find(params[:id])
  end

end
