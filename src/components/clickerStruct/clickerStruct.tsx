import { FC, useState } from "react";
import "./clickerStruct.scss";
import { AykaClickerSchema } from "../../pages/aykaClicker/aykaClicker";

interface ClickerStructProps {
	struct: StructsAykaClickerInterface;
	counter: number;
	setCounter: React.Dispatch<React.SetStateAction<number>>;
	schema: AykaClickerSchema;
	setSchema: React.Dispatch<React.SetStateAction<AykaClickerSchema>>;
	perSecond: number;
	setPerSecond: React.Dispatch<React.SetStateAction<number>>;
	save(schema: AykaClickerSchema): void;
}

export interface StructsAykaClickerInterface {
	quant: number;
	generationPerSecond: number;
	price: number;
	name: string;
	description: string;
	pathIcon: string;
}

const ClickerStruct: FC<ClickerStructProps> = (props) => {
	const [quant, setQuant] = useState(props.struct.quant),
		[price, setPrice] = useState(props.struct.price);

	return (
		<div className="clicker-card">
			<img src={props.struct.pathIcon}></img>
			<div>
				<h3>{props.struct.name}</h3>
				<p>{props.struct.description}</p>
			</div>
			<div>
				<div>
					<span className="price">{price.toFixed(1)} aykas</span>
				</div>
				<div>
					<span>
						{quant} {props.struct.name}
					</span>
				</div>
				<div>
					<span>{quant * props.struct.generationPerSecond} aykas/s</span>
				</div>
			</div>
			<div>
				<button
					className="fs-1"
					onClick={() => {
						if (price > props.counter) return;

						setQuant(quant + 1);

						props.setPerSecond(
							props.perSecond + props.struct.generationPerSecond
						);

						props.struct.quant++;

						props.setCounter(props.counter - price);

						props.schema.aykas = props.counter - price;

						props.struct.price = price * 1.1;

						setPrice(price * 1.1);

						props.save(props.schema);

						props.setSchema(props.schema);
					}}>
					+
				</button>
			</div>
		</div>
	);
};

type saveType = (schema: AykaClickerSchema) => void;

export { ClickerStruct };
