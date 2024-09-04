import React, { PropsWithChildren } from "react";
import { Meteors } from "@/components/ui/meteors";
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import Image, { StaticImageData } from "next/image";

export const TestimonialsCard = (
  { name,
    position,
    text,
    avatar
  }: PropsWithChildren<{
    name: String,
    position: string,
    text: string,
    avatar: StaticImageData
  }>
) => {
  return (
    <div className="m-6 p-6 relative">
      <div className=" w-full relative max-w-md">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-secondary to-primary transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="flex flex-col gap-1 items-center justify-center">
          <p className="font-normal text-sm text-gray-400 mb-2 relative z-50 p-1">
              {text}
            </p>
            <div className="flex p-1 items-center">
              <div className="flex items-center justify-center size-40">
                <Image src={avatar} alt="" />
              </div>
              <div>
                <h1 className="font-semibold text-.5xl text-gray-200 mb-4 relative z-50">
                  {name}
                </h1>
                <h2 className="font-semibold text-.5xl text-gray-200">{position}</h2>
              </div>
            </div>
          </div>
          <Meteors number={50} />
        </div>
      </div>
    </div>
  );
}

export default TestimonialsCard