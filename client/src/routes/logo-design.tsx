import { createFileRoute } from "@tanstack/react-router";
import Typography from "../components/Typography";
import Card from "../components/Card";
import Button from "../components/Button";
import CozySpaceLogo from "../assets/logos/CozySpaceLogo.png";
import BWCozySpaceLogo from "../assets/logos/BWCozySpaceLogo.png";
import monoCozySpaceLogo from "../assets/logos/monoCozySpaceLogo.png";
import HorizontalCozySpaceLogo from "../assets/logos/HorizontalCozySpaceLogo.png";
import VerticalCozySpaceLogo from "../assets/logos/VerticalCozySpaceLogo.png";
import CozySpaceLogoIcon from "../assets/logos/CozySpaceLogoIcon.png";
import CozySpaceLogoIcon_32 from "../assets/logos/CozySpaceLogoIcon_32.png";
import CozySpaceLogoIcon_16 from "../assets/logos/CozySpaceLogoIcon_16.png";

export const Route = createFileRoute("/logo-design")({
	component: LogoDesign,
});

function LogoDesign() {
	return (
		<div className="container section">
			<Typography variant="h1" className="mb-6">Logo Design</Typography>

			<div className="mb-12">
				<Card variant="feature" className="mb-8">
					<Typography variant="h2" className="mb-4">CozySpace Logo</Typography>
					<div className="flex justify-center mb-6 bg-gray-100 p-4 rounded-md">
						<img src={CozySpaceLogo} alt="CozySpace Logo" style={{ maxWidth: '150px', height: 'auto' }} />
					</div>
					<Typography variant="p" className="text-lg mb-6">
						Our main logo concept features a kawaii cloud character with gentle Ghibli-inspired aesthetic.
						The cloud represents "space" as a floating digital sanctuary for productivity.
					</Typography>
					<div className="grid grid-2 gap-6">
						<div>
							<Typography variant="h4" className="mb-3">Design Philosophy</Typography>
							<ul className="space-y-2">
								<li><strong>Cloud Character:</strong> Represents "space" as a floating digital sanctuary for productivity</li>
								<li><strong>Kawaii Aesthetic:</strong> Adorable facial expression creates emotional connection and reduces productivity anxiety</li>
								<li><strong>Ghibli Inspiration:</strong> Hand-drawn, organic feel conveys warmth, comfort, and approachability</li>
								<li><strong>Gentle Expression:</strong> Content, peaceful smile suggests stress-free productivity</li>
								<li><strong>Soft Color Harmony:</strong> Peach blush against cream creates welcoming, nurturing atmosphere</li>
							</ul>
						</div>
						<div>
							<Typography variant="h4" className="mb-3">Brand Messaging</Typography>
							<div className="space-y-2 text-sm">
								<p>"Your productivity lives in the clouds"</p>
								<p>"A happy place for focused work"</p>
								<p>"Where comfort meets accomplishment"</p>
								<p>"Your personal sky sanctuary"</p>
							</div>
						</div>
					</div>
				</Card>
			</div>

			<Typography variant="h2" className="mb-8">Logo Variations</Typography>

			<div className="grid grid-2 gap-8 mb-12">
				<Card>
					<Typography variant="h3" className="mb-4">Full Color Logo (Icon + Wordmark)</Typography>
					<div className="flex justify-center mb-4 bg-white p-4 rounded-md shadow-sm border border-gray-200">
						<img src={CozySpaceLogo} alt="Full Color Logo" style={{ maxWidth: '100px', height: 'auto' }} />
					</div>
					<Typography variant="p" className="mb-4">
						Primary brand applications, app icon, website header, marketing materials.
						Colors: Cream (#FFF8F0), Peach (#F4C2A1), Brown (#8B7355).
					</Typography>
					<Button variant="secondary" size="small">Download PNG</Button>
				</Card>

				<Card>
					<Typography variant="h3" className="mb-4">Black & White / Reversed Logo</Typography>
					<div className="flex justify-center mb-4 bg-white p-4 rounded-md shadow-sm border border-gray-200">
						<img src={BWCozySpaceLogo} alt="Black & White Logo" style={{ maxWidth: '100px', height: 'auto' }} />
					</div>
					<Typography variant="p" className="mb-4">
						Print materials, single-color applications, high contrast needs.
						High contrast for accessibility compliance.
					</Typography>
					<Button variant="secondary" size="small">Download BW</Button>
				</Card>

				<Card>
					<Typography variant="h3" className="mb-4">Monochromatic Logo</Typography>
					<div className="flex justify-center mb-4 bg-white p-4 rounded-md shadow-sm border border-gray-200">
						<img src={monoCozySpaceLogo} alt="Monochromatic Logo" style={{ maxWidth: '100px', height: 'auto' }} />
					</div>
					<Typography variant="p" className="mb-4">
						Watermarks, subtle branding, tone-on-tone applications.
						Single soft peach tone (#F4C2A1) at 50-80% opacity.
					</Typography>
					<Button variant="secondary" size="small">Download Mono</Button>
				</Card>

				<Card>
					<Typography variant="h3" className="mb-4">Horizontal Version</Typography>
					<div className="flex justify-center mb-4 bg-white p-4 rounded-md shadow-sm border border-gray-200">
						<img src={HorizontalCozySpaceLogo} alt="Horizontal Logo" style={{ maxWidth: '150px', height: 'auto' }} />
					</div>
					<Typography variant="p" className="mb-4">
						Website headers, business cards, wide format applications.
						Cloud icon left, "CozySpace" wordmark right with consistent padding.
					</Typography>
					<Button variant="secondary" size="small">Download Horizontal</Button>
				</Card>

				<Card>
					<Typography variant="h3" className="mb-4">Stacked/Vertical Version</Typography>
					<div className="flex justify-center mb-4 bg-white p-4 rounded-md shadow-sm border border-gray-200">
						<img src={VerticalCozySpaceLogo} alt="Vertical Logo" style={{ maxWidth: '75px', height: 'auto' }} />
					</div>
					<Typography variant="p" className="mb-4">
						Social media profiles, app stores, square format applications.
						Cloud icon top, "CozySpace" wordmark centered below.
					</Typography>
					<Button variant="secondary" size="small">Download Vertical</Button>
				</Card>

				<Card>
					<Typography variant="h3" className="mb-4">Icon-Only Variations</Typography>
					<div className="flex justify-center items-center gap-4 mb-4 bg-white p-4 rounded-md shadow-sm border border-gray-200">
						<img src={CozySpaceLogoIcon} alt="Large Icon" style={{ width: '48px', height: '48px' }} />
						<img src={CozySpaceLogoIcon_32} alt="Medium Icon" style={{ width: '32px', height: '32px' }} />
						<img src={CozySpaceLogoIcon_16} alt="Small Icon" style={{ width: '16px', height: '16px' }} />
					</div>
					<Typography variant="p" className="mb-4">
						App shortcuts, menu items, buttons, favicon, notifications.
						Available in 48x48px, 32x32px, and 16x16px sizes.
					</Typography>
					<Button variant="secondary" size="small">Download Icons</Button>
				</Card>
			</div>

		</div>
	);
}

export default LogoDesign;