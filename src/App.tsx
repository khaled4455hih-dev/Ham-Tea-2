import { useEffect, useMemo, useState } from "react"
import type { ReactNode } from "react"
 
/* ══════════════════════════════════════════════════
   شاي هَام — المنيو
   • دخولية هادئة بالشعار المفرغ
   • قسم واحد يُعرض في كل مرة
   • صورة كبيرة للقسم ثم وصف القسم تحتها
   • كل صنف: صورة صغيرة + وصف مختصر + زر إضافة
   • سلة طلب + إرسال الطلب عبر واتساب + تسجيل دخول
   ══════════════════════════════════════════════════ */
 
/* ── الشعار ── */
import logoImg from "@/imports/logo-transparent.png"
 
/* ── صور الأقسام (كبيرة) ── */
import secHotImg from "@/imports/sec-hot-drinks.jpg"
import secCoffeeImg from "@/imports/sec-coffee-day.jpg"
import secColdImg from "@/imports/sec-cold-drinks.jpg"
import secShabatiImg from "@/imports/sec-shabati.jpg"
import secFatayerImg from "@/imports/sec-fatayer.jpg"
import secSweetsImg from "@/imports/sec-sweets.jpg"
 
/* ── مشروبات حارة ── */
import teaTalgeemaImg from "@/imports/tea-talgeema.jpg"
import teaBukharImg from "@/imports/tea-bukhar.jpg"
import teaKarakImg from "@/imports/tea-karak.jpg"
import teaMintImg from "@/imports/tea-mint.jpg"
import gingerMilkImg from "@/imports/ginger-milk.jpg"
import teaMaghrabiImg from "@/imports/tea-maghrabi.jpg"
 
/* ── قهوة اليوم ── */
import coffeeHotImg from "@/imports/coffee-hot.jpg"
import coffeeColdImg from "@/imports/coffee-cold.jpg"
 
/* ── مشروبات باردة ── */
import hibiscusImg from "@/imports/hibiscus.jpg"
import mojitoCherryImg from "@/imports/mojito-cherry.jpg"
import mojitoBlueberryImg from "@/imports/mojito-blueberry.jpg"
import mojitoRedberryImg from "@/imports/mojito-redberry.jpg"
import mojitoPassionImg from "@/imports/mojito-passion.jpg"
 
/* ── شباتي ── */
import shabatiEggImg from "@/imports/shabati-egg.jpg"
import shabatiShakshoukaImg from "@/imports/shabati-shakshouka.jpg"
import shabatiCheeseImg from "@/imports/shabati-cheese.jpg"
import shabatiCheeseTahiniImg from "@/imports/shabati-cheese-tahini.jpg"
import shabatiCheeseHoneyImg from "@/imports/shabati-cheese-honey.jpg"
import shabatiCheesePotatoImg from "@/imports/shabati-cheese-potato.jpg"
import shabatiTunaImg from "@/imports/shabati-tuna.jpg"
import shabatiHalloumiImg from "@/imports/shabati-halloumi.jpg"
 
/* ── فطائر ── */
import fatEggCheeseImg from "@/imports/fat-egg-cheese.jpg"
import fatCheeseLiquidImg from "@/imports/fat-cheese-liquid.jpg"
import fatCheeseSaltyImg from "@/imports/fat-cheese-salty.jpg"
import fatLabnehZaatarImg from "@/imports/fat-labneh-zaatar.jpg"
import fatSausageCheeseImg from "@/imports/fat-sausage-cheese.jpg"
import fatTunaImg from "@/imports/fat-tuna.jpg"
import fatHalloumiImg from "@/imports/fat-halloumi.jpg"
import khaliyatNahlImg from "@/imports/khaliyat-nahl.jpg"
 
/* ── حلويات ── */
import basbousaImg from "@/imports/basbousa.jpg"
import cookiesImg from "@/imports/cookies.jpg"
import cheesecakeImg from "@/imports/cheesecake.jpg"
import shaboraImg from "@/imports/shabora.jpg"
import nutsMalakiImg from "@/imports/nuts-malaki.jpg"
import nutsTurkishImg from "@/imports/nuts-turkish.jpg"
 
/* ── المجالس ── */
import majlisTeaImg from "@/imports/majlis-tea.jpg"
import majlisCoffeeImg from "@/imports/majlis-coffee.jpg"
 
/* ══════════════════════════════════════════════════
   بيانات التواصل
   ══════════════════════════════════════════════════ */
