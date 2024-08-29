// 1. Password Matching
function checkPassword(password, confirmPassword) {
    if (password === confirmPassword) {
        console.log("Password Matched. Password validation Successful.");
    } else {
        console.log("Password didn't match. Password validation unsuccessful");
    }
}

// 2. Calculator
function calculator(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            console.log("Invalid operator");
            return;
    }

    console.log("Result:", result);
}

// 3. Color Mixer
function colorMixer(color1, color2) {
    let result;

    switch (true) {
        case (color1 === 'red' && color2 === 'blue') || (color1 === 'blue' && color2 === 'red'):
            result = 'purple';
            break;
        case (color1 === 'red' && color2 === 'yellow') || (color1 === 'yellow' && color2 === 'red'):
            result = 'orange';
            break;
        case (color1 === 'blue' && color2 === 'yellow') || (color1 === 'yellow' && color2 === 'blue'):
            result = 'green';
            break;
        default:
            result = 'Invalid color combination';
    }

    console.log(result);
}

// 4. Highest Marks
function findHighestMarks(marks) {
    let highest = marks[0];

    for (let i = 1; i < marks.length; i++) {
        highest = (marks[i] > highest) ? marks[i] : highest;
    }

    console.log("Highest marks:", highest);
}

// 5. Capitalize
function capitalizeName(name) {
    let capitalized = (name[0] === name[0].toLowerCase()) 
        ? name[0].toUpperCase() + name.slice(1) 
        : name;

    return capitalized;
}

// 6. Vowel Counter
function countVowels(name) {
    let vowelCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let char of name.toLowerCase()) {
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }

    console.log("Number of vowels:", vowelCount);
}

// 7. Remove Duplicates
function removeDuplicates(cart) {
    const uniqueCart = [...new Set(cart)];
    return uniqueCart;
}

// 8. Inverted Right-Angled Triangle Pattern with Asterisks
function printInvertedTriangle(rows) {
    for (let i = rows; i > 0; i--) {
        console.log('*'.repeat(i));
    }
}

// 9. Check for Divisibility
function checkDivisibility(numbers) {
    for (let num of numbers) {
        if (num % 3 === 0 && num % 2 !== 0) {
            console.log(num);
        }
    }
}

// 10. Correct a Bug (Double the Quantity)
function correctCartQuantities(cart) {
    for (let i = 0; i < cart.length; i++) {
        cart[i] *= 2;
    }
    return cart;
}

// 11. Unit Converter (Celsius to Fahrenheit)
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// 12. Calculate Rental Cost
function calculateRentalCost(days, carType) {
    let costPerDay;

    switch (carType) {
        case 'Economy':
            costPerDay = 4000;
            break;
        case 'Midsize':
            costPerDay = 10000;
            break;
        case 'Luxury':
            costPerDay = 20000;
            break;
        default:
            console.log("Invalid car type");
            return;
    }

    let totalCost = costPerDay * days;
    return totalCost;
}

// 13. Bill Splitter
function splitBill(costs, numberOfPeople) {
    let totalBill = costs.reduce((acc, cost) => acc + cost, 0);
    let perPerson = totalBill / numberOfPeople;

    return {
        totalBill: totalBill,
        perPerson: perPerson
    };
}

// 14. Calculate the Final Order Price
const calculateTotalCost = cart => {
    return cart.reduce((total, item) => total + item.unitPrice * item.quantity, 0);
};

// 15. Calculate the Percentage of the Discount
const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    let discount = originalPrice - discountedPrice;
    let percentage = (discount / originalPrice) * 100;
    return percentage.toFixed(2);
};

// 16. Generate a Random Number
(() => {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
})();

// 17. Build a Banking Application
let customer = {
    name: "John Doe",
    balance: 1000,
    deposit(amount) {
        this.balance += amount;
        return `Deposit successful! New balance: ${this.balance}`;
    },
    withdraw(amount) {
        if (amount > this.balance) {
            return "Insufficient balance!";
        }
        this.balance -= amount;
        return `Withdrawal successful! New balance: ${this.balance}`;
    }
};

// Example usages for the combined code

// 1. Password Matching
checkPassword('password123', 'password123'); // Password Matched. Password validation Successful.

// 2. Calculator
calculator(5, 3, '+'); // Result: 8

// 3. Color Mixer
colorMixer('red', 'blue'); // purple

// 4. Highest Marks
findHighestMarks([85, 92, 78, 90, 88]); // Highest marks: 92

// 5. Capitalize
console.log(capitalizeName("john"));  // John

// 6. Vowel Counter
countVowels("Jonathan"); // Number of vowels: 3

// 7. Remove Duplicates
let cart = ['apple', 'banana', 'apple', 'orange', 'banana'];
let newCart = removeDuplicates(cart);
console.log(newCart); // ['apple', 'banana', 'orange']

// 8. Inverted Right-Angled Triangle Pattern with Asterisks
printInvertedTriangle(6);

// 9. Check for Divisibility
checkDivisibility([3, 6, 9, 12, 15, 18, 21, 24, 27]);

// 10. Correct a Bug (Double the Quantity)
let cartQuantities = [2, 3, 5, 7];
let correctedCart = correctCartQuantities(cartQuantities);
console.log(correctedCart); // [4, 6, 10, 14]

// 11. Unit Converter (Celsius to Fahrenheit)
console.log(celsiusToFahrenheit(25));  // 77

// 12. Calculate Rental Cost
console.log(calculateRentalCost(3, 'Economy'));  // 12000

// 13. Bill Splitter
let bill = splitBill([100, 200, 150], 3);
console.log(bill); // { totalBill: 450, perPerson: 150 }

// 14. Calculate the Final Order Price
let cartItems = [
    { unitPrice: 100, quantity: 2 },
    { unitPrice: 150, quantity: 1 },
    { unitPrice: 200, quantity: 3 }
];
console.log(calculateTotalCost(cartItems)); // 950

// 15. Calculate the Percentage of the Discount
console.log(calculateDiscountPercentage(1000, 800)); // 20.00

// 16. Generate a Random Number
// The random number will be generated and logged automatically when the script runs.

// 17. Build a Banking Application
console.log(customer.deposit(500));  // Deposit successful! New balance: 1500
console.log(customer.withdraw(200)); // Withdrawal successful! New balance: 1300
console.log(customer.withdraw(2000)); // Insufficient balance!
