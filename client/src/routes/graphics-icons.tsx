import { createFileRoute } from "@tanstack/react-router";
import Typography from "../components/Typography";
import Card from "../components/Card";
import Button from "../components/Button";

export const Route = createFileRoute("/graphics-icons")({
	component: GraphicsIcons,
});

function GraphicsIcons() {
	const iconCategories = [
		{
			title: "Productivity Icons",
			icons: [
				{ name: "Timer", symbol: "⏱️", description: "Clock with soft rounded edges and gentle curves" },
				{ name: "Focus", symbol: "👁️", description: "Eye with soft curves, representing mindful attention" },
				{ name: "Break", symbol: "☕", description: "Coffee cup with steam wisps" },
				{ name: "Deep Work", symbol: "🧠", description: "Brain with flowing, organic lines" },
				{ name: "Pomodoro", symbol: "🍅", description: "Stylized tomato with rounded features" },
			]
		},
		{
			title: "Navigation Icons",
			icons: [
				{ name: "Home", symbol: "🏠", description: "House with rounded roof and soft corners" },
				{ name: "Settings", symbol: "⚙️", description: "Gear with rounded teeth and soft spokes" },
				{ name: "Profile", symbol: "👤", description: "Person silhouette with gentle curves" },
				{ name: "Calendar", symbol: "📅", description: "Grid with soft corners and rounded dates" },
				{ name: "Stats", symbol: "📊", description: "Bar chart with rounded bars" },
			]
		},
		{
			title: "Environment Icons",
			icons: [
				{ name: "Café", symbol: "☕", description: "Coffee cup with saucer" },
				{ name: "Library", symbol: "📚", description: "Stack of books with soft edges" },
				{ name: "Forest", symbol: "🌲", description: "Simple tree with organic branches" },
				{ name: "Ocean", symbol: "🌊", description: "Gentle wave with flowing curves" },
				{ name: "Rain", symbol: "🌧️", description: "Cloud with soft raindrops" },
			]
		},
		{
			title: "Action Icons",
			icons: [
				{ name: "Play", symbol: "▶️", description: "Triangle with rounded corners" },
				{ name: "Pause", symbol: "⏸️", description: "Two rounded rectangles" },
				{ name: "Stop", symbol: "⏹️", description: "Square with rounded corners" },
				{ name: "Add", symbol: "➕", description: "Plus with rounded line ends" },
				{ name: "Close", symbol: "✖️", description: "X with soft, rounded strokes" },
			]
		}
	];

	return (
		<div className="container section">
			<Typography variant="h1" className="mb-6">Graphics & Icons</Typography>

			<div className="mb-12">
				<Card variant="feature" className="mb-8">
					<Typography variant="h2" className="mb-4">Icon Philosophy</Typography>
					<Typography variant="p" className="text-lg mb-6">
						Soft, rounded icons that complement our cloud character's gentle aesthetic.
						All icons follow consistent design principles for visual harmony.
					</Typography>
					<div className="grid grid-3 gap-6">
						<div className="text-center">
							<div className="text-4xl mb-2">🎨</div>
							<Typography variant="small">Consistent Style</Typography>
						</div>
						<div className="text-center">
							<div className="text-4xl mb-2">🔄</div>
							<Typography variant="small">Rounded Corners</Typography>
						</div>
						<div className="text-center">
							<div className="text-4xl mb-2">✨</div>
							<Typography variant="small">Organic Feel</Typography>
						</div>
					</div>
				</Card>
			</div>

			<Typography variant="h2" className="mb-8">Icon Specifications</Typography>

			<Card className="mb-8">
				<div className="grid grid-2 gap-8">
					<div>
						<Typography variant="h4" className="mb-4">Technical Details</Typography>
						<ul className="space-y-3">
							<li><strong>Base:</strong> Feather Icons (customized for CozySpace)</li>
							<li><strong>Stroke Weight:</strong> 2px for consistency</li>
							<li><strong>Line Caps:</strong> Rounded endings</li>
							<li><strong>Corners:</strong> All rounded, no sharp angles</li>
							<li><strong>Style:</strong> Minimal, organic, hand-drawn quality</li>
							<li><strong>Color:</strong> Inherits from parent (gentle brown or warm coral)</li>
						</ul>
					</div>
					<div>
						<Typography variant="h4" className="mb-4">Size Variations</Typography>
						<div className="space-y-3">
							<div className="flex items-center gap-4">
								<div className="w-8 h-8 border rounded flex items-center justify-center text-sm">16px</div>
								<Typography variant="small">Favicon, notifications, tiny UI elements</Typography>
							</div>
							<div className="flex items-center gap-4">
								<div className="w-8 h-8 border rounded flex items-center justify-center">32px</div>
								<Typography variant="small">Menu items, medium buttons</Typography>
							</div>
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 border rounded flex items-center justify-center text-lg">48px</div>
								<Typography variant="small">App shortcuts, large thumbnails</Typography>
							</div>
						</div>
					</div>
				</div>
			</Card>

			<Typography variant="h2" className="mb-8">Icon Library</Typography>

			<div className="space-y-12">
				{iconCategories.map((category, categoryIndex) => (
					<div key={categoryIndex}>
						<Typography variant="h3" className="mb-6">{category.title}</Typography>
						<div className="grid grid-3 gap-6">
							{category.icons.map((icon, iconIndex) => (
								<Card key={iconIndex} className="text-center">
									<div className="text-4xl mb-4">{icon.symbol}</div>
									<Typography variant="h5" className="mb-2">{icon.name}</Typography>
									<Typography variant="small" className="text-gray-600">{icon.description}</Typography>
								</Card>
							))}
						</div>
					</div>
				))}
			</div>

			<Card className="my-12">
				<Typography variant="h3" className="mb-6">Implementation</Typography>
				<div className="space-y-4">
					<div>
						<Typography variant="h5" className="mb-2">CSS Classes</Typography>
						<Typography variant="small" className="font-mono mb-2">
							.icon {`{ width: 24px; height: 24px; stroke: currentColor; stroke-width: 2px; stroke-linecap: round; stroke-linejoin: round; fill: none; }`}
						</Typography>
						<Typography variant="small" className="font-mono mb-2">
							.icon-small {`{ width: 16px; height: 16px; }`}
						</Typography>
						<Typography variant="small" className="font-mono mb-2">
							.icon-large {`{ width: 32px; height: 32px; }`}
						</Typography>
						<Typography variant="small" className="font-mono">
							.icon-xl {`{ width: 48px; height: 48px; }`}
						</Typography>
					</div>
				</div>
			</Card>

			<div className="text-center">
				<Typography variant="p" className="mb-4">
					Need the complete icon set or custom icons for your project?
				</Typography>
				<Button variant="primary">Download Icon Pack</Button>
			</div>
		</div>
	);
}

export default GraphicsIcons;