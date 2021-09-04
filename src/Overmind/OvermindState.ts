import { IDashboardFilterValues } from "../../interfaces";

export interface State {
    isSignInDialogShowing: boolean;
    isSignUpDialogShowing: boolean;
    isLoadingDialogShowing: boolean;

    snackbarText: string,

    isFilterDrawerOpen: boolean,
    isProfileInfoDrawerOpen: boolean,

    markedFilters: Array<boolean>,
    selectedRoomIndex: number,
    selectedRentIndex: number,
    selectedAmenitiesIndex: number,
    distanceFromCurrentLocation: number,
    cost: number,
}

export const state: State = {
    //
    isSignInDialogShowing: false,
    isSignUpDialogShowing: false,
    isLoadingDialogShowing: false,
    // 
    snackbarText: "",
    //
    isFilterDrawerOpen: false,
    markedFilters: [false, false, false, false],
    selectedRoomIndex: 0,
    selectedRentIndex: 0,
    selectedAmenitiesIndex: 0,
    distanceFromCurrentLocation: 0,
    cost: 0,

    isProfileInfoDrawerOpen: false,
}
