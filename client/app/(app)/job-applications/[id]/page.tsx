"use client"
import axios from 'axios';
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react';
import { MapPin, DollarSign, Calendar1, SquareArrowOutUpRight, Paperclip, NotebookText } from 'lucide-react'
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type Company = {
    createdAt: Date
    id: string
    industry: string
    location: string
    logo: string
    name: string
    size: string
    website: string
}

type JobApplication = {
    company: Company,
    salary: string,
    description: string,
    appliedAt: Date,
    position: string,
    notes: string
}

function JobApplicationSinglePage() {

    const [application, setApplication] = useState<JobApplication | null>(null);

    const fetchApplication = async () => {
        const { data } = await axios('http://localhost:5001/api/v1/jobApplication', {
            withCredentials: true
        });
        console.log(data[0]);
        setApplication(data[0]);
    }

    const { id } = useParams();

    useEffect(() => {
        fetchApplication();
    }, [id])


    return (
        <div>
            {application ? (
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div className='col-span-2 flex flex-col gap-4'>
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    <h1 className='text-2xl font-bold'>
                                        {application.company.name}
                                    </h1>
                                </CardTitle>
                                <CardDescription>
                                    <p>{application.position}</p>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className=' py-2'>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                    <div className='flex items-center bg-gray-50 px-2 py-4 rounded-md '>
                                        <MapPin className='mr-2' color='green' />
                                        <p>{application.company.location}</p>
                                    </div>
                                    <div className='flex items-center bg-gray-50 px-2 py-4 rounded-md '>
                                        <DollarSign className='mr-2' color='green' />
                                        <p>{application.salary}</p>
                                    </div>
                                    <div className='flex items-center bg-gray-50 px-2 py-4 rounded-md'>
                                        <Calendar1 className='mr-2' color='green' />
                                        <p>{new Date(application.appliedAt).toLocaleDateString()}</p>
                                    </div>
                                </div>
                            </CardContent>

                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className='flex items-center  gap-3'>
                                    <div className={" rounded-xl p-1 w-10 h-10  bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center"}>
                                        <NotebookText className={"text-white"} size={18} />
                                    </div>
                                    <h1 className='text-2xl font-bold'>Descrizione posizione</h1>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>{application.description}</p>
                            </CardContent>
                        </Card>
                    </div>
                    <div className='col-span-1 flex flex-col gap-4'>
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    <h1 className='text-2xl font-bold'>Azioni rapide</h1>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Button variant='outline' className='w-full mb-2' asChild>
                                    <a href={application.company.website} target='_blank'>
                                        <SquareArrowOutUpRight className='mr-2' />
                                        Visita sito azienda
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    <h1 className='text-2xl font-bold'>Note</h1>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>{application.notes}</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}


        </div>
    )
}

export default JobApplicationSinglePage