import { useState, useEffect } from "react"

// ── Logo (transparent, no white background) ──
import logoImg from "@/assets/logo_transparent.png"

// ── Section banners (large, one per section — cropped clean photos) ──
import bannerHotTea from "@/assets/menu/banner_hot_tea.jpg"
import bannerCoffee from "@/assets/menu/banner_coffee.jpg"
import bannerColdHibiscus from "@/assets/menu/banner_cold_hibiscus.jpg"
import bannerShabati from "@/assets/menu/banner_shabati.jpg"
import bannerFatayer from "@/assets/menu/banner_fatayer.jpg"
import bannerSweetsCookie from "@/assets/menu/banner_sweets_cookie.jpg"

// ── مجلس شاي هام ──
import majlisShai from "@/assets/menu/majlis_shai.jpg"
import majlisGahwa from "@/assets/menu/majlis_gahwa.jpg"

// ── المشروبات الحارة (أكواب) ──
import talqeemaImg from "@/assets/menu/talqeema.jpg"
import bukharImg from "@/assets/menu/bukhar.jpg"
import karakImg from "@/assets/menu/karak.jpg"
import maghribiImg from "@/assets/menu/maghribi.jpg"
import gingerMilkImg from "@/assets/menu/ginger_milk.jpg"
import naanaaImg from "@/assets/menu/naanaa.jpg"

// ── قهوة اليوم ──
import coffeeHotImg from "@/assets/menu/coffee_hot.jpg"
import coffeeColdImg from "@/assets/menu/coffee_cold.jpg"

// ── المشروبات الباردة ──
import mojitoPassionImg from "@/assets/menu/mojito_passionfruit.jpg"
import mojitoRedBerryImg from "@/assets/menu/mojito_redberry.jpg"
import mojitoCherryImg from "@/assets/menu/mojito_cherry.jpg"
import hibiscusCupImg from "@/assets/menu/hibiscus_cup.jpg"
import icedPeachTeaImg from "@/assets/menu/iced_peach_tea.jpg"
import mojitoBlueberryImg from "@/assets/menu/mojito_blueberry.jpg"

// ── شباتي ──
import shabatiCheeseHoneyImg from "@/assets/menu/shabati_cheese_honey.jpg"
import shabatiTunaImg from "@/assets/menu/shabati_tuna.jpg"
import shabatiEggImg from "@/assets/menu/shabati_egg.jpg"
import shabatiCheeseTahiniImg from "@/assets/menu/shabati_cheese_tahini.jpg"
import shabatiEggShakshukaImg from "@/assets/menu/shabati_egg_shakshuka.jpg"
import shabatiCheeseHalloumiImg from "@/assets/menu/shabati_cheese_halloumi.jpg"
import shabatiCheesePotatoImg from "@/assets/menu/shabati_cheese_potato.jpg"
import shabatiCheeseLiquidImg from "@/assets/menu/shabati_cheese_liquid.jpg"

// ── الفطائر ──
import fatayerLabnaZaatarImg from "@/assets/menu/fatayer_labna_zaatar.jpg"
import fatayerSausageCheeseImg from "@/assets/menu/fatayer_sausage_cheese.jpg"
import fatayerEggCheeseImg from "@/assets/menu/fatayer_egg_cheese.jpg"
import fatayerHalloumiImg from "@/assets/menu/fatayer_halloumi.jpg"
import fatayerTunaImg from "@/assets/menu/fatayer_tuna.jpg"
import fatayerCheeseLiquidImg from "@/assets/menu/fatayer_cheese_liquid.jpg"
import fatayerCheeseSaltyImg from "@/assets/menu/fatayer_cheese_salty.jpg"
import fatayerHoneycombImg from "@/assets/menu/fatayer_honeycomb.jpg"

// ── الحلويات ──
import sabousaImg from "@/assets/menu/sabousa.jpg"
import cookiesImg from "@/assets/menu/cookies.jpg"
import shabouraImg from "@/assets/menu/shaboura.jpg"
import cheesecakeIcecreamImg from "@/assets/menu/cheesecake_icecream.jpg"
import nutsRoyalImg from "@/assets/menu/nuts_royal.jpg"
import nutsTurkishImg from "@/assets/menu/nuts_turkish.jpg"

// ─────────────────────────────────────────────────────────────
// Decorative helpers (unchanged look & feel from the original design)
// ─────────────────────────────────────────────────────────────

