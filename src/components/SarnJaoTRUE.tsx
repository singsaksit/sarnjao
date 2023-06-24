import { TopComponent } from "./sarn/TopComponent";
import { useEffect, useState } from "react";

import { god } from "./god";

export const SarnJaoTRUE = () => {
  const [wish, setWish] = useState("มีพฤติกรรมเกียน❓");
  const [godPath, setGodPath] = useState("");

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

  return (
    <div className="w-full min-h-screen">
      <div className="w-full h-full bg-red-300">
        <div className="flex justify-center">
          <TopComponent />
        </div>
        {/* App Section */}
        <div className="h-full w-full flex justify-center mt-32">
          <div className="flex flex-col">
            <div className="flex flex-row justify-center">
              <img src="sarn-component/pole-default.png" className="" />
              <div>
                <div className="flex justify-center">
                  <img
                    src={godPath}
                    style={{
                      height: "500px",
                    }}
                  />
                </div>
                <img src="sarn-component/bottom.jpg" width="500" className="" />
              </div>
              <img src="sarn-component/pole-flip.png" className="" />
            </div>
            <div className="flex flex-row justify-center">
              <img src="sarn-component/fetish-1.png" width="190" className="" />
              <img src="sarn-component/fetish-2.png" width="190" className="" />
            </div>
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
              className="text-lg rounded-lg bg-red-100"
              id="wish-area"
              // title="?"
            />
            <button
              onClick={handleMakeWish}
              className="mt-3 p-3 bg-slate-400 font-bold rounded-lg">
              <p className="text-xl">Make a Wish❓</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
