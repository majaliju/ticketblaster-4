require "faker"
require 'email_validator'

puts "---------------------- The Manual method!! "

puts "---------------------- Removing old data..."
User.delete_all
Artist.delete_all
Concert.delete_all
Post.delete_all
puts "---------------------- Old data removed..."

puts "---------------------- Seeding the 32 initial users..."

#* the users in the database
u1 = User.create({ username: "onlineguy1", password: "123123123123",  email: Faker::Internet.email})
u2 = User.create({ username: "anotherDude5", password: "123123123123",  email: Faker::Internet.email})
u3 = User.create({ username: "p3rs0n", password: "123123123123",  email: Faker::Internet.email})
u4 = User.create({ username: "thatsme", password: "123123123123",  email: Faker::Internet.email})
u5 = User.create({ username: "BECCAA<3", password: "123123123123",  email: Faker::Internet.email})
u6 = User.create({ username: "testing", password: "123123123123",  email: Faker::Internet.email})
u7 = User.create({ username: "asdf", password: "123123123123",  email: Faker::Internet.email})
u8 = User.create({ username: "johnnyboy", password: "123123123123",  email: Faker::Internet.email})
u9 = User.create({ username: "thatdude", password: "123123123123",  email: Faker::Internet.email})
u10 = User.create({ username: "musiclover123", password: "123123123123",  email: Faker::Internet.email})
u11 = User.create({ username: "ilovemj", password: "123123123123",  email: Faker::Internet.email})
u12 = User.create({ username: "i_love_bad_bunny", password: "123123123123",  email: Faker::Internet.email})
u13 = User.create({ username: "HELLO", password: "123123123123",  email: Faker::Internet.email})
u14 = User.create({ username: "tix4sale", password: "123123123123",  email: Faker::Internet.email})
u15 = User.create({ username: "hustlerbabyx0", password: "123123123123",  email: Faker::Internet.email})
u16 = User.create({ username: "queens123", password: "123123123123",  email: Faker::Internet.email})
u17 = User.create({ username: "L0V3MUSIC", password: "123123123123",  email: Faker::Internet.email})
u18 = User.create({ username: "gettingMONEY247", password: "123123123123",  email: Faker::Internet.email})
u19 = User.create({ username: "guapchaser77", password: "123123123123",  email: Faker::Internet.email})
u20 = User.create({ username: "ihatetheknicks", password: "123123123123",  email: Faker::Internet.email})
u21 = User.create({ username: "benjamindisraeli", password: "123123123123",  email: Faker::Internet.email})
u22 = User.create({ username: "thequeenisdead", password: "123123123123",  email: Faker::Internet.email})
u23 = User.create({ username: "ilovethesmiths11", password: "123123123123",  email: Faker::Internet.email})
u24 = User.create({ username: "nymuzik", password: "123123123123",  email: Faker::Internet.email})
u25 = User.create({ username: "rainygirl", password: "123123123123",  email: Faker::Internet.email})
u26 = User.create({ username: "qwerty22", password: "123123123123",  email: Faker::Internet.email})
u27 = User.create({ username: "generic_username", password: "123123123123",  email: Faker::Internet.email})
u28 = User.create({ username: "AHHHHH", password: "123123123123",  email: Faker::Internet.email})
u29 = User.create({ username: "okletsgetit", password: "123123123123",  email: Faker::Internet.email})
u30 = User.create({ username: "mulholland_driver", password: "123123123123",  email: Faker::Internet.email})
u31 = User.create({ username: "marvin_gaye_rip87", password: "123123123123",  email: Faker::Internet.email})
u32 = User.create({ username: "majboy", password: "123123123123",  email: Faker::Internet.email})


##* NOTE: use the syntax 
##* artist_name = ----> to create the Artist, via the variabel just ='ing their name
##* artist_name_cX ---> for Concerts, where X is any increasing number 
##* artist_name_pX ---> for Posts, where X is any increasing number 
##& seeding Artists-Concerts-Posts in groups per each artist

puts "---------------------- Seeding each Artist, their concerts, and their posts..."


#~ Adele
adele = Artist.create({ name: "Adele", image: "/artist-images/adele.jpg", genre: "Pop"})
adele_c1 = Concert.create!({date: Faker::Date.between(from: '2023-01-01', to: '2024-05-25'), location: "Hollywood Bowl", artist_id: adele.id})
adele_p1 = Post.create({body: "2 tickets, $100 total OBO -- CHEAPEST YOU'LL EVER FIND FOR ADELE!!", for_sale: true, tickets: 2, user_id: u1.id, concert_id: adele_c1.id})
adele_p2 = Post.create({body: "PLEASE EMAIL IF YOU HAVE 4 TICKETS ALTOGETHER! MY DAUGHTERS LOVE HER -- THX ", for_sale: false, tickets: 4, user_id: u17.id, concert_id: adele_c1.id})


#~ John Legend
john_legend = Artist.create({ name: "John Legend", image: "/artist-images/john_legend.jpg", genre: "Pop"})
john_legend_c1 = Concert.create!({date: Faker::Date.between(from: '2023-01-01', to: '2024-05-25'), location: "Madison Square Garden", artist_id: john_legend.id})
john_legend_p1 = Post.create({body: "Need 3 tickets badly! Willing to pay $400 total for 3 tix", for_sale: false, tickets: 3, user_id: u2.id, concert_id: john_legend_c1.id})
john_legend_p2 = Post.create({body: "Can't find just one ticket anywhere! Idc where the seat is, HMU", for_sale: false, tickets: 1, user_id: u30.id, concert_id: john_legend_c1.id})


#~ Lil Uzi Vert
lil_uzi = Artist.create({ name: "Lil Uzi Vert", image: "/artist-images/lil-uzi-vert.jpg", genre: "Rap"})
lil_uzi_c1 = Concert.create!({date: Faker::Date.between(from: '2023-01-01', to: '2024-05-25'), location: "SoFi Stadium", artist_id: lil_uzi.id})
lil_uzi_p1 = Post.create({body: "All 3 tickets together = $250, one ticket = $100", for_sale: true, tickets: 3, user_id: u4.id, concert_id: lil_uzi_c1.id})


#~ Alicia Keys
alicia_keys = Artist.create({ name: "Alicia Keys", image: "/artist-images/alicia_keys.jpg", genre: "R&B"})
alicia_keys_c1 = Concert.create!({date: Faker::Date.between(from: '2023-01-01', to: '2024-05-25'), location: "Bowery Ballroom", artist_id: alicia_keys.id})
alicia_keys_p1 = Post.create({body: "My daughter loves him (dont ask), will pay up to $500 per ticket", for_sale: false, tickets: 2, user_id: u4.id, concert_id: alicia_keys_c1.id})














puts "---------------------- Success!!"
## so far so good