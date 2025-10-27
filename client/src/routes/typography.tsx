import { createFileRoute } from "@tanstack/react-router";
import Typography from "../components/Typography";
import Card from "../components/Card";
import Button from "../components/Button";

export const Route = createFileRoute("/typography")({
	component: TypographyPage,
});

function TypographyPage() {
	return (
		<div className="container section">
			<Typography variant="h1" className="mb-6">Typography</Typography>

			<div className="mb-12">
				<Card variant="feature" className="mb-8">
					<Typography variant="h2" className="mb-4">Font Selection Philosophy</Typography>
					<Typography variant="p" className="text-lg mb-6">
						Rounded, approachable typography that echoes our cloud's gentle curves while
						maintaining excellent readability across all devices and sizes.
					</Typography>
					<div className="grid grid-2 gap-8">
						<div>
							<Typography variant="h4" className="mb-3">Primary Font: Nunito</Typography>
							<Typography variant="p">
								Rounded Sans-Serif by Vernon Adams. Rounded letterforms echo the cloud's
								soft, friendly curves while maintaining excellent readability.
							</Typography>
						</div>
						<div>
							<Typography variant="h4" className="mb-3">Secondary Font: Quicksand</Typography>
							<Typography variant="p">
								Geometric Rounded Sans-Serif by Andrew Paglinawan. Playful yet professional,
								perfect for headings and special text that needs personality.
							</Typography>
						</div>
					</div>
				</Card>
			</div>

			<Typography variant="h2" className="mb-8">Typography Hierarchy</Typography>

			<div className="space-y-8 mb-12">
				<Card>
					<div className="mb-4">
						<Typography variant="h1">H1 - Main Page Titles</Typography>
					</div>
					<Typography variant="small" className="mb-2">Usage: Page titles, main app headings, hero sections</Typography>
					<Typography variant="small">CSS: font-family: 'Quicksand', font-weight: 600, font-size: 2.5rem</Typography>
				</Card>

				<Card>
					<div className="mb-4">
						<Typography variant="h2">H2 - Section Headings</Typography>
					</div>
					<Typography variant="small" className="mb-2">Usage: Feature sections, dashboard areas, major content divisions</Typography>
					<Typography variant="small">CSS: font-family: 'Quicksand', font-weight: 500, font-size: 2rem</Typography>
				</Card>

				<Card>
					<div className="mb-4">
						<Typography variant="h3">H3 - Subsection Headings</Typography>
					</div>
					<Typography variant="small" className="mb-2">Usage: Card titles, form sections, content blocks</Typography>
					<Typography variant="small">CSS: font-family: 'Nunito', font-weight: 700, font-size: 1.5rem</Typography>
				</Card>

				<Card>
					<div className="mb-4">
						<Typography variant="h4">H4 - Component Headings</Typography>
					</div>
					<Typography variant="small" className="mb-2">Usage: Widget titles, small sections, sidebar headings</Typography>
					<Typography variant="small">CSS: font-family: 'Nunito', font-weight: 600, font-size: 1.25rem</Typography>
				</Card>

				<Card>
					<div className="mb-4">
						<Typography variant="h5">H5 - Minor Headings</Typography>
					</div>
					<Typography variant="small" className="mb-2">Usage: Labels, categories, list headings</Typography>
					<Typography variant="small">CSS: font-family: 'Nunito', font-weight: 600, font-size: 1.125rem</Typography>
				</Card>

				<Card>
					<div className="mb-4">
						<Typography variant="h6">H6 - Micro Headings</Typography>
					</div>
					<Typography variant="small" className="mb-2">Usage: Timestamps, metadata, small labels</Typography>
					<Typography variant="small">CSS: font-family: 'Nunito', font-weight: 600, font-size: 1rem, uppercase</Typography>
				</Card>

				<Card>
					<div className="mb-4">
						<Typography variant="p">
							Body Text - Main content, descriptions, paragraphs. Optimized for screen readers
							with 1.6 line height for excellent readability across all devices and sizes.
						</Typography>
					</div>
					<Typography variant="small">CSS: font-family: 'Nunito', font-weight: 400, font-size: 1rem, line-height: 1.6</Typography>
				</Card>

				<Card>
					<div className="mb-4">
						<Typography variant="large">
							Large Body Text - Important descriptions, intro text, featured content that
							needs to stand out while maintaining comfortable reading experience.
						</Typography>
					</div>
					<Typography variant="small">CSS: font-family: 'Nunito', font-weight: 400, font-size: 1.125rem</Typography>
				</Card>

				<Card>
					<div className="mb-4">
						<Typography variant="small">
							Small Text - Captions, helper text, footnotes, timestamps, and secondary
							information that doesn't need to compete with primary content.
						</Typography>
					</div>
					<Typography variant="small">CSS: font-family: 'Nunito', font-weight: 400, font-size: 0.875rem</Typography>
				</Card>
			</div>

			<div className="grid grid-2 gap-8 mb-8">
				<Card>
					<Typography variant="h4" className="mb-4">Responsive Design</Typography>
					<Typography variant="p" className="mb-4">
						Typography scales appropriately across all device sizes while maintaining readability.
					</Typography>
					<ul className="space-y-2 text-sm">
						<li>• Mobile: Reduced font sizes for comfortable reading</li>
						<li>• Tablet: Balanced sizing for touch interfaces</li>
						<li>• Desktop: Enhanced sizes for large screens</li>
						<li>• Large screens: Maximum readability optimization</li>
					</ul>
				</Card>

				<Card>
					<Typography variant="h4" className="mb-4">Accessibility Features</Typography>
					<Typography variant="p" className="mb-4">
						Designed with accessibility in mind from the ground up.
					</Typography>
					<ul className="space-y-2 text-sm">
						<li>• WCAG AA compliant contrast ratios</li>
						<li>• Optimized line heights for readability</li>
						<li>• Proper heading hierarchy for screen readers</li>
						<li>• Font loading optimization with fallbacks</li>
					</ul>
				</Card>
			</div>

			<Card className="mb-8">
				<Typography variant="h3" className="mb-6">Implementation</Typography>
				<div className="space-y-4">
					<div>
						<Typography variant="h5" className="mb-2">CSS Custom Properties</Typography>
						<Typography variant="small" className="font-mono mb-2">
							--font-primary: 'Nunito', sans-serif<br/>
							--font-accent: 'Quicksand', sans-serif
						</Typography>
						<Typography variant="small">
							All typography uses CSS custom properties for consistent implementation and easy maintenance.
						</Typography>
					</div>
				</div>
			</Card>

			<div className="text-center">
				<Typography variant="p" className="mb-4">
					Need help implementing this typography system in your project?
				</Typography>
				<Button variant="primary">Download Typography Guide</Button>
			</div>
		</div>
	);
}

export default TypographyPage;