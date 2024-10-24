import { IProduct } from '@/services/client/product.service';
import freshFlower from '../landingpage/section1/freshFlower.png';

export const mockProducts: IProduct[] = [
  {
    id: 'product1',
    name: 'Product 1',
    status: 'active',
    category: {
      id: 'category1',
      name: 'Category 1',
      status: 'active',
      description: 'Description for Category 1',
      createdAt: new Date('2023-10-20'),
      updatedAt: new Date('2023-10-24'),
    },
    imageUrl: freshFlower,
    price: 19.99,
    remaining: 10,
    description: 'This is a description for Product 1.',
    tags: ['tag1', 'tag2'],
    slug: 'product-1',
    createdAt: '2023-10-24T12:34:56Z',
    updatedAt: '2023-10-24T12:34:56Z',
  },
  {
    id: 'product2',
    name: 'Product 2',
    status: 'active',
    category: {
      id: 'category2',
      name: 'Category 2',
      status: 'active',
      description: 'Description for Category 2',
      createdAt: new Date('2023-10-21'),
      updatedAt: new Date('2023-10-24'),
    },
    imageUrl: freshFlower,
    price: 29.99,
    remaining: 20,
    description: 'This is a description for Product 2.',
    tags: ['tag2', 'tag3'],
    slug: 'product-2',
    createdAt: '2023-10-24T12:34:56Z',
    updatedAt: '2023-10-24T12:34:56Z',
  },
  {
    id: 'product3',
    name: 'Product 3',
    status: 'active',
    category: {
      id: 'category3',
      name: 'Category 3',
      status: 'active',
      description: 'Description for Category 3',
      createdAt: new Date('2023-10-22'),
      updatedAt: new Date('2023-10-24'),
    },
    imageUrl: freshFlower,
    price: 39.99,
    remaining: 15,
    description: 'This is a description for Product 3.',
    tags: ['tag1', 'tag4'],
    slug: 'product-3',
    createdAt: '2023-10-24T12:34:56Z',
    updatedAt: '2023-10-24T12:34:56Z',
  },
  {
    id: 'product4',
    name: 'Product 4',
    status: 'active',
    category: {
      id: 'category1',
      name: 'Category 1',
      status: 'active',
      description: 'Description for Category 1',
      createdAt: new Date('2023-10-20'),
      updatedAt: new Date('2023-10-24'),
    },
    imageUrl: freshFlower,
    price: 49.99,
    remaining: 8,
    description: 'This is a description for Product 4.',
    tags: ['tag1', 'tag2'],
    slug: 'product-4',
    createdAt: '2023-10-24T12:34:56Z',
    updatedAt: '2023-10-24T12:34:56Z',
  },
  {
    id: 'product5',
    name: 'Product 5',
    status: 'active',
    category: {
      id: 'category2',
      name: 'Category 2',
      status: 'active',
      description: 'Description for Category 2',
      createdAt: new Date('2023-10-21'),
      updatedAt: new Date('2023-10-24'),
    },
    imageUrl: freshFlower,
    price: 59.99,
    remaining: 12,
    description: 'This is a description for Product 5.',
    tags: ['tag3'],
    slug: 'product-5',
    createdAt: '2023-10-24T12:34:56Z',
    updatedAt: '2023-10-24T12:34:56Z',
  },
];