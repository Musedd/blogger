# blogger
# Fullstack Blog Application

This project is a fullstack blog application built with modern web technologies.  
It provides a main page where blog posts are displayed to visitors, as well as an admin page for performing administrative tasks such as creating and managing posts.

---

## Tech Stack

- Next.js – React framework for building the frontend and API routes  
- Tailwind CSS – utility-first CSS framework for responsive styling  
- MongoDB – NoSQL database for storing blog content and user data  

---

## Features

- Main Page:  
  - Displays all available blog posts  
  - Includes filtering by category  

- Admin Page:  
  - Create, update, and delete blog posts  
  - Upload images for posts and authors  

- Backend Integration:  
  - API routes built with Next.js  
  - Database operations with MongoDB  

---

## Project Structure

The main project is located on the **`master` branch**.  
Other branches may contain experiments, feature work, or migration history.  

---

## Getting Started

1. Clone the repository  
   ```bash
   git clone https://github.com/Musedd/blogger.git
   cd blogger
   ````
2. Install dependencies
   ```bash
   npm install
   ```
3. Set up environment variables
Create a .env.local file in the root directory and configure your MongoDB connection string:
```env
MONGODB_URI=your_mongodb_connection_string
```
4. Run the development server
   ```bash
   npm run dev
   ```

#License
This proj
