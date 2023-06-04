import React from "react";
import { useIcon } from "../../hooks/useIcon";
import ButtonSecondary from "../Buttons/ButtonSecondary";

function Paginate({ rows, setPage, loading, ...props }) {
  const { ArrowBack, ArrowForward } = useIcon();
  return (
    <>
      {rows?.length > 0 && (
        <div className="flex items-center justify-between pb-4 md:py-4 text-sm font-semibold">
          <div className="md:pl-4">
            Halaman{" "}
            <span className="text-slate-400">{props.meta.current_page}</span>{" "}
            dari <span className="text-slate-400">{props.meta.last_page}</span>
          </div>
          <div>
            <ButtonSecondary
              disabled={loading || props.meta.current_page <= 1}
              type="button"
              onClick={() => {
                setPage(props.meta.current_page - 1);
              }}
            >
              <ArrowBack /> Prev
            </ButtonSecondary>
            <ButtonSecondary
              className="ml-3"
              disabled={
                loading || props.meta.current_page === props.meta.last_page
              }
              type="button"
              onClick={() => {
                setPage(props.meta.current_page + 1);
              }}
            >
              Next <ArrowForward />
            </ButtonSecondary>
          </div>
        </div>
      )}
    </>
  );
}

export default Paginate;
