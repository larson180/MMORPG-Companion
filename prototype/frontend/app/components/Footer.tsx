const footerLinks = [
	{ label: "Home", href: "#" },
	{ label: "About", href: "#about" },
	{ label: "Contact", href: "#contact" },
];

export default function Footer() {
	return (
		<footer className="sticky bottom-0 z-10 border-t border-gray-700 bg-gray-800 text-white">
			<div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
				<a href="#" className="text-lg font-semibold text-white">
					MMO Companion
				</a>

				<nav aria-label="Footer navigation">
					<ul className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-300">
						{footerLinks.map((link) => (
							<li key={link.label}>
								<a
									href={link.href}
									className="transition-colors hover:text-gray-300"
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</nav>

				<p className="text-sm text-gray-400">
					© {new Date().getFullYear()} MMO Companion. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
