import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CoursesPage() {
  const courses = [
    {
      id: "system-design",
      title: "دوره سیستم دیزاین",
      subtitle: "طراحی سیستم‌های مقیاس‌پذیر",
      description:
        "در این دوره با جنبه‌های مختلف طراحی در سیستم‌های بزرگ نرم افزاری آشنا میشیم. تکنیک‌‌های مختلفی را برای مقیاس پذیر کردن سرویس‌ها و ارتباط بین ‌شون پیاده سازی می‌کنیم.",
      duration: "30 ساعت",
      schedule: "یکشنبه و سه‌شنبه از ساعت 5 تا 8",
      startDate: "18 خرداد",
      format: "حضوری در دانشگاه شریف و آنلاین",
      modules: 4,
      colorClass: "card-blue-dark",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary via-primary to-blue-900 text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">دوره‌های آموزشی</h1>
            <p className="text-xl opacity-90">مهارت‌های خود را در طراحی و توسعه سیستم‌های مقیاس‌پذیر ارتقا دهید</p>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className={`${course.colorClass} card-hover-lift flex flex-col`}>
                <CardHeader>
                  <CardTitle className="text-2xl">{course.title}</CardTitle>
                  <CardDescription className="text-lg">{course.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-1">{course.description}</p>
                  <div className="space-y-2 mb-6 text-sm">
                    <div className="flex items-start gap-2 bg-white/60 rounded-md px-3 py-2">
                      <span className="text-primary font-semibold">⏱</span>
                      <span className="text-muted-foreground min-w-20">مدت:</span>
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="flex items-start gap-2 bg-white/60 rounded-md px-3 py-2">
                      <span className="text-primary font-semibold">📅</span>
                      <span className="text-muted-foreground min-w-20">زمان‌بندی:</span>
                      <span className="font-medium">{course.schedule}</span>
                    </div>
                    <div className="flex items-start gap-2 bg-white/60 rounded-md px-3 py-2">
                      <span className="text-primary font-semibold">🚀</span>
                      <span className="text-muted-foreground min-w-20">شروع:</span>
                      <span className="font-medium">{course.startDate}</span>
                    </div>
                    <div className="flex items-start gap-2 bg-white/60 rounded-md px-3 py-2">
                      <span className="text-primary font-semibold">📍</span>
                      <span className="text-muted-foreground min-w-20">نحوه برگزاری:</span>
                      <span className="font-medium">{course.format}</span>
                    </div>
                    <div className="flex items-start gap-2 bg-white/60 rounded-md px-3 py-2">
                      <span className="text-primary font-semibold">📚</span>
                      <span className="text-muted-foreground min-w-20">ماژول‌ها:</span>
                      <span className="font-medium">{course.modules} ماژول</span>
                    </div>
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
        <section className="bg-gradient-to-b from-blue-50/50 to-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">سوال یا نیاز به مشاوره دارید؟</h2>
            <p className="text-lg text-muted-foreground mb-6">برای اطلاعات بیشتر درباره دوره‌ها با من تماس بگیرید</p>
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
