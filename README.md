# Tour Package Application
## Project Overview
This project is a full-stack application designed to manage and display tour packages. The front-end is built with React and TypeScript, while the back-end is powered by Node.js, also written in TypeScript. The application uses MongoDB or SQLite for the database, and Firebase is utilized for user authentication. The goal of the application is to provide a seamless and dynamic user experience while interacting with various tours, utilizing APIs for maps, weather, and more.

## Table of Contents
- Project Overview
- Features
- Technologies Used
- Installation
- Usage
- API Endpoints

## Header
- Login/Sign up page with custom design.
- Search button for finding all available tours.

## Footer
- Social media links redirect to the respective home pages.
- Email field with validation.

## Home
- Search functionality with dynamic tour availability based on the selected date.
- "Type" field represents different experience categories (e.g., beaches).
- "Tours" section displays popular tours fetched from the backend, shown in a carousel format with 8 tours.
- Hover effect on the favorite button.
- "Type" section dynamically displays the number of tours and the minimum price fetched from the backend for each category.
- "Contact Us" section is non-functional.
- "Top Attractions" cards display data fetched from the backend.

## Tour Package
- Fully functional filters.
- Filter data such as categories and destinations fetched from the backend.
- Pagination directly from the backend.
- Fixed values for reviews.

## Tour Details
- Static image for the destination.
- All tour information fetched from the backend.
- Calculation of the total price as more people are added.
- Google Maps API integration for tour location.
- Review section with average ratings calculated dynamically.

## Reviews
- Average reviews calculated as the mean of individual service ratings.
- Reviews are integer values.
- Users can rate each service while adding a review.
- Reviews are displayed on the page immediately after submission.

## Requirements
- Front-end in React with TypeScript.
- Back-end in Node.js with TypeScript.
- No use of any in TypeScript.
- Database using MongoDB or SQLite.
- At least 30 tours in the database.
- Protected Tours route.
- Carousel display for popular tours and activity types.
- Firebase authentication with options for email, Facebook, and Google.
- Persistent data management through the Node.js API.
- External libraries for styling are allowed.
- Use of private GitHub repository with frequent and - - conventional commits.
- All images must be hosted in an S3 bucket or Firebase Storage.
- Requisitos Opcionais
- Responsive application.
- Destination and destination details pages.
- Technologies Used
- Frontend: React, TypeScript
- Backend: Node.js, TypeScript, Express
- Database: MongoDB or SQLite
- Authentication: Firebase
- Styling: CSS, External Libraries
- APIs: Google Maps API, Weather API
- Image Hosting: S3 Bucket or Firebase Storage

## Technologies Used
- Frontend: React, TypeScript
- Backend: Node.js, TypeScript, Express
- Database: SQLite
- Authentication: Firebase
- Styling: CSS, External Libraries
- Image Hosting: Firebase Storage

## Installation
1. Clone the repository:
`git clone git@github.com:GutoKophal/Desafio_3_PB_Compass.git`

2. Install dependencies for both front-end and back-end:
`npm install`

3. Set up environment variables for Firebase, MongoDB/SQLite, and APIs.

4. Start Frontend
`npm run dev`

5. Start Backend
`npm run start:backend`

## Usage
- Navigate to http://localhost:5173/home to start using the application.
- Log in or sign up to explore tours.

## API Endpoints
- Use http://localhost:3000 to test Endpoints

### Tours
- /api/tours: Create and Fetch all Tours.
- /api/tours/:id: Fetch details of a specific Tours.
- api/tours/:id: Update and Delete Tours

### Types
- /api/types: Create and Fetch Types.
- /api/types/:id: Edit and Delete Types.


### Reviews
- /api/reviews: Post a new review.
- /api/reviews/all: Fetch all Reviews.

