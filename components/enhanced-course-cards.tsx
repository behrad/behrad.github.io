import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Calendar, Rocket } from "lucide-react"

interface EnhancedCardProps {
  type: 'duration' | 'schedule' | 'startDate'
  title: string
  content: string
  colorScheme?: {
    primary: string
    secondary: string
    accent: string
  }
}

interface EnhancedCourseCardsProps {
  duration: string
  schedule: string
  startDate: string
  colorScheme?: {
    primary: string
    secondary: string
    accent: string
  }
}

const EnhancedCard = ({ type, title, content, colorScheme }: EnhancedCardProps) => {
  const getCardStyles = () => {
    const baseStyles = "group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl border-0"
    
    switch (type) {
      case 'duration':
        return {
          cardClass: `${baseStyles} bg-gradient-to-br from-blue-500 to-blue-700 text-white`,
          iconColor: "text-blue-100",
          contentColor: "text-blue-50"
        }
      case 'schedule':
        return {
          cardClass: `${baseStyles} bg-gradient-to-br from-green-500 to-green-700 text-white`,
          iconColor: "text-green-100", 
          contentColor: "text-green-50"
        }
      case 'startDate':
        return {
          cardClass: `${baseStyles} bg-gradient-to-br from-purple-500 to-purple-700 text-white`,
          iconColor: "text-purple-100",
          contentColor: "text-purple-50"
        }
      default:
        return {
          cardClass: `${baseStyles} bg-gradient-to-br from-gray-500 to-gray-700 text-white`,
          iconColor: "text-gray-100",
          contentColor: "text-gray-50"
        }
    }
  }

  const getIcon = () => {
    const iconClass = `w-5 h-5 sm:w-6 sm:h-6 ${getCardStyles().iconColor} transition-transform duration-300 group-hover:scale-110`
    
    switch (type) {
      case 'duration':
        return <Clock className={iconClass} aria-hidden="true" />
      case 'schedule':
        return <Calendar className={iconClass} aria-hidden="true" />
      case 'startDate':
        return <Rocket className={iconClass} aria-hidden="true" />
      default:
        return <Clock className={iconClass} aria-hidden="true" />
    }
  }

  const styles = getCardStyles()

  return (
    <Card 
      className={styles.cardClass}
      role="article"
      aria-label={`${title}: ${content}`}
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" aria-hidden="true" />
      
      <CardHeader className="relative z-10 pb-2 p-4 sm:p-6">
        <div className="flex items-center gap-2 sm:gap-3">
          {getIcon()}
          <CardTitle className="text-base sm:text-lg font-bold leading-tight">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="relative z-10 pt-0 p-4 sm:p-6 sm:pt-0">
        {type === 'duration' || type === 'startDate' ? (
          <p className="text-xl sm:text-2xl font-bold leading-tight">{content}</p>
        ) : (
          <p className="font-medium text-sm sm:text-base leading-relaxed">{content}</p>
        )}
      </CardContent>
    </Card>
  )
}

export const EnhancedCourseCards = ({ 
  duration, 
  schedule, 
  startDate, 
  colorScheme 
}: EnhancedCourseCardsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 px-2 sm:px-0">
      <EnhancedCard
        type="duration"
        title="مدت دوره"
        content={duration}
        colorScheme={colorScheme}
      />
      <EnhancedCard
        type="schedule"
        title="زمان‌بندی"
        content={schedule}
        colorScheme={colorScheme}
      />
      <EnhancedCard
        type="startDate"
        title="شروع دوره"
        content={startDate}
        colorScheme={colorScheme}
      />
    </div>
  )
}