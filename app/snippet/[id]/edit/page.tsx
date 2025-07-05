// app/snippet/[id]/edit/page.tsx

import EditSnippetForm from "@/components/EditSnippetForm";
import { prisma } from "@/lib/db";
import React from "react";

const EditPageSnippet = async ({ params }: { params: { id: string } }) => {
  const id = parseInt(params.id); // convert string to number
  const snippet = await prisma.snippet.findUnique({
    where: { id },
  });

  if (!snippet) {
    return (
      <div className="p-6 text-center text-red-500">
        <h1 className="text-2xl font-semibold">Snippet not found</h1>
      </div>
    );
  }

  return <EditSnippetForm snippet={snippet} />;
};

export default EditPageSnippet;
