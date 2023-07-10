# StorefrontApp

This is a code repository for creating a simple e-commerce frontend app using React,Next.js,Tailwind Css and Medusa server.

### Application functionality

The user of the app can:
- view a list of all products
- filter products by categories and search products by their handle
- visit a product details page
- choose among the product variants

### Getting started

- In `frontend` folder redirect to `my-app` folder and then run `npm install`,after that you can run `npm run dev`.

- For the backend part of the project you can delete folder `my-medusa-store` and set up backend by following instuctions on this link: `https://docs.medusajs.com/development/backend/install`

### Project Description

Application has three pages:

- Homepage
- Products page
- Prduct info page

#### Homepage

On the homepage user can click on browse products or in the navbar products and that will take him to the products page.

#### Products page

On the products page user can view all products and also he can filter products by category and search for a product by their handle(e.g. coffee-mug,hoodie...).When the user clicks on a product it takes him to the product info page. 


#### Product info page

On the product info page user can view the product image and also he can see the price of a product depending on the variant he selects and also he can select the amount he wants.When clicking on Add to cart it only confirms that the product has been added to cart but in this project I didn't implement the cart functionality.Also the user can click on Product Details and see the details of the product.


### Personal notes

Time spent on creating this project was around 7 days. The part that was most challenging was creating a filter and search component and they are also the components I am most proud of.