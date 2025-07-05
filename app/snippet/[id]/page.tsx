// app/snippet/[id]/page.tsx
import React from "react";
import { prisma } from "@/lib/db";
import { Button } from "@/components/ui/button";
import Link from "next/link";


// dynamic route mai likhna hi hota hai ye params walaa 
const SnippetDetailPage = async ({ params }: { params: { id: string } }) => {
  const id = Number(params.id);

  // prisma se snippet wala db manga raha 
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

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">{snippet.title}</h1>
        <div className="flex gap-2">
          <Link href={`/snippet/${snippet.id}/edit`}>
            <Button>Edit</Button>
          </Link>
          <Button variant="destructive">Delete</Button>
        </div>
      </div>

      <div className="rounded-lg bg-zinc-100 border p-4 overflow-auto">
        <pre className="whitespace-pre-wrap text-sm font-mono text-zinc-800">
          <code>{snippet.code}</code>
        </pre>
      </div>
    </div>
  );
};

export default SnippetDetailPage;
