import React from 'react'
import { useForm } from 'react-hook-form'
import {
    FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Form 
} from '@/components/ui/form'


function CreateCompanyForm() {

    const form = useForm()

  return (
    <div>
        <Form {...form}>
            <form onSubmit={form.handleSubmit((data) => console.log(data))} className="space-y-8">
            
            </form>
        </Form>
    </div>
  )
}

export default CreateCompanyForm