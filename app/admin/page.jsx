import React from "react";
import AdminHeader from "../_components/AdminHeader";
import UploadArticle from "../_components/UploadArticle";

export default function Admin() {
  return (
    <>
      <AdminHeader />
      <main className=" py-10 px-5">
        <section className=" bg-gray-200 max-w-[370px] mx-auto px-5 py-7">
          <UploadArticle />
        </section>
        <section>
            <div className=" max-w-[370px] bg-gray-200 px-5 py-10 mx-auto mt-24">
                <h2 className=" text-2xl text-dark font-semibold">Your Posts</h2>
                <div className=" mt-5 flex flex-col gap-y-10">
                    <div className=" border-b border-gray-900 pb-5">
                        <h3 className=" text-black font-medium text-lg">Top Projects on SUI – Your ultimate guide to the SUI Chain Projects</h3>
                        <p className=" text-sm text-gray-600 mt-2">New Crypto - May 12, 2025</p>
                        <div className=" flex flex-row gap-x-5 mt-3">
                            <button className=" px-7 py-[5px] bg-primary rounded-md text-white">Edit</button>
                            <button className=" px-7 py-[5px] bg-red-600 rounded-md text-white">Delete</button>
                        </div>
                    </div>
                    <div className=" border-b border-gray-900 pb-5">
                        <h3 className=" text-black font-medium text-lg">Top Projects on SUI – Your ultimate guide to the SUI Chain Projects</h3>
                        <p className=" text-sm text-gray-600 mt-2">New Crypto - May 12, 2025</p>
                        <div className=" flex flex-row gap-x-5 mt-3">
                            <button className=" px-7 py-[5px] bg-primary rounded-md text-white">Edit</button>
                            <button className=" px-7 py-[5px] bg-red-600 rounded-md text-white">Delete</button>
                        </div>
                    </div>
                    <div className=" border-b border-gray-900 pb-5">
                        <h3 className=" text-black font-medium text-lg">Top Projects on SUI – Your ultimate guide to the SUI Chain Projects</h3>
                        <p className=" text-sm text-gray-600 mt-2">New Crypto - May 12, 2025</p>
                        <div className=" flex flex-row gap-x-5 mt-3">
                            <button className=" px-7 py-[5px] bg-primary rounded-md text-white">Edit</button>
                            <button className=" px-7 py-[5px] bg-red-600 rounded-md text-white">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </main>
    </>
  );
}
