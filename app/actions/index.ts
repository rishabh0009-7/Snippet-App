"use server";

import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";

export const saveSnippet = async (id: number, code: string) => {
  await prisma.snippet.update({
    where: { id },
    data: { code },
  });

  redirect(`/snippet/${id}`);
};


export const deleteActionSnippet = async(id:number)=>{
    await prisma.snippet.delete({
        where  :{id}
    })
    redirect('/')
}