function Steps({ heading, para, emoji }) {
  return (
    <>
      <div className="flex items-center justify-center my-10">
        <div className="text-center font-semibold text-2xl">
          <h1 className="uppercase py-3">{heading}</h1>
          <p className="py-3">{para}</p>
          <p className="py-3">{emoji}</p>
        </div>
      </div>
    </>
  );
}

export default Steps;
