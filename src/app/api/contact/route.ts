import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body ?? {}

    if (!name || !email || !phone || typeof message !== "string") {
      return NextResponse.json(
        { success: false, error: "Brak wymaganych danych formularza." },
        { status: 400 }
      )
    }

    const payload = {
      name,
      email,
      phone,
      message,
      submittedAt: new Date().toISOString(),
      source: "contact-form"
    }

    console.log("New contact form submission", payload)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form submission failed", error)
    return NextResponse.json(
      { success: false, error: "Nie udało się przetworzyć zgłoszenia." },
      { status: 500 }
    )
  }
}
