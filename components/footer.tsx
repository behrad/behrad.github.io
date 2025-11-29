import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-white mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} بهراد زاری. تمامی حقوق محفوظ است.
          </div>
          <div className="flex gap-6">
            <Link
              href="https://www.linkedin.com/in/behradz/"
              target="_blank"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              لینکدین
            </Link>
            <Link
              href="https://t.me/mindfulsoft"
              target="_blank"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              کانال تلگرام
            </Link>
            <Link
              href="mailto:behradz@gmail.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              ایمیل
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
