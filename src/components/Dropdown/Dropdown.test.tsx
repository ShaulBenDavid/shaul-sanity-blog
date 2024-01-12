import React from "react";
import { act, fireEvent, render } from "test-utils";
import { Dropdown } from "./Dropdown";

describe("Dropdown component", () => {
  it("renders without crashing", () => {
    const label = "Test Label";
    const isOpen = false;
    const trigger = <span>Trigger</span>;
    const setState = jest.fn();

    render(
      <Dropdown
        label={label}
        isOpen={isOpen}
        trigger={trigger}
        setState={setState}
      >
        <div>Dropdown Content</div>
      </Dropdown>,
    );
  });

  it("opens and closes on button click", () => {
    const label = "Test Label";
    const isOpen = false;
    const trigger = <span>Trigger</span>;
    const setState = jest.fn();

    const { getByLabelText, getByTestId } = render(
      <Dropdown
        label={label}
        isOpen={isOpen}
        trigger={trigger}
        setState={setState}
      >
        <div>Dropdown Content</div>
      </Dropdown>,
    );

    act(() => {
      getByLabelText(label).focus();
    });

    act(() => {
      fireEvent.keyDown(getByTestId("dropdown-component-test-id"), {
        key: "Escape",
      });
    });

    expect(setState).toHaveBeenLastCalledWith(false);

    act(() => {
      fireEvent.keyDown(getByTestId("dropdown-component-test-id"), {
        key: "ArrowDown",
      });
    });

    expect(setState).toHaveBeenLastCalledWith(false);
  });
});
