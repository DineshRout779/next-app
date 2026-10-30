import Image from "next/image";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="flex w-full">
        <div className="relative basis-1/2 border w-full p-6 min-h-screen">
          <Image
            alt="hero-img"
            src="https://images.pexels.com/photos/33441868/pexels-photo-33441868.jpeg"
            fill
            sizes="50vw"
            priority
            className="object-cover"
          />
        </div>

        <div className="basis-1/2 border w-full flex justify-center p-6 items-center">
          {children}
        </div>
      </div>
    </div>
  );
}
