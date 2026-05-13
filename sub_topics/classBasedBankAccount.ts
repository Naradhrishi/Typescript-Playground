class BankAccount{
    private balance: number = 0;
    public owner: string;
    constructor(name: string){
        this.owner = name;
    }
    
    deposit(amount: number): void{
        this.balance += amount;
    }
    withdraw(amount: number): void{
        if(this.balance < amount){
            console.log("Insufficient balance !");
        }else{
            this.balance -= amount;
        }
    }
    getBalance(): number{
        return this.balance;
    }
    
}

const acc = new BankAccount("Rabi");
acc.deposit(500);
acc.withdraw(200);
acc.withdraw(400);  // should say insufficient funds
console.log(acc.getBalance()); // 300