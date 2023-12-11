# electeX Server

Welcome to the electeX server! This server is designed to handle various API endpoints for an electronic shop, including product management and user-related actions.

## API Endpoints

### Products

#### Get all products

- **Endpoint:** `/products`
- **Method:** GET
- **Description:** Retrieves information about all products in the electronic shop.

#### Get products by brand

- **Endpoint:** `/products/:brand`
- **Method:** GET
- **Description:** Retrieves products based on a specified brand.

#### Get product by ID

- **Endpoint:** `/product/:id`
- **Method:** GET
- **Description:** Retrieves detailed information about a product based on its ID.

#### Add a new product

- **Endpoint:** `/products`
- **Method:** POST
- **Description:** Adds a new product to the electronic shop. Requires valid product data.

#### Update a product

- **Endpoint:** `/updateProduct/:productId`
- **Method:** PUT
- **Description:** Updates an existing product based on its ID. Requires updated product data.

### Users

#### Get user by UID

- **Endpoint:** `/users/:uid`
- **Method:** GET
- **Description:** Retrieves user information based on the UID.

#### Add a new user

- **Endpoint:** `/users`
- **Method:** POST
- **Description:** Adds a new user to the system.

#### Add a product to user's cart

- **Endpoint:** `/users/:uid`
- **Method:** POST
- **Description:** Adds a product to the user's cart based on UID.

#### Remove a product from user's cart

- **Endpoint:** `/removeItem`
- **Method:** POST
- **Description:** Removes a product from the user's cart based on UID and product ID.

## Technologies Used

- **Express.js:** A web application framework for Node.js.
- **MongoDB:** A NoSQL database for storing and retrieving data.
- **Firebase:** Utilized for user authentication.
- **Cors:** Middleware for enabling CORS in Express.js.
- **dotenv:** Used for loading environment variables from a .env file.

## Getting Started

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Create a `.env` file and configure the necessary environment variables.
4. Run the server using `npm start`.

## Contact

For any inquiries or support, please contact us at merajfzn@gmail.com.
