"use client"
import React, { useState } from 'react'
import {Editor} from '@monaco-editor/react'
import type { Snippet } from "@prisma/client"
import { Button } from './ui/button'

const EditSnippetForm = ({snippet}:{snippet :Snippet}) => {
    const [Code , setCode ] = useState(snippet.code)
  return (
    <div className='flex flex-col gap-4'>
        <form className='flex items-center justify-between'> 
            <h1 className='font-bold text-xl '> Your code editor</h1>
            <Button type='submit'>Save</Button>
        </form>

        <Editor
        
        theme='vs-dark'
        height = "40vh"
        defaultLanguage = "javascript"
        defaultValue={Code}
        />
    </div>
  )
}

export default EditSnippetForm