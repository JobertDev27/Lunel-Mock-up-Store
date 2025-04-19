import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import CategoryBanner from "./CategoryBanner";
import Shop from "../../Shop";

describe("Banner that links to shop", () => {
  it("Links to shop", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<CategoryBanner />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </MemoryRouter>
    );
    const user = userEvent.setup();
    const shopLink = screen.getByRole("link", { name: /SHOP NOW/i });
    await user.click(shopLink);
    expect(screen.getByText(/welcome to the shop page/i)).toBeInTheDocument();
  });
});
