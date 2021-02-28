import React, {
  ReactNode,
  FC,
  useState,
  useContext,
  createContext,
  useEffect,
} from "react";

interface IAuthContext {
  loginState: boolean;
  setLoginState: (r: any) => void;
}

interface IAuthProvider {
  children: ReactNode;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

AuthContext.displayName = "AuthContext";

const localStorageKey = "__auth_provider_token__";

const bootstrapToken = () => {
  const token = window.localStorage.getItem(localStorageKey);
  return token || "";
};

export const AuthProvider: FC<IAuthProvider> = (props) => {
  const { children } = props;

  const [loginState, setLoginState] = useState<boolean>(false);

  // 初始化从storage里取值
  useEffect(() => {
    const token = bootstrapToken();
    console.log("token", token);
    setLoginState(!!token);
  }, []);

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
