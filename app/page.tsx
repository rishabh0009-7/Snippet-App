// app/page.tsx or app/home/page.tsx
import React from "react";
import { prisma } from "@/lib/db";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = async () => {
  const snippets = await prisma.snippet.findMany();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="font-bold text-4xl mb-6 text-foreground">Home</h1>

      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold text-foreground">Snippets</h2>
        <Link href="/snippet/new">
          <Button>Add Snippet</Button>
        </Link>
      </div>

      <div className="space-y-4">
        {snippets.length === 0 ? (
          <p className="text-muted-foreground text-center">
            No snippets found. Create one now!
          </p>
        ) : (
          snippets.map((snippet) => (
            <div
              key={snippet.id}
              className="flex items-center justify-between bg-muted/30 border border-border p-4 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-medium text-foreground">
                {snippet.title}
              </h3>
              <Link href={`/snippet/${snippet.id}`}>
  <Button variant="link">View</Button>
</Link>

            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
