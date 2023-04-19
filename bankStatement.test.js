const BankStatement = require("./bankStatement");

describe('BankStatement class', () => {
  it('starts at a balance of 0', () => {
    const balance = new BankStatement();

    expect(balance.getBalance()).toBe(0);
  });

  /* it('deposits 1000', () => {
    expect(new Balance).toBe(1000);
  }); */
})