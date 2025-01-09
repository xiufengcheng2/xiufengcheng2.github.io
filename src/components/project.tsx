import type { ReactNode } from "react"

import AwardLeft from "@/assets/image/left.png"
import AwardRight from "@/assets/image/right.png"
import { Card } from "@/components/card"

export function Projects({ projects, type }: { projects: Project[], type: ProjectType }) {
	return (
		<div className="flex flex-col gap-1">
			<h4 className="font-600 text-primary">{type}</h4>
			<div className="flex flex-col gap-2.5">
				{
					projects.map(item => (
						<ProjectItem key={item.name} project={item} />
					))
				}
			</div>
		</div>
	)
}

export function ProjectItem({ project }: { project: Project }) {
	return (
		<a className="group" href={`/project/${project.id}`}>
			<div className="font-600 flex items-center gap-2.5">
				<div className="rounded-md border border-slate-300 bg-white p-4 ring-primary transition-all duration-300 group-hover:border-primary group-hover:text-primary group-hover:ring-1">
					{project.name}
				</div>
				<span className="text-[#00000080]">{project.level}</span>
			</div>
		</a>
	)
}

export function SectionPart({ children }: { children: React.ReactNode }) {
	return (
		<div className="mt-5 flex flex-col gap-5">
			{children}
		</div>
	)
}

export function AwardItem({ award }: { award: Award }) {
	return (
		<div className="flex min-w-[428px] items-center justify-between">
			<img alt="award-left" className="h-[60px] w-[35px]" src={AwardLeft.src} />
			<div className="flex flex-col items-center gap-2.5">
				<span className="font-semibold text-theme">{award.name}</span>
				<span className="text-xl font-semibold text-[#FFC125]">{award.level}</span>
				<span className="font-semibold text-theme">{award.time}</span>
			</div>
			<img alt="award-right" className="h-[60px] w-[35px]" src={AwardRight.src} />
		</div>
	)
}

export function Awards({ awards }: { awards: Award[] }) {
	return (
		<div className="flex flex-wrap gap-6">
			{awards.map(item => (
				<AwardItem award={item} key={item.name} />
			))}
		</div>
	)
}

const OtherIcon: Record<Platform, string> = {
	bilibili: "i-ri-bilibili-line text-[#00A1D6]",
	github: "i-ri-github-line text-black",
}

export function OtherItem({ description, other }: { description: ReactNode, other: Other }) {
	return (
		<div className="flex w-[768px] flex-col gap-2.5 rounded-md border border-slate-300 bg-white p-4">
			<a className="group" href={other.link} target="_blank">
				<div className="flex items-center justify-between border-b border-slate-300 pb-1 transition-all duration-300 group-hover:border-primary">
					<div className="flex items-center gap-2.5">
						<span className={OtherIcon[other.platform]} />
						<span className="transition-all duration-300 group-hover:text-primary">{other.name}</span>
					</div>
					<span className="i-ri-arrow-right-up-line w-0 text-primary transition-all duration-300 group-hover:w-4" />
				</div>
			</a>
			{description}
			<img alt="other-image" className="w-full" src={other.image} />
		</div>
	)
}

export function RoadmapItem({ roadmaps }: { roadmaps: Roadmap[] }) {
	return (
		<div className="flex flex-col">
			{roadmaps.map((item, index) => (
				<div className="flex gap-4" key={index}>
					<div className="flex flex-col items-center">
						<div className="flex aspect-square size-8 items-center justify-center rounded-md border border-[#D2D6DB]">
							<i className="i-mingcute-bulb-2-line size-4 text-[#6C727E]" />
						</div>
						{index !== roadmaps.length - 1 && (
							<div className="h-full w-px bg-[#D2D6DB]" />
						)}
					</div>
					<div className="flex flex-col pb-6">
						<h3 className="font-semibold">{item.title}</h3>
						<p className="text-[#6C727E]">{item.content ?? ""}</p>
					</div>
				</div>
			))}
		</div>
	)
}

export function ProjectRoadmap({ roadmap }: RoadmapProps) {
	return (
		<Card
			content={(
				<RoadmapItem roadmaps={roadmap} />
			)}
			icon="i-mingcute-flag-4-line"
			title="项目大纲"
		/>
	)
}

export function ResultItem({ result }: { result: Result }) {
	return (
		<div className="flex items-center gap-2.5 rounded-lg border border-slate-300 bg-slate-50 p-4">
			<h3 className="font-semibold">{result.name}</h3>
			<span className="i-mingcute-arrow-right-up-line" />
		</div>
	)
}

export function ResultList({ results }: { results: Result[] }) {
	return (
		<Card
			content={(
				<div className="flex flex-wrap gap-2.5">{results.map(result => <ResultItem key={result.name} result={result} />)}</div>
			)}
			icon="i-mingcute-award-line"
			title="项目成果"
		/>
	)
}
