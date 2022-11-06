export default function Footer() {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
            <div className="col-md-4 d-flex align-items-center">
                <span className="mb-3 mb-md-0 text-muted">© {new Date().getFullYear()} Company, Inc</span>
            </div>

        </footer>
    );
}