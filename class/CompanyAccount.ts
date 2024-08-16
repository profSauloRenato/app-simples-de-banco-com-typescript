import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (loanValue: number): void => {
    if (this.getValidateStatus()) {
      this.balance += loanValue
      console.log('Voce pegou um empréstimo')
    }
  }
}
