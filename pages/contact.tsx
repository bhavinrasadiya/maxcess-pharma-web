import React from "react";
import Head from "next/head";
// Components
import { NextPage } from "next";
import FullLayout from "../components/FullLayout";
import ContactPage from "../components/ContactPage";

const Contact: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Maxcess Pharma Pvt. Ltd. is a limited liability partnership limited company based in Ahmedabad, India"
        />
        <meta property="og:title" content="Contact - Maxcess Pharma" />
        <meta
          property="og:description"
          content="Maxcess Pharma Pvt. Ltd. is a limited liability partnership limited company based in Ahmedabad, India"
        />
        <meta
          property="og:url"
          content="https://www.maxcesspharma.com/about"
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FullLayout>
        <ContactPage />
      </FullLayout>
    </main>
  );
};

export default Contact;
