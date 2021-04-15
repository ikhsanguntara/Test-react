import React from "react";

import RenderProducts from "parts/services/RenderItem";

export default function Index(props) {
  return (
    <>
      {props.data?.length > 0 ? (
        props.data.map((item, index) => {
          return <RenderProducts item={item} key={index}></RenderProducts>;
        })
      ) : (
        <div className="w-full text-center pt-24">No Item Found</div>
      )}
    </>
  );
}
