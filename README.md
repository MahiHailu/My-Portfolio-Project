# Agricultural Product Supply Chain

## Overview
This project connects rural farmers with buyers, displaying available products and providing supply chain information.

## Features
- Display product listings.
- Add new products.

## Setup Instructions

1. Clone the repository:
    ```bash
    https://github.com/MahiHailu/My-Portfolio-Project.git
    cd My-Portfolio-Project
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `db.json` file in the project root with the following content:
    ```json
    {
      "products": [
        {
          "id": 1,
          "name": "Tomatoes",
          "price": 20,
          "description": "Fresh organic tomatoes",
          "quantity": 100,
          "farmer": "Farmer John"
        },
        {
          "id": 2,
          "name": "Potatoes",
          "price": 10,
          "description": "Organic potatoes",
          "quantity": 200,
          "farmer": "Farmer Jane"
        }
      ]
    }
    ```

4. Run the mock API:
    ```bash
    json-server --watch db.json --port 5000
    ```

5. Start the React app:
    ```bash
    npm start
    ```

## Usage
- Access the front-end application at `http://localhost:3000`.

## Project Architecture
- **React.js** for the front-end framework.
- **json-server** for simulating backend API.

## Demonstration
- The development process involved creating mock data for front-end simulation.
- Key achievements include a functional product list and form to add new products.

