# Contact Keeper

Contact Keeper is a MERN (MongoDB, Express.js, React.js, Node.js) Application that manages your contacts. It has user authentication through JWTs.


You can visit the site at [https://christianartycontactkeeper.herokuapp.com](https://christianartycontactkeeper.herokuapp.com)
## Installation

Clone this repo and npm install the package.json

```bash
git clone https://github.com/christianarty/Contact-keeper.git
cd Contact-keeper/
npm install
npm clientinstall
```

Now you have to edit your environment variables

- Create a file called `.env` and add your Mongo URI and JWT Secret into the file as `MONGO_URI` & `JWT_SECRET`, respectively

```json
//.env
  "MONGO_URI": \<ENTER MONGODB_CONNECTION_STRING_HERE\>
  "JWT_SECRET": \<ENTER_YOUR_SECRET_HERE\>
```

After that initalization, you can run the dev server using:

```bash
npm run dev
```

## Technologies Used in this project:

- React.js
- Express.js
- MongoDB
- Node.js
- JWT (_for authentication_)

## Status

The application has been completed, frontend-to-backend. Any additional improvements are welcome. 

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
