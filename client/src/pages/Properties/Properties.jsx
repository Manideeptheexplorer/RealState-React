import PropertyCard from '../../components/PropertyCard.jsx/PropertyCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import useProperties from '../../hooks/useProperties';
import './Properties.css';
import {PuffLoader} from 'react-spinners';

const Properties = () => {
  const { data, isError, isLoading } = useProperties();
//   const [filter, setFilter] = useState("");
  if (isError) {
    return (
      <div className="wrapper">
        <span>Error while fetching data</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="wrapper flexCenter" style={{ height: "60vh" }}>
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          color="#4066ff"
          aria-label="puff-loading"
        />
      </div>
    );
  }
  return (
    <div className="wrapper">
      <div className="flexColCenter paddings innerWidth properties-container">
      <SearchBar />

        <div className="paddings flexCenter">
          {
            data.map((card, i)=> (<PropertyCard card={card} key={i}/>))
          }
        </div>
      </div>
    </div>
  );
};

export default Properties;