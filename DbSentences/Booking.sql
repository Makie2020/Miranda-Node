CREATE TABLE Bookings (
    bookingId int,
    full__name varchar(255),
    image varchar(255),
    order_date varchar(255),
    check_in varchar(255),
    check_out varchar(255),
  	special_request varchar(255),
    room_type varchar(255),
    room_number int,
    status varchar(255),
    price int
);

INSERT INTO Bookings (bookingId,full__name, image, check_in,check_out,order_date,special_request,room_type, room_number, status,price)
VALUES
(   60,
    "Simon Berg",
    "",
    '21/11/2022',
    '16/08/2023',
    '10/09/2023',
   'San Bernardino International Airport',
    'Single Bed',
    127,
   'In Progress',
    101
);