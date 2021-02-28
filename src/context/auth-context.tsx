import React, {
  ReactNode,
  FC,
  useState,
  useContext,
  createContext,
} from "react";

interface IAuthContext {}

interface IAuthProvider {
  children: ReactNode;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

AuthContext.displayName = "AuthContext";

export const AuthProvider: FC<IAuthProvider> = (props) => {
  const { children } = props;

  const [loginState, setLoginState] = useState<boolean>(false);

  return (
    <AuthContext.Provider
      children={children}
      value={{ loginState, setLoginState }}
    />
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth必须在AuthProvider中使用");
  }

  return context;
};
