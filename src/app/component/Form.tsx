import { useState } from "react";
import CalculatorSvg from "./CalculatorSVG";

const initialValues = {
  amount: "",
  terms: "",
  rate: "",
  type: "",
};

export default function Form({ onCalculateMortgage }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  function handleChanges(e) {
    setValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  function validate() {
    const newErrors = {};

    if (!values.amount) {
      newErrors.amount = "This field is required";
    }
    if (!values.terms) {
      newErrors.terms = "This field is required";
    }
    if (!values.rate) {
      newErrors.rate = "This field is required";
    }
    if (!values.type) {
      newErrors.type = "This field is required";
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      onCalculateMortgage(values.amount, values.terms, values.rate);
    }
  }

  function handleReset() {
    setValues(initialValues);
    setErrors({});
  }

  return (
    <div>
      <form
        id="form"
        onSubmit={handleSubmit}
        className="p-6 bg-white text-black w-full"
      >
        <div className="flex align-middle py-5 justify-between">
          <h1 className="text-xl text-blue-950">Mortgage Calculator</h1>
          <button
            id="reset"
            type="button"
            onClick={handleReset}
            className="text-sm text-blue-950 underline decoration-1 items-end"
          >
            Clear All
          </button>
        </div>
        <div className="form-control">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-blue-950"
          >
            Mortgage Amount
          </label>
          <div className="flex items-center mt-1">
            <p className="px-2 py-1 border border-sky-900 bg-gray-100 rounded-l">
              &pound;
            </p>
            <input
              type="number"
              min="0"
              id="amount"
              name="amount"
              value={values.amount}
              onChange={handleChanges}
              className="w-full outline-none border border-sky-900 rounded-r px-2 py-1"
            />
          </div>
          {errors.amount && <p className="text-red-500">{errors.amount}</p>}
        </div>

        <div className="flex space-x-4 my-5">
          {/* Mortgage Term */}
          <div>
            <label
              htmlFor="terms"
              className="block text-sm font-medium text-blue-950"
            >
              Mortgage Term
            </label>
            <div className="flex items-center mt-1">
              <input
                type="number"
                min="1"
                id="terms"
                name="terms"
                value={values.terms}
                onChange={handleChanges}
                className="w-full outline-none border border-sky-900 rounded-l px-2 py-1"
              />
              <p className="px-2 py-1 border border-sky-900 bg-gray-100 rounded-r">
                years
              </p>
            </div>
            {errors.terms && <p className="text-red-500">{errors.terms}</p>}
          </div>

          {/* Interest Rate */}
          <div>
            <label
              htmlFor="rate"
              className="block text-sm font-medium text-blue-950"
            >
              Interest Rate
            </label>
            <div className="flex items-center mt-1">
              <input
                type="number"
                min="0"
                max="100"
                id="rate"
                step="0.01"
                name="rate"
                value={values.rate}
                onChange={handleChanges}
                className="w-full outline-none border border-sky-900 rounded-l px-2 py-1"
              />
              <p className="px-2 py-1 border border-sky-900 bg-gray-100 rounded-r">
                %
              </p>
            </div>
            {errors.rate && <p className="text-red-500">{errors.rate}</p>}
          </div>
        </div>

        <div className="form-control">
          <label
            htmlFor="type"
            className="block text-sm font-medium text-blue-950"
          >
            Mortgage Type
          </label>
          <div className="flex items-center flex-col mt-2 gap-3">
            {/* Repayment Option */}
            <div className="flex items-center border border-sky-900 rounded px-3 py-2 w-full">
              <input
                type="radio"
                name="type"
                id="repayment"
                value="repayment"
                checked={values.type === "repayment"}
                onChange={handleChanges}
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="repayment" className="ml-2 text-gray-700">
                Repayment
              </label>
            </div>

            {/* Interest Only Option */}
            <div className="flex items-center border border-sky-900 rounded px-3 py-2 w-full">
              <input
                type="radio"
                name="type"
                id="interest-only"
                value="interest-only"
                checked={values.type === "interest-only"}
                onChange={handleChanges}
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="interest-only" className="ml-2 text-gray-700">
                Interest Only
              </label>
            </div>
          </div>
          {errors.type && <p className="text-red-500">{errors.type}</p>}
        </div>

        <button
          type="submit"
          className="flex items-center py-3 px-7 bg-yellow-500 rounded-full my-6"
        > <CalculatorSvg/>
          <p className="text-blue-950">Calculate Repayment</p>
        </button>
      </form>
    </div>
  );
}
