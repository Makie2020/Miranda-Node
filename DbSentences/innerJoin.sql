SELECT * FROM `bookings` INNER JOIN `rooms` ON bookings.room_number = rooms.room_number;

SELECT * FROM `bookings`
INNER JOIN rooms
on bookings.room_number = rooms.room_number
WHERE bookings.special_request = 'Sea View'

SELECT * FROM `bookings`
INNER JOIN rooms
on bookings.room_number = rooms.room_number
WHERE bookings.room_type = 'Suite'


