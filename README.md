# Contact Keeper

Contact Keeper is a MERN (MongoDB, Express.js, React.js, Node.js) Application that manages your contacts. It has user authentication through JWTs.

## Installation

Clone this repo and npm install the package.json

```bash
git clone https://github.com/christianarty/Contact-keeper.git
cd Contact-keeper/
npm install
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
npm run server
```

or the soon-to-be production npm command:

```bash
npm run start
```

## Technologies Used in this project:

- React.js
- Express.js
- MongoDB
- Node.js
- JWT (_for authentication_)

## Status

The backend is still being built, but close to being done. The frontend still needs to be developed. So as of right now, only api calls through postman (or whatever else you use) can be sent. More progress is being made on this project daily so, I'll keep this section updated.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
