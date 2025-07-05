"use client";

import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";
import type { Snippet } from "@/lib/generated/prisma";

import { Button } from "./ui/button";
import { saveSnippet } from "@/app/actions";

const EditSnippetForm = ({ snippet }: { snippet: Snippet }) => {
  const [code, setCode] = useState(snippet.code);

 

  const saveSnippetAction = saveSnippet.bind(null, snippet.id, code);

  return (
    <div className="flex flex-col gap-4">
      <form action ={saveSnippetAction} className="flex items-center justify-between">
        <h1 className="font-bold text-xl">Your Code Editor</h1>
        <Button type="submit">Save</Button>
      </form>

      <Editor
        theme="vs-dark"
        height="40vh"
        defaultLanguage="javascript"
        value={code}
        onChange={(value) => setCode(value || "")}
      />
    </div>
  );
};

export default EditSnippetForm;
