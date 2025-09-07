"use client"
import axios from 'axios';
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react';
import { MapPin, DollarSign, Calendar1, SquareArrowOutUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button';

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
    notes:string
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
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 lg:grid-cols-3'>
                    {/** LEFT SIDE */}
                    <div className='col-span-1 md:col-span-2 flex flex-col gap-4'>
                        <div className='p-6 border rounded-2xl shadow'>
                            {/** HEADER CARD */}
                            <div>
                                <h1 className='text-xl font-bold '>{application.company.name}</h1>
                                <p>{application.position}</p>
                            </div>


                            {/** BODY */}
                            <div className=' grid grid-cols-1 md:grid-cols-2 gap-2 py-4'>
                                <div className='px-2 py-3 bg-gray-100 rounded-2xl flex gap-2 items-center '>
                                    <MapPin color='green' size={16} />
                                    {application.company.location}
                                </div>
                                <div className='px-2 py-3 bg-gray-100 rounded-2xl flex gap-2 items-center'>
                                    <DollarSign color='green' size={16} />
                                    {application.salary}
                                </div>
                                <div className='px-2 py-3 bg-gray-100 rounded-2xl flex gap-2 items-center'>
                                    <Calendar1 color='green' size={16} />
                                    {new Date(application.appliedAt).toLocaleDateString()}
                                </div>
                            </div>
                        </div>
                        <div className='p-6 border col-span-1 md:col-span-2 rounded-2xl shadow'>
                            {/** HEADER CARD */}
                            <div>
                                <h1 className='text-xl font-bold'>Descrizione posizione</h1>
                                <p className='pt-6'>{application.description}</p>
                            </div>
                        </div>
                    </div>
                    {/** RIGHT SIDE */}
                    <div className=' col-span-1 '>
                        <div className=' flex flex-col gap-4'>
                            <div className=' border shadow rounded-2xl p-6'>
                                <h1 className='text-xl font-bold'>Azioni rapide</h1>

                                <div className='flex flex-col gap-2 pt-6'>
                                    <Button className='px-2 py-4' variant='outline'>
                                        <Calendar1 />
                                        Programma colloquio
                                    </Button>
                                    <Button className='px-2 py-4' variant='outline'>
                                        <SquareArrowOutUpRight />
                                        Vedi annuncio
                                    </Button>
                                </div>
                            </div>
                            <div className=' border shadow rounded-2xl p-6'>
                                <h1 className='text-xl font-bold'>
                                    Note
                                </h1>
                                <div className='flex flex-col gap-2 pt-6'>
                                 {application.notes}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}


        </div>
    )
}

export default JobApplicationSinglePage