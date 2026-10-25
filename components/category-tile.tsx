import Link from "next/link"

export type TileColor = "blue" | "green" | "purple" | "orange" | "rose" | "emerald"

const colorStyles: Record<TileColor, { bar: string; title: string; border: string }> = {
  blue: { bar: "bg-blue-600", title: "text-blue-600", border: "hover:border-blue-300" },
  green: { bar: "bg-green-600", title: "text-green-600", border: "hover:border-green-300" },
  purple: { bar: "bg-purple-600", title: "text-purple-600", border: "hover:border-purple-300" },
  orange: { bar: "bg-orange-600", title: "text-orange-600", border: "hover:border-orange-300" },
  rose: { bar: "bg-rose-600", title: "text-rose-600", border: "hover:border-rose-300" },
  emerald: { bar: "bg-emerald-600", title: "text-emerald-600", border: "hover:border-emerald-300" },
}

export type CategoryTileItem = {
  href: string
  title: string
  description: string
  tags: string[]
  color: TileColor
  cta: string
  layout?: string
}

export function CategoryTile({ item }: { item: CategoryTileItem }) {
  const styles = colorStyles[item.color]

  return (
    <Link
      href={item.href}
      className={`group relative flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 ${styles.border} ${item.layout ?? ""}`}
    >
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-[0.25] transition-transform duration-500 group-hover:scale-x-100 ${styles.bar}`}
      />
      <h2 className={`text-xl font-medium text-balance ${styles.title}`}>{item.title}</h2>
      <p className="mt-4 leading-relaxed text-slate-600 text-pretty">{item.description}</p>
      <p className="mt-6 text-sm text-slate-500">{item.tags.join("  ·  ")}</p>
      <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5">
        <span className="text-sm font-medium text-slate-900">{item.cta}</span>
        <span
          aria-hidden="true"
          className={`text-lg transition-transform duration-300 group-hover:translate-x-1 ${styles.title}`}
        >
          {"→"}
        </span>
      </div>
    </Link>
  )
}
