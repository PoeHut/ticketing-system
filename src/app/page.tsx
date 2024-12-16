import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="bg-black bg-home-img bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-full max-auto h-dvh border border-red-800">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white">
          <h1 className="text-4xl font-bold">Dan&apos;Computer Repair Shop</h1>
          <address>
            555 Gateway Lane
            <br />
            Kansas City, KS 55555
          </address>
          <p>Open Daily: 9:00am - 5:00pm</p>
          <Link href="tel:09785136684" className="hover:underline">
            +95 9 785 136 684
          </Link>
        </div>
      </main>
    </div>
  );
};

export default page;
