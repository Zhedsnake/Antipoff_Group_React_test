import React from 'react';
import StaffListItem from "./StaffListItem";

const StaffLIst = ({staff}) => {
    return (
        <div className="app__users">
            <div className="app__users-container">
                <ul className="app__users-list">
                    {staff.map((s) => (
                        <StaffListItem key={s.id} s={s} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default StaffLIst;