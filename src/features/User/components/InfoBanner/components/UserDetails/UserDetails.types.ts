import type { UserDetailsType } from "@/src/api/user";

export interface CategorizedDetailsType {
  positions: UserDetailsType[];
  extraDetails: UserDetailsType[];
}
