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
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/shop"
            element={
              <>
                <Header />
                <Shop />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Header />
                <Contact />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <Header />
                <Cart />
              </>
            }
          />
        </Routes>
      </MemoryRouter>
    );
    const user = userEvent.setup();
    const homeLink = screen.getAllByText(/HOME/i);
    const shopLink = screen.getAllByText(/SHOP/i);
    const contactLink = screen.getAllByText(/CONTACT US/i);
    const cartLink = screen.getAllByText(/CART/i);

    await user.click(shopLink[0]);
    expect(shopLink[0]).toBeInTheDocument();
    expect(shopLink[0]).toHaveAttribute("href", "/shop");

    await user.click(contactLink[0]);
    expect(contactLink[0]).toBeInTheDocument();
    expect(contactLink[0]).toHaveAttribute("href", "/contact");

    await user.click(cartLink[0]);
    expect(cartLink[0]).toBeInTheDocument();
    expect(cartLink[0]).toHaveAttribute("href", "/cart");

    await user.click(homeLink[0]);
    expect(homeLink[0]).toBeInTheDocument();
    expect(homeLink[0]).toHaveAttribute("href", "/");
  });
});
