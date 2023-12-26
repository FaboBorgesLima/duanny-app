import { FC, useEffect, useState } from "react";
import "./aykaClicker.scss";
import {
	ClickerStruct,
	StructsAykaClickerInterface,
} from "../../components/clickerStruct/clickerStruct";
import { ClickCounter } from "../../components";
import MangaImg from "../../img/games/manga.jpeg";
import GeincheinImg from "../../img/games/geinchein.jpeg";
import CachorroImg from "../../img/games/cachorro.jpeg";
import ClinicaImg from "../../img/games/clinica_veterinaria.jpeg";

const AykaClicker: FC = () => {
	const [schema, setSchema] = useState(load()),
		[counter, setCounter] = useState(schema.aykas),
		[perSecond, setPerSecond] = useState(sumGeneration(schema.structs));

	useEffect(() => {
		const time: number = 200;

		const interval = setInterval(() => {
			const add = counter + perSecond * (time / 1000);
			setCounter(add);
			schema.aykas = add;
			setSchema(schema);
			save(schema);
		}, time);
		return () => clearInterval(interval);
	});

	return (
		<>
			<div id="clicker-head">
				<ClickCounter
					count={counter}
					perSecond={perSecond}
					perClick={1 + perSecond * 0.1}></ClickCounter>
				<div className="button-div">
					<button
						onClick={() => {
							schema.aykas += 1 + perSecond * 0.1;
							setCounter(schema.aykas);
							setSchema(schema);
							save(schema);
						}}></button>
				</div>
			</div>
			<div className="grid-split-on-lg g-1">
				{schema.structs.map((struct) => (
					<ClickerStruct
						key={struct.name}
						struct={struct}
						counter={counter}
						setCounter={setCounter}
						schema={schema}
						setSchema={setSchema}
						perSecond={perSecond}
						setPerSecond={setPerSecond}
						save={save}></ClickerStruct>
				))}
			</div>
		</>
	);
};

function save(schema: AykaClickerSchema): void {
	localStorage.setItem("AykaClicker", JSON.stringify(schema));
}

function sumGeneration(structs: StructsAykaClickerInterface[]): number {
	let sum: number = 0;

	for (let i: number = 0; i < structs.length; i++)
		sum += structs[i].quant * structs[i].generationPerSecond;

	return sum;
}

function load(): AykaClickerSchema {
	const storage = localStorage.getItem("AykaClicker");

	if (!storage) return initialSetup;

	return JSON.parse(storage);
}

const initialSetup: AykaClickerSchema = {
	aykas: 0,
	perClick: 1,
	structs: [
		{
			name: "Manga",
			quant: 0,
			generationPerSecond: 1,
			price: 10,
			description: "Manga de 'coletor contra coletor'",
			pathIcon: MangaImg,
		},
		{
			name: "geinchein",
			quant: 0,
			generationPerSecond: 2,
			price: 100,
			description: "Um jogo sobre anime e pesca",
			pathIcon: GeincheinImg,
		},
		{
			name: "Cachorro",
			quant: 0,
			generationPerSecond: 10,
			price: 10000,
			description: "Um cachorro muito fofo",
			pathIcon: CachorroImg,
		},
		{
			name: "clinica veterinaria",
			quant: 0,
			generationPerSecond: 1000,
			price: 100000000,
			description: "Uma clinica com varios cachorros",
			pathIcon: ClinicaImg,
		},
	],
	timeStamp: new Date().getTime(),
};

export interface AykaClickerSchema {
	aykas: number;
	structs: StructsAykaClickerInterface[];
	timeStamp: number;
	perClick: number;
}

export { AykaClicker };
