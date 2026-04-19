// credit card type: VERVE CREDIT CARD

class CreditCardValidator {
    constructor(tag, cardNumber) {
        this.tag = tag;
        this.cardNumber = cardNumber;
        this.cardPattern = /^(5060|6500|5078)[0-9]{12,13}$/; // Verve Credit Card pattern
    }

    validate() {
        if (this.cardPattern.test(this.cardNumber)) {
            return `${this.tag}: Valid Verve Credit Card number.`;
        } else {
            return `${this.tag}: Invalid card number. Please enter a valid Verve Credit Card number.`;
        }
    }
}

const card1 = new CreditCardValidator("card1", "5078720068051050");
const card2 = new CreditCardValidator("card2", "9634567890123456");


console.log(card1.validate()); // Output: card1: Valid Verve Credit Card number.
console.log(card2.validate()); // Output: card2: Invalid card number. Please enter a valid Verve Credit Card number.