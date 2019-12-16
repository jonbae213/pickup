# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

UserHobby.destroy_all
UserThing.destroy_all
Review.destroy_all
User.destroy_all
Thing.destroy_all
Hobby.destroy_all

demouser = User.create({email: "tester1@gmail.com", password:"applepie"})

demohobby = Hobby.create({name: "Mechanical Keyboards", description: "For the keyboard enthusiasts who enjoy the clickety and clacketying of typing on a mechanical keyboard. We welcome all who enjoy the typing experience!"})
demohobby2 = Hobby.create({name: "Writing", description: "The family of people who enjoy the act of writing on pen and paper. We provide things to help elevate your writing experience."})
demohobby3 = Hobby.create({name: "Audiophile", description: "For those who enjoy sound just that much more."})
demohobby4 = Hobby.create({name: "Watches", description: "We welcome those who understand the inexplicable love for watches"})

demothing = Thing.create({hobby_id: demohobby.id, name: "Pickup ESC Keyboard", price: 190, description: "A TKL keyboard with hotswappable switches, to ensure that the customizability of the keyboard is limitless. An aluminum case and rgb lighting through out the keyboard makes sure the keeb pops out stays on your desk."})
demothing2 = Thing.create({hobby_id: demohobby.id, name: "Pickup FN Keyboard", price: 250, description: "A full sized keyboard with hotswappable switches, to ensure that the customizability of the keyboard is limitless. An aluminum case and rgb lighting through out the keyboard makes sure the keeb pops out stays on your desk."})
demothing3 = Thing.create({hobby_id: demohobby.id, name: "Data86", price: 90, description: "A 60% keyboard with a compact design to save table space and be portable."})
demothing4 = Thing.create({hobby_id: demohobby.id, name: "Goosy 6 Mini", price: 120, description: "A 40% keyboard with an even more compact design."})
demothing5 = Thing.create({hobby_id: demohobby.id, name: "CheyKron Numpad", price: 30, description: "highly programmable numpad to run scripts."})

demothing6 = Thing.create({hobby_id: demohobby2.id, name: "Led Pencil", price: 20, description: "a 0.5mm led pencil."})
demothing7 = Thing.create({hobby_id: demohobby2.id, name: "Ballpoint Pen", price: 30, description: "a ballpoint pen."})
demothing8 = Thing.create({hobby_id: demohobby2.id, name: "Gel Pen", price: 45, description: "a gel pen."})
demothing9 = Thing.create({hobby_id: demohobby2.id, name: "Felt tip Pen", price: 13, description: "a felt tip pen."})
demothing10 = Thing.create({hobby_id: demohobby2.id, name: "Highlighter", price: 16, description: "a highlighter."})

demothing11 = Thing.create({hobby_id: demohobby3.id, name: "Noise-cancelling Headphones", price: 300, description: "A pair of noise-cancelling headphones for those noisy commutes."})
demothing12 = Thing.create({hobby_id: demohobby3.id, name: "Brajas", price: 120, description: "A bluetooth connected in-ear earphone with 6 hours of battery life."})
demothing13 = Thing.create({hobby_id: demohobby3.id, name: "Amp", price: 400, description: "an amp."}) 
demothing14 = Thing.create({hobby_id: demohobby3.id, name: "On-ear headphones", price: 143, description: "Provides a clear sound with great mids and pounding bass."})
demothing15 = Thing.create({hobby_id: demohobby3.id, name: "IEM", price: 20, description: "A product that performs well above its price, its a great deal for those searching for a non-expensive high performing IEM."})

demothing16 = Thing.create({hobby_id: demohobby4.id, name: "Pickup Alex Automatic Field Watch", price: 300, description: "Designed by us. We used a swiss movement with a traditional field watch aesthetic."})
demothing17 = Thing.create({hobby_id: demohobby4.id, name: "Seiko Alpinist", price: 400, description: "A sunburst green dial running the 6r15 movement."})
demothing18 = Thing.create({hobby_id: demohobby4.id, name: "Rolex Daytona", price: 20, description: "Made famous by Paul Newman, this watch provides a sporty racing aesthetic while running arguably one of Rolex's most complicated movements."})
demothing19 = Thing.create({hobby_id: demohobby4.id, name: "Tudor Prince Oyserdate", price: 1000, description: "Commonly known as Rolex's little brother, Tudor brings to the table its own take on the prominent Rolex Date."})
demothing20 = Thing.create({hobby_id: demohobby4.id, name: "Pear Watch", price: 300, description: "Pairs with the Pear Phone and other Pear devices."})

demoreview = Review.create({thing_id: demothing.id, user_id: demouser.id, body: "This is the first review", stars: 5})

demouserthing = UserThing.create({user_id: demouser.id, thing_id: demothing.id})

demouserhobby = UserHobby.create({user_id: demouser.id, hobby_id: demohobby.id})

