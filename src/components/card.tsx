export function Card({
	content,
	icon,
	title,
}: CardProps) {
	return (
		<div className="mx-auto mt-4 flex w-[1064px] flex-col gap-2.5 rounded-md bg-white p-4">
			<div className="flex items-center gap-1 text-lg ">
				<span className={`size-6  ${icon} text-primary`} />
				<span className="font-semibold text-primary">{title}</span>
			</div>
			<div>{content}</div>
		</div>
	)
}
