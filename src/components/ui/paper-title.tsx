export function PaperTitle({
	subtitle,
	title,
}: {
	subtitle: string
	title: string
}) {
	return (
		<h2 className="mx-auto flex w-[1064px] items-end justify-between leading-none">
			<div className="relative flex flex-col gap-2.5">
				<div className="absolute -left-[19px] top-7 h-8 w-2 rounded-[20px] bg-theme"></div>
				<span className="font-serif text-[40px] font-bold text-black">{title}</span>
				<span className="text-[28px] font-semibold text-[#00000065]">{subtitle}</span>
			</div>
		</h2>
	)
}
