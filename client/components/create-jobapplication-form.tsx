"use client"
import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { useForm } from 'react-hook-form'
import { cn } from '@/lib/utils'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Form } from './ui/form'
import { Input } from '@/components/ui/input'
import { Application } from '@/types'
import { ComboboxCompany } from './combobox-company'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

type JobMode = "full-remote" | "ibrido" | "in-presenza"
type Requirements = String[] | []
type FormData = {
  mode: JobMode
  requirements: Requirements
} & Partial<Application>


function CreateJobApplicationForm() {

  const form = useForm<FormData>({
    defaultValues: {
      mode: "full-remote",
      requirements: [],
      company: {
        name: '',
        location: '',
        website: '',
        industry: '',
        size: '',
        logo: '',
        createdAt: '',
      },
      position: '',
      description: '',
      status: '',
      notes: '',
      appliedAt: '',
      source: '',
      cvFile: '',
      coverLetterFile: '',
      userId: '',
      createdAt: '',
      salary: '',
      hrContacts: []
    }
  })


  const [activeStep, setActiveStep] = useState(1)

  const steps = [
    {
      index: 1,
      title: "Info Base",
      description: "Azienda e posizione",
    },
    {
      index: 2,
      title: "Dettagli Job",
      description: "Descrizione e requisiti",
    },
    {
      index: 3,
      title: "Candidatura",
      description: "Come hai applicato",
    },
    {
      index: 4,
      title: "Note Finali",
      description: "Note e priorità",
    }
  ]

  return (
    <div className='flex flex-col gap-4'>
      <Card>
        <div className=' flex justify-between px-10 overflow-x-auto'>
          {
            steps.map((step) => (
              <div key={step.index} className='flex items-center gap-4 p-2 min-w-[200px]'>
                <div className={cn("w-10 h-10 rounded-full  flex items-center justify-center font-bold", step.index === activeStep ? "bg-gradient-to-br from-emerald-500 to-teal-600 text-white" : "bgtransparent border border-slate-300 text-slate-600")}>
                  {step.index}
                </div>
                <div>
                  <h2 className='text-lg font-bold'>{step.title}</h2>
                  <p className='text-sm text-slate-500'>{step.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </Card>
      {/**FORM 1 */}
      <Card>
        <CardHeader>
          <CardTitle>
            <h1 className=' text-2xl font-bold'>Informazioni Base</h1>
          </CardTitle>
        </CardHeader>
        <CardContent>


          <Form {...form}>
            <form onSubmit={form.handleSubmit((values) => { console.log(values) })} className='space-y-4'>
              <div className=' grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div className='col-span-1 flex flex-col gap-6'>

                  <FormField
                    control={form.control}
                    name="company.name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome Azienda *</FormLabel>
                        <FormControl>
                          <Input placeholder="es. Google" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="salary"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Stipendio *</FormLabel>
                        <FormControl>
                          <Input placeholder="es. 3000/34k/20k-25k" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="salary"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Stipendio *</FormLabel>
                        <FormControl>
                          <ComboboxCompany />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className='col-span-1 flex flex-col gap-4'>
                  <FormField
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Posizione *</FormLabel>
                        <FormControl>
                          <Input placeholder="es. Frontend Developer" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="mode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Modalità di lavoro *</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Modalità di lavoro  " />
                            </SelectTrigger>
                            <SelectContent >
                              <SelectItem value="full-remote">Full remote</SelectItem>
                              <SelectItem value="ibrido">Ibrido</SelectItem>
                              <SelectItem value="in-presenza">In presenza</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </form>
          </Form>


        </CardContent>
      </Card>
    </div>
  )
}

export default CreateJobApplicationForm