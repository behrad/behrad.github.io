import CoursePageClient from "./client"
import { coursesData } from "@/data/courses"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const course = coursesData[slug as keyof typeof coursesData]

  if (!course) {
    return {
      title: "دوره یافت نشد",
    }
  }

  const keywords = [
    "دوره سیستم دیزاین",
    "آموزش طراحی سیستم",
    "معماری نرم‌افزار",
    "مقیاس‌پذیری",
    "میکروسرویس",
    "دیتابیس",
    "بهراد زاری",
    "system design",
    "scalability",
    "software architecture",
    "distributed systems",
    "آموزش برنامه نویسی",
    "دوره برنامه نویسی",
  ]

  return {
    title: `${course.title} | مسیر رشد تفکر مهندسی نرم افزار - بهراد زاری`,
    description: course.shortDescription,
    keywords: keywords.join(", "),
    authors: [{ name: "بهراد زاری" }],
    openGraph: {
      title: course.title,
      description: course.shortDescription,
      type: "website",
      locale: "fa_IR",
      images: [
        {
          url: course.image,
          width: 1200,
          height: 630,
          alt: course.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: course.title,
      description: course.shortDescription,
      images: [course.image],
    },
  }
}

export function generateStaticParams() {
  return Object.keys(coursesData).map((slug) => ({ slug }))
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const course = coursesData[slug as keyof typeof coursesData]
  return <CoursePageClient course={course} slug={slug} />
}
