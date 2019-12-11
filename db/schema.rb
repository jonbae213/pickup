# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_12_11_152744) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "hobbies", force: :cascade do |t|
    t.string "name", null: false
    t.text "description", null: false
    t.index ["name"], name: "index_hobbies_on_name", unique: true
  end

  create_table "things", force: :cascade do |t|
    t.bigint "hobby_id", null: false
    t.string "name", null: false
    t.integer "price", null: false
    t.date "deadline", null: false
    t.text "desription", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["hobby_id"], name: "index_things_on_hobby_id"
    t.index ["name"], name: "index_things_on_name", unique: true
  end

  create_table "user_hobbies", force: :cascade do |t|
    t.bigint "hobby_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["hobby_id", "user_id"], name: "index_user_hobbies_on_hobby_id_and_user_id", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "full_name", default: ""
    t.string "email", null: false
    t.text "aboutme", default: ""
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
