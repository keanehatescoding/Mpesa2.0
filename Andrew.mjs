constructor(first_Name, id_Number, phone_number, pin, deposit){
  this.name = first_Name;
  this.ID_No = id_Number;
  this.phone_number = phone_number;
  this.PIN = pin;
  this.balance = deposit;
  this.group = 'Sacco';
  this.id = (Math.random()*101).toFixed(2);
  this.transactionHistory = []
  ;
  };
  sendMoney( recipientPhoneNumbers , amounts , pins ){
    const maxRetries = 3
    let retries = 0 
    if (!Array.isArray(recipientPhoneNumbers)){
      recipientPhoneNumbers = [recipientPhoneNumbers]
      amounts = [amounts]
      pins = [pins]
    }
    if(recipientPhoneNumbers.length !== amounts.length && amounts.length !== pins.length){
      console.log(`The number of phone numbers, amounts and pins should be the same`)
      return
    }
    for(let i=0; i< recipientPhoneNumbers.length; i++){
      const recipientPhoneNumber = recipientPhoneNumbers[i]
      const amount = amounts[i]
      const pin = pins[i]

      if(typeof recipientPhoneNumber !== 'number' && typeof amount !== 'number' && typeof pin !== 'number'){
        console.log(`Please correct your input. You type ${recipientPhoneNumber} as phone number\n ${amount} as amount \n and ${pin} as pin.`)
        return
      }

      const recipientAccount = accounts.find(account => account.phone_number === recipientPhoneNumber)

      if (!recipientAccount){
        console.log(`There is no such sender. Are you sure it's ${recipientPhoneNumber} sent or try another phone number`)
      continue 
      }

      const senderAccount = this
      if (senderAccount.PIN === pin){
            console.log(`Amount in account: ${this.balance}`)
            let transactionalFee = 0
            switch (true){
              case amount<= 1000:
                transactionalFee = 10
                break 
              case amount<=10000:
                transactionalFee = 15
                break
              case amount>10000:
                transactionalFee = 20
                break
              default:
                console.log('How were you able to do this')
                break
              }
        if (this.balance >= amount + transactionalFee){
          this.balance -= amount + transactionalFee
          recipientAccount.balance += amount 
          console.log(`Successfully sent ${amount} to ${recipientAccount.name} : ${recipientAccount.phone_number}`)
          this.addToTransactionHistory('Sending money',amount)
            }
          }else {
            console.log('Incorret Password please try again')
            retries++
            if(retries<= maxRetries){
              console.log(`Retrying (${retries} out of ${maxRetries})`)
              this.sendMoney(recipientPhoneNumber, amount, pin)
            } else{
              console.log ('Maximum retries reached. Your account is blocked. This incident will be reported.')
        }
      }
    }
  }
  withdraw(amount,pin){
    const maxRetries = 3
    let retries = 0 
    if (typeof amount !== 'number' || typeof pin !== 'number'){
      return `Please correct your input in order to withdraw from your accont.\n You entered amount as ${amount} and pin as ${pin}`
    }
    const withdrawInternally = ()=>{
      if (this.PIN === pin){
        if(this.balance >= amount){
          this.balance -= amount
          console.log(`You have Successfully withdrawn ${amount} from your account`)
          this.addToTransactionHistory('Widthdraw',amount)
        } else{
          console.log (`Insufficient funds, kindly add more money in your account to be able to with draw this ammount.\n Your account balance is ${this.balance}`)}
      } else{
        if (retries<=maxRetries){
          console.log(`Incorrect pin please try again.Retrying ${retries} out of ${maxRetries}`)      
          retries++
          withdrawInternally()
        } else {
          console.log(`You have exceeded the maximum number of retries.`)
          }
      }
    }
    withdrawInternally()
  }
  addToTransactionHistory(transactionalType,amount){
    this.transactionHistory.push({
      type: transactionalType,
      amount: amount
    })
    console.table(this.transactionHistory)
  }
  createGrp(groupName, members){
    if (typeof group !== 'string' && !Array.isArray(members)){
      console.log(`Please correct your input in order to create the group with your desired memebers.\n You entered group as ${group} and userName as ${members}`)
      return
  } else{ 
      for (let i=0;i<members.length;i++){
      const member = members[i]
      const memberAccount = accounts.find(account =>account.name === member)
      console.log (memberAccount)
        if(!memberAccount){
          console.log(`The account with the name ${member} does not exist. Please correct your spelling `)
        }
        if (memberAccount.group === undefined){
          memberAccount.group = groupName
          console.log(`You have Successfully created the group ${groupName} and added ${members.join(', ')} `)
        }
      }
    }
  }
  delMember(group,members){
    if (typeof group !== 'string' && !Array.isArray(members)){
      console.log(`Please correct your input in order to delete member from the specified group.\n You entered group as ${group} and member as ${members.join(', ')}`)
      return
    } else {
      for(let i=0;i<members.length;i++){
        const member = members[i] 
        const memberAccount = accounts.find(account=>account.name ===member )
        if(!memberAccount){
          console.log (`This ${member} does not exist please check the spelling again`)
        } else {
          memberAccount.group = groupName
          console.log(`You have successfully removed ${memberAccount} from this ${groupName}`)
        }
      }
    }
  }
  recurrent(group,amount,Interval){
    if (typeof group !== 'string' || typeof amount !== 'number' || typeof Interval !== 'number'){
      return `Please correct your input to proceed sending money to the accounts.\n You entered group as ${group}\n amount as ${amount}\n Interval as ${Interval}`
    } else {
      const recipientAccounts = accounts.filter(account => account.group === group)
      setTimeout(()=>{
      recipientAccounts.forEach(recipientAccount => {
        recipientAccount.balance += amount
        this.addToTransactionHistory('Free mulla', amount)
      console.log(`Successfully added ${amount} to ${recipientAccount.phone_number}.\n There new acccount balance is ${recipientAccount.balance}`)
      })
      }, Interval)
    }
  }
}
var account0 = new Account ('Emma',42839714,254769456848,2353,10000000)
var account1 = new Account ('Liam',58291647,254769456848,2353,10000000)
var account2 = new Account ('Olivia',74320581,254769456848,2353,10000000)
var account3 = new Account ('Alice',13987420,254769456848,2353,10000000)
var account4 = new Account ('Bob',40182736,254769456848,2353,10000000)
var account5 = new Account('Charlie', 45893621, 254729183746, 6832, 492810)
var account6 = new Account('David', 27493168, 254718364729, 5197, 893642)
var account7 = new Account('Emily', 81934625, 254712938475, 2765, 625743)
var account8 = new Account('Frank', 56784329, 254734298165, 9374, 374829)
var account9 = new Account('Grace', 69481723, 254701928374, 4829, 529384,)
var account10 = new Account('Henry', 42873915, 254726374819, 6273, 837192)
var account11 = new Account('Isabella', 92184763, 254733298167, 7384, 492738)
var account12 = new Account('Jack', 36294815, 254712937485, 9834, 672938)
var account13 = new Account('Noah', 84927361, 254707392847, 3749, 829374)
var account14 = new Account('Andrew', 17364928, 254705849273, 5479, 50000)
var account1 = new Account('Ava', 12345678, 987654321012, 1234, 10000);
var account2 = new Account('William', 23456789, 210987654321, 2345, 20000);
var account3 = new Account('Sophia', 34567890, 321098765432, 3456, 30000);
var account4 = new Account('Benjamin', 45678901, 432109876543, 4567, 40000);

