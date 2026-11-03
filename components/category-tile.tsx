import Link from "next/link"

export type TileColor = "blue" | "green" | "purple" | "orange" | "rose" | "emerald"
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
  return <Link href={item.href} className="category-index-row group">
    <h2>{item.title}</h2>
    <div><p className="category-description">{item.description}</p><p className="category-topics">{item.tags.join(" · ")}</p></div>
    <span className="category-action">{item.cta}<span aria-hidden="true">↗</span></span>
  </Link>
}
