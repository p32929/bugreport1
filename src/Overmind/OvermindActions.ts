import { IDashboardFilterValues } from '../../interfaces'
import { Context } from './OvermindHelper'

//
export const showSignInDialog = ({ state }: Context, b: boolean) => {
    state.isSignInDialogShowing = b
}

export const showSignUpDialog = ({ state }: Context, b: boolean) => {
    state.isSignUpDialogShowing = b
}

export const showLoadingDialog = ({ state }: Context, b: boolean) => {
    state.isLoadingDialogShowing = b
}

export const setSnackbarText = ({ state }: Context, text: string) => {
    state.snackbarText = text
}

export const showFilterDrawer = ({ state }: Context, b: boolean) => {
    state.isFilterDrawerOpen = b
}

export const setSelectedRoomTypeIndex = ({ state }: Context, b: number) => {
    state.selectedRoomIndex = b
}

export const setSelectedRentTypeIndex = ({ state }: Context, b: number) => {
    state.selectedRentIndex = b
}

export const setSelectedAmenitiesTypeIndex = ({ state }: Context, b: number) => {
    state.selectedAmenitiesIndex = b
}

export const showProfileInfoDrawer = ({ state }: Context, b: boolean) => {
    state.isProfileInfoDrawerOpen = b
}

export const markFilter = ({ state }: Context, value: {
    index: number,
    isMarked: boolean
}) => {
    state.markedFilters[value.index] = value.isMarked
}