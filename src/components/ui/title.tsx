export function Title({
	info,
	subtitle,
	title,
}: {
	info?: string | undefined
	subtitle?: string | undefined
	title: string
}) {
	return (
		<h2 className="mx-auto flex w-[1064px] items-end justify-between leading-none">
			<div className="flex items-end gap-2.5">
				<div className="flex items-center gap-2.5">
					<div className="h-8 w-2 rounded-[20px] bg-theme"></div>
					<span className="max-w-[800px] font-serif text-[40px] font-bold text-black">{title}</span>
				</div>
				<span className="font-600 text-[#00000066]">{subtitle ?? ""}</span>
			</div>
			<span className="font-600 text-xl leading-none">{info ?? ""}</span>
		</h2>
	)
}
