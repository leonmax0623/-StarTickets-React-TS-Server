const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "NEW_USER" },
});

const Tickets = sequelize.define("tickets", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  price: { type: DataTypes.INTEGER, allowNull: false },
  seat_number: { type: DataTypes.INTEGER, unique: true, allowNull: false },
});

const Film = sequelize.define("film", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  img: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  info: { type: DataTypes.STRING, allowNull: false },
  genre: { type: DataTypes.STRING, allowNull: false },
  age_limit: { type: DataTypes.STRING, allowNull: false },
});

const Dates = sequelize.define("dates", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  datetime: { type: DataTypes.INTEGER, unique: true, allowNull: false },
});

const Rating = sequelize.define("rating", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rate: { type: DataTypes.INTEGER, allowNull: false },
  comment: { type: DataTypes.STRING },
});

User.hasMany(Rating);
Rating.belongsTo(User);

User.hasMany(Tickets);
Tickets.belongsTo(User);

Film.hasMany(Dates);
Dates.belongsTo(Film);

Rating.hasMany(Film);
Film.belongsTo(Rating);

Film.hasMany(Tickets);
Tickets.belongsTo(Tickets);

module.exports = {
  User,
  Film,
  Rating,
  Dates,
  Tickets,
};
