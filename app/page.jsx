import Image from 'next/image';
import hero from '@public/hero.jpg';
import QuizCard from '@components/QuizCard';

export default function Home() {
  return (
    <main className="">
    <section className="relative h-96 overflow-hidden">
      <img
        src="https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Hero Image"
        className="w-full h-full object-cover"
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-full">
        <h1 className="text-4xl font-bold mb-4">This is my header</h1>
        <p className="text-lg mb-8">And some description will go heree</p>
        
        {/* Buttons */}
        <div className="flex space-x-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            
          >
            Button 1
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-700 focus:outline-none focus:shadow-outline-green active:bg-green-800"
            
          >
            Button 2
          </button>
        </div>
      </div>
    </section>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-0 gap-y-2 ml-2">
  <QuizCard />
  <QuizCard />
  <QuizCard />
  <QuizCard />
  <QuizCard />
</div>

    </main>
  );
}
