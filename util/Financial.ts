import type { FinancialData } from "../types/Finance";

export function calculateRentingCost(
  inputs: FinancialData
) {
  const monthlyBudget =
    inputs.monthlyBudget;

  const yearsStaying =
    inputs.yearsStaying;

  const totalRentingCost =
    monthlyBudget * 12 * yearsStaying;

  return totalRentingCost;
}

export function calculateBuyingCost(
  inputs: FinancialData
) {
  const homePrice =
    inputs.homePrice;

  const downPaymentPercent =
    inputs.downPayment;

  const interestRate =
    inputs.interestRate;

  const loanTermYears =
    inputs.mortgageTerm;

  const downPaymentAmount =
    homePrice * (downPaymentPercent / 100);

  const loanAmount =
    homePrice - downPaymentAmount;

  const totalInterest =
    loanAmount *
    (interestRate / 100) *
    loanTermYears;

  const totalBuyingCost =
    loanAmount + totalInterest;

  return totalBuyingCost;
}