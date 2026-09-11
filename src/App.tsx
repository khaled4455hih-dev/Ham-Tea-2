import { useState } from "react"
import logoImg from "@/imports/WhatsApp_Image__1448-03-26_at_17.28.39.jpeg"
import zaatarImg from "@/imports/WhatsApp_Image__1448-03-26_at_17.29.55__1_.jpeg"
import sausageCheeseImg from "@/imports/WhatsApp_Image__1448-03-26_at_17.29.55__2_.jpeg"
import eggCheeseImg from "@/imports/WhatsApp_Image__1448-03-26_at_17.29.55__3_.jpeg"
import halloumiImg from "@/imports/WhatsApp_Image__1448-03-26_at_17.29.55__6_.jpeg"
import tunaImg from "@/imports/WhatsApp_Image__1448-03-26_at_17.29.55__7_.jpeg"
import hibiscusImg from "@/imports/WhatsApp_Image__1448-03-26_at_17.29.55__9_.jpeg"
import gingerMilkImg from "@/imports/WhatsApp_Image__1448-03-26_at_17.29.55__10_.jpeg"
import labnaImg from "@/imports/WhatsApp_Image__1448-03-26_at_17.29.55__14_.jpeg"
import cheesePieImg from "@/imports/WhatsApp_Image__1448-03-26_at_17.29.55__15_.jpeg"
import sabousaImg from "@/imports/WhatsApp_Image__1448-03-26_at_17.30.28__1_.jpeg"
import mojitoCherryImg from "@/imports/WhatsApp_Image__1448-03-26_at_17.30.28__2_.jpeg"
import mojitoRedBerryImg from "@/imports/WhatsApp_Image__1448-03-26_at_17.30.28__3_.jpeg"
import mojitoPassionImg from "@/imports/WhatsApp_Image__1448-03-26_at_17.30.28__4_.jpeg"
import shabatiImg from "@/imports/WhatsApp_Image__1448-03-26_at_17.30.28__5_.jpeg"
import teaImg from "@/imports/WhatsApp_Image__1448-03-26_at_17.29.54__2_.jpeg"
import milkTeaImg from "@/imports/WhatsApp_Image__1448-03-26_at_17.29.54__3_.jpeg"
import gingerImg from "@/imports/WhatsApp_Image__1448-03-26_at_17.29.54__4_.jpeg"
import mintImg from "@/imports/WhatsApp_Image__1448-03-26_at_17.29.54__5_.jpeg"
import saudiCoffeeImg from "@/imports/WhatsApp_Image__1448-03-26_at_17.29.54__6_.jpeg"
import karakImg from "@/imports/WhatsApp_Image__1448-03-26_at_17.29.54__7_.jpeg"
import naturalTeaImg from "@/imports/WhatsApp_Image__1448-03-26_at_17.29.54__8_.jpeg"
import coffeeImg from "@/imports/WhatsApp_Image__1448-03-26_at_17.29.54__1_.jpeg"
 
// ─────────────────────────────────────────────────────────────
// Decorative helpers (unchanged look & feel from the original design)
// ─────────────────────────────────────────────────────────────
 
// Geometric pattern from logo: diamonds + chevrons in maroon and gold
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
      {/* Chevron column */}
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
      {/* Diamond column */}
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
          className="font-display text-2xl font-bold text-center"
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
 
