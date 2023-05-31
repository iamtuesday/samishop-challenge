import { create } from "zustand";
import { persist } from "zustand/middleware";

type CharacterState = {
  position: number;
  name: string;
  setPosition: (position: number) => void;
  setName: (name: string) => void;
};

const useCharacterStore = create(
  persist<CharacterState>(
    (set) => ({
      position: 0,
      name: "",
      setPosition: (position) => set(() => ({ position })),
      setName: (name) => set(() => ({ name })),
    }),
    {
      name: "character-storage",
    }
  )
);

export default useCharacterStore;
