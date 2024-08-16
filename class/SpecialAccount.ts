import { DioAccount } from "./DioAccount"

export class SpecialAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (depositValue: number): void => {
    if (this.getValidateStatus()) {
      this.balance += (depositValue + 10)
      console.log('Voce depositou e ganhou mais 10,00')
    }
  }
}
