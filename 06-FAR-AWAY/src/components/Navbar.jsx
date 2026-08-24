import icon from '../assets/LOGOS/ICONS.png';
import logo from '../assets/LOGOS/LOGOS.png';

// Navbar ek React Component hai
// Is component ka kaam sirf navbar ka UI render karna hai
function Navbar() {
  // JSX return hota hai jo browser me HTML ki tarah render hota hai
  return (
    <>
      {/*
        NAVBAR COMPONENT

        React me hum UI ko chote chote reusable components me divide karte hain.

        Example:
        App.jsx
           |
           |---- Navbar
           |---- Form
           |---- List

        App parent component hai
        Navbar child component hai
      */}

      <div
        className="
        bg-amber-500
        min-h-24
        px-4
        py-3
        flex
        flex-col
        sm:flex-row
        items-center
        justify-center
        gap-3
        sm:h-30
        sm:gap-8
        "
      >
        {/*
          IMAGE COMPONENT

          React me image ko direct path se nahi,
          aksar import karke use karte hain.

          import icon from "...";

          Phir JSX me:

          src={icon}

          React automatically image ko bundle kar deta hai.
        */}

        <img
          src={icon}
          alt="Icon"
          className="
          w-16
          sm:w-20
          md:w-24
          "
        />

        {/*
          HEADING

          Ye simple JSX element hai.

          JSX me hum JavaScript aur HTML ko mix kar sakte hain.

          Example:

          <h1>
             FAR AWAY
          </h1>


          Browser me ye normal heading ban jayegi.
        */}

        <h1
          className="
          text-3xl
          sm:text-4xl
          md:text-5xl
          font-extrabold
          tracking-wider
          text-center
          "
        >
          FAR AWAY
        </h1>

        {/*
          SECOND IMAGE

          Same tarah dusri image import se aa rahi hai.

          Is component ka koi state nahi hai,
          kyun ke navbar ko koi data change nahi karna.

          Ye ek Static Component hai.
        */}

        <img
          src={logo}
          alt="Logo"
          className="
          w-28
          sm:w-36
          md:w-44
          "
        />
      </div>
    </>
  );
}

export default Navbar;
