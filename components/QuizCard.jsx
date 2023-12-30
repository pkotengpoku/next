import { server } from '@config/server';
import Image from 'next/image';
import Link from 'next/link';

const QuizCard = () => {
  return (
    <div className="w-72 m-1 shadow-md border mx-auto rounded-lg overflow-hidden">
      <div className="m-3">
        <div className="h-48 w-full">
          <Image
            src="https://th.bing.com/th/id/R.cfc026cab72acda41af0e1b33cfba040?rik=E%2fgvfEtgZEYR%2fg&pid=ImgRaw&r=0"
            alt="Card Image"
            layout="responsive"
            objectFit="cover"
            width={300}
            height={200}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="flex flex-col mt-3">
          <h1 className="font-[600]">
            Biology A1
          </h1>
          <p className="text-sm text-slate-700 overflow-hidden overflow-ellipsis h-24">
            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.
            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.
          </p>
          <Link href='/quiz'>
          <button className="rounded-lg w-36 mt-4 border border-black font-[500]" >
            Open Course
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
