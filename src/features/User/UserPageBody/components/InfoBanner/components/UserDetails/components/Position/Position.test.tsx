import React from "react";
import { camelCaseToWords } from "@/src/utils";
import { render } from "@/src/tests";
import { Position } from "./Position";

describe("Position component", () => {
  it("renders without crashing", () => {
    const type = "exampleType";
    const value = "exampleValue";

    render(<Position type={type} value={value} />);
  });

  it("renders the correct type and value", () => {
    const type = "exampleType";
    const value = "exampleValue";

    const { getByText } = render(<Position type={type} value={value} />);
    const typeElement = getByText(camelCaseToWords(type));
    const valueElement = getByText("exampleValue");

    expect(typeElement).toBeInTheDocument();
    expect(valueElement).toBeInTheDocument();
  });

  it("renders type in the correct format", () => {
    const type = "exampleType";
    const value = "exampleValue";
    const VALUE_RESULT = "Example Type";

    const { getByText } = render(<Position type={type} value={value} />);
    const typeElement = getByText(camelCaseToWords(type));

    expect(typeElement).toHaveTextContent(VALUE_RESULT);
  });
});
