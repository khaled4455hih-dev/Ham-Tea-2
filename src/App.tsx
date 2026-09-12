import { useState, useEffect } from "react"
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
import gingerImg from "@/imports/WhatsApp_Image__1448-03-26_at_17.29.54__4_.jpeg"
import mintImg from "@/imports/WhatsApp_Image__1448-03-26_at_17.29.54__5_.jpeg"
import karakImg from "@/imports/WhatsApp_Image__1448-03-26_at_17.29.54__7_.jpeg"
import naturalTeaImg from "@/imports/WhatsApp_Image__1448-03-26_at_17.29.54__8_.jpeg"
import coffeeImg from "@/imports/WhatsApp_Image__1448-03-26_at_17.29.54__1_.jpeg"
 
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
 
// Text-only row (used for items with no dedicated photo) — single price
function MenuItem({ name, desc, price }: { name: string; desc?: string; price: string }) {
  return (
    <div className="py-4 flex items-start justify-between gap-4" style={{ borderBottom: "1px solid var(--divider)" }}>
      <div className="flex-1">
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
 
// Text-only row — multiple sizes (وسط/كبير/زجاج)
function SizePriceItem({
  name,
  desc,
  sizes,
}: {
  name: string
  desc?: string
  sizes: { label: string; price: string }[]
}) {
  return (
    <div className="py-4 flex items-start justify-between gap-3" style={{ borderBottom: "1px solid var(--divider)" }}>
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
 
// Full card used for every item that HAS a dedicated photo:
// clear, centered image on top → name + description → price/sizes below
function ProductCard({
  name,
  desc,
  price,
  sizes,
  image,
}: {
  name: string
  desc?: string
  price?: string
  sizes?: { label: string; price: string }[]
  image: string
}) {
  return (
    <div className="mb-6 overflow-hidden rounded-2xl" style={{ boxShadow: "0 4px 20px rgba(107,20,20,0.14)" }}>
      <img
        src={image}
        alt={name}
        className="w-full object-cover"
        style={{ height: 210, objectPosition: "center" }}
      />
      <div className="p-4" style={{ background: "var(--bg-warm)" }}>
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
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
            {price && (
              <>
                <span className="font-display text-base font-bold tabular-nums" style={{ color: "var(--gold)" }}>
                  {price}
                </span>
                <span className="text-xs mr-0.5" style={{ color: "var(--text-muted)" }}>
                  {" "}
                  ر.س
                </span>
              </>
            )}
            {sizes && (
              <div className="flex gap-1.5">
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
            )}
          </div>
        </div>
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
    image: mintImg,
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
    image: naturalTeaImg,
  },
]
 
const coffeeTodayItems: { name: string; desc?: string; sizes: { label: string; price: string }[] }[] = [
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
    image: hibiscusImg,
  },
  { name: "آيس تي خوخ", desc: "شاي مثلج منعش بنكهة الخوخ الطبيعية", price: "14" },
  {
    name: "موهيتو كرز",
    desc: "كرز أحمر طبيعي مع نعناع طازج وثلج — رشفة واحدة وكأنك في يوم صيفي مثالي",
    price: "14",
    image: mojitoCherryImg,
  },
  { name: "موهيتو توت أزرق", desc: "توت أزرق طبيعي مع نعناع طازج وثلج، منعش بطعم مختلف", price: "14" },
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
  { name: "كوكيز", desc: "كوكيز طازج مقرمش من الخارج وطري من الداخل", price: "7" },
  { name: "تشيزكيك آيس كريم مانجو", desc: "آيس كريمي مع قطع تشيزكيك وصوص مانجو لذيذ", price: "9" },
  { name: "تمر", desc: "تمر فاخر مختار بعناية", price: "3" },
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
// Small helper to render a mixed list: ProductCard for items with a photo,
// MenuItem/SizePriceItem (text row) for items without one.
// ─────────────────────────────────────────────────────────────
 
function ItemList({ items }: { items: { name: string; desc?: string; price: string; image?: string }[] }) {
  return (
    <div className="mb-8">
      {items.map((item) =>
        item.image ? (
          <ProductCard key={item.name} name={item.name} desc={item.desc} price={item.price} image={item.image} />
        ) : (
          <MenuItem key={item.name} name={item.name} desc={item.desc} price={item.price} />
        )
      )}
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
      {items.map((item) =>
        item.image ? (
          <ProductCard key={item.name} name={item.name} desc={item.desc} sizes={item.sizes} image={item.image} />
        ) : (
          <SizePriceItem key={item.name} name={item.name} desc={item.desc} sizes={item.sizes} />
        )
      )}
    </div>
  )
}
 
// ─────────────────────────────────────────────────────────────
// Intro / Splash — shows the logo with a simple animation, then
// fades out to reveal the site.
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
 
        {/* Logo — enlarged. Tagline "نفهم مزاجك" already lives inside this logo image,
            so it is intentionally NOT repeated as separate text below anymore. */}
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
              src={teaImg}
              title="المشروبات الحارة"
              tagline="دفء يُرافق لحظاتك.. ونكهة تنتهج مزاجك"
            />
            <SizeItemList items={hotCupsItems} />
          </>
        )}
 
        {activeTab === "coffee-today" && (
          <>
            <CategoryHeader ar="قهوة اليوم" />
            <SectionBanner src={coffeeImg} title="قهوة اليوم" tagline="بداية يومك بكوب يليق بك" />
            <SizeItemList items={coffeeTodayItems} />
          </>
        )}
 
        {activeTab === "cold-drinks" && (
          <>
            <CategoryHeader ar="المشروبات الباردة" />
            <SectionBanner
              src={hibiscusImg}
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
              src={shabatiImg}
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
              src={zaatarImg}
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
              src={sabousaImg}
              title="الحلويات"
              tagline="حلا يليق بلحظاتك.. بمذاق لا يُنسى"
            />
            <ItemList items={sweetsItems} />
          </>
        )}
 
        {activeTab === "majlis" && (
          <>
            <CategoryHeader ar="مجلس شاي هام" />
 
            {/* مجلس الشاي */}
            <div
              className="relative overflow-hidden rounded-2xl mb-4 p-6"
              style={{ background: "var(--maroon)", boxShadow: "0 6px 32px rgba(107,20,20,0.25)" }}
            >
              <div className="absolute top-0 left-0 opacity-10 pointer-events-none">
                <GeometricPattern opacity={1} />
              </div>
              <div className="relative z-10 text-center">
                <p className="font-display text-xl font-bold text-white mb-1">مجلس الشاي</p>
                <p className="font-display text-3xl font-bold mb-4" style={{ color: "var(--gold-light)" }}>
                  ٢٩ ر.س
                </p>
                <div className="space-y-2 text-right">
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
                <div
                  className="mt-4 rounded-xl px-4 py-3"
                  style={{ background: "rgba(200,135,26,0.15)", border: "1px solid rgba(200,135,26,0.4)" }}
                >
                  <p className="font-display text-sm font-bold mb-0.5" style={{ color: "var(--gold-light)" }}>
                    مجاناً
                  </p>
                  <p className="text-xs text-white opacity-90">اختر نوع واحد من المكسرات مجاناً</p>
                </div>
              </div>
            </div>
 
            {/* مجلس القهوة */}
            <div className="relative overflow-hidden rounded-2xl mb-8" style={{ boxShadow: "0 6px 32px rgba(107,20,20,0.18)" }}>
              <img
                src={gingerImg}
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
          {/* Logo — enlarged slightly */}
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
            <a
              href="https://wa.me/966553299877"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-70" style={{ color: "var(--gold-light)" }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.936.552 3.744 1.507 5.276L2 22l4.845-1.472A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.94 7.94 0 0 1-4.06-1.115l-.29-.172-3.017.917.925-2.995-.19-.307A7.96 7.96 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
              </svg>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                055 329 9877
              </p>
            </a>
          </div>
 
          {/* Social icons row — real accounts, each opens the actual platform */}
          <div className="flex justify-center gap-5 mt-6">
            <a
              href="https://www.snapchat.com/add/shayhaam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="سناب شات"
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(200,135,26,0.4)" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(255,255,255,0.85)">
                <path d="M12 2C8.5 2 6 4.5 6 8v1.5C5 9.7 4 10.2 4 11c0 .8.7 1.4 1.5 1.5-.2.8-.7 1.5-1.5 2C5.5 15 7 15.5 8 16c.3.5.8 1 1.5 1.5-.5.2-1.5.5-1.5 1s2 1 4 1 4-.5 4-1-1-.8-1.5-1.5c.7-.5 1.2-1 1.5-1.5 1-.5 2.5-1 4-1.5-.8-.5-1.3-1.2-1.5-2 .8-.1 1.5-.7 1.5-1.5 0-.8-1-1.3-2-1.5V8c0-3.5-2.5-6-6-6z" />
              </svg>
            </a>
            <a
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
            <a
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
 


