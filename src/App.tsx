import { useCallback, useEffect, useState } from "react"
 
// Brand
import logoImg from "@/imports/logo.png"
 
// Section banners
import bannerHotDrinks from "@/imports/banner-hot-drinks.webp"
import bannerCoffee from "@/imports/banner-coffee.webp"
import bannerColdDrinks from "@/imports/banner-cold-drinks.webp"
import bannerShabati from "@/imports/banner-shabati.webp"
import bannerFatayer from "@/imports/banner-fatayer.webp"
import bannerSweets from "@/imports/banner-sweets.webp"
 
// Small product photos
import teaBukhar from "@/imports/tea-bukhar.webp"
import teaTakleema from "@/imports/tea-takleema.webp"
import teaKarak from "@/imports/tea-karak.webp"
import teaMint from "@/imports/tea-mint.webp"
import gingerMilk from "@/imports/ginger-milk.webp"
import coffeeToday from "@/imports/coffee-today.webp"
import kerkadeh from "@/imports/kerkadeh.webp"
import mojitoCherry from "@/imports/mojito-cherry.webp"
import mojitoRedBerry from "@/imports/mojito-red-berry.webp"
import mojitoPassion from "@/imports/mojito-passion.webp"
import shabatiCheeseHalawa from "@/imports/shabati-cheese-halawa.webp"
import shabatiEgg from "@/imports/shabati-egg.webp"
import fatiraZaatarLabneh from "@/imports/fatira-zaatar-labneh.webp"
import fatiraLabneh from "@/imports/fatira-labneh.webp"
import fatiraCheese from "@/imports/fatira-cheese.webp"
import fatiraEggCheese from "@/imports/fatira-egg-cheese.webp"
import fatiraSausageCheese from "@/imports/fatira-sausage-cheese.webp"
import fatiraHalloumi from "@/imports/fatira-halloumi.webp"
import fatiraTuna from "@/imports/fatira-tuna.webp"
import sabousa from "@/imports/sabousa.webp"
 
// Majlis photos
import majlisTea from "@/imports/majlis-tea.webp"
import majlisCoffee from "@/imports/majlis-coffee.webp"
 
function OrnamentalDivider({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-3 my-1">
      <div
        className="flex-1 h-px"
        style={{ background: "var(--gold)", opacity: 0.4 }}
      />
      {label ? (
        <span
          className="text-xs font-display"
          style={{ color: "var(--gold)", letterSpacing: "0.08em" }}
        >
          {label}
        </span>
      ) : (
        <div className="flex gap-1 items-center">
          <div
            className="w-1.5 h-1.5 rotate-45"
            style={{ background: "var(--gold)" }}
          />
          <div
            className="w-1 h-1 rotate-45"
            style={{ background: "var(--maroon)" }}
          />
          <div
            className="w-1.5 h-1.5 rotate-45"
            style={{ background: "var(--gold)" }}
          />
        </div>
      )}
      <div
        className="flex-1 h-px"
        style={{ background: "var(--gold)", opacity: 0.4 }}
      />
    </div>
  )
}
 
function CategoryHeader({ ar }: { ar: string }) {
  return (
    <div className="mb-6">
      <OrnamentalDivider />
      <div className="flex items-center justify-center gap-3 my-3">
        <DiamondIcon />
        <h2
          className="font-display text-2xl font-bold"
          style={{ color: "var(--maroon)" }}
        >
          {ar}
        </h2>
        <DiamondIcon />
      </div>
      <OrnamentalDivider />
    </div>
  )
}
 
function DiamondIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="1"
        y="1"
        width="12"
        height="12"
        rx="1"
        fill="var(--gold)"
        transform="rotate(45 7 7)"
      />
    </svg>
  )
}
 
/* ───────────────────────── Icons (one outline style for all) ───────────────────────── */
 
const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
}
 
function SnapchatIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 2.7c2.6 0 4.6 1.6 5.3 4 .3 1 .1 2.6 0 3.9.5.3 1.2.1 1.7-.2.4-.2.9-.1.9.3 0 .7-1.2 1.1-2 1.3-.4.1-.5.4-.3.8.6 1.2 1.6 2.4 3 3 .3.1.3.4 0 .6-.7.4-1.5.7-2.3.8-.3.6-.1 1.3-.6 1.4-.7.1-1.3-.2-2.1-.2-.9 0-1.4.6-2.1 1.1-.6.5-1.2.8-1.9.8h-.4c-.7 0-1.3-.3-1.9-.8-.7-.5-1.2-1.1-2.1-1.1-.8 0-1.4.3-2.1.2-.5-.1-.3-.8-.6-1.4-.8-.1-1.6-.4-2.3-.8-.3-.2-.3-.5 0-.6 1.4-.6 2.4-1.8 3-3 .2-.4.1-.7-.3-.8-.8-.2-2-.6-2-1.3 0-.4.5-.5.9-.3.5.3 1.2.5 1.7.2-.1-1.3-.3-2.9 0-3.9.7-2.4 2.7-4 5.3-4z" />
    </svg>
  )
}
 
function InstagramIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r=".6" fill="currentColor" />
    </svg>
  )
}
 
function TikTokIcon() {
  return (
    <svg {...iconProps}>
      <path d="M9.5 12.2a4 4 0 1 0 4 4V3.5a5 5 0 0 0 5 5" />
    </svg>
  )
}
 
function WhatsAppIcon() {
  return (
    <svg {...iconProps}>
      <path d="M3.5 20.5l1.2-4.2A8.5 8.5 0 1 1 8 19.4z" />
      <path d="M9 8.3c.3-.5.8-.5 1.1 0l.7 1.1c.2.3.2.6 0 .9l-.5.6c.6 1.2 1.5 2.1 2.8 2.8l.6-.5c.3-.2.6-.2.9 0l1.1.7c.5.3.5.8 0 1.2-.8.7-1.9.8-3.1.3-2.1-1-3.7-2.6-4.4-4.7-.2-.8 0-1.7.8-2.4z" />
    </svg>
  )
}
 
function ClockIcon() {
  return (
    <svg {...iconProps} width={18} height={18}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  )
}
 
function PinIcon() {
  return (
    <svg {...iconProps} width={18} height={18}>
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
 
/* ───────────────────────── Contact details ───────────────────────── */
 
const WHATSAPP_NUMBER = "966553299877" // wa.me format: country code + number, no + or spaces
const PHONE_DISPLAY = "+966 55 329 9877"
 
const socialLinks = [
  {
    label: "سناب شات",
    href: "https://www.snapchat.com/add/shayhaam",
    icon: <SnapchatIcon />,
  },
  {
    label: "انستقرام",
    href: "https://www.instagram.com/shayhaam",
    icon: <InstagramIcon />,
  },
  {
    label: "تيك توك",
    href: "https://www.tiktok.com/@shayhaam",
    icon: <TikTokIcon />,
  },
  {
    label: "واتساب",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    icon: <WhatsAppIcon />,
  },
]
 
/* ───────────────────────── Menu building blocks ───────────────────────── */
 
type Item = {
  name: string
  desc?: string
  price: string
  image?: string
}
 
function MenuItem({ name, desc, price, image }: Item) {
  return (
    <div
      className="py-4 flex items-center gap-3"
      style={{ borderBottom: "1px solid var(--divider)" }}
    >
      {image && (
        <div
          className="shrink-0 flex items-center justify-center rounded-xl"
          style={{ width: 72, height: 72, background: "var(--bg-warm)" }}
        >
          <img
            src={image}
            alt={name}
            width={64}
            height={64}
            loading="lazy"
            decoding="async"
            className="object-contain"
            style={{ width: 64, height: 64 }}
          />
        </div>
      )}
 
      <div className="flex-1">
        <p
          className="font-display text-base font-semibold leading-snug"
          style={{ color: "var(--maroon)" }}
        >
          {name}
        </p>
        {desc && (
          <p
            className="text-xs mt-0.5 leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            {desc}
          </p>
        )}
      </div>
 
      <div className="shrink-0 text-left">
        <span
          className="font-display text-base font-bold tabular-nums"
          style={{ color: "var(--gold)" }}
        >
          {price}
        </span>
        <span className="text-xs mr-0.5" style={{ color: "var(--text-muted)" }}>
          {" "}
          ر.س
        </span>
      </div>
    </div>
  )
}
 
function MenuSection({
  id,
  title,
  banner,
  items,
  eager = false,
}: {
  id: string
  title: string
  banner: string
  items: Item[]
  eager?: boolean
}) {
  return (
    <section id={id} className="mb-10" aria-label={title}>
      <CategoryHeader ar={title} />
 
      {/* One large image at the start of the section */}
      <img
        src={banner}
        alt={title}
        width={1200}
        height={900}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className="w-full h-auto rounded-2xl mb-4"
        style={{ boxShadow: "0 4px 24px rgba(107,20,20,0.12)" }}
      />
 
      <div>
        {items.map((item) => (
          <MenuItem key={item.name} {...item} />
        ))}
      </div>
    </section>
  )
}
 
/* ───────────────────────── Menu data (prices unchanged) ───────────────────────── */
 
// 1) المشروبات الحارة
const hotDrinkItems: Item[] = [
  {
    name: "شاي بخار",
    desc: "شاي قوي وغني بمذاق حاضر وتكوينه المركزة",
    price: "8",
    image: teaBukhar,
  },
  {
    name: "شاي تلقيمة",
    desc: "شاي خفيف ولطيف بمذاق رقيق الفاتح وطعمه الناعم",
    price: "8",
    image: teaTakleema,
  },
  {
    name: "شاي بالحليب",
    desc: "أوراق شاي مختارة بعناية مع حليب طازج كامل الدسم",
    price: "10",
  },
  {
    name: "شاي كرك",
    desc: "مزيج فاخر من الشاي والتوابل، طعم غني وقوام كريمي",
    price: "12",
    image: teaKarak,
  },
  {
    name: "شاي نعناع",
    desc: "أوراق نعناع طبيعية، يدعم الهضم وينعش الجسم",
    price: "8",
    image: teaMint,
  },
  {
    name: "شاي طبيعي",
    desc: "أجود أنواع الشاي الطبيعي، طعم غني ومنعش",
    price: "10",
  },
  {
    name: "زنجبيل",
    desc: "زنجبيل طبيعي طازج يدعم المناعة ويعزز النشاط",
    price: "10",
  },
  {
    name: "حليب زنجبيل طبيعي",
    desc: "دفء طبيعي وفائدة كل يوم، مكونات طبيعية بدون إضافات صناعية",
    price: "12",
    image: gingerMilk,
  },
]
 
// 2) قهوة اليوم
const coffeeItems: Item[] = [
  {
    name: "قهوة",
    desc: "محضرة من أجود حبوب القهوة المختارة بعناية",
    price: "12",
    image: coffeeToday,
  },
  {
    name: "قهوة سعودية أصيلة",
    desc: "قهوة عربية أصيلة بطعم غني ورائحة زكية",
    price: "15",
  },
]
 
// 3) المشروبات الباردة
const coldDrinkItems: Item[] = [
  {
    name: "كركديه",
    desc: "طبيعي 100%، بدون ألوان صناعية أو نكهات مضافة، غني بمضادات الأكسدة",
    price: "12",
    image: kerkadeh,
  },
  {
    name: "موهيتو الكرز",
    desc: "كرز أحمر طبيعي مع نعناع طازج وثلج — رشفة واحدة وكأنك في يوم صيفي مثالي",
    price: "15",
    image: mojitoCherry,
  },
  {
    name: "موهيتو التوت الأحمر",
    desc: "توت أحمر طبيعي مع نعناع طازج وثلج، منعش وغني بطعم لا يُنسى",
    price: "15",
    image: mojitoRedBerry,
  },
  {
    name: "موهيتو باشن فروت",
    desc: "باشن فروت طبيعي مع نعناع طازج وثلج، انتعش بطعم مختلف",
    price: "15",
    image: mojitoPassion,
  },
]
 
// 4) الشباتي
const shabatiItems: Item[] = [
  {
    name: "شباتي جبن وحلاوة طحينية",
    desc: "شباتي طازج يومياً محضر على الطاوة، مع جبن طبيعي طازج وحلاوة طحينية فاخرة",
    price: "15",
    image: shabatiCheeseHalawa,
  },
  {
    name: "شباتي بيض",
    desc: "شباتي طازج محشو بالبيض، خفيف ولذيذ",
    price: "6",
    image: shabatiEgg,
  },
]
 
// 5) الفطائر
const fatayerItems: Item[] = [
  {
    name: "زعتر باللبنة",
    desc: "زعتر فاخر وطازج مع لبنة كريمية غنية وزيت زيتون بكر ممتاز",
    price: "12",
    image: fatiraZaatarLabneh,
  },
  {
    name: "لبنة",
    desc: "لبنة طازجة كريمية على خبز طازج مخبوز يومياً",
    price: "10",
    image: fatiraLabneh,
  },
  {
    name: "جبن سائل",
    desc: "جبن سائل كريمي طبيعي على خبز طازج مخبوز يومياً",
    price: "12",
    image: fatiraCheese,
  },
  {
    name: "بيض وجبن",
    desc: "مزيج شهي من البيض الطازج والجبن السائل الكريمي",
    price: "12",
    image: fatiraEggCheese,
  },
  {
    name: "نقانق وجبن",
    desc: "نقانق طازجة مختارة مع جبن سائل كريمي على خبز مخبوز يومياً",
    price: "14",
    image: fatiraSausageCheese,
  },
  {
    name: "جبن حلوم",
    desc: "جبن حلوم طبيعي مشوي على خبز طازج مخبوز يومياً",
    price: "14",
    image: fatiraHalloumi,
  },
  {
    name: "تونة",
    desc: "تونة طازجة مختارة مع توابل طبيعية على خبز مخبوز يومياً",
    price: "14",
    image: fatiraTuna,
  },
]
 
// 6) الحلويات
const sweetsItems: Item[] = [
  {
    name: "سبوسة",
    desc: "سميد فاخر بسمنة طبيعية ١٠٠٪، مغموسة بالقطر الخفيف ومزيّنة بالفستق الطازج",
    price: "10",
    image: sabousa,
  },
]
 
// 7) مجلس شاي هام
const majlisItems = [
  { name: "مجلس الشاي", image: majlisTea },
  { name: "مجلس القهوة", image: majlisCoffee },
]
 
/* ───────────────────────── Intro / splash ───────────────────────── */
 
const splashCss = `
.sh-splash{position:fixed;inset:0;z-index:100;display:flex;align-items:center;justify-content:center;
  background:var(--bg-warm);cursor:pointer;transition:opacity .45s ease}
.sh-splash[data-leaving="true"]{opacity:0;pointer-events:none}
.sh-splash-logo{width:min(86vw,460px);height:auto;
  animation:sh-reveal 1.25s cubic-bezier(.65,0,.25,1) .15s both}
@keyframes sh-reveal{
  from{clip-path:inset(0 0 0 100%);transform:scale(.97)}
  to{clip-path:inset(0 0 0 0);transform:scale(1)}}
.sh-splash:focus-visible{outline:3px solid var(--gold);outline-offset:-6px}
@media (prefers-reduced-motion:reduce){.sh-splash-logo{animation:none}}
`
 
function Splash({ onDone }: { onDone: () => void }) {
  const [leaving, setLeaving] = useState(false)
 
  // hold the logo on screen, then fade out
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const t = window.setTimeout(() => setLeaving(true), reduce ? 900 : 2300)
    return () => window.clearTimeout(t)
  }, [])
 
  // remove from the page once the fade has finished
  useEffect(() => {
    if (!leaving) return
    const t = window.setTimeout(onDone, 450)
    return () => window.clearTimeout(t)
  }, [leaving, onDone])
 
  // no scrolling behind the intro
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [])
 
  return (
    <div
      className="sh-splash"
      data-leaving={leaving}
      role="button"
      tabIndex={0}
      aria-label="الدخول إلى قائمة شاي هام"
      onClick={() => setLeaving(true)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " " || e.key === "Escape") {
          e.preventDefault()
          setLeaving(true)
        }
      }}
    >
      <style>{splashCss}</style>
      <img
        src={logoImg}
        alt="شاي هام — نفهم مزاجك"
        className="sh-splash-logo"
      />
    </div>
  )
}
 
