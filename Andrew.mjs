const contacts = ['Keane','Tamar','Irene','Kelvin','Viola','Joan','Trevis','William','Mom','Dad']
class Account{
  constructor(first_Name, id_Number, phone_number, pin, deposit, group){
  this.name = first_Name;
  this.ID_No = id_Number;
  this.phone_number = phone_number;
  this.PIN = pin;
  this.balance = deposit;
  this.group = group;
  this.id = (Math.random()*101).toFixed(2);
  ;
  };
  sendMoney( phone_number , amount , pin , maxRetries = 3){
    if (typeof phone_number != Int16Array && typeof amount != Float32Array && typeof pin != Int8Array ){//sanitize input from the user
      return `Please check you input and correct in order for you to be able to send money.\n You entered phone number: ${phone_number}\n amount: ${amount}\n pin : ${pin}` 
    } else {
      let retries = 0 // A user should not be able to input his/her password more than three times
      const sendMoneyInternal = () => {// This function checks how many times the user has put the wrong pin 
      const sendAccount = this.Accounts.find(Account=>Account.phone_number === phone_number)// locates the recipient's Account using his phone number
        if (!sendAccount){//if account does not exist send back this error.
          console.log('There is no such sender. Please check the phone number you sent or try another phone number')
        } else {phone_number.forEach((amount,pin)=>{
          if (this.PIN === pin){
            console.log(`Amount in account: ${balance}`)
            let transactionalFee = 0
            switch (amount){
              case amount<= 1000:
                transactionalFee = 20
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
              sendAccount.balance += amount
              console.log(`Successfully sent ${amount} to ${sendAccount.name} : ${phone_number}`)
            }
          }else {
            console.log('Incorret Password please try again')
            retries++
            if(retries<= maxRetries){
              console.log(`Retrying (${retries} out of ${maxRetries})`)
              sendMoneyInternal()
            } else{
              console.log ('Maximum retries reached. Your account is blocked. This incident will be reported.')
            } return
          }
        })}
      }
    }
  }
  withdraw(amount,pin,maxRetries = 3){
    if (typeof amount != Int16Array && typeof pin != Int8Array){
      return `Please correct your input in order to withdraw from your accont.\n You entered amount as ${amount} and pin as ${pin}`
    }
    let retries = 0 
    const withdrawInternally = ()=>{
      if (this.PIN === pin){
        if(this.balance <= amount){
          this.balance -= amount
        } else{
          console.log (`Insufficient funds, kindly add more money in your account to be able to with draw this ammount./n Your account balance is ${this.balance}`)}
      } else {
        if (retries<=maxRetries){
          console.log(`Incorrect pin please try again.Retrying ${retries} out of ${maxRetries}`)      
          retries++
          withdrawInternally()
        } else {
          console.log(`You have exceeded the maximum number of retries. This ccount has been blocked. This incident will be reported`)
          object.freeze(this)
        }
      }
    }
  }
}
class Admin extends Account{
  delMember(group,member){
    if (typeof group != String && typeof member != String ){
      return `Please correct your input in order to delete member from the specified group.\n You entered group as ${group} and member as ${member}`
    } else{
    group.forEach(member=> {
        if (group.includes(member) == true ){
        group.pop(member)
          console.log(`You have Successfully removed ${member} from ${group}`)
      } else {
          console.log(`This ${member} does not exist, please check your spelling.`)
      }
      })}
  }
  createGrp(group,userName){
  if (typeof group != String && typeof userName != String ){
      return `Please correct your input in order to create the group with your desired memebers.\n You entered group as ${group} and userName as ${userName}`
  } else{
      let Account = this.Account.find(account =>{Account.first_Name == userName })
      members = []
    members.push[userName]
    members.forEach(member => {
        function addUsersToGroup(Account, properyName = 'group', group){
        Account.forEach(account =>{
            Account[properyName] = group
          
            Object.values(Account)
            .filter(value => typeof value === 'object')
              .forEach(nestedAccount => addUsersToGroup([nestedAccount], properyName, group))
          })
        }
      })
    }
  };
  recurrent(group,amount,Interval){
  if (typeof group != String && typeof amount != Int16Array && typeof Interval != Float64Array){
      return `Please correct your input to proceed sending money to the accounts.\n You entered group as ${group}\n amount as ${amount}\n Interval as ${Interval}`
  } else {
      setTimeout(group.forEach((member)=>{
      const recipientAccount = this.Account.find(member => Account.group === member)
        recipientAccount.balance += amount
      console.log(`Successfully added ${amount} to ${recipientAccount.phone_number}.]\n There new acccount balance is ${recipientAccount.balance}`)
      }),Interval)
  }
  }
}
var admin = new Admin ('Keane',42839714,254769456848,2353,10000000,'Sacco')
var account1 = new Account ('Irene',58291647,254769456848,2353,10000000,'Sacco',)
var account2 = new Account ('Joan',74320581,254769456848,2353,10000000,'Sacco')
var account3 = new Account ('Trevis',13987420,254769456848,2353,10000000,'Sacco')
var account4 = new Account ('Nicholas',40182736,254769456848,2353,10000000,'Sacco')
var account5 = new Account('Alice', 45893621, 254729183746, 6832, 492810, 'Chama');
var account6 = new Account('Bob', 27493168, 254718364729, 5197, 893642, 'Sacco');
var account7 = new Account('Charlie', 81934625, 254712938475, 2765, 625743, 'Chama');
var account8 = new Account('Diana', 56784329, 254734298165, 9374, 374829, 'Sacco');
var account9 = new Account('Eve', 69481723, 254701928374, 4829, 529384, 'Chama');
var account10 = new Account('Frank', 42873915, 254726374819, 6273, 837192, 'Sacco');
var account11 = new Account('Grace', 92184763, 254733298167, 7384, 492738, 'Chama');
var account12 = new Account('Harry', 36294815, 254712937485, 9834, 672938, 'Sacco');
var account13 = new Account('Isabel', 84927361, 254707392847, 3749, 829374, 'Chama');
var account14 = new Account('Jack', 17364928, 254705849273, 5749, 491827, 'Sacco');

console.log(account1.withdraw)
