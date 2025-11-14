export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  image?: string;
}

export interface ProblemSolution {
  id: string;
  problem: string;
  solution: string;
  icon: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Właścicielka małej firmy",
    company: "Johnson Marketing",
    content: "Współpraca z tym doradcą finansowym odmieniła finanse mojej firmy. Jasne wskazówki i planowanie strategiczne pomogły mi zaoszczędzić tysiące, jednocześnie rozwijając przychody.",
    avatar: "SJ",
    image: "sarah-johnson.jpg"
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Inżynier oprogramowania",
    company: "Tech Corp",
    content: "Spersonalizowana strategia inwestycyjna i planowanie emerytalne przekroczyły moje oczekiwania. W końcu czuję się pewnie co do swojej finansowej przyszłości.",
    avatar: "MC",
    image: "michael-chen.jpg"
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Dyrektor marketingu",
    company: "Creative Agency",
    content: "Same strategie optymalizacji podatkowej zwróciły się wielokrotnie w opłacie za usługę. Profesjonalne, przejrzyste i zorientowane na wyniki podejście.",
    avatar: "ER",
    image: "emily-rodriguez.jpg"
  },
  {
    id: "4",
    name: "David Thompson",
    role: "Inwestor w nieruchomości",
    company: "Thompson Properties",
    content: "Wybitne planowanie finansowe, które pomogło mi zdywersyfikować portfel i zminimalizować ryzyko. Edukacyjne podejście sprawiło, że skomplikowane koncepcje stały się łatwe do zrozumienia.",
    avatar: "DT",
    image: "david-thompson.jpg"
  }
];

export const problemSolutions: ProblemSolution[] = [
  {
    id: "1",
    problem: "Niejasne cele finansowe i rozproszone inwestycje",
    solution: "Kompleksowa ocena finansowa i spersonalizowana mapa drogowa z jasnymi kamieniami milowymi",
    icon: "Target"
  },
  {
    id: "2",
    problem: "Nadpłata podatków i brakujące odliczenia",
    solution: "Strategiczne planowanie podatkowe i optymalizacja w celu maksymalizacji oszczędności zgodnie z prawem",
    icon: "Calculator"
  },
  {
    id: "3",
    problem: "Brak planu emerytalnego lub niewystarczające oszczędności",
    solution: "Spersonalizowana strategia emerytalna z automatycznymi oszczędnościami i planami inwestycyjnymi",
    icon: "PiggyBank"
  },
  {
    id: "4",
    problem: "Wysokooprocentowane długi wpływające na przepływ gotówki",
    solution: "Konsolidacja długów i strategie spłaty w celu poprawy zdrowia finansowego",
    icon: "CreditCard"
  }
];

export const values = [
  {
    title: "Etyka",
    description: "Zawsze działam w Twoim najlepszym interesie z przejrzystością i uczciwością",
    icon: "Shield"
  },
  {
    title: "Prostota",
    description: "Sprawiam, że skomplikowane koncepcje finansowe stają się łatwe do zrozumienia i wdrożenia",
    icon: "Lightbulb"
  },
  {
    title: "Przejrzystość",
    description: "Jasna komunikacja bez ukrytych opłat lub niespodziewanych kosztów",
    icon: "Eye"
  },
  {
    title: "Edukacja",
    description: "Umożliwiam Ci zdobycie wiedzy do podejmowania świadomych decyzji finansowych",
    icon: "BookOpen"
  }
];
