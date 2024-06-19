const EventType = {
  NEW_PRODUCT: "NEW_PRODUCT",
  NEW_OFFER: "NEW_OFFER",
  JOB_OPENING: "JOB_OPENING",
};

class Subscriber {
  notify(message) {
    throw new Error("Method 'notify()' must be implemented.");
  }
}

class Customer extends Subscriber {
  constructor(name) {
    super();
    this.name = name;
  }

  notify(message) {
    console.log(`Notifying user: ${this.name} about: ${message}`);
  }
}

class JobFinder extends Subscriber {
  constructor(name) {
    super();
    this.name = name;
  }

  notify(message) {
    console.log(
      `${this.name} is receiving a notification about job finding: ${message}`
    );
  }
}

class Offer {
  constructor(message) {
    this.message = message;
  }

  getMessage() {
    return this.message;
  }
}

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }
}

class ShippingCompany extends Subscriber {
  constructor(name) {
    super();
    this.name = name;
  }

  notify(message) {
    console.log(`${this.name} is receiving notification about: ${message}`);
  }
}

class OnlineMarketplace {
  constructor() {
    this.subscribers = new Map();
    this.initSubscriberEvents();
    this.products = [];
    this.offers = [];
  }

  initSubscriberEvents() {
    this.subscribers.set(EventType.NEW_PRODUCT, []);
    this.subscribers.set(EventType.NEW_OFFER, []);
    this.subscribers.set(EventType.JOB_OPENING, []);
  }

  subscribe(eventType, subscriber) {
    this.subscribers.get(eventType).push(subscriber);
  }

  unsubscribe(eventType, subscriber) {
    const subscribers = this.subscribers.get(eventType);
    const index = subscribers.indexOf(subscriber);
    if (index !== -1) {
      subscribers.splice(index, 1);
    }
  }

  addNewProduct(product) {
    this.products.push(product);
    this.notifySubscribers(
      EventType.NEW_PRODUCT,
      `New product is added: ${product.getName()}`
    );
  }

  addNewJobOpening(jobTitle) {
    this.notifySubscribers(
      EventType.JOB_OPENING,
      `New opening position is available: ${jobTitle}`
    );
  }

  addNewOffer(offer) {
    this.offers.push(offer);
    this.notifySubscribers(
      EventType.NEW_OFFER,
      `New offer is added: ${offer.getMessage()}`
    );
  }

  notifySubscribers(eventType, message) {
    this.subscribers
      .get(eventType)
      .forEach((subscriber) => subscriber.notify(message));
  }
}

const marketplace = new OnlineMarketplace();

const ahmed = new Customer("Ahmed");
const mahmoud = new Customer("Mahmoud");
const youssef = new Customer("Youssef");
const mustafa = new JobFinder("Mustafa");
const shippingCompany = new ShippingCompany("DHL");

marketplace.subscribe(EventType.NEW_PRODUCT, shippingCompany);
marketplace.subscribe(EventType.NEW_PRODUCT, ahmed);
marketplace.subscribe(EventType.NEW_OFFER, ahmed);
marketplace.subscribe(EventType.NEW_OFFER, mahmoud);
marketplace.subscribe(EventType.NEW_PRODUCT, youssef);
marketplace.subscribe(EventType.JOB_OPENING, mustafa);
marketplace.addNewJobOpening("Software Engineer");

const newProduct = new Product("Smartphone", 699.99);
marketplace.addNewProduct(newProduct);

const newOffer = new Offer("50% off on all electronics");
marketplace.addNewOffer(newOffer);

console.log(marketplace);
