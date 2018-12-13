import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'mytask';
  public a;
  public desc;
  transactiontype :String='debit';
  
  public  beginAccount=function()
  {
     var account =
                 {
                name: 'Revanth',
                startingBalace: 1000,
                runningBalance: 700
                }
                return account;
};

public   cleanTransaction=function()
{
     var transaction=
                   {
                    type:'debit',
                    amount:0.00,
                    description:'',
                   balance:0.00
                   }
                   return transaction;
};

 transactions =
  [
    {
    amount: 1000.00,
    description: 'Deposit',
    type: 'credit',
    balance:2000
  },
   {
    amount: 500.00,
    description: 'groceries',
    type: 'debit',
    balance:1500
  },
   {
    amount: 250,
    description: 'purchase',
    type: 'debit',
    balance:1250
  },
   {
    amount: 100.00,
    description: 'Deposit',
    type: 'credit',
    balance:1350
  },
   {
    amount: 350,
    description: 'rev purchase',
    type: 'debit',
    balance:1000
  },
   {
    amount: 300,
    description: 'itesm',
    type: 'debit',
    balance:700
  } 
];

 public transaction=this.cleanTransaction();
 public account=this.beginAccount();
 public transactionList=this.transactions;

  onSubmit(f)
  {
    console.log(f);
    this.a=f.value.amount;
    this. desc=f.value.description;
    var b=this.account.runningBalance;
    var ans=0;
    if(f.value.transactiontype === 'credit')
    {
      ans= b+this.a;
    }
    else{
      ans=b-this.a;
    }

    this.account.runningBalance=ans;
    this.transaction.amount=this.a;
    this.transaction.description=this.desc;
    this.transaction.type=f.value.transactiontype;
    this.transaction.balance=ans;
    console.log(this.transaction);
   console.log( this.transactions.push(this.transaction));
    this. transaction=this.cleanTransaction();
  }

}
