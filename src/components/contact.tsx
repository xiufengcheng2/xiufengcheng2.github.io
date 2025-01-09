export function Content({ children }: { children: React.ReactNode }) {
	return <article className="flex w-[460px] flex-col gap-6 text-xl">{children}</article>
}

export function Title({ children }: { children: string }) {
	return <h2 className="text-[40px] text-primary">{children}</h2>
}
