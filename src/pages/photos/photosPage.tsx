import Reacr, { FC } from "react";
import { PhotosFrame } from "../../components";

function randomDescGenerator(): string {
	let msg: string = "Duanny ";
	const nParts: number = 3,
		part1: number = Math.trunc(Math.random() * nParts),
		part2: number = Math.trunc(Math.random() * nParts);

	switch (part1) {
		case 0:
			msg += "incrivelmente ";
			break;
		case 1:
			msg += "maravilhosamente ";
			break;
		case 2:
			msg += "estupendamente ";
	}

	switch (part2) {
		case 0:
			msg += "incrivel ";
			break;
		case 1:
			msg += "marvilhosa ";
			break;
		case 2:
			msg += "veterinaria ";
			break;
	}

	return msg;
}

const PhotosPage: FC = () => {
	const photosLinks: string[] = [];

	for (let i: number = 0; i < 5; i++) {
		photosLinks.push("./img/duanny/" + i + ".jpeg");
	}

	return (
		<>
			<div className="grid-split-on-lg g-1">
				{photosLinks.map((link) => {
					return (
						<PhotosFrame
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
