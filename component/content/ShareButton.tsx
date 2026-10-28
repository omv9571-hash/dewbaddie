"use client";

import { useState } from "react";
import { Share2, Check } from "lucide-react";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (typeof window !== "undefined") {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // Fallback
        setCopied(false);
      }
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="btn-pill-secondary text-xs py-2 px-4 inline-flex items-center gap-1.5 cursor-pointer"
      aria-label="Copy guide link to clipboard"
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-[#FF2E88]" />
          <span className="text-[#FF2E88]">Link Copied!</span>
        </>
      ) : (
        <>
          <Share2 className="w-3.5 h-3.5" />
          <span>Copy Link</span>
        </>
      )}
    </button>
  );
}

