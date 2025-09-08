"use client";
import useFetch from "@/components/useFetch";
import React from "react";
import rise from "@/public/rise.png";
import fall from "@/public/fall.png";

export default function CryptoDetails({ id }) {
  const options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  const { data, loading, error } = useFetch(
    `https://api.coingecko.com/api/v3/coins/${id}`
  );
  console.log(data);

  function formatCompact(number, locale = "en-US") {
    const formatter = new Intl.NumberFormat(locale, {
      notation: "compact",
      compactDisplay: "short",
      maximumFractionDigits: 2,
    });
    return formatter.format(number).toLowerCase();
  }

  return (
    <div>
      {!loading && (
        <div>
          <div className=" max-w-[350px] lg:max-w-none lg:w-full mx-auto border border-gray-200 px-2 lg:px-5 py-5 rounded-lg">
            <div className=" flex items-center justify-between">
              <div className=" flex items-center gap-x-2 ">
                <img
                  src={data.image.small}
                  alt={data.name + " image"}
                  className=" w-[50px] h-[50px] object-cover"
                />
                <div>
                  <p className=" font-medium">{data.name}</p>
                  <p className=" uppercase text-gray-400 font-medium">
                    {data.symbol}
                  </p>
                </div>
              </div>
              <div>
                <p className=" font-semibold">
                  $
                  {data.market_data.current_price.usd.toLocaleString(
                    "en",
                    options
                  )}
                </p>
                <div className=" flex items-center justify-end">
                  <img
                    src={
                      data.market_data.price_change_percentage_24h < 0
                        ? "/fall.png"
                        : "/rise.png"
                    }
                    className=" w-3 h-3 inline"
                    alt=" arrow indicator image"
                  />
                  <p
                    className={` font-medium ${
                      data.market_data.price_change_percentage_24h < 0
                        ? "text-red-600"
                        : " text-primary"
                    }`}
                  >
                    {" "}
                    {data.market_data.price_change_percentage_24h == null
                      ? "0%"
                      : data.market_data.price_change_percentage_24h < 0
                      ? data.market_data.price_change_percentage_24h
                          .toFixed(2)
                          .substring(1) + "%"
                      : data.market_data.price_change_percentage_24h.toFixed(
                          2
                        ) + "%"}
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex gap-x-2 mt-6">
              <div className=" border border-gray-200 py-2 w-1/2 text-center rounded-lg">
                <p className=" text-sm text-gray-400">Market Cap</p>
                <p className=" uppercase font-semibold">
                  ${formatCompact(data.market_data.market_cap.usd)}
                </p>
              </div>
              <div className=" border border-gray-200 py-2 w-1/2 text-center rounded-lg">
                <p className=" text-sm text-gray-400">Total Volume</p>
                <p className=" uppercase font-semibold">
                  ${formatCompact(data.market_data.total_volume.usd)}
                </p>
              </div>
            </div>
            <div className=" flex gap-x-2 mt-3">
              <div className=" border border-gray-200 py-2 w-1/2 text-center rounded-lg">
                <p className=" text-sm text-gray-400">ATH</p>
                <p className=" uppercase font-semibold">
                  ${formatCompact(data.market_data.ath.usd)}
                </p>
              </div>
              <div className=" border border-gray-200 py-2 w-1/2 text-center rounded-lg">
                <p className=" text-sm text-gray-400">ATH Date</p>
                <p className=" uppercase font-semibold">
                  {new Date(data.market_data.ath_date.usd).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className=" flex gap-x-2 mt-3">
              <div className=" border border-gray-200 py-2 w-1/2 text-center rounded-lg">
                <p className=" text-sm text-gray-400">ATL</p>
                <p className=" uppercase font-semibold">
                  ${formatCompact(data.market_data.atl.usd)}
                </p>
              </div>
              <div className=" border border-gray-200 py-2 w-1/2 text-center rounded-lg">
                <p className=" text-sm text-gray-400">ATL Date</p>
                <p className=" uppercase font-semibold">
                  {new Date(data.market_data.atl_date.usd).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className=" border border-gray-200 py-2 w-full text-center rounded-lg mt-3">
              <p className=" text-sm text-gray-400">Total Volume</p>
              <p className=" uppercase font-semibold">
                ${formatCompact(data.market_data.total_volume.usd)}
              </p>
            </div>
          </div>
          {data.description.en !== "" && (
            <div className=" mt-4">
              <h3 className=" font-medium text-2xl pb-2">Description</h3>
              <p>{data.description.en}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
