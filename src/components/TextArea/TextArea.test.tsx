import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { render } from "test-utils";
import { TextArea } from "./TextArea";

describe("TextArea", () => {
  const Wrapper = (props: { children: JSX.Element }) => {
    const formMethods = useForm();

    return <FormProvider {...formMethods}>{props.children}</FormProvider>;
  };
  it("Label renders correctly", () => {
    const { getByText } = render(
      <Wrapper>
        <TextArea idFor="email" label="email" />
      </Wrapper>,
    );
    const buttonElement = getByText("Email");
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders correctly with variant color", () => {
    const { getByText } = render(
      <Wrapper>
        <TextArea idFor="email" label="email" />
      </Wrapper>,
    );
    const inputElement = getByText("Email");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass("text-secondary-950");
  });

  it("renders the correct number of rows", () => {
    const { getByTestId } = render(
      <Wrapper>
        <TextArea idFor="text" label="text" rows={10} />
      </Wrapper>,
    );
    const textArea = getByTestId("textarea-component-test-id");
    expect(textArea).toBeInTheDocument();
    expect(textArea).toHaveProperty("rows", 10);
  });
});
