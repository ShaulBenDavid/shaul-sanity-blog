import type { ReactElement } from "react";
import React from "react";
import type { RenderOptions } from "@testing-library/react";
import { render } from "@testing-library/react";
import { QueryProvider } from "@/src/providers/query.provider";
import { AuthContextProvider } from "@/src/context/auth";
import { AxiosInterceptor } from "@/src/api";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useSelectedLayoutSegment: (): string => "/sign-in",
}));

const AllTheProviders = ({ children }: { children: JSX.Element }) => {
  return (
    <QueryProvider>
      <AuthContextProvider>
        <AxiosInterceptor>{children}</AxiosInterceptor>
      </AuthContextProvider>
    </QueryProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
