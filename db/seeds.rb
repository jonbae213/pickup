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

User.create({email: "tester1@gmail.com", password:"applepie"})

Hobby.create({name: "Mechanical Keyboards", description: "Our community is filled with keyboard enthusiasts who join for the key mechanisms, sounds, and feels of mechanical keyboards! We welcome any who are interested!"})

Thing.create({hobby_id: 1, name: "Pickup ESC Keyboard", price: 190, description: "A keyboard created by us.... for you..."})
