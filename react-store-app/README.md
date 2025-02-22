# React Store App

This is a simple e-commerce web application built using React, React Router, and the Fake Store API. It allows users to browse products, add/remove items from the cart, adjust quantities, and view a dynamically updated total price with a discount.

## Features
- Fetches and displays products from the Fake Store API
- Add or remove products from the cart
- Adjust product quantity in the cart
- Displays total price with a 10% discount applied
- Responsive and styled with Tailwind CSS
- Navigation between Home and Cart pages using React Router

## Technologies Used
- React.js
- React Router
- Context API
- Tailwind CSS
- Fake Store API
- React Icons

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/react-store-app.git
   ```

2. Navigate into the project directory:
   ```sh
   cd react-store-app
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

4. Start the development server:
   ```sh
   npm start
   ```

## File Structure
```
react-store-app/
│-- src/
│   │-- components/
│   │   ├── Navbar.js
│   │-- context/
│   │   ├── CartContext.js
│   │-- pages/
│   │   ├── Home.js
│   │   ├── Cart.js
│   │-- App.js
│   │-- index.js
│-- public/
│-- package.json
│-- README.md
```

## Usage
1. Navigate to the home page to browse products.
2. Click "Add to Cart" to add items.
3. View the cart page to see added products.
4. Increase or decrease quantity within the cart.
5. The total price updates dynamically with a 10% discount applied.

## Known Issues
- Ensure that all dependencies are installed properly.
- If styles do not load, verify Tailwind CSS installation.
- If `npm start` fails, try `npm install` again.

## Future Enhancements
- User authentication for personalized carts
- Checkout process with payment integration
- Improved UI/UX with animations

## License
This project is open-source and available under the MIT License.

---

Developed by [Your Name]

