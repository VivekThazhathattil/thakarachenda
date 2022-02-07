import TinDrum from './data/tin-drum'
import Horsey from './data/horsey'

import LoadIndex from './toc';
import ScrollTop from "react-scrolltop-button";
import Stats from './stats';

import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { 
	plainTheme,
	cherryTheme,
	darkTheme,
	paperTheme,
	amoledTheme,
	greenTheme,
	GlobalStyles
} from './themes';

const data = require('./data/entries.json');
const songs = require('./data/songs.json');
const progLang = require('./data/stats.json');

const StyledApp = styled.div``;

function App() {

	const [theme, setTheme] = useState("paper");

	const themeToggler = (themeString) =>{
		switch(themeString){
			case "plain":
				setTheme("plain");
				break;
			case "paper":
				setTheme("paper");
				break;
			case "cherry":
				setTheme("cherry");
				break;
			case "green":
				setTheme("green");
				break;
			case "dark":
				setTheme("dark");
				break;
			case "amoled":
				setTheme("amoled");
				break;
			default:
				setTheme("paper");
		}
	};

	const applyTheme = () =>{
		switch(theme){
			case "plain":
				return plainTheme;
			case "paper":
				return paperTheme;
			case "cherry":
				return cherryTheme;
			case "green":
				return greenTheme;
			case "dark":
				return darkTheme;
			case "amoled":
				return amoledTheme;
			default:
				return darkTheme;
		}
	}

  return (
		<ThemeProvider theme={() => applyTheme()}>
			<GlobalStyles />
    	<StyledApp className="App">
				<button className="color-icon" style={{background: '#7B5537', borderColor: 'white'}} onClick={() => themeToggler('paper')} />
				<button className="color-icon" style={{background: '#e6e6e6', borderColor: 'white'}} onClick={() => themeToggler('plain')} />
				<button className="color-icon" style={{background: '#cc0022', borderColor: 'white'}} onClick={() => themeToggler('cherry')} />
				<button className="color-icon" style={{background: '#2F5233', borderColor: 'white'}} onClick={() => themeToggler('green')} />
				<button className="color-icon" style={{background: '#00ADB5', borderColor: 'white'}} onClick={() => themeToggler('dark')} />
				<button className="color-icon" style={{background: '#808080', borderColor: 'white'}} onClick={() => themeToggler('amoled')} />
			<	LoadTitle />
			<	Stats stats={progLang}/>
			<	LoadIndex />
			<	LoadData />
			<	LoadSongData />
			<	ScrollTop text="^" />
    	</StyledApp>
		</ThemeProvider>
  );
}

const LoadTitle = () =>{
	return (
		<>
			<h1>തകരച്ചെണ്ട</h1>
			<div className="half_half">
				<h5 className="subtitle">"അറിയാത്ത അത്ഭുതങ്ങളെ ഗർഭത്തിൽ വഹിക്കുന്ന മഹാസമുദ്രങ്ങളെക്കാൾ അറിയുന്ന നിളാനദിയെയാണ് എനിക്ക് ഇഷ്ടം" - എം ടി  വാസുദേവൻ നായർ</h5>
				<TinDrum className="tin-drum" />
			</div>
		</>
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
		<div className="grid-container">
		{
			songs.map( (song, idx) =>{
				return (
					<div className="song-container" key={idx}>
						<h3>
						<a className="no-style" href={song.address} target="_blank" rel="noreferrer">
						{song.name}						
						</a>
						</h3>
						<hr />
						<h4>
						{song.artist}
						</h4>
					</div>
				);
			})	
		}
		</div>
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

function ImagesElement({imgKey}){
	const srcAlt = imgKey.split('_');
	if (imgKey === "horsey")
		return <Horsey />
	else
		return <img src={"/images/" + srcAlt[0]} alt={srcAlt[1]} />
}

function PreElement({str}){
		return <pre>{str.replaceAll('_', '\n')}</pre>
}

function MakeParagraphs({text}){
	return (
		<>
		{
			text.map( (para, idx) =>{
				if(para[0] !== '!'){
					return <p key={idx}>{para}</p>
				}
				else{
					const tagName = para.substring(1,4);
					const feedString = para.substring(5,);
					switch(tagName){
						case "IMG":
							return <ImagesElement key={idx} imgKey={feedString} />
						case "PRE":
							return <PreElement key={idx} str={feedString} />
						case "COD":
							return <code key={idx}>{feedString}</code>
						case "HED":
							return <h3 key={idx}><u>{feedString}</u></h3>
						case "LNK":
							const splitString = para.split("^");
							return <a key={idx} href={splitString[1]} target="_blank" rel="noreferrer">{splitString[2]}</a>
						case "QUE":
							const splitStr = feedString.split("_");
							return (
								<details key={idx}>
									<summary>{splitStr[0]}</summary>
									<i><u>{splitStr[1]}</u></i>
								</details>
							);
						default:
							return <p></p>
					}
				}
			})
		}
		</>
	);
}

export default App;
