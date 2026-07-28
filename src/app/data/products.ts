import { Product } from '../models/product';

export const PRODUCTS: readonly Product[] = [
  {
    id: 'P001',
    name: 'Wireless Headphones',
    description: 'Noise-cancelling over-ear headphones with 35-hour battery life.',
    price: 149.99,
    imageUrl: 'images/P001.svg',
    inStock: true,
    category: 'Electronics'
  },
  {
    id: 'P002',
    name: '4K Monitor',
    description: '32-inch UHD display with vivid colour and slim bezels.',
    price: 329.99,
    imageUrl: 'images/P002.svg',
    inStock: true,
    category: 'Electronics'
  },
  {
    id: 'P003',
    name: 'Portable SSD',
    description: '1 TB high-speed portable solid-state drive with USB-C.',
    price: 139.99,
    imageUrl: 'images/P003.svg',
    inStock: false,
    category: 'Electronics'
  },
  {
    id: 'P004',
    name: 'Smartphone Stand',
    description: 'Adjustable aluminium stand for smartphones and small tablets.',
    price: 19.99,
    imageUrl: 'images/P004.svg',
    inStock: true,
    category: 'Accessories'
  },
  {
    id: 'P005',
    name: 'Mechanical Keyboard',
    description: 'Compact keyboard with tactile switches and white backlighting.',
    price: 89.99,
    imageUrl: 'images/P005.svg',
    inStock: true,
    category: 'Accessories'
  },
  {
    id: 'P006',
    name: 'Wireless Mouse',
    description: 'Ergonomic rechargeable mouse with silent buttons.',
    price: 34.99,
    imageUrl: 'images/P006.svg',
    inStock: false,
    category: 'Accessories'
  },
  {
    id: 'P007',
    name: 'Air Purifier',
    description: 'Quiet HEPA air purifier designed for bedrooms and offices.',
    price: 119.99,
    imageUrl: 'images/P007.svg',
    inStock: true,
    category: 'Home'
  },
  {
    id: 'P008',
    name: 'LED Desk Lamp',
    description: 'Dimmable task lamp with adjustable colour temperature.',
    price: 44.99,
    imageUrl: 'images/P008.svg',
    inStock: true,
    category: 'Home'
  },
  {
    id: 'P009',
    name: 'Coffee Maker',
    description: 'Programmable 12-cup coffee maker with reusable filter.',
    price: 74.99,
    imageUrl: 'images/P009.svg',
    inStock: true,
    category: 'Home'
  },
  {
    id: 'P010',
    name: 'Smart Watch',
    description: 'Fitness tracking smartwatch with heart-rate and sleep monitoring.',
    price: 199.99,
    imageUrl: 'images/P010.svg',
    inStock: true,
    category: 'Wearables'
  },
  {
    id: 'P011',
    name: 'Fitness Band',
    description: 'Lightweight activity band with a seven-day battery.',
    price: 59.99,
    imageUrl: 'images/P011.svg',
    inStock: false,
    category: 'Wearables'
  },
  {
    id: 'P012',
    name: 'Smart Ring',
    description: 'Discreet wellness tracker with sleep and recovery insights.',
    price: 179.99,
    imageUrl: 'images/P012.svg',
    inStock: true,
    category: 'Wearables'
  },
  {
    id: 'P013',
    name: 'Classic Hoodie',
    description: 'Soft cotton-blend hoodie with a relaxed unisex fit.',
    price: 54.99,
    imageUrl: 'images/P013.svg',
    inStock: true,
    category: 'Clothing'
  },
  {
    id: 'P014',
    name: 'Running Shoes',
    description: 'Breathable everyday trainers with cushioned support.',
    price: 109.99,
    imageUrl: 'images/P014.svg',
    inStock: true,
    category: 'Clothing'
  },
  {
    id: 'P015',
    name: 'Winter Jacket',
    description: 'Water-resistant insulated jacket for cold-weather comfort.',
    price: 159.99,
    imageUrl: 'images/P015.svg',
    inStock: false,
    category: 'Clothing'
  }
];
