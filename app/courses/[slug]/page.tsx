import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ActionButtons } from "@/components/action-buttons"
import { EnhancedCourseCards } from "@/components/enhanced-course-cards"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

// Enhanced data types
interface Testimonial {
  id: string
  name: string
  role: string
  company?: string
  review: string
  photo?: string
  courseDate?: string
  rating?: number
}

interface CourseModule {
  title: string
  description: string
}

interface EnhancedCourse {
  title: string
  subtitle: string
  description: string
  duration: string
  schedule: string
  startDate: string
  format: string
  outcomes: string[]
  targetAudience: string[]
  modules: CourseModule[]
  // New enhanced fields
  heroImage?: string
  testimonials: Testimonial[]
  colorScheme: {
    primary: string
    secondary: string
    accent: string
  }
}

const coursesData: Record<string, EnhancedCourse> = {
  "system-design": {
    title: "دوره سیستم دیزاین",
    subtitle: "طراحی سیستم‌های مقیاس‌پذیر",
    description:
      "در این دوره با جنبه‌های مختلف طراحی در سیستم‌های بزرگ نرم افزاری آشنا میشیم. تکنیک‌‌های مختلفی را برای مقیاس پذیر کردن سرویس‌ها و ارتباط بین ‌شون پیاده سازی می‌کنیم. از معماری‌ مبتنی بر رویداد و الگو‌های افزایش پایداری برای پیاده‌سازی یک سیستم واقعی استفاده میکنیم. دیتابیس‌های مختلف رو بررسی می‌کنیم و یاد میگیرم چطور منابع لازم رو برای اندازه داده‌هامون و تعداد کاربرانمون تخمین بزنیم. تمرین‌های این دوره رو می تونید به با هر زبانی که کد میزنید پیاده‌سازی کنید.",
    duration: "30 ساعت",
    schedule: "یکشنبه و سه‌شنبه از ساعت 5 تا 8",
    startDate: "18 خرداد",
    format: "حضوری در دانشگاه شریف و آنلاین",
    outcomes: [
      "با زبان و استک خودتون سیستم‌های مقیاس‌پذیر بسازید",
      "قابلیت‌ تحمل خطا و پایداری سرویس‌هاتون رو بالا ببرید",
      "دیتابیس مناسب رو برای شرایط مختلف انتخاب و اسکیل کنید",
      "تسلط کافی برای حل مسائل طراحی سیستم در مصاحبه‌های شغلی داشته باشید",
    ],
    targetAudience: [
      "برنامه نویسانی که میخوان معمار یا مدیر فنی بشن",
      "تک و تیم لید‌هایی که مسئولیت ساخت یه نرم افزار توسعه پذیر و مقیاس پذیر دارن",
      "مدیران فنی که میخوان تصمیمات معماری نرم افزار توی تیم‌شون رو بدرستی هدایت کنند",
      "مدیران پروژه‌های نرم افزاری که میخوان معماری درست سیستم‌ مورد نظرشون رو بدونن",
      "مدیران محصول‌های تک که میخوان دید تکنیکال به معماری نرم افزار داشته باشن",
    ],
    modules: [
      {
        title: "Module 1",
        description: "Non-functional Requirements In practice و System Design Concepts",
      },
      {
        title: "Module 2",
        description: "Designing for Resiliency (All patterns & Techniques) و Asynchronous Processing at Scale",
      },
      {
        title: "Module 3",
        description: "Scaling Databases (CAP Theorem)",
      },
      {
        title: "Module 4",
        description: "Capacity Estimation (Back of the Envelope)",
      },
    ],
    // Enhanced fields
    heroImage: "/images/courses/system-design-hero.jpg",
    testimonials: [
      {
        id: "1",
        name: "علی احمدی",
        role: "Senior Software Engineer",
        company: "دیجی‌کالا",
        review: "این دوره واقعاً نقطه عطفی در کارم بود. مفاهیم پیچیده سیستم دیزاین رو به شکل عملی و قابل فهم یاد گرفتم. الان می‌تونم با اعتماد به نفس کامل در مصاحبه‌های شغلی شرکت کنم.",
        photo: "/images/testimonials/ali-ahmadi.jpg",
        courseDate: "بهار 1403",
        rating: 5
      },
      {
        id: "2",
        name: "سارا محمدی",
        role: "Tech Lead",
        company: "اسنپ",
        review: "بهترین سرمایه‌گذاری که برای پیشرفت شغلیم کردم. مدرس با تجربه و محتوای کاربردی. بعد از این دوره توانستم معماری سیستم‌های پیچیده‌ای رو طراحی کنم که قبلاً برام غیرممکن بود.",
        photo: "/images/testimonials/sara-mohammadi.jpg",
        courseDate: "زمستان 1402",
        rating: 5
      },
      {
        id: "3",
        name: "محمد رضایی",
        role: "Software Architect",
        company: "بانک پاسارگاد",
        review: "دوره‌ای جامع و کاربردی. از مفاهیم پایه تا پیاده‌سازی عملی همه چیز رو پوشش می‌ده. خیلی کمک کرد تا بتونم تصمیمات معماری بهتری در پروژه‌هام بگیرم.",
        photo: "/images/testimonials/mohammad-rezaei.jpg",
        courseDate: "پاییز 1402",
        rating: 5
      }
    ],
    colorScheme: {
      primary: "#3B82F6",
      secondary: "#1E40AF", 
      accent: "#60A5FA"
    }
  },
}

