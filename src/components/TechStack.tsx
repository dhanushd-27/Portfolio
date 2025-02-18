import Image from 'next/image';
import React from 'react'

type TechItem = {
  name: string;
  imgUrl: string;
  width: number;
  height: number;
}

type TechCategory = {
  name: string;
  items: TechItem[];
}

type TechStackType = TechCategory[];

const techStack: TechStackType = [
  {
    name: 'Languages',
    items: [
      { name: 'TypeScript', imgUrl: '/assets/languages/Typescript.svg', width: 36, height: 36 },
      { name: 'JavaScript', imgUrl: '/assets/languages/Javascript.svg', width: 36, height: 36 },
      { name: 'C++', imgUrl: '/assets/languages/C++.svg', width: 36, height: 36 },
    ],
  },
  {
    name: 'Frameworks & Libraries',
    items: [
      { name: 'React', imgUrl: '/assets/frameworksNdLibraries/React.svg', width: 36, height: 36 },
      { name: 'Next.js', imgUrl: '/assets/frameworksNdLibraries/Nextjs.svg', width: 36, height: 36 },
      { name: 'Angular', imgUrl: '/assets/frameworksNdLibraries/Angular.svg', width: 36, height: 36 },
      { name: 'Node.js', imgUrl: '/assets/frameworksNdLibraries/Nodejs.svg', width: 36, height: 36 },
    ],
  },
  {
    name: 'Tools',
    items: [
      { name: 'Git', imgUrl: '/assets/tools/Git.svg', width: 36, height: 36 },
      { name: 'GitHub', imgUrl: '/assets/tools/Github.svg', width: 36, height: 36 },
      { name: 'VS Code', imgUrl: '/assets/tools/vscode.svg', width: 36, height: 36 },
      { name: 'MongoDB', imgUrl: '/assets/tools/Mongodb.svg', width: 36, height: 36 },
      { name: 'PostgreSQL', imgUrl: '/assets/tools/Postgres.svg', width: 36, height: 36 },
      { name: 'Docker', imgUrl: '/assets/tools/Docker.svg', width: 36, height: 36 },
    ],
  },
];

export default function TechStack() {
  return (
    <div className='rounded-[64px] border-3 border-solid border-black mt-[292px]'>
      <div className='h-24 px-16 flex justify-start items-center border-b-3 border-black border-'>
        <h3 className='text-h3/h3 tracking-h3 font-bold text-black'>Tech Stack</h3>
      </div>

      <div>
        {techStack.map((category) => (
          <div key={category.name} className='flex flex-col gap-4 px-16 py-8'>
            <h5 className='text-h5/h5 tracking-h5 font-regular'>{category.name}</h5>
            <div className='flex px-8 gap-8'>
              {category.items.map((item) => (
                <div key={item.name} className='flex flex-col gap-1 justify-center items-center'>
                  <Image src={item.imgUrl} alt={item.name} width={item.width} height={item.height} />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
