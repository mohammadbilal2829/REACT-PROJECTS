function List({ items, onToggleItem, onDeleteItem }) {
  return (
    <div
      className="
      bg-[#674C47]
      min-h-138.5
      py-6
      px-4
      text-white
      "
    >
      {/*
        LIST CONTAINER

        flex-wrap:
        Agar items zyada ho jayen
        to next line me chale jayenge.

        gap:
        Cards ke darmiyan spacing.
      */}

      <div
        className="
        flex
        flex-wrap
        justify-center
        gap-4
        "
      >
        {/*
          Conditional Rendering

          Agar items empty hain:

          Empty message show hoga.


          Agar items hain:

          map() chalega aur cards banenge.
        */}

        {items.length === 0 ? (
          <h1
            className="
            text-xl
            sm:text-2xl
            font-semibold
            text-center
            "
          >
            Add items for your trip 😍
          </h1>
        ) : (
          items.map((item) => (
            /*
              Har item ka unique card.

              key:

              React ko batata hai
              kaunsa element unique hai.

            */

            <div
              key={item.id}
              className="
              bg-[#7a5a53]
              rounded-2xl
              px-4
              py-3
              flex
              items-center
              gap-3
              w-full
              sm:w-fit
              max-w-xl
              shadow-md
              transition
              hover:scale-[1.02]
              "
            >
              {/*
                CHECKBOX

                checked:

                React state se control ho raha hai.


                onChange:

                Checkbox click par
                App ka function call hota hai.
              */}

              <input
                type="checkbox"
                checked={item.packed}
                onChange={() => onToggleItem(item.id)}
                className="
                h-5
                w-5
                cursor-pointer
                accent-amber-500
                shrink-0
                "
              />

              {/*
                QUANTITY

                Form se jo number select hua tha
                wo yahan show ho raha hai.
              */}

              <span
                className="
                bg-amber-100
                text-black
                px-3
                py-1
                rounded-full
                text-sm
                font-semibold
                shrink-0
                "
              >
                {item.quantity}
              </span>

              {/*
                ITEM DESCRIPTION


                packed true:

                line-through


                packed false:

                normal text
              */}

              <h1
                className={`
                  flex-1
                  text-sm
                  sm:text-base
                  font-medium
                  break-words

                  ${item.packed ? 'line-through text-gray-300' : ''}

                  `}
              >
                {item.description}
              </h1>

              {/*
                DELETE BUTTON


                id parent(App) ko bhej rahe hain.


                App state se item remove karega.
              */}

              <button
                onClick={() => onDeleteItem(item.id)}
                className="
                text-xl
                hover:scale-125
                transition
                cursor-pointer
                shrink-0
                "
              >
                ❌
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default List;

// ======================================================
// PACK LIST BUTTON SECTION
// ======================================================

export function Packist({
  onSortItems,

  onClearItems,
}) {
  return (
    <div
      className="
      bg-[#674C47]
      px-4
      py-5
      flex
      flex-wrap
      justify-center
      gap-4
      "
    >
      {/*
        SORT BUTTON


        Ye App ka sorting function call karta hai.

        Data:

        Packist
            |
            |
            App State
      */}

      <button
        onClick={onSortItems}
        className="
        bg-amber-100
        text-black
        px-5
        h-10
        rounded-full
        font-semibold
        uppercase
        text-sm
        hover:bg-amber-200
        transition
        "
      >
        Sort by input order
      </button>

      {/*
        CLEAR BUTTON


        Ye puri array empty kar deta hai.
      */}

      <button
        onClick={onClearItems}
        className="
        bg-red-500
        text-white
        px-5
        h-10
        rounded-full
        font-semibold
        uppercase
        text-sm
        hover:bg-red-600
        transition
        "
      >
        Clear list
      </button>
    </div>
  );
}
