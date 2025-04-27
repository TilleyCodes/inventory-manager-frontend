import { useEffect, useState } from "react"

export default function ApiHealthWidget(){

	let [healthCheckResult, setHealthCheckResult] = useState("");

	useEffect(() => {

		const checkApiHealth = async () => {
			let response = await fetch("http://localhost:3000/health");
			let data = await response.json();

			console.log(data);

			setHealthCheckResult(data);
		}

		checkApiHealth();

	}, []);

	return (
		<div>
			<p>{healthCheckResult.status}</p>
		</div>
	)
}