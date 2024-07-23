import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { DataGrid } from "../../src/components/data-grid";
import React from "react";
import '@testing-library/jest-dom/vitest'

describe("App", () => {
  it("should render No Data", () => {

    // passe empty array

    render(
      <DataGrid data={[]} setOpen={() => {}} setSelectedItem={() => {}} />
    );
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
});
