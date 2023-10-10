export default function LoginSubmitted({ submitted }) {
	return (
		<div className="content-grid home-hero">
			<h1>Link Sent</h1>
			<p>
				Check your email <strong>{submitted}</strong> for the login
				link. You can also check your spam folder if you don't see it in
				your inbox.
			</p>
		</div>
	);
}
