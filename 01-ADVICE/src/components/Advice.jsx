import { useEffect, useState } from 'react';

const Advice = () => {
  const [advice, setAdvice] = useState('');
  const [count, setCount] = useState(1);

  const fetchAdvice = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();

      setAdvice(data.slip.advice);
      setCount((prev) => prev + 1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getFirstAdvice = async () => {
      try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();

        setAdvice(data.slip.advice);
      } catch (error) {
        console.log(error);
      }
    };

    getFirstAdvice();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center p-5">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          💡 Random Advice
        </h1>

        <p className="text-lg md:text-xl text-gray-700 leading-8 min-h-[120px] flex items-center justify-center">
          "{advice}"
        </p>

        <button
          onClick={fetchAdvice}
          className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition duration-300 font-semibold"
        >
          Get Advice
        </button>

        <p className="mt-6 text-gray-500 text-sm md:text-base">
          You have viewed <span className="font-bold">{count}</span>{' '}
          {count === 1 ? 'piece' : 'pieces'} of advice.
        </p>
      </div>
    </div>
  );
};

export default Advice;
