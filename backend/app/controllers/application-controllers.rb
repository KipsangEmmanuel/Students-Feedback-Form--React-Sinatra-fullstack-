class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'

    get "/" do
        "Hello world"
    end
    #fetch data
    get "/students" do
        students = Student.all
        students.to_json
    end

    #delete
    delete"/students/:id" do
        students = Student.find(params[:id])
        students.destroy
        students.to_json
    end

    #post
    post "/students" do
        student = Student.create(
            name: params[:name],
            email: params[:email],
            course: params[:course]
        )
        student.to_json
    end
end