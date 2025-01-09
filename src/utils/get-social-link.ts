type Platform = "bilibili" | "email" | "github" | "qq"

export function getSocialLink(id: string, platform: Platform) {
	switch (platform) {
		case "qq":
			return `https://wpa.qq.com/msgrd?v=3&uin=${id}&site=qq&menu=yes`
		case "github":
			return `https://github.com/${id}`
		case "email":
			return `mailto:${id}`
		case "bilibili":
			return `https://space.bilibili.com/${id}`
		default:
			return ""
	}
}
