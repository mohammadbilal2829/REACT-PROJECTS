import { useState } from "react";

function Quiz() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const questions = [
    {
      question: "What is HTML?",
      answer:
        "HTML stands for HyperText Markup Language. It is used to create and structure content on web pages.",
    },

    {
      question: "What is the purpose of the <head> tag?",
      answer:
        "The <head> tag contains information about the webpage, such as the title, meta information, links to CSS files, and scripts.",
    },

    {
      question: "What is the use of the <title> tag?",
      answer:
        "The <title> tag defines the title of a webpage that appears in the browser tab.",
    },

    {
      question: "Which tag is used to create a hyperlink?",
      answer:
        "The <a> tag is used to create hyperlinks in HTML. The href attribute specifies the destination URL.",
    },

    {
      question: "What is the use of the <img> tag?",
      answer:
        "The <img> tag is used to display images on a webpage. The src attribute specifies the image source.",
    },

    {
      question: "What is the difference between <div> and <span>?",
      answer:
        "The <div> element is a block-level element, while <span> is an inline element. Both are commonly used for grouping and styling content.",
    },

    {
      question: "What is an attribute in HTML?",
      answer:
        "An attribute provides additional information about an HTML element. Examples include class, id, href, src, and alt.",
    },

    {
      question: "What is the use of the <table> tag?",
      answer:
        "The <table> tag is used to create tables for displaying data in rows and columns.",
    },

    {
      question: "What is the purpose of the <form> tag?",
      answer:
        "The <form> tag is used to create a form that collects user input and can submit that data for processing.",
    },

    {
      question: "What is the difference between HTML and CSS?",
      answer:
        "HTML is used to structure webpage content, while CSS is used to style and design that content.",
    },
  ];

  const handleToggle = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 transition-colors dark:bg-slate-950 sm:px-6 lg:px-10">
      {/* Heading */}
      <div className="mx-auto mb-8 max-w-4xl text-center">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
          HTML Questions
        </h1>

        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 sm:text-base">
          Test your knowledge of HTML with these questions.
        </p>
      </div>

      {/* Questions */}
      <div className="mx-auto flex max-w-4xl flex-col gap-4">
        {questions.map((item, index) => {
          const isOpen = openQuestion === index;

          return (
            <div
              key={index}
              onClick={() => handleToggle(index)}
              className={`cursor-pointer overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 dark:bg-slate-900 ${
                isOpen
                  ? "border-indigo-300 shadow-md dark:border-indigo-500/40"
                  : "border-slate-200 dark:border-slate-800"
              }`}
            >
              {/* Question */}
              <div className="flex min-h-[80px] items-center gap-4 px-4 py-4 sm:px-5">
                {/* Number */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-lg font-bold text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Question */}
                <p className="flex-1 text-sm font-semibold text-slate-800 dark:text-slate-200 sm:text-base">
                  {item.question}
                </p>

                {/* Plus / Minus Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleToggle(index);
                  }}
                  aria-label={isOpen ? "Close answer" : "Show answer"}
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-2xl font-medium transition-all duration-300 ${
                    isOpen
                      ? "bg-indigo-600 text-white dark:bg-indigo-500"
                      : "bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white dark:bg-indigo-500/10 dark:text-indigo-400 dark:hover:bg-indigo-500 dark:hover:text-white"
                  }`}
                >
                  {isOpen ? "−" : "+"}
                </button>
              </div>

              {/* Answer */}
              <div
                className={`grid transition-all duration-300 ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-slate-200 px-4 pb-5 pt-4 dark:border-slate-800 sm:px-5">
                    <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800/60">
                      <p className="text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
                        <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                          Answer:{" "}
                        </span>

                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Quiz;
