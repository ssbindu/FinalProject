# FinalProject
### Project Title: An E-Commerce website named Dorji

### Project Description:

Hello! This is Shithi Sharma Bindu. Welcome to the description of my very first website. Basically, my website is a simple e-commerce website. In this file I have tried to explain what I have done in this project.
Features provided: 
•	Registration Page
•	Login Page
•	Home
•	New Arrivals
•	Products
•	Review
•	Log out
•	Sign out
•	Cart


### **Registration Page:**
This is the first page you will see in this website. This page will ask for your information like First Name, Last Name, Email id, Password, Date of Birth. After filling all this you can submit your information, and it will directly take you to the login page. But if you are already registered, you can directly go to the Log in page by clicking Log in HERE. If you try to register with same email id but with different other information, it will show that email id already exists. It will not let you do so.

![Screenshot 2022-05-17 182017](https://user-images.githubusercontent.com/103986892/168931159-6c0b3aa3-be68-40e0-aaf9-b10dd41e9638.png)


### **Login Page:** 
This is a simple page. After this page the home page comes. Here you can log in with email id and password what you have given while registering. If you put wrong email id , it will show you user does not exist. And if you put wrong password, it will show you that the password is incorrect.

![Screenshot 2022-05-17 182103](https://user-images.githubusercontent.com/103986892/168931292-a40e6af9-11ce-48f0-9c91-2295eea03d16.png)


![Screenshot 2022-05-17 182150](https://user-images.githubusercontent.com/103986892/168931313-206fc398-9242-4fad-b2c6-bc61f711f86b.png)


![Screenshot 2022-05-17 182248](https://user-images.githubusercontent.com/103986892/168931327-67fa602b-bcff-4424-b4d2-a787b9b1b9dd.png)

### **Home:**
The home page contains a navbar where you can see the name of my brand (Dorji) is written accompanied by home, New Arrivals, Products, Reviews, Log out , sign out , search icon and cart icon. Both Dorji and Home will take you to home page. In this page you will find a shop now button. By clicking on that you will directly go to the products page.

![Screenshot 2022-05-17 182401](https://user-images.githubusercontent.com/103986892/168931488-c1d21837-b8ba-4177-bb18-72e0690394b0.png)

### **New Arrivals:** 
Clicking on here you will go to the new arrival section. Where some dresses will come to you through auto transition. If you move your cursor through the photos, there will be a see all button which will take you to products page.

![Screenshot 2022-05-17 182551](https://user-images.githubusercontent.com/103986892/168931632-5e4c6736-9933-463a-87fe-e31e1c7a2a9c.png)

### **Products:**
It will show you all the products of the page.  Each product has product category, Name, Material, color, starts, price and add to cart button .If you click on this button, you will directly go to the cart page.

![Screenshot 2022-05-17 182629](https://user-images.githubusercontent.com/103986892/168931720-a1d45770-b96a-4f9d-97c1-c65db286199c.png)

### **Reviews:**
Reviews will take you to the current reviews page is having.

![Screenshot 2022-05-17 182708](https://user-images.githubusercontent.com/103986892/168931898-fd2f45aa-0410-4167-a444-5ac410263df7.png)

### Log out and Sign Out:
Log out will temporarily log out one user and sign out will permanently delete one customer and all his information form the database. If you log out, it will take you to log in page and if you sign out, it will take you to registration page.

### **Cart:**
This page will show the products you have added to cart and the total amount of price. You can delete any product from cart as well by clicking on delete button. 

![Screenshot 2022-05-17 183044](https://user-images.githubusercontent.com/103986892/168931970-8bd892f8-1a40-4829-b38b-ca34c4ee5b06.png)


### **Technologies I used for this project are:**
**Frontend:** 
HTML, CSS, Javascript

**Backend:** 
MysqL

### Future Implementations:
Since in this project I did not add any checkout and payment option, I will add this and update the readme file accordingly.

### ER Diagram:

![Screenshot 2022-05-17 205857](https://user-images.githubusercontent.com/103986892/168935914-c338cdb1-65e2-40a1-80b0-74f622a1d437.png)

### Brief Explanation of Entities: 

### User: 
User can login with his credentials and can add one or many products.
### Product:
Products are chosen by user and if user adds to cart, it will be shown in cart.
### Cart:
Products added by user can be shown here. User can delete product from here.
### Payment: (Yet to be done in the project)
In the last stage user will be able to make payment and checkout.


### How to execute the project:
- Download the project.
- Download nodejs
- Download MysqL Workbench
- Inside the files of the project, in connection.js file remove my password from password section and put your password of mysql.
- In MysqL Workbench (in query 1), paste these lines of codes:

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Your Password';

FLUSH PRIVILEGES;

create schema ecom_bindu;

- Then go to terminal and write the single line of code 

npm run dev

after clicking enter the server will start.

- Then go to search engine and write localhost:3000 and press enter. You will get to see my website.

