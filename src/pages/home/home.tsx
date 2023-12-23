import React, { FC } from "react";
import { Section } from "../../components";

const HomePage: FC = () => {
	return (
		<>
			<div className="grid-split-on-lg g-1">
				<Section title="Para quem é este site?">
					<p>
						Esse site foi feito para uma pessoa muito especial chamada
						Duanny(Ayka).
					</p>
				</Section>
				<Section title="O que esse site tem?">
					<p>
						Pela falta de criatividade do desenvolvedor (Flávio) esse site tem
						somente algumas fotos e um jogo.
					</p>
					<p>Caso tenha alguma sugestão entre em contato com ele.</p>
				</Section>
			</div>
		</>
	);
};

export { HomePage };
