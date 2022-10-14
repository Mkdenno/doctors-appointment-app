# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Doctor.create(username: "Dennis Kiprop", email:"denniskiprop@gmail.com", description:"licensed health professionals who maintain and restore human health through the practice of medicine. They examine patients, review their medical history, diagnose illnesses or injuries, administer treatment, and counsel patients on their health and well-being.", location:"Nairobi", password: "Admin" )
Doctor.create(username: "Sheldon Lokified", email:"sheldonkey@gmail.com", description:"licensed health professionals who maintain and restore human health through the practice of medicine. They examine patients, review their medical history, diagnose illnesses or injuries, administer treatment, and counsel patients on their health and well-being.",  location:"Mombasa", password: "Admin" )
Doctor.create(username: "Beverly Rutto", email:"beverlyrutto@gmail.com", description:"licensed health professionals who maintain and restore human health through the practice of medicine. They examine patients, review their medical history, diagnose illnesses or injuries, administer treatment, and counsel patients on their health and well-being.",  location:"Eldoret", password: "Admin" )
Doctor.create(username: "Evans Othis", email:"othis@gmail.com", description:"licensed health professionals who maintain and restore human health through the practice of medicine. They examine patients, review their medical history, diagnose illnesses or injuries, administer treatment, and counsel patients on their health and well-being.",  location:"Kisumu", password: "Admin" )

Appointment.create(username: "Dennis Kiprop",email:"denniskiprop@gmail.com", user_id: 1, doctor_id:1, status: false)
Appointment.create(username: "Sheldon Lokified",email:"sheldonkey@gmail.com", user_id: 2, doctor_id:1, status: false)
Appointment.create(username: "Beverly Rutto",email:"beverlyrutto@gmail.com", user_id: 1, doctor_id:2, status: false)
Appointment.create(username: "Evans Othis",email:"othis@gmail.com", user_id: 2, doctor_id:2, status: false)

User.create(username: "Masiror", email: "masiror@masiror.com", password_digest:"hsgsgsggsggsgsggsg")
User.create(username: "Masiror", email: "masiror@masiror.com", password_digest:"hsgsgsggsggsgsggsg")
User.create(username: "Masiror", email: "masiror@masiror.com", password_digest:"hsgsgsggsggsgsggsg")
User.create(username: "Masiror", email: "masiror@masiror.com", password_digest:"hsgsgsggsggsgsggsg")

Admin.create( email: "dennis@masiror.com", password_digest:"hsgsgsggsggsgsggsg")
Admin.create( email: "masiror@masiror.com", password_digest:"hsgsgsggsggsgsggsg")
Admin.create( email: "yoh@masiror.com", password_digest:"hsgsgsggsggsgsggsg")
Admin.create( email: "masiror@masiror.com", password_digest:"hsgsgsggsggsgsggsg")


