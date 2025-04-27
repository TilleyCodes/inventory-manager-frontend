import { render, screen } from "@testing-library/react";
import { test, expect, vi, beforeAll, afterEach, afterAll } from "vitest";
import ItemList from "../src/components/ItemList.jsx";



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


test("ItemList retrieves a list of item objects from the API", async () => {
	render(<ItemList />);

	vi.waitFor(() => {
		let testMonitorTextElement = screen.getByText("Test Monitor");
		expect(testMonitorTextElement).toBeInTheDocument();

		let testKeyboardTextElement = screen.getByText("Test Keyboard");
		expect(testKeyboardTextElement).toBeInTheDocument();
	})
});