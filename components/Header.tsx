import Link from "next/link";

export default function Header({ font }: { font: string }) {
  return (
    <header className="py-2 bg-white">
      <div className="max-w-[100rem] px-12 mx-auto flex justify-between">
        <Link href="/">
          <h1
            className={`text-3xl uppercase font-bold tracking-widest text-black-500 py-4 ${font}`}
          >
            Weather App
          </h1>
        </Link>
      </div>
    </header>
  );
}
