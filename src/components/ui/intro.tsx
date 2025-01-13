import AvatarJpg from "@/assets/image/avatar.jpg"

export function Intro({
	description,
	name,
	status,
}: IntroProps) {
	return (
		<section className="mt-24 flex w-full items-center justify-center gap-40">
			<div className="flex flex-col justify-center">
				<h1 className="mb-14 text-5xl font-bold text-primary">{name}</h1>
				<h2 className="mb-[30px] w-[512px] text-xl text-[#333333]">{status}</h2>
				<p className="mb-[83px] w-[486px] text-[#727272]">{description}</p>
				<a href="/about">
					<button
						className="w-50 rounded-full bg-theme px-6 py-2 text-white shadow-theme transition-shadow duration-300 hover:shadow-lg"
						type="button"
					>
						了解我更多…
					</button>
				</a>
			</div>
			<img alt="avatar" className="h-[440px] w-[300px] rounded-[50%] object-cover object-top shadow-2xl" height={AvatarJpg.height} src={AvatarJpg.src} width={AvatarJpg.width} />
		</section>
	)
}
