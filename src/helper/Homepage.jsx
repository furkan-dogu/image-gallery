import Picture from "../components/Picture"

const Homepage = () => {
  return (
    <div style={{minHeight:"100vh"}}>
        <h1>Image Gallery</h1>
        <div className="pictures">
            <Picture />
        </div>
    </div>
  )
}

export default Homepage