export function generateStaticParams() {
  return [{ slug: "system-design" }]
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const course = coursesData[slug as keyof typeof coursesData]

  if (!course) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1" id="main-content" tabIndex={-1}>
        {/* Header */}
        <section 
          className="relative bg-primary text-primary-foreground py-16 overflow-hidden"
          role="banner"
          aria-labelledby="course-title"
        >
          {/* Hero Image with Next.js Image optimization */}
          {course.heroImage && (
            <Image
              src={course.heroImage}
              alt={`تصویر دوره ${course.title}`}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          )}
          
          {/* Gradient overlay for text readability */}
          <div className={`absolute inset-0 ${course.heroImage ? 'bg-gradient-to-r from-primary/90 via-primary/70 to-primary/90' : ''}`} aria-hidden="true" />
          
          <div className="container mx-auto px-4 relative z-10">
            <h1 
              id="course-title"
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance leading-tight"
            >
              {course.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl opacity-90 leading-relaxed">{course.subtitle}</p>
          </div>
        </section>

        {/* Action Buttons */}
        <ActionButtons courseSlug={slug} isSticky={true} />

        {/* Course Info */}
        <section 
          className="container mx-auto px-4 py-8 sm:py-12"
          aria-labelledby="course-info-heading"
        >
          <h2 id="course-info-heading" className="sr-only">اطلاعات دوره</h2>
          
          <EnhancedCourseCards
            duration={course.duration}
            schedule={course.schedule}
            startDate={course.startDate}
            colorScheme={course.colorScheme}
          />

          <Card className="mb-8 sm:mb-12">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">شرح دوره</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed text-pretty text-sm sm:text-base">{course.description}</p>
              <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
                <p className="font-medium text-sm sm:text-base">نحوه برگزاری: {course.format}</p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl md:text-2xl leading-tight">با گذراندن این دوره می‌توانید:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3" role="list">
                  {course.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-3" role="listitem">
                      <span className="text-primary text-lg sm:text-xl mt-0.5 flex-shrink-0" aria-hidden="true">✓</span>
                      <span className="text-muted-foreground leading-relaxed text-sm sm:text-base">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl md:text-2xl leading-tight">این دوره برای چه افرادی مناسبه؟</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3" role="list">
                  {course.targetAudience.map((audience, index) => (
                    <li key={index} className="flex items-start gap-3" role="listitem">
                      <span className="text-primary mt-1 flex-shrink-0" aria-hidden="true">•</span>
                      <span className="text-muted-foreground leading-relaxed text-sm sm:text-base">{audience}</span>
                    </li>
                  ))}
                </ul>
                {slug === "system-design" && (
                  <p className="text-xs sm:text-sm text-muted-foreground mt-4 italic">
                    (دو گروه آخر بخش های کد نویسی و پیاده‌سازی رو می تونن نادیده بگیرن)
                  </p>
                )}
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl md:text-2xl">سرفصل‌های کلی</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4" role="list">
                {course.modules.map((module, index) => (
                  <div key={index} className="p-4 bg-secondary/30 rounded-lg" role="listitem">
                    <h3 className="font-bold text-base sm:text-lg mb-2 leading-tight">{module.title}</h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{module.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Testimonials Section */}
        <TestimonialsSection 
          testimonials={course.testimonials}
          courseTitle={course.title}
        />

        {/* CTA */}
        <section 
          className="bg-primary text-primary-foreground py-12 sm:py-16"
          aria-labelledby="cta-heading"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 
              id="cta-heading"
              className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 leading-tight"
            >
              آماده ثبت‌نام هستید؟
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 leading-relaxed">
              برای ثبت‌نام یا کسب اطلاعات بیشتر با من تماس بگیرید
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild 
                size="lg" 
                variant="secondary"
                className="w-full sm:w-auto min-w-[200px] min-h-[48px] touch-manipulation"
                aria-label="تماس برای ثبت‌نام از طریق ایمیل"
              >
                <Link href="mailto:behradz@gmail.com">تماس برای ثبت‌نام</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto min-w-[200px] min-h-[48px] bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary touch-manipulation"
                aria-label="مشاهده سایر دوره‌ها"
              >
                <Link href="/courses">مشاهده سایر دوره‌ها</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
