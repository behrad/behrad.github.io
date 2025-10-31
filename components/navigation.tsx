import Link from "next/link"

export function Navigation() {
  return (
    <nav className="border-b border-border bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
            بهراد زارعی
          </Link>
          <div className="flex gap-6">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              خانه
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              درباره من
            </Link>
            <Link href="/courses" className="text-foreground hover:text-primary transition-colors">
              دوره‌ها
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
