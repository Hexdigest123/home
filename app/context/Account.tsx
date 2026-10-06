import { createContext, useContext, useState } from "react";
import type { Account } from "../types";

const Context = createContext<[Account, (account: Account) => void] | null>(
  null,
);

export function AccountProvider({ children }: { children: React.ReactNode }) {
  const [account, setAccount] = useState<Account>({
    id: "",
    name: "",
    username: null,
    email: "",
    password: "",
    profileImage: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  });

  return (
    <Context.Provider value={[account, setAccount]}>
      {children}
    </Context.Provider>
  );
}

export function useAccountContext() {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useAccountContext must be used within an AccountProvider");
  }
  return context;
}
