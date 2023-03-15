/* eslint-disable prettier/prettier */
const usersData = [
  {
    photo: "",
    id: "1",
    full_name: "Rubi O'Sheeryne",
    email: 'rosheeryne0@wikimedia.org',
    start_date: '2023-02-01',
    description:
      'ipsum primis in faucibus orci luctus et ultrices posuere cubilia',
    phone_number: '(102) 1504954',
    status: 'ACTIVE',
  },
  {
    photo: "",
    id: "1",
    full_name: 'Valma Hilling',
    email: 'vhilling1@washingtonpost.com',
    start_date: '2022-10-04',
    description:
      'sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus',
    phone_number: '(313) 5277426',
    status: 'ACTIVE',
  },
  {
    photo: "",
    id: "1",
    full_name: 'Mile Weildish',
    email: 'mweildish2@disqus.com',
    start_date: '2013-01-04',
    description:
      'in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit',
    phone_number: '(944) 6150826',
    status: 'INACTIVE',
  },
  {
    photo: "",
    id: "1",
    full_name: 'Demetrius Kaszper',
    email: 'dkaszper3@amazonaws.com',
    start_date: '2013-10-01',
    description:
      'bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis',
    phone_number: '(740) 6032667',
    status: 'INACTIVE',
  },
  {
    photo: "",
    id: "1",
    full_name: "Milly O' Loughran",
    email: 'mo4@usda.gov',
    start_date: '2022-10-02',
    description:
      'lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum',
    phone_number: '(353) 4410369',
    status: 'ACTIVE',
  },
  {
    photo: "",
    id: "1",
    full_name: 'Ibby Anniwell',
    email: 'ianniwell5@imageshack.us',
    start_date: '2016-05-11',
    description:
      'justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam',
    phone_number: '(889) 2850179',
    status: 'ACTIVE',
  },
  {
    photo: "",
    id: "1",
    full_name: 'Greg Rapkins',
    email: 'grapkins6@umich.edu',
    start_date: '2022-01-23',
    description:
      'tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec',
    phone_number: '(338) 8474389',
    status: 'INACTIVE',
  },
  {
    photo: "",
    id: "1",
    full_name: 'Darlleen Vasyanin',
    email: 'dvasyanin7@chicagotribune.com',
    start_date: '2001-13-02',
    description:
      'nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla',
    phone_number: '(391) 7567735',
    status: 'INACTIVE',
  },
  {
    photo: "",
    id: "1",
    full_name: 'Kissee Di Franceshci',
    email: 'kdi8@surveymonkey.com',
    start_date: '2022-05-04',
    description:
      'faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla',
    phone_number: '(922) 7869808',
    status: 'ACTIVE',
  },
  {
    photo: "",
    id: "1",
    full_name: 'Jess McCreery',
    email: 'jmccreery9@ifeng.com',
    start_date: '2015-02-014',
    description:
      'mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit',
    phone_number: '(874) 2841808',
    status: 'INACTIVE',
  },
  {
    photo: "",
    id: "1",
    full_name: 'Morgun Loftin',
    email: 'mloftina@seesaa.net',
    start_date: '2023-01-01',
    description:
      'curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus',
    phone_number: '(276) 7786350',
    status: 'INACTIVE',
  },
  {
    photo: "",
    id: "1",
    full_name: 'Tamarah Keune',
    email: 'tkeuneb@indiegogo.com',
    start_date: '2022-12-31',
    description:
      'in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis',
    phone_number: '(358) 9772171',
    status: 'INACTIVE',
  },
  {
    photo: "",
    id: "1",
    full_name: 'Lonee Gribben',
    email: 'lgribbenc@guardian.co.uk',
    start_date: '2022-12-30',
    description:
      'praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi',
    phone_number: '(721) 2100012',
    status: 'INACTIVE',
  },
  {
    photo: "",
    id: "1",
    full_name: 'Drusilla Hyams',
    email: 'dhyamsd@biblegateway.com',
    start_date: '2022-12-29',
    description:
      'nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat',
    phone_number: '(277) 9613603',
    status: 'INACTIVE',
  },
  {
    photo: "",
    id: "1",
    full_name: 'Aarika Pole',
    email: 'apolee@simplemachines.org',
    start_date: '2022-12-05',
    description:
      'integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar',
    phone_number: '(825) 3509277',
    status: 'ACTIVE',
  },
  {
    photo: "",
    id: "1",
    full_name: 'May Sotworth',
    email: 'msotworthf@mail.ru',
    start_date: '2022-12-04',
    description:
      'vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id',
    phone_number: '(471) 1048907',
    status: 'INACTIVE',
  },
  {
    photo: "",
    id: "1",
    full_name: 'Rosalyn Soonhouse',
    email: 'rsoonhouseg@feedburner.com',
    start_date: '2022-12-04',
    description:
      'habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat',
    phone_number: '(784) 8071239',
    status: 'ACTIVE',
  },
  {
    photo: "",
    id: "1",
    full_name: 'Kathryn Chalder',
    email: 'kchalderh@businessinsider.com',
    start_date: '2022-12-03',
    description:
      'ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis',
    phone_number: '(891) 2140317',
    status: 'ACTIVE',
  }
]  
module.exports = { usersData } 