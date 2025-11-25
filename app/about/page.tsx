import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const experiences = [
    {
      title: "مربی",
      company: "Philia",
      period: "۲۰۲۵ - اکنون",
      description:
        "مقیاس‌پذیری نرم‌افزار مبتنی بر Python، طراحی مجدد موتور ماموریت و پردازش رویداد با استفاده از SQL و الگوهای reactive streaming",
    },
    {
      title: "مدیر فنی (CTO)",
      company: "Sazito",
      period: "۲۰۲۴ - اکنون",
      description: "توسعه نقشه راه محصول Markito، طراحی مجدد راه‌حل فنی، بررسی و بهبود پیاده‌سازی مبتنی بر Go",
    },
    {
      title: "مربی",
      company: "Sabana",
      period: "۲۰۲۲ - ۲۰۲۳",
      description: "حل مشکلات ارتباطی بین تیم محصول و فنی، بهبود شیوه‌های Agile و جلسات refinement، بررسی کد TypeScript",
    },
    {
      title: "مدیر فنی (CTO)",
      company: "Logistic Bazaar",
      period: "۲۰۲۱ - ۲۰۲۳",
      description:
        "ساخت و مقیاس‌پذیری استک فنی و محصولات/خدمات نرم‌افزاری، مدیریت توسعه دروازه هماهنگی سرویس مبتنی بر NodeJS و VueJS",
    },
    {
      title: "مدیر مهندسی",
      company: "Adanic",
      period: "۲۰۲۱ - ۲۰۲۲",
      description:
        "توانمندسازی اعضای تیم برای استفاده از سبک‌های برنامه‌نویسی reactive و functional در وظایف روزانه توسعه",
    },
    {
      title: "بنیانگذار و مدیرعامل",
      company: "Chabok Realtime Solutions",
      period: "۲۰۱۷ - ۲۰۲۰",
      description:
        "راه‌اندازی پلتفرم SaaS با ویژگی‌ها و کیفیت قابل مقایسه با بهترین نرم‌افزارهای marketing automation جهان. استک فنی: میکروسرویس‌های NodeJS با RabbitMQ و دیتابیس‌های polyglot. دستیابی به جریان نقدی مثبت در سال دوم",
    },
    {
      title: "مهندس نرم‌افزار ارشد",
      company: "Atieh Dadeh Pardaz",
      period: "۲۰۱۴ - ۲۰۱۷",
      description:
        "طراحی و پیاده‌سازی اپلیکیشن موبایل second screen برای محبوب‌ترین برنامه تلویزیونی ایران (برنامه ۹۰) که به ۳.۵ میلیون کاربر فعال ماهانه رسید. توسعه دروازه پیام‌رسانی realtime با استفاده از Scala و Akka",
    },
    {
      title: "توسعه‌دهنده ارشد",
      company: "AC&C Basamad Co.",
      period: "۲۰۰۵ - ۲۰۱۴",
      description:
        "توسعه و تست جنگی Call Manager مبتنی بر Java برای VoIP (SIP) که در مراکز تماس مهم ایران مانند ۹۹۹۰ (همراه اول)، ۹۶۲۷ (شرکت ملی پخش فرآورده‌های نفتی) و ۱۶۲ (صدا و سیما) مستقر شد. توسعه backend سوئیچینگ با Erlang",
    },
  ]

  const skills = {
    technical: [
      "DDD و الگوهای طراحی",
      "میکروسرویس‌ها و الگوهای معماری",
      "Java, Scala, Erlang, NodeJS, Golang",
      "طراحی و مقیاس‌پذیری دیتابیس (No)SQL",
      "الگوهای یکپارچه‌سازی و طراحی",
      "توسعه Agile، CI/CD، DevOps",
      "React/Vue و تکنولوژی‌های Frontend",
      "VoIP, SIP, IoT, MQTT",
    ],
    professional: [
      "مقیاس‌پذیری",
      "رهبری فنی",
      "مربیگری و بررسی کد",
      "معماری نرم‌افزار پایدار",
      "مدیریت زمان",
      "ابزارهای No-Code و Low-Code",
      "تفکر آینده‌نگر",
    ],
  }

  const education = [
    {
      degree: "کارشناسی ارشد مهندسی نرم‌افزار",
      institution: "دانشگاه صنعتی شریف",
      thesis: "به سوی یک متدولوژی چابک هسته برای توسعه نرم‌افزار",
    },
    {
      degree: "کارشناسی مهندسی نرم‌افزار",
      institution: "دانشگاه آزاد، واحد تهران مرکزی",
      project: "پیاده‌سازی پورتال سلامت ملی مبتنی بر SOA",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-xl border-4 border-primary-foreground/20">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/me.JPG-tqJ1OwFOE0UCE3o5iseDdWBwDAFhdF.jpeg"
                    alt="بهراد زاری"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 text-center md:text-right">
                <h1 className="text-4xl font-bold mb-4">بهراد زاری</h1>
                <p className="text-xl mb-2">مهندس نرم‌افزار</p>
                <div className="flex flex-col gap-2 text-sm opacity-90">
                  <p>تلفن: ۰۹۱۲ ۵۳۳ ۶۳۸۳</p>
                  <p>ایمیل: behradz@gmail.com</p>
                  <Link href="https://www.linkedin.com/in/behradz/" target="_blank" className="hover:underline">
                    linkedin.com/in/behradz
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Goals */}
        <section className="container mx-auto px-4 py-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">اهداف شغلی</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                با بیش از ۲۲ سال تجربه در توسعه نرم‌افزار، سیستم‌های با کارایی بالا ساخته‌ام، تیم‌های مهندسی را رهبری کرده‌ام
                و استارتاپ خودم را تاسیس کرده‌ام—تجربه‌ای که نه تنها تخصص فنی بلکه درک تجاری و مهارت‌های رهبری من را تقویت
                کرد. اکنون، به عنوان مربی و مشاور، به CTO ها و کسب‌وکارها کمک می‌کنم تا نرم‌افزار خود را مقیاس‌پذیر کنند،
                تیم‌های توسعه خود را بسازند و رشد دهند، و تعالی فنی را ارتقا دهند. تیم‌ها را به واحدهای با کارایی بالا
                تبدیل می‌کنم تا رشد پایدار را هدایت کنند.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Experience */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8">سوابق شغلی</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-primary font-medium">{exp.company}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="bg-secondary/30 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">مهارت‌ها</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>تخصص‌های فنی</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {skills.technical.map((skill, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>مهارت‌های حرفه‌ای</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {skills.professional.map((skill, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8">تحصیلات</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{edu.degree}</CardTitle>
                  <p className="text-primary font-medium">{edu.institution}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{edu.thesis || edu.project}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">علاقه‌مند به همکاری هستید؟</h2>
            <p className="mb-6 opacity-90">برای مشاوره، مربیگری یا همکاری با من تماس بگیرید</p>
            <Button asChild size="lg" variant="secondary">
              <Link href="mailto:behradz@gmail.com">تماس با من</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
