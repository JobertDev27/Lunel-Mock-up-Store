import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HeadingTest from "./HeadingText";

describe("Header component", () => {
  it("Displays a h1 element with 'Hello world'", () => {
    render(<HeadingTest message={"Hello world"} />);
    expect(screen.getByText("Hello world")).toBeInTheDocument();
  });
});
