import { getCurrentYear } from "@/utils/get-current-year"
import { getSocialLink } from "@/utils/get-social-link"

export function Footer({ englishName, slug, socials }: FooterProps) {
	return (
		<footer className="z-50 mx-auto my-16 flex w-[1064px] flex-col items-center gap-[15px]">
			<div className={`${(slug === "index" || slug === "contact") ? "flex" : "hidden"} items-center gap-8 text-[32px] leading-none`}>
				<a aria-label="QQ" href={getSocialLink(socials.qq, "qq")} target="_blank"><span className="i-ri-qq-fill transition-all duration-300 hover:text-primary" /></a>
				<a aria-label="BiliBili" href={getSocialLink(socials.bilibili, "bilibili")} target="_blank"><span className="i-ri-bilibili-fill transition-all duration-300 hover:text-primary" /></a>
				<a aria-label="Email" href={getSocialLink(socials.email, "email")} target="_blank"><span className="i-ri-mail-fill transition-all duration-300 hover:text-primary" /></a>
			</div>
			<div className="text-secondary">{`${englishName} ${getCurrentYear()}`}</div>
		</footer>
	)
}
