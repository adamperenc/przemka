import Link from "next/link"
import { BookForm } from "@/components/book-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, CheckCircle, ArrowRight } from "lucide-react"

export default function BookPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-bold text-xl text-primary transition-colors duration-300 hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Przemek Finanse
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <a href="/" className="relative text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100">
              Home
            </a>
            <a href="/#about" className="relative text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100">
              o mnie
            </a>
            <a href="/#services" className="relative text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100">
              Usługi
            </a>
            <a href="/#testimonials" className="relative text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100">
              Opinie
            </a>
            <a href="/#contact" className="relative text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100">
              Kontakt
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Umów bezpłatną konsultację
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Omówmy Twoje cele finansowe i stwórzmy spersonalizowany plan, który pomoże Ci je osiągnąć.
            Ta 30-minutowa konsultacja jest całkowicie bezpłatna i bez zobowiązań.
          </p>
          <div className="flex justify-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-primary" />
              <span>30 minut</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Bezpłatna konsultacja</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>Elastyczne terminy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto max-w-2xl">
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Umów konsultację</CardTitle>
              <CardDescription>
                Wypełnij formularz poniżej, a skontaktuję się z Tobą w ciągu 24 godzin, aby umówić dogodny termin.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <BookForm />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Czego się spodziewać</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Twoja bezpłatna konsultacja jest zaprojektowana, aby zapewnić natychmiastową wartość i pomóc zrozumieć dostępne opcje.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Ocena finansowa</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Przejrzymy Twoją obecną sytuację finansową i zidentyfikujemy kluczowe obszary do poprawy.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Ustalanie celów</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Zdefiniujemy jasne, osiągalne cele finansowe i stworzymy roadmapę, aby je osiągnąć.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Plan działania</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Otrzymasz konkretne rekomendacje i następne kroki dostosowane do Twojej sytuacji.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4 mx-auto text-center">
          <div className="font-bold text-xl mb-4">Przemek Finanse</div>
          <p className="text-gray-400 mb-4">
            Professional financial planning and investment advisory services.
          </p>
          <div className="border-t border-gray-800 pt-8 text-gray-400">
            <p>&copy; 2024 Przemek Finanse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
