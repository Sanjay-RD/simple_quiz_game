import { useEffect, useState } from "react";
import Card from "./components/Card";
import hello from "./images/hello.jpg";
import covid1 from "./images/sy_covid.jpg";
import safty from "./images/safty.png";
import clapping from "./images/clapping.png";
import lesson from "./images/lesson.png";
import travel from "./images/travel.png";

function App() {
  const [startQuizz, setStartQuizz] = useState(false);
  const [greeting, setGreeting] = useState(false);
  const [QuestionOne, setQuestionOne] = useState(false);
  const [QuestionTwo, setQuestionTwo] = useState(false);
  const [QuestionThree, setQuestionThree] = useState(false);
  const [QuestionFour, setQuestionFour] = useState(false);
  const [QuestionFive, setQuestionFive] = useState(false);
  const [answerOne, setAnswerOne] = useState();
  const [answerTwo, setAnswerTwo] = useState();
  const [answerThree, setAnswerThree] = useState();
  const [answerFour, setAnswerFour] = useState();
  const [answerFive, setAnswerFive] = useState();

  const [resultOne, setResultOne] = useState(false);
  const [resultTwo, setResultTwo] = useState(false);
  const [resultThree, setResultThree] = useState(false);
  const [resultFour, setResultFour] = useState(false);
  const [lessonOne, setLessonOne] = useState(false);
  const [lessonTwo, setLessonTwo] = useState(false);

  console.log(answerOne);
  const handleStartQuizz = () => {
    console.log("object");
    setStartQuizz(true);
    setGreeting(true);
  };
  const openQuestionOne = () => {
    setGreeting(false);
    setQuestionOne(true);
  };
  const handleSubmitQuestionOne = (e) => {
    e.preventDefault();
    setQuestionOne(false);
    if (answerOne === "0") {
      setQuestionTwo(true);
    } else {
      setQuestionThree(true);
    }
  };
  const handleSubmitQuestionTwo = (e) => {
    e.preventDefault();
    setQuestionTwo(false);
    if (answerTwo === "1") {
      setResultOne(true);
    } else {
      setLessonOne(true);
    }
  };
  const handleSubmitQuestionThree = (e) => {
    e.preventDefault();
    setQuestionThree(false);
    if (answerThree === "1") {
      setQuestionFour(true);
    } else {
      setResultTwo(true);
    }
  };
  const handleSubmitQuestionFour = (e) => {
    e.preventDefault();
    setQuestionFour(false);
    if (answerFour === "0") {
      setQuestionFive(true);
    } else {
      setResultThree(true);
    }
  };
  const handleSubmitQuestionFive = (e) => {
    e.preventDefault();
    setQuestionFive(false);
    if (answerFive === "0") {
      setLessonTwo(true);
    } else {
      setResultFour(true);
    }
  };
  return (
    <div className="container mx-auto px-28 py-6">
      <div className="text-center">
        <button
          className="px-3 py-2 bg-[#f4f4f4]"
          onClick={handleStartQuizz}
          disabled={startQuizz === true ? true : false}
        >
          Start Quizz
        </button>
      </div>
      {/* greeting */}
      {greeting && (
        <>
          <Card>
            <div className="transition-transform">
              <img src={hello} alt="" className="w-[100px] h-[100px] m-auto" />
              <h1 className="font-bold text-xl mt-2">Greeting: Good Morning</h1>
              <div className="text-right">
                <button
                  className="bg-[#929292] px-2 py-1 rounded transition ease-in-out delay-150 hover:scale-110 duration-300 text-white"
                  onClick={openQuestionOne}
                >
                  Next
                </button>
              </div>
            </div>
          </Card>
        </>
      )}
      {/* greeting end */}
      {QuestionOne && (
        <Card>
          <div className="transition-transform">
            <img
              src={covid1}
              alt=""
              className="w-[100px] h-[100px] m-auto rounded-full"
            />
            <form onSubmit={handleSubmitQuestionOne} className="mt-2">
              <label className="font-bold text-base mt-2">
                <h1 className="text-center">
                  Do you have covid-19 symptoms recently?
                </h1>
              </label>
              <div
                className="mt-2 flex justify-evenly"
                onChange={(e) => setAnswerOne(e.target.value)}
              >
                <div className="flex items-center">
                  <input
                    id="yes"
                    name="push-notifications"
                    type="radio"
                    value="1"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    required
                  />
                  <label
                    htmlFor="yes"
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="no"
                    name="push-notifications"
                    type="radio"
                    value="0"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    required
                  />
                  <label
                    htmlFor="no"
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    No
                  </label>
                </div>
              </div>

              <div className="text-right mt-2">
                <button
                  type="submit"
                  className="bg-[#929292] px-2 py-1 rounded transition ease-in-out delay-150 hover:scale-110 duration-300 text-white"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </Card>
      )}
      {QuestionTwo && (
        <Card>
          <div className="transition-transform">
            <img
              src={safty}
              alt=""
              className="w-[100px] h-[100px] m-auto rounded-full"
            />
            <form onSubmit={handleSubmitQuestionTwo} className="mt-2">
              <label className="font-bold text-base mt-2">
                <h1 className="text-center">Do you have follow safety rules</h1>
              </label>
              <div
                className="mt-2 flex justify-evenly"
                onChange={(e) => setAnswerTwo(e.target.value)}
              >
                <div className="flex items-center">
                  <input
                    id="yes"
                    name="push-notifications"
                    type="radio"
                    value="1"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    required
                  />
                  <label
                    htmlFor="yes"
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="no"
                    name="push-notifications"
                    type="radio"
                    value="0"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    required
                  />
                  <label
                    htmlFor="no"
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    No
                  </label>
                </div>
              </div>

              <div className="text-right mt-2">
                <button
                  type="submit"
                  className="bg-[#929292] px-2 py-1 rounded transition ease-in-out delay-150 hover:scale-110 duration-300 text-white"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </Card>
      )}
      {resultOne && (
        <Card>
          <div className="transition-transform">
            <img src={clapping} alt="" className=" h-[100px] m-auto" />
            <h1 className="text-center mt-2">You Have Score: 55</h1>
          </div>
        </Card>
      )}
      {lessonOne && (
        <Card>
          <div className="transition-transform">
            <img
              src={lesson}
              alt=""
              className="w-[100px] h-[100px] m-auto rounded-full"
            />
            <p className="text-center mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
              voluptatibus odit ex amet nihil reprehenderit quaerat ullam,
              voluptatum aperiam modi. Vel nihil aperiam voluptates veniam
              architecto sapiente quia assumenda ut!
            </p>
          </div>
        </Card>
      )}
      {QuestionThree && (
        <Card>
          <div className="transition-transform">
            <img
              src={travel}
              alt=""
              className="w-[100px] h-[100px] m-auto rounded-full"
            />
            <form onSubmit={handleSubmitQuestionThree} className="mt-2">
              <label className="font-bold text-base mt-2">
                <h1 className="text-center">
                  Do you Travel Internationally Recently?
                </h1>
              </label>
              <div
                className="mt-2 flex justify-evenly"
                onChange={(e) => setAnswerThree(e.target.value)}
              >
                <div className="flex items-center">
                  <input
                    id="yes"
                    name="push-notifications"
                    type="radio"
                    value="1"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    required
                  />
                  <label
                    htmlFor="yes"
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="no"
                    name="push-notifications"
                    type="radio"
                    value="0"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    required
                  />
                  <label
                    htmlFor="no"
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    No
                  </label>
                </div>
              </div>

              <div className="text-right mt-2">
                <button
                  type="submit"
                  className="bg-[#929292] px-2 py-1 rounded transition ease-in-out delay-150 hover:scale-110 duration-300 text-white"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </Card>
      )}
      {QuestionFour && (
        <Card>
          <div className="transition-transform">
            <img
              src={travel}
              alt=""
              className="w-[100px] h-[100px] m-auto rounded-full"
            />
            <form onSubmit={handleSubmitQuestionFour} className="mt-2">
              <label className="font-bold text-base mt-2">
                <h1 className="text-center">Do you follow Quarantine rules?</h1>
              </label>
              <div
                className="mt-2 flex justify-evenly"
                onChange={(e) => setAnswerFour(e.target.value)}
              >
                <div className="flex items-center">
                  <input
                    id="yes"
                    name="push-notifications"
                    type="radio"
                    value="1"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    required
                  />
                  <label
                    htmlFor="yes"
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="no"
                    name="push-notifications"
                    type="radio"
                    value="0"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    required
                  />
                  <label
                    htmlFor="no"
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    No
                  </label>
                </div>
              </div>

              <div className="text-right mt-2">
                <button
                  type="submit"
                  className="bg-[#929292] px-2 py-1 rounded transition ease-in-out delay-150 hover:scale-110 duration-300 text-white"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </Card>
      )}
      {QuestionFive && (
        <Card>
          <div className="transition-transform">
            <img
              src={travel}
              alt=""
              className="w-[100px] h-[100px] m-auto rounded-full"
            />
            <form onSubmit={handleSubmitQuestionFive} className="mt-2">
              <label className="font-bold text-base mt-2">
                <h1 className="text-center">Do you user Sanitizer?</h1>
              </label>
              <div
                className="mt-2 flex justify-evenly"
                onChange={(e) => setAnswerFive(e.target.value)}
              >
                <div className="flex items-center">
                  <input
                    id="yes"
                    name="push-notifications"
                    type="radio"
                    value="1"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    required
                  />
                  <label
                    htmlFor="yes"
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="no"
                    name="push-notifications"
                    type="radio"
                    value="0"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    required
                  />
                  <label
                    htmlFor="no"
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    No
                  </label>
                </div>
              </div>

              <div className="text-right mt-2">
                <button
                  type="submit"
                  className="bg-[#929292] px-2 py-1 rounded transition ease-in-out delay-150 hover:scale-110 duration-300 text-white"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </Card>
      )}
      {resultTwo && (
        <Card>
          <div className="transition-transform">
            <img
              src={lesson}
              alt=""
              className="w-[100px] h-[100px] m-auto rounded-full"
            />
            <p className="text-center mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
              voluptatibus odit ex amet nihil reprehenderit quaerat ullam,
              voluptatum aperiam modi. Vel nihil aperiam voluptates veniam
              architecto sapiente quia assumenda ut!
            </p>
          </div>
        </Card>
      )}
      {resultThree && (
        <Card>
          <div className="transition-transform">
            <img src={clapping} alt="" className=" h-[100px] m-auto " />
            <p className="text-center mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
              voluptatibus odit ex amet nihil reprehenderit quaerat ullam,
              voluptatum aperiam modi. Vel nihil aperiam voluptates veniam
              architecto sapiente quia assumenda ut!
            </p>
          </div>
        </Card>
      )}
      {resultFour && (
        <Card>
          <div className="transition-transform">
            <img src={clapping} alt="" className=" h-[100px] m-auto " />
            <p className="text-center mt-2">Your Score is 88</p>
          </div>
        </Card>
      )}
      {lessonTwo && (
        <Card>
          <div className="transition-transform">
            <img src={lesson} alt="" className=" h-[100px] m-auto " />
            <p className="text-center mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
              voluptatibus odit ex amet nihil reprehenderit quaerat ullam,
              voluptatum aperiam modi. Vel nihil aperiam voluptates veniam
              architecto sapiente quia assumenda ut!
            </p>
          </div>
        </Card>
      )}
    </div>
  );
}

export default App;
