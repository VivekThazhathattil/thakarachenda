import * as React from "react"

const data = require('./data/entries.json');

const num2Str_month = {
	"1": "January",
	"2": "February",
	"3": "March",
	"4": "April",
	"5": "May",
	"6": "June",
	"7": "July",
	"8": "August",
	"9": "September",
	"10": "October",
	"11": "November",
	"12": "December"
}

const addEntry = (obj, key, val) => {
	if(typeof obj[key] == "undefined")
		obj[key] = []
	if(!obj[key].includes(val))
		obj[key].push(val);
}

const createDirectory = () =>{
	let ynm = {};
	let ymnd = {};
	let ymdnt = {};
	let ymdntime = {};

	data.forEach( (entry) => {
		const y = entry.year;
		const ym = entry.year + "" + entry.month;
		const ymd = "" + entry.year + entry.month + entry.day;

		addEntry(ynm, y, entry.month);
		addEntry(ymnd, ym, entry.day);
		addEntry(ymdnt, ymd, entry.title);
		addEntry(ymdntime, ymd, entry.time.replace(':',''));
	})

	return [ynm, ymnd, ymdnt, ymdntime];
}

function LoadIndex(){
	const values = createDirectory();
	let ynm = values[0];
	let ymnd = values[1];
	let ymdnt = values[2];
	let ymdntime = values[3];

	const years = Object.keys(ynm).reverse();
	let outerDetails = [];
	years.forEach( (year) =>{
		outerDetails.push(
			<details key={year}>
				<summary>{year}</summary>
				<ul style={{"listStyleType": "none"}}>
					{
						ynm[year].map( (month) =>{
							return(
								<li key={ year + "" + month}>
									<details>
										<summary>{num2Str_month[month]}</summary>
										<ul style={{"listStyleType": "none"}}>
											{
												ymnd[year + "" + month].map( (day) =>{
													let ymd = "" + year + month + day;
													return(
														<li key={ymd}>
															<details>
																<summary>{day}</summary>
																<ul>
																	{
																		ymdnt[ymd].map((title, idx) =>{
																			return(
																				<li key={ymd + "" + idx}>
																					<a href={"#"+ ymd + ymdntime[ymd][idx]}>
																					{title}
																					</a>
																				</li>
																			)
																		})
																	}
																</ul>
															</details>
														</li>
													);
												})
											}
										</ul>
									</details>
								</li>
							);
						})
					}
				</ul>
			</details>
		)
	})
	//console.log(years);

 return (
	 <ul>
		 	{outerDetails}
		 	<details className="index">
			<summary>ചവറ്റുകുട്ട</summary>
			<ul>
			<li><a href="#songs">പാട്ടുകൾ</a></li>
			</ul>
			</details>
	 </ul>
 );
}
export default LoadIndex