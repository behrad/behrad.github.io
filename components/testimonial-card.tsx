import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface TestimonialCardProps {
  name: string
  role: string
  company?: string
  review: string
  photo?: string
  courseDate?: string
  rating?: number
  className?: string
}

export function TestimonialCard({
  name,
  role,
  company,
  review,
  photo,
  courseDate,
  rating,
  className
}: TestimonialCardProps) {
  return (
    <Card 
      className={cn(
        "h-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02] bg-gradient-to-br from-white to-gray-50/50 border-gray-200/60 focus-within:ring-2 focus-within:ring-primary/20",
        className
      )}
      role="article"
      aria-label={`نظر ${name} در مورد دوره`}
    >
      <CardContent className="p-4 sm:p-6 flex flex-col h-full">
        {/* Header with photo and info */}
        <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div className="relative flex-shrink-0">
            {photo ? (
              <Image
                src={photo}
                alt={`تصویر ${name}`}
                width={50}
                height={50}
                className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full object-cover border-2 border-gray-200"
              />
            ) : (
              <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center border-2 border-gray-200">
                <span className="text-blue-600 font-semibold text-base sm:text-lg" aria-hidden="true">
                  {name.charAt(0)}
                </span>
              </div>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 text-base sm:text-lg leading-tight">
              {name}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mt-1 leading-relaxed">
              {role}
              {company && (
                <>
                  <span className="mx-1" aria-hidden="true">•</span>
                  <span className="font-medium">{company}</span>
                </>
              )}
            </p>
            {courseDate && (
              <p className="text-gray-500 text-xs sm:text-sm mt-1">
                {courseDate}
              </p>
            )}
          </div>
        </div>

        {/* Rating */}
        {rating && (
          <div className="flex items-center gap-1 mb-3" role="img" aria-label={`امتیاز ${rating} از 5 ستاره`}>
            {Array.from({ length: 5 }, (_, i) => (
              <span
                key={i}
                className={cn(
                  "text-base sm:text-lg",
                  i < rating ? "text-yellow-400" : "text-gray-300"
                )}
                aria-hidden="true"
              >
                ★
              </span>
            ))}
            <span className="sr-only">{rating} از 5 ستاره</span>
          </div>
        )}

        {/* Review text */}
        <blockquote className="flex-1 text-gray-700 leading-relaxed text-sm sm:text-base">
          <span className="text-blue-500 text-xl sm:text-2xl leading-none" aria-hidden="true">"</span>
          <span className="mx-1">{review}</span>
          <span className="text-blue-500 text-xl sm:text-2xl leading-none" aria-hidden="true">"</span>
        </blockquote>
      </CardContent>
    </Card>
  )
}