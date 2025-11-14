import Image from 'next/image'
import Link from 'next/link'
import { ContactForm } from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { testimonials, problemSolutions, values } from "@/data"
import {
  Target,
  Calculator,
  PiggyBank,
  CreditCard,
  Shield,
  Lightbulb,
  Eye,
  BookOpen,
  Star,
  CheckCircle,
  ArrowRight
} from "lucide-react"

const IconMap = {
  Target,
  Calculator,
  PiggyBank,
  CreditCard,
  Shield,
  Lightbulb,
  Eye,
  BookOpen,
  Star,
  CheckCircle,
  ArrowRight
}

export default function Home() {
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
            <a
              href="#about"
              className="relative text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100"
            >
              o mnie
            </a>
            <a
              href="#services"
              className="relative text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100"
            >
              Usługi
            </a>
            <a
              href="#testimonials"
              className="relative text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100"
            >
              Opinie
            </a>
            <a
              href="#contact"
              className="relative text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100"
            >
              Kontakt
            </a>
            <Button asChild className="shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
              <a href="/book" className="transition-transform duration-300">Umów spotkanie</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                  Pomagam pieniądzom pracować spokojnie,{' '}
                  <span className="text-primary">Bez ryzyka, bez stresu, z pełnym zrozumieniem.</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Profesjonalne planowanie finansowe i doradztwo inwestycyjne, które pomogą Ci osiągnąć cele z pewnością i jasnością.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl" asChild>
                  <a href="/book" className="flex items-center gap-2 transition-transform duration-300">
                    Umów bezpłatną konsultację
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 border-primary/30 text-primary transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary/10"
                >
                  Dowiedz się więcej
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/40">
                <div className="text-center rounded-2xl bg-white/70 p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Lat doświadczenia</div>
                </div>
                <div className="text-center rounded-2xl bg-white/70 p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Zadowolonych klientów</div>
                </div>
                <div className="text-center rounded-2xl bg-white/70 p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="text-3xl font-bold text-primary">$50M+</div>
                  <div className="text-sm text-muted-foreground">Zarządzanych aktywów</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary/40 blur-3xl opacity-50" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-3xl bg-white/80 p-6 shadow-[0_25px_60px_-20px_rgba(59,130,246,0.45)] backdrop-blur transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-30px_rgba(37,99,235,0.6)]">
                <div className="relative h-[420px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200">
                  <Image
                    src="/images/headshot-hero.jpg"
                    alt="Profesjonalny portret"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="mt-6 space-y-1 text-center">
                  <p className="text-lg font-semibold">Profesjonalny doradca finansowy</p>
                  <p className="text-sm text-muted-foreground">Certyfikowany planista finansowy z ponad 10-letnim doświadczeniem</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">O mnie</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Jak mogę pomóc?
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Twój zaufany partner finansowy</h3>
                <p className="text-muted-foreground">
                  W branży finansowej jestem od 15 lat, zaczynałem w BZ WBK, prowadziłem firmę w
Suchym Lesie, doradzałem w inwestycjach w instrumentach tradycyjnych i zaawansowanych rozwiązaniach.

                </p>
                <p className="text-muted-foreground">
                  Dziś pomagam klientom indywidualnym, wspólnotom i
samorządom budować stabilność finansową.

                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => {
                  const IconComponent = IconMap[value.icon as keyof typeof IconMap]
                  return (
                    <div key={index} className="flex items-start space-x-3 rounded-xl bg-gray-50 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
                      <IconComponent className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">{value.title}</h4>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-indigo-200/40 blur-3xl opacity-60" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50/80 to-indigo-100/70 p-6 shadow-[0_20px_50px_-25px_rgba(79,70,229,0.45)] backdrop-blur transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_36px_70px_-30px_rgba(67,56,202,0.55)]">
                <div className="relative h-[360px] w-full overflow-hidden rounded-2xl bg-white">
                  <Image
                    src="/images/headshot-about.jpg"
                    alt="Zdjęcie doradcy - sekcja o mnie"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="mt-6 space-y-1 text-center">
                  <p className="text-lg font-medium">Twój partner finansowy</p>
                  <p className="text-sm text-muted-foreground">Poświęcony Twojemu finansowemu sukcesowi i budowaniu długoterminowego majątku</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How I Help Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Jak pomagam</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Kompleksowe rozwiązania, które rozwiązują Twoje finansowe wyzwania i pomagają osiągnąć cele.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {problemSolutions.map((item, index) => {
              const IconComponent = IconMap[item.icon as keyof typeof IconMap]
              return (
                <Card
                  key={index}
                  className="border-0 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Wyzwanie: {item.problem}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      <strong>Rozwiązanie:</strong> {item.solution}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Co mówią klienci</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Prawdziwe historie klientów, którzy odmienili swoją finansową przyszłość z moim wsparciem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="border-0 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Zacznij już dziś</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Gotowy przejąć kontrolę nad swoją finansową przyszłością? Omówmy Twoje cele i stwórzmy spersonalizowany plan.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <CardHeader>
                <CardTitle>Wyślij wiadomość</CardTitle>
                <CardDescription>
                  Wypełnij formularz poniżej, a odezwę się do Ciebie w ciągu 24 godzin.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ContactForm />
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-0 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <CardHeader>
                  <CardTitle>Informacje kontaktowe</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Target className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Telefon</div>
                      <div className="text-muted-foreground">(555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Target className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-muted-foreground">hello@financialadvisor.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Target className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Godziny pracy</div>
                      <div className="text-muted-foreground">Pon-Pt: 9:00-18:00</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <Button size="lg" className="w-full shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl" asChild>
                  <a href="/book" className="flex items-center justify-center gap-2">
                    Umów bezpłatną konsultację
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="font-bold text-xl mb-4">Przemek Finanse</div>
              <p className="text-gray-400 mb-4">
                Profesjonalne planowanie finansowe i doradztwo inwestycyjne.
                Pomaganie w osiąganiu finansowych celów poprzez spersonalizowane strategie.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <Target className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <Target className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <Target className="h-5 w-5" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Usługi</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Planowanie finansowe</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Doradztwo inwestycyjne</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Optymalizacja podatkowa</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Planowanie emerytalne</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Kontakt</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/book" className="hover:text-white transition-colors">Umów konsultację</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Formularz kontaktowy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Polityka prywatności</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Regulamin</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Przemek Finanse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
