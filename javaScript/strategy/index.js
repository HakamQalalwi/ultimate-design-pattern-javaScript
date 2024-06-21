// PricingStrategy interface
class PricingStrategy {
  calculatePrice(price) {
    throw new Error("Method 'calculatePrice()' must be implemented.");
  }
}

// RegularPricingStrategy
class RegularPricingStrategy extends PricingStrategy {
  calculatePrice(price) {
    return price;
  }
}

// GoldPricingStrategy
class GoldPricingStrategy extends PricingStrategy {
  calculatePrice(price) {
    return price * 0.9; // 10% discount
  }
}

// PremiumPricingStrategy
class PremiumPricingStrategy extends PricingStrategy {
  calculatePrice(price) {
    return price * 0.8; // 20% discount
  }
}

// PaymentStrategy interface
class PaymentStrategy {
  processPayment(amount) {
    throw new Error("Method 'processPayment()' must be implemented.");
  }
}

// BankTransferPaymentStrategy
class BankTransferPaymentStrategy extends PaymentStrategy {
  processPayment(amount) {
    console.log(`Processing payment of bank transfer... Amount: ${amount}`);
  }
}

// PaypalPaymentStrategy
class PaypalPaymentStrategy extends PaymentStrategy {
  processPayment(amount) {
    console.log(`Processing payment of Paypal... Amount: ${amount}`);
    console.log(`Calculating fees for Paypal...`);
  }
}

// VisaCardPaymentStrategy
class VisaCardPaymentStrategy extends PaymentStrategy {
  processPayment(amount) {
    console.log(`Processing payment of Visa card... Amount: ${amount}`);
    console.log(`Calculating fees for Visa card...`);
  }
}

// Product class
class Product {
  constructor(name, price, pricingStrategy) {
    this.name = name;
    this.price = price;
    this.pricingStrategy = pricingStrategy;
  }

  calculatePrice() {
    return this.pricingStrategy.calculatePrice(this.price);
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getPrice() {
    return this.price;
  }

  setPrice(price) {
    this.price = price;
  }

  setPricingStrategy(pricingStrategy) {
    this.pricingStrategy = pricingStrategy;
  }
}

const regularPrice = new RegularPricingStrategy();
const goldPrice = new GoldPricingStrategy();
const premiumPrice = new PremiumPricingStrategy();

const wallet = new Product("Wallet", 100, regularPrice);
const jacket = new Product("Jacket", 200, goldPrice);
const mobile = new Product("Mobile", 300, premiumPrice);

console.log(`Wallet Price: ${wallet.calculatePrice()}`);
console.log(`Jacket Price: ${jacket.calculatePrice()}`);
console.log(`Mobile Price: ${mobile.calculatePrice()}`);

const bankTransferPayment = new BankTransferPaymentStrategy();
const paypalPayment = new PaypalPaymentStrategy();
const visaCardPayment = new VisaCardPaymentStrategy();

function processPayment(paymentStrategy, amount) {
  paymentStrategy.processPayment(amount);
}

processPayment(bankTransferPayment, 1000);
processPayment(paypalPayment, 500);
processPayment(visaCardPayment, 800);

// Wallet Price: 100
// Jacket Price: 180
// Mobile Price: 240
// Processing payment of bank transfer... Amount: 1000
// Processing payment of Paypal... Amount: 500
// Calculating fees for Paypal...
// Processing payment of Visa card... Amount: 800
// Calculating fees for Visa card...
