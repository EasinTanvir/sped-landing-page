"use client";
import { useState } from "react";

const FooterEditor = () => {
  const [footerText, setFooterText] = useState(
    "© 2025 SwiftDrop. All rights reserved."
  );

  return (
    <div>
      <label className="block text-gray-700 font-medium">Footer Text</label>
      <textarea
        value={footerText}
        onChange={(e) => setFooterText(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md mt-1"
        rows="3"
      />
    </div>
  );
};

export default FooterEditor;
