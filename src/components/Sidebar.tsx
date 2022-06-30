import { useGetLessonsQuery } from '../graphql/generated';
import { useState } from 'react';
import { Lesson } from './Lesson';
import classNames from 'classnames';
import { List, SignOut, X } from 'phosphor-react';
import { Link } from 'react-router-dom';

export function Sidebar() {
  const { data } = useGetLessonsQuery();

  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className="absolute top-5 right-5 z-50 lg:hidden flex items-center gap-2">
        <span className="block text-md">Aulas</span>

        {isOpen ? (
          <X
            size={24}
            className="text-blue-500 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <List
            size={24}
            className="text-blue-500 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
      </div>

      <aside
        className={classNames(
          'lg:relative lg:block lg:w-[21.75rem] bg-gray-700 p-2 border-l border-gray-600',
          {
            'block w-full min-h-[180vh] absolute z-50': isOpen,
            'hidden ': !isOpen,
          }
        )}
      >
        <div className="h-full p-4 scrollbar-thumb-green-500 scrollbar-track-gray-700 scrollbar-thin flex-1">
          <span className="flex items-center justify-between font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
            Cronogramas
            <span className="text-red-700 flex px-4 py-2 border border-red-700 rounded hover:text-white hover:border-red-700 hover:bg-red-700">
              <Link to="/">
                <SignOut size={24} />
              </Link>
            </span>
          </span>
          

          <div className="flex flex-col gap-8">
            {data?.lessons.map((lesson) => {
              return (
                <div onClick={() => setIsOpen(!isOpen)}>
                  <Lesson
                    key={lesson.id}
                    title={lesson.title}
                    slug={lesson.slug}
                    availableAt={new Date(lesson.availableAt)}
                    type={lesson.lessonType}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
}
