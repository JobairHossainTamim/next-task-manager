"use client";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { Toaster } from "react-hot-toast";

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <Provider store={store}>{children}</Provider>
    </div>
  );
};

export default ReduxProvider;
