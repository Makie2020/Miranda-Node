/*
const faker = require('faker')

const generateBookings = (num) => {
  let bookings = []
    for (let i = 0; i < 100; i++) {
      const bookingId=   faker.random.numeric(5);
      const full__name = faker.name.fullName();
      const image = faker.image.city();
      const order_date = faker.date.between('2020-01-01T00:00:00.000Z', '2030-01-01T00:00:00.000Z');
      const check_in = faker.date.between('2020-01-01T00:00:00.000Z', '2030-01-01T00:00:00.000Z');
      const check_out = faker.date.between('2020-01-01T00:00:00.000Z', '2030-01-01T00:00:00.000Z');
      const special_request  = faker.random.word();
      const room_type = faker.random.word();
      const room_number= faker.random.numeric();
      const status = faker.random.word();
      const price = faker.random.numeric();

      bookings.push({bookingId, full__name, image,order_date,check_in,check_out,special_request,room_type,room_number,status,price})
    }

    return bookings
};

module.exports = generateBookings
*/
const faker = require("faker");
const Seeder = require("mysql-db-seed").Seeder;
require('dotenv').config();
const { MYSQL_DATABASE,MYSQL_HOST,MYSQL_PASSWORD,MYSQL_USER } = process.env;

const seed = new Seeder(
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE
);

(async () => {
  await seed.seed(
    30,
    "bookings", 
    {
       bookingId: faker.random.numeric,
       full__name: faker.name.fullName,
       image: faker.image.city,
       order_date: faker.date.between('2020-01-01T00:00:00.000Z', '2030-01-01T00:00:00.000Z'),
       check_in: faker.date.between('2020-01-01T00:00:00.000Z', '2030-01-01T00:00:00.000Z'),
       check_out: faker.date.between('2020-01-01T00:00:00.000Z', '2030-01-01T00:00:00.000Z'),
       special_request: faker.random.word,
       room_type: faker.random.word,
       room_number: faker.random.numeric,
       status: faker.random.word,
       price: faker.random.numeric
    }
  )
  seed.exit();
  process.exit();
})();