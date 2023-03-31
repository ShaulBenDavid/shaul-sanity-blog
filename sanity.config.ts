import { DefaultDocument, defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "@/schemas";
import { myTheme } from "@/styles/theme";
import StudioNavbar from "@/components/StudioNavbar/StudioNavbar";
import { defaultDocumentNode } from "./defaultDocumentNode";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "";

export default defineConfig({
  basePath: "/studio",
  name: "Shaul_Dev_Blog",
  title: "shaul blog",

  projectId,
  dataset,

  plugins: [deskTool({ defaultDocumentNode }), visionTool()],

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