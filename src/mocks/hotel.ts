import { FLIGHT_LISTS } from "./flight";

const HOTEL_LISTS = [
  {
    id: 1,
    name: "Sri Panwa",
    type: "Luxury Villa",
    location: "Panwa cape, Phuket",
    rating: 4.5,
    review: 82,
    price: 300,
  },
  {
    id: 2,
    name: "Livetel Hotel",
    type: "Hotel",
    location: "Kaset Nawamin, Bangkok",
    rating: 4.0,
    review: 22,
    price: 100,
  },
  {
    id: 3,
    name: "Fortune Hotel",
    type: "Hotel",
    location: "Huai Khwang, Bangkok",
    rating: 5.0,
    review: 52,
    price: 200,
  },
  {
    id: 4,
    name: "Miracle Hotel",
    type: "Hotel",
    location: "Lat Krabang, Bangkok",
    rating: 3.5,
    review: 12,
    price: 400,
  },
];

const HOTEL_DETAIL_LISTS = [...HOTEL_LISTS, ...FLIGHT_LISTS];

export { HOTEL_LISTS, HOTEL_DETAIL_LISTS };
