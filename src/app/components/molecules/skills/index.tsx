import Image from "next/image";
import cssIcon from "../../../../../public/images/logos/css.svg";
import djangoIcon from "../../../../../public/images/logos/django.svg";
import dockerIcon from "../../../../../public/images/logos/docker.svg";
import expressIcon from "../../../../../public/images/logos/express.svg";
import gitIcon from "../../../../../public/images/logos/git.svg";
import htmlIcon from "../../../../../public/images/logos/html.svg";
import javaIcon from "../../../../../public/images/logos/java.svg";
import cppIcon from "../../../../../public/images/logos/cpp.svg";
import goIcon from "../../../../../public/images/logos/go.svg";
import gcpIcon from "../../../../../public/images/logos/gcp.svg";
import awss3Icon from "../../../../../public/images/logos/awss3.svg";
import doIcon from "../../../../../public/images/logos/do.svg";
import pythonIcon from "../../../../../public/images/logos/python.svg";
import tsIcon from "../../../../../public/images/logos/typescript.svg";
import jsIcon from "../../../../../public/images/logos/javascript.svg";
import redisIcon from "../../../../../public/images/logos/redis.svg";
import reactIcon from "../../../../../public/images/logos/react.svg";
import nodeIcon from "../../../../../public/images/logos/node.svg";
import nextIcon from "../../../../../public/images/logos/next.svg";
import mongoIcon from "../../../../../public/images/logos/mongo.svg";
import postgreIcon from "../../../../../public/images/logos/postgresql.svg";
import postmanIcon from "../../../../../public/images/logos/postman.svg";

export default function Skills() {
  return (
    <div className='grid grid-cols-fluid p-4 sm:p-8 gap-4 bg-[#00000010]'>
      <div className='rounded-lg flex items-center justify-center aspect-square cursor-pointer'>
        <a
          href='https://developer.mozilla.org/en-US/docs/Web/HTML#'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image src={htmlIcon} alt='HTML' className='h-12' />
        </a>
      </div>
      <div className='rounded-lg flex items-center justify-center aspect-square cursor-pointer'>
        <a
          href='https://developer.mozilla.org/en-US/docs/Web/CSS'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image src={cssIcon} alt='CSS' className='h-12' />
        </a>
      </div>
      <div className='rounded-lg flex items-center justify-center aspect-square cursor-pointer'>
        <a
          href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image src={jsIcon} alt='JavaScript' className='h-12' />
        </a>
      </div>
      <div className='rounded-lg flex items-center justify-center aspect-square cursor-pointer'>
        <a
          href='https://www.typescriptlang.org/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image src={tsIcon} alt='TypeScript' className='h-12' />
        </a>
      </div>
      <div className='rounded-lg flex items-center justify-center aspect-square cursor-pointer'>
        <a
          href='https://www.python.org/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image src={pythonIcon} alt='Python' className='h-12' />
        </a>
      </div>
      <div className='rounded-lg flex items-center justify-center aspect-square cursor-pointer'>
        <a
          href='https://www.java.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image src={javaIcon} alt='Java' className='h-12' />
        </a>
      </div>
      <div className='rounded-lg flex items-center justify-center aspect-square cursor-pointer'>
        <a
          href='https://cplusplus.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image src={cppIcon} alt='Cpp' className='h-12' />
        </a>
      </div>
      <div className='rounded-lg flex items-center justify-center aspect-square cursor-pointer'>
        <a
          href='https://go.dev/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image src={goIcon} alt='Go' className='h-12' />
        </a>
      </div>
      <div className='rounded-lg flex items-center justify-center aspect-square cursor-pointer'>
        <a href='https://react.dev/' target='_blank' rel='noopener noreferrer'>
          <Image src={reactIcon} alt='React' className='h-12' />
        </a>
      </div>
      <div className='rounded-lg flex items-center justify-center aspect-square cursor-pointer'>
        <a href='https://nextjs.org/' target='_blank' rel='noopener noreferrer'>
          <Image src={nextIcon} alt='Next' className='h-12' />
        </a>
      </div>
      <div className='rounded-lg flex items-center justify-center aspect-square cursor-pointer'>
        <a
          href='https://www.djangoproject.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image src={djangoIcon} alt='Django' className='h-12' />
        </a>
      </div>
      <div className='rounded-lg flex items-center justify-center aspect-square cursor-pointer'>
        <a
          href='https://nodejs.org/en'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image src={nodeIcon} alt='Node.js' className='h-12' />
        </a>
      </div>
      <div className='rounded-lg flex items-center justify-center aspect-square cursor-pointer'>
        <a
          href='https://expressjs.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image src={expressIcon} alt='Express' className='h-12' />
        </a>
      </div>
      <div className='rounded-lg flex items-center justify-center aspect-square cursor-pointer'>
        <a
          href='https://www.docker.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image src={dockerIcon} alt='Docker' className='h-12' />
        </a>
      </div>
      <div className='rounded-lg flex items-center justify-center aspect-square cursor-pointer'>
        <a
          href='https://postman.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image src={postmanIcon} alt='Postman' className='h-12' />
        </a>
      </div>
      <div className='rounded-lg flex items-center justify-center aspect-square cursor-pointer'>
        <a
          href='https://git-scm.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image src={gitIcon} alt='Git' className='h-12' />
        </a>
      </div>
      <div className='rounded-lg flex items-center justify-center aspect-square cursor-pointer'>
        <a href='https://redis.io/' target='_blank' rel='noopener noreferrer'>
          <Image src={redisIcon} alt='Redis' className='h-12' />
        </a>
      </div>
      <div className='rounded-lg flex items-center justify-center aspect-square cursor-pointer'>
        <a
          href='https://www.mongodb.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image src={mongoIcon} alt='Mongo' className='h-12' />
        </a>
      </div>
      <div className='rounded-lg flex items-center justify-center aspect-square cursor-pointer'>
        <a
          href='https://www.postgresql.org/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image src={postgreIcon} alt='PostgreSQL' className='h-12' />
        </a>
      </div>
      <div className='rounded-lg flex items-center justify-center aspect-square cursor-pointer'>
        <a
          href='https://cloud.google.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image src={gcpIcon} alt='Google Cloud' className='h-12' />
        </a>
      </div>
      <div className='rounded-lg flex items-center justify-center aspect-square cursor-pointer'>
        <a
          href='https://aws.amazon.com/s3/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image src={awss3Icon} alt='aws s3' className='h-12' />
        </a>
      </div>
      <div className='rounded-lg flex items-center justify-center aspect-square cursor-pointer'>
        <a
          href='https://digitalocean.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image src={doIcon} alt='Digital Ocean' className='h-12' />
        </a>
      </div>
    </div>
  );
}
