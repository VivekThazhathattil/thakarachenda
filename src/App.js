import TinDrum from './data/tin-drum.js'

const data = require('./data/entries.json');
const songs = require('./data/songs.json');

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

function App() {
  return (
    <div className="App">
		<LoadTitle />
		<LoadIndex />
		<LoadData />
		<LoadSongData />
    </div>
  );
}

const LoadTitle = () =>{
	return (
		<>
			<h1>തകരച്ചെണ്ട</h1>
			<div className="half_half">
				<h5 className="subtitle">"അറിയാത്ത അത്ഭുതങ്ങളെ ഗർഭത്തിൽ വഹിക്കുന്ന മഹാസമുദ്രങ്ങളെക്കാൾ അറിയുന്ന നിളാനദിയെയാണ് എനിക്ക് ഇഷ്ടം" - എം ടി  വാസുദേവൻ നായർ</h5>
				<TinDrum className="tin_drum" />
			</div>
		</>
	);
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

	//console.log(ynm);
	//console.log(ymnd);
	//console.log(ymdnt);

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
	years.map( (year) =>{
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

function LoadData(){
	return(
		<>
		{
			data.map( (entry) =>{
				return <AssembleBlogDetails key={entry.id} {...entry} />
			})
		}
		</>
	);
}

function LoadSongData(){
	return(
		<>
		<h3 id="songs">പാട്ടുകൾ</h3>
		<p>ഒരുപാട് കേൾക്കുമ്പോൾ ഞാൻ എന്റെ playlist-ൽ ഉള്ള പാട്ടുകൾ ഒക്കെ delete ചെയ്യും. എന്നിട്ട് ഇതുവരെ കേൾക്കാത്തതൊക്കെ തിരഞ്ഞു പിടിച്ച്‌ കേൾക്കും. ഒരിക്കൽ delete ചെയ്തുകഴിഞ്ഞ പാട്ട് പിന്നെ ആകസ്മികമായി തിരിച്ചു വരാറുണ്ട്. ഒരു പഴയ സുഹൃത്തിനെ പോലെ കണ്ട്, ലോഗ്യമൊക്കെ ചോദിച്ച് ഞാൻ അവന് പറയാനുള്ളത് വീണ്ടും കേൾക്കും. Unlike ചെയ്ത് delete ചെയ്യുന്നതിന് മുൻപ് ഞാൻ അവരുടെ പേരൊക്കെ ഇവിടെ ചേർക്കും. കാലം കുറെ കഴിയുമ്പോൾ അവരെയൊക്കെ വീണ്ടും വിളിച്ചു സൽക്കരിക്കാലോ.</p>
		<ul>
		{
			songs.map( (song, idx) =>{
				return <li key={idx}><a href={song.address} target="_blank">{song.name + " - " + song.artist}</a></li>
			})	
		}
		</ul>
		</>
	)
}

const getTag = (y, m, d, t) =>{
	return "" + y + m + d + t.replace(':','');
}

function AssembleBlogDetails({year, month, day, time, title, text}){
	const tag = getTag(year, month, day, time);
	return(
		<>
		<h3 id={tag}>{day}/{month}/{year} - {time} - {title}</h3>
		<MakeParagraphs text={text}/>
		</>
	);
}

function MakeParagraphs({text}){
	return (
		<>
		{
			text.map( (para, idx) =>{
				return <p key={idx}>{para}</p>
			})
		}
		</>
	);
}

export default App;
