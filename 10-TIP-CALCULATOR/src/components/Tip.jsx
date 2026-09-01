import { useState } from "react";

function Tip() {
  const [bill, setBill] = useState("");
  const [yourTip, setYourTip] = useState("");
  const [friendTip, setFriendTip] = useState("");

  const billAmount = Number(bill) || 0;
  const yourTipPercent = Number(yourTip) || 0;
  const friendTipPercent = Number(friendTip) || 0;

  const yourTipAmount = (billAmount * yourTipPercent) / 100;
  const friendTipAmount = (billAmount * friendTipPercent) / 100;

  const totalAmount = billAmount + yourTipAmount + friendTipAmount;

  const resetCalculator = () => {
    setBill("");
    setYourTip("");
    setFriendTip("");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
      <div className="w-full max-w-2xl rounded-3xl bg-white p-6 shadow-xl sm:p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Tip Calculator
          </h1>

          <p className="mt-2 text-sm text-slate-500 sm:text-base">
            Calculate your tip quickly and easily
          </p>
        </div>

        <div className="space-y-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <label className="text-sm font-semibold text-slate-700 sm:text-base">
              How much was the bill?
            </label>

            <div className="relative w-full sm:w-64">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                $
              </span>

              <input
                type="number"
                min="0"
                value={bill}
                onChange={(e) => setBill(e.target.value)}
                placeholder="Enter bill amount"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-9 pr-4 text-sm text-slate-800 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <label className="text-sm font-semibold text-slate-700 sm:text-base">
              How did you like the service?
            </label>

            <select
              value={yourTip}
              onChange={(e) => setYourTip(e.target.value)}
              className="w-full cursor-pointer rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 sm:w-64"
            >
              <option value="" disabled>
                Select your rating
              </option>
              <option value="0">Dissatisfied — 0%</option>
              <option value="5">It was OK — 5%</option>
              <option value="10">It was good — 10%</option>
              <option value="20">Absolutely amazing — 20%</option>
            </select>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <label className="text-sm font-semibold text-slate-700 sm:text-base">
              How did your friend like the service?
            </label>

            <select
              value={friendTip}
              onChange={(e) => setFriendTip(e.target.value)}
              className="w-full cursor-pointer rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 sm:w-64"
            >
              <option value="" disabled>
                Select friend's rating
              </option>
              <option value="0">Dissatisfied — 0%</option>
              <option value="5">It was OK — 5%</option>
              <option value="10">It was good — 10%</option>
              <option value="20">Absolutely amazing — 20%</option>
            </select>
          </div>
        </div>

        <div className="my-8 border-t border-slate-200" />

        <div className="rounded-2xl bg-indigo-50 p-5 sm:p-6">
          <p className="text-center text-sm font-medium leading-6 text-slate-500">
            Bill:{" "}
            <span className="font-semibold text-slate-700">
              ${billAmount.toFixed(2)}
            </span>
            {" | "}
            Your Tip:{" "}
            <span className="font-semibold text-indigo-600">
              {yourTipPercent}%
            </span>
            {" | "}
            Friend's Tip:{" "}
            <span className="font-semibold text-indigo-600">
              {friendTipPercent}%
            </span>
          </p>

          <div className="mt-5 text-center">
            <p className="text-sm font-medium text-slate-500">Total Amount</p>

            <p className="mt-1 text-3xl font-bold text-indigo-600">
              ${totalAmount.toFixed(2)}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={resetCalculator}
          className="mt-6 w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700 active:scale-[0.98]"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Tip;
