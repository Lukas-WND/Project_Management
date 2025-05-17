import Column from "@/@types/column";
import Phase from "@/@types/phase";

import { create } from "zustand";

type PhaseDataStore = {
  columns: Column[];
  setColumns: (c: Phase) => void;
};

const usePhaseData = create((set) => {});
