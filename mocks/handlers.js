import {http, HttpResponse} from "msw";

// Array of interceptors
export const handlers = [
	
	http.get("http://localhost:3000/health", () => {
		return HttpResponse.json({status: "OK - mocked!"})
	}),
	http.get("http://localhost:3000/items", () => {
		return HttpResponse.json([
			{
				name: "Test Monitor"
			},
			{
				name: "Test Keyboard"
			},
		])
	}),
	http.post("http://localhost:3000/items", async ({request}) => {
		// { name, price, quantityInStock, category }

		const receivedItemData = await request.json();

		receivedItemData._id = "oswdgnhsolvknslvskdnvs"

		return HttpResponse.json(receivedItemData, {status: 201});
	})

];