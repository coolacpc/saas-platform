const benefits = [
	{
		title: "One Low Price",
		subtitle:
			"Save big, Get Everything with a super low monthly subscription.",
	},
	{
		title: "No Limits",
		subtitle: "Get complete access to everything on the site.",
	},
	{
		title: "Cancel Anytime",
		subtitle: "Pause or Stop your subscription whenever you like.",
	},
];

export default function Benefits() {
	return (
		<div className="bg-black">
			<div className="column-padding">
				<div className="content-grid xl">
					{benefits.map((benefits) => (
						<div key={benefits.title} className="spacing-base">
							<h3>
								{benefits.title}
								<br />
							</h3>
							<div>{benefits.subtitle}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
