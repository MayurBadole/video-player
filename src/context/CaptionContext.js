import React, { createContext, useState } from "react";

export const CaptionContext = createContext();

const CaptionProvider = ({ children }) => {
  const [captions, setCaptions] = useState([]);

  const addCaption = (caption) => {
    setCaptions([...captions, caption]);
  };

  const removeCaption = (index) => {
    setCaptions(captions.filter((_, i) => i !== index));
  };

  const updateCaption = (index, updatedCaption) => {
    const newCaptions = [...captions];
    newCaptions[index] = updatedCaption;
    setCaptions(newCaptions);
  };

  return (
    <CaptionContext.Provider
      value={{ captions, addCaption, removeCaption, updateCaption }}
    >
      {children}
    </CaptionContext.Provider>
  );
};
export default CaptionProvider;
