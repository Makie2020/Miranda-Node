const mongoose = require("mongoose");
const database = require('../db/db.config');
const disconnect = require('../db/db.config');
const { faker } = require('@faker-js/faker');
const User = require('../models/userModel');
const Contact = require('../models/contactModel');
const Booking = require('../models/bookingModel');
const Room = require('../models/roomModel');
const bcrypt = require("bcrypt");

const userAvatar = [
  'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/158.jpg',
  'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/157.jpg',
  'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/156.jpg',
  'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/155.jpg',
];
/*
const amenities = [
  "Air Conditioner",
  "Heating",
  "Supermarkt",
  "Beach Towels",
  "Safe",
  "High speed WiFi",
  "Sea view",
  "Parking included",
  "Breakfast",
];

async function createRoom() {
  const pictureOne = [
    "https://loremflickr.com/g/320/240/paris",
    "https://loremflickr.com/g/320/240/madrid"
  ];
  const pictureTwo = [
    "https://loremflickr.com/g/320/240/barcelona",
    "https://loremflickr.com/g/320/240/beach"
  ];
  const pictureThree = [
    "https://loremflickr.com/g/320/240/barcelona",
    "https://loremflickr.com/g/320/240/beach"
  ];
  const pictureFour = [
    "https://loremflickr.com/g/320/240/paris",
    "https://loremflickr.com/g/320/240/madrid"
  ];
  const pictureFive = [
    "https://loremflickr.com/g/320/240/palma",
    "https://loremflickr.com/g/320/240/malaga"
  ];

  const roomRate = faker.datatype.number({ max: 100000 });
  const isOffer = faker.helpers.arrayElement(["Yes", "No"]);
  let discountPercent= 0;
  if (isOffer === "Yes") {
    discountPercent = faker.datatype.number({
      min: 0,
      max: 80,
    });
  } else {
    discountPercent = 0;
  }

  let roomOffer= null;
  if (isOffer === "Yes") {
    roomOffer = roomRate - (discountPercent * roomRate) / 100;
  } else {
    roomOffer = null;
  }

  return new Room({
    id: faker.datatype.number({ min: 1, max: 999999 }),
    image: faker.helpers.arrayElement(pictureOne),
    imageTwo: faker.helpers.arrayElement(pictureTwo),
    imageThree: faker.helpers.arrayElement(pictureThree),
    imageFour: faker.helpers.arrayElement(pictureFour),
    imageFive: faker.helpers.arrayElement(pictureFive),
    room_type: faker.helpers.arrayElement([
      "Single Bed",
      "Double Bed",
      "Double Superior",
      "Suite",
    ]),
    room_number: faker.datatype.number({ min: 10, max: 1000 }),
    name: faker.helpers.arrayElement(["Deluxe A-21234", "Deluxe A-25234", "Suite A-21234"]),
    discountPercentage: discountPercent,
    discount: isOffer,
    amenities: faker.helpers.arrayElements(amenities, 3),
    price: roomRate,
    offer_price: roomOffer,
    status: faker.helpers.arrayElement(["Available", "Booked"]),
  });
}

async function createBooking() {
  const orderDate = faker.date.between("2022-01-01", "2022-12-12");
  const checkIn = faker.date.between(orderDate, "2023-11-01");
  const checkOut = faker.date.between(checkIn, "2023-12-31");
  const rooms = await Room.find()
    .exec()
    .catch((e) => console.log(e));

  const randomNumber = Math.floor(Math.random() * 20);
  const randomRoom = rooms[randomNumber];

  return new Booking({
    bookingId: faker.datatype.number({ min: 1, max: 99999 }),
    full__name: faker.name.fullName(),
    image: faker.helpers.arrayElement(userAvatar),
    order_date: orderDate,
    check_in: checkIn,
    check_out: checkOut,
    special_request: faker.helpers.arrayElement([
      "",
      "Extra blankets",
      "Beach Towels",
      "SEA VIEW",
      "Close to restaurant",
      "Close to pools",
    ]),
    room_type: randomRoom.room_type,
    room_number: randomRoom.room_number,
    status: faker.helpers.arrayElement([
      "Check In",
      "Check Out",
      "In Progress",
    ]),
    price: randomRoom.room_rate
  });
}
async function createUser() {
  return new User({
    id: faker.datatype.number({ min: 1, max: 999999 }),
    photo: faker.helpers.arrayElement(userAvatar),
    full_name: faker.name.fullName(),
    position: faker.helpers.arrayElement([
      "Hotel Manager",
      "Reception",
      "Housekeeping",
      "Animation"
    ]),
    email: faker.internet.email(),
    start_date: faker.date.between("2022-01-01", "2023-12-12"),
    description: faker.lorem.lines(4),
    phone_number: faker.phone.number("+## ## ### ## ##"),
    status: faker.helpers.arrayElement(["ACTIVE", "INACTIVE"]),
    password: await getHashPass(faker.internet.password()),
  });
}
*/
//HASH PASSWORD USER
async function getHashPass(password) {
  return await bcrypt.hash(password, 10).then((result) => result);
};
/*
// CONTACT
async function createContact() {
  return new Contact ({
    id: faker.datatype.number({ min: 1, max: 999999 }),
    photo: faker.helpers.arrayElement(userAvatar),
    date: faker.date.between("2022-01-01", "2023-12-12"),
    full_name: faker.name.fullName(),
    email: faker.internet.email(),
    phone_number: faker.phone.number("+## ## ### ## ##"),
    subject: faker.random.words(15),
  });
};

// RUN FUNCTION
async function run() {
 database();
  //ROOMS
  for (let i = 0; i < 20; i++) {
    const room= await createRoom();
    await Room.create(room);
  }
  // BOOKINGS
  for(let i = 0; i < 20; i++) {
    const booking = await createBooking();
    await Booking.create(booking);
  }
  // USERS
  for (let i = 0; i < 20; i++) {
    const user = await createUser();
    await User.create(user);
  }
  //CONTACT
  for (let i = 0; i < 20; i++) {
    const message = await createContact();
    await Contact.create(message);
  }
 disconnect();
}
run();
*/
async function seedUsers() {
	try {
		const usersCollection = await User.find()
		if (usersCollection.length > 1) {
			return
		}
		const quantity = 20
		let users = []
		for (let i = 0; i < quantity; i++) {
			users.push(
				new User({
          id: faker.datatype.number({ min: 1, max: 999999 }),
          photo: faker.helpers.arrayElement(userAvatar),
          full_name: faker.name.fullName(),
          position: faker.helpers.arrayElement([
            "Hotel Manager",
            "Reception",
            "Housekeeping",
            "Animation"
          ]),
          email: faker.internet.email(),
          start_date: faker.date.between("2022-01-01", "2023-12-12"),
          description: faker.lorem.lines(4),
          phone_number: faker.phone.number("+## ## ### ## ##"),
          status: faker.helpers.arrayElement(["ACTIVE", "INACTIVE"]),
          password: await getHashPass(faker.internet.password()),
				})
			)
		}
		await User.remove()
		users.forEach(user => {
			User.create(user)
		})
		console.log('Users have been added!')
	} catch (error) {
		console.log(error)
	}
}

const databaseConnect = async () => {
  database();
  seedUsers();
  disconnect();
}
databaseConnect();