const PHONE_DISPLAY = "+966 55 329 9877"
const WHATSAPP_NUMBER = "966553299877"
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`
const SNAPCHAT_URL = "https://www.snapchat.com/add/shayhaam"
const INSTAGRAM_URL = "https://www.instagram.com/shayhaam"
const TIKTOK_URL = "https://www.tiktok.com/@shayhaam"
const ADDRESS = "حي الشفا — طريق الإمام مالك"
const HOURS = "مفتوح ٢٤ ساعة"
const TAGLINE = "تجربة شاي فاخرة · مكونات طبيعية مختارة بعناية"
 
/* ══════════════════════════════════════════════════
   ألوان الهوية
   ══════════════════════════════════════════════════ */
const C = {
  paper: "#F8EFDD",
  sand: "#F3E7CA",
  sandSoft: "#FEF8E7",
  line: "#E4D2A9",
  ink: "#62221F",
  inkSoft: "#8A4A42",
  gold: "#BE8839",
  muted: "#9A8560",
}
 
const GOLD_SOFT = "#E8C98B"
 
/* ══════════════════════════════════════════════════
   البيانات
   ══════════════════════════════════════════════════ */
type Item = {
  name: string
  desc: string
  prices: string[]
  cal?: string
  img?: string
}
 
type Section = {
  id: string
  title: string
  short: string
  blurb: string
  banner: string
  sizes?: string[]
  items: Item[]
  note?: string
}
 
const SECTIONS: Section[] = [
  {
    id: "hot",
    title: "مشروبات حارة (أكواب)",
    short: "مشروبات حارة",
    blurb: "أوراق شاي مختارة بعناية وتحضير على أصوله — وسط وكبير وزجاج.",
    banner: secHotImg,
    sizes: ["وسط", "كبير", "زجاج"],
    items: [
      { name: "شاي هام (تلقيمة)", desc: "خفيف وناعم المذاق", prices: ["5", "6", "8"], cal: "2", img: teaTalgeemaImg },
      { name: "شاي بخار", desc: "مركّز وقوي النكهة", prices: ["5", "6", "8"], cal: "2", img: teaBukharImg },
      { name: "كرك", desc: "شاي وتوابل وحليب", prices: ["6", "7", "9"], cal: "90", img: teaKarakImg },
      { name: "نعناع سادة", desc: "نعناع طبيعي منعش", prices: ["4", "5", "7"], cal: "2", img: teaMintImg },
      { name: "حليب زنجبيل", desc: "دفء وفائدة طبيعية", prices: ["6", "7", "9"], cal: "150", img: gingerMilkImg },
      { name: "شاي مغربي", desc: "عطري بمذاق متوازن", prices: ["5", "6", "8"], cal: "2", img: teaMaghrabiImg },
    ],
  },
  {
    id: "coffee",
    title: "قهوة اليوم",
    short: "قهوة اليوم",
    blurb: "حبوب مختارة ومحمّصة يومياً — بداية يومك بكوب يليق بك.",
    banner: secCoffeeImg,
    sizes: ["وسط", "كبير"],
    items: [
      { name: "قهوة حارة", desc: "حبوب مختارة محمّصة يومياً", prices: ["5", "7"], cal: "10", img: coffeeHotImg },
      { name: "قهوة باردة", desc: "قهوة اليوم على ثلج", prices: ["5", "7"], cal: "10", img: coffeeColdImg },
    ],
  },
  {
    id: "cold",
    title: "المشروبات الباردة",
    short: "المشروبات الباردة",
    blurb: "فواكه ونعناع طازج وثلج — بدون ألوان أو نكهات صناعية.",
    banner: secColdImg,
    sizes: ["كبير"],
    items: [
      { name: "كركديه بارد", desc: "كركديه طبيعي ١٠٠٪", prices: ["14"], cal: "10", img: hibiscusImg },
      { name: "ايس تي خوخ", desc: "شاي مثلج بنكهة الخوخ", prices: ["14"], cal: "35" },
      { name: "موهيتو كرز", desc: "كرز طبيعي ونعناع طازج", prices: ["14"], cal: "35", img: mojitoCherryImg },
      { name: "موهيتو توت أزرق", desc: "توت أزرق ونعناع طازج", prices: ["14"], cal: "35", img: mojitoBlueberryImg },
      { name: "موهيتو توت أحمر", desc: "توت أحمر ونعناع طازج", prices: ["14"], cal: "35", img: mojitoRedberryImg },
      { name: "موهيتو باشن فروت", desc: "باشن فروت ونعناع طازج", prices: ["14"], cal: "35", img: mojitoPassionImg },
    ],
  },
  {
    id: "shabati",
    title: "الشباتي",
    short: "الشباتي",
    blurb: "شباتي طازج يُحضّر على الطاوة بحشوات تناسب كل مزاج.",
    banner: secShabatiImg,
    items: [
      { name: "بيض", desc: "بيض طازج على الطاوة", prices: ["6"], cal: "200", img: shabatiEggImg },
      { name: "شكشوكة", desc: "بيض وطماطم وبهارات", prices: ["6"], cal: "200", img: shabatiShakshoukaImg },
      { name: "جبن", desc: "جبنة طازجة ذائبة", prices: ["5"], cal: "230", img: shabatiCheeseImg },
      { name: "جبن وطحينية", desc: "حلو ومالح في لقمة", prices: ["6"], cal: "230", img: shabatiCheeseTahiniImg },
      { name: "جبن وعسل", desc: "جبن سائل مع عسل", prices: ["6"], cal: "230", img: shabatiCheeseHoneyImg },
      { name: "جبن وبطاطس عمان", desc: "جبن ذائب وبطاطس مقرمشة", prices: ["7"], cal: "240", img: shabatiCheesePotatoImg },
      { name: "تونة", desc: "تونة بتوابل طبيعية", prices: ["9"], cal: "220", img: shabatiTunaImg },
      { name: "حلومي", desc: "حلومي مشوي بطعم مميز", prices: ["9"], cal: "220", img: shabatiHalloumiImg },
      { name: "مقلقل دجاج (صباح)", desc: "دجاج بالبهارات — وجبة صباح", prices: ["8"], cal: "220" },
    ],
    note: "إضافة جبن بريال واحد",
  },
  {
    id: "fatayer",
    title: "الفطائر",
    short: "الفطائر",
    blurb: "عجينة طازجة تُخبز يومياً وحشوات سخية بطعم البيت.",
    banner: secFatayerImg,
    items: [
      { name: "فطيرة بيض بالجبن", desc: "بيض طازج وجبن سائل", prices: ["8"], cal: "220", img: fatEggCheeseImg },
      { name: "فطيرة جبن سائل", desc: "جبن كريمي ذائب", prices: ["7"], cal: "250", img: fatCheeseLiquidImg },
      { name: "فطيرة جبن مالح", desc: "جبن مالح بطعم قوي", prices: ["7"], cal: "220", img: fatCheeseSaltyImg },
      { name: "فطيرة لبنة وزعتر", desc: "لبنة وزعتر وزيت زيتون", prices: ["7"], cal: "260", img: fatLabnehZaatarImg },
      { name: "فطيرة زعتر وزيت", desc: "الكلاسيكية اللي ما تمل", prices: ["7"], cal: "320" },
      { name: "فطيرة نقانق بالجبن", desc: "نقانق مختارة مع الجبن", prices: ["8"], cal: "280", img: fatSausageCheeseImg },
      { name: "فطيرة تونة", desc: "تونة بتوابل طبيعية", prices: ["9"], cal: "200", img: fatTunaImg },
      { name: "فطيرة حلومي", desc: "حلومي مشوي مقرمش", prices: ["9"], cal: "190", img: fatHalloumiImg },
      { name: "خلية نحل", desc: "عجينة طرية مع العسل", prices: ["7"], cal: "250", img: khaliyatNahlImg },
    ],
    note: "خليها بالخبز الحساوي وزيد ريال واحد فقط",
  },
  {
    id: "sweets",
    title: "الحلويات",
    short: "الحلويات",
    blurb: "مخبوزات طازجة ومكسرات مختارة تناسب المجلس والضيافة.",
    banner: secSweetsImg,
    items: [
      { name: "بسبوسة هام", desc: "سميد وسمنة طبيعية وفستق", prices: ["5"], cal: "290", img: basbousaImg },
      { name: "كوكيز", desc: "مخبوز طازج بشوكولاتة فاخرة", prices: ["7"], cal: "297", img: cookiesImg },
      { name: "تشيز كيك ايس كريم", desc: "آيس كريم وصوص مانقو", prices: ["9"], cal: "230", img: cheesecakeImg },
      { name: "شابور", desc: "مقرمشة بنكهة الأصالة", prices: ["4"], cal: "332", img: shaboraImg },
      { name: "فشار", desc: "فشار طازج مقرمش", prices: ["3"], cal: "100" },
      { name: "تمر", desc: "تمر فاخر مختار", prices: ["3"], cal: "270" },
      { name: "حب ضيافة", desc: "محمّص — رفيق المجلس", prices: ["3"], cal: "230" },
      { name: "حب دوار الشمس", desc: "مقرمش وخفيف", prices: ["3"], cal: "150" },
      { name: "مكسرات ملكي", desc: "تشكيلة فاخرة محمّصة", prices: ["5"], cal: "320", img: nutsMalakiImg },
      { name: "مكسرات تركي", desc: "مقرمش بنكهة مميزة", prices: ["4"], cal: "150", img: nutsTurkishImg },
    ],
  },
]
 
const MAJLIS_BLURB = "صينية متكاملة تكفي ضيوفك — بسعر واحد فقط."
 
const MAJLIS = [
  {
    name: "مجلس الشاي",
    price: "29",
    img: majlisTeaImg,
    desc: "إبريق شاي كامل مع مقرمشات المجلس",
    includes: [
      { t: "إبريق شاهي", d: "أو كرك أو نعناع" },
      { t: "فشار طازج", d: "مقرمش ولذيذ" },
      { t: "شابورة", d: "نكهة الأصالة" },
    ],
    bonus: "مجاناً — اختر نوع واحد من المكسرات",
  },
  {
    name: "مجلس القهوة",
    price: "29",
    img: majlisCoffeeImg,
    desc: "دلة قهوة سعودية مع التمر والحلا",
    includes: [
      { t: "قهوة سعودية", d: "أصيلة ولذيذة" },
      { t: "تمر", d: "فاخر" },
      { t: "طحينة", d: "ناعمة ولذيذة" },
      { t: "بسبوسة", d: "طرية وشهية" },
    ],
    bonus: "عرض مميز لضيافتك أو مناسباتك",
  },
]
 
/* ══════════════════════════════════════════════════
   الزخرفة — خفيفة
   ══════════════════════════════════════════════════ */
 
function Diamond({
  size = 9,
  color = C.gold,
  opacity = 1,
}: {
  size?: number
  color?: string
  opacity?: number
}) {
  return (
    <span
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        background: color,
        opacity,
        transform: "rotate(45deg)",
        display: "inline-block",
        borderRadius: 1.5,
      }}
    />
  )
}
 
function DottedRule({ opacity = 0.5 }: { opacity?: number }) {
  return (
    <div className="flex items-center gap-2.5" style={{ opacity }}>
      <span className="flex-1 h-px" style={{ background: C.gold }} />
      <span className="flex items-center gap-1">
        <Diamond size={4} />
        <Diamond size={4} />
        <Diamond size={4} />
      </span>
      <span className="flex-1 h-px" style={{ background: C.gold }} />
    </div>
  )
}
 
function SectionTitle({ title }: { title: string }) {
  return (
    <div>
      <DottedRule />
      <div className="flex items-center justify-center gap-3 my-3">
        <Diamond size={11} />
        <h2 className="sh-title font-bold" style={{ color: C.ink }}>
          {title}
        </h2>
        <Diamond size={11} />
      </div>
      <DottedRule />
    </div>
  )
}
 
/* ══════════════════════════════════════════════════
   الدخولية — هادئة: ظهور ناعم ثم اختفاء
   ══════════════════════════════════════════════════ */
function Splash({ onDone }: { onDone: () => void }) {
  const [leaving, setLeaving] = useState(false)
 
  useEffect(() => {
    const a = setTimeout(() => setLeaving(true), 2300)
    const b = setTimeout(onDone, 3400)
    return () => {
      clearTimeout(a)
      clearTimeout(b)
    }
  }, [onDone])
 
  const skip = () => {
    setLeaving(true)
    setTimeout(onDone, 900)
  }
 
  return (
    <div
      onClick={skip}
      role="button"
      tabIndex={0}
      aria-label="ادخل المنيو"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center cursor-pointer px-8"
      style={{
        background: C.sand,
        opacity: leaving ? 0 : 1,
        transition: "opacity 1100ms ease",
      }}
    >
      <img
        src={logoImg}
        alt="شاي هَام"
        style={{
          width: "min(62vw, 275px)",
          objectFit: "contain",
          animation: "sh-soft 2000ms ease both",
        }}
      />
 
      <span
        aria-hidden="true"
        style={{
          marginTop: 28,
          height: 1,
          background: C.gold,
          opacity: 0.45,
          animation: "sh-line 1600ms ease 600ms both",
        }}
      />
    </div>
  )
}
 
/* ══════════════════════════════════════════════════
   صنف واحد — صورة + وصف مختصر + سعر + إضافة للطلب
   ══════════════════════════════════════════════════ */
function ItemRow({
  item,
  sizes,
  onAdd,
}: {
  item: Item
  sizes?: string[]
  onAdd: (name: string, price: number, size?: string) => void
}) {
  const multi = !!sizes && sizes.length > 1
 
  return (
    <div
      className="flex items-start gap-3.5 p-3"
      style={{
        background: C.sandSoft,
        border: `1px solid ${C.line}`,
        borderRadius: 22,
        marginBottom: 11,
      }}
    >
      {item.img ? (
        <img
          src={item.img}
          alt={item.name}
          className="shrink-0"
          style={{
            width: 78,
            height: 78,
            borderRadius: 20,
            objectFit: "cover",
            objectPosition: "center",
            border: `1px solid ${C.line}`,
          }}
        />
      ) : (
        <div
          className="shrink-0 flex items-center justify-center"
          style={{
            width: 78,
            height: 78,
            borderRadius: 20,
            background: C.sand,
            border: `1px solid ${C.line}`,
          }}
        >
          <Diamond size={11} opacity={0.4} />
        </div>
      )}
 
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between gap-3">
          <p className="font-bold text-[15.5px] leading-snug" style={{ color: C.ink }}>
            {item.name}
          </p>
          {item.cal && (
            <span className="shrink-0 text-[10px]" style={{ color: C.muted }} dir="ltr">
              {item.cal} Cal
            </span>
          )}
        </div>
 
        <p className="mt-1 text-[12.5px]" style={{ color: C.muted }}>
          {item.desc}
        </p>
 
        {multi ? (
          <div className="flex flex-wrap gap-1.5 mt-2.5">
            {sizes!.map((s, i) => (
              <button
                key={s}
                onClick={() => onAdd(item.name, Number(item.prices[i]), s)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] transition-colors"
                style={{
                  background: C.paper,
                  border: `1px solid ${C.line}`,
                  borderRadius: 999,
                  color: C.inkSoft,
                }}
              >
                <span>{s}</span>
                <span className="font-bold" style={{ color: C.gold }}>
                  {item.prices[i]}
                </span>
                <span style={{ color: C.gold, fontWeight: 700, fontSize: 13, lineHeight: 1 }}>+</span>
              </button>
            ))}
          </div>
        ) : (
          <div className="mt-2 flex items-center justify-between gap-3">
            <p>
              <span className="font-bold text-[16px]" style={{ color: C.gold }}>
                {item.prices[0]}
              </span>
              <span className="text-[11px]" style={{ color: C.muted }}>
                {" "}
                ر.س
              </span>
            </p>
            <button
              onClick={() => onAdd(item.name, Number(item.prices[0]))}
              className="px-3.5 py-1.5 text-[12px] font-bold transition-transform active:scale-95"
              style={{
                background: C.ink,
                color: GOLD_SOFT,
                borderRadius: 999,
                border: "none",
              }}
            >
              أضف للطلب
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
 
/* ══════════════════════════════════════════════════
   بطاقة المجلس
   ══════════════════════════════════════════════════ */
function MajlisCard({
  m,
  onAdd,
}: {
  m: (typeof MAJLIS)[number]
  onAdd: (name: string, price: number, size?: string) => void
}) {
  return (
    <article
      style={{
        background: C.sandSoft,
        border: `1px solid ${C.line}`,
        borderRadius: 30,
        overflow: "hidden",
        marginBottom: 22,
      }}
    >
      <div style={{ padding: 10, paddingBottom: 0 }}>
        <div style={{ position: "relative", borderRadius: 24, overflow: "hidden" }}>
          <img
            src={m.img}
            alt={m.name}
            style={{ width: "100%", display: "block", aspectRatio: "6 / 5", objectFit: "cover" }}
          />
          <div
            className="absolute top-3 left-3 flex flex-col items-center justify-center"
            style={{
              width: 74,
              height: 74,
              borderRadius: "50%",
              background: C.ink,
              color: C.sandSoft,
              border: `2px solid ${GOLD_SOFT}`,
            }}
          >
            <span className="text-[10px] opacity-75 leading-none">بس</span>
            <span className="text-[25px] font-bold leading-tight">{m.price}</span>
            <span className="text-[10px] opacity-75 leading-none">ريال</span>
          </div>
        </div>
      </div>
 
      <div className="px-5 pt-5 pb-6">
        <h3 className="text-xl font-bold" style={{ color: C.ink }}>
          {m.name}
        </h3>
        <p className="mt-1.5 text-[13px]" style={{ color: C.muted }}>
          {m.desc}
        </p>
 
        <div className="my-4">
          <DottedRule />
        </div>
 
        <ul className="flex flex-col gap-2.5">
          {m.includes.map((x) => (
            <li key={x.t} className="flex items-start gap-2.5">
              <span className="mt-[7px]">
                <Diamond size={7} />
              </span>
              <span>
                <span className="font-semibold text-[14.5px]" style={{ color: C.ink }}>
                  {x.t}
                </span>
                <span className="text-[12.5px]" style={{ color: C.muted }}>
                  {" — "}
                  {x.d}
                </span>
              </span>
            </li>
          ))}
        </ul>
 
        <div
          className="mt-5 px-4 py-2.5 text-center text-[12.5px]"
          style={{
            background: C.paper,
            border: `1px dashed ${C.line}`,
            borderRadius: 16,
            color: C.inkSoft,
          }}
        >
          {m.bonus}
        </div>
 
        <button
          onClick={() => onAdd(m.name, Number(m.price))}
          className="mt-4 w-full py-2.5 text-[13.5px] font-bold transition-transform active:scale-[0.98]"
          style={{ background: C.ink, color: GOLD_SOFT, borderRadius: 999, border: "none" }}
        >
          أضف للطلب
        </button>
      </div>
    </article>
  )
}
 
/* ══════════════════════════════════════════════════
   الأيقونات
   ══════════════════════════════════════════════════ */
const ICON = "#F6E7C6"
 
function WhatsAppIcon({ c = ICON, s = 21 }: { c?: string; s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill={c} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.17 8.17 0 0 1-1.25-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.25 8.23zm4.52-6.16c-.25-.13-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.54.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.84-.2-.48-.4-.42-.55-.43h-.47c-.16 0-.43.06-.65.31-.22.25-.85.84-.85 2.03s.87 2.35 1 2.51c.12.16 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z" />
    </svg>
  )
}
 
function SnapchatIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={ICON} aria-hidden="true">
      <path d="M12.02 2.5c2.63 0 4.44 1.9 4.55 4.53.03.63.01 1.25-.02 1.87 0 .11.03.18.15.18.22 0 .5-.16.74-.16.43 0 .84.29.84.73 0 .52-.6.75-1.05.9-.36.12-.7.2-.7.53 0 .18.16.5.36.83.7 1.16 1.79 2.02 3.03 2.35.28.08.4.25.36.5-.09.55-1.26.79-2.2.94-.28.04-.35.24-.4.53-.4.24-.1.5-.26.6-.13.09-.32.07-.58.03-.32-.05-.73-.11-1.24-.11-.32 0-.63.03-.93.1-.6.14-1.07.6-1.63 1.02-.6.44-1.25.82-2.22.82s-1.62-.38-2.22-.82c-.56-.42-1.03-.88-1.63-1.02a4.2 4.2 0 0 0-.93-.1c-.51 0-.92.06-1.24.11-.26.04-.45.06-.58-.03-.16-.1-.22-.36-.26-.6-.05-.29-.12-.49-.4-.53-.94-.15-2.11-.39-2.2-.94-.04-.25.08-.42.36-.5 1.24-.33 2.33-1.19 3.03-2.35.2-.33.36-.65.36-.83 0-.33-.34-.41-.7-.53-.45-.15-1.05-.38-1.05-.9 0-.44.41-.73.84-.73.24 0 .52.16.74.16.12 0 .15-.07.15-.18-.03-.62-.05-1.24-.02-1.87C7.58 4.4 9.39 2.5 12.02 2.5z" />
    </svg>
  )
}
 
function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ICON} strokeWidth="1.9" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill={ICON} stroke="none" />
    </svg>
  )
}
 
function TikTokIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill={ICON} aria-hidden="true">
      <path d="M16.6 2h-3.02v13.4a2.32 2.32 0 1 1-2.32-2.32c.17 0 .33.02.49.05v-3.06a5.4 5.4 0 1 0 4.85 5.37V8.9a6.3 6.3 0 0 0 3.7 1.19V7.03a3.44 3.44 0 0 1-3.7-3.35V2z" />
    </svg>
  )
}
 
function ClockIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={GOLD_SOFT} strokeWidth="1.9" aria-hidden="true">
      <circle cx="12" cy="12" r="9.5" />
      <polyline points="12 6.5 12 12 15.8 14" />
    </svg>
  )
}
 
function PinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={GOLD_SOFT} strokeWidth="1.9" aria-hidden="true">
      <path d="M20.5 10c0 6.5-8.5 12.5-8.5 12.5S3.5 16.5 3.5 10a8.5 8.5 0 0 1 17 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
 
function UserIcon({ c = C.ink, s = 16 }: { c?: string; s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="8" r="3.6" />
      <path d="M4.5 20c0-3.6 3.4-6 7.5-6s7.5 2.4 7.5 6" strokeLinecap="round" />
    </svg>
  )
}
 
function BagIcon({ c = GOLD_SOFT, s = 19 }: { c?: string; s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" aria-hidden="true">
      <path d="M4.5 8h15l-1.1 11.2a2 2 0 0 1-2 1.8H7.6a2 2 0 0 1-2-1.8L4.5 8z" strokeLinejoin="round" />
      <path d="M8.8 8V6.2a3.2 3.2 0 0 1 6.4 0V8" strokeLinecap="round" />
    </svg>
  )
}
 
function SocialLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="flex items-center justify-center transition-transform hover:scale-110"
      style={{
        width: 42,
        height: 42,
        borderRadius: "50%",
        background: "rgba(255,255,255,0.07)",
        border: `1px solid rgba(232,201,139,0.32)`,
      }}
    >
      {children}
    </a>
  )
}
 
/* ══════════════════════════════════════════════════
   السلة
   ══════════════════════════════════════════════════ */
type Line = { key: string; name: string; size?: string; price: number; qty: number }
 
function CartDrawer({
  open,
  lines,
  total,
  user,
  onClose,
  onQty,
  onClear,
  onNeedLogin,
}: {
  open: boolean
  lines: Line[]
  total: number
  user: { name: string; phone: string } | null
  onClose: () => void
  onQty: (key: string, delta: number) => void
  onClear: () => void
  onNeedLogin: () => void
}) {
  const sendOrder = () => {
    if (!user) {
      onNeedLogin()
      return
    }
    const body = [
      "طلب جديد من منيو شاي هَام",
      `الاسم: ${user.name}`,
      `الجوال: ${user.phone}`,
      "",
      ...lines.map((l) => `• ${l.qty}× ${l.name}${l.size ? ` (${l.size})` : ""} — ${l.price * l.qty} ر.س`),
      "",
      `الإجمالي: ${total} ر.س`,
    ].join("\n")
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(body)}`, "_blank", "noopener")
  }
 
  return (
    <>
      <div
        onClick={onClose}
        aria-hidden={!open}
        className="fixed inset-0 z-40"
        style={{
          background: "rgba(62,34,31,0.45)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 260ms ease",
        }}
      />
      <aside
        role="dialog"
        aria-label="سلة الطلب"
        className="fixed inset-x-0 bottom-0 z-40 mx-auto w-full max-w-md"
        style={{
          background: C.paper,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          border: `1px solid ${C.line}`,
          transform: open ? "translateY(0)" : "translateY(102%)",
          transition: "transform 320ms cubic-bezier(.2,.8,.25,1)",
          maxHeight: "84vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="flex items-center justify-between px-5 pt-5 pb-3">
          <h3 className="text-[18px] font-bold" style={{ color: C.ink }}>
            سلة الطلب
          </h3>
          <button
            onClick={onClose}
            aria-label="إغلاق"
            className="text-[20px] leading-none px-2"
            style={{ color: C.inkSoft, background: "none", border: "none" }}
          >
            ✕
          </button>
        </div>
 
        <div className="px-5 pb-2">
          <DottedRule />
        </div>
 
        <div className="px-5 overflow-y-auto" style={{ flex: 1 }}>
          {lines.length === 0 ? (
            <p className="py-10 text-center text-[13.5px]" style={{ color: C.muted }}>
              السلة فاضية — اختر من المنيو وأضف للطلب
            </p>
          ) : (
            lines.map((l) => (
              <div
                key={l.key}
                className="flex items-center gap-3 py-3"
                style={{ borderBottom: `1px solid ${C.line}` }}
              >
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-[14.5px]" style={{ color: C.ink }}>
                    {l.name}
                    {l.size && (
                      <span className="text-[12px] font-normal" style={{ color: C.muted }}>
                        {" "}
                        ({l.size})
                      </span>
                    )}
                  </p>
                  <p className="text-[12px] mt-0.5" style={{ color: C.gold, fontWeight: 700 }}>
                    {l.price * l.qty} <span style={{ color: C.muted, fontWeight: 400 }}>ر.س</span>
                  </p>
                </div>
 
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => onQty(l.key, -1)}
                    aria-label="إنقاص"
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      border: `1px solid ${C.line}`,
                      background: C.sandSoft,
                      color: C.ink,
                      fontWeight: 700,
                    }}
                  >
                    −
                  </button>
                  <span className="text-[14px] font-bold" style={{ color: C.ink, minWidth: 18, textAlign: "center" }}>
                    {l.qty}
                  </span>
                  <button
                    onClick={() => onQty(l.key, 1)}
                    aria-label="زيادة"
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      border: `1px solid ${C.line}`,
                      background: C.sandSoft,
                      color: C.ink,
                      fontWeight: 700,
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
 
        <div className="px-5 pt-4 pb-6" style={{ borderTop: `1px solid ${C.line}` }}>
          <div className="flex items-center justify-between mb-3">
            <span className="text-[14px]" style={{ color: C.inkSoft }}>
              الإجمالي
            </span>
            <span className="text-[19px] font-bold" style={{ color: C.gold }}>
              {total} <span className="text-[12px]" style={{ color: C.muted }}>ر.س</span>
            </span>
          </div>
 
          <button
            onClick={sendOrder}
            disabled={lines.length === 0}
            className="w-full flex items-center justify-center gap-2 py-3 text-[14.5px] font-bold transition-transform active:scale-[0.98]"
            style={{
              background: lines.length ? C.ink : C.line,
              color: lines.length ? GOLD_SOFT : C.muted,
              borderRadius: 999,
              border: "none",
            }}
          >
            <WhatsAppIcon s={18} c={lines.length ? GOLD_SOFT : C.muted} />
            إرسال الطلب عبر واتساب
          </button>
 
          {lines.length > 0 && (
            <button
              onClick={onClear}
              className="w-full mt-2 py-2 text-[12.5px]"
              style={{ color: C.muted, background: "none", border: "none" }}
            >
              تفريغ السلة
            </button>
          )}
        </div>
      </aside>
    </>
  )
}
 
/* ══════════════════════════════════════════════════
   تسجيل الدخول
   ══════════════════════════════════════════════════ */
function LoginDialog({
  open,
  onClose,
  onSubmit,
}: {
  open: boolean
  onClose: () => void
  onSubmit: (u: { name: string; phone: string }) => void
}) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const valid = name.trim().length >= 2 && phone.replace(/\D/g, "").length >= 9
 
  if (!open) return null
 
  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center px-4 pb-4 sm:pb-0"
      style={{ background: "rgba(62,34,31,0.5)" }}
      onClick={onClose}
    >
      <div
        onClick={(ev) => ev.stopPropagation()}
        role="dialog"
        aria-label="تسجيل الدخول"
        className="w-full max-w-sm"
        style={{
          background: C.paper,
          border: `1px solid ${C.line}`,
          borderRadius: 28,
          padding: 24,
        }}
      >
        <h3 className="text-[19px] font-bold text-center" style={{ color: C.ink }}>
          تسجيل الدخول
        </h3>
        <p className="mt-1.5 text-center text-[12.5px]" style={{ color: C.muted }}>
          عشان نعرف طلبك ونتواصل معك
        </p>
 
        <div className="my-4">
          <DottedRule />
        </div>
 
        <label className="block text-[12.5px] mb-1.5" style={{ color: C.inkSoft }}>
          الاسم
        </label>
        <input
          value={name}
          onChange={(ev) => setName(ev.target.value)}
          placeholder="اسمك"
          className="w-full px-4 py-2.5 text-[14px] outline-none"
          style={{
            background: C.sandSoft,
            border: `1px solid ${C.line}`,
            borderRadius: 16,
            color: C.ink,
          }}
        />
 
        <label className="block text-[12.5px] mb-1.5 mt-3.5" style={{ color: C.inkSoft }}>
          رقم الجوال
        </label>
        <input
          value={phone}
          onChange={(ev) => setPhone(ev.target.value)}
          placeholder="05x xxx xxxx"
          inputMode="tel"
          dir="ltr"
          className="w-full px-4 py-2.5 text-[14px] outline-none"
          style={{
            background: C.sandSoft,
            border: `1px solid ${C.line}`,
            borderRadius: 16,
            color: C.ink,
            textAlign: "left",
          }}
        />
 
        <button
          disabled={!valid}
          onClick={() => onSubmit({ name: name.trim(), phone: phone.trim() })}
          className="w-full mt-5 py-3 text-[14.5px] font-bold transition-transform active:scale-[0.98]"
          style={{
            background: valid ? C.ink : C.line,
            color: valid ? GOLD_SOFT : C.muted,
            borderRadius: 999,
            border: "none",
          }}
        >
          دخول
        </button>
 
        <button
          onClick={onClose}
          className="w-full mt-2 py-2 text-[12.5px]"
          style={{ color: C.muted, background: "none", border: "none" }}
        >
          لاحقاً
        </button>
      </div>
    </div>
  )
}
 
