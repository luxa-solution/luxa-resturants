import { describe, expect, it } from "vitest";
import { generateMetadata } from "./page";
import { projects } from "@/lib/projects";

describe("project metadata", () => {
  it("gives each project its own canonical URL", async () => {
    for (const project of projects) {
      const metadata = await generateMetadata({
        params: Promise.resolve({ slug: project.slug }),
      });
      expect(metadata.alternates?.canonical).toBe(`/projects/${project.slug}`);
      expect(metadata.openGraph?.url).toBe(`/projects/${project.slug}`);
    }
  });
});
