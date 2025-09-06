import React from "react";
import Header from "../_components/Header";
import Newsletter from "../_components/Newsletter";
import Footer from "../_components/Footer";
import ContactForm from "../_components/ContactForm";

export const metadata = {
  title: "Contact Us",
};

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        <section className=" px-5 py-10">
          <div className=" max-w-[450px] mx-auto">
            <h2 className=" text-3xl font-bold">Contact Us</h2>
            <ContactForm />
          </div>
        </section>
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
