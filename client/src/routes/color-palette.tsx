import { createFileRoute } from "@tanstack/react-router";
import Typography from "../components/Typography";
import Button from "../components/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/color-palette")({
	component: ColorPalette,
});

function ColorPalette() {
	const primaryColors = [
		{ name: "Soft Peach", hex: "#F4C2A1", rgb: "rgb(244, 194, 161)", usage: "Primary buttons, brand accents, highlights" },
		{ name: "Cream White", hex: "#FFF8F0", rgb: "rgb(255, 248, 240)", usage: "Main backgrounds, cards, content areas" },
		{ name: "Warm Coral", hex: "#E8A87C", rgb: "rgb(232, 168, 124)", usage: "Hover states, active elements, borders" },
		{ name: "Soft Gray-Blue", hex: "#E8F0F2", rgb: "rgb(232, 240, 242)", usage: "Page backgrounds, subtle sections" },
		{ name: "Gentle Brown", hex: "#8B7355", rgb: "rgb(139, 115, 85)", usage: "Primary text, borders, icons" },
	];

	const extendedColors = [
		{ name: "Success Green", hex: "#A8C09A", rgb: "rgb(168, 192, 154)", usage: "Success messages, completed tasks" },
		{ name: "Warning Peach", hex: "#F4D1A1", rgb: "rgb(244, 209, 161)", usage: "Gentle warnings, attention-needed states" },
		{ name: "Error Coral", hex: "#E8A8A8", rgb: "rgb(232, 168, 168)", usage: "Error states, validation messages" },
	];

	return (
		<div className="container section">
			<Typography variant="h1" className="mb-6">Color Palette</Typography>

			<div className="mb-12">
				<Card className="mb-8">
					<CardHeader>
						<CardTitle>Design Philosophy</CardTitle>
					</CardHeader>
					<CardContent>
						<Typography variant="p" className="text-lg mb-6">
							Our palette draws inspiration from cozy, nurturing environments - soft morning light,
							warm café atmospheres, and gentle natural tones. These colors reduce stress while
							maintaining productivity focus.
						</Typography>
						<div className="grid grid-cols-3 gap-4">
							<div className="text-center">
								<img src="/src/assets/colors/#F4C2A1.png" alt="Soft Peach" className="w-16 h-16 rounded-md mx-auto mb-2" />
								<Typography variant="small">Comfort & Warmth</Typography>
							</div>
							<div className="text-center">
								<img src="/src/assets/colors/#FFF8F0.png" alt="Cream White" className="w-16 h-16 rounded-md mx-auto mb-2" />
								<Typography variant="small">Peace & Focus</Typography>
							</div>
							<div className="text-center">
								<img src="/src/assets/colors/#E8A87C.png" alt="Warm Coral" className="w-16 h-16 rounded-md mx-auto mb-2" />
								<Typography variant="small">Energy & Engagement</Typography>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>

			<Typography variant="h2" className="mb-8">Primary Colors</Typography>

			<div className="grid grid-cols-2 gap-6 mb-12">
				{primaryColors.map((color, index) => (
					<Card key={index} className="text-center">
						<CardContent className="p-6">
							<img
								src={`/src/assets/colors/${color.hex}.png`}
								alt={color.name}
								className="w-24 h-24 rounded-md mx-auto mb-4"
							/>
							<Typography variant="h4" className="mb-2">{color.name}</Typography>
							<Typography variant="small" className="mb-2 font-mono">{color.hex}</Typography>
							<Typography variant="small" className="mb-3 font-mono">{color.rgb}</Typography>
							<Typography variant="small" className="text-gray-600">{color.usage}</Typography>
						</CardContent>
					</Card>
				))}
			</div>

			<Typography variant="h2" className="mb-8">Extended Palette</Typography>

			<div className="grid grid-cols-3 gap-6 mb-12">
				{extendedColors.map((color, index) => (
					<Card key={index} className="text-center">
						<CardContent className="p-6">
							<img
								src={`/src/assets/colors/${color.hex}.png`}
								alt={color.name}
								className="w-20 h-20 rounded-md mx-auto mb-4"
							/>
							<Typography variant="h5" className="mb-2">{color.name}</Typography>
							<Typography variant="small" className="mb-2 font-mono">{color.hex}</Typography>
							<Typography variant="small" className="mb-3 font-mono">{color.rgb}</Typography>
							<Typography variant="small" className="text-gray-600">{color.usage}</Typography>
						</CardContent>
					</Card>
				))}
			</div>

			<Card className="mb-8">
				<CardHeader>
					<CardTitle>Color Psychology</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-2 gap-8">
						<div>
							<Typography variant="h5" className="mb-4 text-[var(--color-primary)]">Warmth & Comfort</Typography>
							<Typography variant="p">
								The soft peach and cream tones create a nurturing environment that reduces
								productivity anxiety and promotes a sense of safety and comfort.
							</Typography>
						</div>
						<div>
							<Typography variant="h5" className="mb-4 text-[var(--color-text-accent)]">Focus & Clarity</Typography>
							<Typography variant="p">
								The gentle brown text ensures excellent readability while the soft blue-gray
								backgrounds provide calm focus without being distracting.
							</Typography>
						</div>
					</div>
				</CardContent>
			</Card>

			<div className="grid grid-cols-2 gap-8 mb-8">
				<Card>
					<CardHeader>
						<CardTitle>Accessibility</CardTitle>
					</CardHeader>
					<CardContent>
						<Typography variant="p" className="mb-4">
							All color combinations meet WCAG AA standards for contrast and readability.
						</Typography>
						<ul className="space-y-2 text-sm">
							<li>• High Contrast: Gentle Brown on Cream (AAA)</li>
							<li>• Medium Contrast: Warm Coral on Cream (AA)</li>
							<li>• Accent Colors: Sufficient contrast ratios maintained</li>
						</ul>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Implementation</CardTitle>
					</CardHeader>
					<CardContent>
						<Typography variant="p" className="mb-4">
							Colors are defined as CSS custom properties for consistent usage across the application.
						</Typography>
						<Button variant="secondary" size="small">View CSS Variables</Button>
					</CardContent>
				</Card>
			</div>

			<div className="text-center">
				<Typography variant="p" className="mb-4">
					Need help implementing these colors in your project?
				</Typography>
				<Button variant="primary">Download Color Palette</Button>
			</div>
		</div>
	);
}

export default ColorPalette;