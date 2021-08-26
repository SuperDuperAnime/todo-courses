import React, { useEffect, useRef } from "react";
import { Results } from "./Results";
import { observer } from "mobx-react-lite";
import { paginationStore } from "../../store/pagination";
import LayoutStore from "../../store/LayoutStore";
import store from "../../store/store";

interface ResultsContainerProp {
  children?: React.ReactNode;
}

export const ResultsContainer = observer(
  ({ children }: ResultsContainerProp) => {
    const toResultRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      toResultRef.current?.scrollTo(0, 0);
    }, [LayoutStore.categoryView]);

    function scrollResult(e: any) {
      if (
        e.target.scrollHeight -
          (e.target.scrollTop +
            (window.innerHeight - e.target.getBoundingClientRect().top)) <
        100
      ) {
        paginationStore.setFetching(true);
      }
    }
    useEffect(() => {
      if (paginationStore.fetching) {
        if (store.category === 'favorite') {
          paginationStore.setFetching(false);
          return
        }
        paginationStore.startPagination();
      }
    }, [paginationStore.fetching]);
    const resultsTitle = LayoutStore.categoryView;
    //todo поменять с отображения resultsData на конкретные массивы
    let data = store.data;
    return (
      <Results
        resultsTitle={resultsTitle}
        toResultRef={toResultRef}
        scrollResult={scrollResult}
        data={data}
      />
    );
  }
);
