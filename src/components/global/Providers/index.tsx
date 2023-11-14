import { PropsWithChildren } from "react";
import AntdProvider from "./Antd";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <AntdProvider>
      {children} 
    </AntdProvider>
  )
}

export default Providers;