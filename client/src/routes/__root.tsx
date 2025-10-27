import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"; // Corrected import

export const Route = createRootRoute({
	component: () => (
		<div className="min-h-screen bg-[var(--color-background)]">
			<nav className="nav">
				<div className="container">
					<div className="flex items-center justify-between">
						<Link to="/" className="text-2xl font-bold text-[var(--color-text-primary)] no-underline">
							CozySpace Style Guide
						</Link>
						<ul className="nav-links">
							<li><Link to="/" className="nav-link">Home</Link></li>
							<li><Link to="/logo-design" className="nav-link">Logo Design</Link></li>
							<li><Link to="/color-palette" className="nav-link">Color Palette</Link></li>
							<li><Link to="/typography" className="nav-link">Typography</Link></li>
							<li><Link to="/graphics-icons" className="nav-link">Graphics & Icons</Link></li>
						</ul>
					</div>
				</div>
			</nav>
			<main>
				<Outlet />
			</main>
			<TanStackRouterDevtools />
		</div>
	),
});