// Single-price menu row (used for cold drinks, sweets, shabati, fatayer)
function MenuItem({
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
    <div
      className="py-4 flex items-start justify-between gap-4"
      style={{ borderBottom: "1px solid var(--divider)" }}
    >
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
 
      {image && (
        <img
          src={image}
          alt={name}
          className="w-20 h-20 object-cover rounded-xl shrink-0"
        />
      )}
 
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
 
// Multi-size menu row (used for hot cups + coffee of the day: وسط/كبير/زجاج)
function SizePriceItem({
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
    <div
      className="py-4 flex items-start justify-between gap-3"
      style={{ borderBottom: "1px solid var(--divider)" }}
    >
      <div className="flex-1 min-w-0">
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
 
      {image && (
        <img
          src={image}
          alt={name}
          className="w-16 h-16 object-cover rounded-xl shrink-0"
        />
      )}
 
      <div className="shrink-0 flex gap-1.5">
        {sizes.map((s) => (
          <div
            key={s.label}
            className="flex flex-col items-center justify-center rounded-lg px-2 py-1"
            style={{
              background: "rgba(200,135,26,0.08)",
              border: "1px solid rgba(200,135,26,0.25)",
              minWidth: 42,
            }}
          >
            <span
              className="text-[9px] leading-none mb-0.5"
              style={{ color: "var(--text-muted)" }}
            >
              {s.label}
            </span>
            <span
              className="font-display text-sm font-bold leading-none tabular-nums"
              style={{ color: "var(--gold)" }}
            >
              {s.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
 
function ProductPhoto({
  src,
  alt,
  caption,
}: {
  src: string
  alt: string
  caption: string
}) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl mb-8"
      style={{ boxShadow: "0 4px 24px rgba(107,20,20,0.12)" }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full object-cover"
        style={{ height: 260, objectPosition: "center 20%" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 px-5 py-4"
        style={{
          background:
            "linear-gradient(to top, rgba(74,14,14,0.82) 0%, transparent 100%)",
        }}
      >
        <p className="font-display text-lg font-bold text-white text-center">
          {caption}
        </p>
      </div>
    </div>
  )
}
 
// ─────────────────────────────────────────────────────────────
// Tabs
// ─────────────────────────────────────────────────────────────
 
const TABS = [
  { id: "hot-cups", label: "مشروبات حارة (أكواب)" },
  { id: "coffee-today", label: "قهوة اليوم" },
  { id: "cold-drinks", label: "مشروبات باردة" },
  { id: "sweets", label: "حلويات" },
  { id: "nuts", label: "المكسرات والفشار" },
  { id: "shabati", label: "شباتي" },
  { id: "fatayer", label: "فطائر" },
  { id: "majlis", label: "مجلس شاي هام" },
] as const
 
type TabId = (typeof TABS)[number]["id"]
 
function TabBar({
  active,
  onChange,
}: {
  active: TabId
  onChange: (id: TabId) => void
}) {
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
                  : {
                      background: "rgba(200,135,26,0.08)",
                      color: "var(--maroon)",
                      border: "1px solid rgba(200,135,26,0.3)",
                    }
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
  },
  {
    name: "شاي بخار",
    desc: "شاي قوي وغني بمذاق حاضر وتكوينه المركزة",
    sizes: [
      { label: "وسط", price: "5" },
      { label: "كبير", price: "6" },
      { label: "زجاج", price: "8" },
    ],
  },
  {
    name: "كرك",
    desc: "مزيج فاخر من الشاي والتوابل، طعم غني وقوام كريمي",
    sizes: [
      { label: "وسط", price: "6" },
      { label: "كبير", price: "7" },
      { label: "زجاج", price: "9" },
    ],
  },
  {
    name: "نعناع سادة",
    desc: "أوراق نعناع طبيعية، يدعم الهضم وينعش الجسم",
    sizes: [
      { label: "وسط", price: "4" },
      { label: "كبير", price: "5" },
      { label: "زجاج", price: "7" },
    ],
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
  },
]
 
const coffeeTodayItems: {
  name: string
  desc?: string
  sizes: { label: string; price: string }[]
}[] = [
  {
    name: "قهوة حارة",
    desc: "محضرة من أجود حبوب القهوة المختارة بعناية",
    sizes: [
      { label: "وسط", price: "5" },
      { label: "كبير", price: "7" },
    ],
  },
  {
    name: "قهوة باردة",
    desc: "قهوة منعشة بمذاق غني وقوام كريمي",
    sizes: [
      { label: "وسط", price: "5" },
      { label: "كبير", price: "7" },
    ],
  },
]
 
const coldDrinkItems: { name: string; desc?: string; price: string; image?: string }[] = [
  {
    name: "كركديه بارد",
    desc: "طبيعي 100%، بدون ألوان صناعية أو نكهات مضافة، غني بمضادات الأكسدة",
    price: "14",
  },
  {
    name: "آيس تي خوخ",
    desc: "شاي مثلج منعش بنكهة الخوخ الطبيعية",
    price: "14",
  },
  {
    name: "موهيتو كرز",
    desc: "كرز أحمر طبيعي مع نعناع طازج وثلج — رشفة واحدة وكأنك في يوم صيفي مثالي",
    price: "14",
  },
  {
    name: "موهيتو توت أزرق",
    desc: "توت أزرق طبيعي مع نعناع طازج وثلج، منعش بطعم مختلف",
    price: "14",
  },
  {
    name: "موهيتو توت أحمر",
    desc: "توت أحمر طبيعي مع نعناع طازج وثلج، منعش وغني بطعم لا يُنسى",
    price: "14",
  },
  {
    name: "موهيتو باشن فروت",
    desc: "باشن فروت طبيعي مع نعناع طازج وثلج، انتعش بطعم مختلف",
    price: "14",
  },
]
 
const sweetsItems: { name: string; desc?: string; price: string; image?: string }[] = [
  {
    name: "بسبوسة هام",
    desc: "سميد فاخر بسمنة طبيعية ١٠٠٪، مغموسة بالقطر الخفيف ومزيّنة بالفستق الطازج",
    price: "5",
  },
  { name: "كوكيز", desc: "كوكيز طازج مقرمش من الخارج وطري من الداخل", price: "7" },
  {
    name: "تشيزكيك آيس كريم مانقو",
    desc: "آيس كريمي مع قطع تشيزكيك وصوص مانقو لذيذ",
    price: "9",
  },
  { name: "تمر", desc: "تمر فاخر مختار بعناية", price: "3" },
]
 
// Nuts, popcorn & snack trays — great for sharing or with a majlis tray
const nutsItems: { name: string; desc?: string; price: string; image?: string }[] = [
  { name: "فشار", desc: "فشار طازج مقرمش ولذيذ", price: "3" },
  { name: "شابور", desc: "خبز محمص هش بنكهة الأصالة", price: "4" },
  { name: "حب ضيافة", desc: "تشكيلة حبوب محمصة للضيافة", price: "3" },
  { name: "حب دوار الشمس", desc: "حب دوار الشمس المحمص", price: "3" },
  { name: "مكسرات ملكي", desc: "تشكيلة مكسرات ملكية فاخرة", price: "5" },
  { name: "مكسرات تركي", desc: "تشكيلة مكسرات تركية مشكلة", price: "4" },
]
 
const shabatiItems: { name: string; desc?: string; price: string; image?: string }[] = [
  { name: "بيض", desc: "شباتي طازج محشو بالبيض، خفيف ولذيذ", price: "6" },
  { name: "شكشوكة", desc: "شكشوكة طازجة بنكهة غنية", price: "6" },
  { name: "جبن", desc: "جبن طبيعي طازج على شباتي محضر على الطاوة", price: "5" },
  { name: "جبن وطحينية", desc: "جبن طبيعي مع حلاوة طحينية فاخرة", price: "6" },
  { name: "جبن وعسل", desc: "جبن طبيعي مع عسل نقي", price: "6" },
  { name: "جبن وبطاطس عمان", desc: "جبن طبيعي مع بطاطس عمان المقرمشة", price: "7" },
  { name: "تونة", desc: "تونة طازجة مختارة مع توابل طبيعية", price: "9", image: tunaImg },
  { name: "حلومي", desc: "جبن حلوم طبيعي مشوي", price: "9", image: halloumiImg },
  { name: "مقلقل دجاج (صباح)", desc: "دجاج مقلقل طازج، متاح صباحاً", price: "8" },
]
 
const fatayerItems: { name: string; desc?: string; price: string; image?: string }[] = [
  { name: "فطيرة بيض بالجبن", desc: "بيض طازج مع جبن كريمي على عجينة مخبوزة يومياً", price: "8", image: eggCheeseImg },
  { name: "فطيرة جبن سائل", desc: "جبن سائل كريمي طبيعي على خبز طازج مخبوز يومياً", price: "7", image: cheesePieImg },
  { name: "فطيرة جبن مالح", desc: "جبن مالح أصيل على عجينة طازجة", price: "7" },
  { name: "فطيرة لبنة وزعتر", desc: "لبنة طازجة كريمية مع زعتر فاخر", price: "7", image: labnaImg },
  { name: "فطيرة زعتر وزيت", desc: "زعتر فاخر وطازج مع زيت زيتون بكر ممتاز", price: "7" },
  { name: "فطيرة نقانق بالجبن", desc: "نقانق طازجة مختارة مع جبن سائل كريمي", price: "8", image: sausageCheeseImg },
  { name: "فطيرة تونة", desc: "تونة طازجة مختارة مع توابل طبيعية", price: "9" },
  { name: "فطيرة حلومي", desc: "جبن حلوم طبيعي مشوي على عجينة طازجة", price: "9" },
  { name: "خلية نحل", desc: "عجينة طرية محشوة على شكل خلية نحل", price: "7" },
]
 
// ─────────────────────────────────────────────────────────────
// App
// ─────────────────────────────────────────────────────────────
 
export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>("hot-cups")
 
  return (
    <div
      className="min-h-screen w-full"
      style={{ background: "var(--bg)" }}
      dir="rtl"
      lang="ar"
    >
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden flex flex-col items-center justify-center text-center px-6 pt-16 pb-12"
        style={{ background: "var(--bg-warm)", minHeight: 440 }}
      >
        {/* Decorative pattern left */}
        <div className="absolute top-0 left-0 h-full flex items-center pointer-events-none">
          <GeometricPattern opacity={0.18} />
        </div>
        {/* Decorative pattern right */}
        <div
          className="absolute top-0 right-0 h-full flex items-center pointer-events-none"
          style={{ transform: "scaleX(-1)" }}
        >
          <GeometricPattern opacity={0.18} />
        </div>
 
        {/* Logo */}
        <div className="relative z-10 mb-2">
          <img
            src={logoImg}
            alt="شعار شاي هام"
            className="mx-auto object-contain"
            style={{ width: 220, height: 160 }}
          />
        </div>
 
        {/* Tagline */}
        <p
          className="relative z-10 font-display text-base mt-1"
          style={{ color: "var(--gold)", letterSpacing: "0.04em" }}
        >
          نفهم مزاجك
        </p>
 
        {/* Divider ornament */}
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
      </section>
 
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
 
      {/* ── Tabs ── */}
      <TabBar active={activeTab} onChange={setActiveTab} />
 
      {/* ── Menu Content ── */}
      <main className="mx-auto max-w-md px-5 py-8">
        {activeTab === "hot-cups" && (
          <>
            <CategoryHeader ar="مشروبات حارة (أكواب)" />
 
            <ProductPhoto
              src={teaImg}
              alt="شاي هام"
              caption="شاي طبيعي أصيل"
            />
 
            <div className="mb-2">
              {hotCupsItems.slice(0, 2).map((item) => (
                <SizePriceItem key={item.name} {...item} />
              ))}
            </div>
 
            <div
              className="my-8 overflow-hidden rounded-2xl relative"
              style={{ boxShadow: "0 4px 24px rgba(107,20,20,0.12)" }}
            >
              <img
                src={karakImg}
                alt="كرك"
                className="w-full object-cover"
                style={{ height: 220, objectPosition: "center 25%" }}
              />
              <div
                className="absolute inset-0 flex items-end p-4"
                style={{
                  background:
                    "linear-gradient(to top, rgba(74,14,14,0.7) 0%, transparent 60%)",
                }}
              >
                <p className="font-display text-lg font-bold text-white">
                  شاي كرك فاخر
                </p>
              </div>
            </div>
 
            <div className="mb-2">
              {hotCupsItems.slice(2, 4).map((item) => (
                <SizePriceItem key={item.name} {...item} />
              ))}
            </div>
 
            <div className="my-8 grid grid-cols-2 gap-3">
              <div
                className="overflow-hidden rounded-xl relative"
                style={{ boxShadow: "0 2px 12px rgba(107,20,20,0.1)" }}
              >
                <img
                  src={mintImg}
                  alt="نعناع"
                  className="w-full object-cover"
                  style={{ height: 160, objectPosition: "center 20%" }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-2 text-center"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(74,14,14,0.75) 0%, transparent 100%)",
                  }}
                >
                  <p className="font-display text-sm font-bold text-white">
                    نعناع سادة
                  </p>
                </div>
              </div>
              <div
                className="overflow-hidden rounded-xl relative"
                style={{ boxShadow: "0 2px 12px rgba(107,20,20,0.1)" }}
              >
                <img
                  src={naturalTeaImg}
                  alt="شاي مغربي"
                  className="w-full object-cover"
                  style={{ height: 160, objectPosition: "center 20%" }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-2 text-center"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(74,14,14,0.75) 0%, transparent 100%)",
                  }}
                >
                  <p className="font-display text-sm font-bold text-white">
                    شاي مغربي
                  </p>
                </div>
              </div>
            </div>
 
            <div className="mb-8">
              {hotCupsItems.slice(4).map((item) => (
                <SizePriceItem key={item.name} {...item} />
              ))}
            </div>
 
            <div
              className="mb-2 overflow-hidden rounded-2xl relative"
              style={{ boxShadow: "0 4px 20px rgba(107,20,20,0.14)" }}
            >
              <img
                src={gingerImg}
                alt="دفء طبيعي"
                className="w-full object-cover"
                style={{ height: 200, objectPosition: "center 20%" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(74,14,14,0.78) 0%, transparent 55%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 px-5 py-4 text-center">
                <p className="text-xs text-white opacity-85">
                  استمتع بلحظة دافئة مليئة بالفائدة
                </p>
              </div>
            </div>
          </>
        )}
 
        {activeTab === "coffee-today" && (
          <>
            <CategoryHeader ar="قهوة اليوم" />
 
            <ProductPhoto
              src={coffeeImg}
              alt="قهوة اليوم"
              caption="قهوة بمذاق مختلف"
            />
 
            <div className="mb-4">
              {coffeeTodayItems.map((item) => (
                <SizePriceItem key={item.name} {...item} />
              ))}
            </div>
 
            <div
              className="mb-4 overflow-hidden rounded-xl relative"
              style={{ boxShadow: "0 2px 12px rgba(107,20,20,0.1)" }}
            >
              <img
                src={milkTeaImg}
                alt="تشكيلة القهوة"
                className="w-full object-cover"
                style={{ height: 160, objectPosition: "center 20%" }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-2 text-center"
                style={{
                  background:
                    "linear-gradient(to top, rgba(74,14,14,0.7) 0%, transparent 100%)",
                }}
              >
                <p className="font-display text-sm font-bold text-white">
                  حارة أو باردة، وسط أو كبير
                </p>
              </div>
            </div>
          </>
        )}
 
        {activeTab === "cold-drinks" && (
          <>
            <CategoryHeader ar="مشروبات باردة" />
 
            <div
              className="relative overflow-hidden rounded-2xl mb-8"
              style={{ boxShadow: "0 6px 32px rgba(107,20,20,0.18)" }}
            >
              <img
                src={hibiscusImg}
                alt="كركديه بارد"
                className="w-full object-cover"
                style={{ height: 280, objectPosition: "center 25%" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(74,14,14,0.82) 0%, transparent 50%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 px-5 py-5 text-center">
                <p className="font-display text-2xl font-bold text-white mb-1">
                  كركديه بارد
                </p>
                <p className="text-xs text-white opacity-75">
                  طبيعي ١٠٠٪ · غني بمضادات الأكسدة
                </p>
                <p
                  className="font-display text-xl font-bold mt-2"
                  style={{ color: "var(--gold-light)" }}
                >
                  ١٤ ر.س
                </p>
              </div>
            </div>
 
            <div className="mb-6">
              {coldDrinkItems.slice(0, 2).map((item) => (
                <MenuItem key={item.name} {...item} />
              ))}
            </div>
 
            <div
              className="mb-2 overflow-hidden rounded-2xl relative"
              style={{ boxShadow: "0 4px 24px rgba(107,20,20,0.16)" }}
            >
              <img
                src={mojitoCherryImg}
                alt="موهيتو كرز"
                className="w-full object-cover"
                style={{ height: 280, objectPosition: "center 35%" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(74,14,14,0.84) 0%, transparent 45%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 px-5 py-5 text-center">
                <p className="font-display text-2xl font-bold text-white mb-1">
                  موهيتو كرز
                </p>
                <p className="text-xs text-white opacity-75">انتعش بطعم مختلف</p>
              </div>
            </div>
 
            <div className="mb-6 grid grid-cols-2 gap-3 mt-3">
              <div
                className="overflow-hidden rounded-xl relative"
                style={{ boxShadow: "0 2px 12px rgba(107,20,20,0.12)" }}
              >
                <img
                  src={mojitoRedBerryImg}
                  alt="موهيتو توت أحمر"
                  className="w-full object-cover"
                  style={{ height: 180, objectPosition: "center 35%" }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-2 text-center"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(74,14,14,0.8) 0%, transparent 100%)",
                  }}
                >
                  <p className="font-display text-sm font-bold text-white leading-tight">
                    موهيتو توت أحمر
                  </p>
                </div>
              </div>
              <div
                className="overflow-hidden rounded-xl relative"
                style={{ boxShadow: "0 2px 12px rgba(107,20,20,0.12)" }}
              >
                <img
                  src={mojitoPassionImg}
                  alt="موهيتو باشن فروت"
                  className="w-full object-cover"
                  style={{ height: 180, objectPosition: "center 35%" }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-2 text-center"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(74,14,14,0.8) 0%, transparent 100%)",
                  }}
                >
                  <p className="font-display text-sm font-bold text-white leading-tight">
                    موهيتو باشن فروت
                  </p>
                </div>
              </div>
            </div>
 
            <div className="mb-10">
              {coldDrinkItems.slice(2).map((item) => (
                <MenuItem key={item.name} {...item} />
              ))}
            </div>
          </>
        )}
 
        {activeTab === "sweets" && (
          <>
            <CategoryHeader ar="حلويات" />
 
            <div
              className="relative overflow-hidden rounded-2xl mb-6"
              style={{ boxShadow: "0 6px 32px rgba(107,20,20,0.18)" }}
            >
              <img
                src={sabousaImg}
                alt="بسبوسة هام"
                className="w-full object-cover"
                style={{ height: 280, objectPosition: "center 40%" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(74,14,14,0.82) 0%, transparent 50%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 px-5 py-5 text-center">
                <p className="font-display text-2xl font-bold text-white mb-1">
                  بسبوسة هام
                </p>
                <p className="text-xs text-white opacity-75 mb-2">
                  بداية يومك بطعم يذوب في قلبك
                </p>
                <p
                  className="font-display text-lg font-bold"
                  style={{ color: "var(--gold-light)" }}
                >
                  ٥ ر.س
                </p>
              </div>
            </div>
 
            <div className="mb-10">
              {sweetsItems.slice(1).map((item) => (
                <MenuItem key={item.name} {...item} />
              ))}
            </div>
          </>
        )}
 
        {activeTab === "nuts" && (
          <>
            <CategoryHeader ar="المكسرات والفشار" />
 
            <p
              className="text-xs text-center mb-6 leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              تشكيلة خفيفة تناسب جلستك... فشار طازج ومكسرات وحبوب محمصة
            </p>
 
            <div className="mb-10">
              {nutsItems.map((item) => (
                <MenuItem key={item.name} {...item} />
              ))}
            </div>
          </>
        )}
 
        {activeTab === "shabati" && (
          <>
            <CategoryHeader ar="شباتي" />
 
            <div
              className="relative overflow-hidden rounded-2xl mb-8"
              style={{ boxShadow: "0 6px 32px rgba(107,20,20,0.18)" }}
            >
              <img
                src={shabatiImg}
                alt="شباتي طازج"
                className="w-full object-cover"
                style={{ height: 260, objectPosition: "center 30%" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(74,14,14,0.86) 0%, transparent 50%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 px-5 py-5 text-center">
                <p className="font-display text-xl font-bold text-white mb-1">
                  شباتي طازج يومياً
                </p>
                <p className="text-xs text-white opacity-75">
                  محضّر على الطاوة بمكونات طازجة كل يوم
                </p>
              </div>
            </div>
 
            <div className="mb-4">
              {shabatiItems.map((item) => (
                <MenuItem key={item.name} {...item} />
              ))}
            </div>
 
            <p
              className="text-xs text-center mb-10"
              style={{ color: "var(--text-muted)" }}
            >
              * إضافة جبن بـ ١ ريال
            </p>
          </>
        )}
 
        {activeTab === "fatayer" && (
          <>
            <CategoryHeader ar="فطائر" />
 
            <div
              className="mb-8 overflow-hidden rounded-2xl relative"
              style={{ boxShadow: "0 4px 24px rgba(107,20,20,0.14)" }}
            >
              <img
                src={zaatarImg}
                alt="فطيرة زعتر وزيت"
                className="w-full object-cover"
                style={{ height: 270, objectPosition: "center 30%" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(74,14,14,0.82) 0%, transparent 50%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 px-5 py-5 text-center">
                <p className="font-display text-2xl font-bold text-white mb-1">
                  فطيرة زعتر وزيت
                </p>
                <p className="text-xs text-white opacity-75">
                  نكهة أصيلة... بطعم لا يُقاوم
                </p>
              </div>
            </div>
 
            <div className="mb-10">
              {fatayerItems.map((item) => (
                <MenuItem key={item.name} {...item} />
              ))}
            </div>
          </>
        )}
 
        {activeTab === "majlis" && (
          <>
            <CategoryHeader ar="مجلس شاي هام" />
 
            {/* مجلس الشاي */}
            <div
              className="relative overflow-hidden rounded-2xl mb-4 p-6"
              style={{
                background: "var(--maroon)",
                boxShadow: "0 6px 32px rgba(107,20,20,0.25)",
              }}
            >
              <div className="absolute top-0 left-0 opacity-10 pointer-events-none">
                <GeometricPattern opacity={1} />
              </div>
              <div className="relative z-10 text-center">
                <p className="font-display text-xl font-bold text-white mb-1">
                  مجلس الشاي
                </p>
                <p
                  className="font-display text-3xl font-bold mb-4"
                  style={{ color: "var(--gold-light)" }}
                >
                  ٢٩ ر.س
                </p>
 
                <div className="space-y-2 text-right">
                  <div className="flex items-center gap-2">
                    <DiamondIcon />
                    <p className="text-sm text-white">
                      إبريق شاهي (كرك أو نعناع)
                    </p>
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
 
                <div
                  className="mt-4 rounded-xl px-4 py-3"
                  style={{
                    background: "rgba(200,135,26,0.15)",
                    border: "1px solid rgba(200,135,26,0.4)",
                  }}
                >
                  <p
                    className="font-display text-sm font-bold mb-0.5"
                    style={{ color: "var(--gold-light)" }}
                  >
                    مجاناً
                  </p>
                  <p className="text-xs text-white opacity-90">
                    اختر نوع واحد من المكسرات مجاناً
                  </p>
                </div>
              </div>
            </div>
 
            {/* مجلس القهوة */}
            <div
              className="relative overflow-hidden rounded-2xl mb-8"
              style={{ boxShadow: "0 6px 32px rgba(107,20,20,0.18)" }}
            >
              <img
                src={saudiCoffeeImg}
                alt="مجلس القهوة"
                className="w-full object-cover"
                style={{ height: 240, objectPosition: "center 30%" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(74,14,14,0.88) 0%, transparent 55%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 px-5 py-5 text-center">
                <p className="font-display text-xl font-bold text-white mb-1">
                  مجلس القهوة
                </p>
                <p
                  className="font-display text-2xl font-bold mb-3"
                  style={{ color: "var(--gold-light)" }}
                >
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
              style={{
                background: "rgba(200, 135, 26, 0.08)",
                border: "1px solid rgba(200, 135, 26, 0.25)",
              }}
            >
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                عرض مميز لضيافتك أو مناسباتك
              </p>
            </div>
          </>
        )}
      </main>
 
      {/* ── Footer ── */}
      <footer
        className="relative overflow-hidden px-6 py-10 text-center"
        style={{ background: "var(--maroon)" }}
      >
        {/* Pattern decorations */}
        <div className="absolute top-0 left-0 opacity-10 pointer-events-none">
          <GeometricPattern opacity={1} />
        </div>
        <div
          className="absolute top-0 right-0 opacity-10 pointer-events-none"
          style={{ transform: "scaleX(-1)" }}
        >
          <GeometricPattern opacity={1} />
        </div>
 
        <div className="relative z-10">
          {/* Logo repeat */}
          <img
            src={logoImg}
            alt="شعار شاي هام"
            className="mx-auto object-contain mb-4 opacity-90"
            style={{ width: 140, height: 100, filter: "brightness(5)" }}
          />
 
          <OrnamentalDivider />
 
          <div className="mt-5 space-y-2">
            <div className="flex items-center justify-center gap-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="opacity-70"
                style={{ color: "var(--gold-light)" }}
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <p
                className="text-sm"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                السبت – الخميس: ٧ص – ١١م &nbsp;|&nbsp; الجمعة: ٢م – ١١م
              </p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="opacity-70"
                style={{ color: "var(--gold-light)" }}
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p
                className="text-sm"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                الموقع يُضاف قريباً
              </p>
            </div>
          </div>
 
          {/* Social icons row */}
          <div className="flex justify-center gap-5 mt-6">
            {["instagram", "twitter", "snapchat"].map((platform) => (
              <div
                key={platform}
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(200,135,26,0.4)",
                }}
              >
                {platform === "instagram" && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(255,255,255,0.8)"
                    strokeWidth="1.8"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                )}
                {platform === "twitter" && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="rgba(255,255,255,0.8)"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                )}
                {platform === "snapchat" && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(255,255,255,0.8)"
                    strokeWidth="1.8"
                  >
                    <path d="M12 2C8.5 2 6 4.5 6 8v1.5C5 9.7 4 10.2 4 11c0 .8.7 1.4 1.5 1.5-.2.8-.7 1.5-1.5 2C5.5 15 7 15.5 8 16c.3.5.8 1 1.5 1.5-.5.2-1.5.5-1.5 1s2 1 4 1 4-.5 4-1-1-.8-1.5-1.5c.7-.5 1.2-1 1.5-1.5 1-.5 2.5-1 4-1.5-.8-.5-1.3-1.2-1.5-2 .8-.1 1.5-.7 1.5-1.5 0-.8-1-1.3-2-1.5V8c0-3.5-2.5-6-6-6z" />
                  </svg>
                )}
              </div>
            ))}
          </div>
 
          {/* Closing ornament */}
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
            className="mt-4 text-xs"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            شاي هام © ١٤٤٦
          </p>
        </div>
      </footer>
    </div>
  )
}
 

