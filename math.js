// Working with Money

a = 15.95 + 3.67;
console.log(a)

// To avoid inaccuracy in calcutng float numbers, convert the dollars to cents
b = (1595 + 367)/100
console.log(b)

// Math functions
console.log(Math.round(289.546))
console.log(Math.floor(2.89))
console.log(Math.ceil(2.34))

/*Add a toaster ($18.99) to your cart so you have 1 basketball, 1 t-shirt, and 1 toaster.
Choose $4.99 shipping for the toaster.

Calculate the cost of the products Order Summary
(before shipping and taxes).
Hint: calculate in cents to avoid
inaccuracies. Shipping & handling:

Items (3):

Calculate the Total before tax. Total before tax:

Calculate the 10% tax exactly. Estimated tax (10%):
Hint: use Math.round()
Order total:

Calculate Order total at the bottom.
after finishing 2i remove the toaster from your cart.*/

total = 1899 + 569 + 299
console.log("Total before tax:" + total/100)
tax = Math.round(total * .10) / 100
order_total = total/100 + tax 
console.log("Tax:" +tax)
console.log("Order total:"+ order_total )

