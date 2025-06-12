"use client";
import { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import { Level } from "@tiptap/extension-heading";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";
// load all languages with "all" or common languages with "common"
import { all, createLowlight } from "lowlight";

// create a lowlight instance with all languages loaded
const lowlight = createLowlight(all);

lowlight.register("html", html);
lowlight.register("css", css);
lowlight.register("js", js);
lowlight.register("ts", ts);

const Tiptap = () => {
  const [content, setContent] = useState("<p>Hello World! 🌎️</p>");

  const editor = useEditor({
    extensions: [
      StarterKit,

      Underline,
      CodeBlockLowlight.configure({
        lowlight,
        languageClassPrefix: "language-",
      }),
    ],
    content,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "prose dark:prose-invert border border-gray-300 rounded-lg p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[150px] max-w-full",
      },
    },
  });

  if (!editor) return null;

  const levels: Level[] = [1, 2, 3];

  const isActive = (type: string, options = {}) =>
    editor.isActive(type, options);

  return (
    <div>
      {/* Barre d'outils */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {/* Bouton paragraphe */}
        {/* <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={`px-2 py-1 border rounded ${
            isActive("bold") ? "bg-blue-500 text-white" : "bg-white dark:text-black"
          }`}
          aria-label="Toggle Paragraph"
        >
          Paragraphe
        </button> */}

        {/* Heading */}
        {levels.map((level) => (
          <button
            key={level}
            onClick={() =>
              editor.chain().focus().toggleHeading({ level }).run()
            }
            className={`${
              editor.isActive("heading", { level })
                ? "bg-blue-500 text-white"
                : "bg-white dark:text-black"
            }

                px-2 py-1 border rounded
                `}
            aria-label={`Toggle heading ${level}`}
          >
            H{level}
          </button>
        ))}

        {/* Bold */}
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-2 py-1 border rounded ${
            isActive("bold")
              ? "bg-blue-500 text-white"
              : "bg-white dark:text-black"
          }`}
          aria-label="Toggle bold"
        >
          <b>B</b>
        </button>

        {/* Italic */}
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-2 py-1 border rounded ${
            isActive("italic")
              ? "bg-blue-500 text-white"
              : "bg-white dark:text-black"
          }`}
          aria-label="Toggle italic"
        >
          <em>I</em>
        </button>

        {/* Underline */}
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`px-2 py-1 border rounded ${
            isActive("underline")
              ? "bg-blue-500 text-white"
              : "bg-white dark:text-black"
          }`}
          aria-label="Toggle underline"
        >
          U
        </button>

        {/* Strike */}
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`px-2 py-1 border rounded ${
            isActive("strike")
              ? "bg-blue-500 text-white"
              : "bg-white dark:text-black"
          }`}
          aria-label="Toggle strike"
        >
          S
        </button>

        {/* code */}
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`px-2 py-1 border rounded ${
            editor.isActive("codeBlock")
              ? "bg-blue-500 text-white"
              : "bg-white dark:text-black"
          }`}
          aria-label="Toggle code block"
        >
          {"</>"}
        </button>
      </div>

      {/* Editeur */}
      <EditorContent editor={editor} />

      {/* Affichage du contenu sauvegardé */}
      <pre
        className="mt-4 p-4 border bg-gray-100 dark:bg-gray-900
      whitespace-pre-wrap text-sm"
      >
        {content}
      </pre>
    </div>
  );
};

export default Tiptap;
