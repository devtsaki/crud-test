import { render, screen } from "@testing-library/react";

import Actions from "./Actions";

describe("Actions component", () => {
  const onEdit = jest.fn();
  const onDelete = jest.fn();

  it("will render '✎' button", () => {
    render(<Actions onEdit={onEdit} onDelete={onDelete} />);

    const element = screen.getByText("✎");

    expect(element).toBeTruthy();
  });

  it("will render '🗑' button", () => {
    render(<Actions onEdit={onEdit} onDelete={onDelete} />);

    const element = screen.getByText("🗑");

    expect(element).toBeTruthy();
  });
});
