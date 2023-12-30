import QuizCard from "@components/QuizCard"
import Link from 'next/link'
const quiz = () => {
  return (
    <div>
      <h1 className="mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl  text-center">
    There Is Nothing Here
    <br className="max-md:hidden"/>
    <br className=""/>
    <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent text-center">Learn and Quiz</span>
</h1>
      <QuizCard/>
      <p>And here is even More</p>
      <div className="flex">
      <QuizCard/>
      <QuizCard/>
      <QuizCard/>
      </div>
      <div className="relative mt-5 mb-10">
  <img
    src="https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    className="w-96 h-80 ml-5"
    alt=""
  />
  <div className="absolute top-0 left-0 h-80 bg-gradient-to-t from-blue-300 via-blue-50 to-transparent ml-5 mb-10 w-96 opacity-85">
    {/* Content of the absolutely positioned div */}
  </div>
</div>
      <div className="mt-24 flex justify-center">
      <Link href= '/' className="border border-black rounded-full justify-center bg-black text-white p-3">
        Return to Home
      </Link>
      </div>

    </div>
  )
}

export default quiz