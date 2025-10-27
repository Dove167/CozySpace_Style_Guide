import { createFileRoute, Link } from "@tanstack/react-router";
import Typography from "../components/Typography";
import Card from "../components/Card";
import Button from "../components/Button";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<div className="container section">
			<div className="text-center mb-12">
				<Typography variant="h1" className="mb-4">
					Welcome to CozySpace Style Guide
				</Typography>
				<Typography variant="p" className="text-lg max-w-2xl mx-auto">
					Your comprehensive guide to the CozySpace design system. Explore our cloud-inspired aesthetic,
					color palette, typography, and UI components designed for peaceful productivity.
				</Typography>
			</div>

			<div className="grid grid-3 mb-12">
				<Card variant="feature">
					<Typography variant="h3" className="mb-3">Logo Design</Typography>
					<Typography variant="p" className="mb-4">
						Discover our kawaii cloud character and comprehensive logo variations
						designed to create an emotional connection with users.
					</Typography>
					<Link to="/logo-design">
						<Button variant="primary" size="small">View Logos</Button>
					</Link>
				</Card>

				<Card variant="feature">
					<Typography variant="h3" className="mb-3">Color Palette</Typography>
					<Typography variant="p" className="mb-4">
						Warm, nurturing colors inspired by gentle morning light and cozy environments
						that reduce stress while maintaining focus.
					</Typography>
					<Link to="/color-palette">
						<Button variant="primary" size="small">Explore Colors</Button>
					</Link>
				</Card>

				<Card variant="feature">
					<Typography variant="h3" className="mb-3">Typography & UI</Typography>
					<Typography variant="p" className="mb-4">
						Rounded, approachable typography and soft UI components that complement
						our cloud's gentle aesthetic.
					</Typography>
					<Link to="/typography">
						<Button variant="primary" size="small">See Components</Button>
					</Link>
				</Card>
			</div>

			<div className="text-center">
				<Typography variant="h2" className="mb-6">Ready to get started?</Typography>
				<div className="flex gap-4 justify-center">
					<Link to="/typography">
						<Button variant="primary">Browse All Sections</Button>
					</Link>
					<Button variant="secondary">Download Assets</Button>
				</div>
			</div>
		</div>
	);
}

export default Index;
