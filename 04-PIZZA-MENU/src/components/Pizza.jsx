import PizzaFlavour from './PizzaFlavour';
import {
  focaccia,
  margherita,
  spinaci,
  funghi,
  salamino,
  prosciutto,
} from '../assets/images';

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: focaccia,
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: margherita,
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: spinaci,
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: funghi,
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: salamino,
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: prosciutto,
    soldOut: false,
  },
];

function Pizza() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-1">
        <h1 className="font-['Roboto_Mono'] py-15 text-amber-500 text-5xl uppercase tracking-wider text-center">
          &mdash; Fast react pizza co . &mdash;
        </h1>

        <h2 className="mx-auto py-3 text-3xl uppercase border-t-2 border-b-2 w-fit">
          our menu
        </h2>

        {/* AVAILABLE OR NOT */}
        {numPizzas > 0 ? (
          <p className="mx-auto py-7 text-lg tracking-widest text-center max-w-2xl leading-7">
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
        ) : (
          <p className="text-center text-lg py-3 tracking-wider">
            We're still working on our menu. Please come back later :)
          </p>
        )}

        {/* MENU */}
        {numPizzas > 0 && (
          <div className="flex flex-wrap max-w-3xl mx-auto">
            {pizzaData.map((pizza) => (
              <PizzaFlavour key={pizza.name} pizza={pizza} />
            ))}
          </div>
        )}

        {/* TIMING */}
        {numPizzas > 0 ? (
          <p className="text-center text-lg py-3 mb-7 tracking-wider">
            We're happy to welcome you between 12:00 and 22:00.
          </p>
        ) : (
          <p className="text-center text-lg py-3 mb-7 tracking-wider">
            We're open from 12:00 to 22:00. Come visit us or order online.
          </p>
        )}

        <div className="flex justify-center mb-5">
          <button className="bg-amber-400 px-6 py-2">Order</button>
        </div>
      </main>

      {/* Footer */}
      <footer>
        <div className="h-10 w-full bg-amber-400"></div>
      </footer>
    </div>
  );
}

export default Pizza;
