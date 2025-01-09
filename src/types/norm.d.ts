interface Socials {
	bilibili: string
	email: string
	github: string
	qq: string
}

type Slugs = "about" | "book" | "contact" | "course" | "index" | "paper" | "project"

type Categories = "专业基础必修" | "专业选修" | "图情学硕必修" | "图情学硕选修" | "校级专业主干课程"

interface Course {
	category: Categories
	cover: string
	description: string
	id: string
	name: string
	period: string
	results: Result[]
	roadmap: Roadmap[]
}

interface Result {
	item: StudentResult[]
	name: string
}

interface StudentResult {
	link?: string
	name: string
}

interface Roadmap {
	content?: string
	title: string
}

type CourseType = "bachelor" | "master"

type Courses = Record<CourseType, Course[]>

type ProjectVariant = "award" | "other" | "science" | "teach"

interface Project {
	description: string
	id: string
	level: string
	name: string
	period: string
	results: Result[]
	roadmap: Roadmap[]
}

interface Award {
	level: string
	name: string
	time: string
}

type Platform = "bilibili" | "github"

interface Download {
	caj: string
	code: string
	link: string
	pdf: string
}

interface Content {
	chapter: string
	title: string
}

interface Book {
	authors: string[]
	content: Content[]
	description: string
	download: Download
	id: string
	image: string
	info: string
	name: string
	publisher: string
	year: string
}

interface Paper {
	abstract: string
	authors: string[]
	download: {
		caj: string
		link: string
		pdf: string
	}
	englishName: string
	id: string
	info: {
		classificationNumber: string
		doi: string
		journal: string
		volume: string
	}
	keywords: string[]
	name: string
	time: string
}

interface Other {
	image: string
	link: string
	name: string
	platform: Platform
}

type ProjectType = "主持" | "参与"

interface Projects {
	award: Award[]
	other: Other[]
	science: Project[]
	teach: Project[]
}
