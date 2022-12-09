import * as React from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import { Skeleton } from "@mui/material";
import "./Map.css";

export default function Home() {
	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: process.env.REACT_APP_API_KEY,
	});

	if (!isLoaded) {
		return <Skeleton />;
	}
}
