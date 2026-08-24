import icon from '../assets/LOGOS/ICONS.png';

function State({ items }) {
  /*
    ITEMS PROP

    Ye data App.jsx se aa raha hai.


    Flow:

    App.jsx

       items state

          ↓

    <State items={items}/>

          ↓

    State component



    Ab State component ke paas
    latest items ka data hai.
  */

  /*
    Total items count


    Array.length:

    Array ke andar total objects batata hai.


    Example:

    [
      item1,
      item2,
      item3
    ]

    length = 3
  */

  const totalItems = items.length;

  /*
    Packed items count


    filter():

    Array me se sirf wo items return karta hai
    jinki condition true ho.


    Example:


    item.packed === true


    Sirf packed items milenge.
  */

  const packedItems = items.filter((item) => item.packed).length;

  /*
    Percentage calculation


    Agar list empty hai:

    percentage = 0


    Warna:

    packed items / total items * 100


    Math.round():

    Decimal ko round karta hai.


    Example:

    66.666

    becomes

    67
  */

  const percentage =
    totalItems === 0 ? 0 : Math.round((packedItems / totalItems) * 100);

  return (
    <footer
      className="
      bg-[#2E8B]
      px-4
      py-3.5
      flex
      flex-col
      sm:flex-row
      items-center
      justify-center
      gap-3
      "
    >
      {/*
        LOGO IMAGE


        Import ki hui image ko
        src me use kar rahe hain.


        React me assets ko
        import karna recommended way hai.
      */}

      <img
        src={icon}
        alt="icon"
        className="
        w-10
        sm:w-12
        "
      />

      {/*
        DYNAMIC MESSAGE


        Ye text automatically change hoga
        jab items state update hogi.


        Example:


        Add item:

        totalItems +1


        Checkbox:

        packedItems change


        Footer automatically update.
      */}

      <h1
        className="
        text-base
        sm:text-xl
        font-semibold
        italic
        text-center
        "
      >
        You have {totalItems} items on your list, and you already packed{' '}
        {packedItems} ({percentage}%)
      </h1>
    </footer>
  );
}

export default State;
