# CulinaryCompass
Explore this Next.js 14 platform to share meal prep idea, integrating Cloudinary API for image uploads and Nginx as a frontend proxy running on separate docker containers. 

Nextjs is hosted on Vercel: https://culinary-compass-psi.vercel.app/
<br />
Currently Nginx and backend isn't hosted so, the user won't be able to upload meals.

# Image Credits:
First things first, the meal images used in this project was downloaded from Unsplash. Check their amazing work on Unsplash:
* [Cheese Burger by Mae Mu](https://unsplash.com/photos/burger-with-vegetable-on-brown-wooden-tray-I7A_pHLcQK8)
* [Margherita Pizza by Aurélien Lemasson-Théobald](https://unsplash.com/photos/round-cooked-pizza-x00CzBt4Dfk)
* [Grilled Chicken Salad by Farhad Ibrahimzade](https://unsplash.com/photos/vegetable-salad-on-white-ceramic-bowl-LJ49dflDcH8)
* [Carbonara by Rob Wicks](https://unsplash.com/photos/pasta-on-white-ceramic-plate-_slDBXdJCdE)
* [Mango Smoothie by Alexander Mils](https://unsplash.com/photos/yellow-fruit-juice-on-glass-cup-pPhN8HFzkDE)
* [Salami Pizza by Alan Hardman](https://unsplash.com/photos/pepperoni-pizza-SU1LFoeEUkk)
* [Chocolate Chip Cookie by Shakti Rajpurohit](https://unsplash.com/photos/brown-cookies-on-white-ceramic-plate-qczubsyHofQ)
* [Chef Hat Icon by Graphix Dxinerz on flaticon](https://www.flaticon.com/free-icon/chef-hat_6723955?term=chef+hat&page=1&position=41&origin=tag&related_id=6723955)

# Screenshot:
![CulinaryCompass](https://github.com/ritish78/CulinaryCompass/assets/36816476/bfd1cada-bd8d-41b4-93dc-c76a4a143402)

# Prerequisite:
* Docker installed

# How to install:
1. First clone the repo. To do so, open the terminal and enter:
```
git clone https://github.com/ritish78/CulinaryCompass
```
2. You need to supply these environment variables:
````
POSTGRES_URL=
POSTGRES_PRISMA_URL=
POSTGRES_URL_NO_SSL=
POSTGRES_URL_NON_POOLING=
POSTGRES_USER=
POSTGRES_HOST=
POSTGRES_PASSWORD=
POSTGRES_DATABASE=

SERVER_PORT=5000
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
````
3. To use the app in dev build run this command in root folder:
```
docker compose up
```
4. To use the app in prod build run this command in root folder:
```
docker compose -f docker-compose-prod.yml up
```
5. The docker will run three container, one for frontend, one for backend and another for nginx.
6. Then visit http://localhost and the website will load without the need to specify port.

# Tech Stack used
* Backend: `Node.js` as Runtime, `http` from node to create server.
* Frontend: `Nextjs` framework which runs using `Javascript`.
* Proxy: `nginx` which is specified to run on docker container along with frontend and backend.
* Database: `Postgres` hosted on vercel.
* Image Manipulation: `Sharp` library is used to convert uploaded images to `webp` format.
* Cloud Storage: `Cloduinary` for the uploaded pictures, `Vercel` for Postgres.

### Nginx:
```
Client (Browser)
   |
   | HTTP request to localhost
   v
Nginx (localhost:80 in Docker)
   |
   | /api/* request
   |---------------------------> Backend Server (backend-culinarycompass:5000 in Docker)
   |
   | /* request
   v
Frontend Server (frontend-culinarycompass:3000 in Docker)
```
