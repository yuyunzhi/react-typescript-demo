import React, { ReactNode } from "react";
import { AuthProvider } from "./auth-context";
// import { QueryClient, QueryClientProvider } from "react-query";

export const AppProviders = (props: { children: ReactNode }) => {
  const { children } = props;

  // const queryClient = new QueryClient();

  return <AuthProvider>{children}</AuthProvider>;

  // return (
  //   <QueryClientProvider client={queryClient}>
  //     <AuthProvider>{children}</AuthProvider>
  //   </QueryClientProvider>
  // );
};
