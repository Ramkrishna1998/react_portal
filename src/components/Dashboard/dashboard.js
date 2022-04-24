import react from 'react';
import Header from '../Header/header';
import DashboardView from './dashboardView';

function Dashboard(props) {
    return (
        <div>
            <Header />
            <DashboardView {...props} />
        </div>
    );
}

export default Dashboard;
