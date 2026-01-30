import {create} from "zustand"

interface LightRoomState {
    isOpen: boolean;
    indexSelect: number | null;
    setIsOpen: (isOpen: boolean) => void;
    setIndexSelect?: (index: number | null) => void;
    handleOpen: () => void;
    handleClose: () => void;
}

export const useLightRoom = create<LightRoomState>((set) => ({
    isOpen: false,
    indexSelect: null,

    setIsOpen: (isOpen: boolean) => set({isOpen}),

    handleOpen: () => {
        set({isOpen: true});
    },

    setIndexSelect: (index: number | null) => {
        set({indexSelect: index});
        set({isOpen: true});
    },

    handleClose: () => {
        set({isOpen: false});
        set({indexSelect: null});
    },
}));   