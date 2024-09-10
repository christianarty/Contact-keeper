# Contact Keeper

Contact Keeper is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application designed to help you efficiently manage your contacts. It features user authentication through JSON Web Tokens (JWTs) to ensure secure access to your personal contact list.

## What is Contact Keeper?

Contact Keeper allows you to:
- Create an account and securely log in
- Add new contacts with details such as name, email, phone number, and type (personal or professional)
- View your entire contact list at a glance
- Edit existing contact information
- Delete contacts you no longer need
- Filter contacts by name or email for quick access

This application is perfect for individuals or small businesses looking for a simple, yet effective way to organize their contacts digitally.

You can visit the live site at [https://christianartycontactkeeper.herokuapp.com](https://christianartycontactkeeper.herokuapp.com)

## Installation

To set up Contact Keeper on your local machine, follow these steps:

1. Clone this repository:

git clone https://github.com/christianarty/Contact-keeper.git
cd Contact-keeper/


2. Install the required dependencies for both server and client:
```bash
npm install
npm run clientinstall
```

3. Set up your environment variables:
   - Create a file called `.env` in the root directory
   - Add your MongoDB URI and JWT Secret to the file as follows:


# .env file example

# MongoDB connection string
MONGO_URI=mongodb://username:password@cluster.mongodb.net/your_database_name

# JWT secret key (can be any long, random string)
JWT_SECRET=mysupersecretjwtkey123456789

# Note: Replace the values above with your actual MongoDB connection string and chosen JWT secret


4. Start the development server:
```bash
npm run dev
```


This will launch both the backend server and the React frontend in development mode. The application will be accessible at `http://localhost:3000` by default.

## How to Use Contact Keeper

1. Register for a new account or log in if you already have one.
2. Once logged in, you'll see your dashboard where you can manage your contacts.
3. To add a new contact, fill out the form on the left side of the screen and click "Add Contact".
4. Your contacts will be displayed on the right side. You can edit or delete them using the respective buttons.
5. Use the search bar at the top to filter your contacts by name or email.

## Technologies Used in this Project:

- React.js (Frontend framework)
- Express.js (Backend framework)
- MongoDB (Database)
- Node.js (Runtime environment)
- JWT (JSON Web Tokens for authentication)
- React Context API (For state management)
- Axios (For HTTP requests)
- Bcrypt (For password hashing)

## Status

The application is fully functional with a complete frontend and backend implementation. However, we're always open to improvements and new features. Some potential areas for enhancement include:

- Adding contact categories or tags
- Implementing a dark mode
- Adding the ability to import/export contacts
- Creating a mobile app version

## Contributing

We welcome contributions to improve Contact Keeper! If you have ideas for new features or improvements, please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

For major changes, please open an issue first to discuss what you would like to change. This ensures that your time is well spent and that your contributions align with the project's goals.

Thank you for your interest in Contact Keeper! We hope you find it useful for managing your contacts efficiently.
