import { TopComponent } from "./sarn/TopComponent";
import { useEffect, useState } from "react";

import { god } from "./god";

import { Draggable } from "../lib/Draggable";
import { Droppable } from "../lib/Droppable";
import { DndContext } from "@dnd-kit/core";

export const SarnJaoTRUE = () => {
  const [wish, setWish] = useState("ขอให้ PETEZA เลิกมีพฤติกรรมเกียน❓");
  const [godPath, setGodPath] = useState("");
  const [parent, setParent] = useState(null);

  const draggable = (
    <Draggable id="draggable">
      <img
        src="sarn-component/fetish-1.png"
        width="190"
        className="absolute right-10"
      />
    </Draggable>
  );

  useEffect(() => {
    if (godPath === "") {
      setGodPath(god[Math.floor(god.length * Math.random())]);
    }
  }, []);

  function handleSetWish(e: any) {
    setWish(e.target.value);
    console.log(wish);
  }

  function handleMakeWish(e: any) {
    alert(wish);
  }

  function handleDragEnd({ over }: any) {
    setParent(over ? over.id : null);
  }

  return (
    <div className="w-full min-h-screen">
      <div className="w-full h-full bg-red-500">
        <div className="flex justify-center">
          <TopComponent />
        </div>
        {/* App Section */}
        <div className="h-full w-full flex justify-center mt-32">
          <div className="flex flex-col">
            <img
              src={godPath}
              style={{
                height: "500px",
              }}
            />
            <div className="flex flex-row justify-center">
              <img src="sarn-component/fetish-2.png" width="190" className="" />
            </div>
            <DndContext onDragEnd={handleDragEnd}>
              {!parent ? draggable : null}
              <Droppable id="droppable">
                {parent === "droppable" ? draggable : "วางไว้บนโต๊ะที่พี่"}
              </Droppable>
            </DndContext>
            <img
              className="mt-2"
              src="sarn-component/table.png"
              style={{
                height: "250px",
              }}
            />
            <textarea
              value={wish}
              onChange={handleSetWish}
              className="text-lg rounded-lg bg-red-100 p-1"
              id="wish-area"
            />
            <button
              onClick={handleMakeWish}
              className="mt-3 p-3 bg-slate-400 font-bold rounded-lg mb-10">
              <p className="text-xl">Make a Wish❓</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
