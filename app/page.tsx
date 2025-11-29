import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { coursesData } from "@/data/courses"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "دوره‌های آموزش برنامه نویسی، هنر کد نویسی و طراحی سیستم | بهراد زاری",
  description: "آموزش برنامه نویسی حرفه‌ای، هنر کد نویسی، کد نویسی تمیز (Clean Code)، طراحی سیستم، سیستم دیزاین، تفکر سیستمی و معماری نرم افزار. دوره‌های عملی با پروژه‌های واقعی.",
  keywords: [
    "آموزش برنامه نویسی",
    "دوره برنامه نویسی",
    "هنر کد نویسی",
    "کد نویسی تمیز",
    "clean code",
    "طراحی سیستم",
    "سیستم دیزاین",
    "system design",
    "تفکر سیستمی",
    "معماری نرم افزار",
    "software architecture",
    "آموزش Node.js",
    "میکروسرویس",
    "microservices",
    "مقیاس پذیری",
    "scalability",
  ],
  openGraph: {
    title: "دوره‌های آموزش برنامه نویسی و طراحی سیستم",
    description: "آموزش برنامه نویسی، هنر کد نویسی، طراحی سیستم و سیستم دیزاین با بهراد زاری",
    type: "website",
  },
}

export default function HomePage() {
  const courses = [
    {
      id: "system-design-1",
      title: coursesData["system-design-1"].title,
      description: "ادبیات طراحی سیستم رو یاد میگیریم و یه پروژه واقعی با استاندارد‌های کلود نیتیو و طراحی سیستم روی استک خودتون پیاده سازی میکنیم",
      image: coursesData["system-design-1"].image,
      duration: coursesData["system-design-1"].duration,
      price: coursesData["system-design-1"].price + " تومان",
      highlights: ["مفاهیم پایه", "ماژولار مونولیت کلود نیتیو", "پیاده سازی یک سرویس مالتی تننت واقعی"],
    },
    {
      id: "system-design-2",
      title: coursesData["system-design-2"].title,
      description: "تکنیک‌های تاب آوری و دسترس پذیری رو روی پروژه مون پیاده‌سازی میکنیم و انواع معماری و تکنولوژی های صف رو تمرین و مقایسه می‌کنیم",
      image: coursesData["system-design-2"].image,
      duration: coursesData["system-design-2"].duration,
      price: coursesData["system-design-2"].price + " تومان",
      highlights: ["الگوهای تاب آوری", "پردازش غیرهمزمان", "معماری چند دیتابیسی"],
    },
    {
      id: "system-design-3",
      title: coursesData["system-design-3"].title,
      description: "الگو‌ها و تجربه‌های واقعی از معماری میکروسرویس رو بررسی میکنیم و روش‌های سازگاری در معماری‌های توزیع شده رو پیاده سازی‌ میکنیم",
      image: coursesData["system-design-3"].image,
      duration: coursesData["system-design-3"].duration,
      price: coursesData["system-design-3"].price + " تومان",
      highlights: ["معماری میکروسرویس", "پیاده‌سازی معماری میکروسرویس در مقیاس بزرگ", "مطالعه مثال‌های بزرگ"],
    },
    {
      id: "art-of-coding",
      title: coursesData["art-of-coding"].title,
      description: "پیاده‌سازی با ذهنیت یک معمار",
      image: coursesData["art-of-coding"].image,
      duration: coursesData["art-of-coding"].duration,
      price: coursesData["art-of-coding"].price + " تومان",
      highlights: ["مفاهیم مهندسی نرم افزار", "طراحی لایه‌ای و ماژولار", "چک لیست پروژه اماده پروداکشن"],
    },
    {
      id: "backend-nodejs",
      title: coursesData["backend-nodejs"].title,
      description: "ساخت API های مقیاس‌پذیر با Node.js",
      image: coursesData["backend-nodejs"].image,
      duration: coursesData["backend-nodejs"].duration,
      price: coursesData["backend-nodejs"].price + " تومان",
      highlights: ["مقدمات Node.js", "Express & API Design", "Database Integration"],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="relative bg-gradient-to-br from-primary via-primary to-blue-900 text-primary-foreground py-12 md:py-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image 
              src="/classroom-training-session.jpg" 
              alt="جلسه آموزشی" 
              fill 
              className="object-cover opacity-20"
            />
          </div>
          <div className="relative container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">دوره‌ و بوت کمپ‌ها</h1>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed">
              این دوره ها ترکیبی از نئوری و مفاهیم عمقی و تجربه ۲۰ ساله من در توسعه نرم افزار هستن و می تونن در مسیر حرفه‌ای شما از یک برنامه نویس تا تک لید یا مدیر‌فنی مفید باشن تا تصمیمات بهتری در تیم و توسعه نرم افزار بگیرید
            </p>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="card-hover-lift flex flex-col overflow-hidden">
                {/* Course Image */}
                <div className="relative h-48 w-full bg-gradient-to-br from-blue-100 to-blue-50 p-4">
                  <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-contain p-4" />
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
                    <Link href={`/courses/${course.id}`}>مشاهده دوره</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-[#0f2942] via-[#1b4173] to-[#0f2942] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">سوال یا نیاز به مشاوره دارید؟</h2>
            <p className="text-base md:text-lg opacity-90 mb-8">
              برای اطلاعات بیشتر درباره دوره‌ها با من تماس بگیرید
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="mailto:behradz@gmail.com">تماس از طریق ایمیل</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary">
                <Link href="https://t.me/bzari" target="_blank">تماس از طریق تلگرام</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
