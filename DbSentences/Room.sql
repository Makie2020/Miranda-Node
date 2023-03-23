CREATE TABLE Rooms (
    id int,
    image varchar(255),
    imageTwo varchar(255),
    imageThree varchar(255),
    imageFour varchar(255),
    imageFive varchar(255),
    room_type varchar(255),
    room_number int,
    name varchar(255),
    discountPercentage int,
  	discount varchar(255),
  	amenities varchar(255),
    price int,
    offer_price varchar(255),
    status varchar(255)
);

INSERT INTO rooms (id,image,imageTwo, imageThree, imageFour, imageFive, room_type, room_number, name,discountPercentage, discount, amenities, price, offer_price, status)
VALUES
(   1,
    "https://loremflickr.com/g/320/240/madrid",
    "https://loremflickr.com/g/320/240/madrid",
    "https://loremflickr.com/g/320/240/madrid",
    "https://loremflickr.com/g/320/240/madrid",
    "https://loremflickr.com/g/320/240/madrid",
    "Double bed",
     1,
    "Deluxe A-91254",
     0,
    "No",
    "Delectus placeat eaque.Alias excepturi similique....",
    96983,
     "",
    "Occupied"
);

INSERT INTO rooms (id, image, room_type, room_number, name, amenities, price, offer_price, status)
VALUES
(   2,
    "https://loremflickr.com/g/320/240/madrid",
    "https://loremflickr.com/g/320/240/madrid",
    "https://loremflickr.com/g/320/240/madrid",
    "https://loremflickr.com/g/320/240/madrid",
    "https://loremflickr.com/g/320/240/madrid",
    "",
     1,
    "Deluxe A-91254",
     0,
    "No",
    "Delectus placeat eaque.Alias excepturi similique....",
    96,
     "",
    "Booked"
);

