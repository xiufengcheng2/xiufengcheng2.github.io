import { Card } from "@/components/card"
import { Title } from "@/components/ui/title"

enum BadgeColors {
	Decoration = "bg-[#6C727E]",
	Primary = "bg-primary",
	Secondary = "bg-[#F79009]",
}

const Badges: Record<Categories, BadgeColors> = {
	专业基础必修: BadgeColors.Secondary,
	专业选修: BadgeColors.Decoration,
	图情学硕必修: BadgeColors.Secondary,
	图情学硕选修: BadgeColors.Decoration,
	校级专业主干课程: BadgeColors.Primary,
}

export function CourseItem({ course }: { course: Course }) {
	return (
		<a className="group" href={`/course/${course.id}`}>
			<img alt={course.name} className="h-[180px] w-[320px] rounded-md object-cover transition-all duration-300 group-hover:shadow-lg group-hover:ring-1 group-hover:ring-primary" src={course.cover} />
			<div className="mt-2.5 flex flex-col gap-1">
				<h3 className="text-xl font-bold" style={{ viewTransitionName: course.id }}>{course.name}</h3>
				<span className={`${Badges[course.category]} w-fit rounded-md p-1 text-sm text-white`}>{course.category}</span>
			</div>
		</a>
	)
}

export function CourseList({ courses, title }: { courses: Course[], title: string }) {
	return (
		<>
			<Title title={title} />
			<div className="mt-5 grid grid-cols-3 gap-x-12 gap-y-5">
				{courses.map(item => (
					<CourseItem course={item} key={item.name} />
				))}
			</div>
		</>
	)
}

export function RoadmapItem({ roadmaps }: { roadmaps: Roadmap[] }) {
	return (
		<div className="flex flex-col">
			{roadmaps.map((item, index) => (
				<div className="flex gap-4" key={index}>
					<div className="flex flex-col items-center">
						<div className="flex aspect-square size-8 items-center justify-center rounded-md border border-[#D2D6DB]">
							<i className="i-mingcute-book-2-line size-4 text-[#6C727E]" />
						</div>
						{index !== roadmaps.length - 1 && (
							<div className="h-full w-px bg-[#D2D6DB]" />
						)}
					</div>
					<div className="flex flex-col pb-6">
						<h3 className="font-semibold">{item.title}</h3>
						<p className="text-[#6C727E]">{item.content}</p>
					</div>
				</div>
			))}
		</div>
	)
}

export function CourseRoadmap({ roadmap }: RoadmapProps) {
	return (
		<Card
			content={(
				<RoadmapItem roadmaps={roadmap} />
			)}
			icon="i-mingcute-book-6-line"
			title="课程大纲"
		/>
	)
}

export function ResultItem({ result }: { result: Result }) {
	return (
		<div className="flex flex-col gap-2.5">
			<h3 className="font-semibold">{result.name}</h3>
			<div className="flex flex-col gap-1 rounded-lg border border-slate-300 bg-slate-50 p-2">
				{result.item.map(item => (
					item.link
						? (
								<a className="text-primary underline" href={item.link} key={item.name}>
									{item.name}
									<span className="i-mingcute-arrow-right-up-line text-sm text-primary" />
								</a>
							)
						: (
								<p key={item.name}>{item.name}</p>
							)
				))}
			</div>
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
			title="学生成果"
		/>
	)
}
