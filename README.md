
---

# Flowers E-commerce Platform

This project is a [Next.js](https://nextjs.org/) flowers e-commerce platform with two main sections:
- **Client**: accessible at `/` for users to browse and purchase products.
- **Admin**: accessible at `/admin` for managing products, orders, and other resources.

> **Note**: This project is for study purposes and is still under development, so not all features are fully functional.

## Demo

Explore the live demo here: [https://flowers-amber-seven.vercel.app](https://flowers-amber-seven.vercel.app)

### Admin Demo Account

To access the admin panel, use the following demo account credentials:

- **Email**: admin142857@gmail.com
- **Password**: @Vu142857

## Project Repositories

- **Frontend (Next.js)**: [https://github.com/Vux142857/flowers](https://github.com/Vux142857/flowers)
- **Backend API (Node.js/Express)**: [https://flowers-be.onrender.com](https://flowers-be.onrender.com)
- **Backend API Repository**: [https://github.com/Vux142857/flowers-be](https://github.com/Vux142857/flowers-be)

## Getting Started

To set up the project locally, follow the steps below:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Vux142857/flowers
   cd flowers
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Access the application**:

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the client site.

5. **Admin Panel**:

   Navigate to [http://localhost:3000/admin](http://localhost:3000/admin) to access the admin panel.

> **Note**: The backend API should also be running locally if you want to test all functionalities. Refer to the backend repository for setup instructions.

## Environment Variables

This project uses environment variables to manage API configurations. Create a `.env.local` file in the root directory and set up the following:

```env
NEXT_PUBLIC_API_URL=https://flowers-be.onrender.com
```

Replace `https://flowers-be.onrender.com` with the URL of your backend API if different.

## Project Structure

- **pages/**: Contains all pages for both client (`/`) and admin (`/admin`) sections.
- **components/**: Shared components used across both client and admin sections.
- **services/**: API service files for making HTTP requests to the backend.
- **styles/**: Global styles and styling utilities.

## Backend API

The backend API is developed using Node.js/Express and provides RESTful endpoints to manage products, orders, users, etc. Access the backend API documentation here: [Backend API Repository](https://github.com/Vux142857/flowers-be).

## Key Features

- **Client**:
  - Product listing and filtering
  - Shopping cart and checkout
  - User registration and login
- **Admin**:
  - Manage products, orders, categories
  - Monitor sales and inventory
  - Access reports and analytics

## Learn More

To learn more about Next.js, explore the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - official documentation for Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploying the Project

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

For more details on deploying a Next.js application, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

--- 