'use client'
import React from "react";
import AdminHeader from "../_components/AdminHeader";
import UploadArticle from "../_components/UploadArticle";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  getAllPosts,
  deletePost,
createPost,
  updatePost,
  fetchEmails,
  getStats
} from "../../utils/supabase";

export default function Admin() {

 const [emails, setEmails] = useState([]);

  useEffect(() => {
    const getEmails = async () => {
      const emailList = await fetchEmails();
      setEmails(emailList);
    };

    getEmails();
  }, []);
   const [stats, setStats] = useState({ emailCount: 0, postCount: 0 });

   useEffect(() => {
     const fetchStats = async () => {
       try {
         const data = await getStats();
         setStats(data);
       } catch (err) {
         console.error(err);
       }
     };
     fetchStats();
   }, []);
  return (
    <>
      <AdminHeader />
      <main className=" py-10 px-5">
        <section className=" max-w-[370px] mx-auto  py-7 ">
          <UploadArticle />

          <div className="p-4">
            <h2 className="text-lg font-bold mb-2">📧 Emails List</h2>

            {emails.length === 0 ? (
              <p>No emails yet.</p>
            ) : (
              null(
                <ul className="list-disc list-inside">
                  {emails.map((email, i) => (
                    <li key={i}>{email}</li>
                  ))}
                </ul>
              )
            )}
          </div>
          <div className="p-4 border rounded shadow">
            <p>Total Emails: {stats.emailCount}</p>
            <p>Total Articles: {stats.postCount}</p>
          </div>
        </section>
      </main>
    </>
  );
}
