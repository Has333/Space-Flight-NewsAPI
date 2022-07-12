# Space Flight News API

## :clipboard: About
This is an automation project with the purpose of gathering articles from the Space Flight News API service and storing them in a MongoDB Atlas database. The automation runs a cron job everyday at 9AM to do so. This challenge is proposed by Coodesh, a platform that connects hiring companies with developers and sets them up with tech challenges. 

---

## :package: Dependencies
* [Express](https://expressjs.com)
* [Axios](https://axios-http.com)
* [Dotenv](https://npmjs.com/package/dotenv)
* [Nodemon](https://nodemon.io/)
* [Mongoose](https://mongoosejs.com/)
* [Node-Cron](https://www.npmjs.com/package/node-cron)

---

## Requirements

Git, Node.js and a code editor, like VSCode.

---

## :file_folder: How to install and use
* Clone repository.
```
    $ git clone https://github.com/Has333/Space-Flight-NewsAPI.git
```

* Access main directory.

```
    $ cd Space-Flight-NewsAPI
```
* Install all dependencies using the command `npm install` (or `yarn install` depending on your package manager).

```
    $ npm install || yarn install
```

---

## Setting up environment variables

Now, we need to open the project with a code editor to set up environment variables, by creating a `.env` file based on `.env.example` on the project folder. We need to add a port for our server to use, and the credentials to the MongoDB Atlas database account you want the articles to be stored in.

---

Afterwards, we can run `npm start` on the terminal. We can leave the automation running and it will update the database everyday at 9AM, or, on our server.js file, we can import { Automation } from upsert-articles-to-db.js and execute it with the .run() method before running `npm start`, resulting in the automation running instantly.
