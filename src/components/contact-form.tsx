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

export function ContactForm() {
  const [submission, setSubmission] = useState<SubmissionState>({ status: "idle" })

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    const payload = {
      name: formData.get("name")?.toString().trim() ?? "",
      email: formData.get("email")?.toString().trim() ?? "",
      phone: formData.get("phone")?.toString().trim() ?? "",
      message: formData.get("message")?.toString().trim() ?? ""
    }

    setSubmission({ status: "loading" })

    try {
      const response = await fetch("/api/contact", {
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
      console.error("Failed to submit contact form", error)
      setSubmission({ status: "error", message: "Nie udało się wysłać zgłoszenia. Spróbuj ponownie później." })
    }
  }

  const isLoading = submission.status === "loading"

  return (
    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">Imię i nazwisko</label>
          <Input
            id="name"
            name="name"
            placeholder="Twoje pełne imię i nazwisko"
            required
            disabled={isLoading}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="twoj.email@przyklad.com"
            required
            disabled={isLoading}
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium">Telefon</label>
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
        <label htmlFor="message" className="text-sm font-medium">Wiadomość</label>
        <Textarea
          id="message"
          name="message"
          placeholder="Opisz swoje cele finansowe i zadaj pytania..."
          rows={4}
          required
          disabled={isLoading}
        />
      </div>
      <div className="space-y-3">
        <Button className="w-full" type="submit" disabled={isLoading}>
          {isLoading ? "Wysyłanie..." : "Wyślij wiadomość"}
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
