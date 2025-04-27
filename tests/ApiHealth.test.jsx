import { render, screen } from "@testing-library/react";

import ApiHealthWidget from "../src/components/ApiHealthCheck.jsx";
import { test, expect, vi, beforeAll, afterEach, afterAll } from "vitest";

// MSW interceptor server!
import { server } from "../mocks/node.js";
// Before every test, make sure the MSW server is running
beforeAll(() => {
	server.listen();
});

// After each individual test, reset the mock server
// so it's fresh for every other test
afterEach(() => {
	server.resetHandlers();
});

// After all tests are completed, close the mock server
// so that the test watcher can finish up
afterAll(() => {
	server.close();
});


test("Health check widget sees the API health route", async () => {
	render(<ApiHealthWidget />);

	vi.waitFor(() => {
		let healthCheckTextElement = screen.getByText("OK");
		
		expect(healthCheckTextElement).toBeInTheDocument();
	});

});



// test("Health check widget sees the API health route", async () => {
// 	let renderResult = render(<ApiHealthWidget />);

// 	let healthCheckTextElement = screen.getByText("ERROR");

// 	expect(healthCheckTextElement).toBeInTheDocument();
// });