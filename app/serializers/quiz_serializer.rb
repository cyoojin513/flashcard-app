class QuizSerializer < ActiveModel::Serializer
  attributes :id, :question, :answer
end
