import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const courses = [
    {
      id: "system-design-1",
      title: "سیستم دیزاین ۱",
      description: "مفاهیم پایه طراحی سیستم‌های مقیاس‌پذیر",
      image: "/system-design-1.jpg",
      duration: "۱۰ ساعت",
      price: "۲,۵۰۰,۰۰۰ تومان",
      highlights: ["الزامات غیرکارکردی", "معماری کلی", "تریدآف‌های طراحی"],
    },
    {
      id: "system-design-2",
      title: "سیستم دیزاین ۲",
      description: "پایداری و پردازش ناهمزمان",
      image: "/system-design-2.jpg",
      duration: "۱۰ ساعت",
      price: "۲,۵۰۰,۰۰۰ تومان",
      highlights: ["الگوهای Resiliency", "Event-Driven", "Message Queues"],
    },
    {
      id: "system-design-3",
      title: "سیستم دیزاین ۳",
      description: "مقیاس‌پذیری دیتابیس و تخمین ظرفیت",
      image: "/system-design-3.jpg",
      duration: "۱۰ ساعت",
      price: "۲,۵۰۰,۰۰۰ تومان",
      highlights: ["Sharding & Replication", "NoSQL vs SQL", "تخمین منابع"],
    },
    {
      id: "art-of-coding",
      title: "هنر کدنویسی",
      description: "پیاده‌سازی با ذهنیت یک معمار",
      image: "/art-of-coding.jpg",
      duration: "۱۵ ساعت",
      price: "۳,۵۰۰,۰۰۰ تومان",
      highlights: ["DDD & Patterns", "Modularity", "Clean Architecture"],
    },
    {
      id: "backend-nodejs",
      title: "برنامه‌نویسی بکند با Node.js",
      description: "ساخت API های مقیاس‌پذیر با Node.js",
      image: "/backend-nodejs.jpg",
      duration: "۲۰ ساعت",
      price: "۴,۰۰۰,۰۰۰ تومان",
      highlights: ["Express & Fastify", "Database Integration", "Authentication"],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary via-primary to-blue-900 text-primary-foreground py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">دوره‌های آموزشی</h1>
            <p className="text-lg md:text-xl opacity-90">
              مهارت‌های خود را در طراحی و توسعه سیستم‌های مقیاس‌پذیر ارتقا دهید
            </p>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="card-hover-lift flex flex-col overflow-hidden">
                {/* Course Image */}
                <div className="relative h-48 w-full bg-gradient-to-br from-blue-100 to-blue-50">
                  <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{course.description}</p>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col pt-0">
                  {/* Highlights with styled bullets */}
                  <ul className="space-y-2 mb-4 flex-1">
                    {course.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1 text-xs">●</span>
                        <span className="text-sm text-foreground/80">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Course Info */}
                  <div className="flex items-center justify-between text-sm mb-4 pt-3 border-t">
                    <span className="text-muted-foreground">{course.duration}</span>
                    <span className="font-bold text-primary">{course.price}</span>
                  </div>

                  <Button asChild className="w-full">
                    <Link href={`/courses/${course.id}`}>مشاهده جزئیات</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-b from-blue-50/50 to-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">سوال یا نیاز به مشاوره دارید؟</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6">
              برای اطلاعات بیشتر درباره دوره‌ها با من تماس بگیرید
            </p>
            <Button asChild size="lg">
              <Link href="mailto:behradz@gmail.com">تماس با من</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
