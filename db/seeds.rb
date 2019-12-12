# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Thing.destroy_all
Hobby.destroy_all
UserHobby.destroy_all
UserThing.destroy_all
Review.destroy_all



demouser = User.create({email: "tester1@gmail.com", password:"applepie"})
demohobby = Hobby.create({name: "Mechanical Keyboards", description: "Our community is filled with keyboard enthusiasts who join for the key mechanisms, sounds, and feels of mechanical keyboards! We welcome any who are interested!"})
demothing = Thing.create({hobby_id: demohobby.id, name: "Pickup ESC Keyboard", price: 190, description: "A keyboard created by us.... for you..."})
demoreview = Review.create({thing_id: demothing.id, user_id: demouser.id, body: "This is the first review", stars: 5})
demouserthing = UserThing.create({user_id: demouser.id, thing_id: demothing.id})
demouserhobby = UserHobby.create({user_id: demouser.id, hobby_id: demohobby.id})
