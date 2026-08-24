// import Skills from './Skills';

// export default function Card() {
//   const skills = [
//     {
//       skill: 'HTML 💪',
//       bgColor: 'bg-orange-500',
//     },
//     {
//       skill: 'CSS 🎨',
//       bgColor: 'bg-blue-500',
//     },
//     {
//       skill: 'JavaScript ⚡',
//       bgColor: 'bg-yellow-400',
//     },
//     {
//       skill: 'React ⚛️',
//       bgColor: 'bg-cyan-500',
//     },
//     {
//       skill: 'Tailwind 💨',
//       bgColor: 'bg-sky-500',
//     },
//     {
//       skill: 'Git 🖥️',
//       bgColor: 'bg-gray-700',
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-indigo-700 flex items-center justify-center">
//       <div className="w-lg bg-white border-4 border-black rounded-t-4xl">
//         <img
//           src="/profile.jpeg"
//           className="w-full h-80 object-cover object-[center_15%] rounded-t-4xl"
//           alt="Mohammad Bilal"
//         />

//         <h1 className="text-center font-bold text-3xl my-5">Mohammad Bilal</h1>

//         <p className="w-full max-w-xl px-7 tracking-wide leading-7 [word-spacing:4px]">
//           Full-Stack web developer and teacher at Udemy. When not coding or
//           preparing a course, I like to play board games, cook (and eat), or
//           enjoy the Portuguese sun at the beach.
//         </p>

//         <div className="mt-3 mx-7 p-2 flex gap-4 flex-wrap">
//           {skills.map((items) => {
//             return (
//               <Skills
//                 key={items.skill}
//                 skill={items.skill}
//                 bgColor={items.bgColor}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

import Skills from './Skills';

export default function Card() {
  const skills = [
    {
      skill: 'HTML 💪',
      bgColor: 'bg-orange-500',
    },
    {
      skill: 'CSS 🎨',
      bgColor: 'bg-blue-500',
    },
    {
      skill: 'JavaScript ⚡',
      bgColor: 'bg-yellow-400',
    },
    {
      skill: 'React ⚛️',
      bgColor: 'bg-cyan-500',
    },
    {
      skill: 'Tailwind 💨',
      bgColor: 'bg-sky-500',
    },
    {
      skill: 'Git 🖥️',
      bgColor: 'bg-gray-700',
    },
  ];

  return (
    <div className="min-h-screen bg-indigo-700 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white border-4 border-black rounded-t-4xl overflow-hidden">
        <img
          src="/profile.jpeg"
          className="w-full h-56 sm:h-64 md:h-80 object-cover object-[center_15%]"
          alt="Mohammad Bilal"
        />

        <h1 className="text-center font-bold text-2xl sm:text-3xl my-5">
          Mohammad Bilal
        </h1>

        <p className="px-5 sm:px-7 text-sm sm:text-base tracking-wide leading-6 sm:leading-7">
          Full-Stack web developer and teacher at Udemy. When not coding or
          preparing a course, I like to play board games, cook (and eat), or
          enjoy the Portuguese sun at the beach.
        </p>

        <div className="mt-4 px-5 sm:px-7 pb-5 flex flex-wrap gap-2 sm:gap-4">
          {skills.map((items) => {
            return (
              <Skills
                key={items.skill}
                skill={items.skill}
                bgColor={items.bgColor}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
