import { useState } from 'react';

function Cards({ detail }) {
  const [selectedCard, setSelectedCard] = useState(null);

  function handleClick(id) {
    if (selectedCard === id) {
      setSelectedCard(null);
    } else {
      setSelectedCard(id);
    }
  }

  return (
    <>
      <section className="min-h-screen bg-gray-100 px-5 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {detail.map((card) => (
            <div
              key={card.id}
              onClick={() => handleClick(card.id)}
              className={`h-72 rounded-2xl shadow-lg cursor-pointer flex items-center justify-center p-6 transition-all duration-300 
              ${
                selectedCard === card.id
                  ? 'bg-red-500 text-white'
                  : 'bg-white text-gray-800'
              }`}
            >
              {selectedCard === card.id ? (
                <h2 className="text-2xl font-bold text-center">{card.title}</h2>
              ) : (
                <p className="text-lg md:text-xl font-semibold text-center leading-relaxed">
                  {card.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Cards;
