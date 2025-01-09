import { Card } from "@/components/card"

export function BookItem({ book }: { book: Book }) {
	return (
		<a className="group" href={`/book/${book.id}`}>
			<div className="flex flex-col items-center gap-2.5 rounded-md p-2.5 transition-all duration-300 group-hover:bg-slate-200">
				<img alt={book.name} className="h-[140px] w-[100px] border border-slate-400" src={book.image} />
				<span className="text-xs">{book.publisher}</span>
				<span className="font-serif font-bold">{book.name}</span>
				<span className="text-sm text-[#7D7D80]">{book.year}</span>
			</div>
		</a>
	)
}

export function BookList({ books }: { books: Book[] }) {
	return <div className="grid grid-cols-3">{books.map(book => <BookItem book={book} key={book.name} />)}</div>
}

export function BookCard({
	content,
	icon,
	title,
}: CardProps) {
	return (
		<div className="flex h-[280px] w-[300px] flex-col gap-2.5 rounded-md bg-white p-4">
			<div className="flex items-center gap-1 text-lg ">
				<span className={`size-6  ${icon} text-primary`} />
				<span className="font-semibold text-primary">{title}</span>
			</div>
			<div>{content}</div>
		</div>
	)
}

export function BookDetail({ book }: { book: Book }) {
	return (
		<div className="mx-auto mt-4 flex w-[1064px] items-center justify-between gap-2.5">
			<img alt={book.name} className="h-[280px] w-[200px] border border-slate-400 object-cover" src={book.image} />
			<BookCard content={book.description} icon="i-mingcute-book-2-line" title="内容简介" />
			<BookCard content={book.info.split("；").map(item => <p key={item}>{item}</p>)} icon="i-mingcute-information-line" title="附加信息" />
			<div className="flex h-[280px] grow flex-col gap-2">
				<div className="flex gap-1">
					<span className="i-mingcute-download-2-line size-6 " />
					<span className="text-lg">下载</span>
				</div>
				<div className="flex gap-2.5 rounded-md bg-red-500 p-2.5 ">
					<span className="i-tabler-file-type-pdf size-6 text-white" />
					<span className="text-white">PDF 下载</span>
				</div>
				<div className="flex gap-2.5 rounded-md bg-gray-500 p-2.5 ">
					<span className="i-tabler-file-certificate size-6 text-white" />
					<span className="text-white">CAJ 下载</span>
				</div>
				<div className="flex gap-2.5 rounded-md bg-cyan-500 p-2.5 ">
					<span className="i-tabler-file-sad size-6 text-white" />
					<span className="text-white">代码下载</span>
				</div>
				<div className="flex grow items-center justify-between gap-2.5 rounded-md bg-white p-2.5">
					<span>二维码：</span>
					<span className="i-mingcute-qr-code-line size-6" />
				</div>
			</div>
		</div>
	)
}

export function BookContent({ content }: { content: Content[] }) {
	const contentList = () => {
		return (
			<div className="flex flex-col gap-2.5">
				{
					content.map(item => (
						<p key={item.chapter}>
							{item.chapter}
							{" "}
							{item.title}
						</p>
					))
				}
			</div>
		)
	}
	return (
		<Card content={contentList()} icon="i-mingcute-list-collapse-line" title="本书目录" />
	)
}
