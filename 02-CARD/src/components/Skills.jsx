export default function Skills(props) {
  return (
    <div
      className={`h-8 sm:h-9 px-3 sm:px-5 rounded-full flex items-center justify-center ${props.bgColor}`}
    >
      <p className="text-white text-sm sm:text-base font-medium">
        {props.skill}
      </p>
    </div>
  );
}
