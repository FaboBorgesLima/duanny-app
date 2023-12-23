import React, { FC } from "react";
import "./photosFrame.scss";

interface PhotosFrameProps {
	alt: string;
	link: string;
	desc: string;
}

const PhotosFrame: FC<PhotosFrameProps> = (props) => {
	return (
		<figure className="photos-frame">
			<img src={props.link} alt={props.alt}></img>
			<figcaption>{props.desc}</figcaption>
		</figure>
	);
};

export { PhotosFrame };
