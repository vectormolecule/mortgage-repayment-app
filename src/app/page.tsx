"use client";
import { calculateLoanPayment } from "./component/loan";
import Completed from "./component/Completed";
import Form from "./component/Form";
import Result from "./component/Result";
import { useState } from "react";

export default function Home() {
  const [isMortgageCalculated, setIsMortgageCalculated] = useState(false);

  const [mortgage, setMortgage] = useState({
    monthlyPayment: 0,
    totalRepayment: 0,
  });

  function calculateMortgage(amount, terms, rate) {
    setMortgage(calculateLoanPayment(amount, terms, rate));
    setIsMortgageCalculated(true);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
        <Form onCalculateMortgage={calculateMortgage} />
        {isMortgageCalculated ? <Completed mortgage={mortgage} /> : <Result />}
      </div>
    </div>
  );
}
