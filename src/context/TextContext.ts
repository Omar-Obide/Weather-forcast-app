import React from "react";

interface textContextType {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const TextContext = React.createContext<textContextType>({} as textContextType);

export default TextContext;
