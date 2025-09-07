"use client"
import React, { useState } from 'react'
import { Card } from './ui/card'
import { useForm } from 'react-hook-form'
import { title } from 'process'
import { cn } from '@/lib/utils'

function CreateJobApplicationForm() {

  const form = useForm()

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
        <div className=' flex flex-row justify-between px-10'>
          {
            steps.map((step) => (
              <div key={step.index} className='flex items-center gap-4 p-2'>
                <div className={cn("w-10 h-10 rounded-full  flex items-center justify-center  font-bold",step.index === activeStep ? "bg-gradient-to-br from-emerald-500 to-teal-600 text-white" : "bgtransparent border border-slate-300 text-slate-600")}>
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
      <Card>
      </Card>
    </div>
  )
}

export default CreateJobApplicationForm