import type { Topic } from "../../types";

export type GetTopics = Pick<Topic, "slug" | "title">[];
