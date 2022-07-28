import * as React from "react";

const lookup_data = require("./data/lookup.json");

const num2Str_month = {
  1: "ജനുവരി",
  2: "ഫെബ്രുവരി",
  3: "മാർച്ച്",
  4: "ഏപ്രിൽ",
  5: "മെയ്",
  6: "ജൂൺ",
  7: "ജൂലായ്",
  8: "ആഗസ്റ്റ്",
  9: "സെപ്‌റ്റംബർ",
  10: "ഒക്ടോബർ",
  11: "നവംബർ",
  12: "ഡിസംബർ",
};

const addEntry = (obj, key, val) => {
  if (typeof obj[key] == "undefined") obj[key] = [];
  if (!obj[key].includes(val)) obj[key].push(val);
};

const createDirectory = () => {
  let ynm = {};
  let ymnd = {};
  let ymdnt = {};
  let ymdntime = {};

  lookup_data.forEach((entry) => {
    const y = entry.year;
    const ym = entry.year + "" + entry.month;
    const ymd = "" + entry.year + entry.month + entry.day;

    addEntry(ynm, y, entry.month);
    addEntry(ymnd, ym, entry.day);
    addEntry(ymdnt, ymd, entry.title);
    addEntry(ymdntime, ymd, entry.time.replace(":", ""));
  });

  return [ynm, ymnd, ymdnt, ymdntime];
};

function LoadIndex() {
  const values = createDirectory();
  let ynm = values[0];
  let ymnd = values[1];
  let ymdnt = values[2];
  let ymdntime = values[3];

  const years = Object.keys(ynm).reverse();
  let outerDetails = [];
  years.forEach((year) => {
    outerDetails.push(
      <details key={year}>
        <summary>{year}</summary>
        <ul style={{ listStyleType: "none" }}>
          {ynm[year].map((month) => {
            // get the number of entries for a month
            let numEntries = 0;
            ymnd[year + "" + month].forEach((day) => {
              let ymd = "" + year + month + day;
              numEntries += ymdnt[ymd].length;
            });
            // --------
            return (
              <li key={year + "" + month}>
                <details>
                  <summary>
                    {num2Str_month[month] + " (" + numEntries + ")"}
                  </summary>
                  <ul style={{ listStyleType: "none" }}>
                    {ymnd[year + "" + month].map((day) => {
                      let ymd = "" + year + month + day;
                      return (
                        <li key={ymd}>
                          <ul style={{ listStyleType: "none" }}>
                            {ymdnt[ymd].map((title, idx) => {
                              return (
                                <li key={ymd + "" + idx}>
                                  <a href={"#" + ymd + ymdntime[ymd][idx]}>
                                    {day}/{month} - {title}
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        </li>
                      );
                    })}
                  </ul>
                </details>
              </li>
            );
          })}
        </ul>
      </details>
    );
  });

  return (
    <ul className="toc-container">
      {outerDetails}
      <details className="index">
        <summary>ചവറ്റുകുട്ട</summary>
        <ul>
          <li>
            <a href="#songs">പാട്ടുകൾ</a>
          </li>
        </ul>
      </details>
    </ul>
  );
}
export default LoadIndex;
