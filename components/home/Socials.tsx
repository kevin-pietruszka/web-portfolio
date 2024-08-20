"use client";
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";
import { email, github, linkedin } from "@/lib/constants";

export default function Socials() {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 1000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  return (
    <div className={"grid grid-cols-1 sm:grid-cols-4 gap-4 place-content-center place-items-center"}>
      <Link
        target="_blank"
        href={github}
        className={"inline-flex gap-1 items-center justify-center rounded-full p-1 bg-surface0 hover:border-lavender transition-colors border-2 border-transparent"}
      >
        <span>{"Github"}</span>
        <FaGithub />
      </Link>
      <Link
        target="_blank"
        href={linkedin}
        className={"inline-flex gap-1 items-center justify-center rounded-full p-1 bg-surface0 hover:border-lavender transition-colors border-2 border-transparent"}
      >
        <span> {"LinkedIn"} </span>
        <FaLinkedin />
      </Link>
      <button
        onClick={handleEmailClick}
        className={"inline-flex gap-1 items-center justify-center rounded-full p-1 bg-surface0 hover:border-lavender transition-colors border-2 border-transparent"}
      >
        <span> {emailCopied ? "Copied" : "Email"} </span>
        <FaEnvelope />
      </button>
      <Link target="_blank" href="/resume.pdf" className={"inline-flex gap-1 items-center justify-center rounded-full p-1 bg-surface0 hover:border-lavender transition-colors border-2 border-transparent"}>
        <span> {"Resume"} </span>
        <FaDownload />
      </Link>
    </div>
  );
}
