# Product Review System - Share Your Feedback
This project is a Product Review System that allows users to share their feedback and reviews for various products. It aims to provide a platform where users can express their opinions and help others make informed decisions when purchasing products. Users can query the three tables users, products, and reviews for data from all the three tables using the already laid out relationships

![ERD Diagram](./ERD.PNG)

## Built With:
1. Ruby: Provides the base clases to map to.
2. Active Record - Does the object relational mapping for the tables and classes

## Geting Started /Setup

1. Clone the repo
```sh
https://github.com/Soundmoney254/Product-review-Code-Challenge
 ```

 2. Download the code files form the repository.
 3. Open the files on your code editor.
 4. Run "bundle install" inside the app's root directory to install gems and dependancies.
 5. Run the application on the terminal using ``` bundle exec rake console ```
 6. This will open a pry session inside the application and you can start quering for data using methods in the three models.


## Features

1. **User Management**
  - Create a new user by providing their name and email.
  - Retrieve the name and email of a user.
  - Get a list of all user instances.
   
2. **Product Management**
  - Create a new product by providing its name, description, and category.
  - Modify the name, description, and category of a product after initialization.
  - Retrieve the name, description, and category of a product.
  - Get a list of all product instances.
   
3. **Review Management**
  - Create a new review by providing a user object, a product object, star rating, and comment.
  - Retrieve the star rating and comment of a given review.
  - Get a list of all review instances.
   
4. **Object Relationship Methods**
  - Retrieve the user associated with a given review.
  - Retrieve the product associated with a given review.
  - Retrieve all reviews given by a specific user.
  - Retrieve all reviews for a particular product.
  - Retrieve the average star rating for a product based on its reviews.
   
5. **Associations and Aggregate Methods**
  - Add a new review associated with a user and a product.
  - Retrieve the product with the highest star rating given by a user.
  - Remove all reviews given by a user for a specific product.
  - Retrieve a collection of all products reviewed by a user.
  - Retrieve a collection of all users who have reviewed a product.
 
## Limitations
Limited User Interface: The project focuses on the backend logic and does not provide have a graphical user interface. It can currently only be used on the CLI.

## License and copyright
The code in this project is licensed under the terms of the General Public License (GPL-3.0).

You are granted permission to use, modify, and contribute to the project under the conditions outlined in the GPL-3.0 license.

It is important to preserve and include the copyright and license notices in all copies and distributions of the project.

## Author
This project was created by Samuel Mbugua.