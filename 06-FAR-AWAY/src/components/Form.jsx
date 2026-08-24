import { ChevronDown, ChevronUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function Form({ onAddItem }) {
  /*
    isOpen state:

    Dropdown arrow ko control karegi.

    true:
    dropdown open samjhenge
    arrow up

    false:
    dropdown close
    arrow down
  */

  const [isOpen, setIsOpen] = useState(false);

  /*
    description state:

    Input field ki value store karta hai.

    React me input ko control karne ke liye
    state use karte hain.

    value={description}

    aur

    onChange={setDescription}

    dono connect hain.
  */

  const [description, setDescription] = useState('');

  /*
    quantity state:

    Select dropdown ki selected value store karegi.
  */

  const [quantity, setQuantity] = useState(1);

  /*
    useRef:

    React me kisi DOM element ka reference lene ke liye use hota hai.

    Yahan hum select ke parent div ka reference le rahe hain
    taake pata kar saken click andar hua ya bahar.
  */

  const selectRef = useRef();

  /*
    useEffect:

    Component render hone ke baad ye code run hota hai.

    Yahan hum document par click listener laga rahe hain.

    Agar user dropdown ke bahar click kare:
    arrow wapas down ho jayega.
  */

  useEffect(() => {
    function handleOutsideClick(e) {
      /*
        contains():

        Check karta hai click ki hui jagah
        dropdown ke andar hai ya nahi.

      */

      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);

    /*
      Cleanup function:

      Jab component remove ho to listener remove kar denge.

      Memory leak se bachata hai.
    */

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  /*
    Form submit function

    Jab ADD button click hoga
    ye function chalega.
  */

  function handleSubmit(e) {
    /*
      Default browser behavior rokta hai.

      Warna form submit hone par page refresh hota.
    */

    e.preventDefault();

    const newItem = {
      /*
        Unique id generate.

        Date.now current time deta hai
        jo mostly unique hota hai.
      */

      id: Date.now(),

      description,

      quantity,

      /*
        New item hamesha unpacked hoga.
      */

      packed: false,
    };

    /*
      Data child(Form) se parent(App) ko bhej rahe hain.

      onAddItem App ka function hai
      jo props ke through mila.
    */

    onAddItem(newItem);

    /*
      Submit ke baad inputs reset.
    */

    setDescription('');

    setQuantity(1);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
      bg-amber-600
      px-4
      py-5
      flex
      flex-col
      sm:flex-row
      flex-wrap
      items-center
      justify-center
      gap-4
      "
    >
      {/*
        Heading

        Mobile par center
        Desktop par same row me
      */}

      <h1
        className="
        text-lg
        sm:text-xl
        font-bold
        text-center
        "
      >
        What do you need for your 😍 trip?
      </h1>

      {/*
        Dropdown wrapper

        ref:
        React ko batata hai ye element ka reference save karo.
      */}

      <div ref={selectRef} className="relative">
        <select
          value={quantity}
          onChange={(e) => {
            setQuantity(Number(e.target.value));

            /*
              Select choose karne ke baad
              dropdown close samjho.
            */

            setIsOpen(false);
          }}
          onClick={() => setIsOpen(true)}
          className="
          appearance-none
          bg-amber-100
          h-10
          w-24
          rounded-full
          px-4
          pr-10
          outline-none
          cursor-pointer
          "
        >
          {/*
            Array.from:

            20 numbers ki array banata hai.

            length:20

            Output:

            [0,1,2,3....19]


            map:

            Har value ko 1 se start kar dete hain.


            Final:

            [1,2,3.....20]
          */}

          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>

        {/*
          Conditional Rendering:

          Agar isOpen true:
          ChevronUp

          Agar false:
          ChevronDown
        */}

        {isOpen ? (
          <ChevronUp
            size={18}
            className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            pointer-events-none
            "
          />
        ) : (
          <ChevronDown
            size={18}
            className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            pointer-events-none
            "
          />
        )}
      </div>

      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter an item..."
        className="
        bg-amber-100
        h-10
        w-full
        sm:w-64
        rounded-full
        px-4
        outline-none
        "
      />

      <button
        type="submit"
        className="
        bg-green-700
        hover:bg-green-800
        text-white
        px-6
        h-10
        rounded-full
        transition
        "
      >
        ADD
      </button>
    </form>
  );
}

export default Form;
