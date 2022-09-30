import { useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import gfm from "https://cdn.skypack.dev/remark-gfm@1.0.0";
import Navbar from "./Navbar";
import "./markdown_styles.css";

export default function MarkDownOperations() {
  const [markDownText, setMarkDownText] = useState("");

  return (
    <>
      <Navbar />
      <div className="center-div">
        <textarea
          className="left-side shadow-lg"
          value={markDownText}
          onChange={(e) => setMarkDownText(e.target.value)}
          placeholder="Write Your Markdown here."
        ></textarea>

        <div className="right-side shadow-md">
          <div className="md:absolute md:inset-y-0 md:left-50 md:top-20 text-lg font-bold">
            Preview
          </div>
          <ReactMarkdown className="prose" remarkPlugins={[gfm]}>
            {markDownText}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
}
