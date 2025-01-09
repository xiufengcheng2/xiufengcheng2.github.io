export function PaperItem({ paper }: { paper: Paper }) {
	return (
		<div className="flex flex-col rounded-md border border-[#0000000D] bg-white px-3 py-1">
			<a className="group" href={`/paper/${paper.id}`}>
				<div className="flex justify-between border-b border-[#EEEEEE] py-3 transition-all duration-300 group-hover:border-primary group-hover:text-primary">
					<span className="font-semibold transition-all duration-300 group-hover:text-primary">{paper.name}</span>
					<span className="i-mingcute-arrow-right-line w-0 text-primary transition-all duration-300 group-hover:w-4" />
				</div>
			</a>
			<div className="flex gap-4 py-3">
				<span className="text-[#00000080]">
					作者：
					{paper.authors.join(",")}
				</span>
				<span className="text-[#00000080]">
					日期：
					{paper.time}
				</span>
				<span className="text-[#00000080]">
					{paper.keywords.join(",")}
				</span>
			</div>
		</div>
	)
}

export function PaperList({ papers }: { papers: Paper[] }) {
	return <div className="mt-7 flex flex-col gap-2">{papers.map(paper => <PaperItem key={paper.id} paper={paper} />)}</div>
}
