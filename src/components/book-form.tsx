'use client'

import { FormEvent, useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from "lucide-react"

interface SubmissionState {
  status: "idle" | "loading" | "success" | "error"
  message?: string
}

export function BookForm() {
  const [submission, setSubmission] = useState<SubmissionState>({ status: "idle" })

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    const payload = {
      firstName: formData.get("firstName")?.toString().trim() ?? "",
      lastName: formData.get("lastName")?.toString().trim() ?? "",
      email: formData.get("email")?.toString().trim() ?? "",
      phone: formData.get("phone")?.toString().trim() ?? "",
      consultationType: formData.get("consultationType")?.toString().trim() ?? "",
      preferredTime: formData.get("preferredTime")?.toString().trim() ?? "",
      message: formData.get("message")?.toString().trim() ?? ""
    }

    setSubmission({ status: "loading" })

    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        const data = await response.json().catch(() => null)
        const errorMessage = data?.error ?? "Wystąpił błąd podczas wysyłania formularza."
        setSubmission({ status: "error", message: errorMessage })
        return
      }

      setSubmission({ status: "success", message: "Dziękuję! Skontaktuję się z Tobą w ciągu 24 godzin." })
      form.reset()
    } catch (error) {
      console.error("Failed to submit booking form", error)
      setSubmission({ status: "error", message: "Nie udało się wysłać zgłoszenia. Spróbuj ponownie później." })
    }
  }

  const isLoading = submission.status === "loading"

  return (
    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="firstName" className="text-sm font-medium">Imię</label>
          <Input
            id="firstName"
            name="firstName"
            placeholder="Jan"
            required
            disabled={isLoading}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="lastName" className="text-sm font-medium">Nazwisko</label>
          <Input
            id="lastName"
            name="lastName"
            placeholder="Kowalski"
            required
            disabled={isLoading}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">Email</label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="jan.kowalski@przyklad.com"
          required
          disabled={isLoading}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium">Numer telefonu</label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="(555) 123-4567"
          required
          disabled={isLoading}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="consultationType" className="text-sm font-medium">Rodzaj konsultacji</label>
        <select
          id="consultationType"
          name="consultationType"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          required
          disabled={isLoading}
          defaultValue=""
        >
          <option value="" disabled>Wybierz temat</option>
          <option>Planowanie finansowe</option>
          <option>Doradztwo inwestycyjne</option>
          <option>Planowanie emerytalne</option>
          <option>Optymalizacja podatkowa</option>
          <option>Konsultacja ogólna</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="preferredTime" className="text-sm font-medium">Preferowany termin spotkania</label>
        <select
          id="preferredTime"
          name="preferredTime"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          required
          disabled={isLoading}
          defaultValue=""
        >
          <option value="" disabled>Wybierz termin</option>
          <option>Rano (9:00 - 12:00)</option>
          <option>Popołudnie (12:00 - 17:00)</option>
          <option>Wieczór (17:00 - 20:00)</option>
          <option>Weekend</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">Dodatkowe informacje</label>
        <Textarea
          id="message"
          name="message"
          placeholder="Opisz swoje cele finansowe, obecną sytuację lub zadaj pytania..."
          rows={4}
          required
          disabled={isLoading}
        />
      </div>

      <div className="space-y-3">
        <Button className="w-full" size="lg" type="submit" disabled={isLoading}>
          {isLoading ? "Wysyłanie..." : "Umów konsultację"}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        {submission.status === "success" && (
          <p className="text-sm text-green-600 text-center">{submission.message}</p>
        )}
        {submission.status === "error" && (
          <p className="text-sm text-red-600 text-center">{submission.message}</p>
        )}
      </div>
    </form>
  )
}