function GeometricPattern({
  opacity = 0.12,
  scale = 1,
}: {
  opacity?: number
  scale?: number
}) {
  return (
    <svg
      aria-hidden="true"
      style={{ opacity, transform: `scale(${scale})` }}
      width="80"
      height="200"
      viewBox="0 0 80 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {[0, 24, 48, 72, 96, 120, 144, 168].map((y, i) => (
        <g key={i} transform={`translate(40, ${y + 12})`}>
          <path
            d="M-14 -10 L0 6 L14 -10"
            stroke={i % 2 === 0 ? "#6B1414" : "#C8871A"}
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      ))}
      {[0, 32, 64, 96, 128, 160].map((y, i) => (
        <rect
          key={i}
          x={i % 2 === 0 ? 4 : 6}
          y={y + 8}
          width={i % 2 === 0 ? 14 : 12}
          height={i % 2 === 0 ? 14 : 12}
          fill={i % 2 === 0 ? "#6B1414" : "#C8871A"}
          transform={`rotate(45 ${i % 2 === 0 ? 11 : 12} ${
            y + (i % 2) === 0 ? 15 : 14
          })`}
        />
      ))}
    </svg>
  )
}

function OrnamentalDivider({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-3 my-1">
      <div className="flex-1 h-px" style={{ background: "var(--gold)", opacity: 0.4 }} />
      {label ? (
        <span className="text-xs font-display" style={{ color: "var(--gold)", letterSpacing: "0.08em" }}>
          {label}
        </span>
      ) : (
        <div className="flex gap-1 items-center">
          <div className="w-1.5 h-1.5 rotate-45" style={{ background: "var(--gold)" }} />
          <div className="w-1 h-1 rotate-45" style={{ background: "var(--maroon)" }} />
          <div className="w-1.5 h-1.5 rotate-45" style={{ background: "var(--gold)" }} />
        </div>
      )}
      <div className="flex-1 h-px" style={{ background: "var(--gold)", opacity: 0.4 }} />
    </div>
  )
}

function CategoryHeader({ ar }: { ar: string }) {
  return (
    <div className="mb-6">
      <OrnamentalDivider />
      <div className="flex items-center justify-center gap-3 my-3">
        <DiamondIcon />
        <h2 className="font-display text-2xl font-bold text-center" style={{ color: "var(--maroon)" }}>
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
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="12" height="12" rx="1" fill="var(--gold)" transform="rotate(45 7 7)" />
    </svg>
  )
}

// One big representative photo for the section + a short tagline underneath
function SectionBanner({
  src,
  title,
  tagline,
}: {
  src: string
  title: string
  tagline?: string
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl mb-8" style={{ boxShadow: "0 6px 32px rgba(107,20,20,0.18)" }}>
      <img
        src={src}
        alt={title}
        className="w-full object-cover"
        style={{ height: 260, objectPosition: "center" }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(74,14,14,0.82) 0%, transparent 55%)" }}
      />
      <div className="absolute bottom-0 left-0 right-0 px-5 py-5 text-center">
        <p className="font-display text-2xl font-bold text-white mb-1">{title}</p>
        {tagline && <p className="text-xs text-white opacity-85 leading-relaxed">{tagline}</p>}
      </div>
    </div>
  )
}

