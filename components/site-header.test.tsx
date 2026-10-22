import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import SiteHeader from "./site-header";

describe("mobile navigation", () => {
  beforeEach(() => {
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "7px";
  });

  afterEach(() => {
    cleanup();
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
    vi.unstubAllGlobals();
  });

  it("restores scroll and button focus after Escape", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);
    const toggle = screen.getByRole("button", { name: "Open menu" });
    await user.click(toggle);
    const navigation = screen.getByRole("navigation", { name: "Mobile navigation" });
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(document.body.style.overflow).toBe("hidden");
    within(navigation).getByRole("link", { name: "The idea" }).focus();
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("navigation", { name: "Mobile navigation" })).not.toBeInTheDocument();
    expect(toggle).toHaveFocus();
    expect(document.body.style.overflow).toBe("auto");
    expect(document.body.style.paddingRight).toBe("7px");
  });

  it("closes from the backdrop and a section link", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);
    await user.click(screen.getByRole("button", { name: "Open menu" }));
    await user.click(document.querySelector(".mobile-menu-backdrop")!);
    expect(screen.getByRole("button", { name: "Open menu" })).toHaveFocus();
    expect(document.body.style.overflow).toBe("auto");
    await user.click(screen.getByRole("button", { name: "Open menu" }));
    const navigation = screen.getByRole("navigation", { name: "Mobile navigation" });
    await user.click(within(navigation).getByRole("link", { name: "Our work" }));
    expect(screen.queryByRole("navigation", { name: "Mobile navigation" })).not.toBeInTheDocument();
    expect(document.body.style.overflow).toBe("auto");
  });

  it("closes when keyboard focus leaves the header", async () => {
    const user = userEvent.setup();
    render(<><SiteHeader /><button>Next control</button></>);
    await user.click(screen.getByRole("button", { name: "Open menu" }));
    const navigation = screen.getByRole("navigation", { name: "Mobile navigation" });
    within(navigation).getByRole("link", { name: "Discuss my restaurant" }).focus();
    await user.tab();
    expect(screen.getByRole("button", { name: "Next control" })).toHaveFocus();
    expect(screen.queryByRole("navigation", { name: "Mobile navigation" })).not.toBeInTheDocument();
    expect(document.body.style.overflow).toBe("auto");
  });

  it("restores scroll when unmounted with an open menu", async () => {
    const user = userEvent.setup();
    const { unmount } = render(<SiteHeader />);
    await user.click(screen.getByRole("button", { name: "Open menu" }));
    unmount();
    expect(document.body.style.overflow).toBe("auto");
    expect(document.body.style.paddingRight).toBe("7px");
  });
});
