import Empty from '../component/Empty'

function Result() {
  return (
    <div className="bg-slate-900 py-16 rounded-bl-3xl max-w-96">
      <Empty />
      <div className="flex flex-col text-center w-full">
        <p className="text-2xl">Result Show here</p>
        <p className="px-10 py-5">
          Complete the form and click “calculate repayments” to see what your
          monthly repayments would be.
        </p>
      </div>
    </div>
  );
}

export default Result;
