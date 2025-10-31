# راهنمای دیپلوی روی GitHub Pages

## مراحل دیپلوی دستی

### 1. ساخت فایل‌های استاتیک
```bash
pnpm run build
```

### 2. آپلود فولدر `out` به GitHub Pages
پس از اجرای دستور بالا، فولدر `out` ایجاد می‌شود که شامل تمام فایل‌های استاتیک است.

## دیپلوی خودکار با GitHub Actions

### تنظیمات مخزن GitHub:
1. به تب **Settings** مخزن بروید
2. در بخش **Pages** گزینه **Source** را روی **GitHub Actions** تنظیم کنید
3. هر بار که کد را push کنید، سایت به‌طور خودکار دیپلوی می‌شود

### نکات مهم:
- فایل `.github/workflows/deploy.yml` برای دیپلوی خودکار پیکربندی شده
- فایل `public/.nojekyll` از Jekyll جلوگیری می‌کند
- تصاویر به‌صورت unoptimized تنظیم شده‌اند (مناسب برای static export)

## تست محلی
```bash
# اجرای سرور توسعه
pnpm run dev

# ساخت و تست استاتیک
pnpm run build
npx serve out
```

## URL نهایی
پس از دیپلوی، سایت در آدرس زیر در دسترس خواهد بود:
```
https://[username].github.io/[repository-name]
```