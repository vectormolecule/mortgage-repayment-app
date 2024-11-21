export function calculateLoanPayment(amount, terms, rate) {
  const p = amount;
  const i = rate / 100 / 12;
  const n = terms * 12;

  const monthlyPayment =
    (p * (i * Math.pow(1 + i, n))) / (Math.pow(1 + i, n) - 1);

  const totalRepayment = monthlyPayment * n;

  return {
    monthlyPayment,
    totalRepayment,
  };
}
