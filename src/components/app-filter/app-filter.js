import './app-filter.css';

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button
                className="btn btn-light"
                type="button">
                    All Employees
            </button>
            <button
                className="btn btn-outline-light"
                type="button">
                    Topping
            </button>
            <button
                className="btn btn-outline-light"
                type="button">
                    over 1k sallary
            </button>
        </div>
    )
}

export default AppFilter;