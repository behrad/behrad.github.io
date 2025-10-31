import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const courses = [
    {
      id: "system-design",
      title: "دوره سیستم دیزاین",
      subtitle: "طراحی سیستم‌های مقیاس‌پذیر",
      description: "در این دوره با جنبه‌های مختلف طراحی در سیستم‌های بزرگ نرم افزاری آشنا میشیم.",
      duration: "30 ساعت",
      format: "حضوری و آنلاین",
      colorClass: "card-blue-dark",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-right">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">بهراد زارعی</h1>
              <p className="text-xl md:text-2xl text-primary mb-6">مهندس نرم‌افزار و مربی</p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
                با بیش از ۲۲ سال تجربه در توسعه نرم‌افزار، رهبری تیم‌های مهندسی و راه‌اندازی استارتاپ، به عنوان مربی و
                مشاور به CTO ها و کسب‌وکارها کمک می‌کنم تا سیستم‌های نرم‌افزاری خود را مقیاس‌پذیر کنند و تیم‌های توسعه خود را
                رشد دهند.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <Button asChild size="lg">
                  <Link href="/courses">مشاهده دوره‌ها</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/about">درباره من</Link>
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden shadow-2xl ring-4 ring-primary/10">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/me.JPG-tqJ1OwFOE0UCE3o5iseDdWBwDAFhdF.jpeg"
                  alt="بهراد زارعی"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="bg-gradient-to-b from-blue-50/50 to-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">دوره‌های آموزشی</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Card key={course.id} className={`${course.colorClass} card-hover-lift`}>
                  <CardHeader>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <CardDescription className="text-base">{course.subtitle}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{course.description}</p>
                    <div className="flex flex-col gap-2 mb-4 text-sm">
                      <div className="flex items-center gap-2 bg-white/60 rounded-md px-3 py-2">
                        <span className="text-primary font-semibold">⏱</span>
                        <span className="text-muted-foreground">مدت:</span>
                        <span className="font-medium">{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/60 rounded-md px-3 py-2">
                        <span className="text-primary font-semibold">📍</span>
                        <span className="text-muted-foreground">نحوه برگزاری:</span>
                        <span className="font-medium">{course.format}</span>
                      </div>
                    </div>
                    <Button asChild className="w-full">
                      <Link href={`/courses/${course.id}`}>جزئیات دوره</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-br from-primary via-primary to-blue-900 text-primary-foreground rounded-xl p-8 md:p-12 text-center shadow-xl">
            <h2 className="text-3xl font-bold mb-4">آماده یادگیری هستید؟</h2>
            <p className="text-lg mb-6 opacity-90">
              با دوره‌های من مهارت‌های خود را در طراحی و توسعه سیستم‌های مقیاس‌پذیر ارتقا دهید
            </p>
            <Button asChild size="lg" variant="secondary" className="shadow-lg">
              <Link href="/courses">مشاهده تمام دوره‌ها</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
