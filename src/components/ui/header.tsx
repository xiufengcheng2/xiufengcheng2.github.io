const name = "程秀峰"

const menus = [
	{
		name: "课程",
		slug: "course",
	},
	{
		name: "项目",
		slug: "project",
	},
	{
		name: "书籍",
		slug: "book",
	},
	{
		name: "论文",
		slug: "paper",
	},
	{
		name: "个人介绍",
		slug: "about",
	},
	{
		name: "联系方式",
		slug: "contact",
	},
]

export function Header({
	slug,
}: { slug: Slugs }) {
	const isIndex = slug === "index"
	return (
		<header className="z-50 mx-auto flex w-[1064px] items-center justify-between py-4">
			<a className={isIndex ? "hidden" : undefined} href="/">
				<span className="font-bold text-theme">{name}</span>
			</a>
			<nav className="flex grow justify-end gap-10">
				{
					menus.map(item => (
						<a className={isIndex ? (item.slug === "course" ? "text-[#000000]" : "bg-transparent text-white") : (slug === item.slug ? "font-600 border-b-2 border-primary text-primary" : undefined)} href={`/${item.slug}`} key={item.slug}>{item.name}</a>
					))
				}
			</nav>
		</header>
	)
}
