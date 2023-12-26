import React, { FC } from "react";
import { PhotosFrame } from "../../components";

class CustomArray extends Array<string> {
	public randomItem() {
		return this[Math.floor(Math.random() * this.length)];
	}
}

function randomDescGenerator(): string {
	const part1: CustomArray = new CustomArray(),
		part2: CustomArray = new CustomArray(),
		part3: CustomArray = new CustomArray();

	part1.push("Duanny", "Ayka", "Aika", "Aica", "Duany");

	part2.push("incrivelmente", "maravilhosamente", "majestosamente");

	part3.push("incrivel", "maravilhosa", "veterinaria", "Ayka");

	return [part1.randomItem(), part2.randomItem(), part3.randomItem()].join(" ");
}

const PhotosPage: FC = () => {
	const photosLinks: string[] = [];

	for (let i: number = 0; i < 7; i++) {
		photosLinks.push("./img/duanny/" + i + ".jpeg");
	}

	return (
		<>
			<div className="grid-split-on-lg g-1">
				{photosLinks.map((link) => {
					return (
						<PhotosFrame
							key={link}
							alt="Duanny"
							desc={randomDescGenerator()}
							link={link}></PhotosFrame>
					);
				})}
			</div>
		</>
	);
};

export { PhotosPage };
