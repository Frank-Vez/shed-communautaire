import { lusitana, lato } from "./ui/font";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-2 justify-items-center">
      <h1 className={`${lato.className} py-2`}>Welcome to your Neighborhood</h1>
      <p className={`${lusitana.className} py-2`}>
        start by creating an account and in no time you'll feel more connected
        to the people around you.
      </p>
      <ArrowDownCircleIcon className="size-10 fill-black" />
    </div>
  );
}
