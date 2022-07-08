import { useState } from "react"
import SearchCss from "../../components/Search/Search.css"
import Button from "../button/button"


const Search = () => {
  const [search, setSearch] = useState('')
  return (
    <div className="search py-2 ">
        <div className="container d-flex justify-content-end align-items-center px-lg-5">
            <input type="text" placeholder="Search for products" className="text-center py-2 border px-5" onChange={() => setSearch(search)} />
        </div>
    </div>
  )
}

export default Search