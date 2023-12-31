import { FC } from "react";
import { MainPages } from "../App";
import { GamesPage, HomePage, PhotosPage } from "../pages/";

interface RouterProps {
	page: MainPages;
}

const CustomRouter: FC<RouterProps> = (data) => {
	switch (data.page) {
		case "Home":
			return <HomePage></HomePage>;
		case "Photos":
			return <PhotosPage></PhotosPage>;
		case "Games":
			return <GamesPage></GamesPage>;
	}

	return <HomePage></HomePage>;
};

export { CustomRouter };
