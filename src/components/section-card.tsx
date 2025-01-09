export function SectionCard({
	description,
	image,
	link,
	name,
	variant,
}: SectionCardProps) {
	return (
		<div
			style={{
				boxShadow: "0px 6px 64px 0px #7090B01A",
			}}
			className={`flex h-[524px] w-[960px] gap-4 overflow-hidden rounded-3xl bg-white p-8 ${variant === "left" ? "flex-row-reverse" : ""}`}
		>
			<img alt={name} className="h-full w-1/2" loading="eager" src={image.src} />
			<div className="flex w-1/2 items-center justify-center">
				<div className="flex flex-col justify-center gap-6">
					<h3 className="text-[40px] font-semibold text-primary">{name}</h3>
					<p className="w-102 text-secondary">{description}</p>
					<a href={link}>
						<button className="w-30 group flex items-center rounded-3xl border border-[#25282B] px-6 py-2 transition-all duration-300 hover:gap-2 hover:border-primary hover:text-primary">
							{`查看${name}`}
							<span className="i-mingcute-arrow-right-line w-0 text-primary transition-all duration-300 group-hover:w-4" />
						</button>
					</a>
				</div>
			</div>
		</div>
	)
}
