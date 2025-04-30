const shoppingCart = [
    { courseName: "JavaScript Basics", price: 29.99 },
    { courseName: "React for Beginners", price: 39.99 },
    { courseName: "Node.js Essentials", price: 34.99 },
    { courseName: "Advanced CSS Techniques", price: 24.99 },
    { courseName: "Full-Stack Development", price: 49.99 }
];

const yourShoppingCart = shoppingCart.reduce((acc, { price }) => acc + price, 0);
console.log(yourShoppingCart)

console.log("A")

Promise.resolve().then(function(){
    console.log("B")
})
console.log("C")