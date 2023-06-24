import { TopComponent } from "./sarn/TopComponent";
import { useState } from "react";

interface IProps {
  image: string;
}

const wordExtensionList = [
  "สมหวัง สมปรารถนาจ้าาาาาาาาาาาาาา",
  "จริงพี่ พี่ว่าไง ผมก็ว่างั้น",
  "เคฮ้าฟฟฟฟฟฟฟฟฟฟฟฟฟ ฟู่วววววววววววววว",
  "เนื่องจากคุณมีพฤติกรรมเกียนที่มากเกินไป คำขอของคุณถูกปฎิเสธ ฮือออออออออออออออออออออ",
];

export const SarnJaoTRUE = (props: IProps) => {
  const [wish, setWish] = useState("ขอให้ PETEZA เลิกมีพฤติกรรมเกียน❓");

  function handleSetWish(e: any) {
    setWish(e.target.value);
    console.log(wish);
  }

  function handleMakeWish(e: any) {
    const state = Math.floor(Math.random() * 3);
    if (state === 0) {
      alert(
        wish +
          "\n--------------------------------------\n" +
          wordExtensionList[
            Math.floor(wordExtensionList.length * Math.random())
          ]
      );
    } else {
      window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    }
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
            <div className="flex flex-row justify-center">
              <img
                src="/sarnjao/sarn-component/pole-default.png"
                className=""
              />
              <div>
                <div className="flex justify-center">
                  <img
                    src={`/sarnjao/god/${props.image}`}
                    style={{
                      height: "500px",
                    }}
                  />
                </div>
                <img
                  src="/sarnjao/sarn-component/bottom.jpg"
                  width="500"
                  className=""
                />
              </div>
              <img src="/sarnjao/sarn-component/pole-flip.png" className="" />
            </div>
            <img
              className="mt-2"
              src="/sarnjao/sarn-component/table.png"
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
