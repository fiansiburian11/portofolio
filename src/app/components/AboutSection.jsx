"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Next.js</li>
        <li>React.js</li>
        <li>Html</li>
        <li>Css</li>
        <li>Tailwind Css</li>
        <li>Git</li>
      </ul>
    ),
  },
  {
    title: "Study",
    id: "study",
    content: (
      <ul className="list-disc pl-2">
        <li>Universitas Hangtuah Pekanbaru</li>
        <li>Universitas Kristen Indonesia</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <Link href={"https://www.alibabacloud.com/"} target="_blank" rel="noopener noreferrer">
            Alibaba Cloud
          </Link>
        </li>
        <li>
          <Link href={"https://www.dicoding.com/"} target="_blank" rel="noopener noreferrer">
            Dicoding
          </Link>
        </li>
        <li>
          <Link href={"https://www.codepolitan.com/"} target="_blank" rel="noopener noreferrer">
            Code Politan
          </Link>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.webp" alt="about-image" width={400} height={400} className="w-full h-full"  />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Saya adalah seorang Front-End Web Developer dengan hasrat untuk menciptakan antarmuka web yang interaktif, responsif, dan berfokus pada pengalaman pengguna. Saya memiliki pengalaman yang cukup baik.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton selectTab={() => handleTabChange("study")} active={tab === "study"}>
              {" "}
              Study{" "}
            </TabButton>
            <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
