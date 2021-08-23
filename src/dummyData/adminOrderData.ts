import {AdminOrderRow} from "../state/state-interfaces/AdminOrderRow";

const adminOrderData: AdminOrderRow[] = [
  {
    orderID: '543RF4RR3',
    orderImages: ['/item-images/chicken-burger.webp', '/item-images/creamy_cheese_sausage_pizza.webp', '/item-images/steak-with-mushrooms.webp'],
    orderDate: '19-08-2021',
    totalAmount: 5000.00,
    status: 'Error'
  },
  {
    orderID: '54FR4T53G',
    orderImages: ['/item-images/creamy_cheese_sausage_pizza.webp', '/item-images/steak-with-mushrooms.webp'],
    orderDate: '18-08-2021',
    totalAmount: 1000.00,
    status: 'Delivered'
  },
  {
    orderID: 'FDG454565',
    orderImages: ['/item-images/ham-and-cheese-submarine.webp'],
    orderDate: '17-08-2021',
    totalAmount: 2000.00,
    status: 'Accepted'
  },
  {
    orderID: 'GDFGF5466',
    orderImages: ['/item-images/steak-with-mushrooms.webp', '/item-images/vegi-fried-rice.webp', '/item-images/ham-and-cheese-submarine.webp'],
    orderDate: '19-08-2021',
    totalAmount: 500.00,
    status: 'Rejected'
  },
  {
    orderID: 'RTRGF4335',
    orderImages: ['/item-images/vegi-fried-rice.webp'],
    orderDate: '19-08-2021',
    totalAmount: 125.00,
    status: 'Pending'
  },
  {
    orderID: 'FDG454565',
    orderImages: ['/item-images/ham-and-cheese-submarine.webp', '/item-images/chicken-burger.webp'],
    orderDate: '17-08-2021',
    totalAmount: 2000.00,
    status: 'In-Transit'
  },
  {
    orderID: 'GDFGF5466',
    orderImages: ['/item-images/steak-with-mushrooms.webp'],
    orderDate: '19-08-2021',
    totalAmount: 500.00,
    status: 'Processing'
  },
  {
    orderID: 'RTRGF4335',
    orderImages: ['/item-images/vegi-fried-rice.webp', '/item-images/steak-with-mushrooms.webp'],
    orderDate: '19-08-2021',
    totalAmount: 125.00,
    status: 'Delivered'
  },
  {
    orderID: 'GHJ234565',
    orderImages: ['/item-images/ham-and-cheese-submarine.webp', '/item-images/chicken-burger.webp'],
    orderDate: '17-08-2021',
    totalAmount: 2000.00,
    status: 'Delivered'
  },
  {
    orderID: 'XYZ454789',
    orderImages: ['/item-images/ham-and-cheese-submarine.webp', '/item-images/steak-with-mushrooms.webp', '/item-images/chicken-burger.webp'],
    orderDate: '20-08-2021',
    totalAmount: 6000.00,
    status: 'In-Transit'
  },
]

export default adminOrderData;
