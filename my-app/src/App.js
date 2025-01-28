import "./App.css";
import { Chart } from "react-google-charts";

function App() {
	const data = [
		["Расходы", "Тысяч рублей"],
		["Продукты", 10000],
		["Транспорт", 5000],
		["Здоровье", 7000],
		["Развлечения", 10000],
		["Подарки", 5000],
	];

	const options = {
		title: "Мои ежемесячные расходы",
	};
	return (
		<Chart
			chartType="PieChart"
			data={data}
			options={options}
			width={"100%"}
			height={"400px"}
		/>
	);
}

export default App;