/* ══════════════════════════════════════════════════
   التطبيق
   ══════════════════════════════════════════════════ */
const TABS = [
  ...SECTIONS.map((s) => ({ id: s.id, label: s.short })),
  { id: "majlis", label: "المجالس" },
]
 
export default function App() {
  const [entered, setEntered] = useState(false)
  const [active, setActive] = useState(SECTIONS[0].id)
  const [lines, setLines] = useState<Line[]>([])
  const [cartOpen, setCartOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const [user, setUser] = useState<{ name: string; phone: string } | null>(null)
 
  useEffect(() => {
    document.body.style.overflow = entered ? "" : "hidden"
    return () => {
      document.body.style.overflow = ""
    }
  }, [entered])
 
  const count = useMemo(() => lines.reduce((n, l) => n + l.qty, 0), [lines])
  const total = useMemo(() => lines.reduce((n, l) => n + l.qty * l.price, 0), [lines])
 
  const add = (name: string, price: number, size?: string) => {
    const key = size ? `${name}::${size}` : name
    setLines((prev) => {
      const i = prev.findIndex((l) => l.key === key)
      if (i === -1) return [...prev, { key, name, size, price, qty: 1 }]
      const next = [...prev]
      next[i] = { ...next[i], qty: next[i].qty + 1 }
      return next
    })
  }
 
  const changeQty = (key: string, delta: number) => {
    setLines((prev) =>
      prev
        .map((l) => (l.key === key ? { ...l, qty: l.qty + delta } : l))
        .filter((l) => l.qty > 0)
    )
  }
 
  const pick = (id: string) => {
    setActive(id)
    const el = document.getElementById("sh-content")
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 74
      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" })
    }
  }
 
  const section = SECTIONS.find((s) => s.id === active)
 
  return (
    <div
      className="min-h-screen w-full"
      style={{ background: C.paper, color: C.ink }}
      dir="rtl"
      lang="ar"
    >
      <style>{`
        @keyframes sh-soft { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:none} }
        @keyframes sh-line { from{width:0;opacity:0} to{width:150px;opacity:.45} }
        @keyframes sh-in   { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:none} }
        @keyframes sh-pop  { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:none} }
        .sh-panel { animation: sh-in 420ms ease both; }
        .sh-bar   { animation: sh-pop 300ms ease both; }
        @media (prefers-reduced-motion: reduce) {
          *,*::before,*::after { animation-duration:.01ms !important; transition-duration:.01ms !important; }
        }
        #sh-tabs::-webkit-scrollbar { display:none; }
        input::placeholder { color: ${C.muted}; opacity: .7; }
 
        /* ── الاستجابة لجميع الأحجام ── */
        .sh-wrap { width:100%; max-width:448px; margin-inline:auto; }
        .sh-title { font-size: clamp(19px, 5.4vw, 25px); }
        @media (min-width: 768px) {
          .sh-wrap  { max-width: 760px; }
          .sh-nav   { flex-wrap: wrap; justify-content: center; overflow: visible; }
          .sh-grid  { display:grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 12px; align-items: start; }
          .sh-grid > * { margin-bottom: 0 !important; }
          .sh-banner{ max-width: 560px; margin-inline: auto; }
          .sh-head  { padding-top: 60px; padding-bottom: 48px; }
        }
        @media (min-width: 1120px) {
          .sh-wrap { max-width: 880px; }
        }
      `}</style>
 
      {!entered && <Splash onDone={() => setEntered(true)} />}
 
      {/* ══ الترويسة — الشعار مفرغ بدون صندوق ══ */}
      <header className="sh-head relative flex flex-col items-center text-center px-6 pt-12 pb-9" style={{ background: C.sand }}>
        {/* تسجيل الدخول */}
        <button
          onClick={() => (user ? setUser(null) : setLoginOpen(true))}
          className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-semibold"
          style={{
            background: "transparent",
            border: `1px solid ${C.line}`,
            borderRadius: 999,
            color: C.inkSoft,
          }}
        >
          <UserIcon c={C.inkSoft} s={14} />
          {user ? user.name : "تسجيل دخول"}
        </button>
 
        <img
          src={logoImg}
          alt="شاي هَام — نفهم مزاجك"
          style={{ width: "min(56vw, 215px)", objectFit: "contain", display: "block" }}
        />
 
        <div className="mt-6 flex items-center gap-3" style={{ width: "min(62%, 190px)" }}>
          <span className="flex-1 h-px" style={{ background: C.gold, opacity: 0.45 }} />
          <Diamond size={8} />
          <span className="flex-1 h-px" style={{ background: C.gold, opacity: 0.45 }} />
        </div>
      </header>
 
      {/* ══ شريط التعريف ══ */}
      <div className="px-6 py-4 text-center" style={{ background: C.ink }}>
        <p className="sh-wrap text-[14px] leading-relaxed" style={{ color: "#FFFFFF" }}>
          {TAGLINE}
        </p>
      </div>
 
      {/* ══ تبويب الأقسام ══ */}
      <nav
        className="sticky top-0 z-30"
        style={{
          background: "rgba(248,239,221,0.95)",
          backdropFilter: "blur(8px)",
          borderBottom: `1px solid ${C.line}`,
        }}
      >
        <div
          id="sh-tabs"
          className="sh-wrap sh-nav flex gap-2 overflow-x-auto px-4 py-3"
          style={{ scrollbarWidth: "none" }}
        >
        {TABS.map((t) => {
          const on = active === t.id
          return (
            <button
              key={t.id}
              onClick={() => pick(t.id)}
              aria-current={on ? "page" : undefined}
              className="shrink-0 text-[13.5px] font-semibold transition-colors"
              style={{
                padding: "7px 15px",
                borderRadius: 999,
                background: on ? C.ink : "transparent",
                color: on ? GOLD_SOFT : C.inkSoft,
                border: `1px solid ${on ? C.ink : C.line}`,
              }}
            >
              {t.label}
            </button>
          )
        })}
        </div>
      </nav>
 
      {/* ══ القسم المختار ══ */}
      <main
        id="sh-content"
        className="sh-wrap px-4 pt-7"
        style={{ paddingBottom: count > 0 ? 110 : 48 }}
      >
        {section ? (
          <div key={section.id} className="sh-panel">
            <SectionTitle title={section.title} />
 
            {/* صورة القسم الكبيرة */}
            <div
              className="sh-banner mt-5"
              style={{
                background: C.sandSoft,
                border: `1px solid ${C.line}`,
                borderRadius: 34,
                padding: 10,
              }}
            >
              <img
                src={section.banner}
                alt={section.title}
                style={{
                  width: "100%",
                  display: "block",
                  aspectRatio: "4 / 3",
                  objectFit: "cover",
                  borderRadius: 26,
                }}
              />
            </div>
 
            {/* وصف القسم — تحت الصورة */}
            <p className="mt-4 text-center text-[13.5px] leading-relaxed" style={{ color: C.inkSoft }}>
              {section.blurb}
            </p>
 
            <div className="sh-grid mt-6">
              {section.items.map((it) => (
                <ItemRow key={it.name} item={it} sizes={section.sizes} onAdd={add} />
              ))}
            </div>
 
            {section.note && (
              <p className="mt-3 text-center text-[12.5px]" style={{ color: C.muted }}>
                * {section.note}
              </p>
            )}
          </div>
        ) : (
          <div key="majlis" className="sh-panel">
            <SectionTitle title="المجالس" />
 
            <p className="mt-5 mb-5 text-center text-[13.5px] leading-relaxed" style={{ color: C.inkSoft }}>
              {MAJLIS_BLURB}
            </p>
 
            <div className="sh-grid">
              {MAJLIS.map((m) => (
                <MajlisCard key={m.name} m={m} onAdd={add} />
              ))}
            </div>
          </div>
        )}
      </main>
 
      {/* ══ الفوتر — زخرفة خفيفة ══ */}
      <footer className="relative overflow-hidden" style={{ background: C.ink, color: C.sandSoft }}>
        <div className="sh-wrap relative px-6 pt-10 pb-9 text-center">
          <div
            className="mx-auto"
            style={{
              width: "fit-content",
              background: C.sandSoft,
              borderRadius: 22,
              padding: "16px 22px",
            }}
          >
            <img
              src={logoImg}
              alt="شاي هَام"
              style={{ width: "min(40vw, 150px)", objectFit: "contain", display: "block" }}
            />
          </div>
 
          {/* خط رفيع بمعينين */}
          <div className="mt-7 flex items-center gap-3">
            <span className="flex-1 h-px" style={{ background: "rgba(232,201,139,0.35)" }} />
            <Diamond size={7} color={GOLD_SOFT} />
            <Diamond size={7} color={GOLD_SOFT} />
            <span className="flex-1 h-px" style={{ background: "rgba(232,201,139,0.35)" }} />
          </div>
 
          <div className="mt-6 flex flex-col gap-2">
            <p className="flex items-center justify-center gap-2 text-[13px]" style={{ color: "rgba(254,248,231,0.85)" }}>
              <ClockIcon />
              {HOURS}
            </p>
            <p className="flex items-center justify-center gap-2 text-[13px]" style={{ color: "rgba(254,248,231,0.85)" }}>
              <PinIcon />
              {ADDRESS}
            </p>
          </div>
 
          <div className="mt-5 flex items-center justify-center gap-3">
            <SocialLink href={SNAPCHAT_URL} label="سناب شات">
              <SnapchatIcon />
            </SocialLink>
            <SocialLink href={INSTAGRAM_URL} label="انستقرام">
              <InstagramIcon />
            </SocialLink>
            <SocialLink href={TIKTOK_URL} label="تيك توك">
              <TikTokIcon />
            </SocialLink>
            <SocialLink href={WHATSAPP_URL} label="واتساب">
              <WhatsAppIcon s={19} />
            </SocialLink>
          </div>
 
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            dir="ltr"
            className="mt-4 inline-block text-[14px] font-bold"
            style={{ color: GOLD_SOFT, unicodeBidi: "isolate" }}
          >
            {PHONE_DISPLAY}
          </a>
 
          <div className="mt-6 mx-auto flex items-center gap-2.5" style={{ width: "min(56%, 180px)", opacity: 0.5 }}>
            <span className="flex-1 h-px" style={{ background: "rgba(232,201,139,0.4)" }} />
            <Diamond size={6} color={GOLD_SOFT} />
            <Diamond size={6} color={GOLD_SOFT} />
            <Diamond size={6} color={GOLD_SOFT} />
            <span className="flex-1 h-px" style={{ background: "rgba(232,201,139,0.4)" }} />
          </div>
 
          <p className="mt-4 text-[11.5px]" style={{ color: "rgba(254,248,231,0.45)" }}>
            شاي هَام — نفهم مزاجك
          </p>
        </div>
      </footer>
 
      {/* ══ شريط السلة العائم ══ */}
      {count > 0 && !cartOpen && (
        <div className="sh-bar fixed inset-x-0 bottom-0 z-30 mx-auto w-full max-w-md px-4 pb-4">
          <button
            onClick={() => setCartOpen(true)}
            className="w-full flex items-center justify-between px-5 py-3 transition-transform active:scale-[0.99]"
            style={{
              background: C.ink,
              color: GOLD_SOFT,
              borderRadius: 999,
              border: "none",
              boxShadow: "0 8px 24px rgba(62,34,31,0.28)",
            }}
          >
            <span className="flex items-center gap-2">
              <BagIcon />
              <span className="text-[13.5px] font-bold">عرض الطلب</span>
              <span
                className="text-[11.5px] font-bold"
                style={{
                  background: GOLD_SOFT,
                  color: C.ink,
                  borderRadius: 999,
                  padding: "1px 8px",
                }}
              >
                {count}
              </span>
            </span>
            <span className="text-[14.5px] font-bold">
              {total} <span className="text-[11px] opacity-75">ر.س</span>
            </span>
          </button>
        </div>
      )}
 
      <CartDrawer
        open={cartOpen}
        lines={lines}
        total={total}
        user={user}
        onClose={() => setCartOpen(false)}
        onQty={changeQty}
        onClear={() => setLines([])}
        onNeedLogin={() => setLoginOpen(true)}
      />
 
      <LoginDialog
        open={loginOpen}
        onClose={() => setLoginOpen(false)}
        onSubmit={(u) => {
          setUser(u)
          setLoginOpen(false)
        }}
      />
    </div>
  )
}
 

