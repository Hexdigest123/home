import Image from "next/image";

export default function Header() {
  return (
    <div className="flex">
      <div className="min-w-48 border-y border-gray-300"></div>
      <div className="flex justify-between w-full border border-gray-300">
        <a href="/" className="border-x border-gray-300 py-1 px-2">
          <Image
            src="/icons/home-sign.svg"
            alt="Home icon"
            width={64}
            height={64}
          />
        </a>
        <a
          href="/login"
          className="flex items-center border-x border-gray-300 py-1 px-2"
        >
          <Image
            src="/icons/locked.svg"
            alt="Login icon"
            width={64}
            height={64}
          />
        </a>
      </div>
      <div className="min-w-48 border-y border-gray-300"></div>
    </div>
  );
}
