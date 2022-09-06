import create from "zustand";

export type State = {};

export const useStore = create<State>((set) => ({}));
