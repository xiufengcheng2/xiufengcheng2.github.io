interface FooterProps {
	englishName: string
	slug: Slugs
	socials: Socials
}

interface IntroProps {
	description: string
	name: string
	status: string
}

interface SectionCardProps {
	description: string
	image: ImageMetadata
	link: string
	name: string
	variant: "left" | "right"
}

interface CardProps {
	content: import("react").ReactNode
	icon: string
	title: string
}

interface RoadmapProps {
	roadmap: Roadmap[]
}
