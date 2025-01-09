export function Subtitle({ children, image }: { children: string, image: ImageMetadata }) {
	return (
		<div className="flex items-center gap-2">
			<img alt={children} height="32" src={image.src} width="32" />
			<span className="font-600 text-[24px] text-primary">{children}</span>
		</div>
	)
}

export function Title({ children }: { children: string }) {
	return <h2 className="mb-6 text-center text-[40px] text-primary">{children}</h2>
}

export function Content({ children }: { children: React.ReactNode }) {
	return <article className="flex flex-col gap-6 pl-10 text-xl">{children}</article>
}
