import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import ShopBtn from "./ShopBtn";
import Shop from "../../Shop";

describe("Shop button", () => {
  it("Takes user to shop page", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <ShopBtn />
        <Routes>
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </MemoryRouter>
    );
    const user = userEvent.setup();
    const shopBtn = screen.getByText(/SHOP NOW/i);

    await user.click(shopBtn);
    expect(screen.getByText(/welcome to the shop page/i)).toBeInTheDocument();
  });
});
