import { useState } from "react";

function DateComponent() {
  const [range, setRange] = useState(1);
  const [value, setValue] = useState(0);

  const minRange = 1;
  const maxRange = 10;

  const today = new Date();

  const futureDate = new Date(today);
  futureDate.setDate(today.getDate() + value);

  const formattedDate = futureDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const handleIncrement = () => {
    setValue((prevValue) => prevValue + range);
  };

  const handleDecrement = () => {
    setValue((prevValue) => Math.max(0, prevValue - range));
  };

  const handleRangeChange = (e) => {
    setRange(Number(e.target.value));
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 p-4 sm:p-6">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 sm:w-64 sm:h-64 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500/20 rounded-full blur-3xl" />

      {/* Main Card */}
      <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-5 sm:p-8 shadow-2xl backdrop-blur-xl">
        {/* Top Glow */}
        <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-300">
            Date Calculator
          </p>

          <h2 className="mt-2 text-2xl sm:text-4xl font-bold text-white">
            Number Controller
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Choose a step and calculate your future date
          </p>
        </div>

        {/* Range Section */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 mb-6">
          <div className="flex items-center justify-between gap-3 mb-5">
            <span className="text-sm sm:text-base font-medium text-slate-200">
              Increment Step
            </span>

            <span className="min-w-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 px-4 py-2 text-center font-bold text-white shadow-lg">
              {range}
            </span>
          </div>

          <input
            type="range"
            min={minRange}
            max={maxRange}
            value={range}
            onChange={handleRangeChange}
            className="w-full cursor-pointer accent-blue-500"
          />

          <div className="flex justify-between mt-2 text-xs sm:text-sm font-medium text-slate-400">
            <span>{minRange}</span>
            <span>{maxRange}</span>
          </div>
        </div>

        {/* Number Controller */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
          <p className="mb-4 text-center text-sm font-medium text-slate-300">
            Number of Days
          </p>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Decrement */}
            <button
              onClick={handleDecrement}
              disabled={value === 0}
              className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl bg-white/10 text-2xl font-bold text-white transition hover:bg-red-500 hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-30"
            >
              −
            </button>

            {/* Number */}
            <div className="flex h-12 sm:h-14 flex-1 items-center justify-center rounded-xl border border-white/10 bg-slate-950/50 px-3">
              <span className="truncate text-2xl sm:text-3xl font-bold text-white">
                {value}
              </span>
            </div>

            {/* Increment */}
            <button
              onClick={handleIncrement}
              className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-2xl font-bold text-white shadow-lg transition hover:scale-105 hover:shadow-blue-500/30 active:scale-95"
            >
              +
            </button>
          </div>
        </div>

        {/* Date Result */}
        <div className="mt-6 rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-5 sm:p-6 text-center border border-blue-400/20">
          <p className="text-sm sm:text-base text-slate-300">
            {value === 0 ? (
              <>
                Today is
                <span className="block mt-2 text-xl sm:text-2xl font-bold text-white">
                  {formattedDate}
                </span>
              </>
            ) : (
              <>
                <span className="text-blue-300 font-bold">
                  {value} {value === 1 ? "day" : "days"}
                </span>{" "}
                from today is
                <span className="block mt-2 text-xl sm:text-2xl font-bold text-white">
                  {formattedDate}
                </span>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DateComponent;
