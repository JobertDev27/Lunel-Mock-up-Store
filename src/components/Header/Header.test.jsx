import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Header from "./Header";
import Shop from "../../Shop";
import Home from "../../Home";
import Contact from "../../Contact";
import Cart from "../../Cart";

describe("Header component", () => {
  it("Displays the title", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText(/LUNEL/i)).toBeInTheDocument();
  });

  it("Displays the navlink", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText(/HOME/i)).toBeInTheDocument();
    expect(screen.getByText(/SHOP/i)).toBeInTheDocument();
    expect(screen.getByText(/CONTACT US/i)).toBeInTheDocument();
    expect(screen.getByText(/CART/i)).toBeInTheDocument();
  });

  it("Links to each respective pagefront", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </MemoryRouter>
    );
    const user = userEvent.setup();
    const homeLink = screen.getAllByText(/HOME/i);
    const shopLink = screen.getByText(/SHOP/i);
    const contactLink = screen.getByText(/CONTACT US/i);
    const cartLink = screen.getByText(/CART/i);

    await user.click(shopLink);
    expect(screen.getByText(/welcome to the shop page/i)).toBeInTheDocument();

    await user.click(contactLink);
    expect(
      screen.getByText(/welcome to the contact page/i)
    ).toBeInTheDocument();

    await user.click(cartLink);
    expect(screen.getByText(/welcome to the cart page/i)).toBeInTheDocument();

    await user.click(homeLink[0]);
    expect(screen.getByText(/welcome to home page/i)).toBeInTheDocument();
  });
});
