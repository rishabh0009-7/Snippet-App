// app/new/page.tsx

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { prisma } from "@/lib/db"; // Adjust this path as needed
import { log } from "console";
import { redirect } from "next/navigation";
import React from "react";

// ✅ Server Action
async function createNew(formData: FormData) {
  "use server";

  const title = formData.get("title") as string;
  const code = formData.get("code") as string;

  if (!title || !code) {
    throw new Error("Title and Code are required");
  }

  await prisma.snippet.create({
    data: {
      title,
      code,
    },
  });
  console.log("created snippet ", New);
  
  redirect("/");
}



// ✅ Component with proper <form>
const New = () => {
  return (
    <form action={createNew} className="space-y-4 max-w-md mx-auto mt-8">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input type="text" id="title" name="title" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="code">Code</Label>
        <Textarea id="code" name="code" />
      </div>

      <Button type="submit" className="my-4">
        New
      </Button>
    </form>
  );
};

export default New;
