import './app-info.css';

const AppInfo = ({increased, employees}) => {
    return (
        <div className="app-info">
            <h1>List of Employees in company</h1>
            <h2>Emloyees count : {employees}</h2>
            <h2>Extra money to :{increased}</h2>
        </div>
    )
}

export default AppInfo;