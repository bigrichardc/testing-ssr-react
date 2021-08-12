/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";

import App from "./app.component";

describe("App", () => {
  test("renders App component", () => {
    render(<App name="Richard" />);
    const h1Elem = document.querySelector("h1"); // <h1>
    expect(h1Elem.textContent).toBe("Richard");
  });

  test("mouse click events", () => {
    render(<App name="Richard" />);
    const h2Elem = document.querySelector("h2"); // <h2>
    const btnElem = document.querySelector("button");
    btnElem.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(h2Elem.textContent).toBe("count: 1");
  });
});
