import { financialMetrics } from "../data/financialmetrics";

export const getCashAvailable = () => {
  return (
    financialMetrics.checking +
    financialMetrics.savings
  );
};

export const getNetWorth = () => {
  return (
    getCashAvailable() +
    financialMetrics.investments +
    financialMetrics.emergencyFund -
    financialMetrics.debt
  );
};

export const getDebt = () => {
  return financialMetrics.debt;
};

export const getEmergencyFund = () => {
  return financialMetrics.emergencyFund;
};