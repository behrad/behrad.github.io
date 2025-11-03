import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'دوره‌های آموزشی | بهراد',
  description: 'دوره‌های آموزشی تخصصی برنامه‌نویسی، طراحی سیستم و DevOps',
}

const courses = [
  {
    slug: 'system-design',
    title: 'طراحی سیستم‌های مقیاس‌پذیر',
    description: 'آموزش کامل طراحی سیستم‌های بزرگ و مقیاس‌پذیر',
    level: 'پیشرفته',
    duration: '40 ساعت',
    image: '/system-design-1.jpg'
  },
  {
    slug: 'backend-nodejs',
    title: 'توسعه Backend با Node.js',
    description: 'آموزش کامل توسعه سرور با Node.js و Express',
    level: 'متوسط',
    duration: '30 ساعت',
    image: '/backend-nodejs.jpg'
  },
  {
    slug: 'art-of-coding',
    title: 'هنر برنامه‌نویسی',
    description: 'اصول و تکنیک‌های نوشتن کد تمیز و قابل نگهداری',
    level: 'مبتدی',
    duration: '25 ساعت',
    image: '/art-of-coding.jpg'
  }
]

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">دوره‌های آموزشی</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          دوره‌های تخصصی برای ارتقای مهارت‌های برنامه‌نویسی و طراحی سیستم
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Link key={course.slug} href={`/courses/${course.slug}`}>
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img
                  src={course.image}
                  alt={course.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{course.level}</Badge>
                  <span className="text-sm text-muted-foreground">{course.duration}</span>
                </div>
                <CardTitle className="text-xl">{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}