// Small square photo (or none) + name/desc + single price — used for every menu row
function SmallItemRow({
  name,
  desc,
  price,
  image,
}: {
  name: string
  desc?: string
  price: string
  image?: string
}) {
  return (
    <div className="py-3.5 flex items-center gap-3" style={{ borderBottom: "1px solid var(--divider)" }}>
      {image && (
        <img
          src={image}
          alt={name}
          className="rounded-xl object-cover shrink-0"
          style={{ width: 64, height: 64, boxShadow: "0 2px 8px rgba(107,20,20,0.15)" }}
        />
      )}
      <div className="flex-1 min-w-0">
        <p className="font-display text-base font-semibold leading-snug" style={{ color: "var(--maroon)" }}>
          {name}
        </p>
        {desc && (
          <p className="text-xs mt-0.5 leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {desc}
          </p>
        )}
      </div>
      <div className="shrink-0 text-left">
        <span className="font-display text-base font-bold tabular-nums" style={{ color: "var(--gold)" }}>
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

// Small square photo (or none) + name/desc + multiple sizes (وسط/كبير/زجاج)
function SmallItemRowSizes({
  name,
  desc,
  sizes,
  image,
}: {
  name: string
  desc?: string
  sizes: { label: string; price: string }[]
  image?: string
}) {
  return (
    <div className="py-3.5 flex items-center gap-3" style={{ borderBottom: "1px solid var(--divider)" }}>
      {image && (
        <img
          src={image}
          alt={name}
          className="rounded-xl object-cover shrink-0"
          style={{ width: 64, height: 64, boxShadow: "0 2px 8px rgba(107,20,20,0.15)" }}
        />
      )}
      <div className="flex-1 min-w-0">
        <p className="font-display text-base font-semibold leading-snug" style={{ color: "var(--maroon)" }}>
          {name}
        </p>
        {desc && (
          <p className="text-xs mt-0.5 leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {desc}
          </p>
        )}
      </div>
      <div className="shrink-0 flex gap-1.5">
        {sizes.map((s) => (
          <div
            key={s.label}
            className="flex flex-col items-center justify-center rounded-lg px-2 py-1"
            style={{ background: "rgba(200,135,26,0.08)", border: "1px solid rgba(200,135,26,0.25)", minWidth: 42 }}
          >
            <span className="text-[9px] leading-none mb-0.5" style={{ color: "var(--text-muted)" }}>
              {s.label}
            </span>
            <span className="font-display text-sm font-bold leading-none tabular-nums" style={{ color: "var(--gold)" }}>
              {s.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// Tabs — order + names exactly as Khaled specified. "المكسرات والفشار" removed,
// its items now live inside "الحلويات".
// ─────────────────────────────────────────────────────────────

const TABS = [
  { id: "hot-cups", label: "المشروبات الحارة (أكواب)" },
  { id: "coffee-today", label: "قهوة اليوم" },
  { id: "cold-drinks", label: "المشروبات الباردة" },
  { id: "shabati", label: "شباتي" },
  { id: "fatayer", label: "الفطائر" },
  { id: "sweets", label: "الحلويات" },
  { id: "majlis", label: "مجلس شاي هام" },
] as const

type TabId = (typeof TABS)[number]["id"]

function TabBar({ active, onChange }: { active: TabId; onChange: (id: TabId) => void }) {
  return (
    <div
      className="sticky top-0 z-20 overflow-x-auto"
      style={{
        background: "var(--bg-warm)",
        borderBottom: "1px solid rgba(200,135,26,0.3)",
        boxShadow: "0 2px 12px rgba(107,20,20,0.08)",
      }}
    >
      <div className="flex gap-2 px-4 py-3 min-w-max">
        {TABS.map((tab) => {
          const isActive = tab.id === active
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onChange(tab.id)}
              className="font-display text-sm font-semibold px-4 py-2 rounded-full whitespace-nowrap"
              style={
                isActive
                  ? { background: "var(--maroon)", color: "#ffffff" }
                  : { background: "rgba(200,135,26,0.08)", color: "var(--maroon)", border: "1px solid rgba(200,135,26,0.3)" }
              }
            >
              {tab.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// Menu data
// ─────────────────────────────────────────────────────────────

const hotCupsItems: {
  name: string
  desc?: string
  sizes: { label: string; price: string }[]
  image?: string
}[] = [
  {
    name: "شاي هام (تلقيمة)",
    desc: "شاي خفيف ولطيف بمذاق رقيق الفاتح وطعمه الناعم",
    sizes: [
      { label: "وسط", price: "5" },
      { label: "كبير", price: "6" },
      { label: "زجاج", price: "8" },
    ],
    image: talqeemaImg,
  },
  {
    name: "شاي بخار",
    desc: "شاي قوي وغني بمذاق حاضر وتكوينه المركزة",
    sizes: [
      { label: "وسط", price: "5" },
      { label: "كبير", price: "6" },
      { label: "زجاج", price: "8" },
    ],
    image: bukharImg,
  },
  {
    name: "كرك",
    desc: "مزيج فاخر من الشاي والتوابل، طعم غني وقوام كريمي",
    sizes: [
      { label: "وسط", price: "6" },
      { label: "كبير", price: "7" },
      { label: "زجاج", price: "9" },
    ],
    image: karakImg,
  },
  {
    name: "نعناع سادة",
    desc: "أوراق نعناع طبيعية، يدعم الهضم وينعش الجسم",
    sizes: [
      { label: "وسط", price: "4" },
      { label: "كبير", price: "5" },
      { label: "زجاج", price: "7" },
    ],
    image: naanaaImg,
  },
  {
    name: "حليب زنجبيل",
    desc: "دفء طبيعي وفائدة كل يوم، مكونات طبيعية بدون إضافات صناعية",
    sizes: [
      { label: "وسط", price: "6" },
      { label: "كبير", price: "7" },
      { label: "زجاج", price: "9" },
    ],
    image: gingerMilkImg,
  },
  {
    name: "شاي مغربي",
    desc: "شاي بنكهة النعناع المغربي الأصيل",
    sizes: [
      { label: "وسط", price: "5" },
      { label: "كبير", price: "6" },
      { label: "زجاج", price: "8" },
    ],
    image: maghribiImg,
  },
]

const coffeeTodayItems: { name: string; desc?: string; sizes: { label: string; price: string }[]; image?: string }[] = [
  {
    name: "قهوة حارة",
    desc: "محضرة من أجود حبوب القهوة المختارة بعناية",
    sizes: [
      { label: "وسط", price: "5" },
      { label: "كبير", price: "7" },
    ],
    image: coffeeHotImg,
  },
  {
    name: "قهوة باردة",
    desc: "قهوة منعشة بمذاق غني وقوام كريمي",
    sizes: [
      { label: "وسط", price: "5" },
      { label: "كبير", price: "7" },
    ],
    image: coffeeColdImg,
  },
]

const coldDrinkItems: { name: string; desc?: string; price: string; image?: string }[] = [
  {
    name: "كركديه بارد",
    desc: "طبيعي 100%، بدون ألوان صناعية أو نكهات مضافة، غني بمضادات الأكسدة",
    price: "14",
    image: hibiscusCupImg,
  },
  { name: "آيس تي خوخ", desc: "شاي مثلج منعش بنكهة الخوخ الطبيعية", price: "14", image: icedPeachTeaImg },
  {
    name: "موهيتو كرز",
    desc: "كرز أحمر طبيعي مع نعناع طازج وثلج — رشفة واحدة وكأنك في يوم صيفي مثالي",
    price: "14",
    image: mojitoCherryImg,
  },
  { name: "موهيتو توت أزرق", desc: "توت أزرق طبيعي مع نعناع طازج وثلج، منعش بطعم مختلف", price: "14", image: mojitoBlueberryImg },
  {
    name: "موهيتو توت أحمر",
    desc: "توت أحمر طبيعي مع نعناع طازج وثلج، منعش وغني بطعم لا يُنسى",
    price: "14",
    image: mojitoRedBerryImg,
  },
  {
    name: "موهيتو باشن فروت",
    desc: "باشن فروت طبيعي مع نعناع طازج وثلج، انتعش بطعم مختلف",
    price: "14",
    image: mojitoPassionImg,
  },
]

// الحلويات — يشمل الآن منتجات "المكسرات والفشار" بعد دمج القسمين
const sweetsItems: { name: string; desc?: string; price: string; image?: string }[] = [
  {
    name: "بسبوسة هام",
    desc: "سميد فاخر بسمنة طبيعية ١٠٠٪، مغموسة بالقطر الخفيف ومزيّنة بالفستق الطازج",
    price: "5",
    image: sabousaImg,
  },
  { name: "كوكيز", desc: "كوكيز طازج مقرمش من الخارج وطري من الداخل", price: "7", image: cookiesImg },
  { name: "تشيزكيك آيس كريم مانجو", desc: "آيس كريمي مع قطع تشيزكيك وصوص مانجو لذيذ", price: "9", image: cheesecakeIcecreamImg },
  { name: "تمر", desc: "تمر فاخر مختار بعناية", price: "3" },
  { name: "فشار", desc: "فشار طازج مقرمش ولذيذ", price: "3" },
  { name: "شابور", desc: "خبز محمص هش بنكهة الأصالة", price: "4", image: shabouraImg },
  { name: "حب ضيافة", desc: "تشكيلة حبوب محمصة للضيافة", price: "3" },
  { name: "حب دوار الشمس", desc: "حب دوار الشمس المحمص", price: "3" },
  { name: "مكسرات ملكي", desc: "تشكيلة مكسرات ملكية فاخرة", price: "5", image: nutsRoyalImg },
  { name: "مكسرات تركي", desc: "تشكيلة مكسرات تركية مشكلة", price: "4", image: nutsTurkishImg },
]

const shabatiItems: { name: string; desc?: string; price: string; image?: string }[] = [
  { name: "بيض", desc: "شباتي طازج محشو بالبيض، خفيف ولذيذ", price: "6", image: shabatiEggImg },
  { name: "شكشوكة", desc: "شكشوكة طازجة بنكهة غنية", price: "6", image: shabatiEggShakshukaImg },
  { name: "جبن", desc: "جبن طبيعي طازج على شباتي محضر على الطاوة", price: "5", image: shabatiCheeseLiquidImg },
  { name: "جبن وطحينية", desc: "جبن طبيعي مع حلاوة طحينية فاخرة", price: "6", image: shabatiCheeseTahiniImg },
  { name: "جبن وعسل", desc: "جبن طبيعي مع عسل نقي", price: "6", image: shabatiCheeseHoneyImg },
  { name: "جبن وبطاطس عمان", desc: "جبن طبيعي مع بطاطس عمان المقرمشة", price: "7", image: shabatiCheesePotatoImg },
  { name: "تونة", desc: "تونة طازجة مختارة مع توابل طبيعية", price: "9", image: shabatiTunaImg },
  { name: "حلومي", desc: "جبن حلوم طبيعي مشوي", price: "9", image: shabatiCheeseHalloumiImg },
  { name: "مقلقل دجاج (صباح)", desc: "دجاج مقلقل طازج، متاح صباحاً", price: "8" },
]

const fatayerItems: { name: string; desc?: string; price: string; image?: string }[] = [
  { name: "فطيرة بيض بالجبن", desc: "بيض طازج مع جبن كريمي على عجينة مخبوزة يومياً", price: "8", image: fatayerEggCheeseImg },
  { name: "فطيرة جبن سائل", desc: "جبن سائل كريمي طبيعي على خبز طازج مخبوز يومياً", price: "7", image: fatayerCheeseLiquidImg },
  { name: "فطيرة جبن مالح", desc: "جبن مالح أصيل على عجينة طازجة", price: "7", image: fatayerCheeseSaltyImg },
  { name: "فطيرة لبنة وزعتر", desc: "لبنة طازجة كريمية مع زعتر فاخر", price: "7", image: fatayerLabnaZaatarImg },
  { name: "فطيرة زعتر وزيت", desc: "زعتر فاخر وطازج مع زيت زيتون بكر ممتاز", price: "7" },
  { name: "فطيرة نقانق بالجبن", desc: "نقانق طازجة مختارة مع جبن سائل كريمي", price: "8", image: fatayerSausageCheeseImg },
  { name: "فطيرة تونة", desc: "تونة طازجة مختارة مع توابل طبيعية", price: "9", image: fatayerTunaImg },
  { name: "فطيرة حلومي", desc: "جبن حلوم طبيعي مشوي على عجينة طازجة", price: "9", image: fatayerHalloumiImg },
  { name: "خلية نحل", desc: "عجينة طرية محشوة على شكل خلية نحل", price: "7", image: fatayerHoneycombImg },
]

// ─────────────────────────────────────────────────────────────
// List renderers — every row can carry a small photo now
// ─────────────────────────────────────────────────────────────

function ItemList({ items }: { items: { name: string; desc?: string; price: string; image?: string }[] }) {
  return (
    <div className="mb-8">
      {items.map((item) => (
        <SmallItemRow key={item.name} name={item.name} desc={item.desc} price={item.price} image={item.image} />
      ))}
    </div>
  )
}

function SizeItemList({
  items,
}: {
  items: { name: string; desc?: string; sizes: { label: string; price: string }[]; image?: string }[]
}) {
  return (
    <div className="mb-8">
      {items.map((item) => (
        <SmallItemRowSizes key={item.name} name={item.name} desc={item.desc} sizes={item.sizes} image={item.image} />
      ))}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// Intro / Splash — shows the (transparent) logo with a simple animation,
// then fades out to reveal the site.
// ─────────────────────────────────────────────────────────────

function Splash({ visible }: { visible: boolean }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        background: "var(--bg-warm)",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.6s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
      aria-hidden={!visible}
    >
      <style>{`
        @keyframes shayhaamLogoIntro {
          0% { opacity: 0; transform: scale(0.75); }
          60% { opacity: 1; transform: scale(1.06); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
      <img
        src={logoImg}
        alt="شعار شاي هام"
        style={{
          width: 260,
          height: 190,
          objectFit: "contain",
          animation: "shayhaamLogoIntro 1.1s ease-out forwards",
        }}
      />
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// App
// ─────────────────────────────────────────────────────────────

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>("hot-cups")
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Splash visible={showSplash} />
      <div className="min-h-screen w-full" style={{ background: "var(--bg)" }} dir="rtl" lang="ar">
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden flex flex-col items-center justify-center text-center px-6 pt-16 pb-12"
        style={{ background: "var(--bg-warm)", minHeight: 440 }}
      >
        <div className="absolute top-0 left-0 h-full flex items-center pointer-events-none">
          <GeometricPattern opacity={0.18} />
        </div>
        <div className="absolute top-0 right-0 h-full flex items-center pointer-events-none" style={{ transform: "scaleX(-1)" }}>
          <GeometricPattern opacity={0.18} />
        </div>

        {/* Logo — transparent, no white background. Tagline "نفهم مزاجك" already
            lives inside this logo image, so it is intentionally NOT repeated below. */}
        <div className="relative z-10 mb-2">
          <img
            src={logoImg}
            alt="شعار شاي هام"
            className="mx-auto object-contain"
            style={{ width: 300, height: 220 }}
          />
        </div>

        <div className="relative z-10 mt-6 flex items-center gap-2">
          <div className="w-10 h-px" style={{ background: "var(--maroon)", opacity: 0.3 }} />
          <div className="w-2 h-2 rotate-45" style={{ background: "var(--gold)" }} />
          <div className="w-10 h-px" style={{ background: "var(--maroon)", opacity: 0.3 }} />
        </div>
      </section>

      {/* ── About strip ── */}
      <section className="px-6 py-5 text-center" style={{ background: "var(--maroon)" }}>
        <p className="font-display text-lg text-white leading-relaxed" style={{ letterSpacing: "0.02em" }}>
          تجربة شاي فاخرة&nbsp;·&nbsp;مكونات طبيعية مختارة بعناية
        </p>
      </section>

      {/* ── Tabs ── */}
      <TabBar active={activeTab} onChange={setActiveTab} />

      {/* ── Menu Content ── */}
      <main className="mx-auto max-w-md px-5 py-8">
        {activeTab === "hot-cups" && (
          <>
            <CategoryHeader ar="المشروبات الحارة (أكواب)" />
            <SectionBanner
              src={bannerHotTea}
              title="المشروبات الحارة"
              tagline="دفء يُرافق لحظاتك.. ونكهة تنتهج مزاجك"
            />
            <SizeItemList items={hotCupsItems} />
          </>
        )}

        {activeTab === "coffee-today" && (
          <>
            <CategoryHeader ar="قهوة اليوم" />
            <SectionBanner src={bannerCoffee} title="قهوة اليوم" tagline="بداية يومك بكوب يليق بك" />
            <SizeItemList items={coffeeTodayItems} />
          </>
        )}

        {activeTab === "cold-drinks" && (
          <>
            <CategoryHeader ar="المشروبات الباردة" />
            <SectionBanner
              src={bannerColdHibiscus}
              title="المشروبات الباردة"
              tagline="مشروبات منعشة بمكونات طبيعية طازجة"
            />
            <ItemList items={coldDrinkItems} />
          </>
        )}

        {activeTab === "shabati" && (
          <>
            <CategoryHeader ar="شباتي" />
            <SectionBanner
              src={bannerShabati}
              title="شباتي طازج يومياً"
              tagline="محضّر على الطاوة بمكونات طازجة كل يوم"
            />
            <ItemList items={shabatiItems} />
            <p className="text-xs text-center mb-10" style={{ color: "var(--text-muted)" }}>
              * إضافة جبن بـ ١ ريال
            </p>
          </>
        )}

        {activeTab === "fatayer" && (
          <>
            <CategoryHeader ar="الفطائر" />
            <SectionBanner
              src={bannerFatayer}
              title="فطائر طازجة يومياً"
              tagline="عجينة طازجة ومكونات مختارة بعناية"
            />
            <ItemList items={fatayerItems} />
          </>
        )}

        {activeTab === "sweets" && (
          <>
            <CategoryHeader ar="الحلويات" />
            <SectionBanner
              src={bannerSweetsCookie}
              title="الحلويات"
              tagline="حلا يليق بلحظاتك.. بمذاق لا يُنسى"
            />
            <ItemList items={sweetsItems} />
          </>
        )}

        {activeTab === "majlis" && (
          <>
            <CategoryHeader ar="مجلس شاي هام" />

            {/* مجلس الشاي — نفس الصورة المرسلة */}
            <div className="relative overflow-hidden rounded-2xl mb-6" style={{ boxShadow: "0 6px 32px rgba(107,20,20,0.18)" }}>
              <img
                src={majlisShai}
                alt="مجلس الشاي"
                className="w-full object-cover"
                style={{ height: 240, objectPosition: "center" }}
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(74,14,14,0.88) 0%, transparent 55%)" }}
              />
              <div className="absolute bottom-0 left-0 right-0 px-5 py-5 text-center">
                <p className="font-display text-xl font-bold text-white mb-1">مجلس الشاي</p>
                <p className="font-display text-2xl font-bold mb-3" style={{ color: "var(--gold-light)" }}>
                  ٢٩ ر.س
                </p>
                <div className="space-y-1.5 text-right max-w-[260px] mx-auto">
                  <div className="flex items-center gap-2">
                    <DiamondIcon />
                    <p className="text-sm text-white">إبريق شاهي (كرك أو نعناع)</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <DiamondIcon />
                    <p className="text-sm text-white">فشار طازج مقرمش ولذيذ</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <DiamondIcon />
                    <p className="text-sm text-white">شابورة بنكهة الأصالة</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="rounded-xl px-4 py-3 mb-6 text-center"
              style={{ background: "rgba(200,135,26,0.15)", border: "1px solid rgba(200,135,26,0.4)" }}
            >
              <p className="font-display text-sm font-bold mb-0.5" style={{ color: "var(--maroon)" }}>
                مجاناً
              </p>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>اختر نوع واحد من المكسرات مجاناً</p>
            </div>

            {/* مجلس القهوة — نفس الصورة المرسلة */}
            <div className="relative overflow-hidden rounded-2xl mb-8" style={{ boxShadow: "0 6px 32px rgba(107,20,20,0.18)" }}>
              <img
                src={majlisGahwa}
                alt="مجلس القهوة"
                className="w-full object-cover"
                style={{ height: 240, objectPosition: "center" }}
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(74,14,14,0.88) 0%, transparent 55%)" }}
              />
              <div className="absolute bottom-0 left-0 right-0 px-5 py-5 text-center">
                <p className="font-display text-xl font-bold text-white mb-1">مجلس القهوة</p>
                <p className="font-display text-2xl font-bold mb-3" style={{ color: "var(--gold-light)" }}>
                  ٢٩ ر.س
                </p>
                <div className="space-y-1.5 text-right max-w-[260px] mx-auto">
                  <div className="flex items-center gap-2">
                    <DiamondIcon />
                    <p className="text-sm text-white">قهوة سعودية أصيلة</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <DiamondIcon />
                    <p className="text-sm text-white">تمر فاخر</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <DiamondIcon />
                    <p className="text-sm text-white">طحينة ناعمة ولذيذة</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <DiamondIcon />
                    <p className="text-sm text-white">بسبوسة طرية وشهية</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="rounded-xl px-4 py-3 mb-10 text-center"
              style={{ background: "rgba(200, 135, 26, 0.08)", border: "1px solid rgba(200, 135, 26, 0.25)" }}
            >
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                عرض مميز لضيافتك أو مناسباتك
              </p>
            </div>
          </>
        )}
      </main>

      {/* ── Footer ── */}
      <footer className="relative overflow-hidden px-6 py-10 text-center" style={{ background: "var(--maroon)" }}>
        <div className="absolute top-0 left-0 opacity-10 pointer-events-none">
          <GeometricPattern opacity={1} />
        </div>
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none" style={{ transform: "scaleX(-1)" }}>
          <GeometricPattern opacity={1} />
        </div>

        <div className="relative z-10">
          {/* Logo — transparent, brightened for visibility on the maroon background */}
          <img
            src={logoImg}
            alt="شعار شاي هام"
            className="mx-auto object-contain mb-4 opacity-90"
            style={{ width: 170, height: 120, filter: "brightness(5)" }}
          />

          <OrnamentalDivider />

          <div className="mt-5 space-y-2">
            <div className="flex items-center justify-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-70" style={{ color: "var(--gold-light)" }}>
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                مفتوح ٢٤ ساعة
              </p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-70" style={{ color: "var(--gold-light)" }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                حي الشفا – طريق الإمام مالك
              </p>
            </div>
            {/* WhatsApp — now a simple outline phone icon, matching the clock/pin style beside it */}
            
              href="https://wa.me/966553299877"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
              dir="ltr"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-70" style={{ color: "var(--gold-light)" }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                +966 55 329 9877
              </p>
            </a>
          </div>

          {/* Social icons row — real accounts, each opens the actual platform */}
          <div className="flex justify-center gap-5 mt-6">
            {/* Snapchat — clean, recognizable ghost outline */}
            
              href="https://www.snapchat.com/add/shayhaam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="سناب شات"
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(200,135,26,0.4)" }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="rgba(255,255,255,0.85)">
                <path d="M12.03 2c3.16 0 5.52 2.3 5.6 5.5.03 1.06-.03 2.02-.14 2.87.1.05.25.08.44.04.32-.06.68-.2 1.06-.2.66 0 1.2.4 1.24 1 .04.62-.44 1.1-1.13 1.5-.14.08-.33.16-.5.24-.28.13-.58.28-.66.44-.06.12-.02.24.08.4.2.32.55.7.6 1.1.03.24-.05.46-.24.62-.24.2-.63.33-1.1.44-.1.02-.2.04-.28.09-.1.06-.13.15-.12.28.02.2.08.46.13.72.06.28.11.55.11.78 0 .38-.27.6-.72.6-.08 0-.17-.01-.27-.02-.22-.03-.46-.09-.68-.14-.24-.06-.47-.11-.65-.11-.12 0-.22.02-.3.07-.32.18-.62.65-.98 1.18-.62.9-1.4 2.02-2.99 2.02s-2.37-1.11-2.99-2.02c-.36-.53-.66-1-.98-1.18a.66.66 0 0 0-.3-.07c-.18 0-.41.05-.65.11-.22.05-.46.11-.68.14-.1.01-.19.02-.27.02-.45 0-.72-.22-.72-.6 0-.23.05-.5.11-.78.05-.26.11-.52.13-.72.01-.13-.02-.22-.12-.28-.08-.05-.18-.07-.28-.09-.47-.11-.86-.24-1.1-.44-.19-.16-.27-.38-.24-.62.05-.4.4-.78.6-1.1.1-.16.14-.28.08-.4-.08-.16-.38-.31-.66-.44-.17-.08-.36-.16-.5-.24-.69-.4-1.17-.88-1.13-1.5.04-.6.58-1 1.24-1 .38 0 .74.14 1.06.2.19.04.34.01.44-.04-.11-.85-.17-1.81-.14-2.87C6.51 4.3 8.87 2 12.03 2z" />
              </svg>
            </a>
            
              href="https://instagram.com/shayhaam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="انستقرام"
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(200,135,26,0.4)" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="1.8">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            
              href="https://www.tiktok.com/@shayhaam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تيك توك"
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(200,135,26,0.4)" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(255,255,255,0.85)">
                <path d="M16.6 5.82A4.28 4.28 0 0 1 15.94 3h-3.13v13.7a2.6 2.6 0 1 1-1.83-2.48V11.1a5.87 5.87 0 1 0 4.96 5.8V9.4a7.4 7.4 0 0 0 4.06 1.21V7.5a4.27 4.27 0 0 1-3.4-1.68z" />
              </svg>
            </a>
          </div>

          <div className="mt-7 flex justify-center">
            <div className="flex items-center gap-2">
              <div className="w-6 h-px" style={{ background: "var(--gold)", opacity: 0.5 }} />
              <div className="w-2 h-2 rotate-45" style={{ background: "var(--gold)" }} />
              <div className="w-1.5 h-1.5 rotate-45" style={{ background: "var(--gold)", opacity: 0.6 }} />
              <div className="w-2 h-2 rotate-45" style={{ background: "var(--gold)" }} />
              <div className="w-6 h-px" style={{ background: "var(--gold)", opacity: 0.5 }} />
            </div>
          </div>

          <p className="mt-4 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            شاي هام © ١٤٤٦
          </p>
        </div>
      </footer>
      </div>
    </>
  )
}
