import sitemap from "../Assets/Sitemap.png"

const Sitemap = () => {
    return (
        <div className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
            <div className="text-center">
                <img src={sitemap} alt="Sitemap" className="img-fluid rounded" style={{ maxWidth: '80%' }} />
            </div>
        </div>
    )
}

export default Sitemap;
