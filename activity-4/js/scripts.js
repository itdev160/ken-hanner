// welcome message
var user = 'Mike';
var salutation = 'Hello, ';
var greeting = salutation + user + '! Here are the latest Vulfpeck reviews.';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

//product price
//Live at Madison Square Garden price
var price = 10,
        studentDiscount = .10,
        studentPrice = price - (price * studentDiscount),
        priceEl = document.getElementById('msg-price'),
        studentPriceEl = document.getElementById('msg-student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);

//Hill CLimber price
var price = 10,
        studentDiscount = .10,
        studentPrice = price - (price * studentDiscount),
        priceEl = document.getElementById('hc-price'),
        studentPriceEl = document.getElementById('hc-student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);

//Beautiful Game price
var price = 10,
        studentDiscount = .10,
        studentPrice = price - (price * studentDiscount),
        priceEl = document.getElementById('bg-price'),
        studentPriceEl = document.getElementById('bg-student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);