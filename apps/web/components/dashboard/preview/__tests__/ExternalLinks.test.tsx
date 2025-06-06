import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ExternalLinks } from "../BookmarkPreview";

describe("ExternalLinks", () => {
  it("renders archive link", () => {
    const url = "https://example.com";
    render(<ExternalLinks url={url} />);
    const archive = screen.getByText(/View Archived/i);
    expect(archive).toHaveAttribute(
      "href",
      `https://web.archive.org/web/${encodeURIComponent(url)}`,
    );
  });
});
