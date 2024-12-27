import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="flex flex-col mx-auto mt-10 justify-center items-center gap-4">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/home" className="text-blue-700 cursor-pointer font-semibold">
        Return Home
      </Link>
    </div>
  );
}
