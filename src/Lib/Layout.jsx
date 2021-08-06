import React from 'react';
import {GridSystem} from "./Grid";
import {AppBar} from "../Components/EnterComponents/AppBar";
import {Categories} from "../Components/EnterComponents/Categories";
import {Search} from "../Components/EnterComponents/Search";
import {Content} from "../Components/EnterComponents/Content";

export const Layout = () => {
    return (
        <GridSystem.Grid height={'100vh'}>
            <GridSystem.Cell areaCol={[1, -1]} areaCol952={[1, -1]} areaCol576={[1, -1]}
                             alignItems={'flex-start'}>
                <GridSystem.Line height={"64px"}>
                    <GridSystem.Cell areaCol={[1, -1]}>
                        <AppBar/>
                    </GridSystem.Cell>
                </GridSystem.Line>
                <GridSystem.Line height={"100%"} width={"100%"}>
                    <GridSystem.Cell zIndex={2} zIndex952={2} zIndex576={2} areaCol={[1, 4]}
                                     areaCol952={[1, 5]} areaCol576={[1, -1]} areaRow={[1, 2]}
                                     areaRow952={[1, 2]} areaRow576={[1, 2]}>
                        <Categories/>

                    </GridSystem.Cell>
                    <GridSystem.Cell zIndex={3} zIndex952={3} zIndex576={3}
                                     areaCol={[4, 7]} areaCol952={[1, 5]} areaCol576={[1, -1]}
                                     areaRow={[1, 2]} areaRow952={[1, 2]} areaRow576={[1, 2]}>
                        <Search/>

                    </GridSystem.Cell>
                    <GridSystem.Cell zIndex={1} zIndex952={1} zIndex576={1}
                                     areaCol={[7, 13]} areaCol952={[5, 13]} areaCol576={[1, -1]}
                                     areaRow={[1, 2]} areaRow952={[1, 2]} areaRow576={[1, 2]}>
                        <Content/>
                    </GridSystem.Cell>
                </GridSystem.Line>
            </GridSystem.Cell>

        </GridSystem.Grid>
    );
};

