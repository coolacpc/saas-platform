import Link from "next/link";

export default function SubscriberCard() {
	return (
		<section>
			<div>
				<h4>See All Products</h4>
				<p style={{ fontSize: "1rem" }}>Go Back For More...</p>
			</div>
			<Link href="/products" className="primary button">
				Products
			</Link>
		</section>
	);
}
