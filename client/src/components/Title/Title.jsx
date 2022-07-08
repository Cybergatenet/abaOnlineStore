import "../../components/Title/Title.css"
import Search from "../../components/Search/Search"


const Title = ({ titleName }) => {
  return (
    <div className="title">
      <div className="container d-flex justify-content-between mt-2">
        <p><b>{titleName}</b></p>
        <p>See all</p>
      </div>
    </div>
  )
}


export default Title