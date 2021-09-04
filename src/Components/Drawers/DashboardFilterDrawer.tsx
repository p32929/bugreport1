import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Checkbox, Divider, Drawer, FormControlLabel, Grid, Slider, Theme, Typography } from "@material-ui/core";
import { useActions, useAppState } from '../../Overmind/OvermindHelper';
import { SvgIcons } from '../../Others/SvgIcons';
import SvgHelper from '../Helpers/SvgHelper';
import { ISortByFilter } from '../../../interfaces';
import { state } from '../../Overmind/OvermindState';

interface Props {

}

const getThemeObj = (theme: Theme) => {
    return {}
}

const useStyles = makeStyles((theme: Theme) => (getThemeObj(theme)))

const DashboardFilterDrawer: React.FC<Props> = (props) => {
    const actions = useActions()
    const states = useAppState()

    //
    // const [selectedRoomTypeIndex, setSelectedRoomTypeIndex] = useState(0)
    // const [selectedRentTypeIndex, setSelectedRentTypeIndex] = useState(0)
    // const [selectedAmenitiesTypeIndex, setSelectedAmenitiesTypeIndex] = useState(0)
    const [distance, setDistance] = useState(0)
    const [cost, setCost] = useState(0)

    const classes = useStyles();

    const onDrawerClose = () => {
        actions.showFilterDrawer(false)
    }

    const sortByFilters: Array<ISortByFilter> = [
        {
            title: "Revelance",
        },
        {
            title: "Price",
            onclick: () => {
                console.log("Price")
            }
        },
        {
            title: "Rating",
            onclick: () => {

            }
        },
        {
            title: "Newest",
        },
    ];

    const roomTypeFilters = [
        {
            img: SvgIcons.door,
            text: "Studio",
        },
        {
            img: SvgIcons.bed,
            text: "1Bed",
        },
        {
            img: SvgIcons.bed,
            text: "2Bed",
        },
        {
            img: SvgIcons.bed,
            text: "3Bed",
        },
        {
            img: SvgIcons.bed,
            text: "4Bed",
        },
        {
            img: SvgIcons.bed,
            text: "5Bed",
        },
    ];

    const rentTypeFilters = [
        {
            img: SvgIcons.apartment,
            text: "Apartment",
        },
        {
            img: SvgIcons.condo,
            text: "Condo",
        },
        {
            img: SvgIcons.door,
            text: "Share room",
        },
        {
            img: SvgIcons.home,
            text: "House",
        },
    ];

    const amenitiesFilters = [
        {
            img: SvgIcons.ac,
            text: "AC",
        },
        {
            img: SvgIcons.wifi,
            text: "WiFi",
        },
        {
            img: SvgIcons.parking,
            text: "Parking",
        },
        {
            img: SvgIcons.swim,
            text: "Swimming",
        },
        {
            img: SvgIcons.gym,
            text: "Gym",
        },
        {
            img: SvgIcons.kids,
            text: "Kids Play Area",
        },
        {
            img: SvgIcons.garden,
            text: "Garden",
        },
        {
            img: SvgIcons.home,
            text: "Clubhouse",
        },
    ];

    return <Drawer
        anchor="right"
        open={states.isFilterDrawerOpen}
        onClose={onDrawerClose}
    >
        <Grid
            container
            direction="column"
            style={{
                padding: 16,
                textAlign: "center",
                backgroundColor: "#f3f3f3",
                width: 400,
            }}
        >
            {/* Sort by */}
            <Grid
                container
                direction="column"
                justifyContent="center"
                style={{
                    backgroundColor: "white",
                    padding: "16px 8px",
                    marginBottom: 8,
                }}
            >
                <Typography variant="body1" style={{ padding: 12 }}>
                    Sort by
                </Typography>
                <Grid container direction="row" spacing={1} justifyContent="center">
                    {sortByFilters.map((value, index, array) => {
                        const onButtonClicked = () => {
                            const { onclick } = sortByFilters[index]
                            if (onclick == undefined || onclick == null) {
                                actions.markFilter({
                                    index: index,
                                    isMarked: !states.markedFilters[index]
                                })
                            }
                            else {
                                onclick();
                            }
                        }

                        return (
                            <Grid key={index} item>
                                <Button size="small"
                                    variant={states.markedFilters[index] ? "contained" : "outlined"}
                                    color="primary" onClick={
                                        onButtonClicked
                                    }>
                                    {value.title}
                                </Button>
                            </Grid>
                        );
                    })}
                </Grid>
            </Grid>

            {/* Room Type */}
            <Grid
                container
                direction="column"
                justifyContent="center"
                style={{
                    backgroundColor: "white",
                    padding: "16px 8px",
                    marginBottom: 8,
                }}
            >
                <Typography variant="body1">Room type</Typography>
                <Grid
                    style={{ paddingLeft: 8, paddingRight: 8, paddingTop: 8 }}
                    container
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                >
                    {roomTypeFilters.map((value, index, array) => {
                        var getColor = (index: number): string => {
                            const notSelectedColor = "#ebd4da"
                            const selectedColor = "#96465b"
                            const isSelected = state.selectedRoomIndex == index
                            const color = isSelected ? selectedColor : notSelectedColor
                            return color;
                        }

                        return (
                            <Grid
                                item
                                xs
                                key={index}
                                container
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                                alignContent="center"
                                onClick={() => {
                                    actions.setSelectedRoomTypeIndex(index)
                                }}
                                style={{
                                    cursor: "pointer"
                                }}
                            >
                                <SvgHelper path={value.img} color={getColor(index)} size={36} />
                                <Typography>{value.text}</Typography>
                            </Grid>
                        );
                    })}
                </Grid>
            </Grid>

            {/* Rent type */}
            <Grid
                container
                direction="column"
                justifyContent="center"
                style={{
                    backgroundColor: "white",
                    padding: "16px 8px",
                    marginBottom: 8,
                }}
            >
                <Typography variant="body1">Rent type</Typography>
                <Grid
                    style={{ paddingLeft: 8, paddingRight: 8, paddingTop: 8 }}
                    container
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                >
                    {rentTypeFilters.map((value, index, array) => {
                        var getColor = (index: number): string => {
                            const notSelectedColor = "#ebd4da"
                            const selectedColor = "#96465b"
                            const isSelected = state.selectedRentIndex == index
                            const color = isSelected ? selectedColor : notSelectedColor
                            return color;
                        }

                        return (
                            <Grid
                                item
                                xs
                                container
                                key={index}
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                                alignContent="center"
                                wrap="nowrap"
                                onClick={() => {
                                    actions.setSelectedRentTypeIndex(index)
                                }}
                                style={{
                                    cursor: "pointer",
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                <SvgHelper path={value.img} color={getColor(index)} size={36} />
                                <Typography>{value.text}</Typography>
                            </Grid>
                        );
                    })}
                </Grid>
            </Grid>

            {/* Amenities */}
            <Grid
                container
                direction="column"
                justifyContent="center"
                style={{
                    backgroundColor: "white",
                    padding: "16px 8px",
                    marginBottom: 8,
                }}
            >
                <Typography variant="body1">Amenities</Typography>
                <Grid
                    style={{ paddingLeft: 8, paddingRight: 8, paddingTop: 8 }}
                    container
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                >
                    {amenitiesFilters.map((value, index, array) => {
                        var getColor = (index: number): string => {
                            const notSelectedColor = "#ebd4da"
                            const selectedColor = "#96465b"
                            const isSelected = state.selectedAmenitiesIndex == index
                            const color = isSelected ? selectedColor : notSelectedColor
                            return color;
                        }

                        return (
                            <Grid
                                item
                                xs={3}
                                key={index}
                                container
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                                alignContent="center"
                                onClick={() => {
                                    actions.setSelectedAmenitiesTypeIndex(index)
                                }}
                                style={{
                                    cursor: "pointer",
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                <SvgHelper path={value.img} color={getColor(index)} size={36} />
                                <Typography>{value.text}</Typography>
                            </Grid>
                        );
                    })}
                </Grid>
            </Grid>

            {/* Distance */}
            <Grid
                container
                direction="column"
                justifyContent="center"
                style={{
                    backgroundColor: "white",
                    padding: "16px 8px",
                    marginBottom: 8,
                }}
            >
                <Grid container justifyContent="space-between">
                    <Typography variant="body1">
                        Distance from current location
                    </Typography>
                    <Typography variant="body1">{distance}</Typography>
                </Grid>
                <Grid container direction="row" justifyContent="center">
                    <Grid item xs={11}>
                        <Slider color="secondary" onChange={(e, newValue) => {
                            // @ts-ignore
                            setDistance(newValue)
                        }} />
                    </Grid>
                </Grid>
            </Grid>

            {/* Cost */}
            <Grid
                container
                direction="column"
                justifyContent="center"
                style={{
                    backgroundColor: "white",
                    padding: "16px 8px",
                    marginBottom: 8,
                }}
            >
                <Grid container justifyContent="space-between">
                    <Typography variant="body1">Cost</Typography>
                    <Typography variant="body1">{cost}$</Typography>
                </Grid>
                <Grid container direction="row" justifyContent="center">
                    <Grid item xs={11}>
                        <Slider color="secondary" onChange={(e, newValue) => {
                            // @ts-ignore
                            setCost(newValue)
                        }} />
                    </Grid>
                </Grid>
            </Grid>

            <FormControlLabel
                style={{ paddingLeft: 16 }}
                control={
                    <Checkbox
                        checked={false}
                        icon={<SvgHelper path={SvgIcons.circle} color="#d74a74" />}
                        checkedIcon={
                            <SvgHelper path={SvgIcons.circle2} color="#d74a74" />
                        }
                        name="checkedI"
                        onChange={() => {
                            actions.setSnackbarText("Coming soon")
                        }}
                    />
                }
                label="Adjust my scroll to left-handers"
            />

            <Button
                style={{ marginTop: 16, marginBottom: 16 }}
                onClick={() => {
                    actions.showFilterDrawer(false)
                }}
                color="primary"
                variant="contained"
            >
                Apply filter
            </Button>
        </Grid>
    </Drawer >

}

export default DashboardFilterDrawer;