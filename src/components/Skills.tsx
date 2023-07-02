import Image from "next/image";
import cssIcon from "../../public/images/logos/css.svg";
import djangoIcon from "../../public/images/logos/django.svg";
import dockerIcon from "../../public/images/logos/docker.svg";
import expressIcon from "../../public/images/logos/express.svg";
import gitIcon from "../../public/images/logos/git.svg";
import htmlIcon from "../../public/images/logos/html.svg";
import javaIcon from "../../public/images/logos/java.svg";
import pythonIcon from "../../public/images/logos/python.svg";
import tsIcon from "../../public/images/logos/typescript.svg";
import jsIcon from "../../public/images/logos/javascript.svg";
import redisIcon from "../../public/images/logos/redis.svg";
import reactIcon from "../../public/images/logos/react.svg";
import nodeIcon from "../../public/images/logos/node.svg";
import nextIcon from "../../public/images/logos/next.svg";
import mongoIcon from "../../public/images/logos/mongo.svg";
import postgreIcon from "../../public/images/logos/postgresql.svg";

export default function Skills() {
  return (
    <div className='grid grid-cols-fluid p-4 sm:p-8 gap-4 bg-[#00000010]'>
      <div className='rounded rounded-lg flex items-center justify-center aspect-square'>
        <Image priority src={htmlIcon} alt='HTML' className="h-12"/>
      </div>
      <div className='rounded rounded-lg flex items-center justify-center aspect-square'>
        <Image priority src={cssIcon} alt='CSS' className="h-12"/>
      </div>
      <div className='rounded rounded-lg flex items-center justify-center aspect-square'>
        <Image priority src={jsIcon} alt='JavaScript' className="h-12"/>
      </div>
      <div className='rounded rounded-lg flex items-center justify-center aspect-square'>
        <Image priority src={tsIcon} alt='TypeScript' className="h-12"/>
      </div>
      <div className='rounded rounded-lg flex items-center justify-center aspect-square'>
        <Image priority src={pythonIcon} alt='Python' className="h-12"/>
      </div>
      <div className='rounded rounded-lg flex items-center justify-center aspect-square'>
        <Image priority src={javaIcon} alt='Java' className="h-12"/>
      </div>
      <div className='rounded rounded-lg flex items-center justify-center aspect-square'>
        <Image priority src={reactIcon} alt='React' className="h-12"/>
      </div>
      <div className='rounded rounded-lg  flex items-center justify-center aspect-square'>
        <Image priority src={nextIcon} alt='Next' className="h-12"/>
      </div>
      <div className='rounded rounded-lg flex items-center justify-center aspect-square'>
        <Image priority src={djangoIcon} alt='Django' className="h-12"/>
      </div>
      <div className='rounded rounded-lg flex items-center justify-center aspect-square'>
        <Image priority src={nodeIcon} alt='Node.js' className="h-12"/>
      </div>
      <div className='rounded rounded-lg  flex items-center justify-center aspect-square'>
        <Image priority src={expressIcon} alt='Express' className="h-12"/>
      </div>
      <div className='rounded rounded-lg flex items-center justify-center aspect-square'>
        <Image priority src={dockerIcon} alt='Docker' className="h-12"/>
      </div>
      <div className='rounded rounded-lg flex items-center justify-center aspect-square'>
        <Image priority src={gitIcon} alt='Git' className="h-12"/>
      </div>
      <div className='rounded rounded-lg flex items-center justify-center aspect-square'>
        <Image priority src={redisIcon} alt='Redis' className="h-12"/>
      </div>
      <div className='rounded rounded-lg flex items-center justify-center aspect-square'>
        <Image priority src={mongoIcon} alt='Mongo' className="h-12"/>
      </div>
      <div className='rounded rounded-lg flex items-center justify-center aspect-square'>
        <Image priority src={postgreIcon} alt='PostgreSql' className="h-12 h-12"/>
      </div>
    </div>
  );
}
