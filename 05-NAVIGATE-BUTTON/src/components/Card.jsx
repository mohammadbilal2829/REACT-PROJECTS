import { useState } from 'react';
import Steps from './Steps';
import { X } from 'lucide-react';

function Card() {
  const [step, setStep] = useState(1);
  const [messaege, setMessage] = useState(0);
  const [open, setOpen] = useState(true);
  const text = [
    'Learn react 💰',
    'Apply for jobs 💼',
    'Invest your new income 🤑',
  ];

  const data = [
    { heading: 'step 1', para: 'Pass in content', emoji: '✌️' },
    { heading: 'step 2', para: 'Read children prop', emoji: '😎' },
  ];

  function stetpFunDecre() {
    if (step > 1) {
      setStep(step - 1);
    }
    if (messaege > 0) {
      setMessage(messaege - 1);
    }
  }

  function stetpFunIncre() {
    if (step >= 1 && step < 3) {
      setStep(step + 1);
    }
    if (messaege >= 0 && messaege < 2) {
      setMessage(messaege + 1);
    }
  }

  return (
    <>
      <section>
        <button
          onClick={() => {
            setOpen((is) => !is);
          }}
        >
          <X />
        </button>
        {open && (
          <div className="w-120 mx-auto bg-gray-100 mt-[17%] rounded-lg">
            {/* NUMBER DIVS */}
            <div className="flex h-20 items-center justify-around">
              <div
                className={`w-7 h-7 flex items-center justify-center text-white rounded-full ${step >= 1 ? 'bg-purple-600' : 'bg-gray-300'}`}
              >
                1
              </div>
              <div
                className={`w-7 h-7 flex items-center justify-center text-white rounded-full ${step >= 2 ? 'bg-purple-600' : 'bg-gray-300'}`}
              >
                2
              </div>
              <div
                className={`w-7 h-7 flex items-center justify-center text-white rounded-full ${step >= 3 ? 'bg-purple-600' : 'bg-gray-300'}`}
              >
                3
              </div>
            </div>
            {/* TEXT */}
            <p className="text-center pb-10 font-semibold text-3xl uppercase">
              Step {step}
            </p>
            <p className="text-center pb-10 font-semibold text-3xl capitalize">
              {text[messaege]}
            </p>
            {/* ONE BUTTON */}
            <div className="flex justify-center pb-15">
              <button className="w-30 bg-gray-300 h-10 rounded-3xl text-lg font-semibold">
                Learn how
              </button>
            </div>
            {/* TWO PURPLE BUTTON */}
            <div className="flex justify-around pb-10">
              <button
                className="px-5 bg-purple-600 text-white h-10 rounded-3xl text-lg font-semibold"
                onClick={stetpFunDecre}
              >
                👈 Previous
              </button>
              <button
                className="px-5 bg-purple-600 text-white h-10 rounded-3xl text-lg font-semibold"
                onClick={stetpFunIncre}
              >
                Next 👉 😎
              </button>
            </div>
          </div>
        )}
      </section>
      {data.map((items) => {
        return (
          <Steps
            heading={items.heading}
            para={items.para}
            emoji={items.emoji}
          />
        );
      })}
    </>
  );
}

export default Card;