/* ───────────────────────── App ───────────────────────── */
 
export default function App() {
  const [showSplash, setShowSplash] = useState(true)
  const closeSplash = useCallback(() => setShowSplash(false), [])
 
  return (
    <div
      className="min-h-screen w-full"
      style={{ background: "var(--bg)" }}
      dir="rtl"
      lang="ar"
    >
      {showSplash && <Splash onDone={closeSplash} />}
 
      {/* ── Hero ── */}
      <header
        className="relative overflow-hidden flex flex-col items-center justify-center text-center px-6 pt-14 pb-10"
        style={{ background: "var(--bg-warm)" }}
      >
        {/* Transparent logo — it already contains "نفهم مزاجك", so no extra tagline */}
        <img
          src={logoImg}
          alt="شاي هام — نفهم مزاجك"
          width={360}
          height={275}
          className="relative z-10 mx-auto h-auto"
          style={{ width: "min(78vw, 360px)" }}
        />
 
        <div className="relative z-10 mt-6 flex items-center gap-2">
          <div
            className="w-10 h-px"
            style={{ background: "var(--maroon)", opacity: 0.3 }}
          />
          <div
            className="w-2 h-2 rotate-45"
            style={{ background: "var(--gold)" }}
          />
          <div
            className="w-10 h-px"
            style={{ background: "var(--maroon)", opacity: 0.3 }}
          />
        </div>
      </header>
 
      {/* ── About strip ── */}
      <section
        className="px-6 py-5 text-center"
        style={{ background: "var(--maroon)" }}
      >
        <p
          className="font-display text-lg text-white leading-relaxed"
          style={{ letterSpacing: "0.02em" }}
        >
          تجربة شاي فاخرة&nbsp;·&nbsp;مكونات طبيعية مختارة بعناية
        </p>
      </section>
 
      {/* ── Menu ── */}
      <main className="mx-auto max-w-md px-5 py-8">
        <MenuSection
          id="hot-drinks"
          title="المشروبات الحارة"
          banner={bannerHotDrinks}
          items={hotDrinkItems}
          eager
        />
        <MenuSection
          id="coffee-today"
          title="قهوة اليوم"
          banner={bannerCoffee}
          items={coffeeItems}
        />
        <MenuSection
          id="cold-drinks"
          title="المشروبات الباردة"
          banner={bannerColdDrinks}
          items={coldDrinkItems}
        />
        <MenuSection
          id="shabati"
          title="الشباتي"
          banner={bannerShabati}
          items={shabatiItems}
        />
        <MenuSection
          id="fatayer"
          title="الفطائر"
          banner={bannerFatayer}
          items={fatayerItems}
        />
        <MenuSection
          id="sweets"
          title="الحلويات"
          banner={bannerSweets}
          items={sweetsItems}
        />
 
        {/* ── مجلس شاي هام ── */}
        <section id="majlis" className="mb-4" aria-label="مجلس شاي هام">
          <CategoryHeader ar="مجلس شاي هام" />
          <div className="grid gap-5">
            {majlisItems.map((m) => (
              <figure
                key={m.name}
                className="rounded-2xl px-4 pt-6 pb-5 text-center"
                style={{
                  background: "#fff",
                  border: "1px solid var(--divider)",
                  boxShadow: "0 4px 24px rgba(107,20,20,0.10)",
                }}
              >
                <img
                  src={m.image}
                  alt={m.name}
                  loading="lazy"
                  decoding="async"
                  className="mx-auto w-full object-contain"
                  style={{ maxHeight: 260 }}
                />
                <figcaption
                  className="font-display text-xl font-bold mt-4"
                  style={{ color: "var(--maroon)" }}
                >
                  {m.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>
 
      {/* ── Footer ── */}
      <footer
        className="relative overflow-hidden px-6 pt-10 pb-8 text-center"
        style={{
          background: "var(--bg-warm)",
          borderTop: "3px solid var(--gold)",
        }}
      >
        <div className="relative z-10">
          {/* Transparent logo */}
          <img
            src={logoImg}
            alt="شاي هام — نفهم مزاجك"
            width={260}
            height={198}
            loading="lazy"
            className="mx-auto h-auto"
            style={{ width: "min(70vw, 260px)" }}
          />
 
          <div className="mt-6">
            <OrnamentalDivider />
          </div>
 
          {/* Info rows */}
          <div className="mt-6 space-y-3" style={{ color: "var(--maroon)" }}>
            <div className="flex items-center justify-center gap-2">
              <ClockIcon />
              <p className="text-sm font-semibold">٢٤ ساعة</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <PinIcon />
              <p className="text-sm font-semibold">
                حي الشفا – طريق الإمام مالك
              </p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <WhatsAppIcon />
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                dir="ltr"
                className="text-sm font-semibold tabular-nums"
                style={{ unicodeBidi: "isolate", color: "var(--maroon)" }}
              >
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
 
          {/* Social icons — same size, same outline, same spacing */}
          <div className="flex justify-center gap-4 mt-7">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
                className="flex items-center justify-center rounded-full"
                style={{
                  width: 46,
                  height: 46,
                  color: "var(--maroon)",
                  background: "rgba(255,255,255,0.55)",
                  border: "1px solid rgba(200,135,26,0.55)",
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
          <p
            dir="ltr"
            className="mt-3 text-sm font-semibold"
            style={{ color: "var(--maroon)" }}
          >
            @shayhaam
          </p>
 
          <div className="mt-7 flex justify-center">
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-px"
                style={{ background: "var(--gold)", opacity: 0.5 }}
              />
              <div
                className="w-2 h-2 rotate-45"
                style={{ background: "var(--gold)" }}
              />
              <div
                className="w-1.5 h-1.5 rotate-45"
                style={{ background: "var(--gold)", opacity: 0.6 }}
              />
              <div
                className="w-2 h-2 rotate-45"
                style={{ background: "var(--gold)" }}
              />
              <div
                className="w-6 h-px"
                style={{ background: "var(--gold)", opacity: 0.5 }}
              />
            </div>
          </div>
 
          <p
            className="mt-4 text-sm font-semibold"
            style={{ color: "var(--maroon)" }}
          >
            شاي هام منذ ١٤٤٠
          </p>
        </div>
      </footer>
    </div>
  )
}
 
