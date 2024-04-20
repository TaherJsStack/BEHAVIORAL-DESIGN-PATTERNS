interface IPayStrategy {
    pay(amount: number): void
}

class Cash implements IPayStrategy {
    pay(amount: number): void {
        console.log(`Paid using cash. Amount: ${amount}`);
    }
}

class Card implements IPayStrategy {
    pay(amount: number): void {
        console.log(`Paid using card. Amount: ${amount}`);
    }
}


class PayPal implements IPayStrategy {    
    pay(amount: number): void {
        console.log(`Paid using PayPal. Amount: ${amount}`);
    }
}


// class PaymentContext {
class ShoppingCart {

    private ammount: number = 0;
    
    constructor(
        private payStrategy: IPayStrategy
    ) { }    

    public setPayStrategy(payStrategy: IPayStrategy): void {
        this.payStrategy = payStrategy;
    }

    public payToCard(amount: number): void {
        this.ammount += amount;
    }
    
    public checkout(): void {
        this.payStrategy.pay(this.ammount);
        this.ammount = 0;
    }

}
 
// client confirmation
let card = new ShoppingCart(new Cash());

card.payToCard(100);
card.checkout();


card.setPayStrategy(new PayPal());
card.payToCard(5000);
card.checkout();

card.setPayStrategy(new Card());
card.payToCard(450);
card.checkout();






