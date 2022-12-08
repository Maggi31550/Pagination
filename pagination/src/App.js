
import 'bootstrap/scss/bootstrap.scss'
import './style.sass';
import FoodComponent from './components/FoodComponents';
import MenuData from './data/MenuData';
import {useState,useEffect} from 'react'


function App() {
	const [foodData, setFoodData] = useState(MenuData);
	const [dataInpage, setDataInpage] = useState([]);
	const [page, setPage] = useState(0);

	const pagination=()=>{
		const foodPerPage = 6
		const pages = Math.ceil(MenuData.length / foodPerPage)
		

		const newFood = Array.from({length:pages},(data,index)=>{
			const start = index * foodPerPage			
			return MenuData.slice(start,start+foodPerPage)
		})

		return newFood
	}

	const handlePage = (index)=>{
		setPage(index)
		
	}

	useEffect(() => {
		const paginate = pagination()
		setDataInpage(paginate)
		setFoodData(paginate[page])

	}, [page]);
	return (
		<div className="page-pagination">
			<div className="container-lg">
				<h1>App</h1>
				<div className="row g-3 mb-3">
					{foodData.map((data,index)=>{
						return <FoodComponent key={index} {...data}/>
					})}
				</div>
				<nav>
					<ul className="pagination">
						{dataInpage.map((data,index)=>{
							return (
								<li className="page-item" key={index}>
									<button 
										className={`page-link ${index ===page ? 'active' : ''}`}
										type='button' 
										onClick={()=>handlePage(index)} >{index+1}
									
									</button>
								</li>
							)
						})}
					</ul>
				</nav>
			</div>
			 
		</div>
	);
}

export default App;
