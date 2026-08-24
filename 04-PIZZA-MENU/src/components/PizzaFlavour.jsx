function PizzaFlavour({ pizza }) {
  return (
    <div className="w-1/2 h-50">
      <div className="flex h-full items-center gap-5">
        <div className="w-40 h-39 overflow-hidden flex-shrink-0">
          <img
            src={pizza.photoName}
            alt={pizza.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="px-5">
          <h1 className="my-2 text-lg font-semibold tracking-wider">
            {pizza.name}
          </h1>

          <p>{pizza.ingredients}</p>

          <p className="my-2 font-semibold">${pizza.price}</p>
        </div>
      </div>
    </div>
  );
}

export default PizzaFlavour;
