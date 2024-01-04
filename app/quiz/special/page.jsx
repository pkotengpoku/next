"use client";
import React, { useEffect, useState } from "react";
import quizData from "@data/datasec"
import Link from 'next/link'
import { UserButton } from "@clerk/nextjs";

const Page = () => {
    const [questionNumber, setQuestionNumber] = useState(0);
    const [allAnswers, setAllAnswers] = useState(new Array(quizData.length).fill("unanswered"));
    const rightArrowHtmlEntity = "&rarr;";
    const backArrowHtmlEntity = "&larr;";
    const [finished, setFinished] = useState(false);
    const [timer, setTimer] = useState(180); // 3 minutes in seconds
    const [isRed, setIsRed] = useState(false);
    let myMarks = [];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
  
        if (timer <= 30) {
          setIsRed(true);
        }
  
        if (timer === 0) {
          setIsRed(false);
          handleNext();
          setTimer(180);
        }
        
        if (questionNumber === quizData.length - 1) {
          clearInterval(interval);
        }
      }, 1000);
  
      return () => clearInterval(interval);
    }, [timer]);
  
    const handleSelect = (index) => {
      setAllAnswers((prevAllAnswers) => {
        const updatedAnswers = [...prevAllAnswers];
        updatedAnswers[questionNumber] = quizData[questionNumber].options[index];
        return updatedAnswers;
      });
    };
  
    const handlePrev = () => {
      if (questionNumber > 0) {
        setQuestionNumber(questionNumber - 1);
      }
    };
  
    const handleNext = () => {
      if (questionNumber < quizData.length - 1) {
        setQuestionNumber(questionNumber + 1);
      }
    };
  
    const handleFinish = () => {
      quizData.forEach((ques, index) => {
        myMarks.push(allAnswers[index] === ques.correctAnswer);
      });
  
      console.log(myMarks);
      console.log(myMarks.length);
      console.log(allAnswers.length);
  
      setFinished(true);
    };
  
    const capitalLetters = Array.from({ length: 26 }, (_, i) =>
      String.fromCharCode("A".charCodeAt(0) + i)
    );

  return (
    <div className="mt-9">
      <nav className="justify-between bg-blue-300 flex h-10 px-5 py-3">
        <div>WELCOME</div>
        <UserButton afterSignOutUrl="/" />
        </nav>
      <div className={`bg-red-300 ${!finished ? "hidden" : "flex"} h-20`}>
  Click Finish again to Submit Quiz <br />
</div>
{finished ? (
        <div>
          {allAnswers.map((mark, index) => (
            <div className="flex h-14 mt-4 ml-10 " key={index}>
              <h3>Question</h3> {index + 1}{" "}
              <div
                className={`bg-slate-200 ml-8 p-1 min-w-40 rounded-md border-4 ${
                  mark === quizData[index].correctAnswer
                    ? "border-lime-500"
                    : "border-red-500"
                }`}
              >
                {mark.toString()}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          {quizData && (
            <div className="mx-8 mt-6">
              <div className="">
                <h1 className="text-lg text-slate-700 mb-3">
                  Question {questionNumber + 1} of {quizData.length}
                </h1>
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
            <button disabled={true}
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

              {questionNumber == quizData.length-1? <button onClick={handleFinish} className="border rounded bg-red-400 w-28 flex text-center justify-center select-none cursor-pointer">
                 Finish 
                 </button>: 
                 <button
              className="border rounded border-black w-28 flex text-center justify-center select-none cursor-pointer"
              onClick={()=>{
                  setTimer(180)
                handleNext()
            }}
            >
              Next
              
              <span
                dangerouslySetInnerHTML={{ __html: rightArrowHtmlEntity }}
              />
              {/* You can add additional styling if needed */}
            </button>}
          </div>
          <div className={`${isRed? "text-red-600" : ""}`}>
      {Math.floor(timer / 60)}:{timer % 60 < 10 ? `0${timer % 60}` : timer % 60}
    </div>
        </div>
      )}
</div>)
}
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
