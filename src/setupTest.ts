import "@testing-library/jest-dom/vitest";
import "@testing-library/user-event";
import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "./mocks/node";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
