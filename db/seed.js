const dbQuery = require("../db.config");
const { faker } = require('@faker-js/faker');
const bcrypt = require("bcrypt");

const userPicutre = [
  'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/158.jpg',
  'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/157.jpg',
  'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/156.jpg',
  'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/155.jpg',
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

  return {
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
    amenities: faker.lorem.lines(4),
    price: roomRate,
    offer_price: roomOffer,
    status: faker.helpers.arrayElement(["Available", "Booked"]),
  };
}

async function createRandomBooking() {
  const orderDate = faker.date.between("2022-01-01", "2022-12-12");
  const checkIn = faker.date.between(orderDate, "2023-11-01");
  const checkOut = faker.date.between(checkIn, "2023-12-31");

  const rooms = await dbQuery("SELECT * FROM rooms", "");
  const roomsArray = JSON.parse(JSON.stringify(rooms));
  const randomNumber = Math.floor(Math.random() * 20);
  const randomRoom = roomsArray[randomNumber];

  return {
    bookingId: faker.datatype.number({ min: 1, max: 99999 }),
    full__name: faker.name.fullName(),
    image: faker.helpers.arrayElement(userPicutre),
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
  };
}

async function createUser() {
  return {
    id: faker.datatype.number({ min: 1, max: 999999 }),
    photo: faker.helpers.arrayElement(userPicutre),
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
  };
}

//HASH PASSWORD USER
async function getHashPass(password) {
  return await bcrypt.hash(password, 10).then((result) => result);
};
// CONTACT
async function createContact() {
  return  {
    id: faker.datatype.number({ min: 1, max: 999999 }),
    photo: faker.helpers.arrayElement(userPicutre),
    date: faker.date.between("2022-01-01", "2023-12-12"),
    full_name: faker.name.fullName(),
    email: faker.internet.email(),
    phone_number: faker.phone.number("+## ## ### ## ##"),
    subject: faker.random.words(15),
  };
};
// AMENITIES
async function createAmenities() {
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
  for (let i = 0; i < amenities.length; i++) {
    console.log(amenities[i])
    await dbQuery("INSERT INTO roomamenities SET ?", {
      id: [i],
      amenity: amenities[i]
    });
  }
}

//ROOM AMENITIES
async function roomAmenities(){
  const rooms = await dbQuery("SELECT * FROM rooms;", "");
  const bookings= await dbQuery("SELECT * FROM roomBookings;", "");

}

// RUN FUNCTION
async function run() {
  //ROOMS
  for (let i = 0; i < 20; i++) {
    const room = await createRoom();
    await dbQuery("INSERT INTO rooms SET ?", room).catch(err => console.log(err));
  }
  // BOOKINGS
  for(let i = 0; i < 20; i++) {
    const booking = await createRandomBooking();
    await dbQuery("INSERT INTO bookings SET ?", booking).catch(err => console.log(err));
  }
  // USERS
  for (let i = 0; i < 20; i++) {
    const user = await createUser();
    await dbQuery("INSERT INTO users SET ?", user).catch(err => console.log(err)); 
  }
  //CONTACT
  for (let i = 0; i < 20; i++) {
    const message = await createContact();
    await dbQuery("INSERT INTO contact SET ?", message).catch(err => console.log(err));
  }
// AMENITIES
  createAmenities();
}
run();