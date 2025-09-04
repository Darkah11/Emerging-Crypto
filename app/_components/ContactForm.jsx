"use client";
import React, { useState } from "react";
import Button from "@/components/Button";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "f9d533fb-3a04-4418-be91-55c1203b8003",
        name: name,
        email: email,
        message: message,
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      e.target.reset();
    }
  }

  return (
    <form onSubmit={handleSubmit} className=" w-full">
      <div className=" flex flex-col gap-8 mt-4">
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          className=" w-full border border-gray-300 p-2 outline-none rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          className=" w-full border border-gray-300 p-2 outline-none rounded-lg"
        />

        <textarea
          name="message"
          id="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          className=" w-full border border-gray-300 rounded-lg p-2 min-h-[200px] outline-none"
        ></textarea>
        <Button
        text={"Send Message"}
        />
      </div>
    </form>
  );
}
