# Devconxserver

## Website live at https://devconx.netlify.app/


# How to setup locally

* Clone repo to your local machine ```git clone https://github.com/Divyansh-P/DevConXserver.git```
* Install dependencies ```npm i```
* Set up a MongoDB database either locally or online via <a href='https://www.mongodb.com/cloud/atlas'>MongoDB Atlas</a>
* Create a <a href="https://cloudinary.com/">Cloudinary account</a>
## Set up the following environment variables in .env file
```
DB_USER 
DB_PASSWORD 
DB_NAME 
JWT_KEY
COOKIE_KEY 
NODE_ENV = 'development'

//provided by cloudinary

CLOUDINARY_CLOUD_NAME 
CLOUDINARY_API_KEY 
CLOUDINARY_API_SECRET

//provided by open api 

OPENAI_API_KEY
```

* Start the app ```npm run dev```

