
function Completed({mortgage}) {
  return (
    <div className="bg-slate-900 py-8 px-8 max-w-96 rounded-bl-3xl">
      <p className="text-xl py-5">Your Result</p>
      <p className="text-sm text-slate-400 pb-5">
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments”
        again.
      </p>
      <div className="bg-slate-800 py-5 px-5 border-t-4 border-t-yellow-500  border-opacity-75 rounded-lg">
        <div className="py-5">
          <p className="text-slate-500 text-sm pb-1">Your monthly repayments</p>
          <p className="text-yellow-500 text-4xl font-bold pb-6 border-b border-b-gray-500">
            &pound;
            {mortgage.monthlyPayment
              .toFixed(2)
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </p>
        </div>
        <div>
          <p className="text-slate-500 text-sm pb-1 ">
            Total you&apos;ll repay over the term
          </p>
          <p className="text-xl font-bold">
            &pound;
            {mortgage.totalRepayment
              .toFixed(2)
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Completed;
