"use client"
import React, { useEffect } from 'react'
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Plus,
  Search,
  Filter,
  Building,
  MapPin,
  Calendar,
  Eye,
  Edit,
  Trash2,
  TimerIcon as Timeline,
} from "lucide-react"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link'


export type Company = {
  id: string;
  name: string;
  location: string;
  website: string;
  industry: string;
  size: string;
  logo: string;
  createdAt: string; // ISO date string
};

export type Step = {
  id: string;
  jobId: string;
  title: string;
  date: string; // ISO date string
  status: string;
  notes: string;
  location: string;
  interviewer: string;
  feedback: string;
  reminderAt: string; // ISO date string
  hrContactId: string;
};

export type HrContact = {
  // Definisci i campi reali se disponibili, altrimenti lascia any
  [key: string]: any;
};

export type Application = {
  id: string;
  companyId: string;
  position: string;
  description: string;
  status: string;
  notes: string;
  appliedAt: string; // ISO date string
  source: string;
  cvFile: string;
  coverLetterFile: string;
  userId: string;
  createdAt: string; // ISO date string
  company: Company;
  salary: string;
  hrContacts: HrContact[];
  steps: Step[];
};
function JobApplication() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [applications, setApplications] = useState<Application[] | []>([])
  const [loading, setLoading] = useState(false)
  const getApplications = async () => {
    setLoading(true)
    const { data } = await axios('http://localhost:5001/api/v1/jobApplication', {
      withCredentials: true
    });
    setApplications(data);
    setLoading(false)
  }

  const router = useRouter()


  useEffect(() => {
    getApplications();
  }, [])

  const filteredApplications = applications.filter((app) => {
    /*     const matchesSearch =
          app.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
          app.position.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesStatus = statusFilter === "all" || app.status === statusFilter
        return matchesSearch && matchesStatus
        */
    return true
  })


  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
            Candidature
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">Gestisci tutte le tue candidature di lavoro</p>
        </div>
        <Link href="/job-applications/create">
          <Button
            //onClick={() => onNavigate("new-application")}
            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Plus className="h-4 w-4 mr-2" />
            Nuova Candidatura
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <Card className="border-0 shadow-lg bg-white dark:bg-slate-800">
        <CardContent className="p-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input
                placeholder="Cerca per azienda o posizione..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-slate-200 dark:border-slate-700 focus:border-emerald-400 focus:ring-emerald-400"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48 border-slate-200 dark:border-slate-700">
                <Filter className="h-4 w-4 mr-2 text-slate-500" />
                <SelectValue placeholder="Filtra per stato" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tutti gli stati</SelectItem>
                <SelectItem value="Candidatura Inviata">Candidatura Inviata</SelectItem>
                <SelectItem value="HR Screening">HR Screening</SelectItem>
                <SelectItem value="Colloquio Tecnico">Colloquio Tecnico</SelectItem>
                <SelectItem value="Colloquio Finale">Colloquio Finale</SelectItem>
                <SelectItem value="Offerta">Offerta</SelectItem>
                <SelectItem value="Rifiutata">Rifiutata</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Applications Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredApplications.map((app) => (
          <Card
            key={String(app.id)}
            className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform bg-white dark:bg-slate-800 group"
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center font-bold text-slate-700 dark:text-slate-300">
                    {"L"}
                  </div>
                  <div className="space-y-1">
                    <CardTitle className="text-lg text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {app.company.name}
                    </CardTitle>
                    <CardDescription className="font-medium text-slate-700 dark:text-slate-300">
                      {app.company.location}
                    </CardDescription>
                  </div>
                </div>
                <Badge className={`text-white border-0 shadow-sm`}>{app.status}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">{app.notes}</p>

              {/* Progress Bar */}
              {/*    <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">Progresso</span>
                  <span className="text-slate-900 dark:text-slate-100 font-medium">{app.progress}%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-emerald-500 to-teal-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${app.progress}%` }}
                  ></div>
                </div>
              </div> */}

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                  <MapPin className="h-4 w-4" />
                  {app.company.location}
                </div>
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                  <Building className="h-4 w-4" />
                  {app.salary && app.salary.length > 0 ? app.salary : "-"}
                </div>
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                  <Calendar className="h-4 w-4" />
                  Candidatura: {new Date(app.appliedAt).toLocaleDateString("it-IT")}
                </div>
              </div>

              <div className="flex gap-2 pt-2">

                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-slate-200 dark:border-slate-700 hover:bg-emerald-50 hover:border-emerald-300 dark:hover:bg-emerald-900/20 bg-transparent"
                  onClick={() => router.push(`/job-applications/${app.id}`)}
                >
                  <Eye className="h-4 w-4 mr-1" />
                  Dettagli
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-200 dark:border-slate-700 hover:bg-amber-50 hover:border-amber-300 dark:hover:bg-amber-900/20 bg-transparent"
                // onClick={() => onNavigate("application-timeline", app)}
                >
                  <Timeline className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 bg-transparent"
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-red-200 text-red-600 hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/20 bg-transparent"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredApplications.length === 0 && (
        <Card className="border-0 shadow-lg bg-white dark:bg-slate-800">
          <CardContent className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center">
              <Search className="h-8 w-8 text-slate-400" />
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              Nessuna candidatura trovata con i filtri selezionati.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default JobApplication
