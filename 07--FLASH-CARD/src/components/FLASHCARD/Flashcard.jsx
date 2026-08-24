import Cards from './Cards';

const cards = [
  {
    id: 1,
    title: 'JAVA SCRIPT',
    description: 'What language is React based on ?',
  },
  {
    id: 2,
    title: 'COMPONENTS',
    description: 'What are the builing blocks of React Apps ?',
  },
  {
    id: 3,
    title: 'JSX',
    description:
      "What's the name of the syntax we use to describe a UI in React ?",
  },
  {
    id: 4,
    title: 'PROPS',
    description: 'How to pass data from the parent to child components ?',
  },
  {
    id: 5,
    title: 'STATE',
    description: 'How to give components memory ?',
  },
  {
    id: 6,
    title: 'CONTROLLED COMPONENTS',
    description:
      'What do we call an input element that is completely synchronised with state ?',
  },
];

function Flashcard() {
  return (
    <>
      <Cards detail={cards} />
    </>
  );
}

export default Flashcard;

