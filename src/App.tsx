/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";

type DataType = {
  [key: string]: {
    [key: string]: string | number;
  };
};

const App = () => {
  const [data, setData] = useState<DataType>({
    aspek_penilaian_1: {},
    aspek_penilaian_2: {},
    aspek_penilaian_3: {},
    aspek_penilaian_4: {},
  });
  const [DisplayJson, setDisplayJson] = useState("");

  const handleSelectChange = (
    aspek: string,
    mahasiswa: string,
    value: string,
  ) => {
    setData((prevNilai) => ({
      ...prevNilai,
      [aspek]: {
        ...prevNilai[aspek],
        [mahasiswa]: parseInt(value),
      },
    }));
  };

  const handleSubmit = () => {
    const SavedData = JSON.stringify(data, null, 2);
    console.log(SavedData);
    setDisplayJson(SavedData);
  };

  return (
    <div className="flex flex-col">
      <h1 className="my-5 text-center text-4xl">
        Aplikasi Penilaian Mahasiswa
      </h1>
      <div className="mt-8 flex justify-between gap-[6rem] pe-[4rem] ps-[21rem] text-center text-3xl">
        <h1>Aspek Penilaian 1</h1>
        <h1>Aspek Penilaian 2</h1>
        <h1>Aspek Penilaian 3</h1>
        <h1>Aspek Penilaian 4</h1>
      </div>
      <div className="flex flex-col gap-[10px] p-[1rem] ">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="grid grid-cols-5 items-center rounded-xl border border-gray-500 py-[16px]"
          >
            <div className="flex">
              <img src={"/user.png"} alt="" width={70} className="me-4 ps-5" />
              <h3 className="self-center text-2xl">Mahasiswa {index + 1}</h3>
            </div>
            {[...Array(4)].map((_, idx) => (
              <select
                className="mx-[3rem] rounded border border-gray-500 focus:border-green-500 focus:shadow-lg  focus:shadow-green-500 focus:outline-none"
                key={idx}
                onChange={(e) =>
                  handleSelectChange(
                    `aspek_penilaian_${idx + 1}`,
                    `mahasiswa_${index + 1}`,
                    e.target.value,
                  )
                }
              >
                {[...Array(10)].map((_, j) => (
                  <option key={j} value={j + 1}>
                    {j + 1}
                  </option>
                ))}
              </select>
            ))}
          </div>
        ))}
        <button
          className="my-5 w-[9%] self-end rounded-xl border bg-black px-5 py-2 text-white transition-all duration-500 active:bg-green-500"
          onClick={handleSubmit}
        >
          Simpan
        </button>
        <div
          style={{ whiteSpace: "pre-wrap" }}
          className="container mx-auto mt-[3rem] max-w-xs"
        >
          <div className="bg-black">
            <code className="bg-black text-white">{DisplayJson}</code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
