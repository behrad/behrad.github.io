import { TestimonialCard } from "@/components/testimonial-card"
import { cn } from "@/lib/utils"

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

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
  courseTitle: string
  className?: string
}

export function TestimonialsSection({
  testimonials,
  courseTitle,
  className
}: TestimonialsSectionProps) {
  if (!testimonials || testimonials.length === 0) {
    return null
  }

  return (
    <section 
      className={cn("py-16 bg-gray-50/50", className)}
      aria-labelledby="testimonials-heading"
      role="region"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 px-4">
          <h2 
            id="testimonials-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight"
          >
            نظرات شرکت‌کنندگان
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            تجربه‌های واقعی از کسانی که در دوره {courseTitle} شرکت کرده‌اند
          </p>
        </div>

        {/* Testimonials Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0"
          role="list"
          aria-label="فهرست نظرات شرکت‌کنندگان"
        >
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} role="listitem">
              <TestimonialCard
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                review={testimonial.review}
                photo={testimonial.photo}
                courseDate={testimonial.courseDate}
                rating={testimonial.rating}
              />
            </div>
          ))}
        </div>

        {/* Optional decorative elements */}
        <div className="mt-8 sm:mt-12 text-center px-4">
          <div className="inline-flex items-center gap-2 text-gray-500 text-sm sm:text-base">
            <span role="img" aria-label="ستاره">✨</span>
            <span>بیش از {testimonials.length} نفر از این دوره راضی بوده‌اند</span>
            <span role="img" aria-label="ستاره">✨</span>
          </div>
        </div>
      </div>
    </section>
  )
}