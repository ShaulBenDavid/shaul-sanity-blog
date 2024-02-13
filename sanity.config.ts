import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import schemaTypes from "@/src/sanity/schemas";
import myTheme from "@/src/styles/theme";
import { StudioNavbar } from "@/src/components/StudioNavbar/StudioNavbar";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "";

export default defineConfig({
  basePath: "/studio",
  name: "Shaul_Dev_Blog",
  title: "shaul blog",

  projectId,
  dataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      navbar: StudioNavbar,
    },
  },
  theme: myTheme,
});
