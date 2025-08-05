import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Counter from "./Counter";

describe("Counter", () => {
  it("should render", () => {
    render(<Counter />);
    expect(screen.getByTestId("count")).toBeInTheDocument();
    expect(screen.getByTestId("increment")).toBeInTheDocument();
    expect(screen.getByTestId("decrement")).toBeInTheDocument();
    expect(screen.getByTestId("reset")).toBeInTheDocument();
  });

  it("should render initial value", () => {
    render(<Counter initial={5} />);
    expect(screen.getByTestId("count")).toHaveTextContent("5");
  });

  it("should increment", async () => {
    render(<Counter initial={5} />);
    const incrementButton = screen.getByTestId("increment");
    const user = userEvent.setup();
    await user.click(incrementButton);

    expect(screen.getByTestId("count")).toHaveTextContent("6");
  });

  it("should decrement", async () => {
    render(<Counter initial={5} />);
    const incrementButton = screen.getByTestId("decrement");
    const user = userEvent.setup();
    await user.click(incrementButton);

    expect(screen.getByTestId("count")).toHaveTextContent("4");
  });

  it("should reset", async () => {
    render(<Counter initial={5} />);
    const resetButton = screen.getByTestId("reset");
    const user = userEvent.setup();
    await user.click(resetButton);
    expect(screen.getByTestId("count")).toHaveTextContent("5");
  });

  it("should increment by step", async () => {
    render(<Counter initial={5} step={2} />);
    const incrementButton = screen.getByTestId("increment");
    const user = userEvent.setup();
    await user.click(incrementButton);
    expect(screen.getByTestId("count")).toHaveTextContent("7");
  });
});
