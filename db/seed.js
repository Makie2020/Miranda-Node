const mongoose = require("mongoose");
const database = require('../db/db.config');
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
  'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/126.jpg',
  'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/125.jpg',
  'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/124.jpg',
  'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/123.jpg',
  'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/122.jpg',
  'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/120.jpg',
];

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
    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
  ];
  const pictureTwo = [
    "https://images.unsplash.com/photo-1445991842772-097fea258e7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1589923158776-cb4485d99fd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
  ];
  const pictureThree = [
    "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
  ];
  const pictureFour = [
    "https://images.unsplash.com/photo-1600011689032-8b628b8a8747?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    "https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
  ];
  const pictureFive = [
    "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1576698483491-8c43f0862543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=648&q=80"
  ];

  const roomRate = faker.datatype.number({ max: 1000 });
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
    roomOffer = (roomRate - (discountPercent * roomRate) / 100).toFixed(2);;
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
    id: faker.datatype.number({ min: 1, max: 99999 }),
    full__name: faker.name.fullName(),
    image: faker.helpers.arrayElement(userAvatar),
    imageRoom: randomRoom.image,
    imageRoomTwo:randomRoom.imageTwo,
    imageRoomThree: randomRoom.imageThree,
    imageRoomFour: randomRoom.imageFour,
    imageRoomFive: randomRoom.imageFive,
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
    price: randomRoom.price,
    status: faker.helpers.arrayElement([
      "Check In",
      "Check Out",
      "In Progress",
    ]),
    amenities: randomRoom.amenities 
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

//HASH PASSWORD USER
async function getHashPass(password) {
  return await bcrypt.hash(password, 10).then((result) => result);
};

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
 mongoose.disconnect();
}
run();