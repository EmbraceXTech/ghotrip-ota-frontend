import React from "react";
import { ConnectKitButton } from "connectkit";
import { useRouter } from "next/router";
import { Image } from "@nextui-org/react";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="flex items-center w-full min-h-20 bg-white px-[150px] justify-between border-b">
      <div className="cursor-pointer" onClick={() => router.replace("/")}>
        <Image
          src="/ghota.png"
          width={110}
          height={50}
          alt="ghotel trip logo"
        />
      </div>
      <ConnectKitButton mode="light" />
    </div>
  );
}
