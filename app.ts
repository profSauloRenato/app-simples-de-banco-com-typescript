import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SpecialAccount } from './class/SpecialAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(50)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(20)
console.log(companyAccount)

const specialAccount: SpecialAccount = new SpecialAccount('Pedro', 8)
specialAccount.deposit(100)
console.log(specialAccount)