import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      firstName,
      lastName,
      email,
      phone,
      consultationType,
      preferredTime,
      message
    } = body ?? {}

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !consultationType ||
      !preferredTime ||
      typeof message !== "string"
    ) {
      return NextResponse.json(
        { success: false, error: "Brak wymaganych danych formularza rezerwacji." },
        { status: 400 }
      )
    }

    const payload = {
      firstName,
      lastName,
      email,
      phone,
      consultationType,
      preferredTime,
      message,
      submittedAt: new Date().toISOString(),
      source: "book-page"
    }

    console.log("New booking request", payload)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Booking form submission failed", error)
    return NextResponse.json(
      { success: false, error: "Nie udało się przetworzyć zgłoszenia." },
      { status: 500 }
    )
  }
}
