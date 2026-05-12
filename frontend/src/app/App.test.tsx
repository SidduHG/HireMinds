import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { App } from "./App";

describe("App", () => {
  it("renders the Foundation shell", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: "HireMinds" })).toBeInTheDocument();
    expect(screen.getByText("Foundation domain is running.")).toBeInTheDocument();
    expect(screen.getByText("API: /api/health")).toBeInTheDocument();
  });
});
