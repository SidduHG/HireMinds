import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { App } from "./App";

describe("App", () => {
  it("renders the Public Website landing page", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: "Practice interviews built around your resume and target role.",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("Resume intelligence")).toBeInTheDocument();
    expect(screen.getByText("One focused flow from resume to readiness report.")).toBeInTheDocument();
    expect(screen.getByText("A score report candidates can actually use.")).toBeInTheDocument();
  });
});
