"use client"
import { useState } from "react";
import { saveEmail } from "@/utils/supabase";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await saveEmail(email);
          alert("Thanks for subscribing!");
          setEmail("");
        } catch (err) {
          console.error(err);
          alert("Error saving email");
        }
      };
  return (
    <section className=" bg-gray-300 px-5 py-16">
          <div className=" max-w-[500px] mx-auto">
            <h2 className=" text-3xl text-center font-semibold">
              Subscribe To Our Newsletters
            </h2>
            <div className="mt-5">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail address"
                className=" block w-full outline-none rounded-sm px-3 h-[45px]"
              required
              />
              <button
                type="submit"
                onClick={handleSubmit}
                className=" bg-primary uppercase font-medium text-dark mt-3 block w-full outline-none rounded-sm px-3 h-[45px]"
              >
                subscribe
              </button>
            </div>
          </div>
        </section>
  )
}