let accounts = [account0, account1, account2, account3, account4, account5, account6, account7, account8, account9, account10, account11, account12, account13, account14 ]

//send money to one contact
console.log(account14.sendMoney(254769456848,6000,5479))
//send money to multiple contacts
console.log(account14.sendMoney(254733298167,12000,5479))
console.log(account14.sendMoney(254729183746,1000,5479))
console.log(account14.sendMoney(254707392847,4000,5479))
//create a group of 10 user and name it Sacco
console.log(account14.createGrp('Sacco', ['Alice', 'Bob', 'Charlie', 'David', 'Emily', 'Frank', 'Grace', 'Henry', 'Isabella', 'Jack']))
console.log(account14.createGrp('Chama',['Emma', 'Liam', 'Olivia', 'Noah', 'Ava', 'William', 'Sophia', 'Benjamin']))
//remove a group of users 
console.log(account14.delMember('Sacco', ['Alice', 'Bob', 'Charlie', 'David', 'Emily', 'Frank']))
//Give money to the users
console.log(account14.recurrent('Sacco',100,24000))
console.log(account14.recurrent('Chama',100,24000))
//Widthdraw money
console.log(account14.withdraw(500,5479))
console.log(account14.withdraw(1000,5479))
//send 1000 to mom
console.log(account14.sendMoney(254701928374,1000,5479))
//Show his transactional history
console.log(account14.transactionHistory)
