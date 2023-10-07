import Image from 'next/image';

export default function Start() {
  return (
    <div className='relative'>
        <div className='w-full h-screen'>
          <Image src="/selva.gif" alt="Mi GIF" layout="fill" objectFit="cover" />
        </div>
      {/* <div className='absolute top-0 left-0 mt-10'>
        <Image src="/buho.gif" alt="Segunda GIF" width={200} height={200} />
      </div> */}
     
    </div>
  );
}
