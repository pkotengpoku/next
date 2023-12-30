"use client";
import React, { useEffect, useState } from "react";
import quizData from "@data/data";
import Link from 'next/link'

const Page = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [allAnswers, setAllAnswers] = useState(new Array(quizData.length).fill("unanswered"));
  const rightArrowHtmlEntity = "&#9654;";
  const backArrowHtmlEntity = "&larr;";

  useEffect(() => {
    // This block of code will be executed after allAnswers has been updated
  }, [allAnswers]);
  
  const handleSelect = (index) => {
    setAllAnswers((prevAllAnswers) => {
      const updatedAnswers = [...prevAllAnswers];
      updatedAnswers[questionNumber] = quizData[questionNumber].options[index];
      return updatedAnswers;
    });
  
  };
const handlePrev = ()=>{
    if (questionNumber >0){
      setQuestionNumber(questionNumber-1)
    } else {null}
  }
  const handleNext = ()=>{
    if (questionNumber <quizData.length-1){
      setQuestionNumber(questionNumber+1)
    } else {null}

  }

  const capitalLetters = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode("A".charCodeAt(0) + i)
  );

  return (
    <div className="mt-9">
<div>
{quizData && (
        <div className=" mx-8 mt-6">
          <div className="">
          <h1 className="text-lg text-slate-700 mb-3">Question {questionNumber + 1} of {quizData.length}</h1>
          <p className="text-xl">{quizData[questionNumber].question}</p>
          </div>
          <br />
          {quizData[questionNumber].options.map((option, index) => (
            <div key={index} className="flex items-center gap-2">
              {capitalLetters[index]}{". "}
              <div
                onClick={()=>handleSelect(index)}
                className={`rounded shadow-md p-1 min-w-32 w-fit border mt-2 kay_hover ${
                  quizData[questionNumber].options[index] === allAnswers[questionNumber]
                    ? "border-2 border-blue-800"
                    : "border-slate-400"
                }`}
              >
                {" "}
                {option}
              </div>
            </div>
          ))}

          <div className="flex justify-between mx-6 mt-24">
            <button
              className="border rounded flex border-black w-28 p-2 select-none cursor-pointer"
              onClick={handlePrev}
            >
              {" "}
              <span
                dangerouslySetInnerHTML={{ __html: backArrowHtmlEntity }}
              />{" "}
              Previous
              {/* You can add additional styling if needed */}
            </button>
            <button
              className="border rounded border-black w-28 flex text-center justify-center select-none cursor-pointer"
              onClick={()=>{handleNext()}}
            >
              Next{" "}
              <span
                dangerouslySetInnerHTML={{ __html: rightArrowHtmlEntity }}
              />
              {/* You can add additional styling if needed */}
            </button>
          </div>
        </div>
      )}
</div>
      <div className="mt-24 flex justify-center">
      <Link href= '/' className="border border-black rounded-full justify-center bg-black text-white p-3">
        Return to Home
      </Link>
      </div>
      <div className="mt-24 flex justify-center">
      <Link href= '/quiz/hidden' className="border border-black rounded-full justify-center p-3">
        See some secret page
      </Link>
      </div>
    </div>
  );
};

export default Page;
