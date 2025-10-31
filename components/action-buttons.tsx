"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ActionButtonsProps {
  courseSlug: string
  isSticky?: boolean
  className?: string
}

export function ActionButtons({ courseSlug, isSticky = false, className }: ActionButtonsProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    if (!isSticky) return

    const handleScroll = () => {
      const scrolled = window.scrollY > 100
      setIsScrolled(scrolled)
    }

    // Add smooth scroll behavior to the document
    document.documentElement.style.scrollBehavior = 'smooth'
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [isSticky])

  // Skip link for keyboard users when sticky
  const handleSkipToContent = () => {
    const mainContent = document.querySelector('main')
    if (mainContent) {
      mainContent.focus()
      mainContent.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      className={cn(
        "w-full transition-all duration-300",
        isSticky && [
          "sticky top-0 z-50",
          isScrolled 
            ? "bg-background/95 backdrop-blur-sm border-b shadow-lg" 
            : "bg-transparent"
        ],
        !isSticky && "bg-background border-b",
        className
      )}
      role="banner"
      aria-label="دکمه‌های عمل دوره"
    >
      {/* Skip link for keyboard users */}
      {isSticky && (
        <button
          onClick={handleSkipToContent}
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-primary text-primary-foreground px-4 py-2 rounded-md z-[60]"
          onFocus={(e) => e.target.classList.remove('sr-only')}
          onBlur={(e) => e.target.classList.add('sr-only')}
        >
          رفتن به محتوای اصلی
        </button>
      )}
      
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          {/* Primary Registration Button */}
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto min-w-[200px] min-h-[48px] bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 touch-manipulation"
            aria-label="ثبت‌نام در دوره از طریق ایمیل"
          >
            <Link href={`mailto:behradz@gmail.com?subject=ثبت‌نام در دوره ${courseSlug}`}>
              <span className="flex items-center gap-2 text-base sm:text-lg">
                <span role="img" aria-label="آیکون ثبت‌نام">📝</span>
                <span>ثبت‌نام در دوره</span>
              </span>
            </Link>
          </Button>

          {/* Secondary Corporate Button */}
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full sm:w-auto min-w-[200px] min-h-[48px] border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium transition-all duration-200 transform hover:scale-105 touch-manipulation"
            aria-label="استعلام دوره سازمانی از طریق ایمیل"
          >
            <Link href={`mailto:behradz@gmail.com?subject=استعلام دوره سازمانی - ${courseSlug}`}>
              <span className="flex items-center gap-2 text-base sm:text-lg">
                <span role="img" aria-label="آیکون سازمانی">🏢</span>
                <span>دوره سازمانی</span>
              </span>
            </Link>
          </Button>
        </div>

        {/* Additional Info Text */}
        <div className="text-center mt-3 px-2">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            برای کسب اطلاعات بیشتر یا ثبت‌نام گروهی تماس بگیرید
          </p>
        </div>

        {/* Scroll to top button when sticky and scrolled */}
        {isSticky && isScrolled && (
          <button
            onClick={handleScrollToTop}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-200 hover:scale-110 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="بازگشت به بالا"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                handleScrollToTop()
              }
            }}
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}