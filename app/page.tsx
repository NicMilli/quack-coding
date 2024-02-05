import Recorder from '@/components/Recorder'
import Image from 'next/image'
import quack from '@/assets/quack.png'
import 'regenerator-runtime/runtime'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full">
      <div className="w-full flex flex-col items-center justify-center ">
        <Image
          src={quack}
          alt="Buy Me A Coffee"
          className="w-[50%] h-auto"
          width={0}
          height={0}
          sizes="100vw"
        />

        <Recorder />
      </div>
    </main>
  )
}
