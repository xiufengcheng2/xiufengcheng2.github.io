import AvatarPng from "@/assets/image/avatar.png"
import IntroPng from "@/assets/image/intro.png"

export function Intro({
	description,
	name,
	status,
}: IntroProps) {
	return (
		<section className="flex w-full items-center justify-center">
			<div className="flex flex-col justify-center">
				<h1 className="mb-10 text-5xl font-bold text-theme">{name}</h1>
				<h2 className="mb-[30px] w-[512px] text-xl text-[#333333]">{status}</h2>
				<p className="mb-[83px] w-[486px] text-[#727272]">{description}</p>
				<a href="/about">
					<button
						className="w-50 rounded-full bg-primary px-6 py-2 text-white shadow-primary transition-shadow duration-300 hover:shadow-lg"
						type="button"
					>
						了解我更多…
					</button>
				</a>
			</div>
			<div className="relative">
				<img alt="avatar" height={AvatarPng.height} src={AvatarPng.src} width={AvatarPng.width} />
				<img alt="intro" className="absolute bottom-9 left-0 w-2/5" height={IntroPng.height} src={IntroPng.src} width={IntroPng.width} />
			</div>
		</section>
	)
}
