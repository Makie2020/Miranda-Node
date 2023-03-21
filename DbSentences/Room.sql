CREATE TABLE Rooms (
    id int,
    image varchar(255),
    room_type varchar(255),
    room_number int,
    name varchar(255),
    amenities varchar(255),
    price int,
    offer_price varchar(255),
    status varchar(255)
);

INSERT INTO rooms (id, image, room_type, room_number, name, amenities, price, offer_price, status)
VALUES
(   1,
    "photo",
    'Double bed',
    112,
    'Deluxe A-91234',
    'amenities',
    100,
    '90',
    'Occupied'
);

INSERT INTO rooms (id, image, room_type, room_number, name, amenities, price, offer_price, status)
VALUES
(   2,
    "photo",
    'Suit',
    165,
    'Deluxe A-21234',
    'amenities',
    110,
    '95',
    'Occupied'
);