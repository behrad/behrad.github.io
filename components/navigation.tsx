import Link from "next/link"

export function Navigation() {
  return (
    <nav className="border-b border-border bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
            مسیر رشد تفکر مهندسی نرم افزار
          </Link>
          <div className="flex gap-6">
            <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              دوره‌ها
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              درباره من
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
