"use client";
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";
import { email, github, linkedin } from "@/lib/constants";

export default function Socials({
  containerStyle,
  socialStyles,
}: {
  containerStyle: string;
  socialStyles: string;
}) {
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
    <div className={containerStyle}>
      <Link
        target="_blank"
        href={github}
        className={socialStyles}
      >
        <span>{"Github"}</span>
        <FaGithub />
      </Link>
      <Link
        target="_blank"
        href={linkedin}
        className={socialStyles}
      >
        <span> {"LinkedIn"} </span>
        <FaLinkedin />
      </Link>
      <button
        onClick={handleEmailClick}
        className={socialStyles}
      >
        <span> {emailCopied ? "Copied" : "Email"} </span>
        <FaEnvelope />
      </button>
      <Link target="_blank" href="/resume.pdf" className={socialStyles}>
        <span> {"Resume"} </span>
        <FaDownload />
      </Link>
    </div>
  );
}
